import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PageSurface } from '@/components/book/PageSurface';
import { APP_CONFIG } from '@/lib/constants';

export const CampusPage: React.FC = () => {
  const [is360Active, setIs360Active] = useState(false);

  return (
    <PageSurface variant="light" className="p-5 md:p-6 flex flex-col justify-between overflow-hidden relative">
      {/* Delicate Double Gold Border Frame */}
      <div className="absolute inset-3 rounded-[6px] border border-[#C59B27]/30 pointer-events-none" />
      <div className="absolute inset-4 rounded-[4px] border border-[#C59B27]/20 pointer-events-none" />

      {/* TOP HEADER */}
      <div className="relative z-20 flex items-center justify-between border-b border-[#C59B27]/20 pb-2.5 mx-2">
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-[#C59B27] animate-pulse" />
          <span className="text-[10px] uppercase font-mono tracking-[0.2em] text-[#8C6D1F] font-bold">
            KHUÔN VIÊN TRƯỜNG // CAMPUS Q9
          </span>
        </div>
        <span className="text-[11px] font-mono font-bold text-[#8C7D6F]">
          06 / 11
        </span>
      </div>

      {/* IMMERSIVE BRIGHT CAMPUS VISUAL & 3D PORTAL */}
      <div className="relative z-20 my-auto py-2 space-y-3.5 mx-2 text-center">
        {/* Title */}
        <div className="space-y-0.5">
          <p className="font-editorial-serif italic text-base text-[#8C6D1F] font-semibold">
            Địa điểm tổ chức
          </p>
          <h2 className="text-2xl md:text-3xl font-display-title font-black text-[#1E1A16] tracking-tight leading-snug uppercase">
            ĐÂY LÀ NƠI MỌI CHUYỆN DIỄN RA
          </h2>
          <p className="text-xs text-[#6A5E50] font-sans-modern">
            Trường Đại học FPT TP. Hồ Chí Minh — Khu Công Nghệ Cao
          </p>
        </div>

        {/* Large Sunlit Campus Architectural Portal Card */}
        <div
          {...{ [APP_CONFIG.INTERACTIVE_ATTR]: 'true' }}
          onClick={() => setIs360Active(!is360Active)}
          className="relative w-full aspect-[4/3] rounded-[8px] overflow-hidden bg-gradient-to-br from-[#FFFDF9] via-[#FAF6ED] to-[#F0E6D4] border border-[#C59B27]/50 shadow-sm cursor-pointer group"
        >
          {/* Sunny Campus Sky & Architecture */}
          <div className="absolute inset-0 flex flex-col justify-between p-4 overflow-hidden">
            {/* Warm Golden Sunburst */}
            <div className="absolute -top-10 -right-10 w-44 h-44 bg-[#F7E7A9]/60 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#F27024]/15 rounded-full blur-2xl pointer-events-none" />

            {/* Coordinates HUD */}
            <div className="relative z-10 flex justify-between items-center text-[9px] font-mono text-[#8C6D1F] font-bold">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2E8B57]" />
                <span>360° SENSOR: SẴN SÀNG</span>
              </span>
              <span>10.8411° N, 106.8099° E</span>
            </div>

            {/* Glowing Golden Medallion Portal Center */}
            <div className="relative z-10 my-auto space-y-2 py-3">
              <motion.div
                animate={{ scale: is360Active ? 1.1 : 1 }}
                transition={{ duration: 0.5 }}
                className="w-16 h-16 rounded-full gold-halo-ring bg-white flex items-center justify-center mx-auto shadow-md group-hover:scale-105 transition-transform"
              >
                <span className="text-2xl">{is360Active ? '🔍' : '🌐'}</span>
              </motion.div>

              <div>
                <p className="text-xs font-grotesk-bold font-bold text-[#1E1A16] tracking-wider uppercase">
                  {is360Active ? 'ĐANG MỞ CHẾ ĐỘ TOÀN CẢNH' : 'KHÁM PHÁ CAMPUS 360°'}
                </p>
                <p className="text-[10px] text-[#6A5E50] mt-0.5">
                  Chạm để mở góc nhìn toàn cảnh không gian trường
                </p>
              </div>
            </div>

            {/* Bottom Tech HUD */}
            <div className="relative z-10 flex justify-between items-center text-[9px] font-mono text-[#8C7D6F] pt-2 border-t border-[#C59B27]/25">
              <span>FPTU SAIGON CAMPUS</span>
              <span className="text-[#C59B27] font-bold">CHẠM ĐỂ XEM ↗</span>
            </div>
          </div>

          {/* Interactive Active 360 Preview Simulator */}
          <AnimatePresence>
            {is360Active && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-[#FAF6ED]/95 backdrop-blur-sm z-30 flex flex-col items-center justify-center p-4 text-center"
              >
                <div className="w-full h-full border border-dashed border-[#C59B27] rounded-[6px] p-4 flex flex-col justify-between items-center">
                  <span className="text-[9px] font-mono text-[#8C6D1F] font-bold">
                    [ CAMPUS 360 PANORAMA VIEW ]
                  </span>
                  <div className="space-y-1">
                    <p className="text-sm font-grotesk-bold text-[#1E1A16] font-bold">
                      Trường Đại học FPT TP. Hồ Chí Minh
                    </p>
                    <p className="text-[11px] text-[#6A5E50] font-sans-modern">
                      Đường D1, Khu Công Nghệ Cao, P. Long Thạnh Mỹ, TP. Thủ Đức
                    </p>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-white border border-[#C59B27]/50 text-[10px] font-mono font-bold text-[#8C6D1F] shadow-xs">
                    Chạm để thu nhỏ ✕
                  </span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Portal Action Button */}
        <div {...{ [APP_CONFIG.INTERACTIVE_ATTR]: 'true' }}>
          <button
            onClick={() => setIs360Active(!is360Active)}
            className="w-full flex items-center justify-between px-5 py-2.5 rounded-full bg-gradient-to-r from-[#FAF3E6] via-[#FFFDF8] to-[#FAF3E6] border border-[#C59B27] text-[#8C6D1F] text-xs font-grotesk-bold font-bold tracking-wider shadow-xs hover:shadow-md transition-all cursor-pointer"
          >
            <span className="font-mono text-[10px] text-[#8C7D6F]">
              {is360Active ? 'CLOSE' : 'OPEN'}
            </span>
            <span>{is360Active ? 'ĐÓNG GÓC NHÌN ✕' : 'TRẢI NGHIỆM CAMPUS 360°'}</span>
            <span className="font-mono">↗</span>
          </button>
        </div>
      </div>

      {/* BOTTOM HINT */}
      <div className="relative z-20 flex items-center justify-between text-[10px] font-mono text-[#8C7D6F] pt-2 border-t border-[#C59B27]/20 mx-2">
        <span>CAMPUS ARCHITECTURE</span>
        <span className="font-semibold text-[#8C6D1F]">Xem bản đồ đường đi →</span>
      </div>
    </PageSurface>
  );
};
