"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "Synthorix didn't just build our app; they automated our entire lead qualification pipeline. We reduced manual overhead by 80% in the first month.",
    author: "Marcus Reed",
    role: "Founder, NovaFlow",
    initials: "MR"
  },
  {
    quote: "The UI is incredibly sharp, and the backend is rock solid. They migrated us off a messy legacy system into a clean Next.js architecture seamlessly.",
    author: "Sarah Lin",
    role: "CTO, DataSyndicate",
    initials: "SL"
  },
  {
    quote: "Fast. Aggressive problem solvers. They integrated OpenAI into our customer service portal in under two weeks. Pure technical execution.",
    author: "James Vance",
    role: "VP Engineering, Aethos",
    initials: "JD"
  }
];

export const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 sm:py-32 px-4 sm:px-6 relative z-10 max-w-7xl mx-auto border-t border-borderCol">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 flex flex-col items-center text-center"
      >
        <span className="font-mono text-xs text-cyan-default uppercase tracking-widest border border-cyan-default/30 bg-cyan-default/10 px-3 py-1 mb-4 inline-block">
          Proof
        </span>
        <h2 className="font-syne text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tightest text-textMain">
          Client Results
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
        {testimonials.map((t, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-panel border border-borderCol p-6 sm:p-8 glow-card"
          >
            <div className="flex gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-cyan-default fill-cyan-default" />
              ))}
            </div>
            <p className="italic text-textMuted text-sm mb-8 leading-relaxed">
              "{t.quote}"
            </p>
            <div className="flex items-center gap-4 border-t border-borderCol pt-4">
              <div className="w-10 h-10 rounded-full bg-borderCol flex items-center justify-center font-mono text-xs font-bold text-cyan-default">
                {t.initials}
              </div>
              <div>
                <div className="font-syne font-bold text-sm text-textMain">{t.author}</div>
                <div className="font-mono text-[10px] text-textMuted uppercase">{t.role}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
