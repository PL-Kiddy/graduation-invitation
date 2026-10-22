import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PageSurface } from '@/components/book/PageSurface';
import { graduation } from '@/data/graduation';
import { ClockIcon, ArrowRightIcon } from '@/components/ui/Icons';

export const CountdownPage: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date(`${graduation.graduationDate}T08:00:00+07:00`).getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  const timeBlocks = [
    { label: 'NGÀY', val: timeLeft.days },
    { label: 'GIỜ', val: timeLeft.hours },
    { label: 'PHÚT', val: timeLeft.minutes },
    { label: 'GIÂY', val: timeLeft.seconds },
  ];

  return (
    <PageSurface variant="light" className="p-5 md:p-6 flex flex-col justify-between overflow-hidden relative">
      {/* Delicate Double Gold Border Frame */}
      <div className="absolute inset-3 rounded-[6px] border border-[#C59B27]/30 pointer-events-none" />
      <div className="absolute inset-4 rounded-[4px] border border-[#C59B27]/20 pointer-events-none" />

      {/* TOP HEADER */}
      <div className="relative z-20 flex items-center justify-between border-b border-[#C59B27]/20 pb-2.5 mx-2">
        <div className="flex items-center gap-1.5">
          <ClockIcon size={13} className="text-[#C59B27]" />
          <span className="text-[10px] uppercase font-mono tracking-[0.2em] text-[#8C6D1F] font-bold">
            COUNTDOWN // THỜI KHẮC
          </span>
        </div>
        <span className="text-[11px] font-mono font-bold text-[#8C7D6F]">
          05 / 11
        </span>
      </div>

      {/* MAIN BRIGHT GOLD COUNTDOWN BODY */}
      <div className="relative z-20 my-auto py-2 space-y-4 text-center mx-2">
        {/* Title */}
        <div className="space-y-0.5">
          <p className="font-editorial-serif italic text-base text-[#8C6D1F] font-semibold">
            Đếm ngược từng ngày
          </p>
          <h2 className="text-3xl md:text-4xl font-display-title font-black text-[#1E1A16] tracking-tight uppercase leading-none">
            CHỈ CÒN...
          </h2>
        </div>

        {/* 2x2 LUXURY GOLD COUNTDOWN CARDS */}
        <div className="grid grid-cols-2 gap-3 max-w-[320px] mx-auto">
          {timeBlocks.map((block) => (
            <div
              key={block.label}
              className="p-3.5 rounded-[6px] bg-gradient-to-br from-[#FFFDF9] via-[#FAF6ED] to-[#F5EFEB] border border-[#C59B27]/40 shadow-xs flex flex-col items-center justify-between relative overflow-hidden"
            >
              <span className="text-[9px] font-mono font-bold text-[#8C6D1F] tracking-widest uppercase mb-1">
                {block.label}
              </span>

              {/* Big Digits in Gold Foil */}
              <div className="h-12 md:h-14 overflow-hidden relative flex items-center justify-center">
                <AnimatePresence mode="popLayout">
                  <motion.span
                    key={block.val}
                    initial={{ y: 15, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -15, opacity: 0 }}
                    transition={{ duration: 0.35, ease: 'easeOut' }}
                    className="text-3xl md:text-4xl font-grotesk-bold font-black tracking-tight foil-gold-text block"
                  >
                    {String(block.val).padStart(2, '0')}
                  </motion.span>
                </AnimatePresence>
              </div>

              <div className="w-8 h-[1px] bg-[#C59B27]/30 mt-1" />
            </div>
          ))}
        </div>

        {/* Witty Emotional Note */}
        <div className="p-3.5 rounded-[6px] bg-[#FAF3E6] border border-[#C59B27]/35 space-y-1.5 max-w-[320px] mx-auto">
          <p className="font-editorial-serif italic text-xs md:text-sm text-[#3D352B] leading-relaxed">
            “Cho đến ngày tôi chính thức khép laptop lại để đi nhận bằng.”
          </p>
          <div className="flex items-center justify-between font-mono text-[10px] pt-1 border-t border-[#C59B27]/25 text-[#8C6D1F]">
            <span className="font-bold">DEADLINE LẦN NÀY:</span>
            <span className="font-bold text-[#F27024]">{graduation.displayDate}</span>
          </div>
        </div>
      </div>

      {/* BOTTOM HINT */}
      <div className="relative z-20 flex items-center justify-between text-[10px] font-mono text-[#8C7D6F] pt-2 border-t border-[#C59B27]/20 mx-2">
        <span>TICKING FORWARD</span>
        <span className="font-semibold text-[#8C6D1F] flex items-center gap-1">
          <span>Khám phá Campus 360°</span>
          <ArrowRightIcon size={11} className="text-[#8C6D1F]" />
        </span>
      </div>
    </PageSurface>
  );
};
