import React from 'react';

interface PageSurfaceProps {
  children: React.ReactNode;
  className?: string;
  shadowIntensity?: number; // 0 to 1 for dynamic flip shadow
  isLeftSpine?: boolean;
}

export const PageSurface: React.FC<PageSurfaceProps> = ({
  children,
  className = '',
  shadowIntensity = 0,
  isLeftSpine = true,
}) => {
  return (
    <div
      className={`relative w-full h-full overflow-hidden rounded-[5px] md:rounded-[7px] paper-surface border border-[#E5DC CE] ${className}`}
      style={{
        boxShadow: `
          0 12px 32px -10px rgba(70, 50, 30, 0.16),
          0 2px 6px 0 rgba(70, 50, 30, 0.06),
          inset 0 0 0 1px rgba(255, 255, 255, 0.85)
        `,
      }}
    >
      {/* Subtle spine binding crease / shadow */}
      <div
        className={`absolute top-0 bottom-0 pointer-events-none z-20 ${
          isLeftSpine ? 'left-0 w-8 md:w-12' : 'right-0 w-8 md:w-12'
        }`}
        style={{
          background: isLeftSpine
            ? 'linear-gradient(to right, rgba(70, 50, 30, 0.12) 0%, rgba(70, 50, 30, 0.04) 30%, transparent 100%)'
            : 'linear-gradient(to left, rgba(70, 50, 30, 0.12) 0%, rgba(70, 50, 30, 0.04) 30%, transparent 100%)',
        }}
      />

      {/* Dynamic shadow overlay that intensifies during page turn */}
      {shadowIntensity > 0 && (
        <div
          className="absolute inset-0 pointer-events-none z-30 transition-opacity duration-150"
          style={{
            backgroundColor: `rgba(60, 45, 30, ${Math.min(0.3, shadowIntensity * 0.3)})`,
          }}
        />
      )}

      {/* Subtle page edge highlight and fine golden spine line */}
      <div className="absolute top-0 right-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-[#C59B27]/20 to-transparent pointer-events-none z-20" />

      {/* Content wrapper */}
      <div className="relative w-full h-full z-10 flex flex-col justify-between">
        {children}
      </div>
    </div>
  );
};
