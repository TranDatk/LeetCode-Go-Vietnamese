import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface ColumnsLayoutProps {
  children: React.ReactNode;
}

export function ColumnsLayout({ children }: ColumnsLayoutProps) {
  // If children is an array of column nodes
  if (Array.isArray(children)) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
        {children.map((column: any, index: number) => {
          // If column has children that are markdown nodes, render them
          if (column?.props?.children) {
            return (
              <div key={index} className="prose prose-slate dark:prose-invert max-w-none">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {String(column.props.children)}
                </ReactMarkdown>
              </div>
            );
          }
          return <div key={index}>{column}</div>;
        })}
      </div>
    );
  }

  return <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">{children}</div>;
}

