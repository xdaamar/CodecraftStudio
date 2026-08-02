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
