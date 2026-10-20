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
      className={`relative w-full h-full overflow-hidden rounded-[4px] md:rounded-[6px] paper-surface ${className}`}
      style={{
        boxShadow: `
          0 10px 30px -10px rgba(0, 0, 0, 0.45),
          0 1px 3px 0 rgba(0, 0, 0, 0.2),
          inset 0 0 0 1px rgba(255, 255, 255, 0.6)
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
            ? 'linear-gradient(to right, rgba(0, 0, 0, 0.16) 0%, rgba(0, 0, 0, 0.05) 30%, transparent 100%)'
            : 'linear-gradient(to left, rgba(0, 0, 0, 0.16) 0%, rgba(0, 0, 0, 0.05) 30%, transparent 100%)',
        }}
      />

      {/* Dynamic shadow overlay that intensifies during page turn */}
      {shadowIntensity > 0 && (
        <div
          className="absolute inset-0 pointer-events-none z-30 transition-opacity duration-150"
          style={{
            backgroundColor: `rgba(18, 15, 12, ${Math.min(0.4, shadowIntensity * 0.4)})`,
          }}
        />
      )}

      {/* Subtle page edge highlight */}
      <div className="absolute top-0 right-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-black/10 to-transparent pointer-events-none z-20" />

      {/* Content wrapper */}
      <div className="relative w-full h-full z-10 flex flex-col justify-between">
        {children}
      </div>
    </div>
  );
};
