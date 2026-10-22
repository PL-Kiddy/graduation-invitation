import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PageSurface } from '@/components/book/PageSurface';
import { graduation } from '@/data/graduation';
import { APP_CONFIG } from '@/lib/constants';

export const LocationPage: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const fullAddress = 'Đường D1, Khu Công Nghệ Cao, P. Long Thạnh Mỹ, TP. Thủ Đức, TP. Hồ Chí Minh';

  const handleCopy = () => {
    navigator.clipboard?.writeText(fullAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <PageSurface variant="light" className="p-5 md:p-7 flex flex-col justify-between overflow-hidden">
      {/* TOP HEADER */}
      <div className="relative z-20 flex items-center justify-between border-b border-[#C59B27]/20 pb-2.5 mx-2">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#C59B27]" />
          <span className="text-[10px] uppercase font-mono tracking-[0.2em] text-[#8C6D1F] font-bold">
            WAYFINDING // NAV
          </span>
        </div>
        <span className="text-[11px] font-mono font-bold text-[#8C7D6F]">
          07 / 11
        </span>
      </div>

      {/* MAIN GRAPHIC MAP BODY */}
      <div className="relative z-20 my-auto py-2 space-y-4 px-2">
        {/* Asymmetric Heading */}
        <div className="space-y-0.5">
          <span className="text-[9px] font-mono tracking-[0.25em] text-[#C59B27] uppercase font-bold block">
            DESTINATION POINT
          </span>
          <h2 className="text-2xl md:text-3xl font-grotesk-bold font-black text-[#1E1A16] tracking-tight leading-[0.95]">
            HẸN BẠN<br />
            <span className="foil-gold-text">Ở ĐÂY.</span>
          </h2>
        </div>

        {/* BLUEPRINT ARCHITECTURAL MAP CARD */}
        <div className="relative w-full rounded-[8px] bg-gradient-to-br from-[#FFFDF9] via-[#FAF6ED] to-[#F5EFEB] border border-[#C59B27]/40 p-4 overflow-hidden shadow-xs">
          {/* Blueprint Grid Lines */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#C59B2715_1px,transparent_1px),linear-gradient(to_bottom,#C59B2715_1px,transparent_1px)] bg-[size:18px_18px]" />

          {/* Abstract Route Vector Line */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-50">
            <line x1="20" y1="90" x2="160" y2="40" stroke="#C59B27" strokeWidth="2" strokeDasharray="4 4" />
            <line x1="160" y1="40" x2="280" y2="70" stroke="#F27024" strokeWidth="2.5" />
          </svg>

          {/* Pin Beacon & Coordinates */}
          <div className="relative z-10 flex items-start gap-3">
            <div className="relative">
              <div className="w-8 h-8 rounded-full gold-halo-ring bg-white text-[#C59B27] flex items-center justify-center font-bold text-xs shadow-md">
                📍
              </div>
              <span className="absolute inset-0 rounded-full bg-[#C59B27] animate-ping opacity-30" />
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <span className="text-[9px] font-mono font-bold px-2 py-0.5 rounded-full bg-[#FAF3E6] border border-[#C59B27]/40 text-[#8C6D1F]">
                  TOÀ ĐỘ GPS
                </span>
                <span className="text-[9px] font-mono text-[#8C7D6F]">
                  10.8411° N, 106.8099° E
                </span>
              </div>
              <h3 className="text-sm font-grotesk-bold font-bold text-[#1E1A16] mt-1">
                {graduation.campus}
              </h3>
              <p className="text-[11px] text-[#6A5E50] font-sans-modern leading-relaxed mt-0.5">
                {fullAddress}
              </p>
            </div>
          </div>

          {/* Micro Transport Tips */}
          <div className="relative z-10 mt-3 pt-2 border-t border-[#C59B27]/25 flex items-center justify-between text-[9px] font-mono text-[#8C7D6F]">
            <span>GỬI XE: CỔNG 1 // MIỄN PHÍ</span>
            <span className="text-[#C59B27] font-bold">KHU CÔNG NGHỆ CAO</span>
          </div>
        </div>

        {/* PRACTICAL ACTION BUTTONS */}
        <div {...{ [APP_CONFIG.INTERACTIVE_ATTR]: 'true' }} className="grid grid-cols-2 gap-2.5 pt-1">
          <motion.button
            whileTap={{ scale: 0.97 }}
            onClick={() => window.open(`https://maps.google.com/?q=${encodeURIComponent(graduation.campus)}`, '_blank')}
            className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-full bg-gradient-to-r from-[#C59B27] to-[#B8860B] text-white text-[11px] font-grotesk-bold font-bold tracking-wider shadow-sm hover:shadow-md transition-all cursor-pointer"
          >
            <span>Xem đường đi</span>
            <span>↗</span>
          </motion.button>

          <motion.button
            whileTap={{ scale: 0.97 }}
            onClick={handleCopy}
            className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-full bg-gradient-to-r from-[#FAF3E6] via-[#FFFDF8] to-[#FAF3E6] border border-[#C59B27]/60 text-[#8C6D1F] text-[11px] font-grotesk-bold font-bold tracking-wider shadow-xs hover:shadow-md transition-all cursor-pointer"
          >
            <span>{copied ? 'Đã sao chép ✓' : 'Sao chép địa chỉ'}</span>
            <span>📋</span>
          </motion.button>
        </div>
      </div>

      {/* BOTTOM HINT */}
      <div className="relative z-20 flex items-center justify-between text-[10px] font-mono text-[#8C7D6F] pt-2 border-t border-[#C59B27]/20 mx-2">
        <span>CAMPUS GUIDE</span>
        <span className="font-semibold text-[#8C6D1F]">Khung hình kỷ niệm →</span>
      </div>
    </PageSurface>
  );
};
