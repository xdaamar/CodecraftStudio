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
          : { opacity: 0, y: 24, scale: 0.98 }
      }
      whileInView={
        shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 }
      }
      viewport={{ amount: 0.2 }}
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

export function PortfolioDesktopStorytelling({ item }: { item: PortfolioItem }) {
  const shouldReduceMotion = useReducedMotion();

  const textVariants = {
    hidden: { opacity: 0, x: 36 },
    visible: { opacity: 1, x: 0 },
  };

  const proofVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0 },
  };

  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <div className="hidden lg:grid grid-cols-12 gap-12 items-start py-12">
      {/* 7 Columns: Sticky Screenshot */}
      <motion.div
        initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.96 }}
        whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, scale: 1 }}
        viewport={{ amount: 0.35 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="col-span-7 sticky top-[120px] rounded-[2rem] overflow-hidden border border-slate-700/70 shadow-[0_24px_80px_rgba(15,23,42,0.4)] aspect-16/10 bg-slate-800/50"
      >
        <Image
          src={item.mainImage}
          alt={`Screenshot ${item.title}`}
          fill
          sizes="60vw"
          loading="lazy"
          className="object-cover"
        />
      </motion.div>

      {/* 5 Columns: Storytelling Content */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.35 }}
        transition={{ staggerChildren: 0.08, delayChildren: 0.08 }}
        className="col-span-5 flex flex-col pt-8 pb-16"
      >
        <motion.div variants={textVariants} transition={{ duration: 0.6 }}>
          <span className="inline-block rounded-full bg-blue-500/10 border border-blue-500/20 px-3 py-1 text-xs font-semibold text-blue-400">
            {item.category}
          </span>
        </motion.div>

        <motion.h2 variants={textVariants} transition={{ duration: 0.6 }} className="mt-4 font-heading text-4xl font-bold tracking-tight text-white">
          {item.title}
        </motion.h2>

        <motion.div variants={textVariants} transition={{ duration: 0.6 }} className="mt-8">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500">Challenge</h3>
          <p className="mt-2 text-base leading-relaxed text-slate-300">
            {item.challenge}
          </p>
        </motion.div>

        <motion.div variants={textVariants} transition={{ duration: 0.6 }} className="mt-8">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500">Solution</h3>
          <p className="mt-2 text-base leading-relaxed text-slate-300">
            {item.solution}
          </p>
        </motion.div>

        <motion.div variants={textVariants} transition={{ duration: 0.6 }} className="mt-8">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500">Result</h3>
          <p className="mt-2 text-base leading-relaxed text-slate-300">
            {item.results?.[0] || item.shortDescription}
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.35 }}
          transition={{ staggerChildren: 0.04 }}
          className="mt-8"
        >
          <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500 mb-3">Tech Stack</h3>
          <div className="flex flex-wrap gap-2">
            {item.techStack.map((tech) => (
              <motion.span key={tech} variants={badgeVariants} className="inline-flex items-center rounded-full bg-slate-800 px-3 py-1 text-xs font-medium text-slate-300 border border-slate-700">
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {item.gallery && item.gallery.length > 0 && (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.35 }}
            transition={{ staggerChildren: 0.05 }}
            className="mt-8"
          >
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500 mb-3">Proof</h3>
            <div className="flex gap-3 overflow-x-auto pb-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
              {item.gallery.slice(0, 3).map((img, idx) => (
                <motion.div key={idx} variants={proofVariants} className="relative aspect-video w-32 shrink-0 overflow-hidden rounded-xl bg-slate-800 border border-slate-700/50 transition-all hover:-translate-y-[2px] hover:scale-[1.02] hover:shadow-md cursor-pointer">
                  <Image src={img.src} alt={img.title} fill sizes="128px" className="object-cover" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        <motion.div variants={textVariants} transition={{ duration: 0.6 }} className="mt-10">
          <Link
            href={`/portfolio/${item.slug}`}
            className="inline-flex h-12 w-fit items-center justify-center gap-2 rounded-full bg-blue-600 px-8 text-sm font-semibold text-white shadow-md transition hover:bg-blue-500 hover:-translate-y-0.5"
          >
            <span>Lihat Detail Case Study</span>
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
