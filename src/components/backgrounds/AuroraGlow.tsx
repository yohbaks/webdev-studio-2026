"use client";

import { motion } from "framer-motion";

export default function AuroraGlow() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute -top-40 left-1/2 h-[520px] w-[900px] -translate-x-1/2 rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle at 30% 30%, rgba(120,90,255,0.55), transparent 55%), radial-gradient(circle at 70% 40%, rgba(0,240,255,0.35), transparent 55%), radial-gradient(circle at 50% 70%, rgba(255,0,130,0.22), transparent 60%)",
        }}
        animate={{ y: [0, 22, 0], opacity: [0.9, 0.75, 0.9] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-48 left-1/3 h-[520px] w-[800px] -translate-x-1/2 rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle at 40% 40%, rgba(0,240,255,0.25), transparent 55%), radial-gradient(circle at 60% 45%, rgba(120,90,255,0.25), transparent 55%)",
        }}
        animate={{ y: [0, -18, 0], opacity: [0.7, 0.85, 0.7] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
