import Image from "next/image";

const caseStudies = [
  {
    id: 1,
    emoji: "🛒",
    label: "E-Commerce Customer Support AI",
    accentColor: "bg-blue-500/20",
    quote:
      "Our customer satisfaction score jumped from 72% to 96% in just 3 months. The AI handles 80% of inquiries without any human intervention — and customers love it.",
    attribution: "— Marcus Rivera, CEO at GlobalRetail",
    problem:
      "Growing e-commerce brand drowning in 500+ daily customer inquiries. Response times averaging 4 hours. Customer churn increasing 15% quarter over quarter.",
    solution:
      "Claw deployed a custom AI Customer Support Employee integrated with their Shopify store, WhatsApp Business, email, and live chat. The AI handles order tracking, returns, product recommendations, and escalates complex issues to human agents.",
    stats: [
      { value: "500+", label: "Daily inquiries handled" },
      { value: "96%", label: "Customer satisfaction" },
      { value: "4hrs → 30sec", label: "Response time" },
    ],
    before: [
      { metric: "Response Time", val: "4 hours" },
      { metric: "CSAT Score", val: "72%" },
      { metric: "Churn Rate", val: "15%" },
    ],
    after: [
      { metric: "Response Time", val: "30 seconds" },
      { metric: "CSAT Score", val: "96%" },
      { metric: "Churn Rate", val: "3%" },
    ],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    imageAlt: "Analytics dashboard showing customer support metrics",
    imageCaption: "96% Customer Satisfaction Achieved",
    reversed: false,
  },
  {
    id: 2,
    emoji: "🏠",
    label: "Real Estate Lead Generation AI",
    accentColor: "bg-green-500/20",
    quote:
      "We went from manually qualifying 20 leads per day to having our AI employee qualify 200+. Our agents now only talk to serious buyers. Pipeline value tripled.",
    attribution: "— Jennifer Walsh, Director of Sales at HealthTech Properties",
    problem:
      "Real estate agency with 15 agents spending 60% of their time on unqualified leads. Manual follow-up meant hot leads went cold.",
    solution:
      "Claw built an AI Sales Employee that monitors incoming inquiries across website, WhatsApp, and social media. It qualifies leads using custom scoring criteria, schedules viewings, sends property matches, and hands off hot leads to human agents with full context.",
    stats: [
      { value: "10x", label: "Lead qualification volume" },
      { value: "3x", label: "Pipeline value increase" },
      { value: "60% → 15%", label: "Time on unqualified leads" },
    ],
    before: [
      { metric: "Leads/Day", val: "20" },
      { metric: "Pipeline Value", val: "Baseline" },
      { metric: "Agent Time Wasted", val: "60%" },
    ],
    after: [
      { metric: "Leads/Day", val: "200+" },
      { metric: "Pipeline Value", val: "3× Growth" },
      { metric: "Agent Time Wasted", val: "15%" },
    ],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    imageAlt: "Real estate analytics and lead management dashboard",
    imageCaption: "Pipeline Value Tripled in 90 Days",
    reversed: true,
  },
  {
    id: 3,
    emoji: "✍️",
    label: "SaaS Content Marketing AI",
    accentColor: "bg-purple-500/20",
    quote:
      "Our AI content employee produces more high-quality, SEO-optimized content in a week than our entire marketing team did in a month. And it's actually good.",
    attribution: "— David Park, CMO at EduPlatform",
    problem:
      "B2B SaaS company struggling to produce consistent content. Marketing team of 3 couldn't keep up with demand for blog posts, social media, email campaigns, and documentation.",
    solution:
      "Claw deployed an AI Content Marketing Employee that researches topics, writes SEO-optimized blog posts, creates social media content calendars, drafts email sequences, and maintains brand voice consistency across all channels.",
    stats: [
      { value: "40+", label: "Articles published monthly" },
      { value: "312%", label: "Organic traffic increase" },
      { value: "5x", label: "Content output vs. human team" },
    ],
    before: [
      { metric: "Articles/Month", val: "4–6" },
      { metric: "Organic Traffic", val: "Baseline" },
      { metric: "Content Output", val: "1×" },
    ],
    after: [
      { metric: "Articles/Month", val: "40+" },
      { metric: "Organic Traffic", val: "+312%" },
      { metric: "Content Output", val: "5×" },
    ],
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=600&h=400&fit=crop",
    imageAlt: "Content marketing analytics showing traffic growth",
    imageCaption: "312% Organic Traffic Increase",
    reversed: false,
  },
];

export default function CaseStudies() {
  return (
    <section id="case-studies" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#FF6B2B]/30 bg-[#FF6B2B]/10 text-[#FF6B2B] text-sm font-medium mb-6">
            📊 Real Results, Real Businesses
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
            AI Employees Delivering{" "}
            <span className="gradient-text">Measurable Impact</span>
          </h2>
          <p className="text-xl text-[#6B6B7A] max-w-3xl mx-auto">
            These aren't hypotheticals. These are real transformations delivered by Claw's AI employee solutions across different industries.
          </p>
        </div>

        {/* Case study cards */}
        <div className="space-y-8">
          {caseStudies.map((cs) => (
            <div
              key={cs.id}
              className="rounded-2xl border border-[#2A2A30] bg-[#16161A] overflow-hidden hover:border-[#FF6B2B]/30 transition-all"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Content — conditionally ordered */}
                <div className={`p-8 lg:p-10 ${cs.reversed ? "order-1 lg:order-2" : ""}`}>
                  {/* Header */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`w-10 h-10 rounded-xl ${cs.accentColor} flex items-center justify-center text-xl`}>
                      {cs.emoji}
                    </div>
                    <div>
                      <div className="text-xs text-[#6B6B7A] uppercase tracking-wider">
                        Case Study #{cs.id}
                      </div>
                      <div className="text-lg font-black text-white">{cs.label}</div>
                    </div>
                  </div>

                  {/* Quote */}
                  <blockquote className="text-[#6B6B7A] italic mb-2 border-l-2 border-[#FF6B2B] pl-4">
                    &ldquo;{cs.quote}&rdquo;
                  </blockquote>
                  <p className="text-xs text-[#FF6B2B] font-medium pl-4 mb-6">{cs.attribution}</p>

                  {/* Problem / Solution */}
                  <div className="space-y-4 mb-8">
                    <div>
                      <h4 className="text-sm font-bold text-[#FF6B2B] uppercase tracking-wider mb-1">
                        The Problem
                      </h4>
                      <p className="text-sm text-[#6B6B7A] leading-relaxed">{cs.problem}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#FF6B2B] uppercase tracking-wider mb-1">
                        Our Solution
                      </h4>
                      <p className="text-sm text-[#6B6B7A] leading-relaxed">{cs.solution}</p>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4">
                    {cs.stats.map((stat) => (
                      <div
                        key={stat.label}
                        className="text-center p-3 rounded-xl bg-[#0A0A0B] border border-[#2A2A30]"
                      >
                        <div className="text-xl font-black text-[#FF6B2B]">{stat.value}</div>
                        <div className="text-xs text-[#6B6B7A] mt-1">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Image + Before/After */}
                <div
                  className={`bg-[#0A0A0B] p-6 lg:p-8 border-t lg:border-t-0 relative overflow-hidden ${
                    cs.reversed
                      ? "order-2 lg:order-1 lg:border-r border-[#2A2A30]"
                      : "lg:border-l border-[#2A2A30]"
                  }`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B2B]/5 to-transparent" />
                  <div className="relative">
                    <div className="text-xs text-[#6B6B7A] uppercase tracking-wider mb-4">
                      Result Preview
                    </div>

                    {/* Image */}
                    <div className="relative rounded-xl overflow-hidden border border-[#2A2A30] shadow-xl mb-4">
                      <Image
                        src={cs.image}
                        alt={cs.imageAlt}
                        width={600}
                        height={400}
                        className="w-full h-auto object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0B]/80 via-transparent to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="text-xs text-[#FF6B2B] font-bold">{cs.imageCaption}</div>
                      </div>
                    </div>

                    {/* Before / After comparison */}
                    <div className="grid grid-cols-2 gap-3">
                      <div className="p-3 rounded-xl border border-red-500/20 bg-red-500/5">
                        <div className="text-xs font-bold text-red-400 uppercase tracking-wider mb-2">
                          Before
                        </div>
                        <div className="space-y-1">
                          {cs.before.map((b) => (
                            <div key={b.metric} className="flex justify-between items-center">
                              <span className="text-xs text-[#6B6B7A]">{b.metric}</span>
                              <span className="text-xs font-bold text-red-400">{b.val}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="p-3 rounded-xl border border-green-500/20 bg-green-500/5">
                        <div className="text-xs font-bold text-green-400 uppercase tracking-wider mb-2">
                          After
                        </div>
                        <div className="space-y-1">
                          {cs.after.map((a) => (
                            <div key={a.metric} className="flex justify-between items-center">
                              <span className="text-xs text-[#6B6B7A]">{a.metric}</span>
                              <span className="text-xs font-bold text-green-400">{a.val}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-xl text-[#6B6B7A] mb-6">
            Want results like these for your business?
          </p>
          <a
            href="https://wa.me/628113702343?text=I%27d%20like%20to%20discuss%20AI%20employee%20solutions%20for%20my%20business"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#FF6B2B] hover:bg-[#FF6B2B]/90 text-white font-bold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-[#FF6B2B]/30 hover:-translate-y-0.5"
          >
            Start Your AI Transformation →
          </a>
        </div>
      </div>
    </section>
  );
}
