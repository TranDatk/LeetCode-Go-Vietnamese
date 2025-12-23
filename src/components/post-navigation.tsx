'use client';

import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { PostNavigation } from '@/lib/navigation';

interface PostNavigationProps {
  navigation: PostNavigation;
}

export function PostNavigation({ navigation }: PostNavigationProps) {
  if (!navigation.prev && !navigation.next) {
    return null;
  }

  return (
    <nav className="flex justify-between items-center gap-4 mt-8 sm:mt-10 md:mt-12 pt-6 sm:pt-8 border-t border-zinc-200 dark:border-border">
      {navigation.prev ? (
        <Link
          href={`/${navigation.prev.slug}`}
          className="flex items-center gap-2 px-4 py-2 rounded-lg border border-zinc-200 dark:border-border bg-white dark:bg-card hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors text-sm sm:text-base"
        >
          <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
          <div className="flex flex-col">
            <span className="text-xs text-zinc-500 dark:text-zinc-400">Trang trước</span>
            <span className="font-medium text-zinc-900 dark:text-zinc-100 line-clamp-1">
              {navigation.prev.title}
            </span>
          </div>
        </Link>
      ) : (
        <div className="flex-1" />
      )}
      
      {navigation.next ? (
        <Link
          href={`/${navigation.next.slug}`}
          className="flex items-center gap-2 px-4 py-2 rounded-lg border border-zinc-200 dark:border-border bg-white dark:bg-card hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors text-sm sm:text-base text-right"
        >
          <div className="flex flex-col">
            <span className="text-xs text-zinc-500 dark:text-zinc-400">Trang sau</span>
            <span className="font-medium text-zinc-900 dark:text-zinc-100 line-clamp-1">
              {navigation.next.title}
            </span>
          </div>
          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
        </Link>
      ) : (
        <div className="flex-1" />
      )}
    </nav>
  );
}

