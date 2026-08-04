import { Check } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import {
  PRICING_PACKAGES,
  MAINTENANCE_PACKAGE,
  WA_LINK,
} from '@/lib/constants';
import {
  MotionSection,
  MotionDiv,
  MotionChild,
} from '@/components/motion/motion-wrapper';

export function PricingPackages() {
  return (
    <MotionSection
      id="pricing"
      aria-label="Paket Website"
      variant="fadeUp"
      className="w-full bg-white py-16 lg:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <MotionDiv
          variant="fadeUp"
          initial={false}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="inline-flex items-center rounded-full border border-slate-200/60 bg-white px-3.5 py-1 text-xs font-semibold tracking-wide text-blue-600 uppercase shadow-xs">
            Paket Website
          </span>
          <h2 className="mt-4 font-heading text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
            Pilih paket yang paling sesuai dengan kebutuhan bisnis Anda.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
            Harga berikut adalah estimasi awal. Konsultasi dan diskusi kebutuhan
            website <span className="font-semibold text-slate-950">gratis 100%</span>{' '}
            tanpa biaya apa pun.
          </p>
        </MotionDiv>

        <MotionDiv
          variant="staggerContainer"
          className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:items-stretch"
        >
          {PRICING_PACKAGES.map((pkg) => {
            const isCustom = pkg.label === 'Custom Solution';
            const isPopular = pkg.badge === 'Paling Populer';

            const cardStyle = isCustom
              ? 'bg-slate-900 text-white border-2 border-slate-800 shadow-[0_20px_60px_rgba(15,23,42,0.3)] hover:border-slate-700 hover:shadow-2xl'
              : 'bg-gradient-to-b from-white to-slate-50 border border-slate-200 shadow-md hover:shadow-lg text-text';

            const mobileHighlight = isPopular
              ? 'ring-2 ring-green-500 border-green-500/80'
              : '';

            return (
              <MotionChild
                key={pkg.label}
                variant={isCustom ? 'scaleIn' : 'fadeUp'}
                className={`flex flex-col justify-between rounded-[2rem] p-6 transition duration-300 lg:p-8 ${cardStyle} ${mobileHighlight}`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span
                      className={`font-heading text-xl font-bold tracking-tight sm:text-2xl ${
                        isCustom ? 'text-white' : 'text-text'
                      }`}
                    >
                      {pkg.label}
                    </span>
                    {pkg.badge && (
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-bold ${
                          isCustom
                            ? 'border border-green-500/30 bg-green-500/20 text-green-400'
                            : 'bg-green-100 text-green-700'
                        }`}
                      >
                        {pkg.badge}
                      </span>
                    )}
                  </div>

                  <p
                    className={`mt-3 font-heading font-extrabold ${
                      isCustom
                        ? 'text-xl text-green-400 sm:text-2xl'
                        : 'text-2xl text-green-600 sm:text-3xl'
                    }`}
                  >
                    {pkg.price}
                  </p>

                  <hr
                    className={`my-6 ${
                      isCustom ? 'border-slate-800' : 'border-border-light'
                    }`}
                  />

                  {/* 1 Kolom untuk kedua paket */}
                  <ul className="space-y-3.5">
                    {pkg.features.map((feat) => (
                      <li
                        key={feat}
                        className={`flex items-start gap-3 text-sm sm:text-base ${
                          isCustom ? 'text-slate-300' : 'text-muted'
                        }`}
                      >
                        <span
                          className={`mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                            isCustom
                              ? 'bg-green-950 text-green-400'
                              : 'bg-green-50 text-green-600'
                          }`}
                        >
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
              </MotionChild>
            );
          })}
        </MotionDiv>

        <MotionDiv variant="fadeUp" delay={0.2} className="mt-12">
          <article className="flex flex-col justify-between gap-6 rounded-[2rem] border border-black/5 bg-white p-6 shadow-xs lg:flex-row lg:items-center lg:p-8">
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
        </MotionDiv>
      </div>
    </MotionSection>
  );
}
