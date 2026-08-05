'use client';

import { motion, useScroll } from 'framer-motion';

export function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed left-0 top-0 z-[60] h-[2px] w-full origin-left bg-gradient-to-r from-blue-600 via-violet-600 to-emerald-600"
      style={{ scaleX: scrollYProgress }}
      aria-hidden="true"
    />
  );
}
