"use client";

import Link from "next/link";
import { Twitter, Linkedin, Instagram, MessageCircle, Mail, MapPin, Clock, Zap } from "lucide-react";

export default function Footer() {
  return (
    <footer id="footer" className="bg-[#0A0A0B] border-t border-[#2A2A30]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Column 1 — Brand */}
          <div className="flex flex-col gap-5">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#FF6B2B] rounded-lg flex items-center justify-center flex-shrink-0">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M12 2L14.5 7H21L16 11L18 17L12 13.5L6 17L8 11L3 7H9.5L12 2Z"
                    fill="white"
                    stroke="white"
                    strokeWidth="0.5"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div>
                <span className="text-xl font-bold text-white">Claw</span>
                <span className="text-xl font-bold text-[#FF6B2B] ml-1">AI Agency</span>
              </div>
            </div>

            {/* Tagline */}
            <p className="text-[#6B6B7A] text-sm leading-relaxed">
              Custom AI employee solutions for businesses worldwide. Headquartered in Canggu, Bali, Indonesia.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              <a
                href="https://twitter.com/clawagency"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="w-9 h-9 rounded-lg bg-[#16161A] border border-[#2A2A30] flex items-center justify-center text-[#6B6B7A] hover:text-[#FF6B2B] hover:border-[#FF6B2B] transition-colors duration-200"
              >
                <Twitter size={16} />
              </a>
              <a
                href="https://linkedin.com/company/clawagency"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-lg bg-[#16161A] border border-[#2A2A30] flex items-center justify-center text-[#6B6B7A] hover:text-[#FF6B2B] hover:border-[#FF6B2B] transition-colors duration-200"
              >
                <Linkedin size={16} />
              </a>
              <a
                href="https://instagram.com/clawagency"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-lg bg-[#16161A] border border-[#2A2A30] flex items-center justify-center text-[#6B6B7A] hover:text-[#FF6B2B] hover:border-[#FF6B2B] transition-colors duration-200"
              >
                <Instagram size={16} />
              </a>
            </div>
          </div>

          {/* Column 2 — Services */}
          <div className="flex flex-col gap-4">
            <h3 className="text-[#E8E8F0] font-semibold text-sm uppercase tracking-wider">Services</h3>
            <ul className="flex flex-col gap-2.5">
              {[
                "AI Employee Solutions",
                "Need Assessment",
                "System Configuration",
                "Omnichannel Setup",
                "Integration Services",
                "24/7 Operations",
                "Training & Support",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#services"
                    className="text-[#6B6B7A] text-sm hover:text-[#FF6B2B] transition-colors duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Company */}
          <div className="flex flex-col gap-4">
            <h3 className="text-[#E8E8F0] font-semibold text-sm uppercase tracking-wider">Company</h3>
            <ul className="flex flex-col gap-2.5">
              {[
                { label: "How It Works", href: "#process" },
                { label: "Case Studies", href: "#case-studies" },
                { label: "Credentials", href: "#credentials" },
                { label: "Pricing", href: "#pricing" },
                { label: "FAQ", href: "#faq" },
                { label: "Privacy Policy", href: "/privacy" },
                { label: "Terms of Service", href: "/terms" },
              ].map((item) => (
                <li key={item.label}>
                  {item.href.startsWith("/") ? (
                    <Link
                      href={item.href}
                      className="text-[#6B6B7A] text-sm hover:text-[#FF6B2B] transition-colors duration-200"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <a
                      href={item.href}
                      className="text-[#6B6B7A] text-sm hover:text-[#FF6B2B] transition-colors duration-200"
                    >
                      {item.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Contact */}
          <div className="flex flex-col gap-4">
            <h3 className="text-[#E8E8F0] font-semibold text-sm uppercase tracking-wider">Contact</h3>

            {/* WhatsApp — Prominent */}
            <a
              href="https://wa.me/628113702343"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-[#16161A] border border-[#2A2A30] hover:border-[#25D366] rounded-xl p-3.5 group transition-colors duration-200"
            >
              <div className="w-10 h-10 rounded-lg bg-[#25D366]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#25D366]/20 transition-colors duration-200">
                <MessageCircle size={20} className="text-[#25D366]" />
              </div>
              <div>
                <p className="text-xs text-[#6B6B7A] mb-0.5">WhatsApp</p>
                <p className="text-[#E8E8F0] font-semibold text-base leading-tight">+62 811-3702-343</p>
              </div>
            </a>

            {/* Email */}
            <div className="flex items-center gap-3">
              <Mail size={16} className="text-[#6B6B7A] flex-shrink-0" />
              <a
                href="mailto:hello@claw.agency"
                className="text-[#6B6B7A] text-sm hover:text-[#FF6B2B] transition-colors duration-200"
              >
                hello@claw.agency
              </a>
            </div>

            {/* Location */}
            <div className="flex items-center gap-3">
              <MapPin size={16} className="text-[#6B6B7A] flex-shrink-0" />
              <span className="text-[#6B6B7A] text-sm">Canggu, Bali, Indonesia</span>
            </div>

            {/* Hours */}
            <div className="flex items-center gap-3">
              <Clock size={16} className="text-[#6B6B7A] flex-shrink-0" />
              <span className="text-[#6B6B7A] text-sm">Available globally, all time zones</span>
            </div>

            {/* Availability Box */}
            <div className="flex items-center gap-2.5 bg-[#FF6B2B]/10 border border-[#FF6B2B]/20 rounded-lg px-3.5 py-2.5 mt-1">
              <span className="relative flex h-2.5 w-2.5 flex-shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF6B2B] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#FF6B2B]"></span>
              </span>
              <span className="text-[#FF6B2B] text-sm font-medium">5 spots open this quarter</span>
              <Zap size={14} className="text-[#FF6B2B] ml-auto flex-shrink-0" />
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#2A2A30] pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-[#6B6B7A] text-sm">
              © 2025 AI agency Claw. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <Link
                href="/privacy"
                className="text-[#6B6B7A] text-sm hover:text-[#FF6B2B] transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <span className="text-[#2A2A30]">|</span>
              <Link
                href="/terms"
                className="text-[#6B6B7A] text-sm hover:text-[#FF6B2B] transition-colors duration-200"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
