import React from 'react';
import { PageSurface } from '@/components/book/PageSurface';
import { graduation } from '@/data/graduation';

export const JourneyPage: React.FC = () => {
  return (
    <PageSurface className="p-6 md:p-8 flex flex-col justify-between">
      <div className="flex items-center justify-between border-b border-[#E5DC CE] pb-3">
        <span className="text-[10px] uppercase font-mono tracking-[0.2em] text-[#7A7065] font-semibold">
          HÀNH TRÌNH • CHƯƠNG II
        </span>
        <span className="text-[11px] font-mono tracking-widest text-[#B88A22] font-semibold">
          03 / 11
        </span>
      </div>

      <div className="my-auto py-4 space-y-4">
        <div className="space-y-1">
          <p className="text-[10px] uppercase font-mono tracking-[0.25em] text-[#B88A22] font-bold">
            FPT YEARS
          </p>
          <h2 className="text-xl md:text-2xl font-serif-editorial font-bold text-[#1F1C18] leading-tight">
            MỘT CHÚT VỀ<br />NHỮNG NĂM Ở FPT.
          </h2>
        </div>

        <div className="p-4 rounded-[6px] border border-[#E5DC CE] bg-[#FFFFFF]/90 space-y-3 shadow-xs">
          <div className="flex items-center gap-3 text-xs font-sans-modern text-[#4A4238]">
            <span className="w-2 h-2 rounded-full bg-[#005A9E] shadow-xs" />
            <div>
              <span className="font-bold text-[#1F1C18]">2022</span>
              <span className="text-[#7A7065]"> — Khởi đầu mới tại Campus Q9</span>
            </div>
          </div>
          <div className="flex items-center gap-3 text-xs font-sans-modern text-[#4A4238]">
            <span className="w-2 h-2 rounded-full bg-[#F27024] shadow-xs" />
            <div>
              <span className="font-bold text-[#1F1C18]">2023</span>
              <span className="text-[#7A7065]"> — Đồ án & những đêm trắng cày bug</span>
            </div>
          </div>
          <div className="flex items-center gap-3 text-xs font-sans-modern text-[#4A4238]">
            <span className="w-2 h-2 rounded-full bg-[#2E8B57] shadow-xs" />
            <div>
              <span className="font-bold text-[#1F1C18]">2024 - 2025</span>
              <span className="text-[#7A7065]"> — Trải nghiệm On-the-job Training</span>
            </div>
          </div>
          <div className="flex items-center gap-3 text-xs font-sans-modern text-[#1F1C18] font-bold pt-1 border-t border-[#E5DC CE]/60">
            <span className="w-2 h-2 rounded-full bg-[#C59B27] shadow-xs" />
            <div>
              <span className="text-[#B88A22]">{graduation.displayDate}</span>
              <span className="text-[#1F1C18]"> — Lễ Tốt Nghiệp Chính Thức</span>
            </div>
          </div>
        </div>

        <p className="text-xs text-[#7A7065] italic">
          (Timeline chi tiết sẽ hoàn thiện trong giai đoạn kế tiếp)
        </p>
      </div>

      <div className="text-center text-[10px] font-mono text-[#7A7065]">
        Vuốt sang trái để tiếp tục →
      </div>
    </PageSurface>
  );
};
