import type { Variants } from 'framer-motion';

// ─── Desktop / Default Variants ──────────────────────────────────────────────

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: 'easeOut',
    },
  },
};

export const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -24 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.55,
      ease: 'easeOut',
    },
  },
};

export const fadeRight: Variants = {
  hidden: { opacity: 0, x: 24 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.55,
      ease: 'easeOut',
    },
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.45,
      ease: 'easeOut',
    },
  },
};

export const staggerContainer: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

export const reducedFade: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.2,
    },
  },
};

// ─── Mobile-Optimised Variants (lighter, faster) ─────────────────────────────
// y: 12 instead of 24, duration: 0.38 instead of 0.55
// Used on screens < 768px for better 60fps on mid-range devices

export const fadeUpMobile: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.38,
      ease: 'easeOut',
    },
  },
};

export const staggerContainerMobile: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.03,
    },
  },
};

// Slide-up for mobile bottom sheet (navbar drawer)
export const slideUp: Variants = {
  hidden: { y: '100%', opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.32,
      ease: [0.32, 0.72, 0, 1],
    },
  },
  exit: {
    y: '100%',
    opacity: 0,
    transition: {
      duration: 0.28,
      ease: [0.32, 0.72, 0, 1],
    },
  },
};
