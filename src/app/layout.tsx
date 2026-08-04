import type { Metadata } from 'next';
import { Manrope, Inter } from 'next/font/google';
import localFont from 'next/font/local';
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

const playwrite = localFont({
  src: '../../public/fonts/Playwrite_NZ_Basic/PlaywriteNZBasic-VariableFont_wght.ttf',
  variable: '--font-playwrite',
  display: 'swap',
});

export const metadata: Metadata = {
  title:
    'Code Craft Studio — Software House & Web Development Agency Indonesia',
  description:
    'Code Craft Studio adalah software house profesional yang melayani pembuatan website modern, aplikasi mobile, dan optimasi SEO lokal di Sukoharjo, Solo, Jawa Tengah, dan Indonesia.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${manrope.variable} ${inter.variable} ${playwrite.variable} min-h-screen antialiased`}
    >
      <body className="flex min-h-screen flex-col bg-background font-sans text-text">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
