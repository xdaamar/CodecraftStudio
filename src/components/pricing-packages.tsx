import { Check } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import {
  PRICING_PACKAGES,
  MAINTENANCE_PACKAGE,
  WA_LINK,
} from '@/lib/constants';

export function PricingPackages() {
  return (
    <section
      id="pricing"
      aria-label="Paket Website"
      className="w-full bg-surface py-16 lg:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center rounded-full border border-border-light bg-background px-3.5 py-1 text-xs font-semibold uppercase tracking-widest text-accent shadow-2xs">
            Paket Website
          </span>
          <h2 className="mt-4 font-heading text-3xl font-extrabold tracking-tight text-text sm:text-4xl">
            Pilih paket yang paling sesuai dengan kebutuhan bisnis Anda.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
            Harga berikut adalah estimasi awal. Konsultasi dan diskusi kebutuhan
            website <span className="font-semibold text-text">gratis 100%</span>{' '}
            tanpa biaya apa pun.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-3 lg:items-stretch">
          {PRICING_PACKAGES.map((pkg) => {
            const cardStyle = pkg.highlight
              ? 'border-2 border-green-500 shadow-[0_20px_60px_rgba(34,197,94,0.12)]'
              : 'border border-black/5 shadow-2xs hover:shadow-md';

            const isCustom = pkg.label === 'Custom Solution';

            return (
              <article
                key={pkg.label}
                className={`flex flex-col justify-between rounded-[2rem] bg-white p-6 transition duration-300 lg:p-8 ${cardStyle}`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-heading text-xl font-bold tracking-tight text-text sm:text-2xl">
                      {pkg.label}
                    </span>
                    {pkg.badge && (
                      <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-bold text-green-700">
                        {pkg.badge}
                      </span>
                    )}
                  </div>

                  <p
                    className={`mt-3 font-heading font-extrabold text-green-600 ${
                      isCustom ? 'text-xl sm:text-2xl' : 'text-2xl sm:text-3xl'
                    }`}
                  >
                    {pkg.price}
                  </p>

                  <hr className="my-6 border-border-light" />

                  <ul
                    className={
                      isCustom
                        ? 'grid grid-cols-1 gap-3 sm:grid-cols-2'
                        : 'space-y-3.5'
                    }
                  >
                    {pkg.features.map((feat) => (
                      <li
                        key={feat}
                        className="flex items-start gap-3 text-sm text-muted sm:text-base"
                      >
                        <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-50 text-green-600">
                          <Check className="h-3.5 w-3.5" />
                        </span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8">
                  <a
                    href={WA_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-green-500 px-6 text-sm font-medium text-white shadow-sm transition hover:bg-green-600"
                  >
                    <FaWhatsapp className="text-base" />
                    <span>Contact via Whatsapp</span>
                  </a>
                </div>
              </article>
            );
          })}
        </div>

        <article className="mt-12 flex flex-col justify-between gap-6 rounded-[2rem] border border-black/5 bg-white p-6 shadow-xs lg:flex-row lg:items-center lg:p-8">
          <div className="flex flex-col lg:max-w-xs">
            <span className="text-xs font-semibold uppercase tracking-wider text-accent">
              Layanan Tambahan
            </span>
            <h3 className="mt-1 font-heading text-2xl font-bold tracking-tight text-text">
              {MAINTENANCE_PACKAGE.title}
            </h3>
            <p className="mt-1 text-lg font-bold text-green-600">
              {MAINTENANCE_PACKAGE.price}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2.5 lg:max-w-lg">
            {MAINTENANCE_PACKAGE.features.map((feature) => (
              <span
                key={feature}
                className="inline-flex items-center gap-1.5 rounded-full border border-border-light bg-slate-50 px-3.5 py-1.5 text-xs font-medium text-muted"
              >
                <Check className="h-3.5 w-3.5 text-green-500" />
                <span>{feature}</span>
              </span>
            ))}
          </div>

          <div>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-green-500 px-6 text-sm font-medium text-white shadow-sm transition hover:bg-green-600 lg:w-auto"
            >
              <FaWhatsapp className="text-base" />
              <span>Contact via Whatsapp</span>
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}
