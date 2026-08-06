'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaWhatsapp } from 'react-icons/fa';
import {
  SiHtml5,
  SiNextdotjs,
  SiMysql,
} from 'react-icons/si';
import { motion, useReducedMotion } from 'framer-motion';
import { HERO_SERVICES_WORDS, SEO_CITIES, WA_LINK } from '@/lib/constants';

const GIF_URL =
  'https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExMXN5aDNtempqeXUzMWRhZnNsbzdvYXZ5MjgxcjI3aWFscjRtejJveSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/d3MLdIYIHup9Q2xG/giphy.gif';

const MOBILE_VIDEO_SRC = '/videos/herosection_mobileview.webm';

const SERVICE_COLORS = [
  'text-blue-600',
  'text-emerald-600',
  'text-indigo-600',
  'text-violet-600',
  'text-cyan-600',
  'text-amber-600',
];

const CITY_COLORS = [
  'text-blue-600',
  'text-emerald-600',
  'text-purple-600',
  'text-teal-600',
  'text-indigo-600',
  'text-sky-600',
  'text-green-600',
  'text-violet-600',
];

function Typewriter({
  words,
  colors,
  className = '',
  cursorColor = 'text-accent',
}: {
  words: string[];
  colors?: string[];
  className?: string;
  cursorColor?: string;
}) {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const initTimer = setTimeout(() => {
      setMounted(true);
    }, 0);
    return () => clearTimeout(initTimer);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const currentWord = words[wordIndex];
    let timer: NodeJS.Timeout;

    if (!isDeleting && text === currentWord) {
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, 1500);
    } else if (isDeleting && text === '') {
      timer = setTimeout(() => {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }, 50);
    } else {
      const speed = isDeleting ? 35 : 65;
      timer = setTimeout(() => {
        setText(
          isDeleting
            ? currentWord.substring(0, text.length - 1)
            : currentWord.substring(0, text.length + 1)
        );
      }, speed);
    }

    return () => clearTimeout(timer);
  }, [text, isDeleting, wordIndex, words, mounted]);

  const currentColor = colors ? colors[wordIndex % colors.length] : '';

  if (!mounted) {
    return (
      <span className={`${className} ${currentColor}`}>
        <span>{words[0]}</span>
      </span>
    );
  }

  return (
    <span className={`${className} ${currentColor}`}>
      {text}
      <span className={`inline-block animate-pulse font-light ${cursorColor}`}>
        |
      </span>
    </span>
  );
}

const VIEWPORT = { amount: 0.35 };

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  // Floating stack icon animation
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const floatTransition: any = shouldReduceMotion
    ? undefined
    : { duration: 4, repeat: Infinity, ease: 'easeInOut' };
  const floatAnim = shouldReduceMotion ? undefined : { y: [0, -6, 0] };

  return (
    <section id="hero" aria-label="Hero" className="w-full bg-white relative">
      {/* ─── MOBILE LAYOUT (< lg) ───────────────────────────────────────────── */}
      <div className="flex flex-col pb-10 pt-0 lg:hidden">
        {/* 0. Eyebrow */}
        <div className="px-4 pb-3 pt-6">
          <motion.span
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={VIEWPORT}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center rounded-full border border-border-light bg-surface px-3 py-1 text-xs font-semibold uppercase tracking-widest text-muted shadow-xs"
          >
            WEB DEVELOPMENT • APPS DEVELOPMENT
          </motion.span>
        </div>

        {/* 1. Mobile Video Hero */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative aspect-square w-full overflow-hidden"
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster="/images/mobile-hero-poster.webp"
            className="absolute inset-0 h-full w-full object-cover"
          >
            <source src={MOBILE_VIDEO_SRC} type="video/webm" />
            {/* TODO: tambahkan /public/videos/mobile_herosection.mp4 sebagai fallback untuk legacy iOS */}
            <source src="/videos/mobile_herosection.mp4" type="video/mp4" />
          </video>
        </motion.div>

        {/* 2. Mobile Text Content */}
        <div className="mt-6 flex flex-col items-start px-4 text-left">
          {/* Typewriter Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT}
            transition={{ delay: 0.08, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="min-h-[2em] font-heading text-4xl font-extrabold tracking-tight"
          >
            <h1>
              <Typewriter words={HERO_SERVICES_WORDS} colors={SERVICE_COLORS} />
            </h1>
          </motion.div>

          {/* Mobile Subheadline */}
          <motion.div
            initial={{ opacity: 0, y: 24, filter: 'blur(4px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={VIEWPORT}
            transition={{ delay: 0.16, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="mt-4 max-w-sm"
          >
            <p className="font-playwrite text-sm leading-relaxed text-muted">
              Website modern, SEO profesional, dan aplikasi mobile untuk membantu
              bisnis Anda tampil lebih dipercaya di Google.
            </p>
          </motion.div>

          {/* SEO Cities */}
          <motion.div
            initial={{ opacity: 0, y: 24, filter: 'blur(4px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={VIEWPORT}
            transition={{ delay: 0.24, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="mt-3 flex items-center gap-1.5 text-base font-semibold text-muted">
              <span>Melayani bisnis di </span>
              <Typewriter
                words={SEO_CITIES}
                colors={CITY_COLORS}
                className="font-bold"
                cursorColor="text-emerald-600"
              />
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <div className="mt-6 flex w-full flex-col gap-3">
            <motion.a
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEWPORT}
              transition={{ delay: 0.08, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-green-500 px-6 text-sm font-medium text-white shadow-sm transition hover:bg-green-600 active:scale-[0.98]"
            >
              <FaWhatsapp className="text-base" />
              <span>Contact via Whatsapp</span>
            </motion.a>
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEWPORT}
              transition={{ delay: 0.16, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="w-full"
            >
              <Link
                href="#services"
                className="inline-flex h-12 w-full items-center justify-center rounded-full bg-slate-900 px-6 text-sm font-semibold text-white shadow-md transition hover:bg-slate-800 active:scale-[0.98]"
              >
                Lihat Layanan Kami
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ─── DESKTOP LAYOUT (≥ lg) ─────────────────────────── */}
      <div className="mx-auto hidden min-h-[85vh] max-w-6xl flex-col justify-center px-4 py-16 sm:px-6 lg:flex lg:py-24">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-x-16 lg:gap-y-8">
          <div className="flex flex-col items-center text-center lg:col-span-7 lg:col-start-1 lg:row-start-1 lg:items-start lg:text-left">
            <motion.span
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={VIEWPORT}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center rounded-full border border-border-light bg-surface px-3.5 py-1 text-xs font-semibold uppercase tracking-widest text-muted shadow-xs"
            >
              WEB DEVELOPMENT • APPS DEVELOPMENT
            </motion.span>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEWPORT}
              transition={{ delay: 0.08, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 min-h-[2.2em] font-heading text-3xl font-extrabold tracking-tight sm:min-h-[1.5em] sm:text-5xl lg:text-6xl"
            >
              <h1>
                <Typewriter words={HERO_SERVICES_WORDS} colors={SERVICE_COLORS} />
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24, filter: 'blur(4px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={VIEWPORT}
              transition={{ delay: 0.16, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="mt-4 max-w-xl"
            >
              <p className="font-playwrite text-base leading-relaxed text-muted sm:text-lg">
                Kami membantu UMKM, perusahaan, lembaga pendidikan, dan startup
                membangun website cepat, mobile-friendly, SEO-ready, dan mudah
                dikembangkan untuk kebutuhan bisnis jangka panjang.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24, filter: 'blur(4px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={VIEWPORT}
              transition={{ delay: 0.24, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="mt-4 flex items-center gap-1.5 text-base font-semibold text-muted sm:text-lg lg:text-xl">
                <span>Melayani bisnis di </span>
                <Typewriter
                  words={SEO_CITIES}
                  colors={CITY_COLORS}
                  className="font-bold"
                  cursorColor="text-emerald-600"
                />
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={VIEWPORT}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="w-full lg:col-span-5 lg:col-start-8 lg:row-span-2 lg:row-start-1 lg:self-center"
          >
            <div className="relative flex w-full items-center justify-center py-6">
              <div className="relative z-10 flex w-full items-center justify-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={GIF_URL}
                  alt="Code Craft Studio software development animation"
                  className="h-auto w-full max-w-full object-contain"
                />
              </div>

              {/* Floating Tech Badges (Desktop Only enhancements) */}
              <motion.div
                animate={floatAnim}
                transition={floatTransition}
                className="absolute top-4 left-4 z-20 hidden lg:inline-flex items-center gap-1.5 rounded-2xl border border-black/5 bg-white/90 backdrop-blur-sm px-3.5 py-1.5 text-xs font-semibold text-text shadow-md"
              >
                <SiHtml5 className="h-4 w-4 text-[#E34F26]" />
                <span>HTML5</span>
              </motion.div>

              <motion.div
                animate={floatAnim}
                transition={{ ...floatTransition, delay: 0.5 }}
                className="absolute top-4 right-4 z-20 hidden lg:inline-flex items-center gap-1.5 rounded-2xl border border-black/5 bg-white/90 backdrop-blur-sm px-3.5 py-1.5 text-xs font-semibold text-text shadow-md"
              >
                <SiNextdotjs className="h-4 w-4 text-slate-900" />
                <span>Next.js</span>
              </motion.div>

              <motion.div
                animate={floatAnim}
                transition={{ ...floatTransition, delay: 1 }}
                className="absolute bottom-16 right-0 z-20 hidden lg:inline-flex items-center gap-1.5 rounded-2xl border border-black/5 bg-white/90 backdrop-blur-sm px-3.5 py-1.5 text-xs font-semibold text-text shadow-md"
              >
                <span className="h-4 w-4 rounded-sm bg-blue-600 text-[8px] font-bold text-white flex justify-center items-center">TS</span>
                <span>TypeScript</span>
              </motion.div>

              <motion.div
                animate={floatAnim}
                transition={{ ...floatTransition, delay: 1.5 }}
                className="absolute bottom-6 left-4 z-20 hidden lg:inline-flex items-center gap-1.5 rounded-2xl border border-black/5 bg-white/90 backdrop-blur-sm px-3.5 py-1.5 text-xs font-semibold text-text shadow-md"
              >
                <svg className="h-4 w-4 text-cyan-400" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14.314 0L2.3 12 6 15.7 21.684.001h-7.37zm.014 11.072L7.857 17.53l3.67 3.67 6.47-6.46-3.67-3.668zM24 17.53l-2.457-2.456-3.67 3.668 2.457 2.456L24 17.53z" />
                </svg>
                <span>Flutter</span>
              </motion.div>

              <motion.div
                animate={floatAnim}
                transition={{ ...floatTransition, delay: 0.2 }}
                className="absolute top-1/2 -right-4 z-20 hidden lg:inline-flex -translate-y-1/2 items-center gap-1.5 rounded-2xl border border-black/5 bg-white/90 backdrop-blur-sm px-3.5 py-1.5 text-xs font-semibold text-text shadow-md"
              >
                <SiMysql className="h-4 w-4 text-[#4479A1]" />
                <span>MySQL</span>
              </motion.div>
            </div>
          </motion.div>

          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center sm:justify-center lg:col-span-7 lg:col-start-1 lg:row-start-2 lg:justify-start">
            <motion.a
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEWPORT}
              transition={{ delay: 0.08, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-green-500 px-8 text-sm font-medium text-white shadow-sm transition hover:bg-green-600 sm:w-auto"
            >
              <FaWhatsapp className="text-base" />
              <span>Contact via Whatsapp</span>
            </motion.a>

            <motion.div
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEWPORT}
              transition={{ delay: 0.16, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link
                href="#services"
                className="inline-flex h-12 w-full items-center justify-center rounded-full bg-slate-900 px-7 text-sm font-semibold text-white shadow-md transition hover:bg-slate-800 sm:w-auto"
              >
                Lihat Layanan Kami
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
