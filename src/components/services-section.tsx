'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Building2,
  Rocket,
  ShoppingBag,
  Smartphone,
  Layout,
  Search,
  Wrench,
  MessageSquare,
} from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { SERVICES_ITEMS, WA_LINK } from '@/lib/constants';

function ServiceIcon({ index }: { index: number }) {
  switch (index) {
    case 0:
      return <Building2 className="h-6 w-6 text-accent" />;
    case 1:
      return <Rocket className="h-6 w-6 text-accent" />;
    case 2:
      return <ShoppingBag className="h-6 w-6 text-accent" />;
    case 3:
      return <Smartphone className="h-6 w-6 text-accent" />;
    case 4:
      return <Layout className="h-6 w-6 text-accent" />;
    case 5:
      return <Search className="h-6 w-6 text-accent" />;
    case 6:
      return <Wrench className="h-6 w-6 text-accent" />;
    case 7:
      return <MessageSquare className="h-6 w-6 text-accent" />;
    default:
      return <Rocket className="h-6 w-6 text-accent" />;
  }
}

const CARD_GRADIENTS = [
  'from-white to-blue-50/80',
  'from-white to-emerald-50/80',
  'from-white to-violet-50/80',
  'from-white to-orange-50/80',
];

function DesktopStackedCards() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => prev + 1);
  };

  const handleReset = () => {
    setCurrentIndex(0);
  };

  return (
    <div className="relative mt-16 hidden lg:flex h-[600px] w-full items-center justify-center perspective-[1200px]">
      <AnimatePresence>
        {SERVICES_ITEMS.map((service, idx) => {
          const isDiscarded = idx < currentIndex;
          const isTop = idx === currentIndex;
          const offset = idx - currentIndex;
          const bgGradient = CARD_GRADIENTS[idx % CARD_GRADIENTS.length];

          // Performance: don't render cards that are too far behind
          if (offset > 4) return null;

          return (
            <motion.div
              key={service.title}
              className={`absolute flex h-[480px] w-[640px] flex-col justify-between rounded-[2.5rem] border border-white/60 bg-gradient-to-br ${bgGradient} p-10 shadow-[inset_0_2px_12px_rgba(255,255,255,1),_0_24px_50px_rgba(15,23,42,0.12)] backdrop-blur-md cursor-pointer transition-shadow hover:shadow-[inset_0_2px_12px_rgba(255,255,255,1),_0_32px_60px_rgba(37,99,235,0.15)] ${isTop ? 'z-50' : ''}`}
              style={{ zIndex: 50 - idx }}
              initial={false}
              animate={{
                x: isDiscarded ? -800 : 0,
                y: isDiscarded ? 0 : offset * 24,
                scale: isDiscarded ? 0.8 : 1 - offset * 0.05,
                rotate: isDiscarded ? -10 : 0,
                opacity: isDiscarded ? 0 : 1 - offset * 0.2,
                filter: isDiscarded ? 'blur(12px) brightness(1.5)' : 'blur(0px) brightness(1)',
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
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-blue-600 shadow-[inset_0_2px_4px_rgba(255,255,255,1),_0_4px_10px_rgba(37,99,235,0.08)]">
                  <ServiceIcon index={idx} />
                </div>

                <h3 className="mt-8 font-heading text-3xl font-extrabold tracking-tight text-slate-900">
                  {service.title}
                </h3>

                <p className="mt-5 max-w-lg text-lg leading-relaxed text-slate-600">
                  {service.description}
                </p>
              </div>
              
              <div className="flex justify-end">
                <span className="text-base font-semibold text-blue-600 opacity-70 transition-opacity group-hover:opacity-100 flex items-center gap-2">
                  Lihat Berikutnya
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </div>
            </motion.div>
          );
        })}
      </AnimatePresence>

      <AnimatePresence>
        {currentIndex === SERVICES_ITEMS.length && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, x: 800 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.9, x: -800 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className="absolute z-10 flex flex-col items-center justify-center text-center p-10 bg-white/95 rounded-[2.5rem] border border-white/60 shadow-[inset_0_2px_12px_rgba(255,255,255,1),_0_24px_50px_rgba(15,23,42,0.12)] backdrop-blur-md"
          >
             <h3 className="font-heading text-3xl font-bold text-slate-800">Semua Layanan Telah Dilihat</h3>
             <p className="mt-3 text-lg text-slate-600">Terima kasih telah menelusuri layanan kami.</p>
             <button 
               onClick={handleReset}
               className="mt-8 rounded-full bg-blue-600 px-8 py-4 text-lg font-semibold text-white transition-transform hover:scale-105 active:scale-95 shadow-md shadow-blue-600/20"
             >
               Mulai Ulang Tumpukan
             </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

import { MobileSweepSection } from '@/components/mobile-sweep-section';
import { MotionButton } from '@/components/ui/motion-reveal';

export function ServicesSection() {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

  const spotlightVariants = {
    hidden: { opacity: 0, scale: 0.94, filter: 'blur(8px)' },
    visible: { opacity: 1, scale: 1, filter: 'blur(0px)' },
  };

  return (
    <section
      id="services"
      aria-label="Layanan Website"
      className="w-full border-y border-slate-200/70 bg-gradient-to-b from-orange-50 via-white to-blue-50 py-16 lg:py-24"
    >
      <MobileSweepSection className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.35 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          variants={spotlightVariants}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="inline-flex items-center rounded-full border border-slate-200/60 bg-white px-3.5 py-1 text-xs font-semibold tracking-wide text-blue-600 uppercase shadow-xs">
            Layanan &amp; Spesialisasi
          </span>
          <h2 className="mt-4 font-heading text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
            Solusi Website &amp; Aplikasi Modern untuk{' '}
            <span className="text-blue-600">Mempercepat Pertumbuhan</span>{' '}
            Bisnis
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
            Setiap website dirancang dengan pendekatan mobile-first, optimasi
            kecepatan tinggi, dan struktur SEO yang siap bersaing di Google.
          </p>
        </motion.div>

        {/* MOBILE LAYOUT: Accordion (<768px) */}
        <div className="mt-8 flex flex-col gap-3 md:hidden">
          {SERVICES_ITEMS.map((service, idx) => {
            const isOpen = openAccordion === idx;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ amount: 0.35 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="flex flex-col overflow-hidden rounded-[1.5rem] border border-slate-200/70 bg-white/90 shadow-sm transition-shadow duration-300"
              >
                <button
                  type="button"
                  onClick={() => setOpenAccordion(isOpen ? null : idx)}
                  className="flex w-full items-center justify-between p-5 text-left"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50/80">
                      <ServiceIcon index={idx} />
                    </div>
                    <span className="font-heading text-lg font-bold text-slate-950">
                      {service.title}
                    </span>
                  </div>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                  >
                    <svg className="h-5 w-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </motion.div>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0, y: -8 }}
                      animate={{ height: 'auto', opacity: 1, y: 0 }}
                      exit={{ height: 0, opacity: 0, y: -8 }}
                      transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <div className="px-5 pb-5 pt-1">
                        <p className="text-sm leading-relaxed text-slate-600">
                          {service.description}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* DESKTOP LAYOUT: Stacked Interactive Cards (>=1024px) */}
        <DesktopStackedCards />

        <MotionButton
          delay={0.2}
          className="mt-12 flex flex-col items-center justify-center text-center"
        >
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-green-500 px-8 text-sm font-medium text-white shadow-sm transition hover:bg-green-600 sm:w-auto"
          >
            <FaWhatsapp className="text-base" />
            <span>Contact via Whatsapp</span>
          </a>
        </MotionButton>
      </MobileSweepSection>
    </section>
  );
}
