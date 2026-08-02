import Image from 'next/image';
import { type PortfolioItem } from '@/lib/constants';

type PortfolioCardProps = {
  item: PortfolioItem;
};

export function PortfolioCard({ item }: PortfolioCardProps) {
  return (
    <article className="flex flex-col rounded-[2rem] border border-black/5 bg-white p-6 shadow-xs transition duration-300 hover:shadow-md lg:grid lg:grid-cols-12 lg:items-center lg:gap-12 lg:p-8">
      <div className="overflow-hidden rounded-[1.5rem] border border-black/5 bg-slate-50 lg:col-span-7">
        <div className="group relative aspect-16/10 w-full overflow-hidden bg-black/5">
          <Image
            src={item.image}
            alt={`${item.title} preview screenshot`}
            width={1200}
            height={750}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.02]"
          />
        </div>
      </div>

      <div className="mt-6 flex flex-col lg:col-span-5 lg:mt-0">
        <h3 className="font-heading text-2xl font-bold tracking-tight text-text sm:text-3xl">
          {item.title}
        </h3>

        <span className="mt-1.5 text-xs font-semibold uppercase tracking-wider text-accent sm:text-sm">
          {item.category}
        </span>

        <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
          {item.description}
        </p>

        {item.proofs.length > 0 && (
          <div className="mt-6 grid grid-cols-3 gap-3 sm:gap-4">
            {item.proofs.map((proof) => (
              <div key={proof.label} className="flex flex-col items-center">
                <div className="group relative aspect-video w-full overflow-hidden rounded-xl border border-black/5 bg-slate-50 shadow-2xs transition duration-300 hover:scale-[1.02]">
                  <Image
                    src={proof.src}
                    alt={proof.alt}
                    width={400}
                    height={225}
                    className="h-full w-full object-cover"
                  />
                </div>
                <span className="mt-1.5 text-center text-[11px] font-medium text-muted">
                  {proof.label}
                </span>
              </div>
            ))}
          </div>
        )}

        <div className="mt-6 flex flex-wrap items-center gap-2">
          {item.techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-border-light bg-background px-3.5 py-1.5 text-xs font-semibold text-muted"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-8">
          <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center rounded-full bg-slate-900 px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-slate-800 sm:w-auto"
          >
            Kunjungi Situs
          </a>
        </div>
      </div>
    </article>
  );
}
