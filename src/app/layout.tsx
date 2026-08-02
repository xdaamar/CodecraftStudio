import type { Metadata } from 'next';
import { Manrope, Inter } from 'next/font/google';
import { Navbar } from '@/components/navbar';
import './globals.css';

const manrope = Manrope({
  variable: '--font-manrope',
  subsets: ['latin'],
  weight: ['400', '500', "600", '700', '800'],
});

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Damar — Web Developer & SEO Web Service',
  description:
    'Portfolio dan landing page jasa pembuatan website modern, cepat, dan teroptimasi SEO oleh Damar. Fokus pada hasil kerja dan layanan berkualitas.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${manrope.variable} ${inter.variable} min-h-screen antialiased`}
    >
      <body className="flex min-h-screen flex-col bg-background font-sans text-text">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
