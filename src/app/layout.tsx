import type { Metadata } from 'next';
import { Sora, Plus_Jakarta_Sans } from 'next/font/google';
import localFont from 'next/font/local';
import { Navbar } from '@/components/navbar';
import { siteConfig } from '@/lib/site-config';
import './globals.css';

const sora = Sora({
  variable: '--font-heading',
  subsets: ['latin'],
  weight: ['400', '500', "600", '700', '800'],
});

const jakarta = Plus_Jakarta_Sans({
  variable: '--font-body',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

const playwrite = localFont({
  src: '../../public/fonts/Playwrite_NZ_Basic/PlaywriteNZBasic-VariableFont_wght.ttf',
  variable: '--font-playwrite',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: siteConfig.name + ' — Software House & Web Development Agency Indonesia',
  description: siteConfig.description,
  keywords: [
    'jasa pembuatan website Sukoharjo',
    'jasa pembuatan website Surakarta',
    'jasa pembuatan website Solo Baru',
    'jasa pembuatan website Karanganyar',
    'jasa pembuatan website Klaten',
    'jasa pembuatan website Wonogiri',
    'jasa website Jawa Tengah',
    'website UMKM SEO friendly',
  ],
  alternates: {
    canonical: siteConfig.url,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: siteConfig.name + ' — Software House & Web Development Agency',
    description: siteConfig.description,
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    creator: '@ccs.id',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Structured Data (JSON-LD)
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.name,
    url: siteConfig.url,
  };

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    areaServed: [
      'Sukoharjo',
      'Surakarta',
      'Solo Baru',
      'Karanganyar',
      'Klaten',
      'Wonogiri',
      'Jawa Tengah'
    ],
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.name,
    url: siteConfig.url,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${siteConfig.url}/blog?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <html
      lang="id"
      className={`${sora.variable} ${jakarta.variable} ${playwrite.variable} min-h-screen antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="flex min-h-screen flex-col bg-background font-sans text-text">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
