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
      <div className="flex items-center justify-between border-b border-[#35302B]/15 pb-3">
        <span className="text-[10px] uppercase font-mono tracking-[0.2em] text-[#736B63]">
          XÁC NHẬN • CHƯƠNG IX
        </span>
        <span className="text-[11px] font-mono tracking-widest text-[#736B63]">
          10 / 11
        </span>
      </div>

      <div className="my-auto py-2 space-y-4 text-left">
        <div className="space-y-1">
          <p className="text-[10px] uppercase font-mono tracking-[0.25em] text-[#C5A059]">
            PHẢN HỒI THAM DỰ
          </p>
          <h2 className="text-xl md:text-2xl font-serif-editorial font-bold text-[#181614] leading-snug">
            HÔM ĐÓ BẠN ĐẾN CHỨ?
          </h2>
        </div>

        {isSubmitted ? (
          <div className="p-4 rounded-[4px] bg-[#FAF7F0] border border-[#C5A059]/40 space-y-2 text-center animate-fade-in">
            <span className="text-2xl">🎓</span>
            <p className="text-sm font-serif-editorial font-bold text-[#181614]">
              Cảm ơn {name || 'bạn'}!
            </p>
            <p className="text-xs text-[#554E45] leading-relaxed">
              {currentOption?.message}
            </p>
            <div className="pt-2">
              <Button
                size="sm"
                variant="ghost"
                onClick={() => setIsSubmitted(false)}
              >
                Thay đổi lựa chọn
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
                  className={`w-full text-left px-3.5 py-2.5 rounded-[4px] text-xs font-medium transition-all flex items-center justify-between border ${
                    selectedOption === opt.id
                      ? 'bg-[#181614] text-[#FAF7F0] border-[#181614] shadow-xs'
                      : 'bg-[#FAF7F0] text-[#35302B] border-[#D5CDBD] hover:bg-[#EFE9DD]'
                  }`}
                >
                  <span>{opt.label}</span>
                  {selectedOption === opt.id && <span className="text-xs">✓</span>}
                </button>
              ))}
            </div>

            {/* Name Input */}
            <div className="space-y-1 pt-1">
              <label htmlFor="rsvp-name" className="text-[10px] uppercase font-mono tracking-wider text-[#736B63] block">
                Tên của bạn
              </label>
              <input
                id="rsvp-name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Nhập tên ở đây..."
                className="w-full px-3 py-2 rounded-[4px] text-xs bg-[#FAF7F0] border border-[#D5CDBD] text-[#181614] placeholder-[#A39B91] focus:outline-none focus:border-[#C5A059]"
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
                Gửi phản hồi
              </Button>
            </div>
          </form>
        )}
      </div>

      <div className="text-center text-[10px] font-mono text-[#8C8375]">
        Trang cuối cùng kế tiếp →
      </div>
    </PageSurface>
  );
};
