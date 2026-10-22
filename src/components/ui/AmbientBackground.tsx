import React from 'react';

export const AmbientBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden bg-gradient-to-br from-[#FAF7F2] via-[#F5EFEB] to-[#ECE5D8]">
      {/* Warm Golden Sunburst & Neoclassical Hall Light Bloom */}
      <div 
        className="absolute -top-[15%] left-[10%] w-[80vw] max-w-[800px] h-[65vh] max-h-[700px] opacity-40 blur-[120px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #F7E7A9 0%, #E5A93C 45%, transparent 75%)',
        }}
      />
      <div 
        className="absolute -bottom-[10%] -right-[5%] w-[70vw] max-w-[650px] h-[55vh] max-h-[550px] opacity-30 blur-[130px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #F27024 0%, #D4AF37 50%, transparent 75%)',
        }}
      />

      {/* Delicate Marble / Fine Gold Shimmer Grid */}
      <div 
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#C59B27 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      {/* Gentle Edge Warmth */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 40%, rgba(212, 175, 55, 0.08) 100%)',
        }}
      />
    </div>
  );
};
