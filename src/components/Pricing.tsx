import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$2,997",
    period: "one-time setup",
    monthly: "+ $697/mo management",
    description: "Perfect for small businesses ready to deploy their first AI employee.",
    highlight: false,
    badge: null,
    cta: "Get Started →",
    ctaHref: "https://wa.me/628113702343?text=I%27m%20interested%20in%20the%20Starter%20plan",
    features: [
      "1 Custom AI Employee",
      "Up to 3 integrations",
      "WhatsApp Business + 1 channel",
      "Claw Shield™ security",
      "Need assessment & strategy",
      "2 weeks deployment",
      "Email support (24hr SLA)",
      "Monthly performance reports",
    ],
  },
  {
    name: "Growth",
    price: "$7,997",
    period: "one-time setup",
    monthly: "+ $1,497/mo management",
    description: "For growing companies automating multiple workflows with AI employees.",
    highlight: true,
    badge: "Most Popular",
    cta: "Start Growing →",
    ctaHref: "https://wa.me/628113702343?text=I%27m%20interested%20in%20the%20Growth%20plan",
    features: [
      "Up to 3 AI Employees",
      "Up to 10 integrations (incl. custom)",
      "Full omnichannel (WhatsApp, Email, Chat, Phone)",
      "Claw Shield™ + advanced security",
      "Comprehensive need assessment",
      "CRM integration (HubSpot/Salesforce)",
      "Payment processing (Stripe/PayPal)",
      "Priority support (4hr SLA)",
      "Dedicated account manager",
      "Weekly performance reports",
      "Live training sessions",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "tailored to your needs",
    monthly: "Custom retainer",
    description: "For organizations needing full AI workforce infrastructure at scale.",
    highlight: false,
    badge: null,
    cta: "Contact Us →",
    ctaHref: "https://wa.me/628113702343?text=I%27d%20like%20to%20discuss%20an%20Enterprise%20AI%20solution",
    features: [
      "Unlimited AI Employees",
      "Unlimited integrations",
      "All channels + custom channels",
      "Claw Shield™ + SOC 2 / GDPR compliance",
      "Full architecture & strategy workshop",
      "Custom model fine-tuning",
      "VoIP phone system integration",
      "YouTube API & web scraping",
      "1hr SLA priority support",
      "Dedicated team + account manager",
      "Quarterly strategy reviews",
      "On-site training available",
    ],
  },
];

const roiStats = [
  { value: "3-5x", label: "Employee equivalent", sub: "per AI employee" },
  { value: "70%", label: "Cost reduction", sub: "vs. human staffing" },
  { value: "< 60 days", label: "Payback period", sub: "typical ROI timeline" },
  { value: "24/7/365", label: "Availability", sub: "zero downtime" },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#FF6B2B]/30 bg-[#FF6B2B]/10 text-[#FF6B2B] text-sm font-medium mb-6">
            💰 Investment Plans
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
            Transparent Pricing.{" "}
            <span className="gradient-text">Exceptional Value.</span>
          </h2>
          <p className="text-xl text-[#6B6B7A] max-w-3xl mx-auto mb-8">
            Every plan includes Claw Shield™ security, dedicated support, and our proven
            implementation methodology. You're investing in AI employees that deliver real ROI.
          </p>

          {/* Service Model Toggle Info */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 p-6 rounded-2xl border border-[#2A2A30] bg-[#16161A] max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-sm font-bold text-[#FF6B2B] mb-1">Hands-Off Implementation</div>
              <div className="text-xs text-[#6B6B7A]">Full deployment with minimal meetings</div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-[#2A2A30]" />
            <div className="text-center">
              <div className="text-sm font-bold text-[#FF6B2B] mb-1">Deep Partnership</div>
              <div className="text-xs text-[#6B6B7A]">Company blueprinting (100-200 pages)</div>
            </div>
          </div>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan) => (
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
                  <span className="px-4 py-1.5 rounded-full bg-[#FF6B2B] text-white text-xs font-bold whitespace-nowrap">
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
                <div className="text-sm text-[#FF6B2B] font-medium">{plan.monthly}</div>
                <p className="text-sm text-[#6B6B7A] mt-3">{plan.description}</p>
              </div>

              <div className="flex-1 space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-2 text-sm">
                    <Check className="w-4 h-4 text-[#FF6B2B] shrink-0 mt-0.5" />
                    <span className="text-[#E8E8F0]">{feature}</span>
                  </div>
                ))}
              </div>

              <a
                href={plan.ctaHref}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-3 rounded-xl font-bold text-center transition-all hover:scale-105 block ${
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

        {/* ROI Calculator Section */}
        <div className="p-8 rounded-2xl border border-[#2A2A30] bg-[#16161A]">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-black text-white mb-4">The Math Is Simple</h3>
            <p className="text-[#6B6B7A] max-w-3xl mx-auto leading-relaxed">
              The average customer service representative costs $35,000–$50,000/year. A Claw AI
              Employee on the Growth plan costs $25,961/year ($7,997 setup + $1,497/mo) — and
              handles the work of 3–5 human employees, 24/7, with zero sick days.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {roiStats.map((stat) => (
              <div
                key={stat.label}
                className="p-5 rounded-xl bg-[#0A0A0B] border border-[#2A2A30] text-center"
              >
                <div className="text-2xl font-black text-[#FF6B2B] mb-1">{stat.value}</div>
                <div className="text-sm font-semibold text-[#E8E8F0]">{stat.label}</div>
                <div className="text-xs text-[#6B6B7A] mt-0.5">{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
