import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { getAllProjects } from '@/lib/portfolio';
import { PortfolioPreviewCard } from '@/components/portfolio-preview-card';

export function PortfolioSection() {
  const projects = getAllProjects();

  return (
    <section
      id="work"
      aria-label="Portofolio Pilihan"
      className="w-full overflow-hidden bg-white py-16 lg:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col items-center text-center">
          <span className="inline-flex items-center rounded-full border border-border-light bg-surface px-3.5 py-1 text-xs font-semibold uppercase tracking-widest text-muted shadow-2xs">
            Portofolio Pilihan
          </span>
          <h2 className="mt-4 max-w-3xl font-heading text-3xl font-bold tracking-tight text-text sm:text-4xl lg:text-5xl">
            Studi kasus & project nyata dari Code Craft Studio.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            Geser ke kanan atau kiri untuk melihat showcase website profesional,
            aplikasi SaaS, dan sistem custom yang siap bersaing di Google.
          </p>
        </div>

        {/* Horizontal scroll / snap carousel */}
        <div className="mt-12 -mx-4 flex overflow-x-auto snap-x snap-mandatory gap-6 px-4 pb-6 pt-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden sm:-mx-6 sm:px-6">
          {projects.map((project) => (
            <PortfolioPreviewCard key={project.slug} item={project} />
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <Link
            href="/portfolio"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-border-light bg-surface px-8 text-sm font-semibold text-text shadow-sm transition hover:bg-slate-100"
          >
            <span>Lihat Semua Portfolio</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
