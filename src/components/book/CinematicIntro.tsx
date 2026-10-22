import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { graduation } from '@/data/graduation';
import { APP_CONFIG } from '@/lib/constants';

interface CinematicIntroProps {
  onComplete: () => void;
}

export const CinematicIntro: React.FC<CinematicIntroProps> = ({ onComplete }) => {
  const [step, setStep] = useState<number>(0);

  useEffect(() => {
    const t1 = setTimeout(() => setStep(1), 300);
    const t2 = setTimeout(() => setStep(2), 1000);
    const t3 = setTimeout(() => setStep(3), 1800);
    const t4 = setTimeout(() => onComplete(), APP_CONFIG.TIMING.INTRO_AUTOSKIP_DELAY);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, [onComplete]);

  return (
    <motion.div
      onClick={onComplete}
      className="fixed inset-0 z-50 flex flex-col items-center justify-between p-6 md:p-10 bg-gradient-to-b from-[#FFFDF9] via-[#FAF6EE] to-[#F3ECE0] text-[#1E1A16] cursor-pointer select-none overflow-hidden"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.03, filter: 'blur(8px)', transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }}
    >
      {/* Background Soft Golden Hall Light Bloom */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[70vw] h-[50vh] opacity-35 blur-[100px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #F7E7A9 0%, #D4AF37 50%, transparent 80%)',
        }}
      />

      {/* Background Giant Warm Watermark Numbers */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.05] overflow-hidden select-none">
        <span className="font-grotesk-bold text-[38vw] md:text-[28vw] leading-none text-[#C59B27] tracking-tighter">
          07.11
        </span>
      </div>

      {/* Top Header Grid */}
      <div className="w-full flex justify-between items-center text-[10px] font-mono tracking-[0.2em] text-[#8C7D6F] z-10 border-b border-[#C59B27]/20 pb-3">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#C59B27] animate-pulse" />
          <span className="font-bold text-[#8C6D1F]">FPT UNIVERSITY // GRADUATION</span>
        </div>
        <span className="text-[#C59B27] font-bold">[2026]</span>
      </div>

      {/* Center Cinematic Kinetic Typography Stage */}
      <div className="my-auto text-left w-full max-w-md space-y-6 relative z-10 px-2">
        {/* Step 1: Oversized Gold Foil 07 · 11 · 26 */}
        <AnimatePresence>
          {step >= 1 && (
            <motion.div
              className="flex items-baseline gap-2 font-grotesk-bold tracking-tighter"
              initial={{ opacity: 0, x: -25 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="text-5xl md:text-6xl foil-gold-text font-black">07</span>
              <span className="text-3xl md:text-4xl text-[#C59B27]/60">/</span>
              <span className="text-5xl md:text-6xl foil-gold-text font-black">11</span>
              <span className="text-3xl md:text-4xl text-[#C59B27]/60">/</span>
              <span className="text-5xl md:text-6xl text-[#1E1A16] font-black">2026</span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Step 2: "Có một cái hẹn / mình muốn bạn có mặt." */}
        <AnimatePresence>
          {step >= 2 && (
            <motion.div
              className="space-y-1"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="font-grotesk-bold text-2xl md:text-3xl tracking-tight text-[#1E1A16] uppercase">
                Có một cái hẹn
              </p>
              <p className="font-editorial-serif italic text-2xl md:text-3xl foil-gold-text font-bold">
                mình muốn bạn có mặt.
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Step 3: QUÁCH HÙNG PHÚC LONG */}
        <AnimatePresence>
          {step >= 3 && (
            <motion.div
              className="pt-2 space-y-2.5"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full bg-[#FAF3E6] border border-[#C59B27]/40 text-[#8C6D1F] text-[10px] font-mono font-bold uppercase tracking-wider">
                  TÂN KHOA CỬ NHÂN
                </span>
                <span className="text-[10px] font-mono text-[#2E8B57] font-semibold">
                  STATUS: GRADUATED 🎓
                </span>
              </div>

              <motion.h1
                className="font-grotesk-bold text-3xl md:text-4xl text-[#1E1A16] tracking-tight uppercase leading-none font-black"
                initial={{ letterSpacing: '0.08em', opacity: 0 }}
                animate={{ letterSpacing: '-0.02em', opacity: 1 }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              >
                {graduation.formalName}
              </motion.h1>

              {/* Gold & Orange decorative accent bar */}
              <div className="flex items-center gap-1.5 pt-1">
                <div className="w-12 h-1 bg-[#C59B27] rounded-full" />
                <div className="w-4 h-1 bg-[#F27024] rounded-full" />
                <div className="w-2 h-1 bg-[#2E8B57] rounded-full" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Bottom Skip Prompt */}
      <motion.div
        className="w-full flex justify-between items-center text-[10px] font-mono text-[#8C7D6F] pt-4 border-t border-[#C59B27]/20 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.85 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <span>CHẠM BẤT KỲ ĐỂ TIẾP TỤC</span>
        <span className="text-[#C59B27] font-bold flex items-center gap-1">
          <span>MỞ THIỆP MỜI</span>
          <span>↗</span>
        </span>
      </motion.div>
    </motion.div>
  );
};
