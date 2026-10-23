import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PageSurface } from '@/components/book/PageSurface';
import { APP_CONFIG } from '@/lib/constants';
import { ArrowRightIcon, MapPinIcon } from '@/components/ui/Icons';

interface FloorInfo {
  id: string;
  label: string;
  emoji: string;
  title: string;
  areas: string[];
  highlight?: string;
}

const FLOORS: FloorInfo[] = [
  {
    id: 'G',
    label: 'Tầng G',
    emoji: '🏛️',
    title: 'Sảnh Chính & Lễ Tân',
    areas: ['Cổng vào chính', 'Bảo vệ / Đăng ký', 'Sảnh chờ khách', 'Căng-tin tầng trệt'],
    highlight: '← Cổng đón khách lễ tốt nghiệp',
  },
  {
    id: '1',
    label: 'Tầng 1',
    emoji: '📚',
    title: 'Thư Viện & Học Thuật',
    areas: ['Thư viện trường', 'Phòng tự học', 'Phòng họp nhóm', 'Văn phòng hành chính'],
  },
  {
    id: '2',
    label: 'Tầng 2',
    emoji: '💻',
    title: 'Phòng Lab & CNTT',
    areas: ['Lab lập trình', 'Phòng máy tính', 'Lab AI / IoT', 'Phòng thực hành thiết kế'],
  },
  {
    id: '3',
    label: 'Tầng 3',
    emoji: '🎓',
    title: 'Hội Trường Chính',
    areas: ['Hội trường lớn', 'Phòng chiếu phim / Seminar', 'Ban tổ chức lễ tốt nghiệp'],
    highlight: '★ Địa điểm tổ chức Lễ Tốt Nghiệp',
  },
  {
    id: '4',
    label: 'Tầng 4',
    emoji: '🍽️',
    title: 'Ẩm Thực & Nghỉ Ngơi',
    areas: ['Căng-tin tầng 4', 'Khu vực nghỉ giải lao', 'Máy bán hàng tự động'],
  },
  {
    id: '5',
    label: 'Tầng 5',
    emoji: '🏋️',
    title: 'Thể Thao & CLB',
    areas: ['Phòng thể thao đa năng', 'Câu lạc bộ sinh viên', 'Phòng sinh hoạt chung'],
  },
  {
    id: '6',
    label: 'Tầng 6',
    emoji: '🌿',
    title: 'Sân Thượng & Không Gian Mở',
    areas: ['Sân thượng view thoáng', 'Khu vực check-in ngoài trời', 'Không gian chụp ảnh'],
    highlight: '📸 Điểm check-in cực đẹp!',
  },
];

export const CampusGuidePage: React.FC = () => {
  const [activeFloor, setActiveFloor] = useState<string>('3');

  const floor = FLOORS.find((f) => f.id === activeFloor)!;

  return (
    <PageSurface variant="light" className="p-5 md:p-6 flex flex-col justify-between overflow-hidden relative">
      {/* Decorative frame */}
      <div className="absolute inset-3 rounded-[6px] border border-[#C59B27]/30 pointer-events-none" />
      <div className="absolute inset-[17px] rounded-[4px] border border-[#C59B27]/15 pointer-events-none" />

      {/* TOP HEADER */}
      <div className="relative z-20 flex items-center justify-between border-b border-[#C59B27]/20 pb-2.5 mx-2">
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-[#2E8B57]" />
          <span className="text-[10px] uppercase font-mono tracking-[0.2em] text-[#8C6D1F] font-bold">
            CAMPUS GUIDE // SƠ ĐỒ TẦNG
          </span>
        </div>
        <span className="text-[11px] font-mono font-bold text-[#8C7D6F]">06 / 10</span>
      </div>

      {/* MAIN BODY */}
      <div className="relative z-20 my-auto py-1.5 space-y-3 mx-2">
        {/* Heading */}
        <div>
          <p className="font-editorial-serif italic text-sm text-[#8C6D1F] font-semibold">Khám phá trường</p>
          <h2 className="text-2xl md:text-3xl font-grotesk-bold font-black text-[#1E1A16] tracking-tight leading-[0.95]">
            SƠ ĐỒ<br />
            <span className="foil-gold-text">FPT CAMPUS.</span>
          </h2>
        </div>

        {/* Floor Tab Strip */}
        <div
          {...{ [APP_CONFIG.INTERACTIVE_ATTR]: 'true' }}
          className="flex gap-1.5 overflow-x-auto pb-1 scrollbar-hide"
        >
          {FLOORS.map((f) => (
            <button
              key={f.id}
              onClick={() => setActiveFloor(f.id)}
              className={`shrink-0 px-3 py-1.5 rounded-full text-[10px] font-grotesk-bold font-bold tracking-wider transition-all cursor-pointer ${
                activeFloor === f.id
                  ? 'bg-gradient-to-r from-[#C59B27] to-[#B8860B] text-white shadow-sm'
                  : 'bg-white border border-[#C59B27]/30 text-[#8C6D1F] hover:border-[#C59B27]/60'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Floor Detail Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFloor}
            initial={{ opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -12 }}
            transition={{ duration: 0.25 }}
            className="p-3.5 rounded-[8px] bg-gradient-to-br from-[#FFFDF9] via-[#FAF6ED] to-[#F5EFEB] border border-[#C59B27]/50 shadow-sm space-y-2"
          >
            {/* Floor Title */}
            <div className="flex items-start justify-between">
              <div>
                <span className="text-[9px] font-mono text-[#8C7D6F] font-bold block">{floor.label}</span>
                <p className="text-sm font-grotesk-bold font-bold text-[#1E1A16]">{floor.title}</p>
              </div>
              <span className="text-2xl">{floor.emoji}</span>
            </div>

            {/* Highlight badge */}
            {floor.highlight && (
              <div className="px-2.5 py-1.5 rounded-[4px] bg-[#FAF3E6] border border-[#C59B27]/50 text-[10px] font-mono font-bold text-[#8C6D1F]">
                {floor.highlight}
              </div>
            )}

            {/* Areas list */}
            <div className="space-y-1">
              {floor.areas.map((area) => (
                <div key={area} className="flex items-center gap-2">
                  <MapPinIcon size={10} className="text-[#C59B27] shrink-0" />
                  <span className="text-[11px] text-[#4A4036] font-sans-modern">{area}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Visual Floor Scale Diagram */}
        <div className="flex items-end justify-center gap-1 pt-1">
          {FLOORS.slice().reverse().map((f) => (
            <button
              key={f.id}
              onClick={() => setActiveFloor(f.id)}
              {...{ [APP_CONFIG.INTERACTIVE_ATTR]: 'true' }}
              className={`relative flex flex-col items-center cursor-pointer group`}
            >
              <div
                className={`w-7 rounded-t-[2px] border-t border-x transition-all ${
                  activeFloor === f.id
                    ? 'bg-gradient-to-b from-[#D4AF37] to-[#C59B27] border-[#C59B27] shadow-sm'
                    : 'bg-[#FAF3E6] border-[#C59B27]/30 group-hover:bg-[#FAF0D7]'
                }`}
                style={{ height: `${(FLOORS.indexOf(f) + 1) * 7 + 10}px` }}
              />
              <span className={`text-[8px] font-mono mt-0.5 font-bold ${activeFloor === f.id ? 'text-[#8C6D1F]' : 'text-[#B0A090]'}`}>
                {f.id}
              </span>
            </button>
          ))}
          <span className="text-[8px] font-mono text-[#B0A090] ml-2 self-end mb-4">TẦNG</span>
        </div>
      </div>

      {/* BOTTOM HINT */}
      <div className="relative z-20 flex items-center justify-between text-[10px] font-mono text-[#8C7D6F] pt-2 border-t border-[#C59B27]/20 mx-2">
        <span>FPTU · Q9 · THỦ ĐỨC</span>
        <span className="font-semibold text-[#8C6D1F] flex items-center gap-1">
          <span>Ảnh kỷ niệm</span>
          <ArrowRightIcon size={11} className="text-[#8C6D1F]" />
        </span>
      </div>
    </PageSurface>
  );
};
