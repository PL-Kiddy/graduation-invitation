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
      <div className="flex items-center justify-between border-b border-[#E5DC CE] pb-3">
        <span className="text-[10px] uppercase font-mono tracking-[0.2em] text-[#7A7065] font-semibold">
          KHOẢNH KHẮC • CHƯƠNG VII
        </span>
        <span className="text-[11px] font-mono tracking-widest text-[#B88A22] font-semibold">
          08 / 11
        </span>
      </div>

      <div className="my-auto py-2 space-y-3">
        <div className="space-y-0.5 text-center">
          <p className="text-[10px] uppercase font-mono tracking-[0.25em] text-[#B88A22] font-bold">
            HÌNH ẢNH KỶ NIỆM
          </p>
          <h2 className="text-lg md:text-xl font-serif-editorial font-bold text-[#1F1C18] leading-snug">
            VÀI KHUNG HÌNH<br />TRƯỚC KHI RA TRƯỜNG.
          </h2>
        </div>

        {/* 2x2 Clean 3D Photo Grid Frame */}
        <div className="grid grid-cols-2 gap-2.5 max-w-[290px] mx-auto">
          {photoPlaceholders.map((item, idx) => (
            <div
              key={idx}
              className="p-3.5 rounded-[6px] bg-[#FFFFFF] border border-[#E5DC CE] flex flex-col justify-between aspect-square text-left shadow-xs hover:shadow-md hover:-translate-y-0.5 transition-all group cursor-pointer"
            >
              <div className="flex justify-between items-center">
                <span className="text-[10px] font-mono font-bold text-[#B88A22]">0{idx + 1}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#F27024] opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div>
                <p className="text-xs font-serif-editorial font-bold text-[#1F1C18]">
                  {item.title}
                </p>
                <p className="text-[10px] text-[#7A7065] leading-tight mt-0.5">
                  {item.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-[10px] text-[#7A7065] italic">
          (Bộ sưu tập ảnh kỷ yếu sẽ được cập nhật đầy đủ)
        </p>
      </div>

      <div className="text-center text-[10px] font-mono text-[#7A7065]">
        Vuốt sang trái để tiếp tục →
      </div>
    </PageSurface>
  );
};
