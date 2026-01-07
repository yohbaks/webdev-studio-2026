"use client";

import { useState } from "react";
import { FAQ } from "@/lib/site-data";
import { Reveal } from "@/components/ui/Reveal";
import { ChevronDown } from "lucide-react";

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="container-pad py-16 sm:py-20">
      <Reveal>
        <div className="chip w-fit">FAQ</div>
        <h2 className="h2 mt-3">Answers before you ask</h2>
        <p className="muted mt-2 max-w-2xl">
          Clear expectations, smooth delivery.
        </p>
      </Reveal>

      <div className="mt-8 grid gap-3">
        {FAQ.map((f, idx) => {
          const isOpen = open === idx;
          return (
            <div key={f.q} className="bento gradient-border">
              <button
                className="w-full flex items-center justify-between gap-4 text-left"
                onClick={() => setOpen(isOpen ? null : idx)}
              >
                <div className="text-base font-semibold">{f.q}</div>
                <ChevronDown className={`size-5 text-white/70 transition ${isOpen ? "rotate-180" : ""}`} />
              </button>
              {isOpen && (
                <div className="mt-3 text-sm text-white/70 leading-relaxed">
                  {f.a}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
