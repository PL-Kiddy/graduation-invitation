import React from 'react';
import { motion } from 'framer-motion';
import { graduation } from '@/data/graduation';
import { PageSurface } from '@/components/book/PageSurface';
import { TextReveal } from '@/components/motion/TextReveal';
import { FadeIn } from '@/components/motion/FadeIn';
import { MaskReveal } from '@/components/motion/MaskReveal';

interface CoverPageProps {
  onNext?: () => void;
}

export const CoverPage: React.FC<CoverPageProps> = ({ onNext }) => {
  return (
    <PageSurface className="p-6 md:p-8 flex flex-col justify-between">
      {/* Top Header: Editorial Accent & Institution */}
      <div className="flex items-center justify-between border-b border-[#35302B]/15 pb-3">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#F27024]" />
          <span className="text-[10px] uppercase font-mono tracking-[0.2em] text-[#554E45]">
            THƯ MỜI CHÍNH THỨC
          </span>
        </div>
        <span className="text-[11px] font-mono tracking-widest text-[#736B63]">
          01 / 11
        </span>
      </div>

      {/* Main Center Body: Editorial Typography & Graduate Portrait Frame */}
      <div className="my-auto py-2 flex flex-col items-center text-center">
        {/* Subtle Decorative Capsule */}
        <FadeIn delay={0.15}>
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#C59B27]/40 bg-[#FFFFFF]/90 text-[#8C6D1F] text-[10px] uppercase tracking-[0.25em] font-semibold mb-2 shadow-xs">
            <span>{graduation.classYear}</span>
            <span className="text-[#F27024]">•</span>
            <span>FPT UNIVERSITY</span>
          </div>
        </FadeIn>

        {/* Major Title: GRADUATION 2026 */}
        <div className="space-y-0.5">
          <h1 className="text-3xl md:text-4xl font-display-title font-bold tracking-[0.16em] text-[#1F1C18]">
            <TextReveal mode="character" delay={0.25} stagger={0.035}>
              GRADUATION
            </TextReveal>
          </h1>
          <p className="text-sm font-mono tracking-[0.35em] text-[#B88A22] font-bold">
            <TextReveal mode="character" delay={0.55}>
              2026
            </TextReveal>
          </p>
        </div>

        {/* Central Monogram / Portrait Visual 3D Frame */}
        <MaskReveal delay={0.45} duration={0.8} className="my-3">
          <div className="relative w-38 h-46 md:w-42 md:h-50 rounded-[6px] overflow-hidden border border-[#C59B27]/40 bg-gradient-to-b from-[#FAF7F2] to-[#EFE6D8] flex flex-col items-center justify-center p-4 shadow-md group hover:shadow-lg transition-shadow">
            {/* Corner Gold Filigrees */}
            <div className="absolute top-2 left-2 w-2.5 h-2.5 border-t-2 border-l-2 border-[#C59B27]/60" />
            <div className="absolute top-2 right-2 w-2.5 h-2.5 border-t-2 border-r-2 border-[#C59B27]/60" />
            <div className="absolute bottom-2 left-2 w-2.5 h-2.5 border-b-2 border-l-2 border-[#C59B27]/60" />
            <div className="absolute bottom-2 right-2 w-2.5 h-2.5 border-b-2 border-r-2 border-[#C59B27]/60" />

            {/* Stylized Graduate Cap & Gold Medallion */}
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#FFFFFF] to-[#EAE0D0] border border-[#C59B27]/50 flex items-center justify-center text-[#B88A22] mb-2 shadow-sm">
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                <path d="M6 12v5c3 3 9 3 12 0v-5" />
              </svg>
            </div>
            <span className="font-serif-editorial text-sm font-bold tracking-wider text-[#1F1C18]">
              QUÁCH HÙNG PHÚC LONG
            </span>
            <span className="text-[9px] font-mono tracking-widest text-[#7A7065] font-medium mt-0.5">
              KHOÁ 2022 - 2026
            </span>
          </div>
        </MaskReveal>

        {/* Intentional Line Break Name */}
        <div className="space-y-0.5 mt-1">
          <p className="text-[10px] uppercase font-mono tracking-[0.25em] text-[#7A7065] font-semibold">
            TÂN KHOA
          </p>
          <h2 className="text-xl md:text-2xl font-serif-editorial font-bold tracking-wider text-[#1F1C18] leading-tight">
            QUÁCH HÙNG<br />PHÚC LONG
          </h2>
        </div>

        {/* Restrained Accent Separator Line */}
        <motion.div
          className="w-14 h-[1.5px] bg-[#C59B27] my-2.5"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.85, ease: [0.16, 1, 0.3, 1] }}
        />

        {/* University & Date Info */}
        <FadeIn delay={0.9} className="space-y-1">
          <p className="text-xs font-semibold text-[#3D352D] tracking-wide">
            {graduation.university}
          </p>
          <p className="text-xs font-mono font-bold tracking-widest text-[#B88A22]">
            {graduation.displayDate}
          </p>
        </FadeIn>
      </div>

      {/* Bottom CTA / Gesture Prompt */}
      <FadeIn delay={1.1} className="pt-2">
        <button
          onClick={onNext}
          className="w-full flex items-center justify-center gap-2 py-2 text-xs font-medium tracking-wider text-[#6A5E50] hover:text-[#1F1C18] transition-colors group cursor-pointer"
        >
          <span>Vuốt để bắt đầu</span>
          <motion.span
            animate={{ x: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="text-[#F27024] font-bold"
          >
            →
          </motion.span>
        </button>
      </FadeIn>
    </PageSurface>
  );
};
