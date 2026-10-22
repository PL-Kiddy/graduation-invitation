import React from 'react';
import { motion } from 'framer-motion';
import { PageSurface } from '@/components/book/PageSurface';
import { graduation } from '@/data/graduation';
import { APP_CONFIG } from '@/lib/constants';

export const InvitationPage: React.FC = () => {
  return (
    <PageSurface variant="light" className="p-5 md:p-6 flex flex-col justify-between overflow-hidden relative">
      {/* Double Gold Foil Border Frame (Matching Reference Image 1) */}
      <div className="absolute inset-3 rounded-[6px] border border-[#C59B27]/40 pointer-events-none shadow-[inset_0_0_0_1px_rgba(255,255,255,0.9)]" />
      <div className="absolute inset-4.5 rounded-[4px] border border-[#C59B27]/25 pointer-events-none" />

      {/* Ornate Gold Filigree Corners */}
      <div className="absolute top-5 left-5 w-3 h-3 border-t-2 border-l-2 border-[#C59B27]/70 pointer-events-none" />
      <div className="absolute top-5 right-5 w-3 h-3 border-t-2 border-r-2 border-[#C59B27]/70 pointer-events-none" />
      <div className="absolute bottom-5 left-5 w-3 h-3 border-b-2 border-l-2 border-[#C59B27]/70 pointer-events-none" />
      <div className="absolute bottom-5 right-5 w-3 h-3 border-b-2 border-r-2 border-[#C59B27]/70 pointer-events-none" />

      {/* TOP HEADER */}
      <div className="relative z-20 flex items-center justify-between border-b border-[#C59B27]/20 pb-2.5 mx-2">
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-[#C59B27]" />
          <span className="text-[10px] uppercase font-mono tracking-[0.2em] text-[#8C6D1F] font-bold">
            OFFICIAL INVITATION // THƯ MỜI
          </span>
        </div>
        <span className="text-[11px] font-mono font-bold text-[#8C7D6F]">
          04 / 11
        </span>
      </div>

      {/* MAIN INVITATION CARD (Matching Reference Image 1 & 2 Layout) */}
      <div className="relative z-20 my-auto py-2 space-y-3.5 mx-2 text-center">
        {/* Calligraphy Header */}
        <div className="space-y-0.5">
          <p className="font-editorial-serif italic text-base md:text-lg text-[#8C6D1F] font-semibold">
            Trân trọng kính mời
          </p>
          <h2 className="text-2xl md:text-3xl font-display-title font-black tracking-tight text-[#1E1A16] leading-snug">
            DỰ LỄ TỐT NGHIỆP CỦA LONG
          </h2>
          <p className="text-xs text-[#6A5E50] max-w-[280px] mx-auto leading-relaxed pt-0.5 font-sans-modern">
            Một ngày khá quan trọng với mình, và chắc chắn sẽ trọn vẹn hơn rất nhiều nếu hôm đó có sự hiện diện của bạn.
          </p>
        </div>

        {/* BRIGHT GOLD POSTER DATE & VENUE BOX */}
        <div className="relative p-4 rounded-[6px] bg-gradient-to-br from-[#FFFDF9] via-[#FAF6ED] to-[#F5EFEB] border border-[#C59B27]/50 shadow-sm space-y-3">
          <div className="flex items-center justify-between border-b border-[#C59B27]/25 pb-2">
            <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-[#8C6D1F] font-bold">
              THỜI GIAN &amp; ĐỊA ĐIỂM
            </span>
            <span className="text-[10px] font-mono font-bold text-[#C59B27]">CHÍNH THỨC</span>
          </div>

          {/* Large Date Display: 07 / 11 / 2026 */}
          <div className="flex items-center justify-around py-1">
            <div className="text-center">
              <span className="text-3xl md:text-4xl font-grotesk-bold font-black foil-gold-text block leading-none">07</span>
              <span className="text-[9px] font-mono text-[#8C7D6F] uppercase font-bold mt-1 block">NGÀY</span>
            </div>
            <span className="text-2xl text-[#C59B27]/40 font-light">/</span>
            <div className="text-center">
              <span className="text-3xl md:text-4xl font-grotesk-bold font-black text-[#F27024] block leading-none">11</span>
              <span className="text-[9px] font-mono text-[#8C7D6F] uppercase font-bold mt-1 block">THÁNG</span>
            </div>
            <span className="text-2xl text-[#C59B27]/40 font-light">/</span>
            <div className="text-center">
              <span className="text-3xl md:text-4xl font-grotesk-bold font-black foil-gold-text block leading-none">2026</span>
              <span className="text-[9px] font-mono text-[#8C7D6F] uppercase font-bold mt-1 block">NĂM</span>
            </div>
          </div>

          {/* Time & Venue Information */}
          <div className="grid grid-cols-2 gap-2 pt-2 border-t border-[#C59B27]/25 text-left text-[11px] font-sans-modern">
            <div className="bg-white/80 p-2 rounded-[4px] border border-[#C59B27]/20">
              <span className="text-[9px] font-mono text-[#8C7D6F] block font-bold">GIỜ LỄ:</span>
              <span className="font-bold text-[#1E1A16]">{graduation.timeNote}</span>
            </div>
            <div className="bg-white/80 p-2 rounded-[4px] border border-[#C59B27]/20">
              <span className="text-[9px] font-mono text-[#8C7D6F] block font-bold">ĐỊA ĐIỂM:</span>
              <span className="font-bold text-[#1E1A16] truncate block">{graduation.campus}</span>
            </div>
          </div>
        </div>

        {/* TACTILE CTAS in Bright Gold Theme */}
        <div {...{ [APP_CONFIG.INTERACTIVE_ATTR]: 'true' }} className="grid grid-cols-2 gap-2.5 pt-1">
          <motion.button
            whileTap={{ scale: 0.97 }}
            onClick={() => {
              const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent('Lễ Tốt Nghiệp — Quách Hùng Phúc Long')}&dates=20261107T010000Z/20261107T050000Z&details=${encodeURIComponent('Lễ tốt nghiệp của Quách Hùng Phúc Long tại Trường Đại học FPT TP.HCM')}&location=${encodeURIComponent(graduation.campus)}`;
              window.open(url, '_blank');
            }}
            className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-full bg-gradient-to-r from-[#FAF3E6] via-[#FFFDF8] to-[#FAF3E6] border border-[#C59B27] text-[#8C6D1F] text-xs font-grotesk-bold font-bold tracking-wider shadow-xs hover:shadow-md transition-all cursor-pointer"
          >
            <span>Thêm vào lịch</span>
            <span>📅</span>
          </motion.button>

          <motion.button
            whileTap={{ scale: 0.97 }}
            onClick={() => window.open(`https://maps.google.com/?q=${encodeURIComponent(graduation.campus)}`, '_blank')}
            className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-full bg-gradient-to-r from-[#C59B27] to-[#B8860B] text-white text-xs font-grotesk-bold font-bold tracking-wider shadow-sm hover:shadow-md transition-all cursor-pointer"
          >
            <span>Xem địa điểm</span>
            <span>📍</span>
          </motion.button>
        </div>
      </div>

      {/* BOTTOM HINT */}
      <div className="relative z-20 flex items-center justify-between text-[10px] font-mono text-[#8C7D6F] pt-2 border-t border-[#C59B27]/20 mx-2">
        <span>QUÁCH HÙNG PHÚC LONG</span>
        <span className="font-semibold text-[#8C6D1F]">Vuốt để đếm ngược →</span>
      </div>
    </PageSurface>
  );
};
