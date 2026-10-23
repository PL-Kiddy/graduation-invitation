import React from 'react';

export const AmbientBackground: React.FC = () => {
  // Ultra-subtle paper grain texture (1.5% opacity) to avoid flat digital look
  const noiseSvg =
    "data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.025'/%3E%3C/svg%3E";

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none">
      {/* 
        Ivory Atmosphere + Champagne Gold + Sky Blue Ambient Glows:
        - Champagne gold glow at bottom-left (circle at 18% 72%)
        - Soft sky-blue glow at top-right (circle at 82% 25%) echoing the campus sky
        - Subtle central warm glow (ellipse at 50% 52%)
        - Base smooth ivory gradient (#f7f3e9 to #f3eee3)
      */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(
              circle at 18% 72%,
              rgba(224, 184, 96, 0.13) 0%,
              transparent 34%
            ),
            radial-gradient(
              circle at 82% 25%,
              rgba(166, 207, 232, 0.13) 0%,
              transparent 32%
            ),
            radial-gradient(
              ellipse at 50% 52%,
              rgba(219, 177, 82, 0.10) 0%,
              transparent 42%
            ),
            linear-gradient(
              135deg,
              #f7f3e9 0%,
              #faf8f2 48%,
              #f3eee3 100%
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

      {/* Edge Vignette: resolves the empty side feeling while maintaining pure ambient focus on card */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(
              ellipse at center,
              transparent 45%,
              rgba(115, 88, 42, 0.035) 78%,
              rgba(85, 64, 30, 0.065) 100%
            )
          `,
        }}
      />
    </div>
  );
};
