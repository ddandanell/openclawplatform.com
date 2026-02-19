export default function Footer() {
  return (
    <footer id="contact" className="border-t border-[#2A2A30] bg-[#0A0A0B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-[#FF6B2B] flex items-center justify-center">
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
                OpenClaw<span className="text-[#FF6B2B]">Agency</span>
              </span>
            </div>
            <p className="text-sm text-[#6B6B7A] leading-relaxed mb-4">
              Enterprise-grade OpenClaw deployment. We bridge the gap between
              experimental AI agents and production-ready business automation.
            </p>
            <div className="flex gap-3">
              {[
                {
                  label: "Twitter",
                  href: "#",
                  icon: (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  ),
                },
                {
                  label: "LinkedIn",
                  href: "#",
                  icon: (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  ),
                },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-8 h-8 rounded-lg border border-[#2A2A30] flex items-center justify-center text-[#6B6B7A] hover:text-[#FF6B2B] hover:border-[#FF6B2B]/50 transition-all"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Services</h4>
            <ul className="space-y-2">
              {[
                "Hardened Security Setup",
                "Custom Skill Development",
                "Multi-Channel Integration",
                "VPS Provisioning",
                "SOUL Workshop",
                "Fallback Chain Config",
                "Ongoing Management",
              ].map((item) => (
                <li key={item}>
                  <a href="#services" className="text-sm text-[#6B6B7A] hover:text-[#FF6B2B] transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Use Cases */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Use Cases</h4>
            <ul className="space-y-2">
              {[
                "Email Triage Automation",
                "DevOps Monitoring",
                "Sales Prospecting",
                "Customer Support",
                "Invoice Processing",
                "HR Onboarding",
                "Content Generation",
              ].map((item) => (
                <li key={item}>
                  <a href="#case-studies" className="text-sm text-[#6B6B7A] hover:text-[#FF6B2B] transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-[#FF6B2B] mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:hello@openclaw.agency" className="text-sm text-[#6B6B7A] hover:text-[#FF6B2B] transition-colors">
                  hello@openclaw.agency
                </a>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-[#FF6B2B] mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                <span className="text-sm text-[#6B6B7A]">
                  Response within 2 business hours
                </span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-[#FF6B2B] mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-sm text-[#6B6B7A]">
                  Mon–Fri, 9am–6pm UTC
                </span>
              </li>
            </ul>

            <div className="mt-6 p-4 rounded-xl bg-[#16161A] border border-[#2A2A30]">
              <div className="text-xs text-[#6B6B7A] mb-2">Current availability</div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#FF6B2B] animate-pulse" />
                <span className="text-sm text-[#E8E8F0] font-medium">3 slots open this month</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-[#2A2A30] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[#6B6B7A]">
            © 2026 OpenClaw Agency. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {["Privacy Policy", "Terms of Service", "Security"].map((item) => (
              <a key={item} href="#" className="text-sm text-[#6B6B7A] hover:text-[#FF6B2B] transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
