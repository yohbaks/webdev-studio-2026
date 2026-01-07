import { STACK } from "@/lib/site-data";

export default function Marquee() {
  const items = [...STACK, ...STACK];

  return (
    <div className="overflow-hidden border-y border-white/10 bg-white/5">
      <div className="marquee py-4">
        <div className="flex w-1/2 items-center gap-4 px-6">
          {items.slice(0, items.length / 2).map((x, i) => (
            <span key={i} className="chip">
              {x}
            </span>
          ))}
        </div>
        <div className="flex w-1/2 items-center gap-4 px-6">
          {items.slice(0, items.length / 2).map((x, i) => (
            <span key={`b-${i}`} className="chip">
              {x}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
