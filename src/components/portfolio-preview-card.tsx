'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { type PortfolioItem } from '@/lib/portfolio';

export function PortfolioPreviewCard({ item }: { item: PortfolioItem }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.article
      initial={
        shouldReduceMotion
          ? { opacity: 0 }
          : { opacity: 0, y: 16, scale: 0.98 }
      }
      whileInView={
        shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 }
      }
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.45,
        ease: 'easeOut',
      }}
      className="flex min-w-[72%] max-w-[280px] shrink-0 snap-start flex-col justify-between rounded-[1.75rem] border border-slate-800/80 bg-gradient-to-br from-slate-900 to-slate-800 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-slate-700 hover:shadow-xl hover:shadow-blue-900/20 sm:min-w-0 sm:max-w-none sm:w-[350px]"
    >
      <div>
        <div className="relative aspect-16/10 w-full overflow-hidden rounded-2xl bg-slate-800/50">
          <Image
            src={item.mainImage}
            alt={`Screenshot ${item.title}`}
            fill
            loading="lazy"
            sizes="(max-width: 768px) 72vw, 360px"
            className="object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>

        <div className="mt-4">
          <span className="inline-block rounded-full bg-blue-500/10 border border-blue-500/20 px-3 py-1 text-xs font-semibold text-blue-400">
            {item.category}
          </span>
          <h2 className="mt-3 font-heading text-xl font-bold tracking-tight text-white">
            {item.title}
          </h2>
          <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-slate-400">
            {item.shortDescription}
          </p>
        </div>
      </div>

      <div className="mt-6">
        <Link
          href={`/portfolio/${item.slug}`}
          className="inline-flex h-11 w-full items-center justify-center gap-1.5 rounded-full bg-blue-600 px-5 text-sm font-semibold text-white shadow-xs transition hover:bg-blue-500 active:scale-95"
        >
          <span>Lihat Detail</span>
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </motion.article>
  );
}
