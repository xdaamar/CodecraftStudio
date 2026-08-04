'use client';

import { type ReactNode } from 'react';
import {
  motion,
  useReducedMotion,
  type Variants,
  type TargetAndTransition,
} from 'framer-motion';
import {
  fadeUp,
  fadeLeft,
  fadeRight,
  scaleIn,
  staggerContainer,
  reducedFade,
} from '@/lib/motion';

type VariantName =
  | 'fadeUp'
  | 'fadeLeft'
  | 'fadeRight'
  | 'scaleIn'
  | 'staggerContainer';

function getVariant(nameOrVariants?: VariantName | Variants): Variants {
  if (!nameOrVariants) return fadeUp;
  if (typeof nameOrVariants !== 'string') return nameOrVariants;

  switch (nameOrVariants) {
    case 'fadeLeft':
      return fadeLeft;
    case 'fadeRight':
      return fadeRight;
    case 'scaleIn':
      return scaleIn;
    case 'staggerContainer':
      return staggerContainer;
    case 'fadeUp':
    default:
      return fadeUp;
  }
}

type MotionSectionProps = {
  children: ReactNode;
  className?: string;
  id?: string;
  'aria-label'?: string;
  variant?: VariantName | Variants;
  viewportAmount?: number;
  withScrollAway?: boolean;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
};

export function MotionSection({
  children,
  className = '',
  id,
  'aria-label': ariaLabel,
  viewportAmount = 0.15,
  onMouseEnter,
  onMouseLeave,
}: MotionSectionProps) {
  // SPRINT 7.1 SAFE VIEWPORT RECOVERY:
  // - Opacity awal section utama harus 1
  // - initial={{ opacity: 1, y: 0 }} & whileInView={{ opacity: 1, y: 0 }}
  // - viewport amount = 0.15
  // - Scroll-away (useScroll + useTransform) dinonaktifkan sementara untuk stabilitas
  return (
    <motion.section
      id={id}
      aria-label={ariaLabel}
      className={className}
      initial={{ opacity: 1, y: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: viewportAmount }}
      style={{ opacity: 1, y: 0 }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </motion.section>
  );
}

type MotionDivProps = {
  children: ReactNode;
  className?: string;
  variant?: VariantName | Variants;
  viewportAmount?: number;
  delay?: number;
  whileHover?: TargetAndTransition;
  once?: boolean;
  initial?: boolean | string;
};

export function MotionDiv({
  children,
  className = '',
  variant = 'fadeUp',
  viewportAmount = 0.15,
  delay,
  whileHover,
  once = true,
  initial = 'hidden',
}: MotionDivProps) {
  const shouldReduceMotion = useReducedMotion();
  const baseVariants = shouldReduceMotion
    ? reducedFade
    : getVariant(variant);

  const activeVariants = delay
    ? {
        ...baseVariants,
        visible: {
          ...baseVariants.visible,
          transition: {
            ...((baseVariants.visible as { transition?: object })?.transition || {}),
            delay,
          },
        },
      }
    : baseVariants;

  return (
    <motion.div
      className={className}
      initial={initial}
      whileInView="visible"
      viewport={{ once, amount: viewportAmount }}
      variants={activeVariants}
      whileHover={shouldReduceMotion ? undefined : whileHover}
    >
      {children}
    </motion.div>
  );
}

type MotionChildProps = {
  children: ReactNode;
  className?: string;
  variant?: VariantName | Variants;
  whileHover?: TargetAndTransition;
};

export function MotionChild({
  children,
  className = '',
  variant = 'fadeUp',
  whileHover,
}: MotionChildProps) {
  const shouldReduceMotion = useReducedMotion();
  const activeVariants = shouldReduceMotion
    ? reducedFade
    : getVariant(variant);

  return (
    <motion.div
      className={className}
      variants={activeVariants}
      whileHover={shouldReduceMotion ? undefined : whileHover}
    >
      {children}
    </motion.div>
  );
}
