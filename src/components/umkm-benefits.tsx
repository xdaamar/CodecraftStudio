import { Check } from 'lucide-react';
import { BENEFIT_CARDS } from '@/lib/constants';

export function UMKMBenefits() {
  return (
    <section
      id="benefits"
      aria-label="Keunggulan Layanan"
      className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:py-24"
    >
      <div className="flex flex-col items-center text-center">
        <span className="inline-flex items-center rounded-full border border-border-light bg-surface px-3.5 py-1 text-xs font-semibold uppercase tracking-widest text-muted shadow-xs">
          Keunggulan Layanan
        </span>
        <h2 className="mt-4 max-w-2xl font-heading text-3xl font-bold tracking-tight text-text sm:text-4xl">
          Website yang sederhana, cepat, dan siap membantu bisnis Anda
          ditemukan di Google.
        </h2>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:mt-16">
        {BENEFIT_CARDS.map((card) => {
          const isDark = card.theme === 'dark';
          const cardStyle = isDark
            ? 'bg-slate-900 text-white shadow-md'
            : 'bg-gradient-to-br from-emerald-50 to-white text-text border border-black/5 shadow-sm';

          return (
            <article
              key={card.title}
              className={`flex flex-col justify-between rounded-[2rem] p-8 transition duration-300 sm:p-10 ${cardStyle}`}
            >
              <div>
                <h3
                  className={`font-heading text-2xl font-bold tracking-tight sm:text-3xl ${
                    isDark ? 'text-white' : 'text-text'
                  }`}
                >
                  {card.title}
                </h3>

                <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {card.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm sm:text-base"
                    >
                      <span
                        className={`mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                          isDark
                            ? 'bg-green-950 text-green-400'
                            : 'bg-green-100 text-green-600'
                        }`}
                      >
                        <Check className="h-3.5 w-3.5" />
                      </span>
                      <span
                        className={isDark ? 'text-slate-200' : 'text-text/90'}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
