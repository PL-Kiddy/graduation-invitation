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
    // Sequenced progression
    const t1 = setTimeout(() => setStep(1), 400); // 07 · 11 · 2026
    const t2 = setTimeout(() => setStep(2), 1200); // "Có một cái hẹn..."
    const t3 = setTimeout(() => setStep(3), 2000); // Graduate Name
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
      className="fixed inset-0 z-50 flex flex-col items-center justify-between p-8 bg-gradient-to-b from-[#FCFAF6] via-[#F7EFE4] to-[#EDE3D3] text-[#1F1C18] cursor-pointer select-none overflow-hidden"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.02, filter: 'blur(8px)', transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] } }}
    >
      {/* Warm champagne & golden sunbeam ambient bloom */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] bg-gradient-to-br from-[#F7E5B5]/60 via-[#F27024]/10 to-transparent rounded-full blur-[100px] pointer-events-none" />

      {/* Top Header */}
      <div className="w-full flex justify-between items-center text-[10px] font-mono tracking-[0.25em] text-[#8C7E70]">
        <span className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#F27024]" />
          TRƯỜNG ĐẠI HỌC FPT
        </span>
        <span className="font-semibold text-[#B88A22]">2026</span>
      </div>

      {/* Center Cinematic Stage */}
      <div className="my-auto text-center space-y-6 max-w-sm relative z-10">
        {/* Step 1: 07 · 11 · 2026 */}
        <AnimatePresence>
          {step >= 1 && (
            <motion.div
              className="flex items-center justify-center gap-2.5 font-mono text-xs md:text-sm tracking-[0.35em] text-[#B88A22] font-semibold"
              initial={{ opacity: 0, y: 15, filter: 'blur(6px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <span>07</span>
              <span className="text-[#F27024]">·</span>
              <span>11</span>
              <span className="text-[#F27024]">·</span>
              <span>2026</span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Step 2: "Có một cái hẹn..." */}
        <AnimatePresence>
          {step >= 2 && (
            <motion.div
              className="space-y-1.5 font-serif-editorial text-2xl md:text-3xl text-[#2B241E] leading-relaxed"
              initial={{ opacity: 0, y: 18, filter: 'blur(8px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="font-normal text-[#4A4036]">Có một cái hẹn</p>
              <p className="italic font-bold text-[#1F1C18]">mình muốn bạn có mặt.</p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Step 3: QUÁCH HÙNG PHÚC LONG */}
        <AnimatePresence>
          {step >= 3 && (
            <motion.div
              className="pt-2 space-y-3"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h1
                className="font-serif-editorial font-bold text-base md:text-lg text-[#1F1C18] tracking-[0.2em] uppercase"
                initial={{ letterSpacing: '0.35em', opacity: 0 }}
                animate={{ letterSpacing: '0.22em', opacity: 1 }}
                transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
              >
                {graduation.formalName}
              </motion.h1>

              {/* Gold foil accent line */}
              <motion.div
                className="w-20 h-[1.5px] bg-gradient-to-r from-transparent via-[#C59B27] to-transparent mx-auto"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Bottom Skip Prompt with subtle golden pill */}
      <motion.div
        className="px-3.5 py-1.5 rounded-full bg-[#FFFFFF]/80 border border-[#E5DC CE] text-[10px] font-mono tracking-widest text-[#7A6E60] shadow-xs backdrop-blur-xs"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.9 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        Chạm bất kỳ đâu để vào thiệp ✕
      </motion.div>
    </motion.div>
  );
};
