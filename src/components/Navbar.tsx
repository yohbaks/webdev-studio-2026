"use client";

import { motion } from "framer-motion";
import { SITE } from "@/lib/site-data";

const links = [
  { href: "#services", label: "Services" },
  { href: "#work", label: "Work" },
  { href: "#process", label: "Process" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
];

export default function Navbar() {
  return (
    <div className="fixed top-0 z-50 w-full">
      <div className="container-pad pt-4">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="glass gradient-border rounded-2xl px-4 py-3"
        >
          <div className="flex items-center justify-between">
            <a href="#" className="flex items-center gap-3">
              <div className="size-9 rounded-xl bg-gradient-to-br from-violet-500 to-cyan-400" />
              <div className="leading-tight">
                <div className="text-sm font-semibold">{SITE.brand}</div>
                <div className="text-xs text-white/60">{SITE.tagline}</div>
              </div>
            </a>

            <nav className="hidden md:flex items-center gap-1">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="rounded-xl px-3 py-2 text-sm text-white/75 hover:text-white hover:bg-white/5 transition"
                >
                  {l.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <a href="#contact" className="btn hidden sm:inline-flex">
                Let’s Talk
              </a>
              <a href="#contact" className="btn btn-primary">
                Get a Quote
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
