import React from 'react';
import { motion } from 'framer-motion';
import { PageSurface } from '@/components/book/PageSurface';
import { graduation } from '@/data/graduation';
import { APP_CONFIG } from '@/lib/constants';
import {
  CapIcon,
  SparklesIcon,
  CalendarIcon,
  MapPinIcon,
  RefreshIcon,
  FacebookIcon,
  ZaloIcon,
  TikTokIcon,
  InstagramIcon,
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
            FINALE // LỜI KẾT
          </span>
        </div>
        <span className="text-[11px] font-mono font-bold text-[#8C7D6F]">
          10 / 10
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
          <div className="w-full h-full rounded-full gold-halo-ring bg-gradient-to-br from-[#FFFDF9] via-[#FAF5EB] to-[#EDE2D0] p-1.5 shadow-xl flex flex-col items-center justify-center overflow-hidden relative">
            <CapIcon size={36} className="text-[#C59B27] filter drop-shadow-xs" />
            <span className="font-grotesk-bold text-base font-bold text-[#8C6D1F] tracking-wider mt-1">
              PHÚC LONG
            </span>
            <span className="text-[8px] font-mono font-bold tracking-widest text-[#C59B27] uppercase">
              CLASS OF 2026
            </span>
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

        {/* Title & Name (Styled like Reference Image 1 & 2) */}
        <div className="space-y-0.5">
          <p className="font-editorial-serif italic text-sm md:text-base text-[#8C6D1F] font-semibold">
            Lễ tốt nghiệp
          </p>
          <motion.h2
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="text-xl md:text-2xl font-grotesk-bold font-black text-[#1E1A16] tracking-tight uppercase"
          >
            {graduation.graduateName}
          </motion.h2>
          <p className="text-[10px] font-mono tracking-[0.2em] foil-gold-text font-bold">
            ĐÃ SẴN SÀNG • 07.11.2026
          </p>
        </div>

        {/* Handwritten Signature with Flowing Underline (from Reference Image 2) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="pt-1 flex flex-col items-center"
        >
          <span className="font-editorial-serif italic text-lg font-bold text-[#8C6D1F]">
            Quách Hùng Phúc Long
          </span>
          {/* Elegant signature stroke */}
          <svg width="120" height="14" viewBox="0 0 120 14" fill="none" className="opacity-70">
            <path d="M5 8 C30 1, 60 14, 90 6 C105 2, 115 10, 118 7" stroke="#C59B27" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </motion.div>

        {/* Speech Bubble "CONTACT WITH ME" (from Reference Image 2) */}
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

        {/* Bronze / Gold Luxury Social Pill Bar (from Reference Image 2) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.75 }}
          className="w-full max-w-[300px] bg-gradient-to-r from-[#A67C1E] via-[#C59B27] to-[#8C6514] text-white py-1.5 px-3 rounded-full shadow-md flex items-center justify-between text-xs font-mono font-bold"
        >
          <div className="flex items-center gap-1.5">
            <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
              <FacebookIcon size={12} className="text-white" />
            </span>
            <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
              <ZaloIcon size={12} className="text-white" />
            </span>
            <span className="text-[10px] tracking-wider pl-1 flex items-center gap-1">
              <PhoneIcon size={10} className="text-white/80" />
              <span>07.11.2026</span>
            </span>
          </div>
          <div className="h-3 w-px bg-white/30" />
          <div className="flex items-center gap-1.5">
            <span className="text-[9px] tracking-wide text-white/90">@phuclong</span>
            <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
              <TikTokIcon size={11} className="text-white" />
            </span>
            <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
              <InstagramIcon size={11} className="text-white" />
            </span>
          </div>
        </motion.div>

        {/* Action Buttons: Xem lại thiệp ↻, Bản đồ, Lịch hẹn */}
        <div {...{ [APP_CONFIG.INTERACTIVE_ATTR]: 'true' }} className="space-y-1.5 w-full max-w-[280px] pt-1">
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

          <div className="grid grid-cols-2 gap-2">
            <motion.button
              whileTap={{ scale: 0.97 }}
              onClick={() => window.open(graduation.googleMapsUrl, '_blank')}
              className="flex items-center justify-center gap-1.5 py-1.5 rounded-[4px] bg-[#FAF5EB] hover:bg-[#F3E8D3] text-[#8C6D1F] border border-[#C59B27]/30 text-[10px] font-mono font-bold tracking-wider transition-colors cursor-pointer"
            >
              <MapPinIcon size={12} className="text-[#8C6D1F]" />
              <span>Bản đồ</span>
            </motion.button>

            <motion.button
              whileTap={{ scale: 0.97 }}
              onClick={() => window.open(graduation.calendarUrl, '_blank')}
              className="flex items-center justify-center gap-1.5 py-1.5 rounded-[4px] bg-[#FAF5EB] hover:bg-[#F3E8D3] text-[#8C6D1F] border border-[#C59B27]/30 text-[10px] font-mono font-bold tracking-wider transition-colors cursor-pointer"
            >
              <CalendarIcon size={12} className="text-[#8C6D1F]" />
              <span>Lịch hẹn</span>
            </motion.button>
          </div>
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
