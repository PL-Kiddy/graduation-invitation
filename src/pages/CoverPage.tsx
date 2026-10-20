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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#C5A059]/40 bg-[#FAF7F0] text-[#7A6438] text-[10px] uppercase tracking-[0.25em] font-medium mb-3 shadow-xs">
            <span>{graduation.classYear}</span>
            <span className="text-[#C5A059]">•</span>
            <span>FPT UNIVERSITY</span>
          </div>
        </FadeIn>

        {/* Major Title: GRADUATION 2026 */}
        <div className="space-y-0.5">
          <h1 className="text-3xl md:text-4xl font-display-title font-bold tracking-[0.16em] text-[#1A1816]">
            <TextReveal mode="character" delay={0.25} stagger={0.035}>
              GRADUATION
            </TextReveal>
          </h1>
          <p className="text-sm font-mono tracking-[0.35em] text-[#C5A059] font-semibold">
            <TextReveal mode="character" delay={0.55}>
              2026
            </TextReveal>
          </p>
        </div>

        {/* Central Monogram / Portrait Visual Frame */}
        <MaskReveal delay={0.45} duration={0.8} className="my-4">
          <div className="relative w-36 h-44 md:w-40 md:h-48 rounded-[4px] overflow-hidden border border-[#C5A059]/30 bg-gradient-to-b from-[#EFEAE0] to-[#E3DC CE] flex flex-col items-center justify-center p-4 shadow-sm group">
            {/* Subtle corner ticks */}
            <div className="absolute top-1.5 left-1.5 w-2 h-2 border-t border-l border-[#8C8375]/40" />
            <div className="absolute top-1.5 right-1.5 w-2 h-2 border-t border-r border-[#8C8375]/40" />
            <div className="absolute bottom-1.5 left-1.5 w-2 h-2 border-b border-l border-[#8C8375]/40" />
            <div className="absolute bottom-1.5 right-1.5 w-2 h-2 border-b border-r border-[#8C8375]/40" />

            {/* Stylized Graduate Cap & Crest Placeholder */}
            <div className="w-14 h-14 rounded-full bg-[#1C1917] flex items-center justify-center text-[#EED7A1] mb-2 shadow-md">
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                <path d="M6 12v5c3 3 9 3 12 0v-5" />
              </svg>
            </div>
            <span className="font-serif-editorial text-sm font-bold tracking-widest text-[#2A2520]">
              QUÁCH HÙNG PHÚC LONG
            </span>
            <span className="text-[9px] font-mono tracking-widest text-[#736B63] mt-0.5">
              KHOÁ 2022 - 2026
            </span>
          </div>
        </MaskReveal>

        {/* Intentional Line Break Name */}
        <div className="space-y-0.5 mt-1">
          <p className="text-[10px] uppercase font-mono tracking-[0.25em] text-[#736B63]">
            TÂN KHOA
          </p>
          <h2 className="text-xl md:text-2xl font-serif-editorial font-bold tracking-wider text-[#181614] leading-tight">
            QUÁCH HÙNG<br />PHÚC LONG
          </h2>
        </div>

        {/* Restrained Accent Separator Line */}
        <motion.div
          className="w-12 h-[1.5px] bg-[#C5A059] my-3"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.85, ease: [0.16, 1, 0.3, 1] }}
        />

        {/* University & Date Info */}
        <FadeIn delay={0.9} className="space-y-1">
          <p className="text-xs font-medium text-[#403A34] tracking-wide">
            {graduation.university}
          </p>
          <p className="text-xs font-mono font-semibold tracking-widest text-[#9C7934]">
            {graduation.displayDate}
          </p>
        </FadeIn>
      </div>

      {/* Bottom CTA / Gesture Prompt */}
      <FadeIn delay={1.1} className="pt-2">
        <button
          onClick={onNext}
          className="w-full flex items-center justify-center gap-2 py-2 text-xs font-medium tracking-wider text-[#554E45] hover:text-[#181614] transition-colors group"
        >
          <span>Vuốt để bắt đầu</span>
          <motion.span
            animate={{ x: [0, 4, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            →
          </motion.span>
        </button>
      </FadeIn>
    </PageSurface>
  );
};
