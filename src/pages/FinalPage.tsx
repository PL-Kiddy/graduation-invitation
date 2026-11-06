import React from 'react';
import { motion } from 'framer-motion';
import { PageSurface } from '@/components/book/PageSurface';
import { APP_CONFIG } from '@/lib/constants';
import {
  SparklesIcon,
  RefreshIcon,
  PhoneIcon,
} from '@/components/ui/Icons';

interface FinalPageProps {
  onRestart?: () => void;
}

export const FinalPage: React.FC<FinalPageProps> = ({ onRestart }) => {
  return (
    <PageSurface variant="gold" className="p-5 md:p-6 flex flex-col justify-between overflow-hidden relative">
      {/* Double Gold Foil Border Frame (as in Reference Image 1) */}
      <div className="absolute inset-3 rounded-[6px] border border-[#C59B27]/40 pointer-events-none" />
      <div className="absolute inset-4.5 rounded-[4px] border border-[#C59B27]/20 pointer-events-none" />

      {/* Ornate Gold Filigree Corners */}
      <div className="absolute top-5 left-5 w-3.5 h-3.5 border-t-2 border-l-2 border-[#C59B27]/70 pointer-events-none" />
      <div className="absolute top-5 right-5 w-3.5 h-3.5 border-t-2 border-r-2 border-[#C59B27]/70 pointer-events-none" />
      <div className="absolute bottom-5 left-5 w-3.5 h-3.5 border-b-2 border-l-2 border-[#C59B27]/70 pointer-events-none" />
      <div className="absolute bottom-5 right-5 w-3.5 h-3.5 border-b-2 border-r-2 border-[#C59B27]/70 pointer-events-none" />

      {/* 3D Paper Floral & Gold Leaf Accent Bottom Right (as in Reference Image 1) */}
      <div className="absolute bottom-2 right-2 pointer-events-none floral-accent-shadow z-10 rotate-180">
        <svg width="55" height="55" viewBox="0 0 100 100" fill="none">
          <path d="M15 15 C30 5, 55 15, 65 35 C45 40, 25 30, 15 15 Z" fill="#D4AF37" opacity="0.8" />
          <path d="M15 15 C10 35, 20 60, 40 68 C45 50, 35 30, 15 15 Z" fill="#D4AF37" opacity="0.8" />
          <circle cx="30" cy="30" r="12" fill="#FFFFFF" filter="drop-shadow(0 2px 4px rgba(0,0,0,0.08))" />
          <circle cx="27" cy="27" r="6" fill="#F8F6F0" />
          <circle cx="30" cy="30" r="3" fill="#D4AF37" />
        </svg>
      </div>

      {/* TOP HEADER */}
      <div className="relative z-20 flex items-center justify-between border-b border-[#C59B27]/25 pb-2.5 mx-2">
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-[#2E8B57]" />
          <span className="text-[10px] uppercase font-mono tracking-[0.2em] text-[#8C6D1F] font-bold">
            LỜI KẾT
          </span>
        </div>
        <span className="text-[11px] font-mono font-bold text-[#8C7D6F]">
          06 / 06
        </span>
      </div>

      {/* MAIN CINEMATIC CLOSURE BODY (Matching Reference Image 1 & 2) */}
      <div className="relative z-20 my-auto py-1 space-y-3 text-center flex flex-col items-center">
        {/* Glowing Circular Golden Medallion Portrait Halo (Matching Reference Image 1 & 2) */}
        <motion.div
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative w-28 h-28 md:w-32 md:h-32 my-1"
        >
          <div className="w-full h-full rounded-full gold-halo-ring bg-gradient-to-br from-[#FFFDF9] via-[#FAF5EB] to-[#EDE2D0] p-1 shadow-xl flex items-center justify-center overflow-hidden relative">
            <img
              src="/image/IMG_8825tachnen.png"
              alt="Quách Hùng Phúc Long"
              className="w-full h-full object-cover object-top scale-110"
            />
          </div>

          {/* Mini 3D Floral Pin on Halo (from Image 1) */}
          <div className="absolute -bottom-1 -right-1 pointer-events-none floral-accent-shadow">
            <svg width="26" height="26" viewBox="0 0 40 40" fill="none">
              <circle cx="20" cy="20" r="10" fill="#FFFFFF" />
              <circle cx="18" cy="18" r="5" fill="#FAF5EB" />
              <circle cx="20" cy="20" r="2.5" fill="#D4AF37" />
              <path d="M26 12 C30 8, 36 12, 34 18 Z" fill="#D4AF37" opacity="0.9" />
            </svg>
          </div>
        </motion.div>

        {/* Title & Name */}
        <div className="space-y-1">
          <p className="font-editorial-serif italic text-base md:text-lg text-[#8C6D1F] font-semibold">
            Lễ tốt nghiệp
          </p>

          {/* Handwritten Signature with Flowing Underline */}
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="pt-0.5 flex flex-col items-center"
          >
            <span className="font-editorial-serif italic text-2xl md:text-3xl font-bold text-[#8C6D1F] leading-tight">
              Quách Hùng Phúc Long
            </span>
            {/* Elegant signature stroke */}
            <svg width="150" height="16" viewBox="0 0 120 14" fill="none" className="opacity-80 mt-0.5">
              <path d="M5 8 C30 1, 60 14, 90 6 C105 2, 115 10, 118 7" stroke="#C59B27" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          </motion.div>
        </div>

        {/* Speech Bubble "CONTACT WITH ME" */}
        <motion.div
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="relative inline-block mt-1"
        >
          <div className="bg-white border border-[#C59B27]/40 px-3 py-1 rounded-[4px] shadow-xs text-[9px] font-mono font-bold tracking-widest text-[#8C6D1F] uppercase relative">
            CONTACT WITH ME
            {/* Bubble Tail */}
            <div className="absolute -bottom-1.5 left-4 w-2 h-2 bg-white border-b border-r border-[#C59B27]/40 rotate-45" />
          </div>
        </motion.div>

        {/* Bronze / Gold Luxury Phone Pill */}
        <motion.a
          href="tel:0819404252"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.75 }}
          className="w-full max-w-[240px] bg-gradient-to-r from-[#A67C1E] via-[#C59B27] to-[#8C6514] text-white py-2 px-4 rounded-full shadow-md flex items-center justify-center gap-2.5 text-sm font-grotesk-bold font-bold tracking-wider hover:brightness-105 active:scale-98 transition-all cursor-pointer"
        >
          <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
            <PhoneIcon size={14} className="text-white" />
          </span>
          <span>0819404252</span>
        </motion.a>

        {/* Action Button: Xem lại thiệp ↻ */}
        <div {...{ [APP_CONFIG.INTERACTIVE_ATTR]: 'true' }} className="w-full max-w-[240px] pt-1">
          {onRestart && (
            <motion.button
              whileTap={{ scale: 0.97 }}
              onClick={onRestart}
              className="w-full flex items-center justify-center gap-2 py-2 rounded-[4px] bg-white text-[#8C6D1F] border border-[#C59B27]/50 text-xs font-grotesk-bold font-bold tracking-wider hover:bg-[#FAF3E6] transition-colors cursor-pointer shadow-sm"
            >
              <span>Xem lại thiệp</span>
              <RefreshIcon size={13} className="text-[#8C6D1F]" />
            </motion.button>
          )}
        </div>
      </div>

      {/* BOTTOM HINT */}
      <div className="relative z-20 text-center text-[10px] font-mono text-[#8C7D6F] pt-2 border-t border-[#C59B27]/20 mx-2 flex items-center justify-center gap-1.5">
        <span>Trân trọng cảm ơn sự hiện diện và đồng hành của bạn</span>
        <SparklesIcon size={12} className="text-[#C59B27]" />
      </div>
    </PageSurface>
  );
};
