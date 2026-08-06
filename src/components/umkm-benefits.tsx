'use client';

import { useRef, useState } from 'react';
import { useScroll, useTransform, motion, AnimatePresence } from 'framer-motion';
import { Check, ShieldCheck } from 'lucide-react';
import { UMKM_BENEFITS, type BenefitItem } from '@/lib/constants';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
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

const MOBILE_CARD_GRADIENTS = [
  'from-emerald-50/80 to-white',
  'from-blue-50/80 to-white',
  'from-violet-50/80 to-white',
  'from-orange-50/80 to-white',
  'from-rose-50/80 to-white',
];

function MobileBenefitsStackedCards() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => prev + 1);
  };

  const handleReset = () => {
    setCurrentIndex(0);
  };

  return (
    <div className="relative mt-8 flex md:hidden h-[450px] w-full items-center justify-center perspective-[1000px] overflow-hidden">
      <AnimatePresence>
        {UMKM_BENEFITS.map((benefit, idx) => {
          const isDiscarded = idx < currentIndex;
          const isTop = idx === currentIndex;
          const offset = idx - currentIndex;
          const bgGradient = MOBILE_CARD_GRADIENTS[idx % MOBILE_CARD_GRADIENTS.length];

          if (offset > 3) return null;

          return (
            <motion.div
              key={benefit.title}
              className={`absolute flex h-[400px] w-[280px] sm:w-[320px] flex-col justify-between rounded-[2rem] border border-white/60 bg-gradient-to-br ${bgGradient} p-6 shadow-[inset_0_2px_8px_rgba(255,255,255,1),_0_16px_40px_rgba(15,23,42,0.1)] backdrop-blur-md cursor-pointer transition-shadow ${isTop ? 'z-50' : ''}`}
              style={{ zIndex: 50 - idx }}
              initial={false}
              animate={{
                x: isDiscarded ? -400 : 0,
                y: isDiscarded ? 0 : offset * 20,
                scale: isDiscarded ? 0.8 : 1 - offset * 0.05,
                rotate: isDiscarded ? -15 : 0,
                opacity: isDiscarded ? 0 : 1 - offset * 0.25,
                filter: isDiscarded ? 'blur(8px) brightness(1.2)' : 'blur(0px) brightness(1)',
                pointerEvents: isDiscarded ? 'none' : isTop ? 'auto' : 'none',
              }}
              transition={{
                type: 'spring',
                stiffness: 300,
                damping: 25,
                mass: 1,
              }}
              onClick={() => {
                if (isTop) handleNext();
              }}
            >
              <div>
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white text-emerald-600 shadow-sm">
                    {benefit.fullWidth ? <ShieldCheck className="h-6 w-6" /> : <Check className="h-6 w-6" />}
                  </span>
                </div>
                
                <h3 className="mt-6 font-heading text-xl font-bold tracking-tight text-slate-900">
                  {benefit.title}
                </h3>
                
                <p className="mt-4 text-sm leading-relaxed text-slate-600">
                  {benefit.description}
                </p>
              </div>
              
              <div className="flex justify-end mt-4">
                <span className="text-sm font-semibold text-emerald-600 flex items-center gap-1">
                  Lanjut
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </motion.div>
          );
        })}
      </AnimatePresence>

      <AnimatePresence>
        {currentIndex === UMKM_BENEFITS.length && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, x: 400 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.9, x: -400 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className="absolute z-10 flex flex-col items-center justify-center text-center p-6 w-[280px] bg-white/95 rounded-[2rem] border border-white/60 shadow-[inset_0_2px_8px_rgba(255,255,255,1),_0_16px_40px_rgba(15,23,42,0.1)] backdrop-blur-md"
          >
             <h3 className="font-heading text-xl font-bold text-slate-800">Selesai!</h3>
             <p className="mt-2 text-sm text-slate-600">Siap mengembangkan bisnis Anda?</p>
             <button 
               onClick={handleReset}
               className="mt-6 rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-white transition-transform active:scale-95 shadow-md shadow-emerald-500/20"
             >
               Ulangi Tumpukan
             </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

import { MobileSweepSection } from '@/components/mobile-sweep-section';
import { MotionHeading } from '@/components/ui/motion-reveal';

export function UMKMBenefits() {
  const smallCards = UMKM_BENEFITS.filter((item) => !item.fullWidth);
  const fullWidthCard = UMKM_BENEFITS.find((item) => item.fullWidth);

  const VIEWPORT_CONFIG = { amount: 0.35 };

  return (
    <section
      id="benefits"
      aria-label="Keunggulan Layanan"
      className="w-full bg-gradient-to-b from-emerald-50 via-white to-slate-50 py-16 lg:py-24 overflow-hidden"
    >
      <MobileSweepSection className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col items-center text-center">
          <MotionHeading delay={0}>
            <span className="inline-flex items-center rounded-full border border-slate-200/60 bg-white/90 px-3.5 py-1 text-xs font-semibold tracking-wide text-blue-600 uppercase shadow-xs">
              Keunggulan Layanan
            </span>
          </MotionHeading>
          <MotionHeading delay={0.08}>
            <h2 className="mt-4 max-w-2xl font-heading text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Website yang sederhana, cepat, dan siap membantu{' '}
              <span className="text-blue-600">bisnis Anda tumbuh</span> di Google.
            </h2>
          </MotionHeading>
        </div>

        {/* MOBILE LAYOUT - Stacked Cards (<= 768px) */}
        <MobileBenefitsStackedCards />

        {/* DESKTOP BENTO GRID LAYOUT */}
        <div className="hidden lg:grid mt-16 lg:grid-cols-12 lg:gap-6">
          {/* Card 1: Gratis Konsultasi (Left Top) */}
          <motion.article
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={VIEWPORT_CONFIG}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="col-span-6 flex flex-col rounded-[2rem] border border-blue-100 bg-blue-50/50 p-10 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg hover:shadow-slate-900/5 group"
          >
            <div className="flex items-center gap-4">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-blue-600 shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3">
                <Check className="h-6 w-6" />
              </span>
              <h3 className="font-heading text-2xl font-bold text-slate-950">
                {smallCards[0]?.title}
              </h3>
            </div>
            <p className="mt-5 text-lg leading-relaxed text-slate-600">
              {smallCards[0]?.description}
            </p>
          </motion.article>

          {/* Card 2: Gratis Domain (Right Top) */}
          <motion.article
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={VIEWPORT_CONFIG}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.04 }}
            className="col-span-6 flex flex-col rounded-[2rem] border border-orange-100 bg-orange-50/50 p-10 transition-all duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-lg hover:shadow-slate-900/5 group"
          >
            <div className="flex items-center gap-4">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-orange-600 shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                <Check className="h-6 w-6" />
              </span>
              <h3 className="font-heading text-2xl font-bold text-slate-950">
                {smallCards[1]?.title}
              </h3>
            </div>
            <p className="mt-5 text-lg leading-relaxed text-slate-600">
              {smallCards[1]?.description}
            </p>
          </motion.article>

          {/* Card 3: SEO Friendly (Left Bottom) */}
          <motion.article
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT_CONFIG}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
            className="col-span-5 flex flex-col rounded-[2rem] border border-violet-100 bg-violet-50/50 p-10 transition-all duration-300 hover:-translate-y-1 hover:border-violet-200 hover:shadow-lg hover:shadow-slate-900/5 group"
          >
            <div className="flex items-center gap-4">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-violet-600 shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3">
                <Check className="h-6 w-6" />
              </span>
              <h3 className="font-heading text-2xl font-bold text-slate-950">
                {smallCards[2]?.title}
              </h3>
            </div>
            <p className="mt-5 text-lg leading-relaxed text-slate-600">
              {smallCards[2]?.description}
            </p>
          </motion.article>

          {/* Card 4: Mobile Friendly (Right Bottom) */}
          <motion.article
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT_CONFIG}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.14 }}
            className="col-span-7 flex flex-col rounded-[2rem] border border-emerald-100 bg-emerald-50/50 p-10 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-lg hover:shadow-slate-900/5 group"
          >
            <div className="flex items-center gap-4">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-emerald-600 shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                <Check className="h-6 w-6" />
              </span>
              <h3 className="font-heading text-2xl font-bold text-slate-950">
                {smallCards[3]?.title}
              </h3>
            </div>
            <p className="mt-5 text-lg leading-relaxed text-slate-600">
              {smallCards[3]?.description}
            </p>
          </motion.article>

          {/* Card 5: Maintenance (Bottom Full Width) */}
          {fullWidthCard && (
            <motion.article
              initial={{ opacity: 0, y: 32, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={VIEWPORT_CONFIG}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.18 }}
              className="col-span-12 flex flex-col rounded-[2.5rem] border border-slate-700 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 p-12 text-white transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-900/20 group relative overflow-hidden"
            >
              <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-blue-500 opacity-20 blur-3xl transition-opacity duration-500 group-hover:opacity-40" />
              <div className="relative z-10 flex items-center gap-5">
                <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-blue-300 backdrop-blur-md shadow-inner transition-transform duration-300 group-hover:scale-110">
                  <ShieldCheck className="h-7 w-7" />
                </span>
                <h3 className="font-heading text-3xl font-bold tracking-tight text-white">
                  {fullWidthCard.title}
                </h3>
              </div>
              <p className="relative z-10 mt-6 max-w-4xl text-xl leading-relaxed text-slate-300">
                {fullWidthCard.description}
              </p>
            </motion.article>
          )}
        </div>
      </MobileSweepSection>
    </section>
  );
}
