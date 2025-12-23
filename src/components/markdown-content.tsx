'use client';

import React from 'react';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { MarkdownColumns } from './markdown-columns';
import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

interface MarkdownContentProps {
  content: string;
  title?: string; // Optional title to remove from content if it appears as first h1
}

interface ContentPart {
  type: 'markdown' | 'columns' | 'katex';
  content?: string;
  columns?: string[];
  katexContent?: string;
  display?: boolean;
}

function sanitizeKatexInput(input: string) {
  // KaTeX strict mode warns on NBSP (U+00A0) which can creep in from copied content.
  // Normalizing it avoids noisy build logs and potential rendering quirks.
  return input.replace(/\u00A0/g, ' ');
}

// Helper function to process text and replace inline katex shortcodes
function processTextWithInlineKatex(text: string): React.ReactNode[] {
  const inlineKatexRegex = /\{\{<\s*katex\s*>\}\}([\s\S]*?)\{\{<\s*\/katex\s*>\}\}/g;
  const parts: React.ReactNode[] = [];
  let lastIndex = 0;
  let match;
  let keyIndex = 0;
  
  while ((match = inlineKatexRegex.exec(text)) !== null) {
    // Add text before katex
    if (match.index > lastIndex) {
      const beforeText = text.slice(lastIndex, match.index);
      if (beforeText) {
        parts.push(beforeText);
      }
    }
    
    // Add katex component
    const katexContent = sanitizeKatexInput(match[1].trim());
    parts.push(<InlineMath key={`katex-inline-${keyIndex++}`} math={katexContent} />);
    
    lastIndex = match.index + match[0].length;
  }
  
  // Add remaining text
  if (lastIndex < text.length) {
    const remaining = text.slice(lastIndex);
    if (remaining) {
      parts.push(remaining);
    }
  }
  
  return parts.length > 0 ? parts : [text];
}

// Preprocess content to handle Hugo shortcodes
function preprocessContent(content: string): ContentPart[] {
  // Convert Hugo relref shortcodes inside markdown links into real app routes.
  // Example:
  //   [Go]({{< relref "/ChapterFour/0001~0099/0011.Container-With-Most-Water.md" >}})
  // becomes:
  //   [Go](/chapter-four/0001~0099/0011.Container-With-Most-Water)
  //
  // This must run BEFORE we strip unknown Hugo shortcodes below, otherwise href becomes empty.
  const toKebabCase = (s: string) =>
    s
      .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
      .replace(/[\s_]+/g, '-')
      .toLowerCase();

  content = content.replace(
    /\{\{<\s*relref\s+"([^"]+)"\s*>\}\}/gi,
    (_match, targetPath: string) => {
      let p = String(targetPath).trim();
      // Normalize Hugo ChapterX prefixes (e.g. /ChapterFour/, /ChapterTwo/) to route slugs (/chapter-four/, /chapter-two/)
      p = p.replace(/^\/Chapter([A-Za-z0-9]+)\//, (_m, chapterName: string) => {
        return `/chapter-${toKebabCase(chapterName)}/`;
      });
      // Remove .md extension because routes are based on slug without extension
      p = p.replace(/\.md$/i, '');
      return p;
    }
  );

  const parts: ContentPart[] = [];
  let lastIndex = 0;
  
  // Combined regex to match both columns and katex shortcodes (both inline and display)
  // Note: This regex matches display katex and columns, inline katex will be handled in markdown rendering
  const shortcodeRegex = /\{\{<\s*(columns|katex\s+display)\s*>\}\}([\s\S]*?)\{\{<\s*\/(?:columns|katex)\s*>\}\}/g;
  
  let match;
  while ((match = shortcodeRegex.exec(content)) !== null) {
    const shortcodeType = match[1].trim();
    const innerContent = match[2].trim();
    
    // Add markdown before shortcode
    if (match.index > lastIndex) {
      const beforeContent = content.slice(lastIndex, match.index);
      if (beforeContent.trim()) {
        parts.push({ type: 'markdown', content: beforeContent });
      }
    }
    
    // Handle different shortcode types
    if (shortcodeType === 'columns') {
      const columnParts = innerContent.split(/<--->/).map(p => p.trim());
      parts.push({
        type: 'columns',
        columns: columnParts.length >= 2 ? columnParts : [innerContent],
      });
    } else if (shortcodeType === 'katex display') {
      parts.push({
        type: 'katex',
        katexContent: innerContent,
        display: true,
      });
    }
    
    lastIndex = match.index + match[0].length;
  }
  
  // Add remaining markdown
  if (lastIndex < content.length) {
    let remaining = content.slice(lastIndex);
    // Remove other Hugo shortcodes that weren't matched (but keep inline katex for processing)
    remaining = remaining.replace(/\{\{<\s*(?!katex\s*>)[^>]+\s*>\}\}/g, '');
    remaining = remaining.replace(/\{\{<\s*\/(?!katex\s*>)[^>]+\s*>\}\}/g, '');
    if (remaining.trim()) {
      parts.push({ type: 'markdown', content: remaining });
    }
  }
  
  // If no shortcodes found, return entire content as markdown
  if (parts.length === 0) {
    let processed = content;
    processed = processed.replace(/\{\{<\s*(?!katex\s*>)[^>]+\s*>\}\}/g, '');
    processed = processed.replace(/\{\{<\s*\/(?!katex\s*>)[^>]+\s*>\}\}/g, '');
    return [{ type: 'markdown', content: processed }];
  }
  
  return parts;
}

export function MarkdownContent({ content, title }: MarkdownContentProps) {
  // Remove first h1 if it matches the title
  let processedContent = content;
  if (title) {
    // Normalize title: remove number prefixes like "1.1 ", "1.2.3 ", etc.
    const normalizedTitle = title.replace(/^\d+(\.\d+)*\s+/, '').trim();
    
    // Find first h1 in content
    const firstH1Match = processedContent.match(/^#\s+(.+?)(?:\s*$)/m);
    if (firstH1Match) {
      const h1Text = firstH1Match[1].trim();
      const normalizedH1 = h1Text.replace(/^\d+(\.\d+)*\s+/, '').trim();
      
      // Check if h1 matches title (exact or normalized, or if one contains the other)
      const isMatch = 
        h1Text === title ||
        h1Text === normalizedTitle ||
        normalizedH1 === normalizedTitle ||
        normalizedH1 === title ||
        title.includes(h1Text) ||
        title.includes(normalizedH1) ||
        h1Text.includes(normalizedTitle) ||
        normalizedH1.includes(normalizedTitle);
      
      if (isMatch) {
        // Remove the first h1 line
        processedContent = processedContent.replace(/^#\s+.+?(?:\s*$)/m, '');
        // Remove leading newlines after removing h1
        processedContent = processedContent.replace(/^\n+/, '');
      }
    }
  }
  
  // Remove hardcoded navigation links
  // Match div with navigation links (various patterns)
  processedContent = processedContent.replace(
    /<div[^>]*style\s*=\s*["'][^"']*display\s*:\s*flex[^"']*["'][^>]*>[\s\S]*?<\/div>/gi,
    ''
  );
  // Also remove standalone navigation paragraphs
  processedContent = processedContent.replace(
    /<p>\s*<a[^>]*href[^>]*>.*?(?:⬅️|➡️|上一页|下一页|上一章|下一章|Trang trước|Trang sau).*?<\/a>\s*<\/p>/gi,
    ''
  );
  // Remove multiple consecutive navigation paragraphs
  processedContent = processedContent.replace(
    /(<p>\s*<a[^>]*href[^>]*>.*?<\/a>\s*<\/p>\s*){2,}/gi,
    ''
  );
  
  const parts = preprocessContent(processedContent);
  
  return (
    <div className="prose prose-slate dark:prose-invert max-w-none w-full min-w-0
      prose-headings:font-bold 
      prose-h1:text-2xl sm:prose-h1:text-3xl prose-h1:mt-6 sm:prose-h1:mt-8 md:prose-h1:mt-10 prose-h1:mb-4 sm:prose-h1:mb-6 prose-h1:text-zinc-900 dark:prose-h1:text-zinc-50
      prose-h2:text-xl sm:prose-h2:text-2xl prose-h2:mt-6 sm:prose-h2:mt-8 prose-h2:mb-3 sm:prose-h2:mb-4 prose-h2:text-zinc-900 dark:prose-h2:text-zinc-50 prose-h2:border-b prose-h2:border-zinc-200 dark:prose-h2:border-border prose-h2:pb-2
      prose-h3:text-lg sm:prose-h3:text-xl prose-h3:mt-4 sm:prose-h3:mt-6 prose-h3:mb-2 sm:prose-h3:mb-3 prose-h3:text-zinc-900 dark:prose-h3:text-zinc-50
      prose-p:text-sm sm:prose-p:text-base prose-p:leading-7 sm:prose-p:leading-8 prose-p:mb-4 sm:prose-p:mb-6 prose-p:text-zinc-700 dark:prose-p:text-zinc-200
      prose-a:text-blue-600 dark:prose-a:text-blue-400 prose-a:no-underline hover:prose-a:underline prose-a:font-medium
      prose-code:text-xs sm:prose-code:text-sm prose-code:bg-zinc-100 dark:prose-code:bg-zinc-800/60 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:font-mono prose-code:text-zinc-800 dark:prose-code:text-zinc-100
      prose-pre:bg-zinc-950 dark:prose-pre:bg-zinc-950/90 prose-pre:border prose-pre:border-zinc-800 dark:prose-pre:border-border prose-pre:rounded-lg prose-pre:shadow-lg prose-pre:my-4 sm:prose-pre:my-6 prose-pre:overflow-x-auto
      prose-strong:text-zinc-900 dark:prose-strong:text-zinc-50 prose-strong:font-semibold
      prose-ul:my-4 sm:prose-ul:my-6 prose-ol:my-4 sm:prose-ol:my-6
      prose-li:my-2 prose-li:text-sm sm:prose-li:text-base prose-li:text-zinc-700 dark:prose-li:text-zinc-200
      prose-blockquote:border-l-4 prose-blockquote:border-blue-500 dark:prose-blockquote:border-blue-400 prose-blockquote:pl-4 sm:prose-blockquote:pl-6 prose-blockquote:pr-3 sm:prose-blockquote:pr-4 prose-blockquote:py-2 prose-blockquote:my-4 sm:prose-blockquote:my-6 prose-blockquote:bg-zinc-50 dark:prose-blockquote:bg-zinc-800/30 prose-blockquote:rounded-r-lg prose-blockquote:italic
      prose-img:rounded-xl prose-img:shadow-lg prose-img:my-6 sm:prose-img:my-8 prose-img:border prose-img:border-zinc-200 dark:prose-img:border-border prose-img:max-w-full prose-img:h-auto
      prose-hr:my-6 sm:prose-hr:my-8 prose-hr:border-zinc-200 dark:prose-hr:border-border">
      {parts.map((part, index) => {
        if (part.type === 'columns') {
          return <MarkdownColumns key={index} columns={part.columns!} />;
        }
        if (part.type === 'katex') {
          return (
            <div key={index} className={part.display ? 'my-4 sm:my-6' : 'inline'}>
              {part.display ? (
                <BlockMath math={sanitizeKatexInput(part.katexContent!)} />
              ) : (
                <InlineMath math={sanitizeKatexInput(part.katexContent!)} />
              )}
            </div>
          );
        }
        return (
          <ReactMarkdown
            key={index}
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]}
            components={{
          a({ href, children, ...props }: any) {
            const url = typeof href === 'string' ? href : '';

            // Treat as internal if it starts with "/" or is a relative URL (no scheme).
            const hasScheme = /^[a-zA-Z][a-zA-Z\d+\-.]*:/.test(url) || url.startsWith('//');
            const isInternal = url && !url.startsWith('#') && (url.startsWith('/') || !hasScheme);

            if (isInternal) {
              // Use Next.js client-side navigation to avoid full page reloads
              return (
                <Link href={url} className={props.className}>
                  {children}
                </Link>
              );
            }

            return (
              <a href={url} {...props}>
                {children}
              </a>
            );
          },
          p({ children, ...props }: any) {
            // Process inline katex in paragraphs
            if (typeof children === 'string') {
              const processed = processTextWithInlineKatex(children);
              return <p {...props}>{processed}</p>;
            }
            // If children is an array, process each string child
            if (Array.isArray(children)) {
              const processed = children.map((child, idx) => {
                if (typeof child === 'string') {
                  return processTextWithInlineKatex(child);
                }
                return child;
              }).flat();
              return <p {...props}>{processed}</p>;
            }
            return <p {...props}>{children}</p>;
          },
          li({ children, ...props }: any) {
            // Process inline katex in list items
            if (typeof children === 'string') {
              const processed = processTextWithInlineKatex(children);
              return <li {...props}>{processed}</li>;
            }
            if (Array.isArray(children)) {
              const processed = children.map((child) => {
                if (typeof child === 'string') {
                  return processTextWithInlineKatex(child);
                }
                return child;
              }).flat();
              return <li {...props}>{processed}</li>;
            }
            return <li {...props}>{children}</li>;
          },
          code({ node, inline, className, children, ...props }: any) {
            const match = /language-(\w+)/.exec(className || '');
            return !inline && match ? (
              <div className="my-4 sm:my-6 rounded-lg overflow-x-auto shadow-lg border border-zinc-800 dark:border-zinc-700 -mx-2 sm:-mx-4 md:mx-0">
                <SyntaxHighlighter
                  style={vscDarkPlus}
                  language={match[1]}
                  PreTag="div"
                  customStyle={{
                    margin: 0,
                    padding: '0.75rem',
                    borderRadius: '0.5rem',
                    fontSize: '0.875rem',
                  }}
                  {...props}
                >
                  {String(children).replace(/\n$/, '')}
                </SyntaxHighlighter>
              </div>
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            );
          },
          table({ children }: any) {
            return (
              <div className="overflow-x-auto my-4 sm:my-6 md:my-8 rounded-lg border border-zinc-200 dark:border-border shadow-sm -mx-2 sm:-mx-4 md:mx-0">
                <table className="min-w-full divide-y divide-zinc-200 dark:divide-border">
                  {children}
                </table>
              </div>
            );
          },
          thead({ children }: any) {
            return (
              <thead className="bg-zinc-50 dark:bg-zinc-800/40">
                {children}
              </thead>
            );
          },
          th({ children }: any) {
            return (
              <th className="px-3 sm:px-4 md:px-6 py-2 sm:py-3 text-left text-xs font-semibold text-zinc-700 dark:text-zinc-200 uppercase tracking-wider border-b border-zinc-200 dark:border-border whitespace-nowrap">
                {children}
              </th>
            );
          },
          tbody({ children }: any) {
            return (
              <tbody className="bg-white dark:bg-card divide-y divide-zinc-200 dark:divide-border">
                {children}
              </tbody>
            );
          },
          td({ children }: any) {
            return (
              <td className="px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 text-xs sm:text-sm text-zinc-700 dark:text-zinc-200">
                {children}
              </td>
            );
          },
          img({ src, alt, ...props }: any) {
            return (
              <img
                src={src}
                alt={alt}
                className="rounded-xl shadow-lg my-8 border border-zinc-200 dark:border-zinc-800 max-w-full h-auto"
                {...props}
              />
            );
          },
            }}
          >
            {part.content!}
          </ReactMarkdown>
        );
      })}
    </div>
  );
}

