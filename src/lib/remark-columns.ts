import { visit } from 'unist-util-visit';
import type { Root, Paragraph, Text } from 'mdast';

interface ColumnsNode {
  type: 'columns';
  children: Array<{
    type: 'column';
    children: any[];
  }>;
}

export function remarkColumns() {
  return (tree: Root) => {
    const columnsStack: Array<{ start: number; end?: number }> = [];
    const nodesToRemove: number[] = [];
    const columnsNodes: Array<{ node: ColumnsNode; index: number }> = [];

    // First pass: find all columns shortcodes
    visit(tree, (node: any, index?: number, parent?: any) => {
      if (node.type === 'paragraph') {
        if (typeof index !== 'number') return;
        const text = (node.children[0] as Text)?.value || '';
        
        // Match {{< columns >}}
        if (text.match(/\{\{<\s*columns\s*>\}\}/)) {
          columnsStack.push({ start: index });
          nodesToRemove.push(index);
        }
        
        // Match {{< /columns >}}
        if (text.match(/\{\{<\s*\/columns\s*>\}\}/)) {
          if (columnsStack.length > 0) {
            const last = columnsStack[columnsStack.length - 1];
            last.end = index;
            nodesToRemove.push(index);
            
            // Create columns node
            const columnsNode: ColumnsNode = {
              type: 'columns',
              children: [],
            };
            columnsNodes.push({ node: columnsNode, index: last.start });
          }
        }
        
        // Match <--->
        if (text.match(/^<--->$/)) {
          nodesToRemove.push(index);
        }
      }
    });

    // Second pass: collect content between columns markers
    columnsNodes.forEach(({ node, index }) => {
      const stackItem = columnsStack.find(s => s.start === index);
      if (!stackItem || stackItem.end === undefined) return;

      let currentColumn: any[] = [];
      let inColumn = false;

      for (let i = index + 1; i < stackItem.end; i++) {
        const currentNode = (tree.children as any[])[i];
        
        if (currentNode?.type === 'paragraph') {
          const text = (currentNode.children[0] as Text)?.value || '';
          if (text.match(/^<--->$/)) {
            // End current column, start new one
            if (currentColumn.length > 0) {
              node.children.push({
                type: 'column',
                children: currentColumn,
              });
            }
            currentColumn = [];
            inColumn = true;
            continue;
          }
        }
        
        if (inColumn || node.children.length === 0) {
          currentColumn.push(currentNode);
        }
      }
      
      // Add last column
      if (currentColumn.length > 0) {
        node.children.push({
          type: 'column',
          children: currentColumn,
        });
      }
    });

    // Third pass: replace columns markers with columns nodes
    columnsNodes.reverse().forEach(({ node, index }) => {
      const stackItem = columnsStack.find(s => s.start === index);
      if (!stackItem || stackItem.end === undefined) return;

      // Remove old nodes and insert columns node
      const children = tree.children as any[];
      children.splice(index, stackItem.end - index + 1, node);
    });
  };
}

