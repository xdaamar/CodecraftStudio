import { UMKM_BENEFITS } from '@/lib/constants';

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

      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:mt-16">
        {UMKM_BENEFITS.map((item) => (
          <div
            key={item.title}
            className={`flex flex-col justify-between rounded-[1.5rem] border border-border-light bg-surface p-6 shadow-xs transition duration-300 hover:-translate-y-1 hover:shadow-md sm:p-8 ${
              item.fullWidth
                ? 'md:col-span-2 md:flex-row md:items-center md:justify-between md:gap-8'
                : ''
            }`}
          >
            <div>
              <h3 className="font-heading text-xl font-bold text-text sm:text-2xl">
                {item.title}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-muted">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
