export default function ProblemSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-red-500/30 bg-red-500/10 text-red-400 text-sm font-medium mb-6">
            ⚠️ The Problem Every Business Faces
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
            AI Agents Are Powerful.{" "}
            <span className="text-red-400">Deploying Them Safely Is Hard.</span>
          </h2>
          <p className="text-xl text-[#6B6B7A] max-w-3xl mx-auto">
            Every week, thousands of businesses search for answers to the same
            critical questions. We&apos;ve built our entire service around solving them.
          </p>
        </div>

        {/* Problem cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {[
            {
              icon: "🔓",
              search: '"AI agent accessing private data"',
              problem: "The Lethal Trifecta",
              description:
                "Most AI agent setups combine private data access + external communication + untrusted web content in a single process. One prompt injection attack and your entire business database is exposed.",
              searches: "12,400 searches/month",
            },
            {
              icon: "💻",
              search: '"how to run AI agent in production"',
              problem: "Terminal Hacks Don&apos;t Scale",
              description:
                "Running OpenClaw on your laptop works for demos. But what happens when you close the lid? When the VPN drops? When your developer leaves? Production needs a hardened, always-on gateway.",
              searches: "8,900 searches/month",
            },
            {
              icon: "🔌",
              search: '"AI agent Slack WhatsApp integration"',
              problem: "Channel Fragmentation",
              description:
                "Your team lives in Slack. Your clients are on WhatsApp. Your executives use Teams. Without proper channel pairing and identity management, you end up with 5 different bots doing 5 different things.",
              searches: "15,200 searches/month",
            },
            {
              icon: "🧠",
              search: '"AI agent custom business logic"',
              problem: "Generic Agents Fail Businesses",
              description:
                "Off-the-shelf AI agents don&apos;t know your ERP system, your approval workflows, or your compliance requirements. Without custom Skills and a properly defined SOUL.md, you get a generic chatbot, not a business asset.",
              searches: "9,700 searches/month",
            },
            {
              icon: "⚡",
              search: '"AI agent rate limit fallback"',
              problem: "Single Model = Single Point of Failure",
              description:
                "Claude 3.5 hits rate limits at 3 AM when your DevOps agent is processing a Sentry flood. Without a fallback chain (Gemini 2.0 Flash, GPT-4o), your automation stops dead.",
              searches: "6,300 searches/month",
            },
            {
              icon: "🛡️",
              search: '"enterprise AI agent compliance GDPR"',
              problem: "Compliance Is Non-Negotiable",
              description:
                "GDPR, SOC 2, HIPAA—enterprise clients need data to stay local. Cloud-based AI services that send your data to third-party servers are a compliance nightmare waiting to happen.",
              searches: "11,800 searches/month",
            },
          ].map((item) => (
            <div
              key={item.problem}
              className="p-6 rounded-2xl border border-[#2A2A30] bg-[#16161A] hover:border-[#FF6B2B]/30 transition-all group"
            >
              <div className="text-3xl mb-4">{item.icon}</div>
              <div className="text-xs font-mono text-[#6B6B7A] mb-2 italic">
                {item.search}
              </div>
              <h3 className="text-lg font-bold text-white mb-3 group-hover:text-[#FF6B2B] transition-colors">
                {item.problem}
              </h3>
              <p className="text-sm text-[#6B6B7A] leading-relaxed mb-4">
                {item.description}
              </p>
              <div className="text-xs text-[#FF6B2B]/70 font-medium">
                📊 {item.searches}
              </div>
            </div>
          ))}
        </div>

        {/* Solution bridge */}
        <div className="relative p-8 rounded-2xl border border-[#FF6B2B]/30 bg-gradient-to-br from-[#FF6B2B]/10 to-transparent text-center">
          <div className="text-5xl mb-4">🦾</div>
          <h3 className="text-2xl font-black text-white mb-4">
            We Solve All of This. In Under 48 Hours.
          </h3>
          <p className="text-[#6B6B7A] max-w-2xl mx-auto mb-6">
            Our Hardened Gateway Architecture addresses every single one of these
            problems with battle-tested, enterprise-grade solutions. We&apos;ve
            deployed over 50 production OpenClaw instances and we know exactly
            where things break—and how to prevent it.
          </p>
          <a
            href="#services"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#FF6B2B] hover:bg-[#E5521A] text-white font-bold rounded-xl transition-all hover:scale-105"
          >
            See Our Solutions →
          </a>
        </div>
      </div>
    </section>
  );
}
