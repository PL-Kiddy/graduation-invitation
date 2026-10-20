import React from 'react';
import { PageSurface } from '@/components/book/PageSurface';
import { graduation } from '@/data/graduation';

export const MessagePage: React.FC = () => {
  return (
    <PageSurface className="p-6 md:p-8 flex flex-col justify-between">
      <div className="flex items-center justify-between border-b border-[#35302B]/15 pb-3">
        <span className="text-[10px] uppercase font-mono tracking-[0.2em] text-[#736B63]">
          TÂM SỰ • CHƯƠNG VIII
        </span>
        <span className="text-[11px] font-mono tracking-widest text-[#736B63]">
          09 / 11
        </span>
      </div>

      <div className="my-auto py-6 space-y-6 text-center">
        <div className="w-8 h-[1px] bg-[#C5A059] mx-auto" />

        <div className="space-y-4 max-w-[280px] mx-auto">
          <p className="text-base md:text-lg font-serif-editorial italic text-[#26211C] leading-relaxed">
            “Có những ngày, chỉ cần đúng người có mặt là tự nhiên trở nên đáng nhớ hơn rất nhiều.”
          </p>

          <p className="text-xs font-mono uppercase tracking-[0.2em] text-[#736B63]">
            Vậy nên...
          </p>

          <h2 className="text-2xl md:text-3xl font-display-title font-bold text-[#F27024] tracking-wide">
            07 · 11, ĐẾN NHÉ?
          </h2>
        </div>

        <div className="pt-2">
          <span className="font-serif-editorial text-lg italic font-bold text-[#181614]">
            — {graduation.firstName}
          </span>
        </div>

        <div className="w-8 h-[1px] bg-[#C5A059] mx-auto" />
      </div>

      <div className="text-center text-[10px] font-mono text-[#8C8375]">
        Vuốt sang trái để tiếp tục →
      </div>
    </PageSurface>
  );
};
