import { SERVICES } from "@/lib/site-data";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";

export default function Services() {
  return (
    <section id="services" className="container-pad py-16 sm:py-20">
      <Reveal>
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <div className="chip w-fit">What we do</div>
            <h2 className="h2 mt-3">Services built for modern brands</h2>
            <p className="muted mt-2 max-w-2xl">
              Premium UI + clean engineering: we design, build, and support websites
              and apps that scale.
            </p>
          </div>
          <a href="#contact" className="btn btn-primary">
            Request a quote
          </a>
        </div>
      </Reveal>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {SERVICES.map((s, idx) => (
          <Reveal key={s.title} delay={idx * 0.05}>
            <div className="bento gradient-border">
              <div className="flex items-center gap-3">
                <div className="size-10 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center">
                  <Icon name={s.icon} />
                </div>
                <div>
                  <div className="text-lg font-semibold">{s.title}</div>
                  <div className="text-sm text-white/70">{s.desc}</div>
                </div>
              </div>

              <ul className="mt-5 grid gap-2 text-sm text-white/75">
                {s.points.map((p) => (
                  <li key={p} className="flex items-center gap-2">
                    <span className="size-1.5 rounded-full bg-cyan-300/80" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
