import type { Metadata } from 'next';
import { Footer } from '@/components/footer';
import { BlogListCard } from '@/components/blog-list-card';
import { blogPosts } from '@/content/blog';

export const metadata: Metadata = {
  title: 'Blog Code Craft Studio — Tips Website & SEO Lokal Jawa Tengah',
  description: 'Temukan tips dan strategi seputar website UMKM, desain aplikasi, dan optimasi SEO lokal untuk meningkatkan performa bisnis di Sukoharjo, Surakarta, Solo Raya, hingga Jawa Tengah.',
};

export default function BlogIndexPage() {
  return (
    <>
      <main className="min-h-screen bg-slate-50 pt-16">
        <section className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 lg:py-16">
          <div className="mb-12 max-w-3xl">
            <h1 className="font-heading text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Artikel Terbaru
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              Tips website, SEO lokal, dan strategi digital untuk UMKM dan bisnis di Sukoharjo, Surakarta, Solo Baru, Karanganyar, Klaten, Wonogiri, dan seluruh Jawa Tengah.
            </p>
          </div>

          <div className="flex flex-col gap-6 lg:gap-8">
            {blogPosts.map((post) => (
              <BlogListCard key={post.slug} post={post} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
