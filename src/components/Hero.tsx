import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg pt-16">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#FF6B2B]/5 blur-3xl pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-[#FF6B2B]/3 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#FF6B2B]/30 bg-[#FF6B2B]/10 text-[#FF6B2B] text-sm font-medium mb-8">
          <span className="w-2 h-2 rounded-full bg-[#FF6B2B] animate-pulse" />
          Trusted by 50+ Enterprise Teams in 2026
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-tight mb-6 max-w-5xl mx-auto">
          Enterprise-Grade{" "}
          <span className="gradient-text">OpenClaw Deployment.</span>
          <br />
          Secured. Scaled. Autonomous.
        </h1>

        {/* Sub-headline */}
        <p className="text-xl sm:text-2xl text-[#6B6B7A] max-w-3xl mx-auto mb-10 leading-relaxed">
          We bridge the gap between experimental AI agents and{" "}
          <strong className="text-[#E8E8F0]">production-ready business automation.</strong>{" "}
          No more terminal hacks, no more security nightmares—just results that
          scale with your business.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href="#deploy"
            className="group px-8 py-4 bg-[#FF6B2B] hover:bg-[#E5521A] text-white font-bold text-lg rounded-xl transition-all hover:scale-105 glow-orange flex items-center gap-2"
          >
            Deploy My Agent
            <svg
              className="w-5 h-5 group-hover:translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </a>
          <a
            href="#architecture"
            className="px-8 py-4 border border-[#2A2A30] hover:border-[#FF6B2B]/50 text-[#E8E8F0] font-semibold text-lg rounded-xl transition-all hover:bg-[#16161A] flex items-center gap-2"
          >
            <svg className="w-5 h-5 text-[#FF6B2B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            Get a Security Audit
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-16">
          {[
            { value: "200+", label: "Emails automated daily", sub: "per client" },
            { value: "99.9%", label: "Uptime SLA", sub: "guaranteed" },
            { value: "< 48h", label: "Deployment time", sub: "from kickoff" },
            { value: "0", label: "Data breaches", sub: "since founding" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="p-4 rounded-xl border border-[#2A2A30] bg-[#16161A]/50 backdrop-blur-sm"
            >
              <div className="text-3xl font-black text-[#FF6B2B] mb-1">{stat.value}</div>
              <div className="text-sm text-[#E8E8F0] font-medium">{stat.label}</div>
              <div className="text-xs text-[#6B6B7A]">{stat.sub}</div>
            </div>
          ))}
        </div>

        {/* Dashboard Preview */}
        <div className="relative max-w-5xl mx-auto">
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0B] via-transparent to-transparent z-10 pointer-events-none" />
          <div className="rounded-2xl border border-[#2A2A30] bg-[#16161A] overflow-hidden glow-orange-sm">
            {/* Window chrome */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-[#2A2A30] bg-[#111113]">
              <div className="w-3 h-3 rounded-full bg-red-500/70" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
              <div className="w-3 h-3 rounded-full bg-green-500/70" />
              <div className="flex-1 mx-4">
                <div className="bg-[#0A0A0B] rounded-md px-3 py-1 text-xs text-[#6B6B7A] text-center">
                  openclaw-gateway:18789 — Control UI
                </div>
              </div>
              <div className="flex items-center gap-1 text-xs text-green-400">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                LIVE
              </div>
            </div>

            {/* Dashboard content */}
            <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Left: Agent status */}
              <div className="md:col-span-1 space-y-3">
                <div className="text-xs text-[#6B6B7A] uppercase tracking-wider mb-2">Active Agents</div>
                {[
                  { name: "InboxZero Agent", status: "running", tasks: 47 },
                  { name: "DevOps Ghost", status: "running", tasks: 12 },
                  { name: "Sales Prospector", status: "idle", tasks: 0 },
                ].map((agent) => (
                  <div key={agent.name} className="flex items-center justify-between p-3 rounded-lg bg-[#0A0A0B] border border-[#2A2A30]">
                    <div className="flex items-center gap-2">
                      <span className={`w-2 h-2 rounded-full ${agent.status === "running" ? "bg-green-400 animate-pulse" : "bg-[#6B6B7A]"}`} />
                      <span className="text-xs text-[#E8E8F0]">{agent.name}</span>
                    </div>
                    {agent.tasks > 0 && (
                      <span className="text-xs text-[#FF6B2B] font-mono">{agent.tasks} tasks</span>
                    )}
                  </div>
                ))}
              </div>

              {/* Middle: Event log */}
              <div className="md:col-span-1 space-y-2">
                <div className="text-xs text-[#6B6B7A] uppercase tracking-wider mb-2">Live Event Log</div>
                {[
                  { time: "15:44:02", event: "Email triaged → Priority 3", type: "info" },
                  { time: "15:44:01", event: "GitHub issue #847 created", type: "success" },
                  { time: "15:43:58", event: "HITL gate: Confirm invoice?", type: "warn" },
                  { time: "15:43:55", event: "Sentry error detected", type: "error" },
                  { time: "15:43:50", event: "Skill: calendar.schedule()", type: "info" },
                ].map((log, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs font-mono">
                    <span className="text-[#6B6B7A] shrink-0">{log.time}</span>
                    <span className={
                      log.type === "success" ? "text-green-400" :
                      log.type === "warn" ? "text-yellow-400" :
                      log.type === "error" ? "text-red-400" :
                      "text-[#E8E8F0]"
                    }>{log.event}</span>
                  </div>
                ))}
              </div>

              {/* Right: Skills */}
              <div className="md:col-span-1 space-y-2">
                <div className="text-xs text-[#6B6B7A] uppercase tracking-wider mb-2">Installed Skills</div>
                {[
                  { name: "gmail.triage", version: "2.1.0", active: true },
                  { name: "github.issues", version: "1.4.2", active: true },
                  { name: "slack.notify", version: "3.0.1", active: true },
                  { name: "calendar.schedule", version: "1.2.0", active: true },
                  { name: "crm.update", version: "0.9.1", active: false },
                ].map((skill) => (
                  <div key={skill.name} className="flex items-center justify-between p-2 rounded bg-[#0A0A0B] border border-[#2A2A30]">
                    <span className="text-xs font-mono text-[#FF6B2B]">{skill.name}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-[#6B6B7A]">v{skill.version}</span>
                      <span className={`w-1.5 h-1.5 rounded-full ${skill.active ? "bg-green-400" : "bg-[#6B6B7A]"}`} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Trusted by logos */}
        <div className="mt-16">
          <p className="text-sm text-[#6B6B7A] mb-6">Trusted by forward-thinking teams at</p>
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-40">
            {["Acme Corp", "TechFlow", "DataSphere", "NexusAI", "CloudPeak", "VaultSec"].map((company) => (
              <span key={company} className="text-[#E8E8F0] font-bold text-lg tracking-tight">
                {company}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
