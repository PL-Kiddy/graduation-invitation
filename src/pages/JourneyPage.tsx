import React from 'react';
import { motion } from 'framer-motion';
import { PageSurface } from '@/components/book/PageSurface';
import { graduation } from '@/data/graduation';
import { CapIcon, CheckIcon, UniversityIcon, ClockIcon, LightningIcon, AwardIcon } from '@/components/ui/Icons';

export const JourneyPage: React.FC = () => {
  const milestones = [
    {
      num: '01',
      title: 'NGÀY ĐẦU TIÊN',
      desc: 'Bước chân vào Campus Q9, ngỡ ngàng và háo hức',
      color: '#C59B27',
      icon: UniversityIcon,
      rot: '-1deg',
    },
    {
      num: '02',
      title: 'DEADLINE & CÀ PHÊ',
      desc: 'Những đêm thâu nộp bài lúc 23:59',
      color: '#F27024',
      icon: ClockIcon,
      rot: '1.5deg',
    },
    {
      num: '03',
      title: 'ĐỒ ÁN CAPSTONE',
      desc: '“Ủa sao code chạy trên máy tao mà demo lại lỗi?”',
      color: '#2E8B57',
      icon: LightningIcon,
      rot: '-1.5deg',
    },
    {
      num: '04',
      title: 'ĐỒNG BỌN ĐỒNG HÀNH',
      desc: 'Những người bạn cùng cày điểm, chia nhau từng ổ bánh mì',
      color: '#C59B27',
      icon: AwardIcon,
      rot: '1deg',
    },
  ];

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
            TIMELINE ARCHIVE // 2022 - 2026
          </span>
        </div>
        <span className="text-[11px] font-mono font-bold text-[#8C7D6F]">
          03 / 11
        </span>
      </div>

      {/* ASYMMETRIC EDITORIAL HEADING */}
      <div className="relative z-20 pt-2 px-2">
        <span className="text-[9px] font-mono tracking-[0.25em] text-[#C59B27] uppercase font-bold block mb-1">
          CHRONICLES OF A STUDENT
        </span>
        <h2 className="text-2xl md:text-3xl font-grotesk-bold font-black text-[#1E1A16] tracking-tight leading-[0.95]">
          MỘT CHÚT VỀ<br />
          <span className="font-editorial-serif italic font-normal foil-gold-text">những năm ở FPT.</span>
        </h2>
      </div>

      {/* EXPERIMENTAL IRREGULAR PATH & COLLAGE MILESTONES */}
      <div className="relative z-20 my-auto py-2 space-y-2.5 px-2">
        {milestones.map((item, idx) => (
          <motion.div
            key={item.num}
            initial={{ opacity: 0, x: idx % 2 === 0 ? -15 : 15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.15 + idx * 0.12 }}
            style={{ transform: `rotate(${item.rot})` }}
            className="relative p-2.5 rounded-[5px] bg-white border border-[#C59B27]/25 shadow-xs flex items-start gap-3 hover:border-[#C59B27]/60 hover:shadow-md transition-all"
          >
            {/* Icon + Number badge */}
            <div
              className="w-8 h-8 rounded-[4px] text-white flex items-center justify-center shrink-0 shadow-xs"
              style={{ backgroundColor: item.color }}
            >
              <item.icon size={16} className="text-white" />
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-grotesk-bold font-bold text-[#1E1A16] tracking-wider">
                  {item.title}
                </span>
                <span className="text-[8px] font-mono text-[#2E8B57] font-bold uppercase flex items-center gap-1">
                  <span>PASS</span>
                  <CheckIcon size={10} className="text-[#2E8B57]" />
                </span>
              </div>
              <p className="text-[10px] text-[#52473D] leading-snug mt-0.5">
                {item.desc}
              </p>
            </div>
          </motion.div>
        ))}

        {/* FINAL DESTINATION: 07.11.2026 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="p-3.5 rounded-[6px] bg-gradient-to-r from-[#FAF5EB] via-[#FFFDF9] to-[#FAF5EB] text-[#1E1A16] flex items-center justify-between shadow-xs border border-[#C59B27]/60"
        >
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#C59B27] animate-ping" />
            <div>
              <span className="text-[9px] font-mono tracking-widest text-[#8C6D1F] uppercase font-bold block">
                CỘT MỐC CHÍNH THỨC
              </span>
              <span className="text-sm font-grotesk-bold font-bold tracking-wider foil-gold-text">
                {graduation.displayDate}
              </span>
            </div>
          </div>
          <span className="px-2.5 py-1 rounded-full bg-[#FAF3E6] border border-[#C59B27]/40 text-[9px] font-mono font-bold text-[#8C6D1F] flex items-center gap-1.5">
            <span>LỄ TỐT NGHIỆP</span>
            <CapIcon size={13} className="text-[#8C6D1F]" />
          </span>
        </motion.div>
      </div>

      {/* BOTTOM HINT */}
      <div className="relative z-20 flex items-center justify-between text-[10px] font-mono text-[#8C7D6F] pt-2 border-t border-[#C59B27]/20 mx-2">
        <span>FPTU // IT JOURNEY</span>
        <span className="font-semibold text-[#8C6D1F]">Vuốt sang trái để xem thư mời →</span>
      </div>
    </PageSurface>
  );
};
