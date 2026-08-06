'use client';

import { motion } from 'framer-motion';
import {
  CheckCircle2,
  Smartphone,
  Search,
  MapPin,
} from 'lucide-react';
import { MobileSweepSection } from '@/components/mobile-sweep-section';

const STATS = [
  {
    icon: CheckCircle2,
    value: '10+',
    label: 'Project Selesai',
  },
  {
    icon: Smartphone,
    value: '100%',
    label: 'Mobile Friendly',
  },
  {
    icon: Search,
    value: 'SEO',
    label: 'Optimasi Dasar Siap',
  },
  {
    icon: MapPin,
    value: 'JATENG',
    label: 'Fokus UMKM Lokal',
  },
];

export function TrustStrip() {
  const VIEWPORT_CONFIG = { amount: 0.35 };

  return (
    <section aria-label="Statistik dan Kepercayaan" className="w-full bg-white py-12 lg:py-16">
      <MobileSweepSection className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
          {STATS.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEWPORT_CONFIG}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group flex flex-col items-center justify-center rounded-3xl border border-slate-200/60 bg-slate-50/50 p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-[2px] hover:shadow-md hover:border-slate-300"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                <stat.icon className="h-6 w-6" />
              </div>
              <h3 className="font-heading text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
                {stat.value}
              </h3>
              <p className="mt-1 text-sm font-medium text-slate-500 sm:text-base">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </MobileSweepSection>
    </section>
  );
}
