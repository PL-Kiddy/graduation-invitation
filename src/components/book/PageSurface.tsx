import React from 'react';

interface PageSurfaceProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'light' | 'cream' | 'gold' | string;
  shadowIntensity?: number;
  isLeftSpine?: boolean;
}

export const PageSurface: React.FC<PageSurfaceProps> = ({
  children,
  className = '',
  variant = 'light',
  shadowIntensity = 0,
  isLeftSpine = true,
}) => {
  const getSurfaceClass = () => {
    switch (variant) {
      case 'cream':
        return 'bg-[#F7F2EA] text-[#1E1A16] border-[#E2D8C5] shadow-[0_15px_40px_rgba(140,110,70,0.12)]';
      case 'gold':
        return 'bg-gradient-to-br from-[#FFFDF9] via-[#FAF5EB] to-[#F5EFEB] text-[#1E1A16] border-[#D4AF37]/40 shadow-[0_15px_40px_rgba(197,155,39,0.18)]';
      case 'light':
      default:
        return 'bg-[#FAF8F5] text-[#1E1A16] border-[#E8DEC9] shadow-[0_15px_40px_rgba(140,110,70,0.1)]';
    }
  };

  return (
    <div
      className={`relative w-full h-full overflow-hidden rounded-[8px] md:rounded-[10px] border transition-colors ${getSurfaceClass()} ${className}`}
      style={{
        transformStyle: 'preserve-3d',
      }}
    >
      {/* Subtle spine binding crease / warm paper crease */}
      <div
        className={`absolute top-0 bottom-0 pointer-events-none z-20 ${
          isLeftSpine ? 'left-0 w-8 md:w-12' : 'right-0 w-8 md:w-12'
        }`}
        style={{
          background: isLeftSpine
            ? 'linear-gradient(to right, rgba(140, 110, 70, 0.15) 0%, rgba(140, 110, 70, 0.04) 35%, transparent 100%)'
            : 'linear-gradient(to left, rgba(140, 110, 70, 0.15) 0%, rgba(140, 110, 70, 0.04) 35%, transparent 100%)',
        }}
      />

      {/* Dynamic warm shadow overlay that intensifies during page turn */}
      {shadowIntensity > 0 && (
        <div
          className="absolute inset-0 pointer-events-none z-30 transition-opacity duration-150"
          style={{
            backgroundColor: `rgba(140, 110, 70, ${Math.min(0.3, shadowIntensity * 0.3)})`,
          }}
        />
      )}

      {/* Subtle golden page edge highlight */}
      <div
        className="absolute top-0 right-0 bottom-0 w-[1.5px] pointer-events-none z-20 bg-gradient-to-b from-transparent via-[#C59B27]/35 to-transparent"
      />

      {/* Content wrapper */}
      <div className="relative w-full h-full z-10 flex flex-col justify-between">
        {children}
      </div>
    </div>
  );
};
