import dynamic from 'next/dynamic';
import { Hero } from '@/components/hero';
import { StackMarquee } from '@/components/stack-marquee';
import { UMKMBenefits } from '@/components/umkm-benefits';

function SectionSkeleton({
  heightClass = 'min-h-[500px]',
}: {
  heightClass?: string;
}) {
  return (
    <div
      className={`w-full ${heightClass} animate-pulse border-y border-slate-200/50 bg-slate-50/50`}
    />
  );
}

const PortfolioSection = dynamic(
  () =>
    import('@/components/portfolio-section').then(
      (mod) => mod.PortfolioSection
    ),
  {
    loading: () => <SectionSkeleton heightClass="min-h-[600px]" />,
  }
);

const ServicesSection = dynamic(
  () =>
    import('@/components/services-section').then((mod) => mod.ServicesSection),
  {
    loading: () => <SectionSkeleton heightClass="min-h-[650px]" />,
  }
);

const PricingPackages = dynamic(
  () =>
    import('@/components/pricing-packages').then((mod) => mod.PricingPackages),
  {
    loading: () => <SectionSkeleton heightClass="min-h-[750px]" />,
  }
);

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <Hero />
      <StackMarquee />
      <UMKMBenefits />
      <PortfolioSection />
      <ServicesSection />
      <PricingPackages />
    </main>
  );
}
