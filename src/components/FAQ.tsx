"use client";

import { useState } from "react";

const faqs = [
  {
    q: "What exactly is an AI employee and how is it different from a chatbot?",
    a: "An AI employee is a fully autonomous digital worker that goes far beyond simple chatbot responses. While chatbots follow scripted flows, our AI employees understand context, make decisions, take actions across multiple systems, learn from interactions, and handle complex multi-step workflows. Think of it as hiring a highly capable team member who works 24/7, never takes sick days, and continuously improves.",
  },
  {
    q: "How does Claw ensure my business data is secure?",
    a: "Every AI employee we deploy is protected by Claw Shield™, our proprietary security framework. This includes end-to-end encryption for all data in transit and at rest, strict access controls with granular permissions, real-time threat detection and monitoring, and compliance readiness for GDPR, SOC 2, and ISO 27001. Your data never leaves your authorized systems without explicit permission.",
  },
  {
    q: "What integrations do you support?",
    a: "We support 50+ integrations out of the box, including WhatsApp Business, email platforms, HubSpot, Salesforce, Stripe, PayPal, YouTube API, VoIP phone systems, web scraping tools, and virtually any platform with an API. If your tool has an API, we can connect it. We also build custom integrations for proprietary systems.",
  },
  {
    q: "How long does it take to deploy an AI employee?",
    a: "Our Starter plan deploys in approximately 2 weeks. Growth plans with multiple AI employees and complex integrations typically take 3–4 weeks. Enterprise deployments with custom model fine-tuning and extensive integrations take 4–8 weeks. We follow our proven 5-phase methodology to ensure quality at every step.",
  },
  {
    q: "What happens if the AI makes a mistake?",
    a: "We implement multiple safeguards: confidence thresholds that escalate uncertain decisions to human review, comprehensive logging so every action is auditable, automated error detection and correction, and 24/7 monitoring by our operations team. For critical workflows, we configure human-in-the-loop checkpoints where your team approves actions before execution.",
  },
  {
    q: "Can I try before committing to a full plan?",
    a: "Absolutely! We offer a free 30-minute AI consultation where we assess your business, identify the highest-ROI automation opportunities, and show you exactly what's possible. There's zero commitment — and most clients are so impressed they sign up within 48 hours. Chat with us on WhatsApp to book yours.",
  },
  {
    q: "What industries do you serve?",
    a: "We serve businesses across all industries including e-commerce, real estate, SaaS, healthcare, finance, education, logistics, hospitality, and professional services. Our AI employees are custom-built for your specific industry workflows, compliance requirements, and customer expectations.",
  },
  {
    q: "What's included in the monthly management fee?",
    a: "The monthly fee covers 24/7 monitoring and uptime management, automated error handling and recovery, continuous performance optimization, prompt engineering and model updates, regular performance reports, priority support access, and ongoing security updates through Claw Shield™. Think of it as having a dedicated AI operations team.",
  },
  {
    q: "Can I scale up or add more AI employees later?",
    a: "Yes! Our platform is designed for growth. You can add new AI employees, expand integrations, or upgrade your plan at any time. Many clients start with one AI employee and scale to 5–10 within the first year as they see the ROI.",
  },
  {
    q: "Why is Claw based in Bali, Indonesia?",
    a: "Bali is a global hub for digital innovation and remote-first companies. Our Canggu headquarters gives us access to world-class talent while maintaining competitive pricing that we pass on to our clients. We serve clients globally across all time zones, with our team providing responsive support regardless of your location.",
  },
  {
    q: "Do you offer training for our team?",
    a: "Every plan includes training resources. Starter plans include documentation and video tutorials. Growth plans add live training sessions with our team. Enterprise plans include on-site training options. Our goal is to make your team confident and self-sufficient in working alongside their AI employees.",
  },
  {
    q: "What if I'm not satisfied with the results?",
    a: "We offer no lock-in contracts — you can cancel your monthly management at any time. However, our 98.7% client satisfaction rate speaks for itself. We also provide a detailed ROI report within the first 60 days so you can see exactly how your AI employees are performing against your investment.",
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
            ❓ Frequently Asked Questions
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
            Everything You Need to{" "}
            <span className="gradient-text">Know Before Getting Started</span>
          </h2>
          <p className="text-xl text-[#6B6B7A]">
            We've answered the most common questions businesses ask before investing in AI
            employees.
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
                    <path
                      d="M6 2v8M2 6h8"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
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

        {/* Still Have Questions CTA */}
        <div className="mt-12 text-center p-8 rounded-2xl border border-[#2A2A30] bg-[#16161A]">
          <div className="text-2xl mb-3">💬</div>
          <h3 className="text-xl font-black text-white mb-2">Still Have Questions?</h3>
          <p className="text-[#6B6B7A] mb-6">
            Our team is ready to answer any question you have. Chat with us directly on WhatsApp —
            we typically respond within 5 minutes.
          </p>
          <a
            href="https://wa.me/628113702343?text=Hi%2C%20I%20have%20a%20question%20about%20Claw%27s%20AI%20employee%20solutions"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#FF6B2B] hover:bg-[#E5521A] text-white font-bold rounded-xl transition-all hover:scale-105"
          >
            Ask Us on WhatsApp →
          </a>
        </div>
      </div>
    </section>
  );
}
