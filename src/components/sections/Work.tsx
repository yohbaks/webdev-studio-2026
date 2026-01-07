import Image from "next/image";
import { CASES } from "@/lib/site-data";
import { Reveal } from "@/components/ui/Reveal";

export default function Work() {
  return (
    <section id="work" className="container-pad py-16 sm:py-20">
      <Reveal>
        <div className="chip w-fit">Selected work</div>
        <h2 className="h2 mt-3">Results-focused builds</h2>
        <p className="muted mt-2 max-w-2xl">
          Case-study style examples with performance + UX improvements.
        </p>
      </Reveal>

      <div className="mt-8 grid gap-5 lg:grid-cols-3">
        {CASES.map((c, idx) => (
          <Reveal key={c.title} delay={idx * 0.07}>
            <div className="bento gradient-border overflow-hidden p-0">
              <div className="relative h-44 w-full">
                <Image
                  alt={c.title}
                  src={c.image}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
                <div className="absolute left-4 bottom-4">
                  <span className="chip">{c.tag}</span>
                </div>
              </div>

              <div className="p-6">
                <div className="text-lg font-semibold">{c.title}</div>
                <p className="text-sm text-white/70 mt-2">{c.desc}</p>

                <div className="mt-4 grid gap-2 text-sm text-white/75">
                  {c.stats.map((s) => (
                    <div key={s} className="flex items-center gap-2">
                      <span className="size-1.5 rounded-full bg-violet-400/90" />
                      {s}
                    </div>
                  ))}
                </div>

                <a href="#contact" className="btn mt-6 w-full justify-center">
                  Build something like this
                </a>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
