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
      <div className="flex items-center justify-between border-b border-[#35302B]/15 pb-3">
        <span className="text-[10px] uppercase font-mono tracking-[0.2em] text-[#736B63]">
          LỜI KẾT • HOÀN TẤT
        </span>
        <span className="text-[11px] font-mono tracking-widest text-[#736B63]">
          11 / 11
        </span>
      </div>

      <div className="my-auto py-4 space-y-4 text-center">
        <div className="space-y-1">
          <p className="text-xs font-mono font-semibold tracking-widest text-[#C5A059]">
            {graduation.displayDate}
          </p>
          <h2 className="text-xl md:text-2xl font-serif-editorial font-bold text-[#181614]">
            {graduation.graduateName}
          </h2>
          <p className="text-xs text-[#736B63]">
            {graduation.university}
          </p>
        </div>

        <div className="w-10 h-[1.5px] bg-[#C5A059]/40 mx-auto" />

        <div className="space-y-1">
          <p className="text-base md:text-lg font-serif-editorial italic text-[#26211C]">
            “Hẹn gặp bạn ở ngày tôi tốt nghiệp.”
          </p>
          <p className="font-serif-editorial text-sm italic text-[#736B63]">
            — {graduation.firstName}
          </p>
        </div>

        <div className="flex flex-col gap-2 max-w-[220px] mx-auto pt-2">
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
            Xem đường đi
          </Button>
        </div>
      </div>

      <div className="text-center text-[10px] font-mono text-[#8C8375]">
        Trân trọng cảm ơn sự hiện diện của bạn
      </div>
    </PageSurface>
  );
};
