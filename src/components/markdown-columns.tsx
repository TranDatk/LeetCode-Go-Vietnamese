'use client';

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

interface MarkdownColumnsProps {
  columns: string[];
}

export function MarkdownColumns({ columns }: MarkdownColumnsProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 my-6 sm:my-8 w-full min-w-0">
      {columns.map((columnContent, index) => (
        <div 
          key={index} 
          className="prose prose-slate dark:prose-invert max-w-none min-w-0 w-full
            prose-headings:font-bold
            prose-h2:text-lg sm:prose-h2:text-xl prose-h2:mt-4 sm:prose-h2:mt-6 prose-h2:mb-2 sm:prose-h2:mb-3
            prose-p:text-xs sm:prose-p:text-sm prose-p:leading-6 sm:prose-p:leading-7 prose-p:mb-3 sm:prose-p:mb-4
            prose-a:text-blue-600 dark:prose-a:text-blue-400"
        >
          <ReactMarkdown 
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]}
            components={{
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
            {columnContent.trim()}
          </ReactMarkdown>
        </div>
      ))}
    </div>
  );
}

