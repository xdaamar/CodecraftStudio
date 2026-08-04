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

function MarqueeRow({
  items,
  reverseDelay = false,
}: {
  items: StackItem[];
  reverseDelay?: boolean;
}) {
  const duplicated = [...items, ...items, ...items, ...items];

  return (
    <div
      className={`flex w-max animate-marquee items-center gap-4 ${
        reverseDelay ? '[animation-delay:-17s]' : ''
      }`}
    >
      {duplicated.map((item, idx) => (
        <div
          key={`${item.name}-${idx}`}
          className="inline-flex shrink-0 items-center justify-center gap-2.5 rounded-full border border-black/5 bg-white px-6 py-3 text-base font-semibold text-text shadow-2xs"
        >
          <StackIcon name={item.name} />
          <span>{item.name}</span>
        </div>
      ))}
    </div>
  );
}

export function StackMarquee() {
  return (
    <section
      aria-label="Tech Stack"
      className="w-full overflow-hidden border-y border-border-light bg-surface py-10"
    >
      <div className="flex flex-col gap-4">
        <MarqueeRow items={STACK_ITEMS_ROW_1} />
        <MarqueeRow items={STACK_ITEMS_ROW_2} reverseDelay />
      </div>
    </section>
  );
}
