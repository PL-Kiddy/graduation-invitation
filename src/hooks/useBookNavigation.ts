import { useState, useCallback, useEffect } from 'react';
import { TOTAL_PAGES } from '@/data/pages';

interface UseBookNavigationOptions {
  enabled?: boolean;
  initialPage?: number;
  onPrevAtFirstPage?: () => void;
}

export interface BookNavigationReturn {
  currentPage: number;
  direction: 1 | -1;
  canGoNext: boolean;
  canGoPrev: boolean;
  nextPage: () => void;
  prevPage: () => void;
  goToPage: (pageIndex: number) => void;
}

export function useBookNavigation({
  enabled = true,
  initialPage = 0,
  onPrevAtFirstPage,
}: UseBookNavigationOptions = {}): BookNavigationReturn {
  const [currentPage, setCurrentPage] = useState<number>(initialPage);
  const [direction, setDirection] = useState<1 | -1>(1);

  const canGoNext = currentPage < TOTAL_PAGES - 1;
  const canGoPrev = currentPage > 0;

  const goToPage = useCallback(
    (pageIndex: number) => {
      if (!enabled) return;
      const target = Math.max(0, Math.min(pageIndex, TOTAL_PAGES - 1));
      if (target === currentPage) return;
      setDirection(target > currentPage ? 1 : -1);
      setCurrentPage(target);
    },
    [currentPage, enabled]
  );

  const nextPage = useCallback(() => {
    if (canGoNext) {
      goToPage(currentPage + 1);
    }
  }, [canGoNext, currentPage, goToPage]);

  const prevPage = useCallback(() => {
    if (canGoPrev) {
      goToPage(currentPage - 1);
    } else if (currentPage === 0 && onPrevAtFirstPage) {
      onPrevAtFirstPage();
    }
  }, [canGoPrev, currentPage, goToPage, onPrevAtFirstPage]);

  // Keyboard navigation: ArrowLeft / ArrowRight
  useEffect(() => {
    if (!enabled) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't trigger if focus is on an input or textarea
      const target = e.target as HTMLElement | null;
      if (target && (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA')) {
        return;
      }

      if (e.key === 'ArrowRight' || e.key === 'PageDown') {
        e.preventDefault();
        nextPage();
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault();
        prevPage();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [enabled, nextPage, prevPage]);

  return {
    currentPage,
    direction,
    canGoNext,
    canGoPrev,
    nextPage,
    prevPage,
    goToPage,
  };
}
