import React, { useState } from 'react';
import { PageSurface } from '@/components/book/PageSurface';
import { Button } from '@/components/ui/Button';
import { APP_CONFIG } from '@/lib/constants';

export const CampusPage: React.FC = () => {
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  return (
    <PageSurface className="p-6 md:p-8 flex flex-col justify-between">
      <div className="flex items-center justify-between border-b border-[#E5DC CE] pb-3">
        <span className="text-[10px] uppercase font-mono tracking-[0.2em] text-[#7A7065] font-semibold">
          KHUÔN VIÊN • CHƯƠNG V
        </span>
        <span className="text-[11px] font-mono tracking-widest text-[#B88A22] font-semibold">
          06 / 11
        </span>
      </div>

      <div className="my-auto py-3 space-y-4 text-center">
        <div className="space-y-1">
          <p className="text-[10px] uppercase font-mono tracking-[0.25em] text-[#005A9E] font-bold">
            FPT CAMPUS Q9
          </p>
          <h2 className="text-xl md:text-2xl font-serif-editorial font-bold text-[#1F1C18] leading-tight">
            ĐÂY LÀ NƠI<br />MỌI CHUYỆN DIỄN RA.
          </h2>
        </div>

        {/* 3D Preview Portal Card with Gesture Isolation */}
        <div
          {...{ [APP_CONFIG.INTERACTIVE_ATTR]: 'true' }}
          className="relative w-full aspect-[4/3] rounded-[8px] overflow-hidden bg-gradient-to-br from-[#FFFFFF] via-[#FAF6ED] to-[#EFE4D2] border border-[#C59B27]/40 flex flex-col items-center justify-center p-6 text-center text-[#1F1C18] shadow-md hover:shadow-lg transition-all group cursor-pointer"
          onClick={() => setIsViewerOpen(!isViewerOpen)}
        >
          {/* Subtle grid pattern placeholder */}
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#C59B27_1.5px,transparent_1.5px)] [background-size:16px_16px]" />

          <div className="relative z-10 space-y-2.5">
            <div className="w-13 h-13 rounded-full bg-gradient-to-br from-[#FAF6EE] to-[#E8DFC9] border border-[#C59B27]/50 flex items-center justify-center mx-auto text-[#B88A22] group-hover:scale-110 shadow-sm transition-transform">
              <svg className="w-7 h-7 text-[#005A9E]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 2a14.5 14.5 0 0 0 0 20M2 12h20" />
              </svg>
            </div>
            <p className="text-xs font-mono tracking-widest uppercase text-[#B88A22] font-bold">
              KHÁM PHÁ CAMPUS 360°
            </p>
            <p className="text-[11px] text-[#6A5E50] max-w-[240px]">
              {isViewerOpen ? 'Đang mở góc nhìn toàn cảnh' : 'Chạm để bước vào không gian trường'}
            </p>
          </div>
        </div>

        <div>
          <Button
            size="sm"
            variant="foil"
            onClick={() => setIsViewerOpen(!isViewerOpen)}
          >
            {isViewerOpen ? 'Đóng góc nhìn ✕' : 'Trải nghiệm không gian 360° ✨'}
          </Button>
        </div>
      </div>

      <div className="text-center text-[10px] font-mono text-[#7A7065]">
        Vuốt sang trái để tiếp tục →
      </div>
    </PageSurface>
  );
};
