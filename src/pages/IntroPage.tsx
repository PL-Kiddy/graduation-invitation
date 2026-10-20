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
      <div className="flex items-center justify-between border-b border-[#35302B]/15 pb-3">
        <span className="text-[10px] uppercase font-mono tracking-[0.2em] text-[#736B63]">
          LỜI MỞ ĐẦU • CHƯƠNG I
        </span>
        <span className="text-[11px] font-mono tracking-widest text-[#736B63]">
          02 / 11
        </span>
      </div>

      {/* Main emotional & witty copy */}
      <div className="my-auto py-4 space-y-6 text-left">
        {/* Step 1: Cuối cùng thì... */}
        <div className="space-y-1">
          <p className="text-sm font-mono uppercase tracking-[0.2em] text-[#736B63]">
            <TextReveal mode="word" delay={0.1}>
              Cuối cùng thì...
            </TextReveal>
          </p>

          {/* Step 2: Tôi tốt nghiệp rồi! 🎓 */}
          <h1 className="text-2xl md:text-3xl font-serif-editorial font-bold text-[#181614] leading-snug">
            <TextReveal mode="word" delay={0.4} stagger={0.06}>
              Tôi tốt nghiệp rồi! 🎓
            </TextReveal>
          </h1>
        </div>

        {/* Step 3: Sau những buổi học, deadline, đồ án, sửa bug... */}
        <div className="p-4 rounded-[4px] bg-[#EDE7D8]/50 border-l-2 border-[#F27024] space-y-1.5 text-xs md:text-sm font-sans-modern leading-relaxed text-[#38332E]">
          <FadeIn delay={0.75} y={8}>
            <p className="font-medium text-[#736B63] text-[11px] uppercase tracking-wider mb-1">
              Nhìn lại 4 năm qua:
            </p>
          </FadeIn>
          
          <FadeIn delay={0.9} y={8}>
            <p>• Những buổi sáng chạy deadline kịp điểm danh</p>
          </FadeIn>
          <FadeIn delay={1.05} y={8}>
            <p>• Những đêm thức trắng cày đồ án cùng đồng bọn</p>
          </FadeIn>
          <FadeIn delay={1.2} y={8}>
            <p>• Và vô số lần sửa bug tưởng chừng không bao giờ hết...</p>
          </FadeIn>
        </div>

        {/* Step 4: Ngày này cuối cùng cũng tới */}
        <div className="space-y-2 pt-1">
          <h2 className="text-base md:text-lg font-serif-editorial font-semibold italic text-[#1F1C19]">
            <TextReveal mode="line" delay={1.4}>
              “Ngày này cuối cùng cũng tới.”
            </TextReveal>
          </h2>

          <FadeIn delay={1.65} y={6}>
            <p className="text-xs text-[#554E45] leading-relaxed">
              Một cột mốc mà mình muốn chia sẻ trọn vẹn nhất cùng những người bạn đặc biệt đã đồng hành hoặc dõi theo mình suốt chặng đường qua.
            </p>
          </FadeIn>
        </div>

        {/* Graduate Signature */}
        <FadeIn delay={1.85} y={10} className="pt-2 border-t border-[#35302B]/10">
          <p className="text-[11px] font-mono tracking-wider text-[#736B63]">
            — {graduation.graduateName}
          </p>
          <p className="text-[10px] text-[#8C8375]">
            {graduation.universityShort}
          </p>
        </FadeIn>
      </div>

      {/* Bottom prompt */}
      <FadeIn delay={2.0} className="pt-2">
        <button
          onClick={onNext}
          className="w-full flex items-center justify-between py-2 text-xs font-mono text-[#736B63] hover:text-[#181614] transition-colors"
        >
          <span className="tracking-wider">TIẾP TỤC HÀNH TRÌNH</span>
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
