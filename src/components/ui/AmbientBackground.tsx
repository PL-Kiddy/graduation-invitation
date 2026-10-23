import React from 'react';

export const AmbientBackground: React.FC = () => {
  // Ultra-subtle paper grain texture (1.5% opacity) to avoid flat digital look
  const noiseSvg =
    "data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.025'/%3E%3C/svg%3E";

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none">
      {/* 
        Ivory Atmosphere + Champagne Gold + Sky Blue Ambient Glows:
        - Central champagne radial glow directly behind the invitation book
        - Soft sky-blue glow at top-right echoing the campus sky in the invitation
        - Warm gold/beige glow at bottom-left for neoclassical warmth
        - Warm ivory linear base (#F8F5ED to #F4EFE4)
      */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(
              ellipse 44% 56% at 50% 50%,
              rgba(221, 176, 73, 0.16) 0%,
              rgba(221, 176, 73, 0.06) 38%,
              transparent 72%
            ),
            radial-gradient(
              circle at 72% 20%,
              rgba(167, 207, 235, 0.15) 0%,
              transparent 40%
            ),
            radial-gradient(
              circle at 20% 82%,
              rgba(201, 159, 77, 0.09) 0%,
              transparent 36%
            ),
            linear-gradient(
              135deg,
              #F8F5ED 0%,
              #F4EFE4 48%,
              #F7F3EA 100%
            )
          `,
        }}
      />

      {/* Tactile Fine Paper Grain Texture (1-2%) */}
      <div
        className="absolute inset-0 opacity-40 mix-blend-multiply pointer-events-none"
        style={{
          backgroundImage: `url("${noiseSvg}")`,
        }}
      />

      {/* Subtle Edge Vignette to softly frame the display stage */}
      <div
        className="absolute inset-0 pointer-events-none opacity-45"
        style={{
          background:
            'radial-gradient(ellipse at center, transparent 55%, rgba(83, 61, 24, 0.05) 100%)',
        }}
      />
    </div>
  );
};
