import React from 'react';
import { PageSurface } from '@/components/book/PageSurface';
import { graduation } from '@/data/graduation';
import { Button } from '@/components/ui/Button';

export const InvitationPage: React.FC = () => {
  return (
    <PageSurface className="p-6 md:p-8 flex flex-col justify-between">
      <div className="flex items-center justify-between border-b border-[#35302B]/15 pb-3">
        <span className="text-[10px] uppercase font-mono tracking-[0.2em] text-[#736B63]">
          THƯ MỜI • CHƯƠNG III
        </span>
        <span className="text-[11px] font-mono tracking-widest text-[#736B63]">
          04 / 11
        </span>
      </div>

      <div className="my-auto py-3 space-y-4 text-left">
        <div className="space-y-1">
          <p className="text-[10px] uppercase font-mono tracking-[0.25em] text-[#C5A059]">
            MỘT CÁI HẸN QUAN TRỌNG
          </p>
          <h2 className="text-xl md:text-2xl font-serif-editorial font-bold text-[#181614] leading-snug">
            Mời bạn đến dự lễ tốt nghiệp của Long.
          </h2>
        </div>

        <p className="text-xs md:text-sm text-[#403A34] leading-relaxed">
          Một ngày khá quan trọng với mình, và chắc chắn sẽ vui hơn rất nhiều nếu hôm đó có sự hiện diện của bạn cùng chia sẻ niềm vui này.
        </p>

        <div className="p-3.5 rounded-[4px] bg-[#FAF7F0] border border-[#C5A059]/30 space-y-2 text-xs">
          <div className="flex items-start gap-2">
            <span className="font-mono text-[#C5A059] font-bold">NGÀY:</span>
            <span className="font-semibold text-[#181614]">{graduation.displayDate}</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="font-mono text-[#C5A059] font-bold">GIỜ:</span>
            <span className="text-[#554E45]">{graduation.timeNote}</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="font-mono text-[#C5A059] font-bold">NƠI:</span>
            <span className="text-[#35302B]">{graduation.campus}</span>
          </div>
        </div>

        <div className="flex items-center gap-2 pt-1">
          <Button size="sm" variant="foil">
            Thêm vào lịch
          </Button>
          <Button size="sm" variant="secondary">
            Xem địa điểm
          </Button>
        </div>
      </div>

      <div className="text-center text-[10px] font-mono text-[#8C8375]">
        Vuốt sang trái để tiếp tục →
      </div>
    </PageSurface>
  );
};
