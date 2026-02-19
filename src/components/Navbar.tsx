"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      setMenuOpen(false);
      // Small delay to let menu close animation start before scrolling
      setTimeout(() => {
        const element = document.getElementById(href.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 150);
    }
  };

  const navLinks: [string, string][] = [
    ["Services", "#services"],
    ["How It Works", "#process"],
    ["Case Studies", "#case-studies"],
    ["Credentials", "#credentials"],
    ["Pricing", "#pricing"],
    ["FAQ", "#faq"],
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
          scrolled
            ? "bg-[#0A0A0B]/95 backdrop-blur-md border-b border-[#2A2A30] shadow-lg shadow-black/30"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-18">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2.5 group shrink-0"
              onClick={() => setMenuOpen(false)}
            >
              {/* Claw icon — three curved talon marks */}
              <div className="w-9 h-9 rounded-xl bg-[#FF6B2B] flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg shadow-[#FF6B2B]/30">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Three claw marks */}
                  <path d="M7 4 C5 6 4 9 5 13 C6 16 8 18 8 21" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 3 C11 6 11 9 12 13 C13 16 13 18 12 21" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M17 4 C19 6 20 9 19 13 C18 16 16 18 16 21" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="font-black text-lg text-white tracking-tight">
                Claw <span className="text-[#FF6B2B]">AI Agency</span>
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-6 xl:gap-8">
              {navLinks.map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  onClick={(e) => handleNavClick(e, href)}
                  className="text-sm text-[#6B6B7A] hover:text-white transition-colors duration-200 relative group whitespace-nowrap"
                >
                  {label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FF6B2B] transition-all duration-300 group-hover:w-full rounded-full" />
                </a>
              ))}
            </div>

            {/* Desktop CTAs */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "#contact")}
                className="text-sm text-[#6B6B7A] hover:text-white transition-colors px-3 py-2"
              >
                Contact
              </a>
              <a
                href="https://wa.me/628113702343"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 bg-[#FF6B2B] hover:bg-[#E5521A] text-white text-sm font-bold rounded-xl transition-all duration-300 hover:scale-105 glow-orange-sm flex items-center gap-2 whitespace-nowrap"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp Us
              </a>
            </div>

            {/* Mobile hamburger */}
            <button
              className="lg:hidden relative w-10 h-10 flex items-center justify-center text-[#6B6B7A] hover:text-white transition-colors rounded-lg hover:bg-[#16161A] active:scale-95"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
            >
              <span className="sr-only">{menuOpen ? "Close menu" : "Open menu"}</span>
              <div className="w-5 h-4 flex flex-col justify-between">
                <span
                  className={`block h-0.5 bg-current rounded-full transition-all duration-300 origin-center ${
                    menuOpen ? "rotate-45 translate-y-[7px]" : ""
                  }`}
                />
                <span
                  className={`block h-0.5 bg-current rounded-full transition-all duration-300 ${
                    menuOpen ? "opacity-0 scale-x-0" : ""
                  }`}
                />
                <span
                  className={`block h-0.5 bg-current rounded-full transition-all duration-300 origin-center ${
                    menuOpen ? "-rotate-45 -translate-y-[7px]" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu — full-screen overlay */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-[#0A0A0B]/95 backdrop-blur-xl"
          onClick={() => setMenuOpen(false)}
        />

        {/* Menu panel — slides in from right */}
        <div
          className={`absolute top-0 right-0 h-full w-full max-w-sm bg-[#0A0A0B] border-l border-[#2A2A30] flex flex-col transition-transform duration-300 ease-out ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Panel header */}
          <div className="flex items-center justify-between px-6 h-16 border-b border-[#2A2A30]">
            <Link
              href="/"
              className="flex items-center gap-2.5"
              onClick={() => setMenuOpen(false)}
            >
              <div className="w-8 h-8 rounded-lg bg-[#FF6B2B] flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M7 4 C5 6 4 9 5 13 C6 16 8 18 8 21" stroke="white" strokeWidth="2.2" strokeLinecap="round"/>
                  <path d="M12 3 C11 6 11 9 12 13 C13 16 13 18 12 21" stroke="white" strokeWidth="2.2" strokeLinecap="round"/>
                  <path d="M17 4 C19 6 20 9 19 13 C18 16 16 18 16 21" stroke="white" strokeWidth="2.2" strokeLinecap="round"/>
                </svg>
              </div>
              <span className="font-black text-white">Claw <span className="text-[#FF6B2B]">AI Agency</span></span>
            </Link>
            <button
              onClick={() => setMenuOpen(false)}
              className="w-9 h-9 flex items-center justify-center text-[#6B6B7A] hover:text-white rounded-lg hover:bg-[#16161A] transition-colors"
              aria-label="Close menu"
            >
              <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
                <path d="M6 18L18 6M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
          </div>

          {/* Nav links */}
          <nav className="flex-1 overflow-y-auto px-4 py-6 space-y-1">
            {navLinks.map(([label, href], i) => (
              <a
                key={label}
                href={href}
                onClick={(e) => handleNavClick(e, href)}
                className="flex items-center justify-between px-4 py-3.5 rounded-xl text-[#E8E8F0] hover:text-white hover:bg-[#16161A] active:bg-[#1E1E24] transition-all duration-200 group"
                style={{ transitionDelay: menuOpen ? `${i * 40}ms` : "0ms" }}
              >
                <span className="font-medium text-base">{label}</span>
                <svg
                  width="16"
                  height="16"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="text-[#6B6B7A] group-hover:text-[#FF6B2B] group-hover:translate-x-1 transition-all duration-200"
                >
                  <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="flex items-center justify-between px-4 py-3.5 rounded-xl text-[#E8E8F0] hover:text-white hover:bg-[#16161A] active:bg-[#1E1E24] transition-all duration-200 group"
            >
              <span className="font-medium text-base">Contact</span>
              <svg width="16" height="16" fill="none" viewBox="0 0 24 24" className="text-[#6B6B7A] group-hover:text-[#FF6B2B] group-hover:translate-x-1 transition-all duration-200">
                <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </nav>

          {/* Bottom CTA */}
          <div className="px-4 pb-8 pt-4 border-t border-[#2A2A30] space-y-3">
            <a
              href="https://wa.me/628113702343?text=Hi%20Claw%2C%20I%27m%20interested%20in%20AI%20employee%20solutions%20for%20my%20business"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full py-4 bg-[#FF6B2B] hover:bg-[#E5521A] active:bg-[#CC4A18] text-white font-bold text-base rounded-xl transition-all duration-200 glow-orange"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Chat With Us on WhatsApp
            </a>
            <p className="text-center text-xs text-[#6B6B7A]">
              Average response time: 5 minutes
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
