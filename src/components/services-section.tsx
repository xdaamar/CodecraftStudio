import {
  Rocket,
  Building2,
  GraduationCap,
  Layout,
  Search,
} from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { SERVICES_ITEMS, WA_LINK } from '@/lib/constants';

function ServiceIcon({ index }: { index: number }) {
  switch (index) {
    case 0:
      return <Rocket className="h-6 w-6 text-accent" />;
    case 1:
      return <Building2 className="h-6 w-6 text-accent" />;
    case 2:
      return <GraduationCap className="h-6 w-6 text-accent" />;
    case 3:
      return <Layout className="h-6 w-6 text-accent" />;
    case 4:
      return <Search className="h-6 w-6 text-accent" />;
    default:
      return <Rocket className="h-6 w-6 text-accent" />;
  }
}

export function ServicesSection() {
  return (
    <section
      aria-label="Layanan Website"
      className="w-full border-y border-border-light bg-background py-16 lg:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center rounded-full border border-border-light bg-surface px-3.5 py-1 text-xs font-semibold uppercase tracking-widest text-accent shadow-2xs">
            Layanan &amp; Spesialisasi
          </span>
          <h2 className="mt-4 font-heading text-3xl font-extrabold tracking-tight text-text sm:text-4xl">
            Solusi Website Modern untuk Mempercepat Pertumbuhan Bisnis
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
            Setiap website dirancang dengan pendekatan mobile-first, optimasi
            kecepatan tinggi, dan struktur SEO yang siap bersaing di Google.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-6">
          {SERVICES_ITEMS.map((service, idx) => {
            const spanClass =
              idx < 3
                ? 'md:col-span-1 lg:col-span-2'
                : 'md:col-span-1 lg:col-span-3';

            return (
              <article
                key={service.title}
                className={`flex flex-col rounded-[1.5rem] border border-black/5 bg-white p-6 shadow-2xs transition duration-300 hover:-translate-y-1 hover:shadow-md sm:p-8 ${spanClass}`}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50/80">
                  <ServiceIcon index={idx} />
                </div>

                <h3 className="mt-6 font-heading text-xl font-bold tracking-tight text-text sm:text-2xl">
                  {service.title}
                </h3>

                <p className="mt-3 text-base leading-relaxed text-muted">
                  {service.description}
                </p>
              </article>
            );
          })}
        </div>

        <div className="mt-12 flex flex-col items-center justify-center text-center">
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-green-500 px-8 text-sm font-medium text-white shadow-sm transition hover:bg-green-600 sm:w-auto"
          >
            <FaWhatsapp className="text-base" />
            <span>Contact via Whatsapp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
