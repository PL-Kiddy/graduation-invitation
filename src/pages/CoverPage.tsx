import React from 'react';
import { motion } from 'framer-motion';
import { graduation } from '@/data/graduation';
import { PageSurface } from '@/components/book/PageSurface';
import { CapIcon, SparklesIcon, CalendarIcon, MapPinIcon } from '@/components/ui/Icons';

interface CoverPageProps {
  onNext?: () => void;
}

export const CoverPage: React.FC<CoverPageProps> = ({ onNext }) => {
  return (
    <PageSurface variant="light" className="p-5 md:p-6 flex flex-col justify-between overflow-hidden relative">
      {/* Double Gold Foil Border Frame (as in Reference Image 1) */}
      <div className="absolute inset-3 rounded-[6px] border border-[#C59B27]/40 pointer-events-none shadow-[inset_0_0_0_1px_rgba(255,255,255,0.9)]" />
      <div className="absolute inset-4.5 rounded-[4px] border border-[#C59B27]/25 pointer-events-none" />

      {/* Ornate Gold Filigree Corners */}
      <div className="absolute top-5 left-5 w-3.5 h-3.5 border-t-2 border-l-2 border-[#C59B27]/70 pointer-events-none" />
      <div className="absolute top-5 right-5 w-3.5 h-3.5 border-t-2 border-r-2 border-[#C59B27]/70 pointer-events-none" />
      <div className="absolute bottom-5 left-5 w-3.5 h-3.5 border-b-2 border-l-2 border-[#C59B27]/70 pointer-events-none" />
      <div className="absolute bottom-5 right-5 w-3.5 h-3.5 border-b-2 border-r-2 border-[#C59B27]/70 pointer-events-none" />

      {/* 3D Paper Floral & Gold Leaf Accents (from Reference Image 1) */}
      <div className="absolute top-2 left-2 pointer-events-none floral-accent-shadow z-15">
        <svg width="58" height="58" viewBox="0 0 100 100" fill="none">
          <path d="M15 15 C30 5, 55 15, 65 35 C45 40, 25 30, 15 15 Z" fill="#D4AF37" opacity="0.8" />
          <path d="M15 15 C10 35, 20 60, 40 68 C45 50, 35 30, 15 15 Z" fill="#D4AF37" opacity="0.8" />
          <circle cx="30" cy="30" r="13" fill="#FFFFFF" filter="drop-shadow(0 2px 4px rgba(0,0,0,0.08))" />
          <circle cx="27" cy="27" r="7" fill="#F8F6F0" />
          <circle cx="30" cy="30" r="3.5" fill="#D4AF37" />
        </svg>
      </div>

      <div className="absolute bottom-2 right-2 pointer-events-none floral-accent-shadow z-15 rotate-180">
        <svg width="58" height="58" viewBox="0 0 100 100" fill="none">
          <path d="M15 15 C30 5, 55 15, 65 35 C45 40, 25 30, 15 15 Z" fill="#D4AF37" opacity="0.8" />
          <path d="M15 15 C10 35, 20 60, 40 68 C45 50, 35 30, 15 15 Z" fill="#D4AF37" opacity="0.8" />
          <circle cx="30" cy="30" r="13" fill="#FFFFFF" filter="drop-shadow(0 2px 4px rgba(0,0,0,0.08))" />
          <circle cx="27" cy="27" r="7" fill="#F8F6F0" />
          <circle cx="30" cy="30" r="3.5" fill="#D4AF37" />
        </svg>
      </div>

      {/* TOP HEADER: Brand & Page Index */}
      <div className="relative z-20 flex items-center justify-between border-b border-[#C59B27]/20 pb-2.5 mx-2">
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-[#C59B27]" />
          <span className="text-[10px] font-mono tracking-[0.2em] text-[#8C6D1F] font-bold uppercase">
            FPT UNIVERSITY // 2026
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="px-2 py-0.5 rounded-full bg-[#FAF3E6] border border-[#C59B27]/40 text-[#8C6D1F] text-[9px] font-mono font-bold">
            TÂN KHOA
          </span>
          <span className="text-[11px] font-mono font-bold text-[#8C7D6F]">
            01 / 11
          </span>
        </div>
      </div>

      {/* MAIN CENTER: Glowing Circular Portrait Medallion & Calligraphy Title */}
      <div className="relative z-20 my-auto py-2 flex flex-col items-center text-center w-full">
        {/* Calligraphy and Gold Foil Title */}
        <div className="space-y-0.5 mb-2">
          <p className="font-editorial-serif italic text-base md:text-lg text-[#8C6D1F] font-semibold">
            Lễ tốt nghiệp
          </p>
          <h1 className="text-3xl md:text-4xl font-display-title font-black tracking-wider foil-gold-text leading-none uppercase">
            GRADUATION
          </h1>
          <p className="text-lg md:text-xl font-mono tracking-[0.25em] text-[#C59B27] font-bold">
            2026
          </p>
        </div>

        {/* Glowing Circular Golden Medallion Frame for Graduate (Matching Reference Image 1 & 2) */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative w-32 h-32 md:w-36 md:h-36 my-2"
        >
          <div className="w-full h-full rounded-full gold-halo-ring bg-gradient-to-br from-[#FFFDF9] via-[#FAF5EB] to-[#EDE2D0] p-1.5 shadow-xl flex flex-col items-center justify-center overflow-hidden relative">
            {/* Graduate Cap Vector Icon & Avatar */}
            <div className="w-full h-full rounded-full bg-gradient-to-b from-[#FDFBF7] to-[#EBE2D2] flex flex-col items-center justify-center shadow-inner">
              <CapIcon size={42} className="text-[#C59B27] filter drop-shadow-xs" />
              <span className="text-[9px] font-mono font-bold text-[#8C6D1F] tracking-wider mt-1 uppercase">
                TÂN KHOA IT
              </span>
            </div>
          </div>

          {/* 3D Paper Flower & Leaf Accent at base of circle (Reference Image 1) */}
          <div className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full bg-white border border-[#D4AF37]/60 shadow-md flex items-center justify-center text-[#C59B27]">
            <SparklesIcon size={16} className="text-[#C59B27]" />
          </div>
        </motion.div>

        {/* Graduate Formal Name & Department */}
        <div className="space-y-1 mt-1">
          <span className="text-[9px] uppercase font-mono tracking-[0.25em] text-[#8C7D6F] font-semibold">
            CỬ NHÂN KHOÁ 2022 - 2026
          </span>
          <h2 className="text-2xl md:text-3xl font-grotesk-bold font-bold tracking-tight text-[#1E1A16] leading-tight">
            QUÁCH HÙNG PHÚC LONG
          </h2>
          <p className="text-xs text-[#6A5E50] font-sans-modern font-medium">
            {graduation.university}
          </p>
        </div>

        {/* Convocation Date & Venue Chip */}
        <div className="mt-3 py-1.5 px-4 rounded-full bg-[#FAF3E6] border border-[#C59B27]/40 flex items-center gap-3 text-xs font-mono font-bold text-[#8C6D1F] shadow-xs">
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
      </div>

      {/* BOTTOM CTA: Vuốt để bắt đầu */}
      <div className="relative z-20 pt-1 mx-2">
        <button
          onClick={onNext}
          className="w-full flex items-center justify-between px-5 py-2.5 rounded-full bg-gradient-to-r from-[#FAF3E6] via-[#FFFFFF] to-[#FAF3E6] border border-[#C59B27]/50 text-[#8C6D1F] text-xs font-grotesk-bold font-bold tracking-wider hover:shadow-md transition-all cursor-pointer group shadow-xs"
        >
          <span className="font-mono text-[10px] text-[#8C7D6F]">01 → 02</span>
          <span className="tracking-widest">VUỐT ĐỂ BẮT ĐẦU</span>
          <motion.span
            animate={{ x: [0, 4, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="text-[#C59B27] font-bold text-sm"
          >
            →
          </motion.span>
        </button>
      </div>
    </PageSurface>
  );
};
