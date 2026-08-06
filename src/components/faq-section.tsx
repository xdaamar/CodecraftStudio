'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { MobileSweepSection } from '@/components/mobile-sweep-section';

const FAQS = [
  {
    question: 'Apakah konsultasi benar-benar gratis?',
    answer:
      'Ya, konsultasi awal 100% gratis. Kami akan berdiskusi tentang kebutuhan bisnis Anda, baik itu untuk jasa pembuatan website Sukoharjo maupun area sekitarnya, tanpa ada biaya tersembunyi.',
  },
  {
    question: 'Apakah bisa membuat website untuk UMKM dan bisnis lokal?',
    answer:
      'Tentu saja. Kami sangat fokus membantu website UMKM dan bisnis lokal untuk tumbuh di era digital dengan solusi yang terjangkau, profesional, dan mudah dikelola.',
  },
  {
    question: 'Apakah sudah termasuk domain dan hosting?',
    answer:
      'Ya, paket layanan kami sudah mencakup domain dan hosting gratis untuk tahun pertama. Anda terima beres dan website siap digunakan.',
  },
  {
    question: 'Berapa lama proses pengerjaan website?',
    answer:
      'Lama pengerjaan bervariasi antara 1-4 minggu tergantung pada tingkat kompleksitas website. Kami berkomitmen untuk menyelesaikan pengerjaan secara tepat waktu sesuai jadwal yang disepakati.',
  },
  {
    question: 'Apakah website bisa muncul di Google?',
    answer:
      'Pasti! Setiap proyek yang kami bangun merupakan website SEO friendly. Kami menerapkan optimasi Google dasar untuk memastikan website Anda mudah ditemukan oleh calon pelanggan Anda.',
  },
  {
    question: 'Apakah menerima revisi selama pengerjaan?',
    answer:
      'Ya, kami menyediakan alokasi revisi agar hasil akhir website sesuai dengan visi bisnis Anda. Kami juga memastikan hasilnya menjadi website mobile friendly yang tampak memukau di semua perangkat.',
  },
  {
    question: 'Apakah tersedia layanan maintenance bulanan?',
    answer:
      'Tentu saja. Kami menyediakan paket layanan maintenance website untuk mengelola keamanan, update konten, serta pemeliharaan rutin agar Anda bisa fokus sepenuhnya ke pengembangan bisnis.',
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const VIEWPORT_CONFIG = { amount: 0.35 };

  return (
    <section aria-label="FAQ" className="w-full bg-white py-16 lg:py-24">
      <MobileSweepSection className="mx-auto max-w-4xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT_CONFIG}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="text-center"
        >
          <span className="inline-flex items-center rounded-full border border-slate-200/60 bg-slate-50 px-3.5 py-1 text-xs font-semibold tracking-wide text-blue-600 uppercase shadow-xs">
            FAQ
          </span>
          <h2 className="mt-4 font-heading text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
            Pertanyaan yang Sering Ditanyakan
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
            Temukan jawaban cepat seputar layanan kami. Hubungi kami jika pertanyaan Anda belum terjawab di sini.
          </p>
        </motion.div>

        <div className="mt-12 flex flex-col gap-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={VIEWPORT_CONFIG}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className={`overflow-hidden rounded-[1.25rem] border transition-colors duration-300 ${
                  isOpen
                    ? 'border-blue-200 bg-blue-50/50 shadow-sm'
                    : 'border-slate-200/70 bg-white hover:border-slate-300'
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="flex w-full items-center justify-between p-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                  aria-expanded={isOpen}
                >
                  <span className="font-heading text-lg font-bold text-slate-900 pr-4">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                    className={`flex-shrink-0 flex h-8 w-8 items-center justify-center rounded-full transition-colors ${
                      isOpen ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-500'
                    }`}
                  >
                    <ChevronDown className="h-5 w-5" />
                  </motion.div>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <div className="px-5 pb-5 pt-1 text-slate-600 leading-relaxed text-sm sm:text-base">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </MobileSweepSection>
    </section>
  );
}
