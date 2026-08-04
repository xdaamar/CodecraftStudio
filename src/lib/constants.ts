export const WA_LINK = 'https://wa.me/6287872926689';

export type StackItem = {
  name: string;
  className?: string;
};

export const STACK_ITEMS_ROW_1: StackItem[] = [
  { name: 'Next.js' },
  { name: 'TypeScript' },
  { name: 'Tailwind CSS' },
  { name: 'React' },
  { name: 'Flutter' },
  { name: 'Node.js' },
];

export const STACK_ITEMS_ROW_2: StackItem[] = [
  { name: 'PostgreSQL' },
  { name: 'Supabase' },
  { name: 'Vercel' },
  { name: 'SEO Friendly' },
  { name: 'Responsive Design' },
  { name: 'Google Search Ready' },
];

export const STACK_ITEMS: StackItem[] = [
  ...STACK_ITEMS_ROW_1,
  ...STACK_ITEMS_ROW_2,
];

export type ServiceItem = {
  title: string;
  description: string;
};

export const HERO_SERVICES_WORDS = [
  'Jasa Pembuatan Website',
  'Jasa Pembuatan Aplikasi Mobile',
  'Jasa Optimasi SEO Google',
  'Jasa Pembuatan Company Profile',
  'Jasa Pembuatan Landing Page Bisnis',
  'Jasa Pembuatan Sistem Web Custom',
];

export const SEO_CITIES = [
  'Sukoharjo',
  'Klaten',
  'Karanganyar',
  'Wonogiri',
  'Surakarta',
  'Solo Baru',
  'Jawa Tengah',
  'Seluruh Indonesia',
];

export const SERVICES_ITEMS: ServiceItem[] = [
  {
    title: 'Website Company Profile',
    description:
      'Membangun profil bisnis resmi yang profesional, elegan, dan terpercaya untuk meningkatkan kredibilitas perusahaan di mata klien dan mitra bisnis.',
  },
  {
    title: 'Landing Page Marketing',
    description:
      'Halaman promosi fokus konversi tinggi yang dirancang untuk iklan Google Ads, Meta Ads, kampanye produk, maupun penawaran jasa digital.',
  },
  {
    title: 'Toko Online / Katalog Produk',
    description:
      'Katalog digital modern yang memudahkan pelanggan melihat produk, mengecek harga, dan langsung memesan via WhatsApp atau checkout form.',
  },
  {
    title: 'Aplikasi Mobile Android / Flutter',
    description:
      'Pengembangan aplikasi mobile modern berkinerja cepat dengan Flutter untuk memperluas jangkauan layanan bisnis Anda ke pengguna HP.',
  },
  {
    title: 'Sistem Web Custom Bisnis',
    description:
      'Aplikasi berbasis web custom untuk manajemen data, portal klien, sistem kasir, atau otomatisasi proses operasional usaha Anda.',
  },
  {
    title: 'Optimasi SEO & Google Search Console',
    description:
      'Struktur website ramah SEO Google, metadata lengkap, sitemap, serta optimasi kecepatan agar mudah ditemukan di pencarian Google lokal.',
  },
  {
    title: 'Maintenance & Support Website',
    description:
      'Layanan perawatan rutin, pembaruan sistem, backup berkala, dan monitoring performa agar website selalu aman dan online 24/7.',
  },
  {
    title: 'Integrasi WhatsApp & Form Leads',
    description:
      'Tombol interaktif dan formulir konsultasi yang terhubung langsung ke WhatsApp bisnis untuk mempercepat pelayanan dan konversi leads.',
  },
];

export type PricingPackageItem = {
  label: string;
  badge?: string;
  price: string;
  features: string[];
  highlight?: boolean;
};

export const PRICING_PACKAGES: PricingPackageItem[] = [
  {
    label: 'Starter UMKM',
    price: 'Mulai dari Rp500 ribuan',
    features: [
      'Landing page profesional',
      'Desain mobile-friendly',
      'Tombol WhatsApp langsung',
      'Optimasi kecepatan dasar',
      'Gratis konsultasi 100%',
      'Gratis domain',
    ],
  },
  {
    label: 'Business Website',
    badge: 'Paling Populer',
    price: 'Mulai dari Rp1 jutaan',
    highlight: true,
    features: [
      'Multi halaman lengkap',
      'Company profile / Katalog',
      'Galeri & layanan bisnis',
      'SEO dasar Google lokal',
      'Form / WhatsApp inquiry',
      'Optimasi performa mobile & desktop',
      'Gratis konsultasi 100%',
      'Gratis domain',
    ],
  },
  {
    label: 'Custom Solution',
    price: 'Konsultasi sesuai kebutuhan proyek',
    features: [
      'Sistem Web Custom',
      'Aplikasi Mobile Flutter',
      'Dashboard Admin',
      'Integrasi Database MySQL / PostgreSQL',
      'Multi Role User',
      'API & Integrasi Pihak Ketiga',
      'SEO Technical Setup',
      'Konsultasi Gratis 100%',
    ],
  },
];

export const MAINTENANCE_PACKAGE = {
  title: 'Maintenance & Perawatan Website',
  price: 'Mulai dari Rp50.000/bulan',
  features: [
    'update konten ringan',
    'backup berkala',
    'pengecekan link rusak',
    'monitoring performa dasar',
    'bantuan teknis via WhatsApp',
  ],
};

export type BenefitCardItem = {
  title: string;
  features: string[];
  theme: 'dark' | 'light';
};

export const BENEFIT_CARDS: BenefitCardItem[] = [
  {
    title: 'Kenapa Memilih Code Craft Studio',
    features: [
      'Desain modern & profesional',
      'SEO-friendly sejak awal',
      'Mobile-first responsive design',
      'Loading website cepat',
      'Gratis konsultasi 100%',
      'Gratis domain untuk paket tertentu',
    ],
    theme: 'dark',
  },
  {
    title: 'Dukungan Setelah Website Online',
    features: [
      'Maintenance mulai Rp50.000/bulan',
      'Update konten ringan',
      'Backup berkala',
      'Monitoring performa dasar',
      'Bantuan teknis via WhatsApp',
      'Pendampingan pengembangan lanjutan',
    ],
    theme: 'light',
  },
];

export type BenefitItem = {
  title: string;
  description: string;
  fullWidth?: boolean;
};

export const UMKM_BENEFITS: BenefitItem[] = [
  {
    title: 'Gratis Konsultasi',
    description:
      'Diskusi kebutuhan bisnis sebelum website dibuat agar solusi yang dibangun benar-benar sesuai tujuan usaha Anda.',
  },
  {
    title: 'Gratis Domain',
    description:
      'Website siap online dengan domain profesional tanpa perlu repot mengurus proses teknis sendiri.',
  },
  {
    title: 'SEO Friendly',
    description:
      'Struktur website dioptimalkan agar lebih mudah dibaca Google dan berpeluang tampil pada pencarian lokal.',
  },
  {
    title: 'Mobile Friendly',
    description:
      'Tampilan dirancang nyaman digunakan di HP karena sebagian besar pelanggan UMKM datang dari perangkat mobile.',
  },
  {
    title: 'Maintenance Mulai Rp50.000/bulan',
    description:
      'Bantuan update ringan, pengecekan website, dan pendampingan teknis setelah website online.',
    fullWidth: true,
  },
];

export type ProofThumbnail = {
  src: string;
  alt: string;
  label: string;
};

export type PortfolioItem = {
  title: string;
  category: string;
  description: string;
  image: string;
  techStack: string[];
  proofs: ProofThumbnail[];
  url: string;
};

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    title: 'Queen Education Centre',
    category: 'Company Profile / Education Website',
    description:
      'Membangun website company profile untuk lembaga kursus dengan tampilan modern, navigasi yang mudah dipahami calon siswa, serta optimasi SEO dan performa agar nyaman diakses melalui perangkat mobile maupun desktop.',
    image: '/images/qec/qec_web_page.webp',
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    proofs: [
      {
        src: '/images/qec/qec_desktop_speed.webp',
        alt: 'QEC Desktop PageSpeed performance score',
        label: 'Desktop Speed',
      },
      {
        src: '/images/qec/qec_mobile_speed.webp',
        alt: 'QEC Mobile PageSpeed performance score',
        label: 'Mobile Speed',
      },
      {
        src: '/images/qec/qec_seo_optimal.webp',
        alt: 'QEC Google SEO optimization score',
        label: 'SEO Optimal',
      },
    ],
    url: '#', // Placeholder link - replace with production URL when ready
  },
  {
    title: 'LynxData',
    category: 'SaaS / Google Maps Scraping Platform',
    description:
      'Landing page dan ekosistem produk untuk platform scraping Google Maps yang membantu proses pengumpulan data bisnis, export kontak, dan workflow outreach dengan fokus pada performa, kejelasan produk, dan conversion.',
    image: '/images/lynxdata/lynxdata_web_page.webp',
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Flutter'],
    proofs: [
      {
        src: '/images/lynxdata/lynxdata_admin_panel.webp',
        alt: 'LynxData Admin Panel dashboard view',
        label: 'Admin Panel',
      },
      {
        src: '/images/lynxdata/lynxdata_desktop_app.webp',
        alt: 'LynxData Desktop Application interface',
        label: 'Desktop App',
      },
      {
        src: '/images/lynxdata/lynxdata_desktop_web_speed.webp',
        alt: 'LynxData Web PageSpeed performance score',
        label: 'Speed Test',
      },
    ],
    url: '#', // Placeholder link - replace with production URL when ready
  },
  {
    title: 'RavenMessage',
    category: 'SaaS / WhatsApp Outreach Platform',
    description:
      'Membuat landing page dan positioning produk untuk aplikasi WhatsApp outreach profesional dengan fokus pada SEO, performa tinggi, tampilan modern, dan pengalaman pengguna yang dirancang untuk meningkatkan conversion calon pelanggan.',
    image: '/images/raven/raven_webpage.webp',
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js'],
    proofs: [
      {
        src: '/images/raven/raven_web_seo_optimize.webp',
        alt: 'RavenMessage Google SEO score optimization',
        label: 'SEO Optimized',
      },
      {
        src: '/images/raven/speed_web_raven_desktop.webp',
        alt: 'RavenMessage Desktop PageSpeed score',
        label: 'Desktop Speed',
      },
      {
        src: '/images/raven/speed_web_raven_mobile.webp',
        alt: 'RavenMessage Mobile PageSpeed score',
        label: 'Mobile Speed',
      },
    ],
    url: '#', // Placeholder link - replace with production URL when ready
  },
];
