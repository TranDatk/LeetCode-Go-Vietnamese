import { getIndexFile } from '@/lib/markdown';
import { MarkdownContent } from '@/components/markdown-content';
import { CopyMarkdownButton } from '@/components/copy-markdown-button';

// Revalidate every hour for ISR
export const revalidate = 3600;

export default async function Home() {
  const indexFile = await getIndexFile();

  if (!indexFile) {
    return (
      <div className="text-center py-12">
        <p className="text-zinc-600 dark:text-zinc-400">Không tìm thấy nội dung trang chủ</p>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-card rounded-lg shadow-sm border border-zinc-200 dark:border-border p-3 sm:p-4 md:p-6 lg:p-8 xl:p-10 w-full min-w-0">
      <article className="w-full min-w-0">
        <header className="mb-6 sm:mb-8 md:mb-10 pb-4 sm:pb-6 md:pb-8 border-b border-zinc-200 dark:border-border">
          <div className="flex items-start justify-between gap-4">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-zinc-900 dark:text-zinc-50 mb-2 sm:mb-3 leading-tight flex-1">
              {indexFile.title}
            </h1>
            <CopyMarkdownButton content={indexFile.content} />
          </div>
        </header>
        <div className="markdown-content w-full min-w-0">
          <MarkdownContent content={indexFile.content} title={indexFile.title} />
        </div>
      </article>
    </div>
  );
}
