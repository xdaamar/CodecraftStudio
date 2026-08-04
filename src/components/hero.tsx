'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaWhatsapp } from 'react-icons/fa';
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiMysql,
  SiNodedotjs,
  SiFlutter,
} from 'react-icons/si';
import { HERO_SERVICES_WORDS, SEO_CITIES, WA_LINK } from '@/lib/constants';

const GIF_URL =
  'https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExMXN5aDNtempqeXUzMWRhZnNsbzdvYXZ5MjgxcjI3aWFscjRtejJveSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/d3MLdIYIHup9Q2xG/giphy.gif';

function Typewriter({
  words,
  className = '',
  cursorColor = 'text-accent',
}: {
  words: string[];
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

  if (!mounted) {
    return (
      <span className={className}>
        <span>{words[0]}</span>
      </span>
    );
  }

  return (
    <span className={className}>
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
              <span className="min-h-[2.2em] text-3xl font-extrabold tracking-tight text-text sm:min-h-[1.5em] sm:text-5xl lg:text-6xl">
                <Typewriter words={HERO_SERVICES_WORDS} />
              </span>
              <span className="text-2xl font-bold tracking-tight text-text sm:text-3xl lg:text-4xl">
                Code Craft Studio membantu bisnis tampil profesional melalui{' '}
                <span className="text-blue-600">website modern</span>,{' '}
                <span className="text-emerald-600">aplikasi</span>, dan{' '}
                <span className="text-blue-600">optimasi SEO</span> yang siap
                bersaing di Google.
              </span>
            </h1>

            <div className="mt-4 flex items-center gap-1.5 text-base font-semibold text-muted sm:text-lg lg:text-xl">
              <span>Melayani bisnis di </span>
              <Typewriter
                words={SEO_CITIES}
                className="font-bold text-blue-600"
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

              {/* Floating Tech Badges */}
              <div className="absolute -top-2 left-2 z-10 inline-flex items-center gap-1.5 rounded-2xl border border-black/5 bg-white px-3 py-1.5 text-xs font-semibold text-text shadow-sm sm:-top-4 sm:left-4">
                <SiHtml5 className="h-4 w-4 text-[#E34F26]" />
                <span>HTML5</span>
              </div>

              <div className="absolute -bottom-2 right-2 z-10 inline-flex items-center gap-1.5 rounded-2xl border border-black/5 bg-white px-3 py-1.5 text-xs font-semibold text-text shadow-sm sm:-bottom-4 sm:right-4">
                <SiCss className="h-4 w-4 text-[#1572B6]" />
                <span>CSS3</span>
              </div>

              <div className="absolute -bottom-2 left-2 z-10 inline-flex items-center gap-1.5 rounded-2xl border border-black/5 bg-white px-3 py-1.5 text-xs font-semibold text-text shadow-sm sm:-bottom-4 sm:left-6">
                <SiJavascript className="h-4 w-4 text-[#F7DF1E]" />
                <span>JavaScript</span>
              </div>

              <div className="absolute -top-2 right-2 z-10 inline-flex items-center gap-1.5 rounded-2xl border border-black/5 bg-white px-3 py-1.5 text-xs font-semibold text-text shadow-sm sm:-top-4 sm:right-6">
                <SiTypescript className="h-4 w-4 text-[#3178C6]" />
                <span>TypeScript</span>
              </div>

              <div className="absolute top-1/4 -left-4 z-10 hidden items-center gap-1.5 rounded-2xl border border-black/5 bg-white px-3 py-1.5 text-xs font-semibold text-text shadow-sm sm:inline-flex">
                <SiNextdotjs className="h-4 w-4 text-slate-900" />
                <span>Next.js</span>
              </div>

              <div className="absolute top-1/4 -right-4 z-10 hidden items-center gap-1.5 rounded-2xl border border-black/5 bg-white px-3 py-1.5 text-xs font-semibold text-text shadow-sm sm:inline-flex">
                <SiMysql className="h-4 w-4 text-[#4479A1]" />
                <span>MySQL</span>
              </div>

              <div className="absolute bottom-1/4 -left-4 z-10 hidden items-center gap-1.5 rounded-2xl border border-black/5 bg-white px-3 py-1.5 text-xs font-semibold text-text shadow-sm sm:inline-flex">
                <SiNodedotjs className="h-4 w-4 text-[#5FA04E]" />
                <span>Node.js</span>
              </div>

              <div className="absolute bottom-1/4 -right-4 z-10 hidden items-center gap-1.5 rounded-2xl border border-black/5 bg-white px-3 py-1.5 text-xs font-semibold text-text shadow-sm sm:inline-flex">
                <SiFlutter className="h-4 w-4 text-[#02569B]" />
                <span>Flutter</span>
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
              className="inline-flex h-12 w-full items-center justify-center rounded-full border border-border-light bg-surface px-7 text-sm font-semibold text-text transition hover:border-black/10 hover:bg-black/5 sm:w-auto"
            >
              Lihat Layanan Kami
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
