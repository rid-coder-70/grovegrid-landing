"use client";

import { useEffect, useState } from "react";

const navItems = [
  { name: "Services", id: "services" },
  { name: "Process", id: "how" },
  { name: "Results", id: "stats" },
  { name: "Clients", id: "testimonials" },
  { name: "Team", id: "team" },
  { name: "Contact", id: "contact" },
];

export const Navbar = () => {
  const [activeSection, setActiveSection] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);

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

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleNavClick = () => {
    setMobileOpen(false);
  };

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-bg/80 backdrop-blur-md border-b border-borderCol transition-all duration-300 py-3 sm:py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center">
          <a href="#" className="flex items-center gap-2 sm:gap-3 group z-10">
            <div className="w-3 h-3 sm:w-3.5 sm:h-3.5 bg-cyan-default transform rotate-45 group-hover:shadow-[0_0_10px_var(--cyan)] transition-shadow"></div>
            <span className="font-syne font-extrabold tracking-widest text-base sm:text-lg">SYNTHORIX</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-6 lg:gap-8 items-center font-mono text-xs lg:text-sm tracking-widest uppercase text-textMuted z-10">
            {navItems.map((item) => (
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

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden z-[110] relative w-8 h-8 flex flex-col items-center justify-center gap-1.5 text-cyan-default"
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-0.5 bg-cyan-default transition-all duration-300 ${
                mobileOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-cyan-default transition-all duration-300 ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-cyan-default transition-all duration-300 ${
                mobileOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay - rendered outside nav to avoid stacking context issues */}
      <div
        className={`fixed inset-0 bg-bg z-[100] md:hidden flex flex-col items-center justify-center transition-all duration-300 ${
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center gap-6">
          {navItems.map((item, index) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={handleNavClick}
              className={`font-mono text-lg sm:text-xl uppercase tracking-widest transition-colors ${
                activeSection === item.id
                  ? "text-cyan-default"
                  : "text-textMuted hover:text-cyan-default"
              }`}
              style={{
                transitionDelay: mobileOpen ? `${index * 60}ms` : "0ms",
                opacity: mobileOpen ? 1 : 0,
                transform: mobileOpen ? "translateY(0)" : "translateY(10px)",
                transition: `opacity 0.3s ease ${mobileOpen ? index * 60 : 0}ms, transform 0.3s ease ${mobileOpen ? index * 60 : 0}ms, color 0.3s ease`,
              }}
            >
              {item.name}
            </a>
          ))}

          <div
            className="mt-6 flex flex-col items-center gap-4"
            style={{
              opacity: mobileOpen ? 1 : 0,
              transform: mobileOpen ? "translateY(0)" : "translateY(10px)",
              transition: `opacity 0.3s ease ${mobileOpen ? 400 : 0}ms, transform 0.3s ease ${mobileOpen ? 400 : 0}ms`,
            }}
          >
            <div className="flex items-center gap-2 text-xs font-mono text-textMuted uppercase">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              Now Accepting Clients
            </div>
            <a
              href="#contact"
              onClick={handleNavClick}
              className="px-8 py-3 border border-cyan-default text-cyan-default font-mono text-sm uppercase tracking-widest hover:bg-cyan-default hover:text-bg transition-colors"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
