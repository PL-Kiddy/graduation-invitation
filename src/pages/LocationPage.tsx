import React, { useState } from 'react';
import { PageSurface } from '@/components/book/PageSurface';
import { graduation } from '@/data/graduation';
import { Button } from '@/components/ui/Button';

export const LocationPage: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const fullAddress = 'Khu Công nghệ cao, Đường D1, Long Thạnh Mỹ, TP. Thủ Đức, TP. Hồ Chí Minh';

  const handleCopy = () => {
    navigator.clipboard?.writeText(fullAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <PageSurface className="p-6 md:p-8 flex flex-col justify-between">
      <div className="flex items-center justify-between border-b border-[#E5DC CE] pb-3">
        <span className="text-[10px] uppercase font-mono tracking-[0.2em] text-[#7A7065] font-semibold">
          ĐỊA ĐIỂM • CHƯƠNG VI
        </span>
        <span className="text-[11px] font-mono tracking-widest text-[#B88A22] font-semibold">
          07 / 11
        </span>
      </div>

      <div className="my-auto py-3 space-y-4 text-left">
        <div className="space-y-1">
          <p className="text-[10px] uppercase font-mono tracking-[0.25em] text-[#B88A22] font-bold">
            BẢN ĐỒ & VỊ TRÍ
          </p>
          <h2 className="text-xl md:text-2xl font-serif-editorial font-bold text-[#1F1C18] leading-tight">
            HẸN BẠN Ở ĐÂY.
          </h2>
        </div>

        {/* Minimalist Map Frame Card */}
        <div className="relative w-full aspect-[16/9] rounded-[6px] bg-[#FFFFFF] border border-[#E5DC CE] flex flex-col items-center justify-center p-4 text-center overflow-hidden shadow-sm hover:shadow-md transition-shadow">
          <div className="w-10 h-10 rounded-full bg-[#F27024] text-white flex items-center justify-center shadow-md mb-2">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2a8 8 0 0 0-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 0 0-8-8z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
          </div>
          <span className="text-xs font-bold text-[#1F1C18]">
            {graduation.campus}
          </span>
          <span className="text-[11px] text-[#6A5E50] mt-1 max-w-[250px] leading-relaxed">
            {fullAddress}
          </span>
        </div>

        <div className="flex items-center gap-2.5 pt-1">
          <Button
            size="sm"
            variant="primary"
            onClick={() => window.open(`https://maps.google.com/?q=${encodeURIComponent(graduation.campus)}`, '_blank')}
          >
            Mở Google Maps 🗺️
          </Button>
          <Button
            size="sm"
            variant="secondary"
            onClick={handleCopy}
          >
            {copied ? 'Đã sao chép ✓' : 'Sao chép địa chỉ 📋'}
          </Button>
        </div>
      </div>

      <div className="text-center text-[10px] font-mono text-[#7A7065]">
        Vuốt sang trái để tiếp tục →
      </div>
    </PageSurface>
  );
};
