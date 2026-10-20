import React from 'react';
import { motion } from 'framer-motion';
import { transitions } from '@/lib/motion';

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  y?: number;
  className?: string;
}

export const FadeIn: React.FC<FadeInProps> = ({
  children,
  delay = 0,
  duration,
  y = 14,
  className = '',
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -y }}
      transition={{
        ...(duration ? { duration, ease: [0.16, 1, 0.3, 1] } : transitions.normal),
        delay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
