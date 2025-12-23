'use client';

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Lấy chiều cao của document
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;
      const scrollableHeight = scrollHeight - clientHeight;
      
      // Kiểm tra nếu đã scroll quá 50% chiều cao trang
      const scrolled = window.scrollY;
      const scrollPercentage = scrollableHeight > 0 ? (scrolled / scrollableHeight) * 100 : 0;
      
      setIsVisible(scrollPercentage > 50);
    };

    // Kiểm tra khi component mount
    toggleVisibility();

    // Lắng nghe sự kiện scroll
    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          onClick={scrollToTop}
          size="icon"
          variant="outline"
          className={cn(
            'fixed bottom-6 right-6 z-50 rounded-full shadow-lg transition-all duration-300',
            'bg-background/80 backdrop-blur-sm border-zinc-200 dark:border-zinc-800',
            'hover:bg-accent hover:scale-110',
            'h-14 w-14', // Tăng kích thước nút
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-2 pointer-events-none'
          )}
          aria-label="Scroll to top"
        >
          <img 
            src="/asssets/go.svg" 
            alt="Go logo" 
            className="h-8 w-8"
          />
        </Button>
      </TooltipTrigger>
      <TooltipContent side="left">
        <p>Scroll lên đầu trang</p>
      </TooltipContent>
    </Tooltip>
  );
}

