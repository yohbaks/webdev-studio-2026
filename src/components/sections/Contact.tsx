"use client";

import { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { SITE } from "@/lib/site-data";

export default function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="container-pad py-16 sm:py-20">
      <Reveal>
        <div className="bento gradient-border">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="chip w-fit">Start a project</div>
              <h2 className="h2 mt-3">Tell us what you want to build</h2>
              <p className="muted mt-2 max-w-xl">
                We’ll reply with a short plan + pricing range. Email us at{" "}
                <a className="text-white underline underline-offset-4" href={`mailto:${SITE.email}`}>
                  {SITE.email}
                </a>
                .
              </p>

              <div className="mt-6 grid gap-3 text-sm text-white/75">
                <div>✅ Modern 2026 UI / animations</div>
                <div>✅ Performance + SEO-first</div>
                <div>✅ Optional maintenance plans</div>
              </div>
            </div>

            <div className="glass rounded-3xl p-6 border border-white/10">
              {sent ? (
                <div>
                  <div className="text-lg font-semibold">Message sent ✅</div>
                  <p className="text-sm text-white/70 mt-2">
                    Replace this with your real backend (Email, Formspree, etc.).
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSent(true);
                  }}
                  className="grid gap-3"
                >
                  <input
                    className="rounded-2xl bg-white/5 border border-white/10 px-4 py-3 text-sm outline-none focus:border-white/25"
                    placeholder="Name"
                    required
                  />
                  <input
                    className="rounded-2xl bg-white/5 border border-white/10 px-4 py-3 text-sm outline-none focus:border-white/25"
                    placeholder="Email"
                    type="email"
                    required
                  />
                  <input
                    className="rounded-2xl bg-white/5 border border-white/10 px-4 py-3 text-sm outline-none focus:border-white/25"
                    placeholder="Company / Project"
                  />
                  <textarea
                    className="min-h-[120px] rounded-2xl bg-white/5 border border-white/10 px-4 py-3 text-sm outline-none focus:border-white/25"
                    placeholder="What do you want to build?"
                    required
                  />
                  <button className="btn btn-primary w-full justify-center" type="submit">
                    Send Inquiry
                  </button>
                  <p className="text-xs text-white/50">
                    This demo form is frontend-only. Plug in your preferred email API.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
