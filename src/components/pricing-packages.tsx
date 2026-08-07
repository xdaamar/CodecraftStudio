'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import {
  PRICING_PACKAGES,
  MAINTENANCE_PACKAGE,
  WA_LINK,
  type PricingPackageItem,
} from '@/lib/constants';
import { MobileSweepSection } from '@/components/mobile-sweep-section';

function PricingCard({ pkg, isMobile = false }: { pkg: PricingPackageItem; isMobile?: boolean }) {
  const isCustom = pkg.label === 'Custom Solution';
  const isBusiness = pkg.label === 'Business Website';
  const isStarter = pkg.label === 'Starter UMKM';

  let cardStyle = 'bg-gradient-to-b from-slate-50/80 to-white border border-slate-300 shadow-sm text-slate-900 lg:hover:!-translate-y-[6px] lg:hover:scale-[1.01] lg:hover:border-slate-400 lg:hover:shadow-xl transition-all duration-300 transform-gpu lg:origin-bottom';
  
  if (isBusiness) {
    cardStyle = 'bg-gradient-to-b from-blue-50/50 via-white to-blue-50/50 border-2 border-blue-200 shadow-md text-slate-900 lg:hover:!-translate-y-[10px] lg:hover:rotate-x-[2deg] lg:hover:scale-[1.015] lg:hover:border-blue-400 lg:hover:shadow-[0_24px_60px_rgba(37,99,235,0.15)] transition-all duration-500 transform-gpu lg:origin-bottom lg:min-h-[560px] relative z-10';
  } else if (isCustom) {
    cardStyle = 'bg-white border border-slate-200 shadow-sm text-slate-900 lg:hover:!-translate-y-[6px] lg:hover:scale-[1.01] lg:hover:border-slate-300 lg:hover:shadow-xl transition-all duration-300 transform-gpu lg:origin-bottom';
  }

  // Animation values
  let initial = {};
  let whileInView = {};
  let transition = {};

  if (isStarter) {
    initial = { opacity: 0, x: -40 };
    whileInView = { opacity: 1, x: 0 };
    transition = { duration: 0.6, ease: [0.22, 1, 0.36, 1] };
  } else if (isBusiness) {
    initial = { opacity: 0, scale: 0.94 };
    whileInView = { opacity: 1, scale: 1 };
    transition = { duration: 0.75, ease: [0.22, 1, 0.36, 1] };
  } else {
    initial = { opacity: 0, x: 40 };
    whileInView = { opacity: 1, x: 0 };
    transition = { duration: 0.6, ease: [0.22, 1, 0.36, 1] };
  }

  if (isMobile) {
    // If rendered inside AnimatePresence in mobile tabs, we don't apply whileInView to the card itself
    initial = {};
    whileInView = {};
    transition = {};
  }

  return (
    <motion.article
      initial={initial}
      whileInView={whileInView}
      viewport={{ amount: 0.25 }}
      transition={transition}
      className={`flex flex-col justify-between rounded-[2rem] p-6 lg:p-8 ${cardStyle} ${isMobile ? '!transform-none' : ''}`}
    >
      <div>
        <div className="flex items-center justify-between gap-2">
          <span className="font-heading text-xl font-bold tracking-tight sm:text-2xl text-slate-900">
            {pkg.label}
          </span>
          {pkg.badge && (
            <span
              className={`rounded-full px-3 py-1 text-xs font-bold border ${
                isBusiness
                  ? 'border-blue-200 bg-blue-100 text-blue-700'
                  : isStarter
                  ? 'border-slate-300 bg-slate-200 text-slate-700'
                  : 'border-green-200 bg-green-100 text-green-700'
              }`}
            >
              {pkg.badge}
            </span>
          )}
        </div>

        <p
          className={`mt-3 font-heading font-extrabold ${
            isBusiness
              ? 'text-xl text-blue-600 sm:text-2xl'
              : isStarter
              ? 'text-xl text-slate-700 sm:text-2xl'
              : 'text-2xl text-green-600 sm:text-3xl'
          }`}
        >
          {pkg.price}
        </p>

        <hr className="my-6 border-slate-200" />

        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.3 }}
          transition={{ staggerChildren: 0.035 }}
          className="space-y-3.5"
        >
          {pkg.features.map((feat) => (
            <motion.li
              key={feat}
              variants={{
                hidden: { opacity: 0, x: 12 },
                visible: { opacity: 1, x: 0 },
              }}
              className="flex items-start gap-3 text-sm sm:text-base text-slate-600"
            >
              <span
                className={`mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                  isBusiness
                    ? 'bg-blue-100 text-blue-600'
                    : isStarter
                    ? 'bg-slate-200 text-slate-600'
                    : 'bg-green-100 text-green-600'
                }`}
              >
                <Check className="h-3.5 w-3.5" />
              </span>
              <span>{feat}</span>
            </motion.li>
          ))}
        </motion.ul>
      </div>

      <div className="mt-8">
        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-green-500 px-6 text-sm font-medium text-white shadow-sm transition hover:bg-green-600 active:scale-[0.98]"
        >
          <FaWhatsapp className="text-base" />
          <span>Contact via Whatsapp</span>
        </a>
      </div>
    </motion.article>
  );
}

export function PricingPackages() {
  const [activeTab, setActiveTab] = useState(1);
  const VIEWPORT_CONFIG = { amount: 0.35 };
  
  return (
    <section
      id="pricing"
      aria-label="Paket Website"
      className="w-full bg-slate-50 py-16 lg:py-24 xl:py-28"
    >
      <MobileSweepSection className="mx-auto w-full max-w-[1380px] px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT_CONFIG}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="inline-flex items-center rounded-full border border-slate-200/60 bg-white px-3.5 py-1 text-xs font-semibold tracking-wide text-blue-600 uppercase shadow-xs">
              Paket Website
            </span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT_CONFIG}
            transition={{ duration: 0.65, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="mt-4 font-heading text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
              Pilih paket yang paling sesuai dengan kebutuhan bisnis Anda.
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT_CONFIG}
            transition={{ duration: 0.65, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
              Harga berikut adalah estimasi awal. Konsultasi dan diskusi kebutuhan
              website <span className="font-semibold text-slate-950">gratis 100%</span>{' '}
              tanpa biaya apa pun.
            </p>
          </motion.div>
        </div>

        {/* DESKTOP LAYOUT (>= 1024px): 3D Focus Mode */}
        <div className="mt-16 hidden lg:grid grid-cols-3 gap-8 items-end [perspective:1200px]">
          {PRICING_PACKAGES.map((pkg) => (
            <PricingCard key={pkg.label} pkg={pkg} />
          ))}
        </div>

        {/* MOBILE LAYOUT: Segmented Switcher (<768px) */}
        <div className="mt-12 md:hidden">
          <div className="mx-auto flex max-w-sm rounded-full bg-slate-200/70 p-1">
            {['Starter', 'Business', 'Custom'].map((tabLabel, idx) => (
              <button
                key={tabLabel}
                onClick={() => setActiveTab(idx)}
                className={`relative flex-1 rounded-full py-2 text-sm font-semibold transition-colors ${
                  activeTab === idx ? 'text-slate-900' : 'text-slate-500'
                }`}
              >
                {activeTab === idx && (
                  <motion.div
                    layoutId="activeTabIndicator"
                    className="absolute inset-0 rounded-full bg-white shadow-sm"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{tabLabel}</span>
              </button>
            ))}
          </div>

          <div className="mt-8 overflow-hidden px-1 pb-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -16 }}
                transition={{ duration: 0.28 }}
              >
                <PricingCard pkg={PRICING_PACKAGES[activeTab]} isMobile />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT_CONFIG}
          transition={{ duration: 0.65, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12"
        >
          <article className="flex flex-col justify-between gap-6 rounded-[2rem] border border-black/5 bg-white p-6 shadow-xs lg:flex-row lg:items-center lg:p-8">
            <div className="flex flex-col lg:max-w-xs">
              <span className="text-xs font-semibold uppercase tracking-wider text-accent">
                Layanan Tambahan
              </span>
              <h3 className="mt-1 font-heading text-2xl font-bold tracking-tight text-text">
                {MAINTENANCE_PACKAGE.title}
              </h3>
              <p className="mt-1 text-lg font-bold text-green-600">
                {MAINTENANCE_PACKAGE.price}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2.5 lg:max-w-lg">
              {MAINTENANCE_PACKAGE.features.map((feature) => (
                <span
                  key={feature}
                  className="inline-flex items-center gap-1.5 rounded-full border border-border-light bg-slate-50 px-3.5 py-1.5 text-xs font-medium text-muted"
                >
                  <Check className="h-3.5 w-3.5 text-green-500" />
                  <span>{feature}</span>
                </span>
              ))}
            </div>

            <div>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-green-500 px-6 text-sm font-medium text-white shadow-sm transition hover:bg-green-600 lg:w-auto"
              >
                <FaWhatsapp className="text-base" />
                <span>Contact via Whatsapp</span>
              </a>
            </div>
          </article>
        </motion.div>
      </MobileSweepSection>
    </section>
  );
}
