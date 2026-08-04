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

export const SERVICES_ITEMS: ServiceItem[] = [
  {
    title: 'Landing Page Bisnis',
    description:
      'Cocok untuk promosi produk, jasa, event, atau kampanye iklan digital dengan fokus pada tampilan modern dan conversion.',
  },
  {
    title: 'Company Profile UMKM',
    description:
      'Menampilkan profil usaha, layanan, galeri, lokasi, dan kontak WhatsApp secara profesional agar bisnis lebih dipercaya pelanggan.',
  },
  {
    title: 'Website Kursus & Pendidikan',
    description:
      'Menyediakan informasi program belajar, jadwal, galeri kegiatan, dan pendaftaran yang mudah diakses calon siswa maupun orang tua.',
  },
  {
    title: 'Website Produk Digital / Startup',
    description:
      'Landing page modern untuk SaaS, aplikasi, atau produk digital dengan fokus pada performa, SEO, dan pengalaman pengguna.',
  },
  {
    title: 'Optimasi SEO Dasar',
    description:
      'Meliputi struktur heading yang rapi, metadata SEO, sitemap, optimasi kecepatan, dan dasar optimasi pencarian lokal Google.',
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
    label: 'Business Profile',
    badge: 'Paling Populer',
    price: 'Mulai dari Rp1 jutaan',
    highlight: true,
    features: [
      'Multi halaman',
      'Company profile lengkap',
      'Galeri & layanan',
      'SEO dasar Google',
      'Form / WhatsApp inquiry',
      'Optimasi performa mobile & desktop',
      'Gratis konsultasi 100%',
      'Gratis domain',
    ],
  },
  {
    label: 'SEO Growth',
    price: 'Mulai dari Rp2 jutaan',
    features: [
      'Website custom modern',
      'Struktur SEO lokal',
      'Blog artikel SEO',
      'Optimasi Core Web Vitals',
      'Integrasi Google Search Console ready',
      'Pendampingan publikasi awal',
      'Gratis konsultasi 100%',
      'Gratis domain',
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
