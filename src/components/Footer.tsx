import { SITE, STACK } from "@/lib/site-data";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-white/10">
      <div className="container-pad py-10">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="text-lg font-semibold">{SITE.brand}</div>
            <p className="muted mt-2 max-w-sm">
              Modern websites & web apps built for speed, SEO, and premium design.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {STACK.slice(0, 6).map((s) => (
                <span key={s} className="chip">
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div>
            <div className="text-sm font-semibold text-white/90">Quick Links</div>
            <div className="mt-3 grid gap-2 text-sm text-white/75">
              <a href="#services" className="hover:text-white">Services</a>
              <a href="#work" className="hover:text-white">Work</a>
              <a href="#pricing" className="hover:text-white">Pricing</a>
              <a href="#faq" className="hover:text-white">FAQ</a>
            </div>
          </div>

          <div>
            <div className="text-sm font-semibold text-white/90">Contact</div>
            <div className="mt-3 grid gap-2 text-sm text-white/75">
              <div>{SITE.location}</div>
              <a className="hover:text-white" href={`mailto:${SITE.email}`}>
                {SITE.email}
              </a>
              <a href="#contact" className="btn btn-primary mt-2 w-fit">
                Start a Project
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between text-xs text-white/50">
          <div>© {new Date().getFullYear()} {SITE.brand}. All rights reserved.</div>
          <div>Built with Next.js + React.</div>
        </div>
      </div>
    </footer>
  );
}
