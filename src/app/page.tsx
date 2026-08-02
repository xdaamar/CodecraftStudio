import { Hero } from '@/components/hero';
import { StackMarquee } from '@/components/stack-marquee';
import { UMKMBenefits } from '@/components/umkm-benefits';

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <Hero />
      <StackMarquee />
      <UMKMBenefits />
    </main>
  );
}
