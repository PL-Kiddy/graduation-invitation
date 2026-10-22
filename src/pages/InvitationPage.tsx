import React from 'react';
import { PageSurface } from '@/components/book/PageSurface';
import { graduation } from '@/data/graduation';
import { Button } from '@/components/ui/Button';

export const InvitationPage: React.FC = () => {
  return (
    <PageSurface className="p-6 md:p-8 flex flex-col justify-between">
      <div className="flex items-center justify-between border-b border-[#E5DC CE] pb-3">
        <span className="text-[10px] uppercase font-mono tracking-[0.2em] text-[#7A7065] font-semibold">
          THƯ MỜI • CHƯƠNG III
        </span>
        <span className="text-[11px] font-mono tracking-widest text-[#B88A22] font-semibold">
          04 / 11
        </span>
      </div>

      <div className="my-auto py-3 space-y-4 text-left">
        <div className="space-y-1">
          <p className="text-[10px] uppercase font-mono tracking-[0.25em] text-[#B88A22] font-bold">
            MỘT CÁI HẸN QUAN TRỌNG
          </p>
          <h2 className="text-xl md:text-2xl font-serif-editorial font-bold text-[#1F1C18] leading-snug">
            Mời bạn đến dự lễ tốt nghiệp của Long.
          </h2>
        </div>

        <p className="text-xs md:text-sm text-[#4A4238] leading-relaxed">
          Một ngày khá quan trọng với mình, và chắc chắn sẽ vui hơn rất nhiều nếu hôm đó có sự hiện diện của bạn cùng chung vui và ghi lại những kỷ niệm đẹp.
        </p>

        <div className="p-4 rounded-[6px] bg-[#FFFFFF]/90 border border-[#C59B27]/35 space-y-2.5 text-xs shadow-xs">
          <div className="flex items-start gap-2.5">
            <span className="font-mono text-[#B88A22] font-bold min-w-[48px]">NGÀY:</span>
            <span className="font-bold text-[#1F1C18]">{graduation.displayDate}</span>
          </div>
          <div className="flex items-start gap-2.5">
            <span className="font-mono text-[#B88A22] font-bold min-w-[48px]">GIỜ:</span>
            <span className="text-[#6A5E50]">{graduation.timeNote}</span>
          </div>
          <div className="flex items-start gap-2.5">
            <span className="font-mono text-[#B88A22] font-bold min-w-[48px]">NƠI:</span>
            <span className="text-[#3D352D] font-medium">{graduation.campus}</span>
          </div>
        </div>

        <div className="flex items-center gap-2.5 pt-1">
          <Button
            size="sm"
            variant="foil"
            onClick={() => {
              const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent('Lễ Tốt Nghiệp — Quách Hùng Phúc Long')}&dates=20261107T010000Z/20261107T050000Z&details=${encodeURIComponent('Lễ tốt nghiệp của Quách Hùng Phúc Long tại Trường Đại học FPT TP.HCM')}&location=${encodeURIComponent(graduation.campus)}`;
              window.open(url, '_blank');
            }}
          >
            Thêm vào lịch 📅
          </Button>
          <Button
            size="sm"
            variant="secondary"
            onClick={() => window.open(`https://maps.google.com/?q=${encodeURIComponent(graduation.campus)}`, '_blank')}
          >
            Xem địa điểm 📍
          </Button>
        </div>
      </div>

      <div className="text-center text-[10px] font-mono text-[#7A7065]">
        Vuốt sang trái để tiếp tục →
      </div>
    </PageSurface>
  );
};
