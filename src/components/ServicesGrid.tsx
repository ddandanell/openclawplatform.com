import { Brain, Shield, Users, Server, MessageSquare, Code, Lightbulb } from "lucide-react";

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
          <div className="lg:col-span-2 p-8 rounded-2xl border border-[#2A2A30] bg-[#16161A] hover:border-[#FF6B2B]/40 transition-all group relative overflow-hidden hover:-translate-y-1 hover:shadow-xl hover:shadow-[#FF6B2B]/10 gradient-border-hover">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF6B2B]/5 rounded-full blur-3xl pointer-events-none" />
            <div className="relative">
              <div className="w-12 h-12 rounded-xl bg-[#FF6B2B]/20 flex items-center justify-center mb-6 group-hover:bg-[#FF6B2B]/30 transition-colors">
                <Shield className="w-6 h-6 text-[#FF6B2B]" />
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
          <div className="p-8 rounded-2xl border border-[#2A2A30] bg-[#16161A] hover:border-[#FF6B2B]/40 transition-all group hover:-translate-y-1 hover:shadow-xl hover:shadow-[#FF6B2B]/10">
            <div className="w-12 h-12 rounded-xl bg-[#FF6B2B]/20 flex items-center justify-center mb-6 group-hover:bg-[#FF6B2B]/30 transition-colors">
              <Code className="w-6 h-6 text-[#FF6B2B]" />
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
          <div className="p-8 rounded-2xl border border-[#2A2A30] bg-[#16161A] hover:border-[#FF6B2B]/40 transition-all group hover:-translate-y-1 hover:shadow-xl hover:shadow-[#FF6B2B]/10">
            <div className="w-12 h-12 rounded-xl bg-[#FF6B2B]/20 flex items-center justify-center mb-6 group-hover:bg-[#FF6B2B]/30 transition-colors">
              <Users className="w-6 h-6 text-[#FF6B2B]" />
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
          <div className="p-8 rounded-2xl border border-[#2A2A30] bg-[#16161A] hover:border-[#FF6B2B]/40 transition-all group hover:-translate-y-1 hover:shadow-xl hover:shadow-[#FF6B2B]/10">
            <div className="w-12 h-12 rounded-xl bg-[#FF6B2B]/20 flex items-center justify-center mb-6 group-hover:bg-[#FF6B2B]/30 transition-colors">
              <Server className="w-6 h-6 text-[#FF6B2B]" />
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
          <div className="lg:col-span-2 p-8 rounded-2xl border border-[#2A2A30] bg-[#16161A] hover:border-[#FF6B2B]/40 transition-all group relative overflow-hidden hover:-translate-y-1 hover:shadow-xl hover:shadow-[#FF6B2B]/10">
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#FF6B2B]/5 rounded-full blur-3xl pointer-events-none" />
            <div className="relative">
              <div className="w-12 h-12 rounded-xl bg-[#FF6B2B]/20 flex items-center justify-center mb-6 group-hover:bg-[#FF6B2B]/30 transition-colors">
                <Brain className="w-6 h-6 text-[#FF6B2B]" />
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
          <div className="p-8 rounded-2xl border border-[#2A2A30] bg-[#16161A] hover:border-[#FF6B2B]/40 transition-all group hover:-translate-y-1 hover:shadow-xl hover:shadow-[#FF6B2B]/10">
            <div className="w-12 h-12 rounded-xl bg-[#FF6B2B]/20 flex items-center justify-center mb-6 group-hover:bg-[#FF6B2B]/30 transition-colors">
              <MessageSquare className="w-6 h-6 text-[#FF6B2B]" />
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
