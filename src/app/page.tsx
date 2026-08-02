import { Hero } from '@/components/hero';
import { StackMarquee } from '@/components/stack-marquee';
import { UMKMBenefits } from '@/components/umkm-benefits';
import { PortfolioSection } from '@/components/portfolio-section';

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <Hero />
      <StackMarquee />
      <UMKMBenefits />
      <PortfolioSection />
    </main>
  );
}
