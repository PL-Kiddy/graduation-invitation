import React from 'react';
import { motion } from 'framer-motion';

interface TextRevealProps {
  children: string;
  mode?: 'line' | 'word' | 'character';
  delay?: number;
  stagger?: number;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span' | 'div';
}

export const TextReveal: React.FC<TextRevealProps> = ({
  children,
  mode = 'line',
  delay = 0,
  stagger = 0.04,
  className = '',
  as = 'div',
}) => {
  const Component = motion[as] as React.ElementType;

  if (mode === 'line') {
    const lines = children.split('\n');
    return (
      <Component className={className}>
        {lines.map((line, idx) => (
          <span key={idx} className="block overflow-hidden py-0.5">
            <motion.span
              className="block"
              initial={{ opacity: 0, y: '100%', filter: 'blur(4px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{
                duration: 0.65,
                delay: delay + idx * 0.12,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {line}
            </motion.span>
          </span>
        ))}
      </Component>
    );
  }

  if (mode === 'word') {
    const words = children.split(' ');
    return (
      <Component className={className}>
        {words.map((word, idx) => (
          <span key={idx} className="inline-block overflow-hidden whitespace-nowrap mr-[0.28em] py-0.5">
            <motion.span
              className="inline-block"
              initial={{ opacity: 0, y: '80%' }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.55,
                delay: delay + idx * stagger,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {word}
            </motion.span>
          </span>
        ))}
      </Component>
    );
  }

  // Character reveal for major titles
  const characters = Array.from(children);
  return (
    <Component className={className}>
      {characters.map((char, idx) => (
        <span key={idx} className="inline-block overflow-hidden">
          <motion.span
            className="inline-block"
            initial={{ opacity: 0, y: '90%', filter: 'blur(6px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{
              duration: 0.6,
              delay: delay + idx * (stagger * 0.75),
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        </span>
      ))}
    </Component>
  );
};
