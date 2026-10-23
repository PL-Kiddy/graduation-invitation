import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PageSurface } from '@/components/book/PageSurface';
import { APP_CONFIG } from '@/lib/constants';
import { ArrowRightIcon, XCircleIcon } from '@/components/ui/Icons';

interface FloorInfo {
  id: string;
  label: string;
  title: string;
  image: string;
  highlight?: string;
}

const FLOORS: FloorInfo[] = [
  {
    id: 'G',
    label: 'Tầng G',
    title: 'Sảnh Chính & Lễ Tân',
    image: '/image/tangGcampus.png',
    highlight: 'Cổng đón khách lễ tốt nghiệp',
  },
  {
    id: '1',
    label: 'Tầng 1',
    title: 'Thư Viện & Học Thuật',
    image: '/image/tang1campus.png',
  },
  {
    id: '2',
    label: 'Tầng 2',
    title: 'Phòng Lab & CNTT',
    image: '/image/tang2campus.png',
  },
  {
    id: '3',
    label: 'Tầng 3',
    title: 'Hội Trường Chính',
    image: '/image/tang3campus.png',
    highlight: 'Địa điểm tổ chức Lễ Tốt Nghiệp',
  },
  {
    id: '4',
    label: 'Tầng 4',
    title: 'Ẩm Thực & Nghỉ Ngơi',
    image: '/image/tang4campus.png',
  },
  {
    id: '5',
    label: 'Tầng 5',
    title: 'Thể Thao & CLB',
    image: '/image/tang5campus.png',
  },
  {
    id: '6',
    label: 'Tầng 6',
    title: 'Sân Thượng & Không Gian Mở',
    image: '/image/tang6campus.png',
    highlight: 'Điểm check-in chụp ảnh kỷ niệm',
  },
];

export const CampusGuidePage: React.FC = () => {
  const [activeFloor, setActiveFloor] = useState<string>('G');
  const [isZoomed, setIsZoomed] = useState<boolean>(false);

  const floor = FLOORS.find((f) => f.id === activeFloor) || FLOORS[0];

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
      <div className="relative z-20 my-auto py-1 space-y-2.5 mx-2">
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
                  ? 'bg-gradient-to-r from-[#C59B27] to-[#B8860B] text-white shadow-sm scale-[1.02]'
                  : 'bg-white border border-[#C59B27]/30 text-[#8C6D1F] hover:border-[#C59B27]/60'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Floor Detail Card with Real Map Image */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFloor}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="rounded-[8px] bg-gradient-to-br from-[#FFFDF9] to-[#FAF6ED] border border-[#C59B27]/40 shadow-sm overflow-hidden"
          >
            {/* Floor Map Header */}
            <div className="px-3 py-1.5 border-b border-[#C59B27]/20 flex items-center justify-between bg-white/70">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono font-bold text-[#8C6D1F] uppercase tracking-wider">
                  {floor.label}
                </span>
                <span className="text-[#C59B27]/40">·</span>
                <span className="text-[11px] font-grotesk-bold font-bold text-[#1E1A16]">
                  {floor.title}
                </span>
              </div>
              {floor.highlight && (
                <span className="text-[9px] font-mono font-semibold text-[#8C6D1F] bg-[#FAF3E6] border border-[#C59B27]/40 px-1.5 py-0.5 rounded">
                  {floor.highlight}
                </span>
              )}
            </div>

            {/* Real Map Image Container */}
            <div
              {...{ [APP_CONFIG.INTERACTIVE_ATTR]: 'true' }}
              onClick={() => setIsZoomed(true)}
              className="relative cursor-pointer group bg-[#FAF6ED] flex items-center justify-center p-1.5"
            >
              <img
                src={floor.image}
                alt={`Sơ đồ ${floor.label} - FPT University HCM`}
                className="w-full h-auto max-h-[220px] object-contain rounded-[4px] transition-transform duration-200 group-hover:scale-[1.01]"
                loading="eager"
              />
              <div className="absolute bottom-2 right-2.5 bg-black/60 text-white text-[9px] font-mono px-2 py-0.5 rounded-full flex items-center gap-1 opacity-80 group-hover:opacity-100 transition-opacity backdrop-blur-xs">
                <span>🔍 Chạm xem lớn</span>
              </div>
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

      {/* Lightbox / Fullscreen Zoom Modal */}
      <AnimatePresence>
        {isZoomed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsZoomed(false)}
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex flex-col items-center justify-center p-4"
          >
            <div
              {...{ [APP_CONFIG.INTERACTIVE_ATTR]: 'true' }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-2xl w-full bg-[#FFFDF9] rounded-xl border border-[#C59B27] p-3 shadow-2xl space-y-2"
            >
              <div className="flex items-center justify-between border-b border-[#C59B27]/20 pb-2">
                <div>
                  <span className="text-[10px] font-mono font-bold text-[#8C6D1F] uppercase tracking-wider block">
                    {floor.label}
                  </span>
                  <p className="text-sm font-grotesk-bold font-bold text-[#1E1A16]">{floor.title}</p>
                </div>
                <button
                  onClick={() => setIsZoomed(false)}
                  className="p-1 rounded-full text-[#8C7D6F] hover:text-[#1E1A16] hover:bg-[#FAF3E6] transition-colors cursor-pointer"
                  aria-label="Đóng"
                >
                  <XCircleIcon size={22} className="text-[#8C6D1F]" />
                </button>
              </div>

              <div className="overflow-auto max-h-[70vh] flex items-center justify-center bg-[#FAF6ED] rounded-lg p-2">
                <img
                  src={floor.image}
                  alt={`Sơ đồ ${floor.label} - Chi tiết`}
                  className="w-full h-auto object-contain rounded"
                />
              </div>

              <div className="text-center pt-1">
                <span className="text-[10px] font-mono text-[#8C7D6F]">Chạm vào ngoài hoặc nút đóng để quay lại</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </PageSurface>
  );
};
