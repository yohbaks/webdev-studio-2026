import { PRICING } from "@/lib/site-data";
import { Reveal } from "@/components/ui/Reveal";

export default function Pricing() {
  return (
    <section id="pricing" className="container-pad py-16 sm:py-20">
      <Reveal>
        <div className="chip w-fit">Pricing</div>
        <h2 className="h2 mt-3">Clear packages (custom-friendly)</h2>
        <p className="muted mt-2 max-w-2xl">
          Start with a package, then we tailor it based on your scope.
        </p>
      </Reveal>

      <div className="mt-8 grid gap-5 lg:grid-cols-3">
        {PRICING.map((p, idx) => (
          <Reveal key={p.name} delay={idx * 0.06}>
            <div className={`bento gradient-border ${p.highlight ? "ring-1 ring-violet-400/40" : ""}`}>
              <div className="flex items-start justify-between">
                <div>
                  <div className="text-lg font-semibold">{p.name}</div>
                  <div className="text-sm text-white/70 mt-1">{p.desc}</div>
                </div>
                {p.highlight && <span className="chip">Most Popular</span>}
              </div>

              <div className="mt-6 text-3xl font-semibold">{p.price}</div>
              <div className="mt-5 grid gap-2 text-sm text-white/75">
                {p.features.map((f) => (
                  <div key={f} className="flex items-center gap-2">
                    <span className="size-1.5 rounded-full bg-cyan-300/80" />
                    {f}
                  </div>
                ))}
              </div>

              <a href="#contact" className={`btn mt-7 w-full justify-center ${p.highlight ? "btn-primary" : ""}`}>
                Get {p.name}
              </a>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
