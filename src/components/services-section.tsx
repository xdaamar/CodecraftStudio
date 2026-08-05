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
import {
  MotionSection,
  MotionDiv,
  MotionChild,
} from '@/components/motion/motion-wrapper';

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

export function ServicesSection() {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

  return (
    <MotionSection
      id="services"
      aria-label="Layanan Website"
      variant="fadeUp"
      className="w-full border-y border-slate-200/70 bg-gradient-to-b from-orange-50 via-white to-blue-50 py-16 lg:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <MotionDiv
          variant="fadeUp"
          initial={false}
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
        </MotionDiv>

        {/* MOBILE LAYOUT: Accordion (<768px) */}
        <div className="mt-8 flex flex-col gap-3 md:hidden">
          {SERVICES_ITEMS.map((service, idx) => {
            const isOpen = openAccordion === idx;
            return (
              <div
                key={service.title}
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
                      transition={{ type: 'spring', stiffness: 120, damping: 20 }}
                    >
                      <div className="px-5 pb-5 pt-1">
                        <p className="text-sm leading-relaxed text-slate-600">
                          {service.description}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* DESKTOP LAYOUT: Grid (>=768px) */}
        <MotionDiv
          variant="staggerContainer"
          className="mt-12 hidden grid-cols-1 gap-4 md:grid md:grid-cols-2 md:gap-6"
        >
          {SERVICES_ITEMS.map((service, idx) => (
            <MotionChild
              key={service.title}
              variant="fadeUp"
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="flex flex-col rounded-[1.5rem] border border-slate-200/70 bg-white/90 p-5 shadow-[0_10px_40px_rgba(15,23,42,0.05)] backdrop-blur-sm transition-shadow duration-300 hover:shadow-[0_20px_45px_rgba(15,23,42,0.08)] sm:p-8"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50/80">
                <ServiceIcon index={idx} />
              </div>

              <h3 className="mt-6 font-heading text-xl font-bold tracking-tight text-slate-950 sm:text-2xl">
                {service.title}
              </h3>

              <p className="mt-3 text-base leading-relaxed text-slate-600">
                {service.description}
              </p>
            </MotionChild>
          ))}
        </MotionDiv>

        <MotionDiv
          variant="fadeUp"
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
        </MotionDiv>
      </div>
    </MotionSection>
  );
}
