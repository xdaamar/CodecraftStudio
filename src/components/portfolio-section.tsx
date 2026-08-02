import { PORTFOLIO_ITEMS } from '@/lib/constants';
import { PortfolioCard } from '@/components/portfolio-card';

export function PortfolioSection() {
  return (
    <section
      id="work"
      aria-label="Portofolio Pilihan"
      className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:py-24"
    >
      <div className="flex flex-col items-center text-center">
        <span className="inline-flex items-center rounded-full border border-border-light bg-surface px-3.5 py-1 text-xs font-semibold uppercase tracking-widest text-muted shadow-xs">
          Portofolio Pilihan
        </span>
        <h2 className="mt-4 max-w-3xl font-heading text-3xl font-bold tracking-tight text-text sm:text-4xl lg:text-5xl">
          Project nyata yang saya bangun untuk bisnis, produk digital, dan
          layanan berbasis web.
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
          Fokus pada desain modern, performa tinggi, SEO-friendly, dan
          pengalaman pengguna yang nyaman di semua perangkat.
        </p>
      </div>

      <div className="mt-12 flex flex-col gap-12 lg:mt-16 lg:gap-16">
        {PORTFOLIO_ITEMS.map((item) => (
          <PortfolioCard key={item.title} item={item} />
        ))}
      </div>
    </section>
  );
}
