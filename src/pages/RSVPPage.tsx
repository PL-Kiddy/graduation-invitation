import React, { useState } from 'react';
import { PageSurface } from '@/components/book/PageSurface';
import { Button } from '@/components/ui/Button';
import { APP_CONFIG } from '@/lib/constants';

export const RSVPPage: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [name, setName] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const options = [
    { id: 'yes', label: 'Có mặt! 🎓', message: 'Quá tuyệt. Hẹn gặp bạn hôm đó! 🤝' },
    { id: 'maybe', label: 'Để mình sắp xếp 👀', message: 'Okay, mình giữ chỗ trong lòng trước 😌' },
    { id: 'no', label: 'Tiếc là không được rồi 🥲', message: 'Không sao, hẹn bạn ở một dịp khác nhé.' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedOption) return;
    setIsSubmitted(true);
  };

  const currentOption = options.find((o) => o.id === selectedOption);

  return (
    <PageSurface className="p-6 md:p-8 flex flex-col justify-between">
      <div className="flex items-center justify-between border-b border-[#E5DC CE] pb-3">
        <span className="text-[10px] uppercase font-mono tracking-[0.2em] text-[#7A7065] font-semibold">
          XÁC NHẬN • CHƯƠNG IX
        </span>
        <span className="text-[11px] font-mono tracking-widest text-[#B88A22] font-semibold">
          10 / 11
        </span>
      </div>

      <div className="my-auto py-2 space-y-4 text-left">
        <div className="space-y-1">
          <p className="text-[10px] uppercase font-mono tracking-[0.25em] text-[#B88A22] font-bold">
            PHẢN HỒI THAM DỰ
          </p>
          <h2 className="text-xl md:text-2xl font-serif-editorial font-bold text-[#1F1C18] leading-snug">
            HÔM ĐÓ BẠN ĐẾN CHỨ?
          </h2>
        </div>

        {isSubmitted ? (
          <div className="p-5 rounded-[6px] bg-[#FFFFFF] border border-[#C59B27]/40 space-y-2.5 text-center shadow-md animate-fade-in">
            <span className="text-3xl">🎓</span>
            <p className="text-base font-serif-editorial font-bold text-[#1F1C18]">
              Cảm ơn {name || 'bạn'}!
            </p>
            <p className="text-xs text-[#5A5045] leading-relaxed">
              {currentOption?.message}
            </p>
            <div className="pt-2">
              <Button
                size="sm"
                variant="ghost"
                onClick={() => setIsSubmitted(false)}
              >
                Thay đổi lựa chọn ↺
              </Button>
            </div>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            {...{ [APP_CONFIG.INTERACTIVE_ATTR]: 'true' }}
            className="space-y-3"
          >
            {/* Options list */}
            <div className="space-y-2">
              {options.map((opt) => (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => setSelectedOption(opt.id)}
                  className={`w-full text-left px-4 py-2.5 rounded-[6px] text-xs font-semibold transition-all flex items-center justify-between border cursor-pointer ${
                    selectedOption === opt.id
                      ? 'bg-gradient-to-r from-[#F27024] to-[#E05C10] text-white border-[#D9530A] shadow-md'
                      : 'bg-[#FFFFFF] text-[#2C241C] border-[#E5DC CE] hover:bg-[#FAF6EE] shadow-xs'
                  }`}
                >
                  <span>{opt.label}</span>
                  {selectedOption === opt.id && <span className="text-xs font-bold">✓</span>}
                </button>
              ))}
            </div>

            {/* Name Input */}
            <div className="space-y-1 pt-1">
              <label htmlFor="rsvp-name" className="text-[10px] uppercase font-mono tracking-wider text-[#7A7065] font-semibold block">
                Tên của bạn
              </label>
              <input
                id="rsvp-name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Nhập tên ở đây..."
                className="w-full px-3.5 py-2 rounded-[6px] text-xs bg-[#FFFFFF] border border-[#E5DC CE] text-[#1F1C18] placeholder-[#A39788] focus:outline-none focus:border-[#C59B27] shadow-xs"
              />
            </div>

            {/* Submit CTA */}
            <div className="pt-1">
              <Button
                type="submit"
                size="sm"
                variant="foil"
                className="w-full"
                disabled={!selectedOption}
              >
                Gửi phản hồi ✨
              </Button>
            </div>
          </form>
        )}
      </div>

      <div className="text-center text-[10px] font-mono text-[#7A7065]">
        Trang cuối cùng kế tiếp →
      </div>
    </PageSurface>
  );
};
