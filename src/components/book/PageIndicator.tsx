import React from 'react';
import { motion } from 'framer-motion';
import { TOTAL_PAGES, BOOK_PAGES } from '@/data/pages';
import { APP_CONFIG } from '@/lib/constants';

interface PageIndicatorProps {
  currentPage: number;
  onSelectPage?: (index: number) => void;
  className?: string;
}

export const PageIndicator: React.FC<PageIndicatorProps> = ({
  currentPage,
  className = '',
}) => {
  const currentFormatted = String(currentPage + 1).padStart(2, '0');
  const totalFormatted = String(TOTAL_PAGES).padStart(2, '0');
  const progressRatio = (currentPage + 1) / TOTAL_PAGES;
  const currentDef = BOOK_PAGES[currentPage];

  return (
    <div
      {...{ [APP_CONFIG.INTERACTIVE_ATTR]: 'true' }}
      className={`flex flex-col items-center gap-1.5 select-none pointer-events-auto ${className}`}
    >
      {/* Chapter sub-label */}
      {currentDef?.chapterTitle && (
        <span className="text-[10px] uppercase tracking-[0.2em] text-[#736B63] font-medium transition-opacity duration-300">
          {currentDef.chapterTitle}
        </span>
      )}

      {/* Numerical indicator: 01 ━━━━━ 11 */}
      <div className="flex items-center gap-3">
        <span className="text-xs font-mono font-medium tracking-wider text-[#35302B] min-w-[20px] text-right">
          {currentFormatted}
        </span>

        {/* Progress track */}
        <div className="relative w-20 md:w-28 h-[2px] bg-[#35302B]/15 rounded-full overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 bottom-0 bg-[#C5A059] rounded-full"
            initial={false}
            animate={{ width: `${progressRatio * 100}%` }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          />
        </div>

        <span className="text-xs font-mono font-medium tracking-wider text-[#8A8177] min-w-[20px]">
          {totalFormatted}
        </span>
      </div>
    </div>
  );
};
