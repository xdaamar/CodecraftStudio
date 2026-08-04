import type { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { getAllProjects } from '@/lib/portfolio';
import { PortfolioPreviewCard } from '@/components/portfolio-preview-card';
import { WA_LINK } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Portfolio & Studi Kasus | Code Craft Studio Indonesia',
  description:
    'Jelajahi portofolio lengkap pengembangan website modern, aplikasi web SaaS, dan sistem custom yang dioptimalkan untuk SEO Google dan kecepatan maksimal.',
};

export default function PortfolioIndexPage() {
  const projects = getAllProjects();

  return (
    <main className="w-full bg-surface py-12 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-sm text-muted">
          <Link href="/" className="transition hover:text-accent">
            Home
          </Link>
          <ChevronRight className="h-4 w-4" />
          <span className="font-medium text-text">Portfolio</span>
        </nav>

        {/* Header */}
        <div className="max-w-3xl">
          <span className="inline-flex items-center rounded-full border border-border-light bg-white px-3.5 py-1 text-xs font-semibold uppercase tracking-widest text-accent shadow-2xs">
            Showcase Karya
          </span>
          <h1 className="mt-4 font-heading text-3xl font-extrabold tracking-tight text-text sm:text-4xl lg:text-5xl">
            Studi Kasus & Portfolio Lengkap Code Craft Studio.
          </h1>
          <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
            Berikut adalah dokumentasi lengkap dari proyek, website bisnis, dan platform digital
            yang kami rancang untuk mendorong pertumbuhan klien kami.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div key={project.slug} className="flex justify-center">
              <PortfolioPreviewCard item={project} />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 rounded-[2rem] border border-black/5 bg-white p-8 text-center shadow-sm sm:p-12">
          <h2 className="font-heading text-2xl font-bold tracking-tight text-text sm:text-3xl">
            Punya ide website atau aplikasi untuk bisnis Anda?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-base text-muted">
            Konsultasikan kebutuhan teknis, desain, dan estimasi pengerjaan secara gratis bersama
            tim Code Craft Studio.
          </p>
          <div className="mt-6 flex justify-center">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-green-500 px-8 text-sm font-semibold text-white shadow-sm transition hover:bg-green-600"
            >
              <FaWhatsapp className="text-base" />
              <span>Contact via Whatsapp</span>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
