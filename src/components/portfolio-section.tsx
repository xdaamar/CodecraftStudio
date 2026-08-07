'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { getAllProjects } from '@/lib/portfolio';
import { PortfolioPreviewCard } from '@/components/portfolio-preview-card';
import { MobileSweepSection } from '@/components/mobile-sweep-section';

export function PortfolioSection() {
  const projects = getAllProjects();
  const VIEWPORT_CONFIG = { amount: 0.35 };

  return (
    <section
      id="work"
      aria-label="Portofolio Pilihan"
      className="relative w-full overflow-hidden bg-slate-950 py-16 lg:py-24 xl:py-28"
    >
      <div className="pointer-events-none absolute -top-10 left-1/2 h-32 w-32 -translate-x-1/2 rounded-full bg-blue-100/40 blur-3xl" />

      <MobileSweepSection className="mx-auto w-full max-w-[1380px] px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={VIEWPORT_CONFIG}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="inline-flex items-center rounded-full border border-slate-700/60 bg-slate-800 px-3.5 py-1 text-xs font-semibold tracking-wide text-blue-400 uppercase shadow-xs">
              Portofolio Pilihan
            </span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT_CONFIG}
            transition={{ duration: 0.65, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="mt-4 max-w-3xl font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Studi kasus &amp; project nyata dari{' '}
              <span className="text-blue-500">Code Craft Studio</span>.
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 24, filter: 'blur(4px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={VIEWPORT_CONFIG}
            transition={{ duration: 0.55, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
              Geser ke kanan atau kiri untuk melihat showcase website profesional,
              aplikasi SaaS, dan sistem custom yang siap bersaing di Google.
            </p>
          </motion.div>
        </div>

        {/* Horizontal scroll / snap carousel */}
        <div className="mt-12 -mx-4 flex overflow-x-auto snap-x snap-mandatory scroll-px-4 gap-4 px-4 pb-6 pt-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden sm:-mx-6 sm:scroll-px-6 sm:gap-6 sm:px-6 lg:mx-0 lg:grid lg:grid-cols-3 lg:overflow-visible lg:px-0 lg:gap-8">
          {projects.map((project) => (
            <PortfolioPreviewCard key={project.slug} item={project} />
          ))}
        </div>

        {/* Mobile swipe indicator */}
        <p className="mt-2 text-center text-xs text-slate-400 md:hidden">
          Geser untuk melihat project lainnya →
        </p>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT_CONFIG}
          transition={{ duration: 0.55, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 flex justify-center"
        >
          <Link
            href="/portfolio"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-slate-700/70 bg-slate-800 px-8 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-700 hover:shadow"
          >
            <span>Lihat Semua Portfolio</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </MobileSweepSection>
    </section>
  );
}
