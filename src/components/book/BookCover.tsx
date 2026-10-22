import React, { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { graduation } from '@/data/graduation';
import { APP_CONFIG } from '@/lib/constants';
import { CapIcon, SparklesIcon, CalendarIcon, MapPinIcon } from '@/components/ui/Icons';

interface BookCoverProps {
  isOpening: boolean;
  onOpen: () => void;
}

export const BookCover: React.FC<BookCoverProps> = ({ isOpening, onOpen }) => {
  const [isPressed, setIsPressed] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // 3D Pointer Proximity & Dynamic Tilt Tracking (restrained 1-3 degrees)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 180 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  const rotateX = useTransform(smoothMouseY, [-0.5, 0.5], [4, -4]);
  const rotateY = useTransform(smoothMouseX, [-0.5, 0.5], [-5, 5]);

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (isOpening || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handlePointerLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

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
    <div
      ref={containerRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className="relative w-full h-full flex items-center justify-center perspective-container select-none px-4"
    >
      {/* 3D Physical Art Book Container */}
      <motion.div
        className="relative preserve-3d"
        style={{
          width: 'min(90vw, 390px)',
          height: 'min(82vh, 620px)',
          rotateX: isOpening ? 0 : rotateX,
          rotateY: isOpening ? 0 : rotateY,
        }}
        initial={{ opacity: 0, scale: 0.9, y: 30 }}
        animate={{
          opacity: 1,
          scale: isPressed ? 0.97 : 1,
          y: isPressed ? 4 : [0, -4, 0],
          rotateX: 0,
        }}
        transition={{
          opacity: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
          scale: { duration: 0.15 },
          y: isPressed ? { duration: 0.1 } : { duration: 6, repeat: Infinity, ease: 'easeInOut' },
        }}
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
      >
        {/* Soft Warm Depth Floor Shadow */}
        <motion.div
          className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[92%] h-14 bg-[#B89B72]/30 blur-2xl rounded-full pointer-events-none"
          animate={{
            scale: isOpening ? 1.08 : isPressed ? 0.95 : [1, 1.03, 1],
            opacity: isOpening ? 0.15 : isPressed ? 0.5 : 0.35,
          }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* 3D Paper Stack Edges with Gold Rim Accent */}
        <div className="book-edge-stack-right" style={{ borderRight: '2px solid #C59B27' }} />
        <div className="book-edge-stack-bottom" style={{ borderBottom: '2px solid #C59B27' }} />

        {/* Underlying First Page (Bright ivory & gold) */}
        <div
          className="absolute inset-0 rounded-[8px] bg-[#FAF8F5] overflow-hidden shadow-xl flex flex-col justify-between p-6 pointer-events-none border border-[#E2DDD3]"
          style={{ transform: 'translateZ(-2px)' }}
        >
          <div className="flex justify-between items-start opacity-70">
            <span className="text-[10px] tracking-[0.25em] font-mono font-bold text-[#8C6D1F]">
              FPT UNIVERSITY // 2026
            </span>
            <span className="text-[10px] font-mono font-bold text-[#C59B27] px-2 py-0.5 bg-[#FAF3E6] rounded border border-[#C59B27]/30">
              01 / 11
            </span>
          </div>
          <div className="space-y-1">
            <span className="text-[11px] uppercase tracking-[0.3em] font-grotesk-bold text-[#C59B27]">
              LỄ TỐT NGHIỆP CỬ NHÂN
            </span>
            <h2 className="text-2xl font-grotesk-bold tracking-tight text-[#1E1A16] leading-none">
              {graduation.graduateName}
            </h2>
          </div>
          <div className="text-[10px] tracking-widest font-mono text-[#8C7D6F]">
            {graduation.displayDate}
          </div>
        </div>

        {/* 3D Turning Front Cover (Luxury Pristine Ivory with Gold Foil & 3D Floral Aesthetics) */}
        <motion.div
          className="absolute inset-0 rounded-[8px] bg-gradient-to-br from-[#FFFFFF] via-[#FDFBF7] to-[#F7F2E9] preserve-3d origin-left cursor-pointer overflow-hidden border border-[#DCD5C7]"
          style={{
            boxShadow: `
              0 25px 60px -15px rgba(140, 110, 70, 0.28),
              0 6px 18px rgba(140, 110, 70, 0.12),
              inset 0 0 0 1px rgba(255, 255, 255, 0.95),
              inset 0 0 35px rgba(230, 215, 190, 0.3)
            `,
          }}
          animate={
            isOpening
              ? {
                  rotateY: -160,
                  transition: {
                    duration: 1.25,
                    ease: [0.22, 1, 0.36, 1],
                  },
                }
              : {
                  rotateY: 0,
                }
          }
        >
          {/* Spine Binding and Emboss Crease on the left */}
          <div className="absolute top-0 bottom-0 left-0 w-8 bg-gradient-to-r from-[#E8DEC9] via-[#F5EFEB] to-transparent pointer-events-none z-20 opacity-80" />
          <div className="absolute top-0 bottom-0 left-6 w-[1.5px] bg-gradient-to-b from-transparent via-[#C59B27]/50 to-transparent pointer-events-none z-20" />

          {/* Double Layered Gold Foil Perimeter Frames (Matching Reference Image 1) */}
          <div className="absolute inset-3 rounded-[6px] border border-[#C59B27]/40 pointer-events-none shadow-[inset_0_0_0_1px_rgba(255,255,255,0.9)]" />
          <div className="absolute inset-4.5 rounded-[4px] border border-[#C59B27]/25 pointer-events-none" />

          {/* Ornate Gold Filigree Corners (Matching Reference Image 1) */}
          <div className="absolute top-5 left-5 w-4 h-4 border-t-2 border-l-2 border-[#C59B27]/70 pointer-events-none" />
          <div className="absolute top-5 right-5 w-4 h-4 border-t-2 border-r-2 border-[#C59B27]/70 pointer-events-none" />
          <div className="absolute bottom-5 left-5 w-4 h-4 border-b-2 border-l-2 border-[#C59B27]/70 pointer-events-none" />
          <div className="absolute bottom-5 right-5 w-4 h-4 border-b-2 border-r-2 border-[#C59B27]/70 pointer-events-none" />

          {/* 3D Paper Floral & Gold Leaves Ornament (Corner Accent as in Reference Image 1) */}
          <div className="absolute top-1 left-1 pointer-events-none z-15 floral-accent-shadow opacity-95">
            <svg width="68" height="68" viewBox="0 0 100 100" fill="none">
              {/* Gold Leaves */}
              <path d="M15 15 C30 5, 55 15, 65 35 C45 40, 25 30, 15 15 Z" fill="url(#goldGrad)" opacity="0.85" />
              <path d="M15 15 C10 35, 20 60, 40 68 C45 50, 35 30, 15 15 Z" fill="url(#goldGrad)" opacity="0.85" />
              {/* White 3D Petals */}
              <circle cx="32" cy="32" r="14" fill="#FFFFFF" filter="drop-shadow(0 2px 4px rgba(0,0,0,0.1))" />
              <circle cx="28" cy="28" r="8" fill="#F8F6F0" />
              <circle cx="32" cy="32" r="4" fill="#D4AF37" />
              <defs>
                <linearGradient id="goldGrad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#D4AF37" />
                  <stop offset="50%" stopColor="#FFF3B3" />
                  <stop offset="100%" stopColor="#997316" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div className="absolute bottom-1 right-1 pointer-events-none z-15 floral-accent-shadow opacity-95 rotate-180">
            <svg width="68" height="68" viewBox="0 0 100 100" fill="none">
              <path d="M15 15 C30 5, 55 15, 65 35 C45 40, 25 30, 15 15 Z" fill="url(#goldGrad2)" opacity="0.85" />
              <path d="M15 15 C10 35, 20 60, 40 68 C45 50, 35 30, 15 15 Z" fill="url(#goldGrad2)" opacity="0.85" />
              <circle cx="32" cy="32" r="14" fill="#FFFFFF" filter="drop-shadow(0 2px 4px rgba(0,0,0,0.1))" />
              <circle cx="28" cy="28" r="8" fill="#F8F6F0" />
              <circle cx="32" cy="32" r="4" fill="#D4AF37" />
              <defs>
                <linearGradient id="goldGrad2" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#D4AF37" />
                  <stop offset="50%" stopColor="#FFF3B3" />
                  <stop offset="100%" stopColor="#997316" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* MAIN COVER CONTENT */}
          <div className="relative z-10 w-full h-full flex flex-col justify-between items-center text-center p-6 md:p-8">
            {/* Top Subtitle */}
            <div className="space-y-1 pt-1">
              <div className="flex items-center justify-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C59B27]" />
                <span className="text-[10px] uppercase tracking-[0.35em] text-[#8C6D1F] font-mono font-bold">
                  THƯ MỜI CHÍNH THỨC
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#C59B27]" />
              </div>
              <div className="w-10 h-[1px] bg-[#C59B27]/40 mx-auto" />
            </div>

            {/* Central Embossed Gold Typography & Graduate Halo (Matching Reference Image 1 & 2) */}
            <div className="my-auto py-2 space-y-3.5 w-full">
              {/* Calligraphy Headline */}
              <div className="space-y-0.5">
                <p className="font-editorial-serif italic text-base md:text-lg text-[#8C6D1F] font-semibold">
                  Lễ tốt nghiệp
                </p>
                <h1 className="text-3xl md:text-4xl font-display-title font-black tracking-wider foil-gold-text leading-none uppercase">
                  GRADUATION
                </h1>
                <p className="text-xl md:text-2xl font-mono tracking-[0.25em] text-[#C59B27] font-bold">
                  2026
                </p>
              </div>

              {/* Glowing Golden Medallion Portrait Ring (from Image 1 & 2) */}
              <div className="relative w-24 h-24 md:w-28 md:h-28 mx-auto my-1">
                <div className="w-full h-full rounded-full gold-halo-ring bg-gradient-to-br from-[#FAF5EB] to-[#EBE2D2] flex flex-col items-center justify-center shadow-lg overflow-hidden relative">
                  {/* Graduate Cap Vector Icon */}
                  <CapIcon size={34} className="text-[#C59B27] filter drop-shadow-xs" />
                  <span className="text-[8px] font-mono font-bold text-[#8C6D1F] tracking-wider mt-1">
                    CỬ NHÂN IT
                  </span>
                </div>
                {/* 3D Floral cluster badge on bottom-right of medallion (as in Image 1) */}
                <div className="absolute -bottom-1 -right-1 w-7 h-7 rounded-full bg-white shadow-md border border-[#D4AF37]/50 flex items-center justify-center text-[#C59B27]">
                  <SparklesIcon size={14} className="text-[#C59B27]" />
                </div>
              </div>

              {/* Graduate Formal Name in Bold & Calligraphy */}
              <div className="space-y-0.5 pt-1">
                <span className="text-[9px] uppercase font-mono tracking-[0.3em] text-[#8C7D6F] font-bold block">
                  TÂN KHOA
                </span>
                <h2 className="text-xl md:text-2xl font-grotesk-bold font-bold tracking-tight text-[#1E1A16] leading-tight">
                  QUÁCH HÙNG PHÚC LONG
                </h2>
                <p className="text-[11px] text-[#6A5E50] font-sans-modern font-medium">
                  {graduation.university}
                </p>
              </div>
            </div>

            {/* Bottom details & Tactile Touch CTA */}
            <div className="w-full space-y-3.5 pb-1">
              <div className="flex items-center justify-center gap-3 text-xs font-mono font-bold text-[#8C6D1F]">
                <span className="flex items-center gap-1.5">
                  <CalendarIcon size={14} className="text-[#C59B27]" />
                  <span>{graduation.displayDate}</span>
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <MapPinIcon size={14} className="text-[#C59B27]" />
                  <span>CAMPUS Q9</span>
                </span>
              </div>

              {/* Touch to open button with luminous gold ring */}
              <motion.div
                {...{ [APP_CONFIG.INTERACTIVE_ATTR]: 'true' }}
                className="w-full flex items-center justify-between px-5 py-2.5 rounded-full bg-gradient-to-r from-[#FAF3E6] via-[#FFFFFF] to-[#FAF3E6] border border-[#C59B27]/50 text-[#8C6D1F] text-xs font-grotesk-bold font-bold tracking-wider shadow-md hover:shadow-lg transition-all cursor-pointer group"
                animate={{
                  y: [0, -2, 0],
                  boxShadow: [
                    '0 4px 12px rgba(197, 155, 39, 0.15)',
                    '0 6px 20px rgba(197, 155, 39, 0.3)',
                    '0 4px 12px rgba(197, 155, 39, 0.15)',
                  ],
                }}
                transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#C59B27] animate-ping" />
                  <span>CHẠM ĐỂ MỞ THIỆP</span>
                </div>
                <span className="font-mono text-sm transform group-hover:translate-x-1 transition-transform">
                  ↗
                </span>
              </motion.div>
            </div>
          </div>

          {/* Dynamic Light Sheen when opening */}
          {isOpening && (
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent pointer-events-none"
              initial={{ x: '-100%' }}
              animate={{ x: '100%' }}
              transition={{ duration: 0.8 }}
            />
          )}
        </motion.div>
      </motion.div>
    </div>
  );
};
