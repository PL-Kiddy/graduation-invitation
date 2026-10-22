import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PageSurface } from '@/components/book/PageSurface';
import { APP_CONFIG } from '@/lib/constants';

export const RSVPPage: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [name, setName] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const options = [
    {
      id: 'yes',
      label: 'Chắc chắn có mặt! 🎓',
      desc: 'Sẵn sàng check-in & chụp hình cùng Long',
      badge: 'ATTENDING',
      message: 'Tuyệt vời quá! Long giữ chỗ và chuẩn bị đón bạn nhé! 🤝',
    },
    {
      id: 'maybe',
      label: 'Để mình sắp xếp nhé 👀',
      desc: 'Cố gắng thu xếp công việc ghé qua',
      badge: 'MAYBE',
      message: 'Cố gắng ghé nha, Long giữ sẵn một vị trí trong lòng trước nè 😌',
    },
    {
      id: 'no',
      label: 'Tiếc là không kịp đến 🥲',
      desc: 'Gửi lời chúc mừng tốt nghiệp từ xa',
      badge: 'UNABLE',
      message: 'Không sao đâu nè, cảm ơn bạn rất nhiều! Hẹn bạn ở dịp gặp gần nhất nhé! ✨',
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedOption) return;
    setIsSubmitted(true);
  };

  const currentOption = options.find((o) => o.id === selectedOption);

  return (
    <PageSurface variant="light" className="p-5 md:p-6 flex flex-col justify-between overflow-hidden relative">
      {/* Delicate Gold Border Accents */}
      <div className="absolute inset-3 rounded-[6px] border border-[#C59B27]/30 pointer-events-none" />
      <div className="absolute top-4 left-4 w-3 h-3 border-t-2 border-l-2 border-[#C59B27]/60 pointer-events-none" />
      <div className="absolute top-4 right-4 w-3 h-3 border-t-2 border-r-2 border-[#C59B27]/60 pointer-events-none" />
      <div className="absolute bottom-4 left-4 w-3 h-3 border-b-2 border-l-2 border-[#C59B27]/60 pointer-events-none" />
      <div className="absolute bottom-4 right-4 w-3 h-3 border-b-2 border-r-2 border-[#C59B27]/60 pointer-events-none" />

      {/* TOP HEADER */}
      <div className="relative z-20 flex items-center justify-between border-b border-[#C59B27]/20 pb-2.5 mx-2">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#2E8B57]" />
          <span className="text-[10px] uppercase font-mono tracking-[0.2em] text-[#8C6D1F] font-bold">
            RSVP PROTOCOL // PHẢN HỒI
          </span>
        </div>
        <span className="text-[11px] font-mono font-bold text-[#8C7D6F]">
          10 / 11
        </span>
      </div>

      {/* MAIN INTERACTIVE BODY */}
      <div className="relative z-20 my-auto py-2 space-y-3.5 text-left px-2">
        {/* Bold Editorial Question */}
        <div className="space-y-0.5">
          <span className="text-[9px] font-mono tracking-[0.25em] text-[#C59B27] uppercase font-bold block">
            INTERACTIVE RESPONSE
          </span>
          <h2 className="text-2xl md:text-3xl font-grotesk-bold font-black text-[#1E1A16] tracking-tight leading-[0.95]">
            HÔM ĐÓ<br />
            <span className="foil-gold-text">BẠN ĐẾN CHỨ?</span>
          </h2>
        </div>

        {isSubmitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="p-5 rounded-[6px] bg-white border-2 border-[#D4AF37] text-[#1E1A16] space-y-3 text-center shadow-xl relative overflow-hidden"
          >
            {/* Soft Gold Background Shimmer */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#FFFDF9] via-[#FAF5EB] to-white pointer-events-none" />

            <div className="relative z-10 w-12 h-12 rounded-full gold-halo-ring bg-gradient-to-tr from-[#D4AF37] to-[#F7E7A9] flex items-center justify-center text-xl text-white mx-auto shadow-md">
              ✓
            </div>
            <div className="relative z-10">
              <p className="font-grotesk-bold text-lg font-bold text-[#1E1A16]">
                Cảm ơn {name || 'bạn'}!
              </p>
              <p className="font-editorial-serif italic text-sm text-[#52473D] mt-1.5 leading-relaxed">
                {currentOption?.message}
              </p>
            </div>
            <button
              onClick={() => setIsSubmitted(false)}
              className="relative z-10 text-[10px] font-mono tracking-wider text-[#C59B27] hover:underline cursor-pointer uppercase font-bold pt-1 block mx-auto"
            >
              Thay đổi phản hồi ↺
            </button>
          </motion.div>
        ) : (
          <form
            onSubmit={handleSubmit}
            {...{ [APP_CONFIG.INTERACTIVE_ATTR]: 'true' }}
            className="space-y-3"
          >
            {/* Luxury Ticket Strips */}
            <div className="space-y-2">
              {options.map((opt) => {
                const isSelected = selectedOption === opt.id;
                return (
                  <motion.div
                    key={opt.id}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setSelectedOption(opt.id)}
                    className={`p-3 rounded-[5px] border cursor-pointer transition-all flex items-center justify-between ${
                      isSelected
                        ? 'bg-gradient-to-r from-[#FFFDF9] to-[#FAF3E6] border-[#D4AF37] shadow-md ring-1 ring-[#D4AF37]/50'
                        : 'bg-white border-[#C59B27]/25 hover:border-[#C59B27]/50 shadow-xs'
                    }`}
                  >
                    <div className="space-y-0.5">
                      <div className="flex items-center gap-2">
                        <span className="font-grotesk-bold font-bold text-xs text-[#1E1A16]">
                          {opt.label}
                        </span>
                        <span
                          className={`text-[8px] font-mono px-1.5 py-0.5 rounded font-bold ${
                            isSelected
                              ? 'bg-[#FAF3E6] text-[#8C6D1F] border border-[#C59B27]/40'
                              : 'bg-[#F5EFEB] text-[#8C7D6F]'
                          }`}
                        >
                          {opt.badge}
                        </span>
                      </div>
                      <p className="text-[10px] text-[#52473D]">
                        {opt.desc}
                      </p>
                    </div>

                    <div
                      className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ${
                        isSelected
                          ? 'border-[#C59B27] bg-[#C59B27] text-white shadow-xs'
                          : 'border-[#C59B27]/40 bg-white'
                      }`}
                    >
                      {isSelected && <span className="text-[10px] font-bold">✓</span>}
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Name Input */}
            <div className="space-y-1">
              <label htmlFor="rsvp-name" className="text-[9px] uppercase font-mono tracking-wider text-[#8C6D1F] font-bold block">
                TÊN CỦA BẠN (ĐỂ LONG BIẾT NÈ)
              </label>
              <input
                id="rsvp-name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Nhập tên của bạn ở đây..."
                className="w-full px-3 py-2 rounded-[4px] text-xs bg-white border border-[#C59B27]/30 text-[#1E1A16] placeholder-[#8C7D6F]/60 focus:outline-none focus:border-[#C59B27] focus:ring-1 focus:ring-[#C59B27]/30 shadow-xs"
              />
            </div>

            {/* Submit Action with Gold Gradient Button */}
            <motion.button
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={!selectedOption}
              className={`w-full py-2.5 rounded-[4px] text-xs font-grotesk-bold font-bold tracking-wider uppercase transition-all shadow-md ${
                selectedOption
                  ? 'bg-gradient-to-r from-[#D4AF37] via-[#C59B27] to-[#997316] text-white hover:brightness-105 cursor-pointer shadow-[#C59B27]/25'
                  : 'bg-[#EAE4D9] text-[#8C7D6F] cursor-not-allowed'
              }`}
            >
              Gửi phản hồi cho Long ↗
            </motion.button>
          </form>
        )}
      </div>

      {/* BOTTOM HINT */}
      <div className="relative z-20 flex items-center justify-between text-[10px] font-mono text-[#8C7D6F] pt-2 border-t border-[#C59B27]/20 mx-2">
        <span>GUEST PROTOCOL</span>
        <span className="font-semibold text-[#8C6D1F]">Lời kết & Liên hệ →</span>
      </div>
    </PageSurface>
  );
};
