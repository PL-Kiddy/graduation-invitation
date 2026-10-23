import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PageSurface } from '@/components/book/PageSurface';
import { graduation } from '@/data/graduation';
import { APP_CONFIG } from '@/lib/constants';
import { GlobeIcon, MapPinIcon, ExternalLinkIcon, CopyIcon, CheckIcon, ArrowRightIcon } from '@/components/ui/Icons';

export const VenuePage: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const fullAddress = 'Đường D1, Khu Công Nghệ Cao, P. Long Thạnh Mỹ, TP. Thủ Đức, TP. Hồ Chí Minh';

  const handleCopy = () => {
    navigator.clipboard?.writeText(fullAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <PageSurface variant="light" className="p-5 md:p-6 flex flex-col justify-between overflow-hidden relative">
      {/* Decorative frame */}
      <div className="absolute inset-3 rounded-[6px] border border-[#C59B27]/30 pointer-events-none" />
      <div className="absolute inset-[17px] rounded-[4px] border border-[#C59B27]/15 pointer-events-none" />

      {/* TOP HEADER */}
      <div className="relative z-20 flex items-center justify-between border-b border-[#C59B27]/20 pb-2.5 mx-2">
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-[#C59B27] animate-pulse" />
          <span className="text-[10px] uppercase font-mono tracking-[0.2em] text-[#8C6D1F] font-bold">
            VENUE &amp; MAP // ĐỊA ĐIỂM
          </span>
        </div>
        <span className="text-[11px] font-mono font-bold text-[#8C7D6F]">05 / 10</span>
      </div>

      {/* MAIN BODY */}
      <div className="relative z-20 my-auto py-1.5 space-y-3 mx-2">
        {/* Heading */}
        <div className="space-y-0.5">
          <span className="text-[9px] font-mono tracking-[0.25em] text-[#C59B27] uppercase font-bold block">
            DESTINATION POINT
          </span>
          <h2 className="text-2xl md:text-3xl font-grotesk-bold font-black text-[#1E1A16] tracking-tight leading-[0.95]">
            HẸN BẠN<br />
            <span className="foil-gold-text">Ở ĐÂY.</span>
          </h2>
        </div>

        {/* Address Card with blueprint grid */}
        <div className="relative w-full rounded-[8px] bg-gradient-to-br from-[#FFFDF9] via-[#FAF6ED] to-[#F5EFEB] border border-[#C59B27]/40 p-3.5 overflow-hidden shadow-xs">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#C59B2715_1px,transparent_1px),linear-gradient(to_bottom,#C59B2715_1px,transparent_1px)] bg-[size:18px_18px]" />
          <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40">
            <line x1="20" y1="80" x2="150" y2="30" stroke="#C59B27" strokeWidth="2" strokeDasharray="4 4" />
            <line x1="150" y1="30" x2="270" y2="60" stroke="#F27024" strokeWidth="2.5" />
          </svg>

          <div className="relative z-10 flex items-start gap-3">
            <div className="relative shrink-0">
              <div className="w-9 h-9 rounded-full gold-halo-ring bg-white text-[#C59B27] flex items-center justify-center shadow-md">
                <MapPinIcon size={18} className="text-[#C59B27]" />
              </div>
              <span className="absolute inset-0 rounded-full bg-[#C59B27] animate-ping opacity-25" />
            </div>

            <div className="flex-1 min-w-0">
              <span className="text-[8px] font-mono font-bold px-2 py-0.5 rounded-full bg-[#FAF3E6] border border-[#C59B27]/40 text-[#8C6D1F] mb-1 inline-block">
                10.8411° N, 106.8099° E
              </span>
              <h3 className="text-sm font-grotesk-bold font-bold text-[#1E1A16] mt-1">{graduation.campus}</h3>
              <p className="text-[11px] text-[#6A5E50] font-sans-modern leading-relaxed mt-0.5">{fullAddress}</p>
            </div>
          </div>

          <div className="relative z-10 mt-2.5 pt-2 border-t border-[#C59B27]/25 flex items-center justify-between text-[9px] font-mono text-[#8C7D6F]">
            <span>GỬI XE: CỔNG 1 // MIỄN PHÍ</span>
            <span className="text-[#C59B27] font-bold">KHU CÔNG NGHỆ CAO</span>
          </div>
        </div>

        {/* Two PRIMARY CTAs */}
        <div {...{ [APP_CONFIG.INTERACTIVE_ATTR]: 'true' }} className="grid grid-cols-1 gap-2">
          {/* Real 360° Tour CTA */}
          <motion.button
            whileTap={{ scale: 0.97 }}
            onClick={() => window.open(graduation.panorama360Url, '_blank')}
            className="w-full flex items-center justify-between px-4 py-3 rounded-[8px] bg-gradient-to-r from-[#FAF3E6] via-[#FFFDF8] to-[#FAF3E6] border-2 border-[#C59B27]/70 text-[#8C6D1F] text-xs font-grotesk-bold font-bold tracking-wider shadow-sm hover:shadow-md transition-all cursor-pointer group"
          >
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full gold-halo-ring bg-white flex items-center justify-center">
                <GlobeIcon size={16} className="text-[#C59B27]" />
              </div>
              <div className="text-left">
                <span className="block text-[#1E1A16]">Khám phá Campus 360°</span>
                <span className="text-[9px] font-mono text-[#8C7D6F] font-normal">viewdaihoc.fpt.edu.vn</span>
              </div>
            </div>
            <ExternalLinkIcon size={14} className="text-[#C59B27] group-hover:scale-110 transition-transform" />
          </motion.button>

          {/* Google Maps CTA */}
          <motion.button
            whileTap={{ scale: 0.97 }}
            onClick={() => window.open(graduation.googleMapsUrl, '_blank')}
            className="w-full flex items-center justify-between px-4 py-3 rounded-[8px] bg-gradient-to-r from-[#C59B27] to-[#B8860B] text-white text-xs font-grotesk-bold font-bold tracking-wider shadow-sm hover:shadow-md transition-all cursor-pointer group"
          >
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                <MapPinIcon size={16} className="text-white" />
              </div>
              <div className="text-left">
                <span className="block">Xem đường đi — Google Maps</span>
                <span className="text-[9px] font-mono text-white/70 font-normal">maps.google.com</span>
              </div>
            </div>
            <ExternalLinkIcon size={14} className="text-white group-hover:scale-110 transition-transform" />
          </motion.button>
        </div>

        {/* Copy address */}
        <div {...{ [APP_CONFIG.INTERACTIVE_ATTR]: 'true' }}>
          <motion.button
            whileTap={{ scale: 0.97 }}
            onClick={handleCopy}
            className="w-full flex items-center justify-center gap-2 py-2 rounded-full border border-[#C59B27]/40 text-[#8C6D1F] text-[10px] font-mono font-bold tracking-wider hover:bg-[#FAF3E6] transition-colors cursor-pointer"
          >
            {copied ? (
              <><CheckIcon size={12} className="text-[#2E8B57]" /><span>Đã sao chép địa chỉ</span></>
            ) : (
              <><CopyIcon size={12} className="text-[#8C6D1F]" /><span>Sao chép địa chỉ</span></>
            )}
          </motion.button>
        </div>
      </div>

      {/* BOTTOM HINT */}
      <div className="relative z-20 flex items-center justify-between text-[10px] font-mono text-[#8C7D6F] pt-2 border-t border-[#C59B27]/20 mx-2">
        <span>CAMPUS MAP</span>
        <span className="font-semibold text-[#8C6D1F] flex items-center gap-1">
          <span>Sơ đồ tầng</span>
          <ArrowRightIcon size={11} className="text-[#8C6D1F]" />
        </span>
      </div>
    </PageSurface>
  );
};
