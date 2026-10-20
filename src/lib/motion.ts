import type { Transition, Variants } from 'framer-motion';

export const transitions = {
  fast: {
    duration: 0.16,
    ease: [0.22, 1, 0.36, 1],
  } as Transition,

  normal: {
    duration: 0.35,
    ease: [0.22, 1, 0.36, 1],
  } as Transition,

  slow: {
    duration: 0.75,
    ease: [0.16, 1, 0.3, 1],
  } as Transition,

  cinematic: {
    duration: 1.3,
    ease: [0.16, 1, 0.3, 1],
  } as Transition,

  spring: {
    type: 'spring',
    stiffness: 280,
    damping: 28,
  } as Transition,

  pageSpring: {
    type: 'spring',
    stiffness: 240,
    damping: 26,
    mass: 0.85,
  } as Transition,

  settleSpring: {
    type: 'spring',
    stiffness: 300,
    damping: 30,
  } as Transition,
};

export const fadeInVariants: Variants = {
  initial: { opacity: 0, y: 12 },
  animate: {
    opacity: 1,
    y: 0,
    transition: transitions.normal,
  },
  exit: {
    opacity: 0,
    y: -10,
    transition: transitions.fast,
  },
};

export const bookEmergeVariants: Variants = {
  initial: {
    opacity: 0,
    scale: 0.88,
    y: 35,
    rotateX: 8,
  },
  animate: {
    opacity: 1,
    scale: 1,
    y: 0,
    rotateX: 0,
    transition: transitions.cinematic,
  },
};

export const maskRevealVariants: Variants = {
  initial: {
    clipPath: 'inset(100% 0% 0% 0%)',
    scale: 1.06,
  },
  animate: {
    clipPath: 'inset(0% 0% 0% 0%)',
    scale: 1,
    transition: {
      duration: 0.95,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};
