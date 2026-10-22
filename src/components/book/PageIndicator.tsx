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
      className={`flex flex-col items-center gap-1 select-none pointer-events-auto px-4 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-[#C59B27]/40 shadow-xl ${className}`}
    >
      {/* Chapter sub-label */}
      {currentDef?.chapterTitle && (
        <span className="text-[9px] uppercase tracking-[0.2em] font-mono text-[#8C6D1F] font-bold">
          {currentDef.chapterTitle}
        </span>
      )}

      {/* Numerical indicator: 01 ━━━━━ 11 */}
      <div className="flex items-center gap-2.5">
        <span className="text-[11px] font-mono font-bold tracking-wider text-[#1E1A16] min-w-[18px] text-right">
          {currentFormatted}
        </span>

        {/* Progress track */}
        <div className="relative w-20 md:w-28 h-[2.5px] bg-[#E8DEC9] rounded-full overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 bottom-0 bg-gradient-to-r from-[#C59B27] via-[#F27024] to-[#D4AF37] rounded-full"
            initial={false}
            animate={{ width: `${progressRatio * 100}%` }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          />
        </div>

        <span className="text-[11px] font-mono font-medium tracking-wider text-[#8C7D6F] min-w-[18px]">
          {totalFormatted}
        </span>
      </div>
    </div>
  );
};
