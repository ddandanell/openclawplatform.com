import { MessageSquare, HelpCircle, Rocket } from "lucide-react";

const ctaCards = [
  {
    icon: MessageSquare,
    title: "Free AI Consultation",
    description:
      "Get a personalized assessment of how AI employees can transform your specific business. No commitment, no pressure — just expert insights.",
    buttonText: "Get Free Consultation →",
    href: "https://wa.me/628113702343?text=Hi%20Claw%2C%20I%27d%20like%20a%20free%20AI%20consultation%20for%20my%20business",
    subText: "30-minute call • Completely free",
  },
  {
    icon: HelpCircle,
    title: "Quick Question?",
    description:
      "Have a specific question about AI employees, pricing, or implementation? Chat with our team directly — we typically respond within 5 minutes.",
    buttonText: "Ask Us Anything →",
    href: "https://wa.me/628113702343?text=Hi%2C%20I%20have%20a%20quick%20question%20about%20your%20AI%20solutions",
    subText: "Average response: 5 minutes",
  },
  {
    icon: Rocket,
    title: "Ready to Start?",
    description:
      "You know what you need. Let's skip the small talk and get your AI employees deployed. We'll have your first AI employee live within 2 weeks.",
    buttonText: "Start My AI Project →",
    href: "https://wa.me/628113702343?text=I%27m%20ready%20to%20start%20an%20AI%20employee%20project.%20Let%27s%20discuss%20next%20steps",
    subText: "First AI employee live in 2 weeks",
  },
];

const trustSignals = [
  "🔒 Your data is protected by Claw Shield™",
  "⚡ Average WhatsApp response: 5 minutes",
  "🎯 Free consultation, no strings attached",
  "✅ No lock-in contracts, cancel anytime",
];

export default function CTASection() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B2B]/10 via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-[#FF6B2B]/8 blur-3xl rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#FF6B2B]/30 bg-[#FF6B2B]/10 text-[#FF6B2B] text-sm font-medium mb-8">
            <span className="w-2 h-2 rounded-full bg-[#FF6B2B] animate-pulse" />
            🔥 Limited Availability — Only 5 Spots Left This Quarter
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
            Ready to Transform Your Business with{" "}
            <span className="gradient-text">AI Employees?</span>
          </h2>
          <p className="text-xl text-[#6B6B7A] max-w-2xl mx-auto">
            Don't let your competitors get ahead. Every day without AI automation is money left
            on the table. Take the first step — it's completely free.
          </p>
        </div>

        {/* 3 CTA Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {ctaCards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className="rounded-2xl border border-[#2A2A30] bg-[#16161A] p-8 flex flex-col hover:border-[#FF6B2B]/40 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-[#FF6B2B]/10 border border-[#FF6B2B]/20 flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6 text-[#FF6B2B]" />
                </div>
                <h3 className="text-lg font-black text-white mb-3">{card.title}</h3>
                <p className="text-[#6B6B7A] text-sm leading-relaxed flex-1 mb-6">
                  {card.description}
                </p>
                <a
                  href={card.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-xl bg-[#FF6B2B] hover:bg-[#E5521A] text-white font-bold text-center transition-all hover:scale-105 block mb-2"
                >
                  {card.buttonText}
                </a>
                <p className="text-xs text-[#6B6B7A] text-center">{card.subText}</p>
              </div>
            );
          })}
        </div>

        {/* Trust Signals Row */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-[#6B6B7A] mb-12">
          {trustSignals.map((signal) => (
            <span key={signal}>{signal}</span>
          ))}
        </div>

        {/* Social Proof */}
        <div className="text-center mb-10">
          <p className="text-[#E8E8F0] font-semibold mb-1">
            Join 150+ businesses already using Claw AI Employees
          </p>
          <p className="text-sm text-[#6B6B7A]">
            Last 3 clients signed up within 48 hours of their free consultation
          </p>
        </div>

        {/* Large Final CTA */}
        <div className="max-w-2xl mx-auto text-center">
          <a
            href="https://wa.me/628113702343"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-5 rounded-2xl bg-[#FF6B2B] hover:bg-[#E5521A] text-white font-black text-xl transition-all hover:scale-[1.02] glow-orange flex items-center justify-center gap-3 mb-4"
          >
            💬 Chat With Claw on WhatsApp Now
          </a>
          <p className="text-[#6B6B7A] text-sm">
            Or call us directly:{" "}
            <a
              href="tel:+628113702343"
              className="text-[#E8E8F0] hover:text-[#FF6B2B] transition-colors font-medium"
            >
              +62 811-3702-343
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
