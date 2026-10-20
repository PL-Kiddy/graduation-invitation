import React from 'react';
import { PageSurface } from '@/components/book/PageSurface';

export const MemoriesPage: React.FC = () => {
  const photoPlaceholders = [
    { title: 'Ngày đầu', subtitle: 'Khai giảng & định hướng' },
    { title: 'Deadline', subtitle: 'Những đêm sprint cuối' },
    { title: 'Đồng bọn', subtitle: 'Team đồ án kiên cường' },
    { title: 'Và tôi', subtitle: 'Hành trình trưởng thành' },
  ];

  return (
    <PageSurface className="p-6 md:p-8 flex flex-col justify-between">
      <div className="flex items-center justify-between border-b border-[#35302B]/15 pb-3">
        <span className="text-[10px] uppercase font-mono tracking-[0.2em] text-[#736B63]">
          KHOẢNH KHẮC • CHƯƠNG VII
        </span>
        <span className="text-[11px] font-mono tracking-widest text-[#736B63]">
          08 / 11
        </span>
      </div>

      <div className="my-auto py-2 space-y-3">
        <div className="space-y-0.5 text-center">
          <p className="text-[10px] uppercase font-mono tracking-[0.25em] text-[#C5A059]">
            HÌNH ẢNH KỶ NIỆM
          </p>
          <h2 className="text-lg md:text-xl font-serif-editorial font-bold text-[#181614] leading-snug">
            VÀI KHUNG HÌNH<br />TRƯỚC KHI RA TRƯỜNG.
          </h2>
        </div>

        {/* 2x2 Clean Photo Grid Frame */}
        <div className="grid grid-cols-2 gap-2.5 max-w-[290px] mx-auto">
          {photoPlaceholders.map((item, idx) => (
            <div
              key={idx}
              className="p-3 rounded-[4px] bg-[#EDE7D8]/60 border border-[#35302B]/15 flex flex-col justify-between aspect-square text-left shadow-xs"
            >
              <span className="text-[10px] font-mono text-[#8C8375]">0{idx + 1}</span>
              <div>
                <p className="text-xs font-serif-editorial font-bold text-[#181614]">
                  {item.title}
                </p>
                <p className="text-[9px] text-[#736B63] leading-tight mt-0.5">
                  {item.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-[10px] text-[#736B63] italic">
          (Bộ sưu tập ảnh kỷ yếu sẽ được cập nhật đầy đủ)
        </p>
      </div>

      <div className="text-center text-[10px] font-mono text-[#8C8375]">
        Vuốt sang trái để tiếp tục →
      </div>
    </PageSurface>
  );
};
