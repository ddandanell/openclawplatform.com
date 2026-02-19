"use client";

import { useState } from "react";

const faqs = [
  {
    q: "What exactly is OpenClaw and why do I need an agency to deploy it?",
    a: "OpenClaw is an enterprise-grade AI agent framework that lets you deploy autonomous AI agents capable of taking real actions—sending emails, writing code, managing files, and integrating with your business tools. While the software itself is powerful, deploying it securely in a production environment requires expertise in Docker sandboxing, VPS configuration, secrets management, and custom Skill development. Most businesses that try to self-deploy end up with either a security vulnerability or an agent that doesn&apos;t actually fit their workflows. We&apos;ve done this 50+ times and know exactly what works.",
  },
  {
    q: "Is my business data safe? Where does it go?",
    a: "Your data never leaves your infrastructure. We deploy OpenClaw on a VPS that you own (or we provision on your behalf). All AI reasoning happens with your data as local context—it&apos;s not sent to a third-party cloud service. We implement Docker sandboxing with read-only workspace access, so even if an agent were compromised, it couldn&apos;t exfiltrate your data. We also set up Cloudflare Zero Trust or Tailscale VPN so your Control UI is never exposed to the public internet.",
  },
  {
    q: "What&apos;s the difference between a 'Skill' and a regular chatbot integration?",
    a: "A chatbot integration just lets you chat with an AI. A Skill is a structured, auditable action that the agent can take in the real world—like 'send this email', 'create this GitHub issue', or 'update this CRM record'. Skills are defined in SKILL.md files with explicit permissions, input validation, and output logging. They&apos;re the difference between an AI that talks about doing things and one that actually does them—safely and repeatably.",
  },
  {
    q: "What is a HITL gate and when should I use one?",
    a: "HITL stands for Human-in-the-Loop. A HITL gate is a checkpoint where the agent pauses and asks a human to approve before taking a high-risk action. For example: 'I&apos;ve drafted this invoice email to your client. Confirm to send?' We configure HITL gates for any action that&apos;s irreversible, financial, or customer-facing. You get the speed of automation with the safety of human oversight.",
  },
  {
    q: "Can you integrate with our existing tools (Salesforce, HubSpot, SAP, etc.)?",
    a: "Yes. If it has an API, we can build a Skill for it. We&apos;ve built custom connectors for Salesforce, HubSpot, SAP, Jira, Linear, Notion, Airtable, and dozens of proprietary internal systems. The development time varies by complexity—simple REST APIs take a few hours, complex ERP integrations may take a few days. All custom Skills are included in our Business and Enterprise plans.",
  },
  {
    q: "What happens if Claude hits a rate limit or goes down?",
    a: "We configure a fallback chain so your automation never stops. Primary model is Claude 3.5/4.0 for deep reasoning tasks. If it hits rate limits, we automatically fall back to Gemini 2.0 Flash for speed-sensitive tasks. For emergency situations, we have a GPT-4o Mini fallback. The agent monitors its own model health and switches automatically—you&apos;ll never know it happened.",
  },
  {
    q: "How long does deployment take?",
    a: "For our Starter plan, we can have a single agent running in production within 24-48 hours of kickoff. Business plan deployments with multiple agents and custom Skills typically take 3-5 business days. Enterprise deployments with complex integrations and compliance requirements are scoped individually but typically complete within 2-3 weeks.",
  },
  {
    q: "Do you offer ongoing support and maintenance?",
    a: "Yes. All plans include monthly management fees that cover monitoring, updates, Skill maintenance, and support. Business plan clients get 4-hour SLA support. Enterprise clients get 1-hour SLA with a dedicated account manager. We also provide monthly (Business) or weekly (Enterprise) performance reports showing exactly what your agent did, what it automated, and where it saved time.",
  },
  {
    q: "Can we see the agent&apos;s reasoning and actions?",
    a: "Absolutely. Every action, every decision, and every tool call is logged in the OpenClaw Event Log with full timestamps and reasoning chains. You can see exactly why the agent made each decision. This audit trail is critical for compliance and for building trust in your automation. We also set up Slack/Teams notifications for key events so you&apos;re always in the loop.",
  },
  {
    q: "What if we want to change the agent&apos;s behavior after deployment?",
    a: "That&apos;s what the SOUL.md and SKILL.md files are for. We can update your agent&apos;s behavior, add new Skills, adjust HITL gates, or change its decision logic at any time. Business and Enterprise clients can request changes through our support portal with a 24-48 hour turnaround. We also run quarterly SOUL workshops to review and refine your agent&apos;s performance.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#FF6B2B]/30 bg-[#FF6B2B]/10 text-[#FF6B2B] text-sm font-medium mb-6">
            ❓ FAQ
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
            Everything You Need to{" "}
            <span className="gradient-text">Know Before You Deploy</span>
          </h2>
          <p className="text-xl text-[#6B6B7A]">
            The questions every business asks before trusting an AI agent with
            their operations.
          </p>
        </div>

        {/* FAQ items */}
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`rounded-xl border transition-all ${
                openIndex === i
                  ? "border-[#FF6B2B]/40 bg-[#16161A]"
                  : "border-[#2A2A30] bg-[#16161A] hover:border-[#FF6B2B]/20"
              }`}
            >
              <button
                className="w-full flex items-center justify-between p-6 text-left"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className="text-base font-semibold text-white pr-4">{faq.q}</span>
                <span
                  className={`shrink-0 w-6 h-6 rounded-full border flex items-center justify-center transition-all ${
                    openIndex === i
                      ? "border-[#FF6B2B] bg-[#FF6B2B] text-white rotate-45"
                      : "border-[#2A2A30] text-[#6B6B7A]"
                  }`}
                >
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M6 2v8M2 6h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </span>
              </button>
              {openIndex === i && (
                <div className="px-6 pb-6">
                  <p className="text-[#6B6B7A] leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Still have questions */}
        <div className="mt-12 text-center p-8 rounded-2xl border border-[#2A2A30] bg-[#16161A]">
          <div className="text-2xl mb-3">💬</div>
          <h3 className="text-xl font-black text-white mb-2">Still have questions?</h3>
          <p className="text-[#6B6B7A] mb-6">
            Book a free 30-minute discovery call. We&apos;ll assess your workflows and
            tell you exactly what&apos;s possible with OpenClaw for your business.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#FF6B2B] hover:bg-[#E5521A] text-white font-bold rounded-xl transition-all hover:scale-105"
          >
            Book a Free Discovery Call →
          </a>
        </div>
      </div>
    </section>
  );
}
