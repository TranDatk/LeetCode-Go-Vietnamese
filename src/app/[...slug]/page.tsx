import { notFound } from 'next/navigation';
import fs from 'fs';
import path from 'path';
import { getMarkdownFileBySlug, getAllMarkdownFiles } from '@/lib/markdown';
import { MarkdownContent } from '@/components/markdown-content';
import { PostNavigation } from '@/components/post-navigation';
import { getPostNavigation } from '@/lib/navigation';
import { CopyMarkdownButton } from '@/components/copy-markdown-button';

interface PageProps {
  params: Promise<{
    slug: string[];
  }>;
}

// Revalidate every hour (3600 seconds) for ISR
export const revalidate = 3600;

export async function generateStaticParams() {
  const files = await getAllMarkdownFiles();
  const params: { slug: string[] }[] = [];
  
  // Add all markdown files
  files.forEach((file) => {
    params.push({
      slug: file.slug.split('/').filter(Boolean),
    });
  });
  
  // Add chapter index routes (e.g., /chapter-one)
  const chapters = ['chapter-one', 'chapter-two', 'chapter-three', 'chapter-four'];
  chapters.forEach((chapter) => {
    const indexPath = path.join(process.cwd(), 'public/asssets/content', chapter, '_index.md');
    if (fs.existsSync(indexPath)) {
      params.push({
        slug: [chapter],
      });
    }
  });
  
  return params;
}

export default async function PostPage({ params }: PageProps) {
  const { slug } = await params;
  const slugString = Array.isArray(slug) ? slug.join('/') : slug;
  const post = await getMarkdownFileBySlug(slugString);

  if (!post) {
    notFound();
  }

  // Get navigation (prev/next)
  const navigation = await getPostNavigation(slugString);

  return (
    <div className="bg-white dark:bg-card rounded-lg shadow-sm border border-zinc-200 dark:border-border p-3 sm:p-4 md:p-6 lg:p-8 xl:p-10 w-full min-w-0">
      <article className="w-full min-w-0">
        <header className="mb-6 sm:mb-8 md:mb-10 pb-4 sm:pb-6 md:pb-8 border-b border-zinc-200 dark:border-border">
          <div className="flex items-start justify-between gap-4">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-zinc-900 dark:text-zinc-50 mb-2 sm:mb-3 leading-tight flex-1">
              {post.title}
            </h1>
            <CopyMarkdownButton content={post.content} />
          </div>
        </header>
        <div className="markdown-content w-full min-w-0">
          <MarkdownContent content={post.content} title={post.title} />
        </div>
        <PostNavigation navigation={navigation} />
      </article>
    </div>
  );
}

