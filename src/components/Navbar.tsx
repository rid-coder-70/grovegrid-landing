"use client";

import { useEffect, useState } from "react";

export const Navbar = () => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let current = "";
      const scrollY = window.pageYOffset;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (scrollY >= sectionTop - 250) {
          current = section.getAttribute("id") || "";
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 w-full z-50 bg-bg/80 backdrop-blur-md border-b border-borderCol transition-all duration-300 py-4">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="flex items-center gap-3 group z-10">
          <div className="w-3.5 h-3.5 bg-cyan-default transform rotate-45 group-hover:shadow-[0_0_10px_var(--cyan)] transition-shadow"></div>
          <span className="font-syne font-extrabold tracking-widest text-lg">SYNTHORIX</span>
        </a>

        <div className="hidden md:flex gap-8 items-center font-mono text-sm tracking-widest uppercase text-textMuted z-10">
          {[
            { name: "Services", id: "services" },
            { name: "Process", id: "how" },
            { name: "Results", id: "stats" },
            { name: "Clients", id: "testimonials" },
            { name: "Team", id: "team" },
            { name: "Contact", id: "contact" },
          ].map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`nav-link hover:text-cyan-default ${
                activeSection === item.id ? "text-cyan-default active" : ""
              }`}
            >
              {item.name}
            </a>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-6 z-10">
          <div className="flex items-center gap-2 text-xs font-mono text-textMuted uppercase">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            Now Accepting Clients
          </div>
          <a
            href="#contact"
            className="px-5 py-2 border border-cyan-default text-cyan-default font-mono text-xs uppercase tracking-widest hover:bg-cyan-default hover:text-bg transition-colors"
          >
            Get Started
          </a>
        </div>

        <div className="md:hidden text-cyan-default text-2xl z-10 cursor-pointer">≡</div>
      </div>
    </nav>
  );
};
