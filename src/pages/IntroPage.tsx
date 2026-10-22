import React from 'react';
import { motion } from 'framer-motion';
import { graduation } from '@/data/graduation';
import { PageSurface } from '@/components/book/PageSurface';
import { TextReveal } from '@/components/motion/TextReveal';
import { FadeIn } from '@/components/motion/FadeIn';

interface IntroPageProps {
  onNext?: () => void;
}

export const IntroPage: React.FC<IntroPageProps> = ({ onNext }) => {
  return (
    <PageSurface className="p-6 md:p-8 flex flex-col justify-between">
      {/* Top chapter heading */}
      <div className="flex items-center justify-between border-b border-[#E5DC CE] pb-3">
        <span className="text-[10px] uppercase font-mono tracking-[0.2em] text-[#7A7065] font-semibold">
          LỜI MỞ ĐẦU • CHƯƠNG I
        </span>
        <span className="text-[11px] font-mono tracking-widest text-[#B88A22] font-semibold">
          02 / 11
        </span>
      </div>

      {/* Main emotional & witty copy */}
      <div className="my-auto py-4 space-y-5 text-left">
        {/* Step 1: Cuối cùng thì... */}
        <div className="space-y-1">
          <p className="text-xs font-mono uppercase tracking-[0.25em] text-[#B88A22] font-bold">
            <TextReveal mode="word" delay={0.1}>
              Cuối cùng thì...
            </TextReveal>
          </p>

          {/* Step 2: Tôi tốt nghiệp rồi! 🎓 */}
          <h1 className="text-2xl md:text-3xl font-serif-editorial font-bold text-[#1F1C18] leading-snug">
            <TextReveal mode="word" delay={0.4} stagger={0.06}>
              Tôi tốt nghiệp rồi! 🎓
            </TextReveal>
          </h1>
        </div>

        {/* Step 3: Sau những buổi học, deadline, đồ án, sửa bug... */}
        <div className="p-4 rounded-[6px] bg-[#FFFFFF]/90 border border-[#E5DC CE] border-l-4 border-l-[#F27024] space-y-2 text-xs md:text-sm font-sans-modern leading-relaxed text-[#3D352D] shadow-xs">
          <FadeIn delay={0.75} y={8}>
            <p className="font-bold text-[#8C6D1F] text-[11px] uppercase tracking-wider mb-1">
              Nhìn lại chặng đường 4 năm qua:
            </p>
          </FadeIn>
          
          <FadeIn delay={0.9} y={8}>
            <p className="flex items-start gap-2">
              <span className="text-[#F27024] font-bold">•</span>
              <span>Những buổi sáng chạy deadline cuống cuồng kịp điểm danh</span>
            </p>
          </FadeIn>
          <FadeIn delay={1.05} y={8}>
            <p className="flex items-start gap-2">
              <span className="text-[#005A9E] font-bold">•</span>
              <span>Những đêm thức trắng cùng đồng bọn cày đồ án Capstone</span>
            </p>
          </FadeIn>
          <FadeIn delay={1.2} y={8}>
            <p className="flex items-start gap-2">
              <span className="text-[#2E8B57] font-bold">•</span>
              <span>Và vô số lần sửa bug tưởng chừng không bao giờ có hồi kết...</span>
            </p>
          </FadeIn>
        </div>

        {/* Step 4: Ngày này cuối cùng cũng tới */}
        <div className="space-y-2 pt-1">
          <h2 className="text-base md:text-lg font-serif-editorial font-semibold italic text-[#1F1C18]">
            <TextReveal mode="line" delay={1.4}>
              “Ngày này cuối cùng cũng tới.”
            </TextReveal>
          </h2>

          <FadeIn delay={1.65} y={6}>
            <p className="text-xs text-[#5A5045] leading-relaxed">
              Một cột mốc mà mình muốn chia sẻ trọn vẹn nhất cùng những người bạn đặc biệt đã đồng hành, hỗ trợ hoặc dõi theo mình suốt chặng đường qua.
            </p>
          </FadeIn>
        </div>

        {/* Graduate Signature */}
        <FadeIn delay={1.85} y={10} className="pt-2 border-t border-[#E5DC CE]">
          <p className="text-xs font-mono font-bold tracking-wider text-[#1F1C18]">
            — {graduation.graduateName}
          </p>
          <p className="text-[11px] text-[#7A7065] mt-0.5">
            {graduation.universityShort}
          </p>
        </FadeIn>
      </div>

      {/* Bottom prompt */}
      <FadeIn delay={2.0} className="pt-2">
        <button
          onClick={onNext}
          className="w-full flex items-center justify-between py-2 text-xs font-mono text-[#7A7065] hover:text-[#1F1C18] transition-colors cursor-pointer"
        >
          <span className="tracking-wider font-semibold">TIẾP TỤC HÀNH TRÌNH</span>
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
