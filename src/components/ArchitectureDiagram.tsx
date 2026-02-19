import {
  MessageSquare,
  Shield,
  Brain,
  Zap,
  CheckCircle,
  Lock,
  ShieldCheck,
  FileText,
  Layers,
  Cpu,
  Link2,
} from "lucide-react";

const flowSteps = [
  {
    icon: MessageSquare,
    label: "Your Channels",
    sub: "WhatsApp, Email, Chat, Phone, Social",
    color: "border-blue-500/40 bg-blue-500/10",
    textColor: "text-blue-400",
  },
  {
    icon: Shield,
    label: "Claw Gateway",
    sub: "Intelligent Routing & Claw Shield™",
    color: "border-[#FF6B2B]/40 bg-[#FF6B2B]/10",
    textColor: "text-[#FF6B2B]",
  },
  {
    icon: Brain,
    label: "AI Engine",
    sub: "Multi-Model with Smart Fallback",
    color: "border-purple-500/40 bg-purple-500/10",
    textColor: "text-purple-400",
  },
  {
    icon: Zap,
    label: "Action Layer",
    sub: "CRM, Payments, APIs, Databases",
    color: "border-green-500/40 bg-green-500/10",
    textColor: "text-green-400",
  },
  {
    icon: CheckCircle,
    label: "Results",
    sub: "Automated Actions & Real-Time Reporting",
    color: "border-[#FF6B2B]/40 bg-[#FF6B2B]/10",
    textColor: "text-[#FF6B2B]",
  },
];

const tableRows = [
  {
    layer: "Channels",
    component: "Omnichannel Input",
    impl: "WhatsApp Business, Email, Web Chat, VoIP, Social Media",
    icon: MessageSquare,
  },
  {
    layer: "Security",
    component: "Claw Shield™",
    impl: "End-to-end encryption, access controls, threat detection",
    icon: ShieldCheck,
  },
  {
    layer: "Intelligence",
    component: "AI Engine",
    impl: "Multi-model architecture with automatic failover",
    icon: Cpu,
  },
  {
    layer: "Integration",
    component: "Connector Hub",
    impl: "HubSpot, Salesforce, Stripe, PayPal, YouTube, 50+ APIs",
    icon: Link2,
  },
  {
    layer: "Operations",
    component: "Monitoring",
    impl: "24/7 real-time monitoring, automated error handling",
    icon: Layers,
  },
];

const securityCards = [
  {
    icon: Lock,
    title: "Zero Data Exposure",
    desc: "Your business data is encrypted at rest and in transit. Claw Shield™ ensures no unauthorized access.",
  },
  {
    icon: ShieldCheck,
    title: "Multi-Model Resilience",
    desc: "If one AI model experiences issues, our system automatically switches to backup models with zero downtime.",
  },
  {
    icon: FileText,
    title: "Complete Audit Trail",
    desc: "Every action taken by your AI employees is logged, timestamped, and available for review.",
  },
];

export default function ArchitectureDiagram() {
  return (
    <section id="architecture" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#FF6B2B]/5 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#FF6B2B]/30 bg-[#FF6B2B]/10 text-[#FF6B2B] text-sm font-medium mb-6">
            🏗️ Our Technology Stack
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
            Enterprise-Grade Infrastructure{" "}
            <span className="gradient-text">Built for Scale</span>
          </h2>
          <p className="text-xl text-[#6B6B7A] max-w-3xl mx-auto">
            Every AI employee Claw deploys runs on our battle-tested infrastructure stack, protected by Claw Shield™ and optimized for 24/7 autonomous operations.
          </p>
        </div>

        {/* Flow diagram */}
        <div className="relative mb-16">
          {/* Desktop flow */}
          <div className="hidden lg:flex items-center justify-between gap-4">
            {flowSteps.map((step, i) => (
              <div key={step.label} className="flex items-center gap-4 flex-1">
                <div
                  className={`flex-1 p-4 rounded-xl border ${step.color} text-center group hover:shadow-lg hover:shadow-[#FF6B2B]/20 transition-all duration-300 hover:-translate-y-1`}
                >
                  <div className="flex justify-center mb-2">
                    <step.icon
                      className={`w-8 h-8 ${step.textColor} group-hover:scale-110 transition-transform duration-300`}
                    />
                  </div>
                  <div className={`text-sm font-bold ${step.textColor} mb-1`}>{step.label}</div>
                  <div className="text-xs text-[#6B6B7A]">{step.sub}</div>
                </div>
                {i < flowSteps.length - 1 && (
                  <div className="flex flex-col items-center gap-1 shrink-0">
                    <svg className="w-8 h-4 text-[#FF6B2B]" viewBox="0 0 32 16" fill="none">
                      <path
                        d="M0 8h28M22 2l8 6-8 6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="text-xs text-[#6B6B7A]">encrypted</span>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile flow */}
          <div className="lg:hidden space-y-4">
            {flowSteps.map((step, i) => (
              <div key={step.label}>
                <div
                  className={`p-4 rounded-xl border ${step.color} flex items-center gap-4 group hover:shadow-lg hover:shadow-[#FF6B2B]/20 transition-all duration-300`}
                >
                  <step.icon
                    className={`w-8 h-8 ${step.textColor} shrink-0 group-hover:scale-110 transition-transform duration-300`}
                  />
                  <div>
                    <div className={`text-sm font-bold ${step.textColor}`}>{step.label}</div>
                    <div className="text-xs text-[#6B6B7A]">{step.sub}</div>
                  </div>
                </div>
                {i < flowSteps.length - 1 && (
                  <div className="flex flex-col items-center py-2 gap-0.5">
                    <svg className="w-4 h-6 text-[#FF6B2B]" viewBox="0 0 16 24" fill="none">
                      <path
                        d="M8 0v20M2 14l6 8 6-8"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="text-xs text-[#6B6B7A]">encrypted</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Architecture table */}
        <div className="rounded-2xl border border-[#2A2A30] bg-[#16161A] overflow-hidden mb-8">
          <div className="p-6 border-b border-[#2A2A30]">
            <h3 className="text-xl font-black text-white">Claw Technology Stack</h3>
            <p className="text-sm text-[#6B6B7A] mt-1">
              Every layer is purpose-built for enterprise reliability and scale
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[#2A2A30]">
                  <th className="text-left p-4 text-xs text-[#6B6B7A] uppercase tracking-wider">
                    Layer
                  </th>
                  <th className="text-left p-4 text-xs text-[#6B6B7A] uppercase tracking-wider">
                    Component
                  </th>
                  <th className="text-left p-4 text-xs text-[#6B6B7A] uppercase tracking-wider">
                    Implementation
                  </th>
                </tr>
              </thead>
              <tbody>
                {tableRows.map((row, i) => (
                  <tr
                    key={row.layer}
                    className={`border-b border-[#2A2A30] hover:bg-[#0A0A0B]/50 transition-all ${
                      i % 2 === 0 ? "" : "bg-[#0A0A0B]/20"
                    }`}
                  >
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-[#FF6B2B]/20">
                          <row.icon className="w-4 h-4 text-[#FF6B2B]" />
                        </div>
                        <span className="px-2 py-1 rounded-md bg-[#FF6B2B]/20 text-[#FF6B2B] text-xs font-bold">
                          {row.layer}
                        </span>
                      </div>
                    </td>
                    <td className="p-4 text-sm font-mono text-[#E8E8F0]">{row.component}</td>
                    <td className="p-4 text-sm text-[#6B6B7A]">{row.impl}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Security callout cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {securityCards.map((item) => (
            <div
              key={item.title}
              className="p-6 rounded-xl border border-[#2A2A30] bg-[#16161A] flex gap-4 group hover:border-[#FF6B2B]/30 hover:shadow-lg hover:shadow-[#FF6B2B]/10 transition-all duration-300"
            >
              <div className="p-3 rounded-xl bg-[#FF6B2B]/10 group-hover:bg-[#FF6B2B]/20 transition-colors shrink-0">
                <item.icon className="w-6 h-6 text-[#FF6B2B] group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div>
                <div className="text-sm font-bold text-white mb-1">{item.title}</div>
                <div className="text-xs text-[#6B6B7A] leading-relaxed">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
