import { Hero } from '@/components/hero';
import { StackMarquee } from '@/components/stack-marquee';
import { UMKMBenefits } from '@/components/umkm-benefits';
import { PortfolioSection } from '@/components/portfolio-section';
import { ServicesSection } from '@/components/services-section';
import { PricingPackages } from '@/components/pricing-packages';

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
