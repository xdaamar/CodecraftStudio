import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, ExternalLink, ArrowLeft, CheckCircle2 } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { getAllProjects, getProjectBySlug } from '@/lib/portfolio';
import { WA_LINK } from '@/lib/constants';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const projects = getAllProjects();
  return projects.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: 'Project Tidak Ditemukan | Code Craft Studio',
    };
  }

  return {
    title: `${project.title} - Studi Kasus | Code Craft Studio Indonesia`,
    description: project.shortDescription,
  };
}

export default async function PortfolioDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="w-full bg-surface py-12 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        {/* 1. Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-sm text-muted">
          <Link href="/" className="transition hover:text-accent">
            Home
          </Link>
          <ChevronRight className="h-4 w-4" />
          <Link href="/portfolio" className="transition hover:text-accent">
            Portfolio
          </Link>
          <ChevronRight className="h-4 w-4" />
          <span className="font-medium text-text">{project.title}</span>
        </nav>

        {/* 2. Hero Detail */}
        <header className="rounded-[2rem] border border-black/5 bg-white p-6 sm:p-10 lg:p-12 shadow-2xs">
          <span className="inline-flex items-center rounded-full bg-slate-100 px-3.5 py-1 text-xs font-semibold text-accent">
            {project.category}
          </span>

          <h1 className="mt-4 font-heading text-3xl font-extrabold tracking-tight text-text sm:text-4xl lg:text-5xl">
            {project.title}
          </h1>

          <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted sm:text-lg">
            {project.shortDescription}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href={project.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-green-500 px-7 text-sm font-semibold text-white shadow-sm transition hover:bg-green-600"
            >
              <span>Kunjungi Website</span>
              <ExternalLink className="h-4 w-4" />
            </a>

            <Link
              href="/portfolio"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-border-light bg-surface px-6 text-sm font-semibold text-text transition hover:bg-slate-100"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Kembali ke Portfolio</span>
            </Link>
          </div>

          {/* Screenshot Hero Besar */}
          <div className="mt-10 overflow-hidden rounded-2xl border border-black/5 bg-slate-50 shadow-sm">
            <div className="relative aspect-16/10 w-full">
              <Image
                src={project.mainImage}
                alt={`Screenshot Utama ${project.title}`}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 1024px"
                className="object-cover"
              />
            </div>
          </div>
        </header>

        {/* Content Structure */}
        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
          {/* Main Left / Top Column */}
          <div className="space-y-12 lg:col-span-8">
            {/* 1. Tantangan Project */}
            <section className="rounded-[2rem] border border-black/5 bg-white p-6 sm:p-8 shadow-2xs">
              <h2 className="font-heading text-2xl font-bold tracking-tight text-text sm:text-3xl">
                1. Tantangan Project
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
                {project.challenge}
              </p>
            </section>

            {/* 2. Solusi yang Dibangun */}
            <section className="rounded-[2rem] border border-black/5 bg-white p-6 sm:p-8 shadow-2xs">
              <h2 className="font-heading text-2xl font-bold tracking-tight text-text sm:text-3xl">
                2. Solusi yang Dibangun
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
                {project.solution}
              </p>
            </section>

            {/* 5. Galeri & Bukti Optimasi */}
            <section className="rounded-[2rem] border border-black/5 bg-white p-6 sm:p-8 shadow-2xs">
              <h2 className="font-heading text-2xl font-bold tracking-tight text-text sm:text-3xl">
                5. Galeri & Bukti Optimasi
              </h2>
              <p className="mt-2 text-sm text-muted sm:text-base">
                Bukti dokumentasi pengujian performa, SEO, dan tampilan responsif dari{' '}
                <span className="font-semibold text-text">{project.title}</span>.
              </p>

              <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
                {project.gallery.map((img) => (
                  <div
                    key={img.title}
                    className="overflow-hidden rounded-2xl border border-black/5 bg-slate-50 shadow-2xs"
                  >
                    <div className="relative aspect-16/10 w-full bg-slate-100">
                      <Image
                        src={img.src}
                        alt={img.title}
                        fill
                        sizes="(max-width: 640px) 100vw, 500px"
                        className="object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-heading text-base font-bold text-text">
                        {img.title}
                      </h3>
                      <p className="mt-1 text-xs text-muted">
                        {img.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Sidebar Column */}
          <div className="space-y-8 lg:col-span-4">
            {/* 3. Fitur Utama */}
            <div className="rounded-[2rem] border border-black/5 bg-white p-6 shadow-2xs">
              <h3 className="font-heading text-xl font-bold tracking-tight text-text">
                3. Fitur Utama
              </h3>
              <ul className="mt-4 space-y-3">
                {project.keyFeatures.map((feat) => (
                  <li key={feat} className="flex items-start gap-2.5 text-sm text-muted">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-500" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 4. Teknologi yang Digunakan */}
            <div className="rounded-[2rem] border border-black/5 bg-white p-6 shadow-2xs">
              <h3 className="font-heading text-xl font-bold tracking-tight text-text">
                4. Teknologi yang Digunakan
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex rounded-full border border-border-light bg-slate-50 px-3.5 py-1.5 text-xs font-semibold text-text"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* 6. Hasil yang Dicapai */}
            <div className="rounded-[2rem] border border-black/5 bg-white p-6 shadow-2xs">
              <h3 className="font-heading text-xl font-bold tracking-tight text-text">
                6. Hasil yang Dicapai
              </h3>
              <ul className="mt-4 space-y-3">
                {project.results.map((res) => (
                  <li
                    key={res}
                    className="text-sm font-medium text-green-700"
                  >
                    {res}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 rounded-[2rem] border border-black/5 bg-white p-8 text-center shadow-sm sm:p-12">
          <h2 className="font-heading text-2xl font-bold tracking-tight text-text sm:text-3xl">
            Ingin membangun website sekelas {project.title}?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-base text-muted">
            Konsultasikan ide bisnis Anda secara langsung dengan tim Code Craft Studio. Free
            konsultasi 100%!
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
