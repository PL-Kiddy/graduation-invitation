import React, { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { graduation } from '@/data/graduation';

interface BookCoverProps {
  isOpening: boolean;
  onOpen: () => void;
}

export const BookCover: React.FC<BookCoverProps> = ({ isOpening, onOpen }) => {
  const [isPressed, setIsPressed] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // 3D Pointer Proximity & Dynamic Tilt Tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 200 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  const rotateX = useTransform(smoothMouseY, [-0.5, 0.5], [7, -7]);
  const rotateY = useTransform(smoothMouseX, [-0.5, 0.5], [-8, 8]);

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
      {/* 3D Physical Book Container with Tilt */}
      <motion.div
        className="relative preserve-3d"
        style={{
          width: 'min(90vw, 380px)',
          height: 'min(82vh, 610px)',
          rotateX: isOpening ? 0 : rotateX,
          rotateY: isOpening ? 0 : rotateY,
        }}
        initial={{ opacity: 0, scale: 0.88, y: 35, rotateX: 12 }}
        animate={{
          opacity: 1,
          scale: isPressed ? 0.97 : 1,
          y: isPressed ? 6 : [0, -4, 0],
          rotateX: 0,
        }}
        transition={{
          opacity: { duration: 1.1, ease: [0.16, 1, 0.3, 1] },
          scale: { duration: 0.15 },
          y: isPressed ? { duration: 0.1 } : { duration: 5, repeat: Infinity, ease: 'easeInOut' },
        }}
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
      >
        {/* Soft Warm Floor Shadow (Physical ambient occlusion) */}
        <motion.div
          className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[90%] h-14 bg-[#4A3B2C]/25 blur-2xl rounded-full pointer-events-none"
          animate={{
            scale: isOpening ? 1.08 : isPressed ? 0.94 : [1, 1.04, 1],
            opacity: isOpening ? 0.2 : isPressed ? 0.45 : 0.32,
          }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* 3D Paper Stack Edges (Right & Bottom book thickness) */}
        <div className="book-edge-stack-right" />
        <div className="book-edge-stack-bottom" />

        {/* Silk Ribbon Bookmark (FPT Orange & Gold Accent) */}
        <div
          className="absolute top-0 right-14 w-4 h-[120%] pointer-events-none z-0"
          style={{ transform: 'translateZ(-1px)' }}
        >
          <div className="w-full h-full bg-gradient-to-r from-[#D95D16] via-[#F27024] to-[#D95D16] shadow-md relative rounded-b-xs">
            <div className="absolute bottom-0 inset-x-0 h-4 bg-gradient-to-t from-black/20 to-transparent" />
            {/* Cut-out notch on bottom */}
            <div 
              className="absolute -bottom-2 left-0 right-0 h-3 bg-[#EAE0D0]"
              style={{ clipPath: 'polygon(0% 0%, 50% 100%, 100% 0%)' }}
            />
          </div>
        </div>

        {/* Underlying First Page (Revealed when cover swings open) */}
        <div
          className="absolute inset-0 rounded-[6px] paper-surface overflow-hidden shadow-xl flex flex-col justify-between p-6 pointer-events-none border border-[#E8DEC9]"
          style={{ transform: 'translateZ(-2px)' }}
        >
          <div className="flex justify-between items-start opacity-60">
            <span className="text-[10px] tracking-[0.25em] font-mono uppercase text-[#7A7065]">
              FPT UNIVERSITY
            </span>
            <span className="text-[10px] tracking-widest font-mono text-[#B88A22] font-semibold">
              01 / 11
            </span>
          </div>
          <div className="text-center opacity-65 space-y-1">
            <span className="text-xs uppercase tracking-[0.3em] font-serif-editorial text-[#35302B] font-bold">
              — LỄ TỐT NGHIỆP —
            </span>
            <p className="font-serif-editorial text-sm italic text-[#5A5045]">
              {graduation.graduateName}
            </p>
          </div>
          <div className="text-center opacity-50 text-[10px] tracking-widest font-mono text-[#7A7065]">
            {graduation.displayDate}
          </div>
        </div>

        {/* 3D Turning Front Cover (Light Luxury Ivory & Gold Foil) */}
        <motion.div
          className="absolute inset-0 rounded-[6px] cover-ivory-surface preserve-3d origin-left cursor-pointer overflow-hidden border border-[#D8CEBA]"
          style={{
            boxShadow: `
              0 20px 45px -12px rgba(80, 60, 40, 0.22),
              0 4px 12px rgba(80, 60, 40, 0.08),
              inset 0 0 0 1px rgba(255, 255, 255, 0.95),
              inset 0 0 40px rgba(210, 195, 175, 0.25)
            `,
          }}
          animate={
            isOpening
              ? {
                  rotateY: -160,
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
          {/* Spine Binding and Emboss Crease on the left */}
          <div className="absolute top-0 bottom-0 left-0 w-8 bg-gradient-to-r from-[#DCD0BE] via-[#ECE2D0] to-transparent pointer-events-none opacity-80" />
          <div className="absolute top-0 bottom-0 left-7 w-[1.5px] bg-gradient-to-b from-transparent via-[#C59B27]/40 to-transparent pointer-events-none" />

          {/* Golden Foil Perimeter Decorative Frames */}
          <div className="absolute inset-3.5 rounded-[4px] border border-[#C59B27]/40 pointer-events-none shadow-[inset_0_0_0_1px_rgba(255,255,255,0.8)]" />
          <div className="absolute inset-5 rounded-[3px] border border-[#C59B27]/25 pointer-events-none" />

          {/* Corner Gold Filigree Ornaments */}
          <div className="absolute top-6 left-6 w-3.5 h-3.5 border-t-2 border-l-2 border-[#C59B27]/60 pointer-events-none" />
          <div className="absolute top-6 right-6 w-3.5 h-3.5 border-t-2 border-r-2 border-[#C59B27]/60 pointer-events-none" />
          <div className="absolute bottom-6 left-6 w-3.5 h-3.5 border-b-2 border-l-2 border-[#C59B27]/60 pointer-events-none" />
          <div className="absolute bottom-6 right-6 w-3.5 h-3.5 border-b-2 border-r-2 border-[#C59B27]/60 pointer-events-none" />

          {/* Cover Editorial Presentation */}
          <div className="relative z-10 w-full h-full flex flex-col justify-between items-center text-center px-6 py-8">
            {/* Top Subtitle */}
            <div className="space-y-1 pt-1">
              <span className="text-[10px] uppercase tracking-[0.35em] text-[#8C6D1F] font-mono font-semibold">
                OFFICIAL INVITATION
              </span>
              <div className="w-8 h-[1px] bg-[#C59B27]/50 mx-auto" />
            </div>

            {/* Central Embossed Gold Typography */}
            <div className="relative my-auto py-2">
              {/* Shimmer Specular Light Sweep */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12 pointer-events-none"
                initial={{ x: '-130%' }}
                animate={{ x: '170%' }}
                transition={{
                  duration: 1.8,
                  delay: 1.0,
                  ease: [0.16, 1, 0.3, 1],
                }}
              />

              {/* Graduation Cap Medallion */}
              <div className="w-13 h-13 rounded-full bg-gradient-to-br from-[#FBF8F1] to-[#EAE0D0] border border-[#C59B27]/60 flex items-center justify-center mx-auto mb-3 shadow-sm">
                <svg className="w-7 h-7 text-[#C59B27]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                  <path d="M6 12v5c3 3 9 3 12 0v-5" />
                </svg>
              </div>

              <h2 className="text-xs uppercase tracking-[0.45em] text-[#7A6B5B] font-semibold mb-1">
                LỄ TỐT NGHIỆP
              </h2>
              <h1 className="text-3xl md:text-4xl font-display-title font-bold tracking-[0.16em] foil-gold-text">
                GRADUATION
              </h1>
              <p className="text-lg md:text-xl font-display-title tracking-[0.25em] text-[#A67E20] font-bold mt-0.5">
                2026
              </p>

              {/* Graduate Name */}
              <div className="mt-5 pt-4 border-t border-[#C59B27]/30 max-w-[260px] mx-auto">
                <p className="text-[10px] uppercase tracking-[0.25em] text-[#8C7D6E] mb-1 font-mono">
                  TÂN KHOA
                </p>
                <h3 className="text-base md:text-lg font-serif-editorial font-bold tracking-wider text-[#1F1C18]">
                  {graduation.graduateName}
                </h3>
              </div>
            </div>

            {/* Bottom details & Instruction */}
            <div className="w-full space-y-4 pb-1">
              <div className="space-y-1">
                <p className="text-xs font-mono tracking-widest text-[#B88A22] font-semibold">
                  {graduation.displayDate}
                </p>
                <p className="text-[11px] text-[#6A5E50] tracking-wide font-medium">
                  {graduation.university}
                </p>
              </div>

              {/* Touch to open button with luminous gold ring */}
              <motion.div
                className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-[#FAF6ED] via-[#FFFFFF] to-[#FAF6ED] border border-[#C59B27]/50 text-[#8C6D1F] text-xs font-semibold tracking-wider shadow-sm hover:shadow-md transition-shadow"
                animate={{
                  y: [0, -2, 0],
                  boxShadow: [
                    '0 2px 8px rgba(197, 155, 39, 0.15)',
                    '0 4px 16px rgba(197, 155, 39, 0.35)',
                    '0 2px 8px rgba(197, 155, 39, 0.15)',
                  ],
                }}
                transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
              >
                <span className="w-2 h-2 rounded-full bg-[#F27024] animate-ping" />
                <span>Chạm để mở thiệp</span>
              </motion.div>
            </div>
          </div>

          {/* Dynamic Light Sheen across cover during opening */}
          {isOpening && (
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-[#B4A085]/30 pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            />
          )}
        </motion.div>
      </motion.div>
    </div>
  );
};
