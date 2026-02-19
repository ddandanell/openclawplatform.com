import {
  Search,
  MessageSquare,
  Settings,
  Link2,
  Activity,
  GraduationCap,
  Server,
  Brain,
  Sparkles,
} from "lucide-react";

export default function ServicesGrid() {
  return (
    <section id="services" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#FF6B2B]/30 bg-[#FF6B2B]/10 text-[#FF6B2B] text-sm font-medium mb-6">
            🛠️ Complete AI Employee Solutions
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
            Two Paths to <span className="gradient-text">AI Transformation</span>
          </h2>
          <p className="text-xl text-[#6B6B7A] max-w-3xl mx-auto">
            Choose the engagement model that fits your needs — or let us recommend the best approach after our initial consultation.
          </p>
        </div>

        {/* Partnership Options Banner */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* Hands-Off Option */}
          <div className="p-8 rounded-2xl border border-[#FF6B2B]/30 bg-gradient-to-br from-[#FF6B2B]/5 to-transparent hover:border-[#FF6B2B]/50 transition-all">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-[#FF6B2B]/20 flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-[#FF6B2B]" />
              </div>
              <h3 className="text-xl font-black text-white">Hands-Off Implementation</h3>
            </div>
            <p className="text-[#6B6B7A] mb-4">
              We handle everything — full implementation with only brief adjustment meetings needed on your calendar.
            </p>
            <ul className="space-y-2 text-sm text-[#E8E8F0]">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B2B]" />
                Rapid deployment (2-4 weeks)
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B2B]" />
                Minimal time investment from your team
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B2B]" />
                Quick ROI realization
              </li>
            </ul>
          </div>

          {/* Deep Partnership Option */}
          <div className="p-8 rounded-2xl border border-[#FF6B2B]/30 bg-gradient-to-br from-[#FF6B2B]/5 to-transparent hover:border-[#FF6B2B]/50 transition-all">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-[#FF6B2B]/20 flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-[#FF6B2B]" />
              </div>
              <h3 className="text-xl font-black text-white">Deep Partnership</h3>
            </div>
            <p className="text-[#6B6B7A] mb-4">
              Exhaustive company blueprinting — we map your roles, processes, vision, and mission across a comprehensive document (100-200 pages).
            </p>
            <ul className="space-y-2 text-sm text-[#E8E8F0]">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B2B]" />
                Future-proof planning (1-2 months)
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B2B]" />
                Complete operational documentation
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B2B]" />
                Long-term strategic AI roadmap
              </li>
            </ul>
          </div>
        </div>

        {/* Infrastructure Section */}
        <div className="mb-16 p-8 rounded-2xl border border-[#2A2A30] bg-[#16161A] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF6B2B]/5 rounded-full blur-3xl pointer-events-none" />
          <div className="relative">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-black text-white mb-2">Enterprise Infrastructure</h3>
              <p className="text-[#6B6B7A]">Built for performance, designed for security</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="flex items-center gap-3 p-4 rounded-xl bg-[#0A0A0B] border border-[#2A2A30]">
                <div className="w-10 h-10 rounded-lg bg-[#FF6B2B]/20 flex items-center justify-center flex-shrink-0">
                  <Server className="w-5 h-5 text-[#FF6B2B]" />
                </div>
                <div>
                  <div className="text-sm font-bold text-[#E8E8F0]">Dedicated Servers</div>
                  <div className="text-xs text-[#6B6B7A]">High-performance computing</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-xl bg-[#0A0A0B] border border-[#2A2A30]">
                <div className="w-10 h-10 rounded-lg bg-[#FF6B2B]/20 flex items-center justify-center flex-shrink-0">
                  <Brain className="w-5 h-5 text-[#FF6B2B]" />
                </div>
                <div>
                  <div className="text-sm font-bold text-[#E8E8F0]">Fine-tuned Llama Models</div>
                  <div className="text-xs text-[#6B6B7A]">Proprietary training on your data</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-xl bg-[#0A0A0B] border border-[#2A2A30]">
                <div className="w-10 h-10 rounded-lg bg-[#FF6B2B]/20 flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-5 h-5 text-[#FF6B2B]" />
                </div>
                <div>
                  <div className="text-sm font-bold text-[#E8E8F0]">60%+ Token Cost Reduction</div>
                  <div className="text-xs text-[#6B6B7A]">Optimized efficiency</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-xl bg-[#0A0A0B] border border-[#2A2A30]">
                <div className="w-10 h-10 rounded-lg bg-[#FF6B2B]/20 flex items-center justify-center flex-shrink-0">
                  <Settings className="w-5 h-5 text-[#FF6B2B]" />
                </div>
                <div>
                  <div className="text-sm font-bold text-[#E8E8F0]">Linux & Windows</div>
                  <div className="text-xs text-[#6B6B7A]">Full environment support</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 — Large, 2-col span: Comprehensive Need Assessment */}
          <div className="lg:col-span-2 p-8 rounded-2xl border border-[#2A2A30] bg-[#16161A] hover:border-[#FF6B2B]/40 transition-all group relative overflow-hidden hover:-translate-y-1 hover:shadow-xl hover:shadow-[#FF6B2B]/10 gradient-border-hover">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF6B2B]/5 rounded-full blur-3xl pointer-events-none" />
            <div className="relative">
              <div className="w-12 h-12 rounded-xl bg-[#FF6B2B]/20 flex items-center justify-center mb-6 group-hover:bg-[#FF6B2B]/30 transition-colors">
                <Search className="w-6 h-6 text-[#FF6B2B]" />
              </div>
              <h3 className="text-2xl font-black text-white mb-3">
                Comprehensive Need Assessment
              </h3>
              <p className="text-[#6B6B7A] mb-6 leading-relaxed">
                We start by deeply understanding your business before building
                anything.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  "Goal Mapping & KPI Definition",
                  "Workflow Analysis & Bottleneck ID",
                  "Opportunity Identification",
                  "Strategic AI Roadmap Planning",
                  "ROI Projection & Timeline",
                  "Competitive Gap Analysis",
                ].map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-2 text-sm text-[#E8E8F0]"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B2B] flex-shrink-0" />
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Card 2 — Standard: Omnichannel System Definition */}
          <div className="p-8 rounded-2xl border border-[#2A2A30] bg-[#16161A] hover:border-[#FF6B2B]/40 transition-all group hover:-translate-y-1 hover:shadow-xl hover:shadow-[#FF6B2B]/10">
            <div className="w-12 h-12 rounded-xl bg-[#FF6B2B]/20 flex items-center justify-center mb-6 group-hover:bg-[#FF6B2B]/30 transition-colors">
              <MessageSquare className="w-6 h-6 text-[#FF6B2B]" />
            </div>
            <h3 className="text-xl font-black text-white mb-3">
              Omnichannel System Definition
            </h3>
            <p className="text-[#6B6B7A] text-sm leading-relaxed mb-4">
              Define how your AI employees communicate across every channel.
            </p>
            <div className="space-y-2">
              {[
                "Advanced Chat Systems (Web, Mobile)",
                "Intelligent Phone Systems (VoIP)",
                "CRM Integration (HubSpot, Salesforce)",
                "Content Management Systems",
                "Multi-Platform Connectivity",
              ].map((f) => (
                <div key={f} className="flex items-center gap-2 text-xs text-[#6B6B7A]">
                  <span className="text-[#FF6B2B]">→</span> {f}
                </div>
              ))}
            </div>
          </div>

          {/* Card 3 — Standard: Custom System Setup & Configuration */}
          <div className="p-8 rounded-2xl border border-[#2A2A30] bg-[#16161A] hover:border-[#FF6B2B]/40 transition-all group hover:-translate-y-1 hover:shadow-xl hover:shadow-[#FF6B2B]/10">
            <div className="w-12 h-12 rounded-xl bg-[#FF6B2B]/20 flex items-center justify-center mb-6 group-hover:bg-[#FF6B2B]/30 transition-colors">
              <Settings className="w-6 h-6 text-[#FF6B2B]" />
            </div>
            <h3 className="text-xl font-black text-white mb-3">
              Custom System Setup & Configuration
            </h3>
            <p className="text-[#6B6B7A] text-sm leading-relaxed mb-4">
              Precision-engineered AI systems built to your exact specifications.
            </p>
            <div className="space-y-2">
              {[
                "Agent Hub Configuration",
                "Custom Tools & Skills Development",
                "Database Architecture & Creation",
                "Comprehensive Logging Systems",
                "Granular Permission Structures",
              ].map((f) => (
                <div key={f} className="flex items-center gap-2 text-xs text-[#6B6B7A]">
                  <span className="text-[#FF6B2B]">→</span> {f}
                </div>
              ))}
            </div>
          </div>

          {/* Card 4 — Standard: Seamless Integrations */}
          <div className="p-8 rounded-2xl border border-[#2A2A30] bg-[#16161A] hover:border-[#FF6B2B]/40 transition-all group hover:-translate-y-1 hover:shadow-xl hover:shadow-[#FF6B2B]/10">
            <div className="w-12 h-12 rounded-xl bg-[#FF6B2B]/20 flex items-center justify-center mb-6 group-hover:bg-[#FF6B2B]/30 transition-colors">
              <Link2 className="w-6 h-6 text-[#FF6B2B]" />
            </div>
            <h3 className="text-xl font-black text-white mb-3">
              Seamless Integrations
            </h3>
            <p className="text-[#6B6B7A] text-sm leading-relaxed mb-4">
              Connect your AI employees to every tool in your tech stack.
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                "WhatsApp Business",
                "Email Platforms",
                "HubSpot",
                "Salesforce",
                "YouTube API",
                "Stripe",
                "PayPal",
                "Web Scraping",
                "VoIP Systems",
              ].map((ch) => (
                <span
                  key={ch}
                  className="px-3 py-1 rounded-full bg-[#0A0A0B] border border-[#2A2A30] text-xs text-[#E8E8F0]"
                >
                  {ch}
                </span>
              ))}
            </div>
          </div>

          {/* Card 5 — Large, 2-col span: 24/7 Production Operations */}
          <div className="lg:col-span-2 p-8 rounded-2xl border border-[#2A2A30] bg-[#16161A] hover:border-[#FF6B2B]/40 transition-all group relative overflow-hidden hover:-translate-y-1 hover:shadow-xl hover:shadow-[#FF6B2B]/10">
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#FF6B2B]/5 rounded-full blur-3xl pointer-events-none" />
            <div className="relative">
              <div className="w-12 h-12 rounded-xl bg-[#FF6B2B]/20 flex items-center justify-center mb-6 group-hover:bg-[#FF6B2B]/30 transition-colors">
                <Activity className="w-6 h-6 text-[#FF6B2B]" />
              </div>
              <h3 className="text-2xl font-black text-white mb-3">
                24/7 Production Operations
              </h3>
              <p className="text-[#6B6B7A] mb-6 leading-relaxed">
                Your AI employees never sleep. Neither does our monitoring.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  "24/7 Real-Time Monitoring",
                  "Automated Error Handling",
                  "Continuous Improvement Cycles",
                  "New Automation Implementations",
                  "Prompt Engineering & Model Optimization",
                  "Scalable Team Expansion",
                ].map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-2 text-sm text-[#E8E8F0]"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B2B] flex-shrink-0" />
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Card 6 — Standard: Full Support & Training */}
          <div className="p-8 rounded-2xl border border-[#2A2A30] bg-[#16161A] hover:border-[#FF6B2B]/40 transition-all group hover:-translate-y-1 hover:shadow-xl hover:shadow-[#FF6B2B]/10">
            <div className="w-12 h-12 rounded-xl bg-[#FF6B2B]/20 flex items-center justify-center mb-6 group-hover:bg-[#FF6B2B]/30 transition-colors">
              <GraduationCap className="w-6 h-6 text-[#FF6B2B]" />
            </div>
            <h3 className="text-xl font-black text-white mb-3">
              Full Support & Training
            </h3>
            <p className="text-[#6B6B7A] text-sm leading-relaxed mb-4">
              We don't just build — we empower your team to master AI.
            </p>
            <div className="space-y-2">
              {[
                "Dedicated Account Manager",
                "Priority Ticket System",
                "Video Tutorial Library",
                "Live Training Sessions",
                "Comprehensive Documentation",
              ].map((f) => (
                <div key={f} className="flex items-center gap-2 text-xs text-[#6B6B7A]">
                  <span className="text-[#FF6B2B]">→</span> {f}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-[#6B6B7A] mb-4 text-lg">
            Ready to build your AI workforce?
          </p>
          <a
            href="https://wa.me/628113702343?text=I%27m%20interested%20in%20AI%20employee%20solutions"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#FF6B2B] hover:bg-[#E5521A] text-white font-bold rounded-xl transition-all hover:scale-105 hover:shadow-lg hover:shadow-[#FF6B2B]/30"
          >
            Get Started on WhatsApp →
          </a>
        </div>
      </div>
    </section>
  );
}
