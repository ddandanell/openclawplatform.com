import {
  ShieldCheck,
  Lock,
  Eye,
  KeyRound,
  FileCheck,
  Star,
  BadgeCheck,
  Wifi,
  Database,
} from "lucide-react";
import TeamVideo from "./TeamVideo";

export default function TrustCredentials() {
  const securityFeatures = [
    { icon: Lock, label: "End-to-End Encryption" },
    { icon: Eye, label: "Real-Time Threat Detection" },
    { icon: KeyRound, label: "Access Control & Permissions" },
    { icon: FileCheck, label: "Compliance Ready (GDPR, SOC 2)" },
  ];

  const metrics = [
    {
      value: "5+",
      label: "Years in AI Operations",
      sub: "Since 2021",
    },
    {
      value: "150+",
      label: "Implementations Completed",
      sub: "Across 20+ industries",
    },
    {
      value: "98.7%",
      label: "Client Satisfaction Rate",
      sub: "Based on post-project surveys",
    },
    {
      value: "$12M+",
      label: "Client Revenue Generated",
      sub: "Through AI automation",
    },
  ];

  const trustBadges = [
    { icon: BadgeCheck, label: "ISO 27001 Compliant" },
    { icon: ShieldCheck, label: "GDPR Ready" },
    { icon: FileCheck, label: "SOC 2 Type II" },
    { icon: Lock, label: "SSL Encrypted" },
    { icon: Wifi, label: "24/7 Monitoring" },
    { icon: Database, label: "Data Residency Options" },
  ];

  return (
    <section id="credentials" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#FF6B2B]/30 bg-[#FF6B2B]/10 text-[#FF6B2B] text-sm font-medium mb-6">
            🏆 Why Businesses Trust Claw
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
            Proven Results.{" "}
            <span className="gradient-text">Enterprise‑Grade Security.</span>
          </h2>
          <p className="text-xl text-[#6B6B7A] max-w-3xl mx-auto">
            We protect your data with our proprietary security layer and deliver measurable ROI across every implementation.
          </p>
        </div>

        {/* Section 1: Claw Shield — featured full-width card */}
        <div className="gradient-border rounded-2xl p-px mb-10 shadow-lg shadow-[#FF6B2B]/10">
          <div className="rounded-2xl bg-[#16161A] p-8 sm:p-10 relative overflow-hidden">
            {/* Subtle orange glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF6B2B]/8 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#FF6B2B]/5 rounded-full blur-3xl pointer-events-none" />

            <div className="relative">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-xl bg-[#FF6B2B]/20 flex items-center justify-center flex-shrink-0">
                      <ShieldCheck className="w-7 h-7 text-[#FF6B2B]" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-black text-white">
                        Claw Shield™ — Our Proprietary Security Layer
                      </h3>
                    </div>
                  </div>

                   <p className="text-[#6B6B7A] leading-relaxed mb-8">
                     Every AI agent we deploy is protected by Claw Shield™—our proprietary security framework that encrypts data at rest and in transit, enforces strict access controls, and provides real-time threat monitoring. This isn't off-the-shelf security—it's purpose-built for AI operations.
                   </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
                    {securityFeatures.map(({ icon: Icon, label }) => (
                      <div
                        key={label}
                        className="flex items-center gap-3 p-4 rounded-xl bg-[#0A0A0B] border border-[#2A2A30]"
                      >
                        <div className="w-9 h-9 rounded-lg bg-[#FF6B2B]/20 flex items-center justify-center flex-shrink-0">
                          <Icon className="w-4 h-4 text-[#FF6B2B]" />
                        </div>
                        <span className="text-sm font-medium text-[#E8E8F0]">
                          {label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-center lg:justify-end">
                  <TeamVideo className="mx-auto lg:mx-0" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Metrics grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {metrics.map((m) => (
            <div
              key={m.label}
              className="p-6 rounded-2xl border border-[#2A2A30] bg-[#16161A] text-center hover:border-[#FF6B2B]/40 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-[#FF6B2B]/10"
            >
              <div className="text-4xl font-black gradient-text mb-2">
                {m.value}
              </div>
              <div className="text-sm font-semibold text-[#E8E8F0] mb-1">
                {m.label}
              </div>
              <div className="text-xs text-[#6B6B7A]">{m.sub}</div>
            </div>
          ))}
        </div>

        {/* Section 3: Trust badges row */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {trustBadges.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-[#2A2A30] bg-[#16161A] hover:border-[#FF6B2B]/40 transition-all"
            >
              <Icon className="w-4 h-4 text-[#FF6B2B]" />
              <span className="text-sm font-medium text-[#E8E8F0]">
                {label}
              </span>
            </div>
          ))}
        </div>

        {/* Section 4: Featured testimonial */}
        <div className="p-8 rounded-2xl border border-[#2A2A30] bg-[#16161A] mb-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-[#FF6B2B]/5 rounded-full blur-3xl pointer-events-none" />
          <div className="relative">
            {/* Stars */}
            <div className="flex gap-1 mb-4">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star
                  key={s}
                  className="w-5 h-5 text-[#FF6B2B] fill-[#FF6B2B]"
                />
              ))}
            </div>
            <blockquote className="text-lg text-[#E8E8F0] leading-relaxed mb-4 italic max-w-4xl">
              &ldquo;Claw didn't just implement AI for us — they transformed
              our entire operation. Our customer response time went from 4 hours
              to 30 seconds, and our team now focuses on strategy instead of
              repetitive tasks.&rdquo;
            </blockquote>
            <p className="text-[#6B6B7A] font-medium">
              — Sarah Chen, COO at TechVentures
            </p>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <p className="text-[#6B6B7A] mb-4 text-lg">
            See how we can secure and scale your AI operations
          </p>
          <a
            href="https://wa.me/628113702343?text=I%27d%20like%20a%20free%20security%20assessment%20for%20my%20AI%20systems"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#FF6B2B] hover:bg-[#E5521A] text-white font-bold rounded-xl transition-all hover:scale-105 hover:shadow-lg hover:shadow-[#FF6B2B]/30"
          >
            Get Your Free Security Assessment →
          </a>
        </div>
      </div>
    </section>
  );
}
