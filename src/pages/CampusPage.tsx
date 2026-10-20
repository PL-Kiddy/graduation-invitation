import React, { useState } from 'react';
import { PageSurface } from '@/components/book/PageSurface';
import { Button } from '@/components/ui/Button';
import { APP_CONFIG } from '@/lib/constants';

export const CampusPage: React.FC = () => {
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  return (
    <PageSurface className="p-6 md:p-8 flex flex-col justify-between">
      <div className="flex items-center justify-between border-b border-[#35302B]/15 pb-3">
        <span className="text-[10px] uppercase font-mono tracking-[0.2em] text-[#736B63]">
          KHUÔN VIÊN • CHƯƠNG V
        </span>
        <span className="text-[11px] font-mono tracking-widest text-[#736B63]">
          06 / 11
        </span>
      </div>

      <div className="my-auto py-3 space-y-4 text-center">
        <div className="space-y-1">
          <p className="text-[10px] uppercase font-mono tracking-[0.25em] text-[#005A9E]">
            FPT CAMPUS Q9
          </p>
          <h2 className="text-xl md:text-2xl font-serif-editorial font-bold text-[#181614] leading-tight">
            ĐÂY LÀ NƠI<br />MỌI CHUYỆN DIỄN RA.
          </h2>
        </div>

        {/* 360 Preview Portal Card with Gesture Isolation */}
        <div
          {...{ [APP_CONFIG.INTERACTIVE_ATTR]: 'true' }}
          className="relative w-full aspect-[4/3] rounded-[6px] overflow-hidden bg-[#1E1B18] border border-[#C5A059]/30 flex flex-col items-center justify-center p-6 text-center text-[#FAF7F0] shadow-md group cursor-pointer"
          onClick={() => setIsViewerOpen(!isViewerOpen)}
        >
          {/* Subtle grid pattern placeholder */}
          <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#C5A059_1px,transparent_1px)] [background-size:16px_16px]" />

          <div className="relative z-10 space-y-2">
            <div className="w-12 h-12 rounded-full bg-[#FAF7F0]/10 border border-[#FAF7F0]/20 flex items-center justify-center mx-auto text-[#EED7A1] group-hover:scale-105 transition-transform">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 2a14.5 14.5 0 0 0 0 20M2 12h20" />
              </svg>
            </div>
            <p className="text-xs font-mono tracking-widest uppercase text-[#EED7A1]">
              KHÁM PHÁ CAMPUS 360°
            </p>
            <p className="text-[10px] text-[#A69C8E]">
              Chạm và kéo để nhìn quanh (Giai đoạn hoàn thiện tiếp theo)
            </p>
          </div>
        </div>

        <div>
          <Button
            size="sm"
            variant="foil"
            onClick={() => setIsViewerOpen(!isViewerOpen)}
          >
            {isViewerOpen ? 'Đóng góc nhìn' : 'Trải nghiệm không gian'}
          </Button>
        </div>
      </div>

      <div className="text-center text-[10px] font-mono text-[#8C8375]">
        Vuốt sang trái để tiếp tục →
      </div>
    </PageSurface>
  );
};
