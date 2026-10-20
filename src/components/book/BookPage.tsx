import React from 'react';
import { motion } from 'framer-motion';

interface BookPageProps {
  children: React.ReactNode;
  isActive: boolean;
  zIndex: number;
  rotateY?: number;
  shadowOpacity?: number;
  className?: string;
}

export const BookPage: React.FC<BookPageProps> = ({
  children,
  isActive,
  zIndex,
  rotateY = 0,
  shadowOpacity = 0,
  className = '',
}) => {
  return (
    <motion.div
      className={`absolute inset-0 w-full h-full preserve-3d origin-left backface-hidden ${className}`}
      style={{
        zIndex,
        transform: `rotateY(${rotateY}deg)`,
        pointerEvents: isActive ? 'auto' : 'none',
      }}
    >
      {/* Dynamic Lighting / Shadow for Realistic Paper Curl */}
      {shadowOpacity > 0 && (
        <div
          className="absolute inset-0 pointer-events-none z-30 transition-opacity"
          style={{
            background: `linear-gradient(to right, rgba(0, 0, 0, ${shadowOpacity * 0.35}) 0%, rgba(0, 0, 0, ${shadowOpacity * 0.1}) 40%, transparent 100%)`,
          }}
        />
      )}

      {children}
    </motion.div>
  );
};
