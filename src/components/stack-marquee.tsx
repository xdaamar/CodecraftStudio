'use client';

import { useState } from 'react';
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiReact,
  SiFlutter,
  SiNodedotjs,
  SiPostgresql,
  SiSupabase,
  SiVercel,
  SiGoogle,
} from 'react-icons/si';
import { FaSearch, FaMobileAlt } from 'react-icons/fa';
import {
  STACK_ITEMS_ROW_1,
  STACK_ITEMS_ROW_2,
  type StackItem,
} from '@/lib/constants';
import { MotionSection } from '@/components/motion/motion-wrapper';

function StackIcon({ name }: { name: string }) {
  switch (name) {
    case 'Next.js':
      return <SiNextdotjs className="text-xl text-slate-900" />;
    case 'TypeScript':
      return <SiTypescript className="text-xl text-[#3178C6]" />;
    case 'Tailwind CSS':
      return <SiTailwindcss className="text-xl text-[#06B6D4]" />;
    case 'React':
      return <SiReact className="text-xl text-[#61DAFB]" />;
    case 'Flutter':
      return <SiFlutter className="text-xl text-[#02569B]" />;
    case 'Node.js':
      return <SiNodedotjs className="text-xl text-[#5FA04E]" />;
    case 'PostgreSQL':
      return <SiPostgresql className="text-xl text-[#4169E1]" />;
    case 'Supabase':
      return <SiSupabase className="text-xl text-[#3ECF8E]" />;
    case 'Vercel':
      return <SiVercel className="text-xl text-slate-900" />;
    case 'SEO Friendly':
      return <FaSearch className="text-lg text-blue-600" />;
    case 'Responsive Design':
      return <FaMobileAlt className="text-lg text-emerald-600" />;
    case 'Google Search Ready':
      return <SiGoogle className="text-lg text-[#4285F4]" />;
    default:
      return null;
  }
}

function getPillStyle(idx: number, hoveredIdx: number | null) {
  if (hoveredIdx === null) {
    return 'border-slate-200/70 bg-white/95 text-slate-900 shadow-sm hover:shadow-md scale-100 translate-x-0 translate-y-0 opacity-100 z-0';
  }

  const diff = idx - hoveredIdx;

  if (diff === 0) {
    // Hovered card: pop forward, scale up, glow border & shadow, bold text
    return 'border-blue-500/60 bg-white text-blue-600 shadow-[0_20px_50px_rgba(37,99,235,0.25)] ring-4 ring-blue-500/15 scale-115 sm:scale-125 -translate-y-2 opacity-100 z-30 font-bold';
  }

  if (diff === -1) {
    // 1 card to the left: move left away
    return 'border-slate-200/60 bg-white/90 text-slate-700 shadow-xs scale-95 -translate-x-4 sm:-translate-x-6 opacity-90 z-10';
  }

  if (diff === 1) {
    // 1 card to the right: move right away
    return 'border-slate-200/60 bg-white/90 text-slate-700 shadow-xs scale-95 translate-x-4 sm:translate-x-6 opacity-90 z-10';
  }

  if (diff === -2) {
    // 2 cards to the left
    return 'border-slate-200/50 bg-white/80 text-slate-500 shadow-2xs scale-90 -translate-x-3 sm:-translate-x-4 opacity-75 z-0';
  }

  if (diff === 2) {
    // 2 cards to the right
    return 'border-slate-200/50 bg-white/80 text-slate-500 shadow-2xs scale-90 translate-x-3 sm:translate-x-4 opacity-75 z-0';
  }

  // Further cards
  const isLeft = diff < 0;
  return `border-slate-200/40 bg-white/70 text-slate-400 shadow-none scale-90 ${
    isLeft ? '-translate-x-2' : 'translate-x-2'
  } opacity-60 z-0`;
}

function MarqueeRow({
  items,
  reverseDelay = false,
  direction = 'left',
  isPaused,
  onHoverCard,
}: {
  items: StackItem[];
  reverseDelay?: boolean;
  direction?: 'left' | 'right';
  isPaused: boolean;
  onHoverCard: (hovered: boolean) => void;
}) {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const duplicated = [...items, ...items, ...items, ...items];
  const animationClass =
    direction === 'right' ? 'animate-marquee-reverse' : 'animate-marquee';

  return (
    <div
      className={`flex w-max items-center gap-4 py-2 ${animationClass} ${
        reverseDelay ? '[animation-delay:-17s]' : ''
      }`}
      style={{
        animationPlayState:
          isPaused || hoveredIdx !== null ? 'paused' : 'running',
      }}
      onMouseLeave={() => {
        setHoveredIdx(null);
        onHoverCard(false);
      }}
    >
      {duplicated.map((item, idx) => {
        const dynamicStyle = getPillStyle(idx, hoveredIdx);

        return (
          <div
            key={`${item.name}-${idx}`}
            onMouseEnter={() => {
              setHoveredIdx(idx);
              onHoverCard(true);
            }}
            onClick={() => {
              const next = hoveredIdx === idx ? null : idx;
              setHoveredIdx(next);
              onHoverCard(next !== null);
            }}
            className={`inline-flex shrink-0 cursor-pointer select-none items-center justify-center gap-2.5 rounded-full border px-6 py-3 text-base font-semibold transition-all duration-500 ease-out ${dynamicStyle}`}
          >
            <StackIcon name={item.name} />
            <span>{item.name}</span>
          </div>
        );
      })}
    </div>
  );
}

export function StackMarquee() {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <MotionSection
      id="tech-stack"
      aria-label="Tech Stack"
      variant="fadeUp"
      className="relative w-full overflow-hidden border-y border-slate-200/70 bg-slate-50 py-12"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-24 bg-gradient-to-r from-slate-50 to-transparent sm:w-36" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-24 bg-gradient-to-l from-slate-50 to-transparent sm:w-36" />
      <div className="flex flex-col gap-5">
        <MarqueeRow
          items={STACK_ITEMS_ROW_1}
          direction="right"
          isPaused={isPaused}
          onHoverCard={setIsPaused}
        />
        <MarqueeRow
          items={STACK_ITEMS_ROW_2}
          reverseDelay
          isPaused={isPaused}
          onHoverCard={setIsPaused}
        />
      </div>
    </MotionSection>
  );
}
