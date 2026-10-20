import React from 'react';

export const AmbientBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden bg-[#0c0c0e]">
      {/* Soft warm radial glow behind the book */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] max-w-[1000px] h-[100vh] max-h-[850px] opacity-40 blur-[130px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(197, 160, 89, 0.12) 0%, rgba(242, 112, 36, 0.05) 45%, rgba(12, 12, 14, 0) 75%)',
        }}
      />

      {/* Subtle vignette */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-60"
        style={{
          background: 'radial-gradient(circle at center, transparent 35%, rgba(5, 5, 6, 0.85) 100%)',
        }}
      />

      {/* Delicate tactile noise layer */}
      <div 
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
};
