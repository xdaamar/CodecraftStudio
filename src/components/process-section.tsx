'use client';

import { motion } from 'framer-motion';
import { MessageSquare, PenTool, Code2, Rocket } from 'lucide-react';
import { MobileSweepSection } from '@/components/mobile-sweep-section';

const PROCESS_STEPS = [
  {
    icon: MessageSquare,
    title: 'Konsultasi Gratis',
    description:
      'Diskusi kebutuhan bisnis, fitur website, target pasar, dan tujuan digital bisnis melalui WhatsApp.',
  },
  {
    icon: PenTool,
    title: 'Desain & Struktur',
    description:
      'Penyusunan tampilan, alur halaman, dan pengalaman pengguna yang sesuai dengan identitas bisnis.',
  },
  {
    icon: Code2,
    title: 'Development & Optimasi',
    description:
      'Website dibangun menggunakan Next.js, TypeScript, dan Tailwind CSS dengan fokus performa, SEO, dan mobile-first.',
  },
  {
    icon: Rocket,
    title: 'Launch & Support',
    description:
      'Website dipublikasikan dan siap mendapatkan dukungan maintenance, update konten, backup, dan monitoring berkala.',
  },
];

export function ProcessSection() {
  const VIEWPORT_CONFIG = { amount: 0.35 };

  return (
    <section aria-label="Alur Kerja" className="w-full bg-slate-50 py-16 lg:py-24 xl:py-28">
      <MobileSweepSection className="mx-auto w-full max-w-[1380px] px-4 sm:px-6 lg:px-8 xl:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT_CONFIG}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="inline-flex items-center rounded-full border border-slate-200/60 bg-white px-3.5 py-1 text-xs font-semibold tracking-wide text-blue-600 uppercase shadow-xs">
            Alur Kerja
          </span>
          <h2 className="mt-4 font-heading text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
            Proses Kerja yang Jelas dan Transparan
          </h2>
        </motion.div>

        {/* TIMELINE CONTAINER */}
        <div className="mt-16 relative">
          {/* Connector Line (Desktop - Horizontal) */}
          <div className="hidden lg:block absolute top-[28px] left-[10%] right-[10%] h-0.5 bg-slate-200" />
          
          {/* Connector Line (Mobile - Vertical) */}
          <div className="block lg:hidden absolute top-[28px] bottom-12 left-[28px] w-0.5 bg-slate-200" />

          <div className="flex flex-col lg:flex-row gap-10 lg:gap-6 relative z-10">
            {PROCESS_STEPS.map((step, idx) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={VIEWPORT_CONFIG}
                transition={{ duration: 0.5, delay: idx * 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="flex-1 flex flex-row lg:flex-col items-start lg:items-center relative gap-6 lg:gap-4 group"
              >
                {/* Icon Wrapper */}
                <div className="flex-shrink-0 flex h-14 w-14 items-center justify-center rounded-2xl bg-white border border-slate-200 shadow-sm text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white z-10">
                  <step.icon className="h-6 w-6" />
                </div>

                {/* Content */}
                <div className="flex flex-col lg:items-center lg:text-center mt-1 lg:mt-4">
                  <div className="text-sm font-bold text-blue-600 mb-1 tracking-wider uppercase">
                    Tahap {idx + 1}
                  </div>
                  <h3 className="font-heading text-xl font-bold tracking-tight text-slate-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm sm:text-base leading-relaxed text-slate-600">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </MobileSweepSection>
    </section>
  );
}
