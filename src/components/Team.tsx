"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon, FacebookIcon } from "@/components/Icons";
import Image from "next/image";

export const Team = () => {
  return (
    <section id="team" className="py-32 px-6 relative z-10 max-w-7xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 text-center"
      >
        <span className="font-mono text-xs text-cyan-default uppercase tracking-widest border border-cyan-default/30 bg-cyan-default/10 px-3 py-1 mb-4 inline-block">
          Leadership
        </span>
        <h2 className="font-syne text-4xl md:text-5xl font-extrabold tracking-tightest text-textMain">
          The Mind Behind Synthorix
        </h2>
      </motion.div>

      <div className="flex justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="group relative max-w-md w-full"
        >
          {/* Decorative Background Element */}
          <div className="absolute -inset-4 bg-cyan-default/5 border border-cyan-default/10 -z-10 blur-xl group-hover:bg-cyan-default/10 transition-all duration-500"></div>
          
          <div className="bg-panel border border-borderCol p-8 relative overflow-hidden">
            {/* Corner Accents */}
            <div className="absolute top-0 right-0 w-16 h-16 bg-cyan-default/5 flex items-center justify-center border-l border-b border-borderCol">
              <span className="font-mono text-[10px] text-cyan-default rotate-45">FOUNDER</span>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="relative w-32 h-32 md:w-40 md:h-40 shrink-0">
                <div className="absolute inset-0 border-2 border-cyan-default translate-x-2 translate-y-2 z-0"></div>
                <div className="relative z-10 w-full h-full bg-bg border border-borderCol overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500">
                  <Image 
                    src="/profile.jpg" 
                    alt="Founder" 
                    width={400}
                    height={400}
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="text-center md:text-left">
                <h3 className="font-syne text-3xl font-extrabold text-textMain mb-1">Ridoy Baidya</h3>
                <p className="font-mono text-xs text-cyan-default uppercase tracking-widest mb-4">Founder & CEO</p>
                
                <p className="text-textMuted text-sm leading-relaxed mb-4">
                 I am a Full-Stack Web Developer from Sylhet, Bangladesh. I specialize in building robust and scalable web applications using modern technologies. My focus is on creating seamless user experiences with clean, efficient code.
                </p>

                <div className="flex items-center gap-2 mb-6 font-mono text-[10px] text-cyan-default/80">
                  <div className="w-1.5 h-1.5 bg-cyan-default rounded-full"></div>
                  <span>3RD YEAR CSE @ SUST</span>
                </div>

                <div className="flex justify-center md:justify-start gap-4">
                  <a href="https://github.com/rid-coder-70" className="text-textMuted hover:text-cyan-default transition-colors">
                    <GithubIcon className="w-5 h-5" />
                  </a>
                  <a href="https://www.linkedin.com/in/ridoy-baidya" className="text-textMuted hover:text-cyan-default transition-colors">
                    <LinkedinIcon className="w-5 h-5" />
                  </a>
                  <a href="https://www.facebook.com/ridoy.baiday.5" className="text-textMuted hover:text-cyan-default transition-colors">
                    <FacebookIcon className="w-5 h-5" />
                  </a>
                  <a href="https://ridoy-baidya.vercel.app" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-xs font-mono text-cyan-default hover:text-white transition-colors border-l border-borderCol pl-4 ml-2">
                    PORTFOLIO <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
