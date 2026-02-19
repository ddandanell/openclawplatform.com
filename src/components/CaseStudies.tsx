export default function CaseStudies() {
  return (
    <section id="case-studies" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#FF6B2B]/30 bg-[#FF6B2B]/10 text-[#FF6B2B] text-sm font-medium mb-6">
            📊 Real-World Results
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
            Show, Don&apos;t Tell.{" "}
            <span className="gradient-text">Real 2026 Use Cases.</span>
          </h2>
          <p className="text-xl text-[#6B6B7A] max-w-3xl mx-auto">
            These aren&apos;t hypotheticals. These are the exact automation scenarios
            our clients are running in production today.
          </p>
        </div>

        {/* Case study cards */}
        <div className="space-y-8">
          {/* Case Study 1: Inbox Zero */}
          <div className="rounded-2xl border border-[#2A2A30] bg-[#16161A] overflow-hidden hover:border-[#FF6B2B]/30 transition-all">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Content */}
              <div className="p-8 lg:p-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center text-xl">
                    📧
                  </div>
                  <div>
                    <div className="text-xs text-[#6B6B7A] uppercase tracking-wider">Case Study #1</div>
                    <div className="text-lg font-black text-white">The Inbox Zero Agent</div>
                  </div>
                </div>

                <blockquote className="text-[#6B6B7A] italic mb-6 border-l-2 border-[#FF6B2B] pl-4">
                  &ldquo;Our CEO was spending 3 hours a day on email. Now she spends 15 minutes
                  reviewing Priority 1 items. Everything else is handled.&rdquo;
                </blockquote>

                <div className="space-y-4 mb-8">
                  <h4 className="text-sm font-bold text-[#FF6B2B] uppercase tracking-wider">The Problem</h4>
                  <p className="text-sm text-[#6B6B7A] leading-relaxed">
                    A Series B SaaS company&apos;s CEO was receiving 200+ emails per day. Critical
                    investor updates were getting buried under newsletter subscriptions and
                    automated notifications. Response times were suffering, deals were slipping.
                  </p>

                  <h4 className="text-sm font-bold text-[#FF6B2B] uppercase tracking-wider">Our Solution</h4>
                  <p className="text-sm text-[#6B6B7A] leading-relaxed">
                    We deployed an OpenClaw agent with a custom <code className="text-[#FF6B2B] bg-[#0A0A0B] px-1 rounded">gmail.triage</code> Skill
                    that reads, categorizes, and drafts responses for every incoming email.
                    A HITL gate ensures the CEO only sees Priority 1 items (investors, board,
                    key clients). Everything else is handled autonomously.
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  {[
                    { value: "200+", label: "Emails/day processed" },
                    { value: "94%", label: "Auto-resolved" },
                    { value: "3h → 15m", label: "CEO time saved" },
                  ].map((stat) => (
                    <div key={stat.label} className="text-center p-3 rounded-xl bg-[#0A0A0B] border border-[#2A2A30]">
                      <div className="text-xl font-black text-[#FF6B2B]">{stat.value}</div>
                      <div className="text-xs text-[#6B6B7A] mt-1">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Terminal preview */}
              <div className="bg-[#0A0A0B] p-6 lg:p-8 border-t lg:border-t-0 lg:border-l border-[#2A2A30]">
                <div className="text-xs text-[#6B6B7A] uppercase tracking-wider mb-4">Live Agent Log</div>
                <div className="space-y-2 font-mono text-xs">
                  {[
                    { time: "09:14:02", msg: "📧 New email: 'Q3 Board Update Request'", color: "text-[#E8E8F0]" },
                    { time: "09:14:02", msg: "→ Classifying: Priority 1 (Board)", color: "text-[#FF6B2B]" },
                    { time: "09:14:03", msg: "→ HITL gate: Notifying CEO via Slack", color: "text-yellow-400" },
                    { time: "09:14:05", msg: "📧 New email: 'Your weekly digest'", color: "text-[#E8E8F0]" },
                    { time: "09:14:05", msg: "→ Classifying: Priority 5 (Newsletter)", color: "text-[#6B6B7A]" },
                    { time: "09:14:06", msg: "→ Auto-archiving + unsubscribing", color: "text-green-400" },
                    { time: "09:14:08", msg: "📧 New email: 'Invoice #4821 overdue'", color: "text-[#E8E8F0]" },
                    { time: "09:14:08", msg: "→ Classifying: Priority 2 (Finance)", color: "text-[#FF6B2B]" },
                    { time: "09:14:09", msg: "→ Drafting response + tagging CFO", color: "text-blue-400" },
                    { time: "09:14:11", msg: "✅ Batch complete: 12 emails processed", color: "text-green-400" },
                  ].map((log, i) => (
                    <div key={i} className="flex gap-3">
                      <span className="text-[#6B6B7A] shrink-0">{log.time}</span>
                      <span className={log.color}>{log.msg}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Case Study 2: DevOps Ghost */}
          <div className="rounded-2xl border border-[#2A2A30] bg-[#16161A] overflow-hidden hover:border-[#FF6B2B]/30 transition-all">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Terminal preview */}
              <div className="bg-[#0A0A0B] p-6 lg:p-8 border-b lg:border-b-0 lg:border-r border-[#2A2A30] order-2 lg:order-1">
                <div className="text-xs text-[#6B6B7A] uppercase tracking-wider mb-4">DevOps Ghost — Sentry Monitor</div>
                <div className="space-y-2 font-mono text-xs">
                  {[
                    { time: "03:22:14", msg: "🔴 Sentry: New error detected", color: "text-red-400" },
                    { time: "03:22:14", msg: "→ TypeError: Cannot read 'user.id'", color: "text-red-300" },
                    { time: "03:22:15", msg: "→ Affected: /api/checkout (47 events)", color: "text-yellow-400" },
                    { time: "03:22:16", msg: "→ Searching codebase for root cause...", color: "text-[#6B6B7A]" },
                    { time: "03:22:18", msg: "→ Found: src/api/checkout.ts:L142", color: "text-[#FF6B2B]" },
                    { time: "03:22:19", msg: "→ Creating GitHub issue #1204...", color: "text-blue-400" },
                    { time: "03:22:21", msg: "✅ Issue created: 'Fix null user check'", color: "text-green-400" },
                    { time: "03:22:22", msg: "→ Drafting PR with suggested fix...", color: "text-blue-400" },
                    { time: "03:22:28", msg: "✅ PR #891 opened for review", color: "text-green-400" },
                    { time: "03:22:29", msg: "→ Notifying on-call engineer via Slack", color: "text-[#FF6B2B]" },
                  ].map((log, i) => (
                    <div key={i} className="flex gap-3">
                      <span className="text-[#6B6B7A] shrink-0">{log.time}</span>
                      <span className={log.color}>{log.msg}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="p-8 lg:p-10 order-1 lg:order-2">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-green-500/20 flex items-center justify-center text-xl">
                    👻
                  </div>
                  <div>
                    <div className="text-xs text-[#6B6B7A] uppercase tracking-wider">Case Study #2</div>
                    <div className="text-lg font-black text-white">The DevOps Ghost</div>
                  </div>
                </div>

                <blockquote className="text-[#6B6B7A] italic mb-6 border-l-2 border-[#FF6B2B] pl-4">
                  &ldquo;It caught a critical checkout bug at 3 AM, created the GitHub issue,
                  drafted the PR, and had it ready for review before anyone woke up.&rdquo;
                </blockquote>

                <div className="space-y-4 mb-8">
                  <h4 className="text-sm font-bold text-[#FF6B2B] uppercase tracking-wider">The Problem</h4>
                  <p className="text-sm text-[#6B6B7A] leading-relaxed">
                    A 12-person engineering team was losing sleep over production errors.
                    Sentry would fire at 3 AM, someone would get paged, spend 2 hours
                    diagnosing, and create a ticket. By morning, the bug had already
                    cost thousands in lost conversions.
                  </p>

                  <h4 className="text-sm font-bold text-[#FF6B2B] uppercase tracking-wider">Our Solution</h4>
                  <p className="text-sm text-[#6B6B7A] leading-relaxed">
                    We deployed a DevOps Ghost agent that monitors Sentry 24/7, reads the
                    codebase (read-only Docker mount), creates GitHub issues with full
                    context, and drafts PRs with suggested fixes. Engineers wake up to
                    solutions, not problems.
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  {[
                    { value: "< 8min", label: "Bug-to-PR time" },
                    { value: "24/7", label: "Monitoring uptime" },
                    { value: "0", label: "3 AM pages" },
                  ].map((stat) => (
                    <div key={stat.label} className="text-center p-3 rounded-xl bg-[#0A0A0B] border border-[#2A2A30]">
                      <div className="text-xl font-black text-[#FF6B2B]">{stat.value}</div>
                      <div className="text-xs text-[#6B6B7A] mt-1">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Case Study 3: Sales Prospector */}
          <div className="rounded-2xl border border-[#2A2A30] bg-[#16161A] overflow-hidden hover:border-[#FF6B2B]/30 transition-all">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Content */}
              <div className="p-8 lg:p-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center text-xl">
                    🎯
                  </div>
                  <div>
                    <div className="text-xs text-[#6B6B7A] uppercase tracking-wider">Case Study #3</div>
                    <div className="text-lg font-black text-white">The Sales Prospector</div>
                  </div>
                </div>

                <blockquote className="text-[#6B6B7A] italic mb-6 border-l-2 border-[#FF6B2B] pl-4">
                  &ldquo;Our SDR team went from 20 personalized outreach messages per day to
                  200. Pipeline doubled in 6 weeks.&rdquo;
                </blockquote>

                <div className="space-y-4 mb-8">
                  <h4 className="text-sm font-bold text-[#FF6B2B] uppercase tracking-wider">The Problem</h4>
                  <p className="text-sm text-[#6B6B7A] leading-relaxed">
                    A B2B SaaS company&apos;s sales team was spending 70% of their time on
                    research and personalization, leaving only 30% for actual selling.
                    Generic outreach was getting ignored.
                  </p>

                  <h4 className="text-sm font-bold text-[#FF6B2B] uppercase tracking-wider">Our Solution</h4>
                  <p className="text-sm text-[#6B6B7A] leading-relaxed">
                    We built a LinkedIn prospecting Skill that researches prospects, reads
                    their recent posts, and drafts hyper-personalized outreach messages.
                    A HITL gate lets the SDR review and approve before sending—keeping
                    humans in control of the relationship.
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  {[
                    { value: "10x", label: "Outreach volume" },
                    { value: "34%", label: "Reply rate" },
                    { value: "2x", label: "Pipeline in 6 weeks" },
                  ].map((stat) => (
                    <div key={stat.label} className="text-center p-3 rounded-xl bg-[#0A0A0B] border border-[#2A2A30]">
                      <div className="text-xl font-black text-[#FF6B2B]">{stat.value}</div>
                      <div className="text-xs text-[#6B6B7A] mt-1">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Visual */}
              <div className="bg-[#0A0A0B] p-6 lg:p-8 border-t lg:border-t-0 lg:border-l border-[#2A2A30]">
                <div className="text-xs text-[#6B6B7A] uppercase tracking-wider mb-4">Prospector Workflow</div>
                <div className="space-y-3">
                  {[
                    { step: "1", action: "Pull ICP from CRM", detail: "Filters by company size, industry, role", icon: "📋" },
                    { step: "2", action: "Research prospect", detail: "LinkedIn posts, company news, funding", icon: "🔍" },
                    { step: "3", action: "Draft message", detail: "Claude 3.5 writes personalized outreach", icon: "✍️" },
                    { step: "4", action: "HITL Review", detail: "SDR approves or edits in Slack", icon: "👤" },
                    { step: "5", action: "Send & track", detail: "CRM updated, follow-up scheduled", icon: "📤" },
                  ].map((item) => (
                    <div key={item.step} className="flex items-start gap-3 p-3 rounded-lg border border-[#2A2A30] bg-[#16161A]">
                      <div className="w-6 h-6 rounded-full bg-[#FF6B2B]/20 flex items-center justify-center text-xs font-bold text-[#FF6B2B] shrink-0">
                        {item.step}
                      </div>
                      <div className="flex-1">
                        <div className="text-xs font-bold text-[#E8E8F0]">{item.icon} {item.action}</div>
                        <div className="text-xs text-[#6B6B7A]">{item.detail}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
