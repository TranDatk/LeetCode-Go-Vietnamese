'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useMemo, useRef, useState, useEffect } from 'react';
import {
  BookOpen,
  ChevronDown,
  ChevronRight,
  BookText,
  Code2,
  FileCode,
  ListChecks,
} from 'lucide-react';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from '@/components/ui/sidebar';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { SidebarSnow } from '@/components/sidebar-snow';

interface Chapter {
  name: string;
  files: Array<{
    slug: string;
    title: string;
    weight?: number;
  }>;
}

interface AppSidebarProps {
  chapters: Chapter[];
}

function ChapterFileList({
  files,
  pathname,
  isLargeList,
}: {
  files: Chapter['files'];
  pathname: string;
  isLargeList: boolean;
}) {
  const BATCH_SIZE = 80;
  const INITIAL_SIZE = 120;

  const containerRef = useRef<HTMLDivElement | null>(null);
  const sentinelRef = useRef<HTMLDivElement | null>(null);

  const [visibleCount, setVisibleCount] = useState(() =>
    isLargeList ? Math.min(INITIAL_SIZE, files.length) : files.length
  );

  useEffect(() => {
    setVisibleCount(isLargeList ? Math.min(INITIAL_SIZE, files.length) : files.length);
  }, [files.length, isLargeList]);

  useEffect(() => {
    if (!isLargeList) return;
    const activeIndex = files.findIndex((f) => `/${f.slug}` === pathname);
    if (activeIndex >= 0) {
      setVisibleCount((prev) => Math.max(prev, Math.min(files.length, activeIndex + BATCH_SIZE)));
    }
  }, [pathname, files, isLargeList]);

  useEffect(() => {
    if (!isLargeList) return;
    const root = containerRef.current;
    const sentinel = sentinelRef.current;
    if (!root || !sentinel) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const first = entries[0];
        if (!first?.isIntersecting) return;
        setVisibleCount((prev) => Math.min(files.length, prev + BATCH_SIZE));
      },
      { root, rootMargin: '200px' }
    );

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, [files.length, isLargeList]);

  const visibleFiles = useMemo(() => {
    return isLargeList ? files.slice(0, visibleCount) : files;
  }, [files, visibleCount, isLargeList]);

  return (
    <div
      ref={containerRef}
      className={
        isLargeList
          ? 'max-h-[60vh] overflow-y-auto overflow-x-hidden pr-1 scrollbar-hide'
          : undefined
      }
    >
      <SidebarMenu className="ml-2">
        {visibleFiles.map((file) => {
          const isActive = pathname === `/${file.slug}`;
          return (
            <SidebarMenuItem key={file.slug}>
              <SidebarMenuButton asChild isActive={isActive} tooltip={file.title}>
                <Link href={`/${file.slug}`}>
                  <span>{file.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          );
        })}
      </SidebarMenu>

      {isLargeList && (
        <>
          <div ref={sentinelRef} className="h-1" />
          {visibleCount < files.length && (
            <div className="px-2 py-2">
              <button
                type="button"
                className="w-full text-left text-xs text-zinc-600 dark:text-zinc-300 hover:underline"
                onClick={() => setVisibleCount((prev) => Math.min(files.length, prev + BATCH_SIZE))}
              >
                Tải thêm…
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export function AppSidebar({ chapters }: AppSidebarProps) {
  const pathname = usePathname();
  const [expandedChapters, setExpandedChapters] = useState<Set<string>>(
    new Set(['chapter-one', 'chapter-two', 'chapter-three'])
  );

  useEffect(() => {
    setExpandedChapters((prev) => {
      const newExpanded = new Set(prev);
      
      chapters.forEach((chapter) => {
        const isChapterIndex = pathname === `/${chapter.name}`;
        const hasActiveFile = chapter.files.some(
          (file) => pathname === `/${file.slug}`
        );
        if (isChapterIndex || hasActiveFile) {
          newExpanded.add(chapter.name);
        }
      });
      
      return newExpanded;
    });
  }, [pathname, chapters]);

  const toggleChapter = (chapterName: string) => {
    setExpandedChapters((prev) => {
      const newExpanded = new Set(prev);
      if (newExpanded.has(chapterName)) {
        newExpanded.delete(chapterName);
      } else {
        newExpanded.add(chapterName);
      }
      return newExpanded;
    });
  };

  const { state } = useSidebar();
  const isCollapsed = state === 'collapsed';

  const getChapterDisplayName = (name: string) => {
    const chapterMap: Record<string, string> = {
      'chapter-one': 'Chương 1: Lời mở đầu',
      'chapter-two': 'Chương 2: Chuyên đề thuật toán',
      'chapter-three': 'Chương 3: Mẫu (Template)',
      'chapter-four': 'Chương 4: Lời giải LeetCode ',
    };
    return chapterMap[name] || name;
  };

  const getChapterIcon = (name: string) => {
    const iconMap: Record<string, typeof BookText> = {
      'chapter-one': BookText,
      'chapter-two': Code2,
      'chapter-three': FileCode,
      'chapter-four': ListChecks,
    };
    return iconMap[name] || BookOpen;
  };

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href="/">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <BookOpen className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">LeetCode Cookbook</span>
                  <span className="truncate text-xs">Analysis in Go</span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent className="scrollbar-hide overflow-x-hidden relative" data-lenis-prevent>
        <SidebarSnow />
        <div className="relative z-10">
          {chapters.map((chapter) => {
            const isExpanded = expandedChapters.has(chapter.name);
            const isChapterIndex = pathname === `/${chapter.name}`;
            const hasActiveFile = isChapterIndex || chapter.files.some(
              (file) => pathname === `/${file.slug}`
            );

            return (
              <SidebarGroup key={chapter.name}>
              <Collapsible
                open={isExpanded}
                onOpenChange={() => toggleChapter(chapter.name)}
                className="group/collapsible"
              >
                <SidebarMenu>
                  <SidebarMenuItem>
                    {isCollapsed ? (
                      <SidebarMenuButton 
                        asChild 
                        isActive={hasActiveFile}
                        tooltip={getChapterDisplayName(chapter.name)}
                        className="justify-center"
                      >
                        <Link href={`/${chapter.name}`}>
                          {(() => {
                            const IconComponent = getChapterIcon(chapter.name);
                            return <IconComponent className="size-5" />;
                          })()}
                        </Link>
                      </SidebarMenuButton>
                    ) : (
                      <div className="flex items-center gap-1 w-full">
                        <CollapsibleTrigger asChild>
                          <SidebarMenuButton 
                            size="sm" 
                            className="shrink-0 p-1 w-6 h-6"
                            tooltip={isExpanded ? "Collapse" : "Expand"}
                          >
                            {isExpanded ? (
                              <ChevronDown className="size-4" />
                            ) : (
                              <ChevronRight className="size-4" />
                            )}
                          </SidebarMenuButton>
                        </CollapsibleTrigger>
                        <SidebarMenuButton 
                          asChild 
                          isActive={isChapterIndex}
                          tooltip={getChapterDisplayName(chapter.name)}
                          className="flex-1"
                        >
                          <Link href={`/${chapter.name}`}>
                            {(() => {
                              const IconComponent = getChapterIcon(chapter.name);
                              return (
                                <>
                                  <IconComponent className="size-4 shrink-0" />
                                  <span>{getChapterDisplayName(chapter.name)}</span>
                                </>
                              );
                            })()}
                          </Link>
                        </SidebarMenuButton>
                      </div>
                    )}
                  </SidebarMenuItem>
                </SidebarMenu>
                {!isCollapsed && (
                  <CollapsibleContent>
                    <SidebarGroupContent>
                      <ChapterFileList
                        files={chapter.files}
                        pathname={pathname}
                        isLargeList={chapter.files.length >= 250}
                      />
                    </SidebarGroupContent>
                  </CollapsibleContent>
                )}
              </Collapsible>
            </SidebarGroup>
            );
          })}
        </div>
      </SidebarContent>

    </Sidebar>
  );
}

