import type { Variants } from 'framer-motion';

export const cardVariants: Variants = {
  offscreen: {
    y: 300,
    opacity: 0,
  },
  onscreen: {
    y: 50,
    // rotate: -10,
    transition: {
      // type: 'spring',
      // bounce: 0.4,
      duration: 0.8,
    },
    opacity: 1,
  },
};
