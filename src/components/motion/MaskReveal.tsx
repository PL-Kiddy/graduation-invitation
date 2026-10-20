import React from 'react';
import { motion } from 'framer-motion';

interface MaskRevealProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  className?: string;
}

export const MaskReveal: React.FC<MaskRevealProps> = ({
  children,
  delay = 0,
  duration = 0.9,
  direction = 'up',
  className = '',
}) => {
  const getInitialClip = () => {
    switch (direction) {
      case 'up':
        return 'inset(100% 0% 0% 0%)';
      case 'down':
        return 'inset(0% 0% 100% 0%)';
      case 'left':
        return 'inset(0% 0% 0% 100%)';
      case 'right':
        return 'inset(0% 100% 0% 0%)';
    }
  };

  return (
    <div className={`overflow-hidden ${className}`}>
      <motion.div
        initial={{ clipPath: getInitialClip(), scale: 1.05 }}
        animate={{ clipPath: 'inset(0% 0% 0% 0%)', scale: 1 }}
        transition={{
          duration,
          delay,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};
