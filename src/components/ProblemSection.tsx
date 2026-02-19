export default function ProblemSection() {
  const painPoints = [
    {
      emoji: "🔧",
      title: "Systems Reliability",
      search: '"Your automation breaks at 2 AM and nobody knows until customers complain."',
      solution:
        "SLA-backed 99.9% uptime guarantee with redundant infrastructure, automated failover, and 24/7 monitoring.",
    },
    {
      emoji: "🏗️",
      title: "Setup Difficulties",
      search: '"AI implementation feels overwhelming — where do you even start?"',
      solution:
        "Simplified white-glove onboarding. We handle everything from assessment to deployment. You just approve.",
    },
    {
      emoji: "📚",
      title: "Training Challenges",
      search: '"Your team doesn\'t understand AI and resists adopting new tools."',
      solution:
        "Comprehensive learning programs: video tutorials, live documentation, hands-on sessions. Your team becomes AI-confident.",
    },
    {
      emoji: "🔌",
      title: "Integration Problems",
      search: '"Your tools don\'t talk to each other. Data lives in silos."',
      solution:
        "Seamless connectivity with pre-built connectors for 50+ platforms. WhatsApp, CRM, email, payments — all unified.",
    },
    {
      emoji: "🛡️",
      title: "Security Concerns",
      search: '"You\'re worried about data breaches, compliance violations, and AI going rogue."',
      solution:
        "Enterprise-grade encryption, compliance certifications (GDPR, SOC 2), regular security audits, and Claw's proprietary security layer.",
    },
  ];

  return (
    <section id="problems" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-red-500/30 bg-red-500/10 text-red-400 text-sm font-medium mb-6">
            ⚠️ Common Business Challenges
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
            These Problems Are Costing You{" "}
            <span className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
              Thousands Every Month.
            </span>
          </h2>
          <p className="text-xl text-[#6B6B7A] max-w-3xl mx-auto">
            Every business faces these challenges. AI agency Claw has
            purpose-built solutions for each one.
          </p>
        </div>

        {/* Pain point cards — 3 on top, 2 centered on bottom */}
        <div className="mb-16 space-y-6">
          {/* Top row: 3 cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {painPoints.slice(0, 3).map((item) => (
              <div
                key={item.title}
                className="p-6 rounded-2xl border border-[#2A2A30] bg-[#16161A] hover:border-red-500/30 transition-all group"
              >
                <div className="text-3xl mb-4">{item.emoji}</div>
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-red-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs font-mono text-[#6B6B7A] italic mb-4 leading-relaxed">
                  {item.search}
                </p>
                <div className="pt-3 border-t border-[#2A2A30]">
                  <div className="text-xs text-[#FF6B2B] font-semibold uppercase tracking-wide mb-1">
                    Claw Solution
                  </div>
                  <p className="text-sm text-[#E8E8F0] leading-relaxed">
                    {item.solution}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom row: 2 cards centered */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:max-w-2xl md:mx-auto lg:max-w-3xl">
            {painPoints.slice(3).map((item) => (
              <div
                key={item.title}
                className="p-6 rounded-2xl border border-[#2A2A30] bg-[#16161A] hover:border-red-500/30 transition-all group"
              >
                <div className="text-3xl mb-4">{item.emoji}</div>
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-red-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs font-mono text-[#6B6B7A] italic mb-4 leading-relaxed">
                  {item.search}
                </p>
                <div className="pt-3 border-t border-[#2A2A30]">
                  <div className="text-xs text-[#FF6B2B] font-semibold uppercase tracking-wide mb-1">
                    Claw Solution
                  </div>
                  <p className="text-sm text-[#E8E8F0] leading-relaxed">
                    {item.solution}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Solution bridge CTA */}
        <div className="relative p-8 rounded-2xl border border-[#FF6B2B]/30 bg-gradient-to-br from-[#FF6B2B]/10 to-transparent text-center">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF6B2B]/5 rounded-full blur-3xl pointer-events-none" />
          <div className="relative">
            <h3 className="text-2xl font-black text-white mb-4">
              Every Problem Has a Claw Solution.
            </h3>
            <p className="text-[#6B6B7A] max-w-2xl mx-auto mb-6">
              We've solved these exact challenges for 150+ businesses across
              20+ industries. Your business is next.
            </p>
            <a
              href="https://wa.me/628113702343?text=I%20have%20questions%20about%20AI%20implementation%20for%20my%20business"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#FF6B2B] hover:bg-[#E5521A] text-white font-bold rounded-xl transition-all hover:scale-105"
            >
              Talk to an AI Expert Now →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
