export type StackItem = {
  name: string;
  className: string;
};

export const STACK_ITEMS: StackItem[] = [
  { name: 'Next.js', className: 'bg-blue-50 text-blue-700 border-blue-200' },
  {
    name: 'TypeScript',
    className: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  },
  {
    name: 'Tailwind CSS',
    className: 'bg-violet-50 text-violet-700 border-violet-200',
  },
  { name: 'React', className: 'bg-orange-50 text-orange-700 border-orange-200' },
  { name: 'Flutter', className: 'bg-cyan-50 text-cyan-700 border-cyan-200' },
  { name: 'Supabase', className: 'bg-blue-50 text-blue-700 border-blue-200' },
  {
    name: 'Node.js',
    className: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  },
  {
    name: 'PostgreSQL',
    className: 'bg-violet-50 text-violet-700 border-violet-200',
  },
  {
    name: 'Vercel',
    className: 'bg-orange-50 text-orange-700 border-orange-200',
  },
  {
    name: 'SEO Friendly',
    className: 'bg-cyan-50 text-cyan-700 border-cyan-200',
  },
  {
    name: 'Responsive Design',
    className: 'bg-blue-50 text-blue-700 border-blue-200',
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
