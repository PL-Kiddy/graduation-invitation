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
      <div className="flex items-center justify-between border-b border-[#E5DC CE] pb-3">
        <span className="text-[10px] uppercase font-mono tracking-[0.2em] text-[#7A7065] font-semibold">
          THỜI KHẮC • CHƯƠNG IV
        </span>
        <span className="text-[11px] font-mono tracking-widest text-[#B88A22] font-semibold">
          05 / 11
        </span>
      </div>

      <div className="my-auto py-4 space-y-5 text-center">
        <div className="space-y-1">
          <p className="text-[10px] uppercase font-mono tracking-[0.3em] text-[#B88A22] font-bold">
            ĐẾM NGƯỢC
          </p>
          <h2 className="text-2xl md:text-3xl font-serif-editorial font-bold text-[#1F1C18]">
            CHỈ CÒN...
          </h2>
        </div>

        {/* 3D Countdown Grid */}
        <div className="grid grid-cols-4 gap-2.5 max-w-[300px] mx-auto">
          {[
            { label: 'NGÀY', value: timeLeft.days },
            { label: 'GIỜ', value: timeLeft.hours },
            { label: 'PHÚT', value: timeLeft.minutes },
            { label: 'GIÂY', value: timeLeft.seconds },
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-3 rounded-[6px] bg-[#FFFFFF] border border-[#C59B27]/30 flex flex-col items-center shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all"
            >
              <span className="font-mono text-xl md:text-2xl font-bold text-[#1F1C18]">
                {String(item.value).padStart(2, '0')}
              </span>
              <span className="text-[9px] font-mono font-bold tracking-wider text-[#8C6D1F] mt-1">
                {item.label}
              </span>
            </div>
          ))}
        </div>

        <div className="space-y-2 pt-2">
          <p className="text-xs text-[#5A5045] italic font-serif-editorial text-sm">
            “Cho đến ngày tôi chính thức khép laptop lại để đi nhận bằng.”
          </p>
          <div className="inline-block px-3 py-1 rounded-full bg-[#FAF3E8] border border-[#F27024]/30">
            <p className="text-[11px] font-mono font-bold text-[#F27024]">
              Deadline lần này: {graduation.displayDate}
            </p>
          </div>
        </div>
      </div>

      <div className="text-center text-[10px] font-mono text-[#7A7065]">
        Vuốt sang trái để tiếp tục →
      </div>
    </PageSurface>
  );
};
