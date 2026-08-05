'use client';

import { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import { Check, ShieldCheck } from 'lucide-react';
import { UMKM_BENEFITS, type BenefitItem } from '@/lib/constants';
import {
  MotionSection,
  MotionDiv,
  MotionChild,
} from '@/components/motion/motion-wrapper';

function StackedBenefitCard({ benefit, index }: { benefit: BenefitItem; index: number }) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Only apply scroll animations on mobile screens (where it stacks)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'start start'],
  });

  // Calculate transform values based on scroll progression
  // When card reaches top, it scales down, fades slightly, and moves up.
  // Note: These transforms will only be active if we are on a small screen
  // due to CSS media query overrides, but we calculate them anyway.
  const scale = useTransform(scrollYProgress, [0, 0.8, 1], [1, 1, 0.97]);
  const opacity = useTransform(scrollYProgress, [0, 0.8, 1], [1, 1, 0.85]);
  const y = useTransform(scrollYProgress, [0, 0.8, 1], [0, 0, -24]);

  return (
    <motion.div
      ref={containerRef}
      style={{ scale, opacity, y, top: `calc(6rem + ${index * 1.5}rem)` }}
      className="sticky flex flex-col rounded-[2rem] border border-white/60 bg-white/90 p-8 shadow-[0_10px_40px_rgba(15,23,42,0.05)] backdrop-blur-sm transition-shadow duration-300 sm:relative sm:top-auto sm:!scale-100 sm:!opacity-100 sm:!translate-y-0 sm:hover:-translate-y-1 sm:hover:shadow-[0_20px_45px_rgba(15,23,42,0.08)]"
    >
      <div className="flex items-center gap-3">
        <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
          <Check className="h-5 w-5" />
        </span>
        <h3 className="font-heading text-xl font-bold tracking-tight text-slate-950 sm:text-2xl">
          {benefit.title}
        </h3>
      </div>
      <p className="mt-4 text-base leading-relaxed text-slate-600">
        {benefit.description}
      </p>
    </motion.div>
  );
}

export function UMKMBenefits() {
  const smallCards = UMKM_BENEFITS.filter((item) => !item.fullWidth);
  const fullWidthCard = UMKM_BENEFITS.find((item) => item.fullWidth);

  return (
    <MotionSection
      id="benefits"
      aria-label="Keunggulan Layanan"
      variant="fadeUp"
      className="w-full bg-gradient-to-b from-emerald-50 via-white to-slate-50 py-16 lg:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <MotionDiv
          variant="fadeUp"
          initial={false}
          className="flex flex-col items-center text-center"
        >
          <span className="inline-flex items-center rounded-full border border-slate-200/60 bg-white/90 px-3.5 py-1 text-xs font-semibold tracking-wide text-blue-600 uppercase shadow-xs">
            Keunggulan Layanan
          </span>
          <h2 className="mt-4 max-w-2xl font-heading text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            Website yang sederhana, cepat, dan siap membantu{' '}
            <span className="text-blue-600">bisnis Anda tumbuh</span> di Google.
          </h2>
        </MotionDiv>

        <div className="mt-12 flex flex-col gap-6 sm:grid sm:grid-cols-2 lg:mt-16 lg:gap-8">
          {smallCards.map((benefit, idx) => (
            <StackedBenefitCard key={benefit.title} benefit={benefit} index={idx} />
          ))}
        </div>

        {fullWidthCard && (
          <MotionDiv
            variant="fadeUp"
            initial={false}
            delay={0.2}
            className="mt-8"
          >
            <article className="flex flex-col rounded-[2rem] border border-emerald-100 bg-gradient-to-r from-emerald-50 via-white to-blue-50 p-8 shadow-[0_10px_40px_rgba(15,23,42,0.05)] transition duration-300 sm:p-10">
              <div className="h-1 w-20 rounded-full bg-gradient-to-r from-emerald-500 to-blue-500" />
              <div className="mt-6 flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                      <ShieldCheck className="h-5 w-5" />
                    </span>
                    <h3 className="font-heading text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
                      {fullWidthCard.title}
                    </h3>
                  </div>
                  <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-600 sm:text-lg">
                    {fullWidthCard.description}
                  </p>
                </div>
              </div>
            </article>
          </MotionDiv>
        )}
      </div>
    </MotionSection>
  );
}
