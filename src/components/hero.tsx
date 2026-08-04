import Link from 'next/link';
import { FaWhatsapp } from 'react-icons/fa';
import { WA_LINK } from '@/lib/constants';

const GIF_URL =
  'https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExMXN5aDNtempqeXUzMWRhZnNsbzdvYXZ5MjgxcjI3aWFscjRtejJveSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/d3MLdIYIHup9Q2xG/giphy.gif';

export function Hero() {
  return (
    <section aria-label="Hero" className="w-full bg-white">
      <div className="mx-auto flex min-h-[85vh] max-w-6xl flex-col justify-center px-4 py-16 sm:px-6 lg:py-24">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-x-16 lg:gap-y-8">
          <div className="flex flex-col items-center text-center lg:col-span-7 lg:col-start-1 lg:row-start-1 lg:items-start lg:text-left">
            <span className="inline-flex items-center rounded-full border border-border-light bg-surface px-3.5 py-1 text-xs font-semibold uppercase tracking-widest text-muted shadow-xs">
              Web Developer
            </span>

            <h1 className="mt-6 flex flex-col gap-3 font-heading">
              <span className="text-5xl font-extrabold leading-[0.9] tracking-tight text-text sm:text-6xl lg:text-7xl">
                DAMAR
              </span>
              <span className="text-2xl font-bold tracking-tight text-text sm:text-3xl lg:text-4xl">
                Jasa Pembuatan Website SEO untuk UMKM &amp; Bisnis Lokal
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              Membantu UMKM, lembaga kursus, dan bisnis lokal memiliki website
              yang modern, cepat, mobile-friendly, dan lebih mudah ditemukan di
              Google.
            </p>
          </div>

          <div className="w-full lg:col-span-5 lg:col-start-8 lg:row-span-2 lg:row-start-1 lg:self-center">
            <div className="flex w-full items-center justify-center overflow-hidden rounded-[2rem]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={GIF_URL}
                alt="Damar coding and web development animation"
                className="h-auto w-full max-w-full object-contain"
              />
            </div>
          </div>

          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center sm:justify-center lg:col-span-7 lg:col-start-1 lg:row-start-2 lg:justify-start">
            <Link
              href="#work"
              className="inline-flex h-12 w-full items-center justify-center rounded-full border border-border-light bg-surface px-7 text-sm font-semibold text-text transition hover:border-black/10 hover:bg-black/5 sm:w-auto"
            >
              Lihat Karya
            </Link>

            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-green-500 px-8 text-sm font-medium text-white shadow-sm transition hover:bg-green-600 sm:w-auto"
            >
              <FaWhatsapp className="text-base" />
              <span>Contact via Whatsapp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
