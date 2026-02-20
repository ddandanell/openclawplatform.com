import { Search, Layout, Wrench, Rocket, HeartHandshake, CheckCircle2, ArrowRight } from "lucide-react";

const steps = [
    {
      step: "01",
      title: "Deep Business Discovery",
      duration: "Week 1",
      icon: Search,
      description:
        "We start by understanding your goals, workflows, and where AI can deliver the biggest impact.",
      deliverables: [
        "Clear business goals defined",
        "Workflow bottlenecks identified",
        "AI opportunity assessment complete",
        "Strategic roadmap delivered",
        "ROI projections finalized",
      ],
    },
    {
      step: "02",
      title: "System Architecture & Design",
      duration: "Week 1–2",
      icon: Layout,
      description:
        "We design your complete AI ecosystem—every channel, integration, and workflow.",
      deliverables: [
        "Omnichannel strategy defined",
        "Integration architecture mapped",
        "Chat, phone & email systems designed",
        "CRM connectivity planned",
        "Security protocols established",
      ],
    },
  {
      step: "03",
      title: "Custom Build & Configuration",
      duration: "Week 2–3",
      icon: Wrench,
      description:
        "Our engineers build your AI agents with the exact tools, skills, and integrations your business needs.",
      deliverables: [
        "Agent hub configured",
        "Custom tools & skills developed",
        "Database architecture created",
        "Permission structures set",
        "All integrations connected & tested",
      ],
    },
    {
      step: "04",
      title: "Testing & Launch",
      duration: "Week 3–4",
      icon: Rocket,
      description:
        "We thoroughly test everything before launch to ensure your AI workforce performs flawlessly.",
      deliverables: [
        "End-to-end testing complete",
        "Performance benchmarks met",
        "Security audit passed",
        "Team training delivered",
        "Production launch executed",
      ],
    },
    {
      step: "05",
      title: "Ongoing Operations & Support",
      duration: "Ongoing",
      icon: HeartHandshake,
      description:
        "Your AI workforce is live—and we're right beside you, monitoring, optimizing, and expanding.",
      deliverables: [
        "24/7 monitoring active",
        "Continuous improvement cycles",
        "Dedicated account manager assigned",
        "Monthly performance reports",
        "New automation expansions",
      ],
    },
];

const timeline = [
  { label: "Deep Business Discovery", period: "Week 1" },
  { label: "System Architecture & Design", period: "Week 2" },
  { label: "Custom Build & Configuration", period: "Week 3" },
  { label: "Testing & Launch", period: "Week 4" },
  { label: "Ongoing Operations", period: "Ongoing" },
];

export default function ProcessSection() {
  return (
    <section id="process" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#FF6B2B]/30 bg-[#FF6B2B]/10 text-[#FF6B2B] text-sm font-medium mb-6">
            🚀 How It Works
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
            From Discovery to{" "}
            <span className="gradient-text">Full Production in 5 Steps</span>
          </h2>
           <p className="text-xl text-[#6B6B7A] max-w-3xl mx-auto">
             We've refined this process across 150+ implementations. Here's how we turn your vision into a working AI workforce.
           </p>
        </div>

        {/* Process steps */}
        <div className="relative">
          {/* Vertical connecting line (desktop) */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-[#FF6B2B] via-[#FF6B2B]/50 to-transparent hidden md:block" />
          <div className="absolute left-[30px] bottom-0 hidden md:flex items-center justify-center w-4 h-4 rounded-full bg-[#FF6B2B] z-10">
            <ArrowRight className="w-2 h-2 text-white rotate-[-90deg]" />
          </div>

          <div className="space-y-8">
            {steps.map((item) => (
              <div key={item.step} className="relative flex gap-8 group">
                {/* Step icon (desktop) */}
                <div className="relative shrink-0 hidden md:flex flex-col items-center">
                  <div className="w-16 h-16 rounded-2xl bg-[#FF6B2B] flex items-center justify-center text-white z-10 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-[#FF6B2B]/30">
                    <item.icon className="w-7 h-7" />
                  </div>
                </div>

                {/* Content card */}
                <div className="flex-1 pb-8 group-hover:translate-x-2 transition-transform duration-300">
                  <div className="p-6 rounded-2xl border border-[#2A2A30] bg-[#16161A] group-hover:border-[#FF6B2B]/30 group-hover:shadow-lg group-hover:shadow-[#FF6B2B]/10 transition-all duration-300">
                    {/* Card header */}
                    <div className="flex items-center gap-3 mb-4">
                      {/* Mobile icon */}
                      <div className="md:hidden w-10 h-10 rounded-xl bg-[#FF6B2B] flex items-center justify-center text-white shrink-0">
                        <item.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-xs text-[#FF6B2B] font-medium">
                          Step {item.step} · {item.duration}
                        </div>
                        <h3 className="text-xl font-black text-white">{item.title}</h3>
                      </div>
                    </div>

                    <p className="text-sm text-[#6B6B7A] leading-relaxed mb-5">
                      {item.description}
                    </p>

                    {/* Deliverables checklist */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {item.deliverables.map((d) => (
                        <div key={d} className="flex items-center gap-2 text-sm text-[#E8E8F0]">
                          <CheckCircle2 className="w-4 h-4 text-[#FF6B2B] shrink-0" />
                          {d}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline summary */}
        <div className="mt-8 p-8 rounded-2xl border border-[#FF6B2B]/30 bg-gradient-to-br from-[#FF6B2B]/10 to-transparent">
          <h4 className="text-sm font-bold text-[#FF6B2B] uppercase tracking-wider text-center mb-6">
            Project Timeline
          </h4>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 text-center">
            {timeline.map((t, i) => (
              <div key={t.period} className="relative">
                {/* Connector line between items (desktop) */}
                {i < timeline.length - 1 && (
                  <div className="hidden md:block absolute top-4 left-[calc(50%+24px)] right-[-50%] h-px bg-[#FF6B2B]/30" />
                )}
                <div className="w-8 h-8 rounded-full bg-[#FF6B2B] flex items-center justify-center text-white text-xs font-black mx-auto mb-2 relative z-10">
                  {i + 1}
                </div>
                <div className="text-sm font-black text-[#FF6B2B]">{t.period}</div>
                <div className="text-xs text-[#E8E8F0] mt-1">{t.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
