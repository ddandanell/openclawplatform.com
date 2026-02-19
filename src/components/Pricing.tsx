export default function Pricing() {
  return (
    <section id="pricing" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#FF6B2B]/30 bg-[#FF6B2B]/10 text-[#FF6B2B] text-sm font-medium mb-6">
            💰 Pricing
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
            Transparent Pricing.{" "}
            <span className="gradient-text">No Surprises.</span>
          </h2>
          <p className="text-xl text-[#6B6B7A] max-w-3xl mx-auto">
            Every plan includes our hardened security architecture. You&apos;re not
            paying for a chatbot—you&apos;re investing in a 24/7 autonomous team member.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {[
            {
              name: "Starter",
              price: "$2,497",
              period: "one-time setup",
              monthly: "+ $497/mo management",
              description: "Perfect for small teams automating one core workflow.",
              highlight: false,
              features: [
                "1 OpenClaw agent deployment",
                "Dedicated VPS provisioning",
                "Docker sandbox security",
                "Up to 3 Skills installed",
                "1 channel integration",
                "SOUL.md workshop (1hr)",
                "Cloudflare Zero Trust setup",
                "30-day support included",
                "Monthly performance report",
              ],
              cta: "Get Started",
              badge: null,
            },
            {
              name: "Business",
              price: "$5,997",
              period: "one-time setup",
              monthly: "+ $997/mo management",
              description: "For growing companies automating multiple workflows.",
              highlight: true,
              features: [
                "Up to 3 OpenClaw agents",
                "Dedicated VPS + auto-scaling",
                "Full Docker sandbox suite",
                "Up to 10 Skills (incl. 2 custom)",
                "All channel integrations",
                "SOUL.md workshop (3hrs)",
                "Tailscale VPN + ZT setup",
                "HITL gates configuration",
                "Fallback chain (Claude + Gemini)",
                "Priority support (4hr SLA)",
                "Weekly performance reports",
              ],
              cta: "Deploy My Agents",
              badge: "Most Popular",
            },
            {
              name: "Enterprise",
              price: "Custom",
              period: "tailored to your needs",
              monthly: "Custom retainer",
              description: "For organizations needing full AI automation infrastructure.",
              highlight: false,
              features: [
                "Unlimited agents",
                "Multi-VPS cluster deployment",
                "SOC 2 / GDPR compliance setup",
                "Unlimited custom Skills",
                "All channels + custom integrations",
                "Full SOUL.md architecture",
                "Custom model fine-tuning",
                "Dedicated account manager",
                "1hr SLA support",
                "On-site workshop available",
                "Quarterly strategy reviews",
              ],
              cta: "Contact Sales",
              badge: null,
            },
          ].map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl border p-8 flex flex-col ${
                plan.highlight
                  ? "border-[#FF6B2B] bg-gradient-to-b from-[#FF6B2B]/10 to-[#16161A] glow-orange"
                  : "border-[#2A2A30] bg-[#16161A]"
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1.5 rounded-full bg-[#FF6B2B] text-white text-xs font-bold">
                    {plan.badge}
                  </span>
                </div>
              )}

              <div className="mb-6">
                <div className="text-sm font-bold text-[#6B6B7A] uppercase tracking-wider mb-2">
                  {plan.name}
                </div>
                <div className="flex items-end gap-2 mb-1">
                  <span className="text-4xl font-black text-white">{plan.price}</span>
                  <span className="text-sm text-[#6B6B7A] mb-1">{plan.period}</span>
                </div>
                <div className="text-sm text-[#FF6B2B]">{plan.monthly}</div>
                <p className="text-sm text-[#6B6B7A] mt-3">{plan.description}</p>
              </div>

              <div className="flex-1 space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-2 text-sm">
                    <svg
                      className="w-4 h-4 text-[#FF6B2B] shrink-0 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[#E8E8F0]">{feature}</span>
                  </div>
                ))}
              </div>

              <a
                href="#deploy"
                className={`w-full py-3 rounded-xl font-bold text-center transition-all hover:scale-105 ${
                  plan.highlight
                    ? "bg-[#FF6B2B] hover:bg-[#E5521A] text-white"
                    : "border border-[#2A2A30] hover:border-[#FF6B2B]/50 text-[#E8E8F0] hover:bg-[#0A0A0B]"
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        {/* ROI calculator callout */}
        <div className="p-8 rounded-2xl border border-[#2A2A30] bg-[#16161A]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-black text-white mb-3">
                Calculate Your ROI
              </h3>
              <p className="text-[#6B6B7A] mb-4">
                The average knowledge worker costs $75,000/year. Our Business plan
                at $997/month ($11,964/year) automates the equivalent of 2-3 full-time
                roles. That&apos;s a 5-10x ROI in year one alone.
              </p>
              <div className="space-y-2">
                {[
                  "Email triage: saves 2-3 hrs/day per executive",
                  "DevOps monitoring: replaces $120k/yr on-call engineer",
                  "Sales prospecting: 10x outreach volume",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-[#E8E8F0]">
                    <span className="text-[#FF6B2B]">→</span> {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Avg. time saved", value: "20+ hrs/week" },
                { label: "Typical ROI", value: "5-10x" },
                { label: "Payback period", value: "< 60 days" },
                { label: "Uptime guarantee", value: "99.9% SLA" },
              ].map((item) => (
                <div key={item.label} className="p-4 rounded-xl bg-[#0A0A0B] border border-[#2A2A30] text-center">
                  <div className="text-2xl font-black text-[#FF6B2B]">{item.value}</div>
                  <div className="text-xs text-[#6B6B7A] mt-1">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
