"use client";

import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Discovery",
    desc: "We strip your idea down to the studs. Identify bottlenecks, define the target audience, and set brutal goals."
  },
  {
    num: "02",
    title: "Scope & Plan",
    desc: "Architectural blueprinting. We map out the data structures, tech stack, and API endpoints before writing a single line of code."
  },
  {
    num: "03",
    title: "Build & Review",
    desc: "Aggressive iteration cycles. We build fast, deploy to staging, and collaborate continuously until the product is airtight."
  },
  {
    num: "04",
    title: "Launch & Scale",
    desc: "Production deployment, monitoring, and hand-off. Once live, we implement automated scaling to handle incoming traffic."
  }
];

export const HowItWorks = () => {
  return (
    <section id="how" className="py-32 bg-panel border-y border-borderCol relative z-10 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center md:text-left"
        >
          <span className="font-mono text-xs text-cyan-default uppercase tracking-widest border border-cyan-default/30 bg-cyan-default/10 px-3 py-1 mb-4 inline-block">
            Methodology
          </span>
          <h2 className="font-syne text-4xl md:text-5xl font-extrabold tracking-tightest text-textMain">
            How We Work
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="w-16 h-16 border border-cyan-default flex items-center justify-center font-mono text-2xl text-cyan-default mb-6">
                {step.num}
              </div>
              <h4 className="font-syne text-xl font-bold mb-3 text-textMain">{step.title}</h4>
              <p className="text-textMuted text-sm font-light leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
