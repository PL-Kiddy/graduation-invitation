import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { graduation } from '@/data/graduation';

interface BookCoverProps {
  isOpening: boolean;
  onOpen: () => void;
}

export const BookCover: React.FC<BookCoverProps> = ({ isOpening, onOpen }) => {
  const [isPressed, setIsPressed] = useState(false);

  const handlePointerDown = () => {
    if (isOpening) return;
    setIsPressed(true);
  };

  const handlePointerUp = () => {
    if (isOpening) return;
    setIsPressed(false);
    onOpen();
  };

  return (
    <div className="relative w-full h-full flex items-center justify-center perspective-container select-none px-4">
      {/* Dynamic 3D Book Container */}
      <motion.div
        className="relative preserve-3d"
        style={{
          width: 'min(92vw, 380px)',
          height: 'min(82vh, 600px)',
        }}
        initial={{ opacity: 0, scale: 0.88, y: 30, rotateX: 8 }}
        animate={{
          opacity: 1,
          scale: isPressed ? 0.96 : 1,
          y: isPressed ? 4 : [0, -3, 0],
          rotateX: 0,
          rotateY: isPressed ? -2 : 0,
        }}
        transition={{
          opacity: { duration: 1.1, ease: [0.16, 1, 0.3, 1] },
          scale: { duration: 0.15 },
          y: isPressed ? { duration: 0.1 } : { duration: 4.5, repeat: Infinity, ease: 'easeInOut' },
        }}
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
      >
        {/* Soft Book Shadow on Table / Ambient Floor */}
        <motion.div
          className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[85%] h-12 bg-black/55 blur-xl rounded-full pointer-events-none"
          animate={{
            scale: isOpening ? 1.08 : isPressed ? 0.92 : [1, 1.04, 1],
            opacity: isOpening ? 0.3 : isPressed ? 0.7 : 0.5,
          }}
          transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Underlying First Page (Revealed when cover swings open) */}
        <div
          className="absolute inset-0 rounded-[6px] paper-surface overflow-hidden shadow-2xl flex flex-col justify-between p-6 pointer-events-none"
          style={{ transform: 'translateZ(-2px)' }}
        >
          <div className="flex justify-between items-start opacity-35">
            <span className="text-[10px] tracking-[0.25em] font-mono uppercase text-[#736B63]">
              FPT UNIVERSITY
            </span>
            <span className="text-[10px] tracking-widest font-mono text-[#736B63]">
              01
            </span>
          </div>
          <div className="text-center opacity-40">
            <span className="text-xs uppercase tracking-[0.3em] font-serif-editorial text-[#35302B]">
              — LỄ TỐT NGHIỆP —
            </span>
          </div>
          <div className="text-center opacity-30 text-[10px] tracking-widest text-[#736B63]">
            {graduation.displayDate}
          </div>
        </div>

        {/* 3D Turning Front Cover */}
        <motion.div
          className="absolute inset-0 rounded-[6px] cover-leather-surface preserve-3d origin-left cursor-pointer overflow-hidden border border-[#C5A059]/30"
          style={{
            boxShadow: `
              0 20px 45px -10px rgba(0, 0, 0, 0.7),
              0 0 0 1px rgba(255, 255, 255, 0.08) inset,
              inset 0 0 60px rgba(0, 0, 0, 0.6)
            `,
          }}
          animate={
            isOpening
              ? {
                  rotateY: -155,
                  transition: {
                    duration: 1.35,
                    ease: [0.22, 1, 0.36, 1],
                  },
                }
              : {
                  rotateY: 0,
                }
          }
        >
          {/* Leather spine emboss & stitch line on the left */}
          <div className="absolute top-0 bottom-0 left-0 w-8 bg-gradient-to-r from-black/60 via-black/25 to-transparent pointer-events-none" />
          <div className="absolute top-0 bottom-0 left-7 w-[1px] bg-gradient-to-b from-transparent via-[#C5A059]/30 to-transparent pointer-events-none" />

          {/* Golden foil decorative borders */}
          <div className="absolute inset-4 rounded-[4px] border border-[#C5A059]/25 pointer-events-none" />
          <div className="absolute inset-[19px] rounded-[3px] border border-[#C5A059]/15 pointer-events-none" />

          {/* Corner gold ornaments */}
          <div className="absolute top-5 left-5 w-3 h-3 border-t border-l border-[#C5A059]/50 pointer-events-none" />
          <div className="absolute top-5 right-5 w-3 h-3 border-t border-r border-[#C5A059]/50 pointer-events-none" />
          <div className="absolute bottom-5 left-5 w-3 h-3 border-b border-l border-[#C5A059]/50 pointer-events-none" />
          <div className="absolute bottom-5 right-5 w-3 h-3 border-b border-r border-[#C5A059]/50 pointer-events-none" />

          {/* Cover Editorial Content */}
          <div className="relative z-10 w-full h-full flex flex-col justify-between items-center text-center px-6 py-8">
            {/* Header: Class of 2026 */}
            <div className="space-y-1 pt-1">
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#C5A059]/80 font-mono">
                INVITATION
              </span>
              <div className="w-6 h-[1px] bg-[#C5A059]/40 mx-auto" />
            </div>

            {/* Central Title Foil Typography */}
            <div className="relative my-auto py-4">
              {/* Single restrained light sweep across GRADUATION 2026 */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -skew-x-12 pointer-events-none"
                initial={{ x: '-120%' }}
                animate={{ x: '160%' }}
                transition={{
                  duration: 1.6,
                  delay: 0.9,
                  ease: [0.16, 1, 0.3, 1],
                }}
              />

              <h2 className="text-xs uppercase tracking-[0.45em] text-[#A69C8E] font-medium mb-1">
                LỄ TỐT NGHIỆP
              </h2>
              <h1 className="text-3xl md:text-4xl font-display-title font-bold tracking-[0.18em] foil-gold-text">
                GRADUATION
              </h1>
              <p className="text-lg md:text-xl font-display-title tracking-[0.25em] text-[#EED7A1]/90 mt-0.5">
                2026
              </p>

              {/* Graduate Name */}
              <div className="mt-6 pt-5 border-t border-[#C5A059]/20">
                <p className="text-xs uppercase tracking-[0.2em] text-[#8C8375] mb-1 font-mono">
                  TÂN KHOA
                </p>
                <h3 className="text-base md:text-lg font-serif-editorial font-bold tracking-widest text-[#F2ECE1]">
                  {graduation.graduateName}
                </h3>
              </div>
            </div>

            {/* Bottom details & Instruction */}
            <div className="w-full space-y-4 pb-2">
              <div className="space-y-1">
                <p className="text-xs font-mono tracking-widest text-[#C5A059]">
                  {graduation.displayDate}
                </p>
                <p className="text-[11px] text-[#8C8375] tracking-wide">
                  {graduation.university}
                </p>
              </div>

              {/* Touch to open pill */}
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#26211C]/90 border border-[#C5A059]/30 text-[#E7C986] text-xs font-medium tracking-wider shadow-inner"
                animate={{
                  y: [0, -2, 0],
                  borderColor: ['rgba(197, 160, 89, 0.25)', 'rgba(197, 160, 89, 0.55)', 'rgba(197, 160, 89, 0.25)'],
                }}
                transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#F27024] animate-pulse" />
                <span>Chạm để mở</span>
              </motion.div>
            </div>
          </div>

          {/* Dynamic specular lighting layer during opening */}
          {isOpening && (
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-black/60 pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            />
          )}
        </motion.div>
      </motion.div>
    </div>
  );
};
