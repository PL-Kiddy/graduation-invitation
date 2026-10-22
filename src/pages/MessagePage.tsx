import React from 'react';
import { motion } from 'framer-motion';
import { PageSurface } from '@/components/book/PageSurface';
import { graduation } from '@/data/graduation';

export const MessagePage: React.FC = () => {
  return (
    <PageSurface variant="cream" className="p-6 md:p-8 flex flex-col justify-between overflow-hidden relative">
      {/* Double Gold Foil Border Frame (as in Reference Image 1) */}
      <div className="absolute inset-3 rounded-[6px] border border-[#C59B27]/40 pointer-events-none" />
      <div className="absolute inset-4.5 rounded-[4px] border border-[#C59B27]/20 pointer-events-none" />

      {/* Ornate Gold Filigree Corners */}
      <div className="absolute top-5 left-5 w-3.5 h-3.5 border-t-2 border-l-2 border-[#C59B27]/70 pointer-events-none" />
      <div className="absolute top-5 right-5 w-3.5 h-3.5 border-t-2 border-r-2 border-[#C59B27]/70 pointer-events-none" />
      <div className="absolute bottom-5 left-5 w-3.5 h-3.5 border-b-2 border-l-2 border-[#C59B27]/70 pointer-events-none" />
      <div className="absolute bottom-5 right-5 w-3.5 h-3.5 border-b-2 border-r-2 border-[#C59B27]/70 pointer-events-none" />

      {/* 3D Paper Floral & Gold Leaf Accent Top Right */}
      <div className="absolute top-3 right-3 pointer-events-none floral-accent-shadow z-10">
        <svg width="50" height="50" viewBox="0 0 100 100" fill="none">
          <path d="M15 15 C30 5, 55 15, 65 35 C45 40, 25 30, 15 15 Z" fill="#D4AF37" opacity="0.8" />
          <path d="M15 15 C10 35, 20 60, 40 68 C45 50, 35 30, 15 15 Z" fill="#D4AF37" opacity="0.8" />
          <circle cx="30" cy="30" r="12" fill="#FFFFFF" filter="drop-shadow(0 2px 4px rgba(0,0,0,0.08))" />
          <circle cx="27" cy="27" r="6" fill="#F8F6F0" />
          <circle cx="30" cy="30" r="3" fill="#D4AF37" />
        </svg>
      </div>

      {/* TOP HEADER */}
      <div className="relative z-20 flex items-center justify-between border-b border-[#C59B27]/25 pb-3 mx-2">
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-[#C59B27]" />
          <span className="text-[10px] uppercase font-mono tracking-[0.2em] text-[#8C6D1F] font-bold">
            EPILOGUE NOTE // TÂM SỰ
          </span>
        </div>
        <span className="text-[11px] font-mono font-bold text-[#8C7D6F]">
          09 / 11
        </span>
      </div>

      {/* QUIET EMOTIONAL BODY WITH GENEROUS NEGATIVE SPACE */}
      <div className="relative z-20 my-auto py-4 space-y-5 text-left max-w-[340px] px-2">
        {/* Step 1: Decorative Quote Mark */}
        <span className="text-4xl font-editorial-serif text-[#C59B27]/50 block leading-none select-none">
          “
        </span>

        {/* Step 2: Slow Serif Emotional Quote */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-editorial-serif italic text-xl md:text-2xl text-[#1E1A16] leading-relaxed font-normal"
        >
          Có những ngày, chỉ cần đúng người có mặt là tự nhiên trở nên đáng nhớ hơn rất nhiều.
        </motion.p>

        {/* Step 3: "Vậy nên..." Calligraphy */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="font-editorial-serif italic text-base text-[#8C6D1F] font-semibold"
        >
          Vậy nên...
        </motion.p>

        {/* Step 4: Grand Gold Foil Date & Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="space-y-0.5"
        >
          <span className="text-3xl md:text-4xl font-grotesk-bold font-black foil-gold-text tracking-tight leading-none block">
            07 · 11 · 2026,
          </span>
          <span className="text-2xl md:text-3xl font-grotesk-bold font-black text-[#1E1A16] tracking-tight leading-none block mt-1">
            ĐẾN CHUNG VUI NHÉ!
          </span>
        </motion.div>

        {/* Step 5: Graduate Signature with Gold Line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.05 }}
          className="pt-4 flex items-center justify-between border-t border-[#C59B27]/25"
        >
          <div>
            <span className="font-editorial-serif text-2xl italic font-bold text-[#8C6D1F] block">
              — {graduation.firstName}
            </span>
            <span className="text-[9px] font-mono text-[#8C7D6F] uppercase tracking-wider font-semibold">
              {graduation.formalName}
            </span>
          </div>

          <div className="text-right">
            <span className="text-[10px] font-mono text-[#C59B27] font-bold block">
              FPT CAMPUS Q9
            </span>
            <span className="text-[9px] font-mono text-[#8C7D6F]">
              TP. HỒ CHÍ MINH
            </span>
          </div>
        </motion.div>
      </div>

      {/* BOTTOM HINT */}
      <div className="relative z-20 flex items-center justify-between text-[10px] font-mono text-[#8C7D6F] pt-2 border-t border-[#C59B27]/25 mx-2">
        <span>A PERSONAL NOTE</span>
        <span className="font-semibold text-[#8C6D1F]">Gửi phản hồi cho Long →</span>
      </div>
    </PageSurface>
  );
};
