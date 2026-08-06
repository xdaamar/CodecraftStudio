'use client';

import { motion, HTMLMotionProps } from 'framer-motion';

/**
 * Global viewport config: amount 0.35, NO once: true (so animations replay).
 */
const VIEWPORT_CONFIG = { amount: 0.35 };

/**
 * Base Props for our Reusable Motion Components.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
interface BaseMotionProps extends HTMLMotionProps<any> {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
}

// 1. MotionHeading
export function MotionHeading({
  children,
  className = '',
  delay = 0,
  duration = 0.65,
  ...props
}: BaseMotionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VIEWPORT_CONFIG}
      transition={{ delay, duration, ease: [0.22, 1, 0.36, 1] }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

// 2. MotionText
export function MotionText({
  children,
  className = '',
  delay = 0,
  duration = 0.55,
  ...props
}: BaseMotionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, filter: 'blur(4px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={VIEWPORT_CONFIG}
      transition={{ delay, duration, ease: [0.22, 1, 0.36, 1] }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

// 3. MotionCard
export function MotionCard({
  children,
  className = '',
  delay = 0,
  duration = 0.55,
  ...props
}: BaseMotionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VIEWPORT_CONFIG}
      transition={{ delay, duration, ease: [0.22, 1, 0.36, 1] }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

// 4. MotionImage
export function MotionImage({
  children,
  className = '',
  delay = 0,
  duration = 0.7,
  ...props
}: BaseMotionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={VIEWPORT_CONFIG}
      transition={{ delay, duration, ease: [0.22, 1, 0.36, 1] }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

// 5. MotionButton
export function MotionButton({
  children,
  className = '',
  delay = 0,
  duration = 0.55,
  ...props
}: BaseMotionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VIEWPORT_CONFIG}
      transition={{ delay, duration, ease: [0.22, 1, 0.36, 1] }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
