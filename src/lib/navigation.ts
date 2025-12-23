import { MarkdownFile, getChapters, getAllMarkdownFiles, getChapterIndexFile } from './markdown';

export interface NavigationItem {
  slug: string;
  title: string;
}

export interface PostNavigation {
  prev: NavigationItem | null;
  next: NavigationItem | null;
}

/**
 * Get previous and next navigation items for a given slug
 */
export async function getPostNavigation(currentSlug: string): Promise<PostNavigation> {
  const chapters = await getChapters();
  const allFiles = await getAllMarkdownFiles();
  
  // Create a flat list of all items (including chapter indexes)
  const allItems: (MarkdownFile & { isChapterIndex?: boolean })[] = [];
  
  // Add chapter indexes first
  for (const chapter of chapters) {
    const chapterIndex = await getChapterIndexFile(chapter.name);
    if (chapterIndex) {
      allItems.push({
        ...chapterIndex,
        isChapterIndex: true,
      });
    }
    
    // Add files in the chapter
    for (const file of chapter.files) {
      allItems.push({
        ...file,
        content: '', // We don't need content for navigation
        frontmatter: {},
        isChapterIndex: false,
      });
    }
  }
  
  // Normalize slug for comparison (handle both "chapter-one" and "chapter-one/_index")
  const normalizeSlug = (slug: string) => {
    // If slug is just chapter name, treat it as chapter index
    if (slug.startsWith('chapter-') && !slug.includes('/')) {
      return `${slug}/_index`;
    }
    return slug;
  };
  
  const normalizedCurrentSlug = normalizeSlug(currentSlug);
  
  // Find current item index
  const currentIndex = allItems.findIndex(item => {
    const normalizedItemSlug = normalizeSlug(item.slug);
    return normalizedItemSlug === normalizedCurrentSlug;
  });
  
  if (currentIndex === -1) {
    return { prev: null, next: null };
  }
  
  // Get prev and next, normalize slugs for navigation
  const prev = currentIndex > 0 ? {
    slug: normalizeSlugForRoute(allItems[currentIndex - 1].slug),
    title: allItems[currentIndex - 1].title,
  } : null;
  
  const next = currentIndex < allItems.length - 1 ? {
    slug: normalizeSlugForRoute(allItems[currentIndex + 1].slug),
    title: allItems[currentIndex + 1].title,
  } : null;
  
  return { prev, next };
}

/**
 * Normalize slug for route (remove /_index suffix for chapter indexes)
 */
function normalizeSlugForRoute(slug: string): string {
  if (slug.endsWith('/_index')) {
    return slug.replace('/_index', '');
  }
  return slug;
}

