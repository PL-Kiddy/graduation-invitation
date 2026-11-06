import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PageSurface } from '@/components/book/PageSurface';
import { APP_CONFIG } from '@/lib/constants';
import {
  ArrowRightIcon,
  XCircleIcon,
  DownloadIcon,
  ZoomInIcon,
  ZoomOutIcon,
  RefreshIcon,
} from '@/components/ui/Icons';

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
    image: '/image/tangGcampus.png?v=2',
  },
  {
    id: '1',
    label: 'Tầng 1',
    title: 'Thư Viện & Học Thuật',
    image: '/image/tang1campus.png?v=2',
  },
  {
    id: '2',
    label: 'Tầng 2',
    title: 'Phòng Lab & CNTT',
    image: '/image/tang2campus.png?v=2',
  },
  {
    id: '3',
    label: 'Tầng 3',
    title: 'Hội Trường Chính',
    image: '/image/tang3campus.png?v=2',
    highlight: 'Địa điểm tổ chức Lễ Tốt Nghiệp',
  },
  {
    id: '4',
    label: 'Tầng 4',
    title: 'Ẩm Thực & Nghỉ Ngơi',
    image: '/image/tang4campus.png?v=2',
  },
  {
    id: '5',
    label: 'Tầng 5',
    title: 'Thể Thao & CLB',
    image: '/image/tang5campus.png?v=2',
  },
  {
    id: '6',
    label: 'Tầng 6',
    title: 'Sân Thượng & Không Gian Mở',
    image: '/image/tang6campus.png?v=2',
    highlight: 'Điểm check-in chụp ảnh kỷ niệm',
  },
];

export const CampusGuidePage: React.FC = () => {
  const [activeFloor, setActiveFloor] = useState<string>('G');
  const [isZoomed, setIsZoomed] = useState<boolean>(false);

  // Zoom & Pan state for interactive image viewing
  const [scale, setScale] = useState<number>(1);
  const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  // Refs for tracking multi-touch gestures
  const lastTouchDistance = useRef<number | null>(null);
  const lastTouchPos = useRef<{ x: number; y: number } | null>(null);
  const lastTapTime = useRef<number>(0);

  const floor = FLOORS.find((f) => f.id === activeFloor) || FLOORS[0];

  // Reset zoom on open/close or floor switch
  useEffect(() => {
    setScale(1);
    setPosition({ x: 0, y: 0 });
  }, [isZoomed, activeFloor]);

  // Download floor map image directly
  const handleDownload = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    const cleanUrl = floor.image.split('?')[0];
    const link = document.createElement('a');
    link.href = cleanUrl;
    link.download = `So_do_${floor.label.replace(/\s+/g, '_')}_FPT_University_HCM.png`;
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Zoom controls
  const handleZoomIn = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setScale((prev) => Math.min(4, +(prev + 0.5).toFixed(1)));
  };

  const handleZoomOut = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setScale((prev) => {
      const next = Math.max(1, +(prev - 0.5).toFixed(1));
      if (next === 1) setPosition({ x: 0, y: 0 });
      return next;
    });
  };

  const handleResetZoom = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setScale(1);
    setPosition({ x: 0, y: 0 });
  };

  // Touch Handlers for Pinch-to-zoom & Pan on mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    e.stopPropagation();
    if (e.touches.length === 2) {
      // 2 fingers: prepare for pinch
      const dist = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      );
      lastTouchDistance.current = dist;
    } else if (e.touches.length === 1) {
      // 1 finger: prepare for pan
      lastTouchPos.current = {
        x: e.touches[0].clientX,
        y: e.touches[0].clientY,
      };

      // Check double-tap
      const now = Date.now();
      if (now - lastTapTime.current < 280) {
        if (scale > 1.2) {
          handleResetZoom();
        } else {
          setScale(2.5);
        }
        lastTapTime.current = 0;
      } else {
        lastTapTime.current = now;
      }
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    e.stopPropagation();
    if (e.touches.length === 2 && lastTouchDistance.current) {
      // Pinch to zoom
      const currentDist = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      );
      const factor = currentDist / lastTouchDistance.current;
      setScale((prev) => Math.min(4.5, Math.max(1, +(prev * factor).toFixed(2))));
      lastTouchDistance.current = currentDist;
    } else if (e.touches.length === 1 && lastTouchPos.current && scale > 1) {
      // Pan image
      const dx = e.touches[0].clientX - lastTouchPos.current.x;
      const dy = e.touches[0].clientY - lastTouchPos.current.y;
      setPosition((prev) => ({
        x: prev.x + dx,
        y: prev.y + dy,
      }));
      lastTouchPos.current = {
        x: e.touches[0].clientX,
        y: e.touches[0].clientY,
      };
    }
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    e.stopPropagation();
    if (e.touches.length < 2) {
      lastTouchDistance.current = null;
    }
    if (e.touches.length === 0) {
      lastTouchPos.current = null;
      if (scale <= 1) {
        setPosition({ x: 0, y: 0 });
      }
    }
  };

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
            SƠ ĐỒ TẦNG
          </span>
        </div>
        <span className="text-[11px] font-mono font-bold text-[#8C7D6F]">04 / 06</span>
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
                <span className="text-[11px] font-grotesk-bold font-bold text-[#8C6D1F] uppercase tracking-wider">
                  {floor.label}
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
                className="w-full h-auto max-h-[195px] object-contain rounded-[4px] transition-transform duration-200 group-hover:scale-[1.01]"
                loading="eager"
              />
            </div>

            {/* Action Bar: Zoom & Download */}
            <div
              {...{ [APP_CONFIG.INTERACTIVE_ATTR]: 'true' }}
              className="flex items-center gap-2 p-2 border-t border-[#C59B27]/20 bg-white/80"
            >
              <button
                type="button"
                onClick={() => setIsZoomed(true)}
                className="flex-1 flex items-center justify-center gap-1.5 py-1.5 px-2.5 rounded-full bg-gradient-to-r from-[#FAF3E6] via-[#FFFDF8] to-[#FAF3E6] border border-[#C59B27]/50 text-[#8C6D1F] text-[10px] font-grotesk-bold font-bold hover:shadow-xs transition-all cursor-pointer"
              >
                <ZoomInIcon size={12} className="text-[#C59B27]" />
                <span>Chạm xem lớn</span>
              </button>
              <button
                type="button"
                onClick={handleDownload}
                className="flex-1 flex items-center justify-center gap-1.5 py-1.5 px-2.5 rounded-full bg-gradient-to-r from-[#C59B27] via-[#D4AF37] to-[#B8860B] text-white text-[10px] font-grotesk-bold font-bold shadow-xs hover:shadow-md transition-all cursor-pointer"
              >
                <DownloadIcon size={12} className="text-white" />
                <span>Tải sơ đồ về máy</span>
              </button>
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
          <span>Lời nhắn gửi</span>
          <ArrowRightIcon size={11} className="text-[#8C6D1F]" />
        </span>
      </div>

      {/* FULLSCREEN PINCH-TO-ZOOM & PAN LIGHTBOX MODAL */}
      <AnimatePresence>
        {isZoomed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsZoomed(false)}
            className="fixed inset-0 z-50 bg-black/92 backdrop-blur-md flex flex-col justify-between overflow-hidden select-none"
            style={{ touchAction: 'none' }}
          >
            {/* Top Interactive Toolbar */}
            <div
              {...{ [APP_CONFIG.INTERACTIVE_ATTR]: 'true' }}
              onClick={(e) => e.stopPropagation()}
              className="relative z-20 flex items-center justify-between p-3 md:p-4 bg-gradient-to-b from-black/80 to-transparent border-b border-white/10"
            >
              {/* Floor Title */}
              <div className="text-white">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-grotesk-bold font-bold text-[#D4AF37] uppercase tracking-wider">
                    {floor.label}
                  </span>
                  {floor.highlight && (
                    <span className="text-[9px] font-mono text-[#D4AF37] bg-white/10 px-1.5 py-0.5 rounded">
                      {floor.highlight}
                    </span>
                  )}
                </div>
                <span className="text-[10px] font-mono text-white/60 block">
                  Độ thu phóng: {Math.round(scale * 100)}%
                </span>
              </div>

              {/* Action Toolbar */}
              <div className="flex items-center gap-1.5">
                {/* Zoom Out */}
                <button
                  type="button"
                  onClick={handleZoomOut}
                  disabled={scale <= 1}
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 active:scale-95 disabled:opacity-30 disabled:cursor-not-allowed text-white flex items-center justify-center transition-all cursor-pointer"
                  title="Thu nhỏ"
                  aria-label="Thu nhỏ"
                >
                  <ZoomOutIcon size={16} />
                </button>

                {/* Reset 100% */}
                <button
                  type="button"
                  onClick={handleResetZoom}
                  className="px-2 h-8 rounded-full bg-white/10 hover:bg-white/20 active:scale-95 text-white text-[11px] font-mono font-bold flex items-center justify-center gap-1 transition-all cursor-pointer"
                  title="Đặt lại 100%"
                >
                  <RefreshIcon size={12} />
                  <span>1:1</span>
                </button>

                {/* Zoom In */}
                <button
                  type="button"
                  onClick={handleZoomIn}
                  disabled={scale >= 4}
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 active:scale-95 disabled:opacity-30 disabled:cursor-not-allowed text-white flex items-center justify-center transition-all cursor-pointer"
                  title="Phóng to"
                  aria-label="Phóng to"
                >
                  <ZoomInIcon size={16} />
                </button>

                {/* Download Button */}
                <button
                  type="button"
                  onClick={handleDownload}
                  className="flex items-center gap-1 px-3 h-8 rounded-full bg-gradient-to-r from-[#C59B27] to-[#B8860B] active:scale-95 text-white text-xs font-grotesk-bold font-bold shadow-md transition-all cursor-pointer ml-1"
                  title="Tải ảnh sơ đồ về điện thoại"
                >
                  <DownloadIcon size={13} className="text-white" />
                  <span className="hidden sm:inline">Tải về</span>
                </button>

                {/* Close Button */}
                <button
                  type="button"
                  onClick={() => setIsZoomed(false)}
                  className="w-8 h-8 rounded-full bg-white/15 hover:bg-red-500/80 active:scale-95 text-white flex items-center justify-center transition-all cursor-pointer ml-1"
                  title="Đóng xem lớn"
                  aria-label="Đóng"
                >
                  <XCircleIcon size={20} />
                </button>
              </div>
            </div>

            {/* Gesture-Enabled Viewport Area */}
            <div
              {...{ [APP_CONFIG.INTERACTIVE_ATTR]: 'true' }}
              onClick={(e) => e.stopPropagation()}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              className="relative flex-1 w-full h-full flex items-center justify-center overflow-hidden p-2"
              style={{
                cursor: scale > 1 ? 'grab' : 'zoom-in',
                touchAction: 'none',
              }}
            >
              <div
                style={{
                  transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
                  transformOrigin: 'center center',
                  transition: lastTouchDistance.current ? 'none' : 'transform 0.15s ease-out',
                }}
                className="max-w-full max-h-full flex items-center justify-center"
              >
                <img
                  src={floor.image}
                  alt={`Sơ đồ ${floor.label} - Phóng to`}
                  className="max-w-[95vw] max-h-[75vh] object-contain rounded shadow-2xl pointer-events-none select-none"
                  draggable={false}
                />
              </div>
            </div>

            {/* Bottom Guidance Hint */}
            <div
              {...{ [APP_CONFIG.INTERACTIVE_ATTR]: 'true' }}
              onClick={(e) => e.stopPropagation()}
              className="relative z-20 pb-safe pt-2 pb-3 px-4 bg-gradient-to-t from-black/80 to-transparent text-center"
            >
              <p className="text-[11px] font-mono text-white/80 tracking-wide">
                👆 Dùng 2 ngón tay hoặc nhấn đúp để phóng to • Kéo để di chuyển chi tiết sơ đồ
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </PageSurface>
  );
};
