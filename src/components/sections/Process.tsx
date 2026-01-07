import { Reveal } from "@/components/ui/Reveal";

const steps = [
  { n: "01", t: "Strategy", d: "Goals, audience, content plan, and site map." },
  { n: "02", t: "Design", d: "Premium UI system, bento layouts, animations." },
  { n: "03", t: "Build", d: "Next.js + React engineering with best practices." },
  { n: "04", t: "Launch", d: "SEO, analytics, performance pass, go-live support." },
];

export default function Process() {
  return (
    <section id="process" className="container-pad py-16 sm:py-20">
      <Reveal>
        <div className="chip w-fit">How we work</div>
        <h2 className="h2 mt-3">A modern process that ships</h2>
        <p className="muted mt-2 max-w-2xl">
          Clear steps, weekly progress, and high-quality output.
        </p>
      </Reveal>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {steps.map((s, idx) => (
          <Reveal key={s.n} delay={idx * 0.05}>
            <div className="bento gradient-border">
              <div className="flex items-start justify-between">
                <div>
                  <div className="text-lg font-semibold">{s.t}</div>
                  <p className="text-sm text-white/70 mt-2">{s.d}</p>
                </div>
                <div className="text-sm font-semibold text-white/60">{s.n}</div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
