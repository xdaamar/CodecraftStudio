'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

type MobileSweepSectionProps = {
  children: React.ReactNode;
  className?: string;
};

/**
 * MobileSweepSection — scroll-linked sweep wrapper for mobile inner containers.
 */
export function MobileSweepSection({ children, className = '' }: MobileSweepSectionProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ['start end', 'end start'],
  });

  // Smooth spring for natural sweep feel
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    mass: 0.8,
  });

  // Sweep Y: 42px → 0px → 42px
  const sweepY = useTransform(smoothProgress, [0, 0.5, 1], [42, 0, 42]);

  // Opacity: 0.82 → 1 → 0.86
  const sweepOpacity = useTransform(smoothProgress, [0, 0.5, 1], [0.82, 1, 0.86]);

  return (
    <div ref={wrapperRef} className={className}>
      {/* lg:contents so we don't disrupt desktop layout, animated div only applies styling on mobile */}
      <motion.div
        style={{
          y: sweepY,
          opacity: sweepOpacity,
          transformOrigin: 'center top',
        }}
        className="will-change-transform lg:!transform-none lg:!opacity-100 relative h-full w-full"
      >
        {children}
      </motion.div>
    </div>
  );
}
