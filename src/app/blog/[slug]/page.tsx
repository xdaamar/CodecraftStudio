import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight, Calendar } from 'lucide-react';
import { Footer } from '@/components/footer';
import { RelatedPosts } from '@/components/related-posts';
import { FloatingWhatsApp } from '@/components/floating-whatsapp';
import { blogPosts } from '@/content/blog';
import { siteConfig } from '@/lib/site-config';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: 'Artikel Tidak Ditemukan - Code Craft Studio',
    };
  }

  const url = `${siteConfig.url}/blog/${post.slug}`;

  return {
    title: `${post.title} | Code Craft Studio`,
    description: post.description,
    keywords: post.keywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      url,
      siteName: 'Code Craft Studio',
      locale: 'id_ID',
      type: 'article',
      publishedTime: post.date,
      modifiedTime: post.updatedAt || post.date,
      authors: [siteConfig.author],
      images: [
        {
          url: post.cover,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: [post.cover],
      creator: '@ccs.id',
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const postIndex = blogPosts.findIndex((p) => p.slug === slug);

  if (postIndex === -1) {
    notFound();
  }

  const post = blogPosts[postIndex];

  // Use the statically mapped component instead of dynamic import
  // which can fail in Turbopack dev mode
  const ArticleContent = (post as unknown as { Component: React.ComponentType }).Component;
  
  if (!ArticleContent) {
    console.error('Error: Component not found for post', post.slug);
    notFound();
  }

  const formattedDate = new Date(post.date).toLocaleDateString('id-ID', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <>
      <main className="min-h-screen bg-white pt-28 pb-16">
        <article className="mx-auto max-w-4xl px-4 sm:px-6">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center space-x-2 text-sm text-slate-500">
              <li>
                <Link href="/" className="hover:text-blue-600 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <ChevronRight className="h-4 w-4" />
              </li>
              <li>
                <Link href="/blog" className="hover:text-blue-600 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <ChevronRight className="h-4 w-4" />
              </li>
              <li className="font-medium text-slate-900 truncate" aria-current="page">
                {post.title}
              </li>
            </ol>
          </nav>

          {/* Header */}
          <header className="mb-10 text-center">
            <div className="flex items-center justify-center gap-4 text-sm font-medium text-slate-500">
              <span className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4" />
                {formattedDate}
              </span>
            </div>
            <h1 className="mt-6 font-heading text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl lg:leading-tight">
              {post.title}
            </h1>
          </header>

          {/* Cover Image */}
          <div className="relative mb-12 aspect-[16/9] w-full overflow-hidden rounded-[2rem] bg-slate-100 shadow-sm">
            <Image
              src={post.cover}
              alt={post.title}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 896px"
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div className="prose prose-slate prose-lg mx-auto max-w-3xl prose-headings:font-heading prose-a:text-blue-600 hover:prose-a:text-blue-500">
            <ArticleContent />
          </div>

          {/* Related Posts */}
          <div className="mx-auto max-w-3xl mt-16 pt-16 border-t border-slate-200">
            <RelatedPosts currentSlug={post.slug} category={post.category} />
          </div>
        </article>
      </main>
      <FloatingWhatsApp />
      <Footer />
    </>
  );
}
