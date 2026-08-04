import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { type PortfolioItem } from '@/lib/portfolio';

export function PortfolioPreviewCard({ item }: { item: PortfolioItem }) {
  return (
    <article className="flex w-[290px] shrink-0 snap-start flex-col justify-between rounded-[1.75rem] border border-black/5 bg-white p-4 shadow-2xs transition duration-300 hover:shadow-md sm:w-[350px]">
      <div>
        <div className="relative aspect-16/10 w-full overflow-hidden rounded-2xl bg-slate-100">
          <Image
            src={item.mainImage}
            alt={`Screenshot ${item.title}`}
            fill
            sizes="(max-width: 640px) 290px, 350px"
            className="object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>

        <div className="mt-4">
          <span className="inline-block rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-accent">
            {item.category}
          </span>
          <h3 className="mt-2 font-heading text-xl font-bold tracking-tight text-text">
            {item.title}
          </h3>
          <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-muted">
            {item.shortDescription}
          </p>
        </div>
      </div>

      <div className="mt-6">
        <Link
          href={`/portfolio/${item.slug}`}
          className="inline-flex h-11 w-full items-center justify-center gap-1.5 rounded-full bg-slate-900 px-5 text-sm font-semibold text-white shadow-xs transition hover:bg-slate-800"
        >
          <span>Lihat Detail</span>
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </article>
  );
}
