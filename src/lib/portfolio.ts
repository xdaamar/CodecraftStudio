export interface PortfolioGalleryItem {
  title: string;
  src: string;
  desc: string;
}

export interface PortfolioItem {
  slug: string;
  title: string;
  category: string;
  shortDescription: string;
  websiteUrl: string;
  mainImage: string;
  challenge: string;
  solution: string;
  keyFeatures: string[];
  techStack: string[];
  gallery: PortfolioGalleryItem[];
  results: string[];
}

export const PORTFOLIO_PROJECTS: PortfolioItem[] = [
  {
    slug: 'qec',
    title: 'Queen Education Centre',
    category: 'Education Website',
    shortDescription:
      'Website company profile modern untuk lembaga kursus dengan fokus SEO dan performa mobile.',
    websiteUrl: 'https://www.queeneducationcentre.com/',
    mainImage: '/images/qec/qec_web_page.webp',
    challenge:
      'Lembaga pendidikan membutuhkan kehadiran online yang profesional dan mudah diakses oleh calon siswa maupun orang tua dengan kecepatan pemuatan instan.',
    solution:
      'Membangun company profile dengan desain terstruktur, mobile-friendly, serta optimasi Core Web Vitals dan SEO Google lokal lembaga kursus.',
    keyFeatures: [
      'Desain responsive & mobile-first untuk akses mudah via smartphone',
      'Struktur navigasi intuitif bagi siswa & orang tua',
      'Integrasi formulir pendaftaran dan konsultasi WhatsApp',
      'Optimasi SEO lokal untuk kemudahan pencarian Google',
    ],
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'SEO Optimization'],
    gallery: [
      {
        title: 'Tampilan Halaman Utama',
        src: '/images/qec/qec_web_page.webp',
        desc: 'Desain company profile modern dan mudah dipahami oleh siswa & orang tua',
      },
      {
        title: 'Kecepatan Desktop Maksimal',
        src: '/images/qec/qec_desktop_speed.webp',
        desc: 'Skor kecepatan desktop PageSpeed Insights 100/100',
      },
      {
        title: 'Performa Mobile Tinggi',
        src: '/images/qec/qec_mobile_speed.webp',
        desc: 'Optimasi loading cepat di perangkat smartphone',
      },
      {
        title: 'Optimasi SEO Terbaik',
        src: '/images/qec/qec_seo_optimal.webp',
        desc: 'Struktur metadata dan SEO siap bersaing di Google',
      },
    ],
    results: [
      '✓ Tampilan lebih profesional',
      '✓ Mobile-friendly',
      '✓ Optimasi SEO dasar',
      '✓ Performa desktop tinggi',
      '✓ Navigasi mudah dipahami calon siswa',
    ],
  },
  {
    slug: 'lynxdata',
    title: 'LynxData',
    category: 'SaaS & Data System',
    shortDescription:
      'Ekosistem aplikasi web, dashboard admin, dan desktop pendukung efisiensi manajemen data.',
    websiteUrl: 'https://www.lynxx.biz.id',
    mainImage: '/images/lynxdata/lynxdata_web_page.webp',
    challenge:
      'Bisnis membutuhkan sistem manajemen data terintegrasi yang mampu menangani pengolahan informasi antar platform web dan desktop dengan aman dan cepat.',
    solution:
      'Mengembangkan ekosistem terpadu mencakup landing page SaaS, dashboard admin modern, dan aplikasi desktop untuk optimalisasi workflow klien.',
    keyFeatures: [
      'Landing page SaaS profesional dan conversion-oriented',
      'Dashboard admin modern untuk pemantauan data real-time',
      'Aplikasi desktop terintegrasi untuk pendukung workflow teknis',
      'Optimasi kecepatan dan conversion produk digital',
    ],
    techStack: [
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Desktop App Integration',
    ],
    gallery: [
      {
        title: 'Landing Page SaaS',
        src: '/images/lynxdata/lynxdata_web_page.webp',
        desc: 'Tampilan antarmuka berdesain profesional dan modern',
      },
      {
        title: 'Dashboard Admin Panel',
        src: '/images/lynxdata/lynxdata_admin_panel.webp',
        desc: 'Pusat manajemen data berkinerja responsif dan informatif',
      },
      {
        title: 'Aplikasi Desktop Pendukung',
        src: '/images/lynxdata/lynxdata_desktop_app.webp',
        desc: 'Software desktop untuk kemudahan operasional tim',
      },
      {
        title: 'Kecepatan Sempurna',
        src: '/images/lynxdata/lynxdata_desktop_web_speed.webp',
        desc: 'Hasil uji kecepatan loading desktop & web yang super cepat',
      },
    ],
    results: [
      '✓ Manajemen data terintegrasi dalam satu sistem',
      '✓ Efisiensi workflow tim meningkat pesat',
      '✓ Dashboard admin cepat dan responsif',
      '✓ Antarmuka SaaS siap meningkatkan konversi',
      '✓ Dukungan lintas platform Web & Desktop',
    ],
  },
  {
    slug: 'ravenmessage',
    title: 'RavenMessage',
    category: 'WhatsApp Outreach Tool',
    shortDescription:
      'Platform WhatsApp outreach dan broadcast bisnis dengan desain modern serta SEO teroptimasi.',
    websiteUrl: 'https://www.ravenmessage.biz.id',
    mainImage: '/images/raven/raven_webpage.webp',
    challenge:
      'Pelaku usaha memerlukan platform pengiriman pesan WhatsApp outreach dan broadcast yang efisien serta mudah ditemukan oleh target audiens melalui pencarian Google.',
    solution:
      'Membangun platform SaaS dengan copywriting berorientasi konversi, struktur teknik SEO tinggi, dan pemuatan super cepat untuk performa desktop dan mobile.',
    keyFeatures: [
      'Positioning produk WhatsApp outreach & broadcast',
      'Struktur SEO teknikal teroptimasi untuk kata kunci sasaran',
      'Performa mobile & desktop skor tinggi',
      'Desain berorientasi konversi untuk SaaS tools',
    ],
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'WhatsApp API'],
    gallery: [
      {
        title: 'Platform Web RavenMessage',
        src: '/images/raven/raven_webpage.webp',
        desc: 'Tampilan utama produk WhatsApp outreach tool',
      },
      {
        title: 'Optimasi SEO Google',
        src: '/images/raven/raven_web_seo_optimize.webp',
        desc: 'Struktur SEO terbukti terindeks optimal di hasil pencarian',
      },
      {
        title: 'Kecepatan Desktop Sempurna',
        src: '/images/raven/speed_web_raven_desktop.webp',
        desc: 'Skor performa maksimal di pengujian desktop',
      },
      {
        title: 'Kecepatan Mobile Sangat Cepat',
        src: '/images/raven/speed_web_raven_mobile.webp',
        desc: 'Akses instan dari HP tanpa kendala lambat',
      },
    ],
    results: [
      '✓ Peringkat SEO Google meningkat untuk keyword sasaran',
      '✓ Kecepatan akses mobile dan desktop sempurna',
      '✓ Desain modern meningkatkan konversi prospek bisnis',
      '✓ Penjelasan fitur outreach WhatsApp jelas dan menarik',
      '✓ Siap digunakan sebagai alat pemasaran utama',
    ],
  },
];

export function getAllProjects(): PortfolioItem[] {
  return PORTFOLIO_PROJECTS;
}

export function getProjectBySlug(slug: string): PortfolioItem | undefined {
  return PORTFOLIO_PROJECTS.find((p) => p.slug === slug);
}
