export default function ProcessSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#FF6B2B]/30 bg-[#FF6B2B]/10 text-[#FF6B2B] text-sm font-medium mb-6">
            🚀 Our Process
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
            From Kickoff to{" "}
            <span className="gradient-text">Production in 48 Hours</span>
          </h2>
          <p className="text-xl text-[#6B6B7A] max-w-3xl mx-auto">
            We&apos;ve refined our deployment process across 50+ enterprise clients.
            Here&apos;s exactly how we turn your business requirements into a
            production-ready AI agent.
          </p>
        </div>

        {/* Process steps */}
        <div className="relative">
          {/* Connecting line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-[#FF6B2B] via-[#FF6B2B]/50 to-transparent hidden md:block" />

          <div className="space-y-8">
            {[
              {
                step: "01",
                title: "Discovery & Provisioning",
                duration: "Day 1 — 2 hours",
                description:
                  "We start with a deep-dive call to understand your workflows, pain points, and automation goals. Simultaneously, we provision a dedicated Linux VPS with a non-root user, configure firewall rules, and set up monitoring.",
                code: "$ ssh deploy@your-vps.com\n$ sudo useradd -m -s /bin/bash openclaw\n$ ufw allow 22,443/tcp",
                deliverables: ["Dedicated VPS provisioned", "Security hardening complete", "Monitoring configured"],
              },
              {
                step: "02",
                title: "Daemonized Installation",
                duration: "Day 1 — 1 hour",
                description:
                  "We install OpenClaw as a system daemon—not a terminal process. This means your agent runs 24/7, survives reboots, and auto-restarts on failure. We configure Docker sandboxing and set workspace permissions.",
                code: "$ openclaw onboard --install-daemon\n$ openclaw config set workspaceAccess ro\n$ systemctl enable openclaw",
                deliverables: ["Daemon installed & running", "Docker sandbox configured", "Auto-restart enabled"],
              },
              {
                step: "03",
                title: "The SOUL Workshop",
                duration: "Day 1 — 3 hours",
                description:
                  "This is where your expertise meets ours. We run a structured workshop to define your agent&apos;s SOUL.md—its personality, constraints, escalation paths, and decision-making logic. This document is the brain of your agent.",
                code: "# SOUL.md\nYou are [Company]'s AI assistant.\nTone: Professional, concise.\nNEVER: Send emails without HITL approval.\nALWAYS: Log all financial actions.",
                deliverables: ["SOUL.md defined", "Tone & persona set", "HITL gates configured"],
              },
              {
                step: "04",
                title: "Skill Installation & Custom Development",
                duration: "Day 1-2 — 4-8 hours",
                description:
                  "We install standard Skills (Calendar, Drive, Gmail, Slack) and develop any custom Skills your business needs. ERP connectors, CRM integrations, proprietary API wrappers—we build them as proper SKILL.md files.",
                code: "$ openclaw skills install gmail calendar drive\n$ openclaw skills install ./custom/crm-connector\n$ openclaw skills install ./custom/erp-bridge",
                deliverables: ["Standard skills installed", "Custom skills developed", "Integration tests passing"],
              },
              {
                step: "05",
                title: "Channel Pairing & Secure Handover",
                duration: "Day 2 — 2 hours",
                description:
                  "We configure your communication channels using private DM pairing codes—never exposing the Control UI to the public internet. We set up Cloudflare Zero Trust or Tailscale for secure dashboard access, then hand over the keys.",
                code: "$ openclaw pair --channel slack --private\n$ openclaw pair --channel whatsapp --private\n# Dashboard: https://your-agent.company.com",
                deliverables: ["Channels paired securely", "Dashboard protected by ZT", "Team access configured"],
              },
            ].map((item, i) => (
              <div key={item.step} className="relative flex gap-8">
                {/* Step indicator */}
                <div className="relative shrink-0 hidden md:flex flex-col items-center">
                  <div className="w-16 h-16 rounded-2xl bg-[#FF6B2B] flex items-center justify-center text-white font-black text-lg z-10">
                    {item.step}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 pb-8">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="p-6 rounded-2xl border border-[#2A2A30] bg-[#16161A]">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="md:hidden w-10 h-10 rounded-xl bg-[#FF6B2B] flex items-center justify-center text-white font-black text-sm">
                          {item.step}
                        </div>
                        <div>
                          <div className="text-xs text-[#FF6B2B] font-medium">{item.duration}</div>
                          <h3 className="text-xl font-black text-white">{item.title}</h3>
                        </div>
                      </div>
                      <p className="text-sm text-[#6B6B7A] leading-relaxed mb-4">{item.description}</p>
                      <div className="space-y-2">
                        {item.deliverables.map((d) => (
                          <div key={d} className="flex items-center gap-2 text-sm text-[#E8E8F0]">
                            <svg className="w-4 h-4 text-[#FF6B2B] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            {d}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="rounded-2xl bg-[#0A0A0B] border border-[#2A2A30] overflow-hidden">
                      <div className="flex items-center gap-2 px-4 py-2 border-b border-[#2A2A30]">
                        <div className="w-2 h-2 rounded-full bg-red-500/70" />
                        <div className="w-2 h-2 rounded-full bg-yellow-500/70" />
                        <div className="w-2 h-2 rounded-full bg-green-500/70" />
                        <span className="text-xs text-[#6B6B7A] ml-2">terminal</span>
                      </div>
                      <pre className="p-4 text-xs font-mono text-green-400 overflow-x-auto whitespace-pre-wrap">
                        {item.code}
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline summary */}
        <div className="mt-8 p-8 rounded-2xl border border-[#FF6B2B]/30 bg-gradient-to-br from-[#FF6B2B]/10 to-transparent">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            {[
              { label: "Kickoff Call", time: "Hour 0" },
              { label: "VPS Live", time: "Hour 3" },
              { label: "Agent Running", time: "Hour 12" },
              { label: "Full Production", time: "Hour 48" },
            ].map((milestone) => (
              <div key={milestone.label}>
                <div className="text-2xl font-black text-[#FF6B2B]">{milestone.time}</div>
                <div className="text-sm text-[#E8E8F0] mt-1">{milestone.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
