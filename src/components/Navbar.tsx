"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    
    // Add smooth scroll behavior
    document.documentElement.style.scrollBehavior = "smooth";
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  // Handle smooth scroll for anchor links
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const element = document.getElementById(href.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        setMenuOpen(false);
      }
    }
  };

  const navLinks = [
    ["Services", "#services"],
    ["Architecture", "#architecture"],
    ["Case Studies", "#case-studies"],
    ["Pricing", "#pricing"],
    ["FAQ", "#faq"],
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        scrolled
          ? "bg-[#0A0A0B]/95 backdrop-blur-md border-b border-[#2A2A30] shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center gap-2 group"
            onClick={() => setMenuOpen(false)}
          >
            <div className="w-8 h-8 rounded-lg bg-[#FF6B2B] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 2L4 7v10l8 5 8-5V7L12 2z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 2v20M4 7l8 5 8-5"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <span className="font-bold text-lg text-white">
              OpenClaw<span className="text-[#FF6B2B]">AI Agency</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(([label, href]) => (
              <a
                key={label}
                href={href}
                onClick={(e) => handleNavClick(e, href)}
                className="text-sm text-[#6B6B7A] hover:text-white transition-colors duration-200 relative group"
              >
                {label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FF6B2B] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="text-sm text-[#6B6B7A] hover:text-white transition-colors"
            >
              Contact
            </a>
            <a
              href="#deploy"
              onClick={(e) => handleNavClick(e, "#deploy")}
              className="px-4 py-2 bg-[#FF6B2B] hover:bg-[#E5521A] text-white text-sm font-semibold rounded-lg transition-all duration-300 hover:scale-105 glow-orange-sm"
            >
              Deploy My Agent →
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-[#6B6B7A] hover:text-white transition-colors p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24" className="transition-transform duration-300">
              {menuOpen ? (
                <path
                  d="M6 18L18 6M6 6l12 12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              ) : (
                <path
                  d="M4 6h16M4 12h16M4 18h16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        <div 
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="py-4 border-t border-[#2A2A30] space-y-1">
            {navLinks.map(([label, href]) => (
              <a
                key={label}
                href={href}
                onClick={(e) => handleNavClick(e, href)}
                className="block text-sm text-[#6B6B7A] hover:text-white transition-colors py-2 px-2 rounded-lg hover:bg-[#16161A]"
              >
                {label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="block text-sm text-[#6B6B7A] hover:text-white transition-colors py-2 px-2 rounded-lg hover:bg-[#16161A]"
            >
              Contact
            </a>
            <a
              href="#deploy"
              onClick={(e) => handleNavClick(e, "#deploy")}
              className="block w-full text-center px-4 py-2 bg-[#FF6B2B] text-white text-sm font-semibold rounded-lg mt-2 hover:bg-[#E5521A] transition-colors"
            >
              Deploy My Agent →
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
