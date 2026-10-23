import React from 'react';
import { PageSurface } from '@/components/book/PageSurface';
import { CapIcon, SparklesIcon, ArrowRightIcon } from '@/components/ui/Icons';

interface IntroPageProps {
  onNext?: () => void;
}

export const IntroPage: React.FC<IntroPageProps> = ({ onNext }) => {
  return (
    <PageSurface variant="cream" className="p-5 md:p-6 flex flex-col justify-between overflow-hidden relative">
      {/* Delicate Double Gold Border Frame */}
      <div className="absolute inset-3 rounded-[6px] border border-[#C59B27]/30 pointer-events-none" />
      <div className="absolute inset-4 rounded-[4px] border border-[#C59B27]/20 pointer-events-none" />

      {/* TOP HEADER */}
      <div className="relative z-20 flex items-center justify-between border-b border-[#C59B27]/20 pb-2.5 mx-2">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#C59B27]" />
          <span className="text-[10px] uppercase font-mono tracking-[0.2em] text-[#8C6D1F] font-bold">
            PROLOGUE // LỜI MỞ ĐẦU
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="px-2 py-0.5 rounded-full bg-[#FAF3E6] border border-[#C59B27]/40 text-[#8C6D1F] text-[9px] font-mono font-bold">
            CHƯƠNG 01
          </span>
          <span className="text-[11px] font-mono font-bold text-[#8C7D6F]">
            02 / 10
          </span>
        </div>
      </div>

      {/* MAIN BODY: Bright Luxury Ivory & Gold */}
      <div className="relative z-20 my-auto py-2 flex flex-col justify-center space-y-3.5 mx-2">
        {/* Step 1: Calligraphy & Bold Gold Title */}
        <div className="space-y-0.5">
          <p className="font-editorial-serif italic text-base text-[#8C6D1F] font-semibold">
            Tâm sự một chút...
          </p>
          <h1 className="text-3xl md:text-4xl font-grotesk-bold font-black tracking-tight text-[#1E1A16] leading-none uppercase">
            CUỐI CÙNG THÌ...
          </h1>
          <p className="text-xl md:text-2xl font-display-title font-bold foil-gold-text tracking-wide pt-1 flex items-center gap-2">
            <span>TÔI TỐT NGHIỆP RỒI!</span>
            <CapIcon size={24} className="text-[#C59B27]" />
          </p>
        </div>

        {/* 4-Year Recap Ivory Cards with Gold Borders */}
        <div className="p-3.5 rounded-[6px] bg-white border border-[#C59B27]/35 shadow-sm space-y-2">
          <span className="text-[9px] font-mono font-bold text-[#8C6D1F] uppercase tracking-wider block border-b border-[#C59B27]/20 pb-1">
            NHÌN LẠI 4 NĂM ĐÁNG NHỚ TẠI FPT:
          </span>

          <div className="space-y-1.5 font-sans-modern text-xs text-[#4A4036]">
            <div className="flex items-start gap-2">
              <SparklesIcon size={12} className="text-[#C59B27] shrink-0 mt-0.5" />
              <span>Những buổi sáng chạy deadline cuống cuồng kịp điểm danh</span>
            </div>
            <div className="flex items-start gap-2">
              <SparklesIcon size={12} className="text-[#F27024] shrink-0 mt-0.5" />
              <span>Những đêm thức trắng cùng đồng bọn cày đồ án Capstone</span>
            </div>
            <div className="flex items-start gap-2">
              <SparklesIcon size={12} className="text-[#2E8B57] shrink-0 mt-0.5" />
              <span>Và vô số lần fix bug tưởng chừng không bao giờ có hồi kết...</span>
            </div>
          </div>
        </div>

        {/* Emotional Quote */}
        <div className="p-3 rounded-[6px] bg-[#FAF5EB] border-l-3 border-[#C59B27] space-y-1">
          <p className="font-editorial-serif italic text-base md:text-lg text-[#1E1A16] font-medium leading-snug">
            “Ngày này cuối cùng cũng tới.”
          </p>
          <p className="text-[11px] text-[#6A5E50] leading-relaxed">
            Một cột mốc trọn vẹn mà mình muốn chia sẻ cùng những người bạn đặc biệt đã đồng hành, hỗ trợ hoặc dõi theo mình.
          </p>
        </div>
      </div>

      {/* BOTTOM ACTION */}
      <div className="relative z-20 pt-1 mx-2">
        <button
          onClick={onNext}
          className="w-full flex items-center justify-between px-5 py-2.5 rounded-full bg-gradient-to-r from-[#FAF3E6] via-[#FFFFFF] to-[#FAF3E6] border border-[#C59B27]/50 text-[#8C6D1F] text-xs font-grotesk-bold font-bold tracking-wider hover:shadow-md transition-all cursor-pointer group shadow-xs"
        >
          <span className="font-mono text-[10px] text-[#8C7D6F]">02 → 03</span>
          <span className="tracking-widest">XEM HÀNH TRÌNH TIẾP THEO</span>
          <span className="transform group-hover:translate-x-1 transition-transform">
            <ArrowRightIcon size={15} className="text-[#C59B27]" />
          </span>
        </button>
      </div>
    </PageSurface>
  );
};
