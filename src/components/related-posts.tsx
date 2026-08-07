import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { blogPosts } from '@/content/blog';

export function RelatedPosts({ currentSlug, category }: { currentSlug: string; category: string }) {
  // Get max 3 other posts in the same category, or just recent posts if not enough
  const related = blogPosts
    .filter((p) => p.slug !== currentSlug)
    .filter((p) => p.category === category)
    .slice(0, 3);

  // If we don't have related posts in the same category, just take other recent posts
  const displayPosts = related.length > 0
    ? related
    : blogPosts.filter(p => p.slug !== currentSlug).slice(0, 3);

  if (displayPosts.length === 0) {
    return (
      <div className="mt-16 rounded-3xl border border-slate-200/60 bg-slate-50 p-12 text-center">
        <p className="text-lg font-medium text-slate-500">
          Artikel terkait akan segera hadir.
        </p>
      </div>
    );
  }

  return (
    <div className="mt-16">
      <h3 className="font-heading text-2xl font-bold tracking-tight text-slate-900">
        Baca Juga
      </h3>
      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {displayPosts.map((post) => (
          <article
            key={post.slug}
            className="group flex flex-col justify-between rounded-[1.75rem] border border-slate-200/60 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-md"
          >
            <div>
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-slate-100">
                <Image
                  src={post.cover}
                  alt={post.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="mt-4">
                <span className="inline-block rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600">
                  {post.category}
                </span>
                <h4 className="mt-3 line-clamp-2 font-heading text-lg font-bold tracking-tight text-slate-900 transition-colors group-hover:text-blue-600">
                  {post.title}
                </h4>
              </div>
            </div>

            <div className="mt-6">
              <Link
                href={`/blog/${post.slug}`}
                className="inline-flex w-full items-center justify-center gap-1.5 rounded-full bg-slate-50 px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
              >
                <span>Baca Artikel</span>
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
