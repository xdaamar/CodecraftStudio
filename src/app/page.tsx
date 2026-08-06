import dynamic from 'next/dynamic';
import { Hero } from '@/components/hero';
import { StackMarquee } from '@/components/stack-marquee';
import { UMKMBenefits } from '@/components/umkm-benefits';
import { DesktopCursorGlow } from '@/components/desktop-cursor-glow';
import { ScrollProgressBar } from '@/components/scroll-progress-bar';
import { faqSchema } from '@/lib/faq-schema';
import { FloatingWhatsApp } from '@/components/floating-whatsapp';

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

const TrustStrip = dynamic(
  () =>
    import('@/components/trust-strip').then((mod) => mod.TrustStrip),
  {
    loading: () => <SectionSkeleton heightClass="min-h-[200px]" />,
  }
);

const ProcessSection = dynamic(
  () =>
    import('@/components/process-section').then((mod) => mod.ProcessSection),
  {
    loading: () => <SectionSkeleton heightClass="min-h-[500px]" />,
  }
);

const FAQSection = dynamic(
  () =>
    import('@/components/faq-section').then((mod) => mod.FAQSection),
  {
    loading: () => <SectionSkeleton heightClass="min-h-[600px]" />,
  }
);

const Footer = dynamic(
  () =>
    import('@/components/footer').then((mod) => mod.Footer),
  {
    loading: () => <SectionSkeleton heightClass="min-h-[300px]" />,
  }
);

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <ScrollProgressBar />
      <DesktopCursorGlow />
      <main className="bg-background overflow-x-hidden">
        <Hero />
        <StackMarquee />
        <UMKMBenefits />
        <PortfolioSection />
        <ServicesSection />
        <PricingPackages />
        <TrustStrip />
        <ProcessSection />
        <FAQSection />
        <Footer />
        <FloatingWhatsApp />
      </main>
    </>
  );
}

