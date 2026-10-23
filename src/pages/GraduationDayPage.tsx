import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PageSurface } from '@/components/book/PageSurface';
import { graduation } from '@/data/graduation';
import { APP_CONFIG } from '@/lib/constants';
import { CalendarIcon, ClockIcon, MapPinIcon, ArrowRightIcon } from '@/components/ui/Icons';

export const GraduationDayPage: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    // Count down to 06:00 ICT = 23:00 UTC on 2026-11-06
    const adjustedTarget = new Date('2026-11-06T23:00:00Z').getTime();

    const update = () => {
      const diff = adjustedTarget - Date.now();
      if (diff > 0) {
        setTimeLeft({
          days:    Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours:   Math.floor((diff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff / (1000 * 60)) % 60),
          seconds: Math.floor((diff / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  const blocks = [
    { label: 'NGÀY', val: timeLeft.days },
    { label: 'GIỜ',  val: timeLeft.hours },
    { label: 'PHÚT', val: timeLeft.minutes },
    { label: 'GIÂY', val: timeLeft.seconds },
  ];

  return (
    <PageSurface variant="light" className="p-5 md:p-6 flex flex-col justify-between overflow-hidden relative">
      {/* Decorative frame */}
      <div className="absolute inset-3 rounded-[6px] border border-[#C59B27]/30 pointer-events-none" />
      <div className="absolute inset-[17px] rounded-[4px] border border-[#C59B27]/15 pointer-events-none" />

      {/* TOP HEADER */}
      <div className="relative z-20 flex items-center justify-between border-b border-[#C59B27]/20 pb-2.5 mx-2">
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-[#F27024] animate-pulse" />
          <span className="text-[10px] uppercase font-mono tracking-[0.2em] text-[#8C6D1F] font-bold">
            GRADUATION DAY // NGÀY LỄ
          </span>
        </div>
        <span className="text-[11px] font-mono font-bold text-[#8C7D6F]">04 / 10</span>
      </div>

      {/* MAIN BODY */}
      <div className="relative z-20 my-auto py-1.5 space-y-3 mx-2">
        {/* Heading */}
        <div className="text-center space-y-0.5">
          <p className="font-editorial-serif italic text-sm text-[#8C6D1F] font-semibold">
            Cột mốc chính thức
          </p>
          <h2 className="text-2xl md:text-3xl font-display-title font-black text-[#1E1A16] tracking-tight leading-snug uppercase">
            CHỈ CÒN…
          </h2>
        </div>

        {/* MINI COUNTDOWN — 4 boxes */}
        <div className="grid grid-cols-4 gap-2">
          {blocks.map((b) => (
            <div
              key={b.label}
              className="p-2 rounded-[6px] bg-gradient-to-br from-[#FFFDF9] via-[#FAF6ED] to-[#F5EFEB] border border-[#C59B27]/40 shadow-xs flex flex-col items-center"
            >
              <span className="text-[8px] font-mono font-bold text-[#8C6D1F] tracking-widest mb-1">{b.label}</span>
              <AnimatePresence mode="popLayout">
                <motion.span
                  key={b.val}
                  initial={{ y: 8, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -8, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-xl md:text-2xl font-grotesk-bold font-black tracking-tight foil-gold-text"
                >
                  {String(b.val).padStart(2, '0')}
                </motion.span>
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Key Info Card */}
        <div className="p-3.5 rounded-[6px] bg-gradient-to-br from-[#FFFDF9] via-[#FAF6ED] to-[#F5EFEB] border border-[#C59B27]/50 shadow-xs space-y-2.5">
          <div className="flex items-center justify-between border-b border-[#C59B27]/20 pb-2">
            <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-[#8C6D1F] font-bold">THÔNG TIN LỄ TỐT NGHIỆP</span>
            <span className="text-[9px] font-mono font-bold text-[#C59B27]">CHÍNH THỨC</span>
          </div>

          <div className="space-y-1.5 text-left">
            <div className="flex items-center gap-2.5">
              <div className="w-5 h-5 rounded-[3px] bg-[#FAF3E6] flex items-center justify-center border border-[#C59B27]/30 shrink-0">
                <CalendarIcon size={12} className="text-[#C59B27]" />
              </div>
              <div>
                <span className="text-[9px] font-mono text-[#8C7D6F] font-bold block">NGÀY</span>
                <span className="text-xs font-grotesk-bold font-bold text-[#1E1A16]">{graduation.displayDateWords}</span>
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <div className="w-5 h-5 rounded-[3px] bg-[#FAF3E6] flex items-center justify-center border border-[#C59B27]/30 shrink-0">
                <ClockIcon size={12} className="text-[#F27024]" />
              </div>
              <div>
                <span className="text-[9px] font-mono text-[#8C7D6F] font-bold block">GIỜ LỄ</span>
                <span className="text-xs font-grotesk-bold font-bold text-[#1E1A16]">{graduation.timeNote}</span>
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <div className="w-5 h-5 rounded-[3px] bg-[#FAF3E6] flex items-center justify-center border border-[#C59B27]/30 shrink-0">
                <MapPinIcon size={12} className="text-[#2E8B57]" />
              </div>
              <div>
                <span className="text-[9px] font-mono text-[#8C7D6F] font-bold block">ĐỊA ĐIỂM</span>
                <span className="text-xs font-grotesk-bold font-bold text-[#1E1A16] leading-snug block">{graduation.campus}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Emotional note + Calendar CTA */}
        <div className="p-2.5 rounded-[6px] bg-[#FAF3E6] border border-[#C59B27]/30">
          <p className="font-editorial-serif italic text-[11px] text-[#3D352B] leading-relaxed mb-2">
            "Cho đến ngày tôi chính thức khép laptop lại để đi nhận bằng."
          </p>
          <div
            {...{ [APP_CONFIG.INTERACTIVE_ATTR]: 'true' }}
            className="flex gap-2"
          >
            <motion.button
              whileTap={{ scale: 0.96 }}
              onClick={() => window.open(graduation.calendarUrl, '_blank')}
              className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-full bg-gradient-to-r from-[#FAF3E6] via-[#FFFDF8] to-[#FAF3E6] border border-[#C59B27] text-[#8C6D1F] text-[10px] font-grotesk-bold font-bold tracking-wider shadow-xs hover:shadow-md transition-all cursor-pointer"
            >
              <CalendarIcon size={12} className="text-[#8C6D1F]" />
              <span>Thêm vào lịch</span>
            </motion.button>
            <motion.button
              whileTap={{ scale: 0.96 }}
              onClick={() => window.open(graduation.googleMapsUrl, '_blank')}
              className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-full bg-gradient-to-r from-[#C59B27] to-[#B8860B] text-white text-[10px] font-grotesk-bold font-bold tracking-wider shadow-sm hover:shadow-md transition-all cursor-pointer"
            >
              <MapPinIcon size={12} className="text-white" />
              <span>Xem bản đồ</span>
            </motion.button>
          </div>
        </div>
      </div>

      {/* BOTTOM HINT */}
      <div className="relative z-20 flex items-center justify-between text-[10px] font-mono text-[#8C7D6F] pt-2 border-t border-[#C59B27]/20 mx-2">
        <span>07.11.2026 · 06:00–18:00</span>
        <span className="font-semibold text-[#8C6D1F] flex items-center gap-1">
          <span>Địa điểm & Sơ đồ</span>
          <ArrowRightIcon size={11} className="text-[#8C6D1F]" />
        </span>
      </div>
    </PageSurface>
  );
};
