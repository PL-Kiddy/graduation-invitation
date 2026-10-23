import React, { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { graduation } from '@/data/graduation';
import { APP_CONFIG } from '@/lib/constants';
import { CalendarIcon, MapPinIcon } from '@/components/ui/Icons';

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

        {/* 3D Turning Front Cover (Real Campus Photo Background - Sharp & Clear) */}
        <motion.div
          className="absolute inset-0 rounded-[8px] preserve-3d origin-left cursor-pointer overflow-hidden border border-[#C59B27]/70"
          style={{
            boxShadow: `
              0 25px 60px -15px rgba(140, 110, 70, 0.35),
              0 6px 18px rgba(140, 110, 70, 0.15),
              inset 0 0 0 1px rgba(255, 255, 255, 0.6)
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
          {/* Campus Background Image (khuonvien.png) - Shifted slightly left to move bottom-left leaves outward by 35-50% */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <img
              src="/image/khuonvien.png?v=3"
              alt="FPT Campus"
              className="w-[107%] h-full max-w-none object-cover -translate-x-[4.5%] object-center"
            />
          </div>

          {/* Soft warm contrast equalizer: softens glare behind name by ~18% so text and university info stay crisp */}
          <div
            className="absolute bottom-0 left-0 right-0 h-[52%] pointer-events-none"
            style={{
              background: 'linear-gradient(to top, rgba(247, 241, 230, 0.6) 0%, rgba(247, 241, 230, 0.38) 65%, transparent 100%)',
            }}
          />

          {/* Spine Binding and Emboss Crease on the left */}
          <div className="absolute top-0 bottom-0 left-0 w-8 bg-gradient-to-r from-black/20 via-black/5 to-transparent pointer-events-none z-20" />
          <div className="absolute top-0 bottom-0 left-6 w-[1.5px] bg-gradient-to-b from-transparent via-[#C59B27]/70 to-transparent pointer-events-none z-20" />

          {/* Refined Gold Foil Perimeter Frames - Secondary lines reduced to 0.25-0.4 opacity */}
          <div className="absolute inset-3 rounded-[6px] border-2 border-[#C59B27]/60 pointer-events-none shadow-[inset_0_0_0_1px_rgba(255,255,255,0.4)]" />
          <div className="absolute inset-4.5 rounded-[4px] border border-[#C59B27]/25 pointer-events-none" />

          {/* Ornate Gold Filigree Corners */}
          <div className="absolute top-5 left-5 w-3.5 h-3.5 border-t border-l border-[#C59B27]/60 pointer-events-none" />
          <div className="absolute top-5 right-5 w-3.5 h-3.5 border-t border-r border-[#C59B27]/60 pointer-events-none" />
          <div className="absolute bottom-5 left-5 w-3.5 h-3.5 border-b border-l border-[#C59B27]/60 pointer-events-none" />
          <div className="absolute bottom-5 right-5 w-3.5 h-3.5 border-b border-r border-[#C59B27]/60 pointer-events-none" />

          {/* Corner Leaf Medallions */}
          <div className="absolute top-2 left-2 w-7 h-7 rounded-full bg-[#FAF5EB] border border-[#C59B27]/60 shadow-sm flex items-center justify-center pointer-events-none z-20">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-[#C59B27]">
              <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-2.3A4.49 4.49 0 0 0 8 20C19 20 22 3 22 3c-1 2-8 2-10 4.5S8 14 8 14" />
            </svg>
          </div>

          <div className="absolute bottom-2 right-2 w-7 h-7 rounded-full bg-[#FAF5EB] border border-[#C59B27]/60 shadow-sm flex items-center justify-center pointer-events-none z-20 rotate-180">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-[#C59B27]">
              <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-2.3A4.49 4.49 0 0 0 8 20C19 20 22 3 22 3c-1 2-8 2-10 4.5S8 14 8 14" />
            </svg>
          </div>

          {/* MAIN COVER CONTENT */}
          <div className="relative z-10 w-full h-full flex flex-col justify-between items-center text-center p-4 sm:p-5 pb-5">
            {/* Top Section: Header & Graduation Title in Sky */}
            <div className="w-full space-y-1 pt-1">
              {/* Top Subtitle: Solid Elegant Gold */}
              <div className="inline-flex flex-col items-center">
                <div className="flex items-center justify-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8C6D1F]" />
                  <span className="text-[10px] md:text-[11px] uppercase tracking-[0.35em] text-[#8C6D1F] font-name-headline font-bold drop-shadow-[0_1px_2px_rgba(255,255,255,0.9)]">
                    THƯ MỜI CHÍNH THỨC
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8C6D1F]" />
                </div>
                <div className="w-12 h-[1px] bg-[#C59B27]/60 mt-1" />
              </div>

              {/* Calligraphy Headline */}
              <div className="space-y-0 pt-0.5">
                <p className="font-editorial-serif italic text-base md:text-lg text-[#8C6D1F] font-bold drop-shadow-[0_1px_2px_rgba(255,255,255,0.9)]">
                  Lễ tốt nghiệp
                </p>
                <h1 className="text-3xl md:text-4xl font-display-title font-black tracking-wider foil-gold-text leading-none uppercase drop-shadow-[0_2px_6px_rgba(255,255,255,0.9)]">
                  GRADUATION
                </h1>
                <p className="text-base md:text-lg font-mono tracking-[0.3em] text-[#C59B27] font-bold drop-shadow-[0_1px_2px_rgba(255,255,255,0.95)]">
                  2026
                </p>
              </div>
            </div>

            {/* Middle Zone: Avatar Medallion - Reduced ~10%, lifted up ~20px so Campus architecture breathes */}
            <div className="mt-auto mb-3.5 sm:mb-4">
              <div className="relative w-28 h-28 sm:w-[122px] sm:h-[122px] mx-auto">
                {/* Double Gold Ring Frame */}
                <div className="w-full h-full rounded-full overflow-hidden shadow-xl relative border-[3px] border-[#D4AF37] bg-[#FAF6ED] ring-2 ring-white/95 ring-offset-2 ring-offset-[#C59B27]/70">
                  <img
                    src="/image/dantranh.png"
                    alt="Quách Hùng Phúc Long"
                    className="w-full h-full object-cover object-[center_30%] scale-135"
                  />
                </div>
              </div>
            </div>

            {/* Bottom Section: TÂN KHOA has 14-16px breathing room below avatar, followed by Name, Pill, CTA */}
            <div className="w-full flex flex-col items-center space-y-2.5">
              {/* Graduate Formal Name directly on the flowing ribbon */}
              <div className="space-y-1">
                <span className="text-[11px] sm:text-[11.5px] uppercase font-name-headline tracking-[0.45em] text-[#5F4318] font-extrabold block drop-shadow-[0_1px_2px_rgba(255,255,255,0.9)]">
                  T Â N   K H O A
                </span>
                <h2
                  className="text-[20px] sm:text-[21.5px] md:text-[23px] font-name-headline font-black tracking-normal leading-tight whitespace-nowrap px-1"
                  style={{
                    background: 'linear-gradient(180deg, #5E3205 0%, #3B1B02 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  QUÁCH HÙNG PHÚC LONG
                </h2>
                <p className="text-[12px] sm:text-[12.5px] text-[#63574A] font-medium">
                  Trường Đại học FPT TP. Hồ Chí Minh
                </p>
              </div>

              {/* Date & Campus Pill with Vertical Divider: Height increased 6-8%, icons larger (16px) */}
              <div className="inline-flex items-center justify-center gap-3 px-5 sm:px-6 py-2.5 rounded-full bg-white/90 backdrop-blur-xs border-[1.5px] border-[#C59B27]/70 shadow-xs text-[11.5px] sm:text-[12px] font-name-headline font-bold max-w-[94%]">
                <div className="flex items-center gap-2 whitespace-nowrap text-[#8C6D1F]">
                  <CalendarIcon size={16} className="text-[#B8860B]" />
                  <span>07 • 11 • 2026</span>
                </div>
                <span className="text-[#C59B27]/50 font-light">|</span>
                <div className="flex items-center gap-2 whitespace-nowrap text-[#8C6D1F]">
                  <MapPinIcon size={16} className="text-[#B8860B]" />
                  <span>ĐẠI HỌC FPT HCM</span>
                </div>
              </div>

              {/* Touch to Open CTA Button: Solid rich gold text and arrow */}
              <motion.div
                {...{ [APP_CONFIG.INTERACTIVE_ATTR]: 'true' }}
                className="w-full max-w-[310px] mx-auto flex items-center justify-between px-6 py-2.5 sm:py-3 rounded-full bg-white/85 hover:bg-white/95 backdrop-blur-xs border-[1.5px] border-[#C59B27]/70 shadow-sm hover:shadow-md transition-all cursor-pointer group"
                animate={{
                  y: [0, -2, 0],
                  boxShadow: [
                    '0 2px 8px rgba(184, 134, 11, 0.15)',
                    '0 4px 14px rgba(184, 134, 11, 0.25)',
                    '0 2px 8px rgba(184, 134, 11, 0.15)',
                  ],
                }}
                transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div className="w-3" />
                <span className="uppercase text-center text-[11.5px] sm:text-[12px] font-name-headline font-bold tracking-[0.14em] text-[#8C6D1F]">
                  CHẠM ĐỂ MỞ THIỆP
                </span>
                <span className="text-[#B8860B] text-base font-bold transform group-hover:translate-x-1 transition-transform">
                  →
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
