import { Check, ShieldCheck } from 'lucide-react';
import { UMKM_BENEFITS } from '@/lib/constants';
import {
  MotionSection,
  MotionDiv,
  MotionChild,
} from '@/components/motion/motion-wrapper';

export function UMKMBenefits() {
  const smallCards = UMKM_BENEFITS.filter((item) => !item.fullWidth);
  const fullWidthCard = UMKM_BENEFITS.find((item) => item.fullWidth);

  return (
    <MotionSection
      id="benefits"
      aria-label="Keunggulan Layanan"
      variant="fadeUp"
      className="w-full bg-gradient-to-b from-slate-50 to-slate-100/70 py-16 lg:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <MotionDiv
          variant="fadeUp"
          initial={false}
          className="flex flex-col items-center text-center"
        >
          <span className="inline-flex items-center rounded-full border border-slate-200/60 bg-white/90 px-3.5 py-1 text-xs font-semibold tracking-wide text-blue-600 uppercase shadow-xs">
            Keunggulan Layanan
          </span>
          <h2 className="mt-4 max-w-2xl font-heading text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            Website yang sederhana, cepat, dan siap membantu{' '}
            <span className="text-blue-600">bisnis Anda tumbuh</span> di Google.
          </h2>
        </MotionDiv>

        <MotionDiv
          variant="staggerContainer"
          initial={false}
          className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-16 lg:gap-8"
        >
          {smallCards.map((benefit) => (
            <MotionChild
              key={benefit.title}
              variant="scaleIn"
              className="flex flex-col rounded-[2rem] border border-white/60 bg-white/90 p-8 shadow-[0_10px_40px_rgba(15,23,42,0.05)] backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(15,23,42,0.08)]"
            >
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <Check className="h-5 w-5" />
                </span>
                <h3 className="font-heading text-xl font-bold tracking-tight text-slate-950 sm:text-2xl">
                  {benefit.title}
                </h3>
              </div>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                {benefit.description}
              </p>
            </MotionChild>
          ))}
        </MotionDiv>

        {fullWidthCard && (
          <MotionDiv
            variant="fadeUp"
            initial={false}
            delay={0.2}
            className="mt-8"
          >
            <article className="flex flex-col rounded-[2rem] border border-emerald-100 bg-gradient-to-r from-emerald-50 via-white to-blue-50 p-8 shadow-[0_10px_40px_rgba(15,23,42,0.05)] transition duration-300 sm:p-10">
              <div className="h-1 w-20 rounded-full bg-gradient-to-r from-emerald-500 to-blue-500" />
              <div className="mt-6 flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                      <ShieldCheck className="h-5 w-5" />
                    </span>
                    <h3 className="font-heading text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
                      {fullWidthCard.title}
                    </h3>
                  </div>
                  <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-600 sm:text-lg">
                    {fullWidthCard.description}
                  </p>
                </div>
              </div>
            </article>
          </MotionDiv>
        )}
      </div>
    </MotionSection>
  );
}
