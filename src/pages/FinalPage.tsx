import React from 'react';
import { PageSurface } from '@/components/book/PageSurface';
import { graduation } from '@/data/graduation';
import { Button } from '@/components/ui/Button';

interface FinalPageProps {
  onRestart?: () => void;
}

export const FinalPage: React.FC<FinalPageProps> = ({ onRestart }) => {
  return (
    <PageSurface className="p-6 md:p-8 flex flex-col justify-between">
      <div className="flex items-center justify-between border-b border-[#E5DC CE] pb-3">
        <span className="text-[10px] uppercase font-mono tracking-[0.2em] text-[#7A7065] font-semibold">
          LỜI KẾT • HOÀN TẤT
        </span>
        <span className="text-[11px] font-mono tracking-widest text-[#B88A22] font-semibold">
          11 / 11
        </span>
      </div>

      <div className="my-auto py-4 space-y-4 text-center">
        <div className="space-y-1">
          <p className="text-xs font-mono font-bold tracking-widest text-[#B88A22]">
            {graduation.displayDate}
          </p>
          <h2 className="text-xl md:text-2xl font-serif-editorial font-bold text-[#1F1C18]">
            {graduation.graduateName}
          </h2>
          <p className="text-xs text-[#7A7065] font-medium">
            {graduation.university}
          </p>
        </div>

        <div className="w-12 h-[1.5px] bg-[#C59B27] mx-auto" />

        <div className="space-y-1">
          <p className="text-base md:text-lg font-serif-editorial italic text-[#2B241E]">
            “Hẹn gặp bạn ở ngày tôi tốt nghiệp.”
          </p>
          <p className="font-serif-editorial text-sm italic font-bold text-[#8C6D1F]">
            — {graduation.firstName}
          </p>
        </div>

        <div className="flex flex-col gap-2.5 max-w-[240px] mx-auto pt-2">
          {onRestart && (
            <Button
              size="sm"
              variant="primary"
              onClick={onRestart}
            >
              Xem lại thiệp ↻
            </Button>
          )}
          <Button
            size="sm"
            variant="secondary"
            onClick={() => window.open(`https://maps.google.com/?q=${encodeURIComponent(graduation.campus)}`, '_blank')}
          >
            Xem đường đi 📍
          </Button>
        </div>
      </div>

      <div className="text-center text-[10px] font-mono text-[#7A7065]">
        Trân trọng cảm ơn sự hiện diện của bạn ✨
      </div>
    </PageSurface>
  );
};
