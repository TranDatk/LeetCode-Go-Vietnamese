import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { unstable_cache } from 'next/cache';

const contentDirectory = path.join(process.cwd(), 'public/asssets/content');

export interface MarkdownFile {
  slug: string;
  title: string;
  weight?: number;
  type?: string;
  content: string;
  frontmatter: Record<string, any>;
}

// Metadata only (without content) for caching
interface MarkdownMetadata {
  slug: string;
  title: string;
  weight?: number;
  type?: string;
  frontmatter: Record<string, any>;
}

// Internal function to read markdown metadata only (for caching - no content)
function _getAllMarkdownMetadata(): MarkdownMetadata[] {
  const files: MarkdownMetadata[] = [];
  
  function readDirectory(dir: string, basePath: string = ''): void {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      const relativePath = path.join(basePath, entry.name);
      
      if (entry.isDirectory()) {
        readDirectory(fullPath, relativePath);
      } else if (entry.isFile() && entry.name.endsWith('.md') && entry.name !== '_index.md') {
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data } = matter(fileContents);
        
        // Create slug from relative path - keep full path including chapter folders
        const slug = relativePath
          .replace(/\\/g, '/')
          .replace(/\.md$/, '');
        
        files.push({
          slug,
          title: data.title || entry.name.replace('.md', ''),
          weight: data.weight,
          type: data.type,
          frontmatter: data,
        });
      }
    }
  }
  
  readDirectory(contentDirectory);
  return files.sort((a, b) => {
    if (a.weight !== undefined && b.weight !== undefined) {
      return a.weight - b.weight;
    }
    return a.slug.localeCompare(b.slug);
  });
}

// Cached metadata only (no content to avoid 2MB limit)
const getAllMarkdownMetadata = unstable_cache(
  async () => _getAllMarkdownMetadata(),
  ['all-markdown-metadata'],
  {
    revalidate: 3600, // 1 hour
    tags: ['markdown-metadata'],
  }
);

// Get all markdown files with content (not cached to avoid size limit)
export async function getAllMarkdownFiles(): Promise<MarkdownFile[]> {
  const metadata = await getAllMarkdownMetadata();
  
  // Read content directly from files (not cached)
  return metadata.map((meta) => {
    const filePath = path.join(contentDirectory, meta.slug + '.md');
    if (fs.existsSync(filePath)) {
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const { content } = matter(fileContents);
      return {
        ...meta,
        content,
      };
    }
    return {
      ...meta,
      content: '',
    };
  });
}

// Get index file - read directly (not cached to avoid size limit)
export async function getIndexFile(): Promise<MarkdownFile | null> {
  const indexPath = path.join(contentDirectory, '_index.md');
  
  if (fs.existsSync(indexPath)) {
    const fileContents = fs.readFileSync(indexPath, 'utf8');
    const { data, content } = matter(fileContents);
    
    return {
      slug: '_index',
      title: data.title || 'Thông báo Việt hóa nội dung',
      weight: data.weight,
      type: data.type,
      content,
      frontmatter: data,
    };
  }
  
  return null;
}

// Get chapter index file - read directly (not cached to avoid size limit)
export async function getChapterIndexFile(chapterName: string): Promise<MarkdownFile | null> {
  const indexPath = path.join(contentDirectory, chapterName, '_index.md');
  
  if (fs.existsSync(indexPath)) {
    const fileContents = fs.readFileSync(indexPath, 'utf8');
    const { data, content } = matter(fileContents);
    
    return {
      slug: `${chapterName}/_index`,
      title: data.title || chapterName,
      weight: data.weight,
      type: data.type,
      content,
      frontmatter: data,
    };
  }
  
  return null;
}

// Get markdown file by slug - read directly (not cached to avoid size limit)
export async function getMarkdownFileBySlug(slug: string): Promise<MarkdownFile | null> {
  // Convert slug array to string path
  const slugPath = Array.isArray(slug) ? slug.join('/') : slug;
  
  // Handle chapter index files (e.g., "chapter-one" or "chapter-one/_index")
  if (slugPath && slugPath.startsWith('chapter-')) {
    // If it's just the chapter name, try to get the index file
    if (!slugPath.includes('/')) {
      const chapterIndex = await getChapterIndexFile(slugPath);
      if (chapterIndex) {
        return chapterIndex;
      }
    }
    // If it's "chapter-one/_index", extract chapter name
    else if (slugPath.endsWith('/_index')) {
      const chapterName = slugPath.replace('/_index', '');
      const chapterIndex = await getChapterIndexFile(chapterName);
      if (chapterIndex) {
        return chapterIndex;
      }
    }
  }
  
  // Direct path construction for regular files
  const filePath = path.join(contentDirectory, slugPath + '.md');
  
  if (fs.existsSync(filePath)) {
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);
    
    return {
      slug: slugPath,
      title: data.title || slugPath,
      weight: data.weight,
      type: data.type,
      content,
      frontmatter: data,
    };
  }
  
  return null;
}

// Helper function to extract number from filename for natural sorting
function extractNumberFromSlug(slug: string): number {
  const parts = slug.split('/');
  const filename = parts[parts.length - 1];
  
  // Try to match number at the start of filename (e.g., "0001.Two-Sum" or "1-array")
  const match = filename.match(/^(\d+)/);
  if (match) {
    return parseInt(match[1], 10);
  }
  
  // If no number found, return Infinity to push to end
  return Infinity;
}

// Helper function to get chapter order
function getChapterOrder(name: string): number {
  const orderMap: Record<string, number> = {
    'chapter-one': 1,
    'chapter-two': 2,
    'chapter-three': 3,
    'chapter-four': 4,
  };
  return orderMap[name] || 999;
}

export async function getChapters(): Promise<{ name: string; files: MarkdownFile[] }[]> {
  const allFiles = await getAllMarkdownFiles();
  const chapters: Record<string, MarkdownFile[]> = {};
  
  for (const file of allFiles) {
    const parts = file.slug.split('/');
    const chapterName = parts[0] || 'other';
    
    if (!chapters[chapterName]) {
      chapters[chapterName] = [];
    }
    chapters[chapterName].push(file);
  }
  
  return Object.entries(chapters)
    .map(([name, files]) => ({
      name,
      files: files.sort((a, b) => {
        // First priority: sort by weight if both have it
        if (a.weight !== undefined && b.weight !== undefined) {
          return a.weight - b.weight;
        }
        // Second priority: if one has weight, it comes first
        if (a.weight !== undefined) return -1;
        if (b.weight !== undefined) return 1;
        
        // For chapter-four, extract problem number from filename (e.g., "0001.Two-Sum" -> 1)
        // For other chapters, extract number from filename (e.g., "1-array" -> 1)
        const numA = extractNumberFromSlug(a.slug);
        const numB = extractNumberFromSlug(b.slug);
        
        if (numA !== Infinity && numB !== Infinity) {
          // Both have numbers, sort numerically
          return numA - numB;
        }
        
        // If only one has a number, it comes first
        if (numA !== Infinity) return -1;
        if (numB !== Infinity) return 1;
        
        // Fallback: natural sort by slug (handles subdirectories correctly)
        return a.slug.localeCompare(b.slug, undefined, { numeric: true, sensitivity: 'base' });
      }),
    }))
    .sort((a, b) => getChapterOrder(a.name) - getChapterOrder(b.name));
}

