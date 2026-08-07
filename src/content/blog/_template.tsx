export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  cover: string;
  date: string;
  updatedAt?: string;
  category: string;
  featured: boolean;
  readingTime: string;
  keywords: string[];
  content?: React.ReactNode;
};

// Template for future blog posts
export const post: BlogPost = {
  slug: 'judul-artikel-baru',
  title: 'Judul Artikel Baru',
  description: 'Deskripsi meta untuk keperluan SEO (sekitar 150-160 karakter).',
  cover: '/images/blog/placeholder.webp',
  date: '2026-08-07',
  updatedAt: '2026-08-07',
  category: 'Kategori Artikel',
  featured: false,
  readingTime: '5 menit baca',
  keywords: ['keyword 1', 'keyword 2'],
};

export default function ArticleTemplate() {
  return (
    <>
      <h2 className="mt-8 font-heading text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
        Heading 2 Contoh
      </h2>
      <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
        Paragraf pendahuluan artikel...
      </p>
    </>
  );
}
