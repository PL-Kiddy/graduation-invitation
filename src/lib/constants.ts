export type AppState = 'INTRO' | 'CLOSED_BOOK' | 'OPENING' | 'BOOK_OPEN';

export const APP_CONFIG = {
  // Navigation gesture thresholds
  SWIPE_DISTANCE_THRESHOLD: 50, // pixels
  SWIPE_VELOCITY_THRESHOLD: 0.3, // px/ms
  TAP_EDGE_PERCENT: 0.15, // 15% edge zones for tap to flip

  // Timing constants (ms)
  TIMING: {
    FAST: 150,
    NORMAL: 320,
    SLOW: 750,
    CINEMATIC: 1400,
    INTRO_AUTOSKIP_DELAY: 3500,
  },

  // Interactive isolation attribute
  INTERACTIVE_ATTR: 'data-book-interactive',
} as const;
