import React, { useState, useEffect } from 'react';
import { PageSurface } from '@/components/book/PageSurface';
import { graduation } from '@/data/graduation';

export const CountdownPage: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date(`${graduation.graduationDate}T08:00:00+07:00`).getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <PageSurface className="p-6 md:p-8 flex flex-col justify-between">
      <div className="flex items-center justify-between border-b border-[#35302B]/15 pb-3">
        <span className="text-[10px] uppercase font-mono tracking-[0.2em] text-[#736B63]">
          THỜI KHẮC • CHƯƠNG IV
        </span>
        <span className="text-[11px] font-mono tracking-widest text-[#736B63]">
          05 / 11
        </span>
      </div>

      <div className="my-auto py-4 space-y-5 text-center">
        <div className="space-y-1">
          <p className="text-[10px] uppercase font-mono tracking-[0.3em] text-[#C5A059]">
            ĐẾM NGƯỢC
          </p>
          <h2 className="text-2xl font-serif-editorial font-bold text-[#181614]">
            CÒN...
          </h2>
        </div>

        {/* Countdown Grid */}
        <div className="grid grid-cols-4 gap-2 max-w-[280px] mx-auto">
          {[
            { label: 'NGÀY', value: timeLeft.days },
            { label: 'GIỜ', value: timeLeft.hours },
            { label: 'PHÚT', value: timeLeft.minutes },
            { label: 'GIÂY', value: timeLeft.seconds },
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-2.5 rounded-[4px] bg-[#FAF7F0] border border-[#C5A059]/25 flex flex-col items-center shadow-xs"
            >
              <span className="font-mono text-xl md:text-2xl font-bold text-[#181614]">
                {String(item.value).padStart(2, '0')}
              </span>
              <span className="text-[9px] font-mono tracking-wider text-[#8C8375] mt-1">
                {item.label}
              </span>
            </div>
          ))}
        </div>

        <div className="space-y-1.5 pt-2">
          <p className="text-xs text-[#554E45] italic">
            “Cho đến ngày tôi chính thức khép laptop lại để đi nhận bằng.”
          </p>
          <p className="text-[11px] font-mono font-semibold text-[#F27024]">
            Deadline lần này: {graduation.displayDate}
          </p>
        </div>
      </div>

      <div className="text-center text-[10px] font-mono text-[#8C8375]">
        Vuốt sang trái để tiếp tục →
      </div>
    </PageSurface>
  );
};
