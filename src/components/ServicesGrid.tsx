export default function ServicesGrid() {
  return (
    <section id="services" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#FF6B2B]/30 bg-[#FF6B2B]/10 text-[#FF6B2B] text-sm font-medium mb-6">
            🛠️ Our Services
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
            Everything You Need for{" "}
            <span className="gradient-text">Production-Ready AI</span>
          </h2>
          <p className="text-xl text-[#6B6B7A] max-w-3xl mx-auto">
            We don&apos;t just install OpenClaw. We architect, secure, customize, and
            maintain your entire AI automation stack—so you can focus on your
            business.
          </p>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Large card - Hardened Security */}
          <div className="lg:col-span-2 p-8 rounded-2xl border border-[#2A2A30] bg-[#16161A] hover:border-[#FF6B2B]/40 transition-all group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF6B2B]/5 rounded-full blur-3xl pointer-events-none" />
            <div className="relative">
              <div className="w-12 h-12 rounded-xl bg-[#FF6B2B]/20 flex items-center justify-center mb-6 group-hover:bg-[#FF6B2B]/30 transition-colors">
                <svg className="w-6 h-6 text-[#FF6B2B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-black text-white mb-3">Hardened Security Architecture</h3>
              <p className="text-[#6B6B7A] mb-6 leading-relaxed">
                We implement Docker-level sandboxing and OAuth2 secrets management to keep your
                business data local and your agent isolated. Every tool execution runs in a
                non-main container with read-only workspace access. Your private data never
                leaves your infrastructure.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  "Docker sandbox isolation",
                  "OAuth2 secrets vault",
                  "Read-only workspace access",
                  "VPN/Tailscale tunnel",
                  "Cloudflare Zero Trust",
                  "Audit log retention",
                ].map((feature) => (
                  <div key={feature} className="flex items-center gap-2 text-sm text-[#E8E8F0]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B2B]" />
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Custom Skills */}
          <div className="p-8 rounded-2xl border border-[#2A2A30] bg-[#16161A] hover:border-[#FF6B2B]/40 transition-all group">
            <div className="w-12 h-12 rounded-xl bg-[#FF6B2B]/20 flex items-center justify-center mb-6 group-hover:bg-[#FF6B2B]/30 transition-colors">
              <svg className="w-6 h-6 text-[#FF6B2B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <h3 className="text-xl font-black text-white mb-3">Custom Skill Synthesis</h3>
            <p className="text-[#6B6B7A] text-sm leading-relaxed mb-4">
              From specialized ERP connectors to automated LinkedIn prospecting—if there&apos;s
              an API, we can build the Skill. We write SKILL.md files that turn your
              business processes into repeatable, auditable agent actions.
            </p>
            <div className="space-y-2">
              {["ERP/CRM connectors", "Custom API integrations", "HITL approval gates", "Business logic encoding"].map((f) => (
                <div key={f} className="flex items-center gap-2 text-xs text-[#6B6B7A]">
                  <span className="text-[#FF6B2B]">→</span> {f}
                </div>
              ))}
            </div>
          </div>

          {/* Multi-channel */}
          <div className="p-8 rounded-2xl border border-[#2A2A30] bg-[#16161A] hover:border-[#FF6B2B]/40 transition-all group">
            <div className="w-12 h-12 rounded-xl bg-[#FF6B2B]/20 flex items-center justify-center mb-6 group-hover:bg-[#FF6B2B]/30 transition-colors">
              <svg className="w-6 h-6 text-[#FF6B2B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <h3 className="text-xl font-black text-white mb-3">Multi-Channel Mastery</h3>
            <p className="text-[#6B6B7A] text-sm leading-relaxed mb-4">
              Your agent lives where you do. We configure private DM pairing codes for
              every channel—never exposing the Control UI to the public web.
            </p>
            <div className="flex flex-wrap gap-2">
              {["WhatsApp", "Slack", "Teams", "Discord", "Telegram", "Email"].map((ch) => (
                <span key={ch} className="px-3 py-1 rounded-full bg-[#0A0A0B] border border-[#2A2A30] text-xs text-[#E8E8F0]">
                  {ch}
                </span>
              ))}
            </div>
          </div>

          {/* VPS Provisioning */}
          <div className="p-8 rounded-2xl border border-[#2A2A30] bg-[#16161A] hover:border-[#FF6B2B]/40 transition-all group">
            <div className="w-12 h-12 rounded-xl bg-[#FF6B2B]/20 flex items-center justify-center mb-6 group-hover:bg-[#FF6B2B]/30 transition-colors">
              <svg className="w-6 h-6 text-[#FF6B2B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
              </svg>
            </div>
            <h3 className="text-xl font-black text-white mb-3">Dedicated VPS Deployment</h3>
            <p className="text-[#6B6B7A] text-sm leading-relaxed mb-4">
              We provision a dedicated Linux VPS (AWS t3.medium or DigitalOcean Droplet)
              with a non-root user, daemonized OpenClaw install, and full monitoring.
              Your agent runs 24/7, not just when your laptop is open.
            </p>
            <div className="text-xs font-mono text-[#FF6B2B] bg-[#0A0A0B] rounded-lg p-3">
              $ openclaw onboard --install-daemon
            </div>
          </div>

          {/* Large card - SOUL Workshop */}
          <div className="lg:col-span-2 p-8 rounded-2xl border border-[#2A2A30] bg-[#16161A] hover:border-[#FF6B2B]/40 transition-all group relative overflow-hidden">
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#FF6B2B]/5 rounded-full blur-3xl pointer-events-none" />
            <div className="relative">
              <div className="w-12 h-12 rounded-xl bg-[#FF6B2B]/20 flex items-center justify-center mb-6 group-hover:bg-[#FF6B2B]/30 transition-colors">
                <svg className="w-6 h-6 text-[#FF6B2B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-2xl font-black text-white mb-3">The SOUL Workshop</h3>
              <p className="text-[#6B6B7A] mb-6 leading-relaxed">
                This is where our expertise truly shines. We run a dedicated workshop to define
                your agent&apos;s <code className="text-[#FF6B2B] bg-[#0A0A0B] px-1 rounded">SOUL.md</code>—the
                document that governs its tone, constraints, decision-making logic, and escalation
                paths. A well-crafted SOUL is the difference between an agent that embarrasses
                your brand and one that represents it perfectly.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  {
                    title: "Tone & Persona",
                    desc: "Define how your agent speaks, what it refuses, and how it escalates edge cases.",
                  },
                  {
                    title: "Decision Logic",
                    desc: "Encode your approval workflows, risk thresholds, and Human-in-the-Loop gates.",
                  },
                  {
                    title: "Constraint Mapping",
                    desc: "Hard limits on what the agent can and cannot do—legally, ethically, operationally.",
                  },
                ].map((item) => (
                  <div key={item.title} className="p-4 rounded-xl bg-[#0A0A0B] border border-[#2A2A30]">
                    <div className="text-sm font-bold text-[#FF6B2B] mb-2">{item.title}</div>
                    <div className="text-xs text-[#6B6B7A] leading-relaxed">{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Fallback Chain */}
          <div className="p-8 rounded-2xl border border-[#2A2A30] bg-[#16161A] hover:border-[#FF6B2B]/40 transition-all group">
            <div className="w-12 h-12 rounded-xl bg-[#FF6B2B]/20 flex items-center justify-center mb-6 group-hover:bg-[#FF6B2B]/30 transition-colors">
              <svg className="w-6 h-6 text-[#FF6B2B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </div>
            <h3 className="text-xl font-black text-white mb-3">Fallback Chain Setup</h3>
            <p className="text-[#6B6B7A] text-sm leading-relaxed mb-4">
              Primary: Claude 3.5/4.0 for deep reasoning. Fallback: Gemini 2.0 Flash for
              speed and rate-limit handling. Your automation never stops.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-3 p-2 rounded-lg bg-[#0A0A0B] border border-[#2A2A30]">
                <span className="text-xs text-[#6B6B7A]">Primary</span>
                <span className="text-xs font-mono text-[#E8E8F0]">Claude 3.5/4.0</span>
                <span className="ml-auto w-2 h-2 rounded-full bg-green-400" />
              </div>
              <div className="flex items-center gap-3 p-2 rounded-lg bg-[#0A0A0B] border border-[#2A2A30]">
                <span className="text-xs text-[#6B6B7A]">Fallback</span>
                <span className="text-xs font-mono text-[#E8E8F0]">Gemini 2.0 Flash</span>
                <span className="ml-auto w-2 h-2 rounded-full bg-yellow-400" />
              </div>
              <div className="flex items-center gap-3 p-2 rounded-lg bg-[#0A0A0B] border border-[#2A2A30]">
                <span className="text-xs text-[#6B6B7A]">Emergency</span>
                <span className="text-xs font-mono text-[#E8E8F0]">GPT-4o Mini</span>
                <span className="ml-auto w-2 h-2 rounded-full bg-blue-400" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
