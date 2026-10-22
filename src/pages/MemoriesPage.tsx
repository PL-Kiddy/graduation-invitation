import React from 'react';
import { motion } from 'framer-motion';
import { PageSurface } from '@/components/book/PageSurface';
import { APP_CONFIG } from '@/lib/constants';
import { UniversityIcon, LightningIcon, SparklesIcon, CapIcon, ArrowRightIcon } from '@/components/ui/Icons';

export const MemoriesPage: React.FC = () => {
  return (
    <PageSurface variant="light" className="p-5 md:p-6 flex flex-col justify-between overflow-hidden relative">
      {/* Delicate Gold Border Accents */}
      <div className="absolute inset-3 rounded-[6px] border border-[#C59B27]/30 pointer-events-none" />
      <div className="absolute top-4 left-4 w-3 h-3 border-t-2 border-l-2 border-[#C59B27]/60 pointer-events-none" />
      <div className="absolute top-4 right-4 w-3 h-3 border-t-2 border-r-2 border-[#C59B27]/60 pointer-events-none" />
      <div className="absolute bottom-4 left-4 w-3 h-3 border-b-2 border-l-2 border-[#C59B27]/60 pointer-events-none" />
      <div className="absolute bottom-4 right-4 w-3 h-3 border-b-2 border-r-2 border-[#C59B27]/60 pointer-events-none" />

      {/* TOP HEADER */}
      <div className="relative z-20 flex items-center justify-between border-b border-[#C59B27]/20 pb-2.5 mx-2">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#C59B27]" />
          <span className="text-[10px] uppercase font-mono tracking-[0.2em] text-[#8C6D1F] font-bold">
            PHOTO ESSAY // KỶ NIỆM
          </span>
        </div>
        <span className="text-[11px] font-mono font-bold text-[#8C7D6F]">
          08 / 11
        </span>
      </div>

      {/* EDITORIAL GOLD HEADING */}
      <div className="relative z-20 pt-2 px-2">
        <span className="text-[9px] font-mono tracking-[0.25em] text-[#C59B27] uppercase font-bold block mb-1">
          ARCHIVAL MEMORIES • 2022 – 2026
        </span>
        <h2 className="text-2xl md:text-3xl font-grotesk-bold font-black text-[#1E1A16] tracking-tight leading-[0.95]">
          NHỮNG KHUNG HÌNH<br />
          <span className="font-editorial-serif italic font-normal foil-gold-text">đáng nhớ thời đại học.</span>
        </h2>
      </div>

      {/* LUXURY BRIGHT OVERLAPPING POLAROID PHOTO COLLAGE */}
      <div {...{ [APP_CONFIG.INTERACTIVE_ATTR]: 'true' }} className="relative z-20 my-auto py-2 w-full h-[320px] md:h-[340px]">
        {/* Photo 1: Large Tilted Top-Left Ivory Polaroid */}
        <motion.div
          initial={{ opacity: 0, y: 20, rotate: -5 }}
          animate={{ opacity: 1, y: 0, rotate: -2 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="absolute top-2 left-2 w-44 md:w-48 bg-white p-2.5 pb-4 rounded-[4px] shadow-lg border border-[#C59B27]/30 z-10"
        >
          {/* Gold Foil Tape Strip */}
          <div className="absolute -top-2 left-6 bg-gradient-to-r from-[#D4AF37] to-[#F7E7A9] text-[8px] font-mono font-bold text-[#4A3B12] px-2.5 py-0.5 rounded-[2px] shadow-xs">
            CAMPUS // DAY 01
          </div>

          <div className="w-full aspect-[4/3] rounded-[3px] bg-gradient-to-tr from-[#FFFDF9] via-[#FAF3E6] to-[#F3E8D3] border border-[#C59B27]/25 flex flex-col justify-between p-2.5 text-[#1E1A16]">
            <span className="text-[8px] font-mono text-[#8C6D1F] font-bold">ARCHIVE #01</span>
            <div className="text-center py-1">
              <UniversityIcon size={24} className="text-[#8C6D1F] mx-auto" />
              <p className="text-[10px] font-mono font-bold text-[#52473D] mt-1">FPT Q9 CAMPUS</p>
            </div>
            <span className="text-[8px] font-mono text-[#2E8B57] font-bold">KHÓA 2022 — 2026</span>
          </div>
          <p className="font-editorial-serif italic text-xs text-[#52473D] mt-2 text-center font-medium">
            “Ngày đầu tiên bỡ ngỡ bước vào cổng trường...”
          </p>
        </motion.div>

        {/* Photo 2: Overlapping Mid-Right Capstone Ivory & Gold Polaroid (NO DARK BACKGROUND) */}
        <motion.div
          initial={{ opacity: 0, x: 25, rotate: 5 }}
          animate={{ opacity: 1, x: 0, rotate: 2 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="absolute top-14 right-2 w-46 md:w-50 bg-[#FFFDF9] text-[#1E1A16] p-2.5 pb-4 rounded-[4px] shadow-xl border-2 border-[#D4AF37]/50 z-20"
        >
          {/* Gold Tape Strip */}
          <div className="absolute -top-2 right-4 bg-gradient-to-r from-[#F27024] to-[#FFA05A] text-[8px] font-mono font-bold text-white px-2.5 py-0.5 rounded-[2px] shadow-xs">
            CAPSTONE PROJECT
          </div>

          <div className="w-full aspect-[4/3] rounded-[3px] bg-gradient-to-tr from-[#FAF5EB] to-[#FFF8EC] flex flex-col justify-between p-2.5 border border-[#C59B27]/30">
            <span className="text-[8px] font-mono text-[#F27024] font-bold">SPRINT // 03:00 AM</span>
            <div className="text-center py-1">
              <LightningIcon size={24} className="text-[#F27024] mx-auto" />
              <p className="text-[10px] font-mono font-bold text-[#8C6D1F] mt-1">ĐỒ ÁN TỐT NGHIỆP</p>
            </div>
            <span className="text-[8px] font-mono text-[#2E8B57] font-bold flex items-center justify-center gap-1">
              <span>STATUS: PASSED</span>
              <SparklesIcon size={10} className="text-[#2E8B57]" />
            </span>
          </div>
          <p className="font-editorial-serif italic text-xs text-[#52473D] mt-2 text-center font-medium">
            “Những đêm thức cày đồ án cùng đồng đội.”
          </p>
        </motion.div>

        {/* Photo 3: Bottom Left Overlapping Ivory Badge with Golden Halo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
          animate={{ opacity: 1, scale: 1, rotate: -1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="absolute bottom-2 left-4 w-52 md:w-56 bg-white p-2.5 rounded-[5px] shadow-xl border border-[#C59B27]/40 z-30 flex items-center gap-2.5"
        >
          <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#D4AF37] to-[#F7E7A9] flex items-center justify-center text-white shrink-0 shadow-md">
            <CapIcon size={22} className="text-white" />
          </div>
          <div>
            <span className="text-[8px] font-mono tracking-wider text-[#C59B27] uppercase font-bold block">
              PORTRAIT & FUTURE
            </span>
            <p className="font-editorial-serif italic text-xs text-[#1E1A16] font-bold">
              “Và tôi — Cử nhân 2026.”
            </p>
          </div>
        </motion.div>
      </div>

      {/* BOTTOM HINT */}
      <div className="relative z-20 flex items-center justify-between text-[10px] font-mono text-[#8C7D6F] pt-2 border-t border-[#C59B27]/20 mx-2">
        <span>MEMORIES // STORED</span>
        <span className="font-semibold text-[#8C6D1F] flex items-center gap-1">
          <span>Thông điệp gửi bạn</span>
          <ArrowRightIcon size={11} className="text-[#8C6D1F]" />
        </span>
      </div>
    </PageSurface>
  );
};
