"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import ParticlesCanvas from "@/components/backgrounds/ParticlesCanvas";
import AuroraGlow from "@/components/backgrounds/AuroraGlow";
import { SITE } from "@/lib/site-data";

export default function Hero() {
  return (
    <section className="relative pt-28">
      <div className="relative">
        <div className="absolute inset-0">
          <ParticlesCanvas />
          <AuroraGlow />
        </div>

        <div className="container-pad relative py-16 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="chip">2026-ready UI</span>
                <span className="chip">Next.js + React</span>
                <span className="chip">Speed + SEO</span>
              </div>

              <motion.h1
                initial={{ opacity: 0, y: 18, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="h1 mt-5"
              >
                Build a website that feels{" "}
                <span className="bg-gradient-to-r from-violet-400 to-cyan-300 bg-clip-text text-transparent">
                  premium
                </span>{" "}
                — and converts.
              </motion.h1>

              <p className="muted mt-4 max-w-xl text-base sm:text-lg leading-relaxed">
                {SITE.brand} designs and develops modern websites and web apps with
                high-end motion, crisp visuals, and performance-first engineering.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <a href="#contact" className="btn btn-primary">
                  Get a Proposal
                </a>
                <a href="#work" className="btn">
                  View Work
                </a>
              </div>

              <div className="mt-8 grid grid-cols-3 gap-3 max-w-md">
                <div className="glass rounded-2xl p-4">
                  <div className="text-xl font-semibold">1.9s</div>
                  <div className="text-xs text-white/60 mt-1">Target LCP</div>
                </div>
                <div className="glass rounded-2xl p-4">
                  <div className="text-xl font-semibold">A+</div>
                  <div className="text-xs text-white/60 mt-1">UX polish</div>
                </div>
                <div className="glass rounded-2xl p-4">
                  <div className="text-xl font-semibold">SEO</div>
                  <div className="text-xs text-white/60 mt-1">Structured</div>
                </div>
              </div>
            </div>

            {/* “stack photos being used” */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="grid-bento"
            >
              <div className="bento col-span-12 md:col-span-7 gradient-border">
                <div className="bento-title">Design that moves</div>
                <p className="bento-sub mt-2">
                  Smooth scroll reveals, bento layouts, micro-interactions—built with React.
                </p>
                <div className="mt-4 overflow-hidden rounded-2xl border border-white/10">
                  <Image
                    alt="Team collaborating"
                    src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80"
                    width={1200}
                    height={800}
                    className="h-48 w-full object-cover"
                    priority
                  />
                </div>
              </div>

              <div className="bento col-span-12 md:col-span-5">
                <div className="bento-title">Stack-friendly</div>
                <p className="bento-sub mt-2">
                  Next.js, WordPress, Shopify, APIs—choose what fits your business.
                </p>
                <div className="mt-4 overflow-hidden rounded-2xl border border-white/10">
                  <Image
                    alt="Code on screen"
                    src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1600&q=80"
                    width={1200}
                    height={800}
                    className="h-48 w-full object-cover"
                  />
                </div>
              </div>

              <div className="bento col-span-12 md:col-span-6">
                <div className="bento-title">Speed + SEO</div>
                <p className="bento-sub mt-2">
                  Built for Core Web Vitals, metadata, and clean structure.
                </p>
              </div>

              <div className="bento col-span-12 md:col-span-6">
                <div className="bento-title">Care plans</div>
                <p className="bento-sub mt-2">
                  Updates, backups, security, ongoing improvements.
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent" />
      </div>
    </section>
  );
}
