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
      className="fixed inset-0 z-50 flex flex-col items-center justify-between p-8 bg-[#0c0c0e] text-[#FAF7F0] cursor-pointer select-none overflow-hidden"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] } }}
    >
      {/* Subtle background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-[#C5A059]/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Top Header Placeholder */}
      <div className="w-full flex justify-between items-center text-[10px] font-mono tracking-[0.25em] text-[#736B63] opacity-60">
        <span>FPT UNIVERSITY</span>
        <span>2026</span>
      </div>

      {/* Center Cinematic Stage */}
      <div className="my-auto text-center space-y-6 max-w-sm">
        {/* Step 1: 07 · 11 · 2026 */}
        <AnimatePresence>
          {step >= 1 && (
            <motion.div
              className="flex items-center justify-center gap-2 font-mono text-xs md:text-sm tracking-[0.35em] text-[#C5A059]"
              initial={{ opacity: 0, y: 15, filter: 'blur(6px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <span>07</span>
              <span>·</span>
              <span>11</span>
              <span>·</span>
              <span>2026</span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Step 2: "Có một cái hẹn..." */}
        <AnimatePresence>
          {step >= 2 && (
            <motion.div
              className="space-y-1 font-serif-editorial text-xl md:text-2xl text-[#E8E2D4] leading-relaxed"
              initial={{ opacity: 0, y: 15, filter: 'blur(8px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              <p>Có một cái hẹn</p>
              <p className="italic text-[#FAF7F0]">mình muốn bạn có mặt.</p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Step 3: QUÁCH HÙNG PHÚC LONG */}
        <AnimatePresence>
          {step >= 3 && (
            <motion.div
              className="pt-2 space-y-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h1
                className="font-serif-editorial font-bold text-sm md:text-base text-[#FAF0D7]"
                initial={{ letterSpacing: '0.35em', opacity: 0 }}
                animate={{ letterSpacing: '0.22em', opacity: 1 }}
                transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
              >
                {graduation.formalName}
              </motion.h1>

              {/* Thin accent line drawing */}
              <motion.div
                className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#C5A059] to-transparent mx-auto"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Bottom Skip Prompt */}
      <motion.div
        className="text-[10px] font-mono tracking-widest text-[#736B63] opacity-75"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.75 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        Chạm bất kỳ đâu để mở thiệp ✕
      </motion.div>
    </motion.div>
  );
};
