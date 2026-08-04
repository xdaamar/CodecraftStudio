'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaWhatsapp } from 'react-icons/fa';
import {
  SiHtml5,
  SiCss,
  SiNextdotjs,
  SiMysql,
  SiNodedotjs,
} from 'react-icons/si';
import { HERO_SERVICES_WORDS, SEO_CITIES, WA_LINK } from '@/lib/constants';

const GIF_URL =
  'https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExMXN5aDNtempqeXUzMWRhZnNsbzdvYXZ5MjgxcjI3aWFscjRtejJveSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/d3MLdIYIHup9Q2xG/giphy.gif';

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

export function Hero() {
  return (
    <section aria-label="Hero" className="w-full bg-white">
      <div className="mx-auto flex min-h-[85vh] max-w-6xl flex-col justify-center px-4 py-16 sm:px-6 lg:py-24">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-x-16 lg:gap-y-8">
          <div className="flex flex-col items-center text-center lg:col-span-7 lg:col-start-1 lg:row-start-1 lg:items-start lg:text-left">
            <span className="inline-flex items-center rounded-full border border-border-light bg-surface px-3.5 py-1 text-xs font-semibold uppercase tracking-widest text-muted shadow-xs">
              Software House • Web Development • SEO Agency
            </span>

            <h1 className="mt-6 flex flex-col gap-3 font-heading">
              <span className="min-h-[2.2em] text-3xl font-extrabold tracking-tight sm:min-h-[1.5em] sm:text-5xl lg:text-6xl">
                <Typewriter
                  words={HERO_SERVICES_WORDS}
                  colors={SERVICE_COLORS}
                />
              </span>
              <span className="text-2xl font-bold tracking-tight text-text sm:text-3xl lg:text-4xl">
                Code Craft Studio membantu bisnis tampil profesional melalui
                website modern, aplikasi, dan optimasi SEO yang siap bersaing di
                Google.
              </span>
            </h1>

            <div className="mt-4 flex items-center gap-1.5 text-base font-semibold text-muted sm:text-lg lg:text-xl">
              <span>Melayani bisnis di </span>
              <Typewriter
                words={SEO_CITIES}
                colors={CITY_COLORS}
                className="font-bold"
                cursorColor="text-emerald-600"
              />
            </div>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              Kami membantu UMKM, perusahaan, lembaga pendidikan, dan startup
              membangun website cepat, mobile-friendly, SEO-ready, dan mudah
              dikembangkan untuk kebutuhan bisnis jangka panjang.
            </p>
          </div>

          <div className="w-full lg:col-span-5 lg:col-start-8 lg:row-span-2 lg:row-start-1 lg:self-center">
            <div className="relative flex w-full items-center justify-center py-6">
              <div className="flex w-full items-center justify-center overflow-hidden rounded-[2rem]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={GIF_URL}
                  alt="Code Craft Studio software development animation"
                  className="h-auto w-full max-w-full object-contain"
                />
              </div>

              {/* Floating Tech Badges (5 items surrounding GIF with motion) */}
              <div className="animate-float absolute -top-3 left-4 z-10 inline-flex items-center gap-1.5 rounded-2xl border border-black/5 bg-white px-3.5 py-1.5 text-xs font-semibold text-text shadow-md">
                <SiHtml5 className="h-4 w-4 text-[#E34F26]" />
                <span>HTML5</span>
              </div>

              <div className="animate-float-delayed absolute -bottom-3 right-4 z-10 inline-flex items-center gap-1.5 rounded-2xl border border-black/5 bg-white px-3.5 py-1.5 text-xs font-semibold text-text shadow-md">
                <SiCss className="h-4 w-4 text-[#1572B6]" />
                <span>CSS3</span>
              </div>

              <div className="animate-float-reverse absolute -top-3 right-4 z-10 inline-flex items-center gap-1.5 rounded-2xl border border-black/5 bg-white px-3.5 py-1.5 text-xs font-semibold text-text shadow-md">
                <SiNextdotjs className="h-4 w-4 text-slate-900" />
                <span>Next.js</span>
              </div>

              <div className="animate-float absolute -bottom-3 left-4 z-10 inline-flex items-center gap-1.5 rounded-2xl border border-black/5 bg-white px-3.5 py-1.5 text-xs font-semibold text-text shadow-md">
                <SiNodedotjs className="h-4 w-4 text-[#5FA04E]" />
                <span>Node.js</span>
              </div>

              <div className="animate-float-delayed absolute top-1/2 -right-4 z-10 hidden -translate-y-1/2 items-center gap-1.5 rounded-2xl border border-black/5 bg-white px-3.5 py-1.5 text-xs font-semibold text-text shadow-md sm:inline-flex">
                <SiMysql className="h-4 w-4 text-[#4479A1]" />
                <span>MySQL</span>
              </div>
            </div>
          </div>

          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center sm:justify-center lg:col-span-7 lg:col-start-1 lg:row-start-2 lg:justify-start">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-green-500 px-8 text-sm font-medium text-white shadow-sm transition hover:bg-green-600 sm:w-auto"
            >
              <FaWhatsapp className="text-base" />
              <span>Contact via Whatsapp</span>
            </a>

            <Link
              href="#services"
              className="inline-flex h-12 w-full items-center justify-center rounded-full bg-slate-900 px-7 text-sm font-semibold text-white shadow-md transition hover:bg-slate-800 sm:w-auto"
            >
              Lihat Layanan Kami
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
