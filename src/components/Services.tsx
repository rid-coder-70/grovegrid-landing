"use client";

import { motion } from "framer-motion";
import { GraduationCap, Newspaper, Pill, BookOpen, ShoppingBag, Layout } from "lucide-react";

const services = [
  {
    title: "School Systems",
    desc: "Complete digitalization of results, attendance, and student tracking. Stand out from other schools with a professional portal.",
    icon: <GraduationCap className="w-6 h-6 text-cyan-default" />,
    tags: ["LMS", "Automation", "SMS Alerts"]
  },
  {
    title: "Newspaper Portals",
    desc: "Ultra-fast digital news platforms optimized for mobile. Get higher retention than Facebook and maximize AdSense revenue.",
    icon: <Newspaper className="w-6 h-6 text-cyan-default" />,
    tags: ["SEO", "AdSense", "Speed"]
  },
  {
    title: "Pharma Management",
    desc: "Intelligent inventory for local pharmacies. Track expiry dates, manage stock levels, and eliminate financial loss from waste.",
    icon: <Pill className="w-6 h-6 text-cyan-default" />,
    tags: ["Inventory", "POS", "Analytics"]
  },
  {
    title: "Coaching Portals",
    desc: "Comprehensive management for coaching centers. Online exams, lecture sheet distribution, and automated parent notifications.",
    icon: <BookOpen className="w-6 h-6 text-cyan-default" />,
    tags: ["Online Exam", "Payments", "CRM"]
  },
  {
    title: "E-commerce Stores",
    desc: "Level up from F-commerce to a professional store. Automated checkout, payment gateway integration, and order tracking.",
    icon: <ShoppingBag className="w-6 h-6 text-cyan-default" />,
    tags: ["Payment Gateway", "Inventory", "UI/UX"]
  },
  {
    title: "Corporate Identity",
    desc: "Custom high-end websites for local businesses looking to build a premium brand presence in the digital landscape.",
    icon: <Layout className="w-6 h-6 text-cyan-default" />,
    tags: ["Branding", "Landing Page", "Performance"]
  }
];

export const Services = () => {
  return (
    <section id="services" className="py-20 sm:py-32 px-4 sm:px-6 relative z-10 max-w-7xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <span className="font-mono text-xs text-cyan-default uppercase tracking-widest border border-cyan-default/30 bg-cyan-default/10 px-3 py-1 mb-4 inline-block">
          Capabilities
        </span>
        <h2 className="font-syne text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tightest text-textMain">
          What We Build
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-panel border border-borderCol p-6 sm:p-8 glow-card"
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
