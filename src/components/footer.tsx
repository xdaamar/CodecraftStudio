import Link from 'next/link';
import { FaWhatsapp } from 'react-icons/fa';
import { SiTiktok } from 'react-icons/si';
import { Globe } from 'lucide-react';

export function Footer() {
  return (
    <footer className="w-full border-t border-blue-700 bg-blue-600 pt-16 pb-8 text-white">
      <div className="mx-auto w-full max-w-[1380px] px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-8">
          {/* Kolom 1 - Brand */}
          <div className="flex flex-col">
            <h3 className="font-heading text-2xl font-bold tracking-tight text-white">
              Code Craft Studio
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-blue-100">
              Jasa pembuatan website, aplikasi, dan optimasi SEO untuk UMKM, bisnis lokal, dan startup di Sukoharjo, Surakarta, Solo Baru, Karanganyar, Klaten, Wonogiri, Jawa Tengah hingga seluruh Indonesia.
            </p>
          </div>

          {/* Kolom 2 - Navigasi */}
          <div className="flex flex-col">
            <h3 className="font-heading text-lg font-bold tracking-tight text-white">
              Navigasi
            </h3>
            <ul className="mt-4 flex flex-col gap-3 text-sm font-medium text-blue-100">
              <li>
                <Link href="/" className="hover:text-blue-300 transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/#portfolio" className="hover:text-blue-300 transition-colors">Portofolio</Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-blue-300 transition-colors">Layanan</Link>
              </li>
              <li>
                <Link href="/#pricing" className="hover:text-blue-300 transition-colors">Pricing</Link>
              </li>
              <li>
                <Link href="/#faq" className="hover:text-blue-300 transition-colors">FAQ</Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-blue-300 transition-colors">Blog</Link>
              </li>
            </ul>
          </div>

          {/* Kolom 3 - Kontak */}
          <div className="flex flex-col">
            <h3 className="font-heading text-lg font-bold tracking-tight text-white">
              Kontak
            </h3>
            <ul className="mt-4 flex flex-col gap-4 text-sm font-medium text-blue-100">
              <li>
                <a
                  href="https://wa.me/6287872926689"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Hubungi Code Craft Studio melalui WhatsApp"
                  className="inline-flex items-center gap-2 hover:text-blue-300 transition-colors"
                >
                  <FaWhatsapp className="h-5 w-5 text-green-400" />
                  <span>WhatsApp: 0878-7292-6689</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.tiktok.com/@ccs.id"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Kunjungi TikTok Code Craft Studio"
                  className="inline-flex items-center gap-2 hover:text-blue-300 transition-colors"
                >
                  <SiTiktok className="h-4 w-4 text-white" />
                  <span>TikTok: @ccs.id</span>
                </a>
              </li>
              <li>
                <a
                  href="https://codecraftstudio.my.id"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Kunjungi Website Utama Code Craft Studio"
                  className="inline-flex items-center gap-2 hover:text-blue-300 transition-colors"
                >
                  <Globe className="h-5 w-5 text-blue-100" />
                  <span>Website: codecraftstudio.my.id</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-blue-500/50 pt-8 text-center sm:flex-row sm:text-left">
          <p className="text-sm font-medium text-blue-200">
            &copy; 2026 Code Craft Studio. Seluruh hak cipta dilindungi.
          </p>
          <p className="text-xs font-medium text-blue-300">
            Dibuat dengan Next.js, TypeScript, dan Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}
