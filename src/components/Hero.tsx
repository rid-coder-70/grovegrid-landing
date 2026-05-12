"use client";

import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <header className="relative min-h-screen flex flex-col items-center justify-center pt-20 sm:pt-24 pb-8 sm:pb-12 overflow-hidden z-10 px-4 sm:px-6 text-center">
      <div className="grid-overlay" />
      <div className="grid-dots" />
      <div className="grid-perspective" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 max-w-4xl mx-auto flex flex-col items-center"
      >
        <div className="inline-block border border-borderCol bg-panel px-3 sm:px-4 py-1.5 mb-6 sm:mb-8 font-mono text-[10px] sm:text-xs text-textMuted uppercase tracking-widest">
          v1.0 — Launch Day, May 10 2026
        </div>

        <h1 className="font-syne font-extrabold text-3xl sm:text-5xl md:text-7xl lg:text-8xl tracking-tightest leading-[1.1] mb-4 sm:mb-6 text-textMain">
          We Build the Web.<br />
          <span className="text-cyan-default text-glow">We Automate the Rest.</span>
        </h1>

        <p className="font-inter font-light text-sm sm:text-lg md:text-xl text-textMuted max-w-2xl mb-8 sm:mb-10 leading-relaxed">
          Synthorix architects premium digital experiences and automated systems for the next generation of Bangladeshi industries. From schools to e-commerce, we transform raw potential into technical dominance.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-10 sm:mb-16 w-full sm:w-auto">
          <a
            href="#contact"
            className="px-6 sm:px-8 py-3 sm:py-4 bg-cyan-default text-bg font-mono font-bold text-xs sm:text-sm uppercase tracking-widest hover:bg-white transition-colors flex items-center justify-center gap-2"
          >
            Launch Your Project <span>&rarr;</span>
          </a>
          <a
            href="#services"
            className="px-6 sm:px-8 py-3 sm:py-4 border border-borderCol bg-panel text-textMain font-mono text-xs sm:text-sm uppercase tracking-widest hover:border-cyan-default hover:text-cyan-default transition-colors"
          >
            Explore Services
          </a>
        </div>

        <div className="w-full max-w-2xl text-left bg-panel border border-borderCol rounded shadow-2xl overflow-hidden">
          <div className="border-b border-borderCol bg-bg px-4 py-2 flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-borderCol"></div>
            <div className="w-3 h-3 rounded-full bg-borderCol"></div>
            <div className="w-3 h-3 rounded-full bg-borderCol"></div>
            <div className="ml-4 font-mono text-[10px] text-textMuted">sys@synthorix:~</div>
          </div>
          <div className="p-4 sm:p-6 font-mono text-[11px] sm:text-sm leading-loose overflow-x-auto">
            <span className="text-cyan-default">$</span> synthorix init --project &quot;startup&quot;<br />
            <span className="text-textMuted">{`> Analyzing requirements... done.`}</span><br />
            <span className="text-textMuted">{`> Scaffolding Next.js & Tailwind... done.`}</span><br />
            <span className="text-textMuted">{`> Wiring automation endpoints... done.`}</span><br />
            <span className="text-green-400">Success! Project deployed.</span><br />
            <span className="text-cyan-default">$</span> <span className="cursor-blink">_</span>
          </div>
        </div>
      </motion.div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 z-10">
        <span className="font-mono text-[10px] tracking-widest uppercase">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-cyan-default to-transparent"></div>
      </div>
    </header>
  );
};
