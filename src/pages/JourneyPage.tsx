import React from 'react';
import { PageSurface } from '@/components/book/PageSurface';
import { graduation } from '@/data/graduation';

export const JourneyPage: React.FC = () => {
  return (
    <PageSurface className="p-6 md:p-8 flex flex-col justify-between">
      <div className="flex items-center justify-between border-b border-[#35302B]/15 pb-3">
        <span className="text-[10px] uppercase font-mono tracking-[0.2em] text-[#736B63]">
          HÀNH TRÌNH • CHƯƠNG II
        </span>
        <span className="text-[11px] font-mono tracking-widest text-[#736B63]">
          03 / 11
        </span>
      </div>

      <div className="my-auto py-4 space-y-4">
        <div className="space-y-1">
          <p className="text-[10px] uppercase font-mono tracking-[0.25em] text-[#C5A059]">
            FPT YEARS
          </p>
          <h2 className="text-xl md:text-2xl font-serif-editorial font-bold text-[#181614] leading-tight">
            MỘT CHÚT VỀ<br />NHỮNG NĂM Ở FPT.
          </h2>
        </div>

        <div className="p-4 rounded-[4px] border border-dashed border-[#35302B]/20 bg-[#FAF7F0]/60 space-y-2">
          <div className="flex items-center gap-2 text-xs font-mono text-[#736B63]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#005A9E]" />
            <span>2022 — Khởi đầu mới tại Campus Q9</span>
          </div>
          <div className="flex items-center gap-2 text-xs font-mono text-[#736B63]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F27024]" />
            <span>2023 — Đồ án & những đêm trắng cày bug</span>
          </div>
          <div className="flex items-center gap-2 text-xs font-mono text-[#736B63]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2E8B57]" />
            <span>2024 - 2025 — Trải nghiệm On-the-job Training</span>
          </div>
          <div className="flex items-center gap-2 text-xs font-mono text-[#181614] font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
            <span>{graduation.displayDate} — Lễ Tốt Nghiệp</span>
          </div>
        </div>

        <p className="text-xs text-[#736B63] italic">
          (Timeline chi tiết sẽ hoàn thiện trong giai đoạn kế tiếp)
        </p>
      </div>

      <div className="text-center text-[10px] font-mono text-[#8C8375]">
        Vuốt sang trái để tiếp tục →
      </div>
    </PageSurface>
  );
};
