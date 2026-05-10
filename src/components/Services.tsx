"use client";

import { motion } from "framer-motion";
import { Code, RefreshCcw, Share2, Cloud, BarChart3, Cpu } from "lucide-react";

const services = [
  {
    title: "Web Development",
    desc: "High-performance, brutalist frontends and robust backends. We build scalable web applications that dominate their niches.",
    icon: <Code className="w-6 h-6 text-cyan-default" />,
    tags: ["React / Next", "Node"]
  },
  {
    title: "Workflow Automation",
    desc: "Eliminate manual data entry. We design automated pipelines that connect your operations, saving hundreds of human hours.",
    icon: <RefreshCcw className="w-6 h-6 text-cyan-default" />,
    tags: ["Zapier", "Make"]
  },
  {
    title: "API & Integration",
    desc: "Seamless data flow between distinct silos. We build and consume REST/GraphQL APIs to unify your fragmented software stack.",
    icon: <Share2 className="w-6 h-6 text-cyan-default" />,
    tags: ["REST", "GraphQL"]
  },
  {
    title: "Cloud & DevOps",
    desc: "Bulletproof infrastructure deployment. We handle Dockerization, CI/CD pipelines, and cloud hosting for ultimate uptime.",
    icon: <Cloud className="w-6 h-6 text-cyan-default" />,
    tags: ["AWS", "Docker"]
  },
  {
    title: "Data & Analytics",
    desc: "Turn raw noise into actionable signals. Custom dashboards, tracking implementations, and database architecture.",
    icon: <BarChart3 className="w-6 h-6 text-cyan-default" />,
    tags: ["PostgreSQL", "D3.js"]
  },
  {
    title: "AI Integration",
    desc: "Embed LLMs and machine learning directly into your products. From intelligent chat agents to autonomous text generation.",
    icon: <Cpu className="w-6 h-6 text-cyan-default" />,
    tags: ["OpenAI API", "RAG"]
  }
];

export const Services = () => {
  return (
    <section id="services" className="py-32 px-6 relative z-10 max-w-7xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <span className="font-mono text-xs text-cyan-default uppercase tracking-widest border border-cyan-default/30 bg-cyan-default/10 px-3 py-1 mb-4 inline-block">
          Capabilities
        </span>
        <h2 className="font-syne text-4xl md:text-5xl font-extrabold tracking-tightest text-textMain">
          What We Build
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-panel border border-borderCol p-8 glow-card"
          >
            <div className="w-12 h-12 border border-cyan-default/30 bg-cyan-default/5 flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(34,211,238,0.1)]">
              {service.icon}
            </div>
            <h3 className="font-syne text-2xl font-extrabold mb-3 text-textMain">{service.title}</h3>
            <p className="text-textMuted font-light text-sm mb-6 leading-relaxed">
              {service.desc}
            </p>
            <div className="flex flex-wrap gap-2 font-mono text-[10px] text-textMuted uppercase">
              {service.tags.map((tag, i) => (
                <span key={i} className="bg-bg border border-borderCol px-2 py-1">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
