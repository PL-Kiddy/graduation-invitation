import React from 'react';

export const AmbientBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden bg-gradient-to-br from-[#FCFAF6] via-[#F6EFE5] to-[#EAE0D0]">
      {/* Warm golden radial sunlight bloom behind the invitation */}
      <div 
        className="absolute top-[35%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140vw] max-w-[1200px] h-[90vh] max-h-[900px] opacity-70 blur-[120px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(247, 229, 181, 0.65) 0%, rgba(242, 112, 36, 0.08) 40%, rgba(234, 224, 208, 0) 75%)',
        }}
      />

      {/* Elegant warm vignette (soft warm shadows on edges) */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 45%, rgba(180, 160, 135, 0.25) 100%)',
        }}
      />

      {/* Architectural desk / surface lighting perspective */}
      <div 
        className="absolute bottom-0 inset-x-0 h-1/2 pointer-events-none opacity-30"
        style={{
          background: 'linear-gradient(to top, rgba(200, 185, 165, 0.2) 0%, transparent 100%)',
        }}
      />

      {/* Tactile fine cotton paper noise texture */}
      <div 
        className="absolute inset-0 opacity-[0.035] pointer-events-none mix-blend-multiply"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
};
