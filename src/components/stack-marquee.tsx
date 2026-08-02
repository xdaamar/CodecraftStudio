import { STACK_ITEMS } from '@/lib/constants';

export function StackMarquee() {
  const marqueeItems = [...STACK_ITEMS, ...STACK_ITEMS];

  return (
    <section
      aria-label="Tech Stack"
      className="w-full overflow-hidden border-y border-border-light bg-surface py-8"
    >
      <div className="flex w-max animate-marquee items-center gap-4">
        {marqueeItems.map((item, idx) => (
          <div
            key={`${item.name}-${idx}`}
            className={`inline-flex shrink-0 items-center justify-center rounded-full border px-5 py-2 text-sm font-semibold shadow-2xs ${item.className}`}
          >
            {item.name}
          </div>
        ))}
      </div>
    </section>
  );
}
