"use client";

import { motion } from "framer-motion";

const stats = [
  { label: "Projects Shipped", value: "50+" },
  { label: "Prototype Time", value: "<48h" },
  { label: "Execution Speed", value: "10x" },
  { label: "TypeScript", value: "100%" }
];

export const Stats = () => {
  return (
    <section id="stats" className="py-16 sm:py-24 relative overflow-hidden z-10">
      <div className="grid-overlay" />
      <div className="grid-dots" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 text-center relative z-10">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="font-mono text-3xl sm:text-5xl md:text-6xl text-cyan-default mb-2">{stat.value}</div>
            <div className="font-syne uppercase tracking-widest text-textMuted text-xs sm:text-sm font-bold">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
