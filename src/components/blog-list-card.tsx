import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Calendar } from 'lucide-react';
import type { BlogPost } from '@/content/blog/_template';

export function BlogListCard({ post }: { post: BlogPost }) {
  // Format date to Indonesian locale
  const formattedDate = new Date(post.date).toLocaleDateString('id-ID', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <article className="group flex flex-col gap-6 rounded-[2rem] border border-slate-200/60 bg-white p-4 shadow-sm transition-all duration-300 hover:border-blue-200 hover:shadow-md sm:flex-row sm:p-6 lg:gap-8 lg:p-8">
      {/* Thumbnail */}
      <Link
        href={`/blog/${post.slug}`}
        className="relative aspect-video w-full shrink-0 overflow-hidden rounded-[1.5rem] bg-slate-100 sm:w-64 lg:w-80"
      >
        <Image
          src={post.cover}
          alt={post.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 256px, 320px"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </Link>

      {/* Content */}
      <div className="flex flex-1 flex-col justify-center">
        <div className="flex items-center gap-4 text-xs font-medium text-slate-500 sm:text-sm">
          <span className="flex items-center gap-1.5">
            <Calendar className="h-4 w-4" />
            {formattedDate}
          </span>
        </div>

        <Link href={`/blog/${post.slug}`} className="mt-4 inline-block w-fit">
          <h3 className="font-heading text-xl font-bold tracking-tight text-slate-900 transition-colors group-hover:text-blue-600 sm:text-2xl lg:text-3xl">
            {post.title}
          </h3>
        </Link>

        <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-slate-600 sm:mt-4 sm:text-base">
          {post.description}
        </p>

        <div className="mt-6 sm:mt-auto sm:pt-6">
          <Link
            href={`/blog/${post.slug}`}
            className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 transition-colors group-hover:text-blue-700"
          >
            <span>Baca Selengkapnya</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </article>
  );
}
