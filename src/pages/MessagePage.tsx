import React from 'react';
import { PageSurface } from '@/components/book/PageSurface';
import { graduation } from '@/data/graduation';

export const MessagePage: React.FC = () => {
  return (
    <PageSurface className="p-6 md:p-8 flex flex-col justify-between">
      <div className="flex items-center justify-between border-b border-[#E5DC CE] pb-3">
        <span className="text-[10px] uppercase font-mono tracking-[0.2em] text-[#7A7065] font-semibold">
          TÂM SỰ • CHƯƠNG VIII
        </span>
        <span className="text-[11px] font-mono tracking-widest text-[#B88A22] font-semibold">
          09 / 11
        </span>
      </div>

      <div className="my-auto py-6 space-y-6 text-center">
        <div className="w-10 h-[1.5px] bg-[#C59B27] mx-auto" />

        <div className="space-y-4 max-w-[280px] mx-auto">
          <p className="text-base md:text-lg font-serif-editorial italic text-[#2B241E] leading-relaxed">
            “Có những ngày, chỉ cần đúng người có mặt là tự nhiên trở nên đáng nhớ hơn rất nhiều.”
          </p>

          <p className="text-xs font-mono uppercase tracking-[0.25em] text-[#B88A22] font-bold">
            Vậy nên...
          </p>

          <h2 className="text-2xl md:text-3xl font-display-title font-bold text-[#F27024] tracking-wider">
            07 · 11, ĐẾN NHÉ?
          </h2>
        </div>

        <div className="pt-2">
          <span className="font-serif-editorial text-lg italic font-bold text-[#1F1C18]">
            — {graduation.firstName}
          </span>
        </div>

        <div className="w-10 h-[1.5px] bg-[#C59B27] mx-auto" />
      </div>

      <div className="text-center text-[10px] font-mono text-[#7A7065]">
        Vuốt sang trái để tiếp tục →
      </div>
    </PageSurface>
  );
};
