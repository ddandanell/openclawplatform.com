import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service - AI agency Claw",
  description:
    "AI agency Claw Terms of Service - Learn the terms and conditions governing your use of our custom AI employee solutions.",
  robots: "index, follow",
  alternates: {
    canonical: "https://claw.agency/terms",
  },
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#0A0A0B] pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Terms of Service
          </h1>
          <p className="text-[#6B6B7A]">Effective: February 2026</p>
        </div>

        {/* Content */}
        <div className="prose prose-invert max-w-none">
          {/* Acceptance of Terms */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
            <p className="text-[#9B9BA4] leading-relaxed mb-4">
              By accessing and using the AI agency Claw website and services ("Services"), you accept and agree to be bound by the terms and provision of this Agreement. Additionally, when using our Services, you shall be subject to any posted guidelines or rules applicable to such services.
            </p>
            <p className="text-[#9B9BA4] leading-relaxed">
              If you do not agree to these Terms of Service, you should not use our Services. We reserve the right to update these terms at any time without prior notice.
            </p>
          </section>

          {/* Description of Service */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">2. Description of Service</h2>
            <p className="text-[#9B9BA4] leading-relaxed mb-4">
              AI agency Claw provides custom AI employee solutions for businesses worldwide, including but not limited to:
            </p>
            <ul className="list-disc list-inside text-[#9B9BA4] leading-relaxed mb-4 space-y-2">
              <li>Hardened Security Setup</li>
              <li>Custom Skill Development</li>
              <li>Multi-Channel Integration (Slack, WhatsApp, Teams, Discord, Telegram)</li>
              <li>VPS Provisioning and Hosting</li>
              <li>SOUL Workshop Configuration</li>
              <li>Ongoing Management and Support</li>
            </ul>
            <p className="text-[#9B9BA4] leading-relaxed">
              We reserve the right to modify or discontinue the Services at any time with reasonable notice.
            </p>
          </section>

          {/* User Accounts and Responsibilities */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">3. User Accounts and Responsibilities</h2>
            <p className="text-[#9B9BA4] leading-relaxed mb-4">
              You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to:
            </p>
            <ul className="list-disc list-inside text-[#9B9BA4] leading-relaxed mb-4 space-y-2">
              <li>Provide accurate and complete information when creating an account</li>
              <li>Promptly update any changes to your information</li>
              <li>Maintain the security of your account credentials</li>
              <li>Accept responsibility for all activities under your account</li>
              <li>Notify us immediately of any unauthorized access or security breach</li>
            </ul>
            <p className="text-[#9B9BA4] leading-relaxed">
              You agree not to use the Services for any unlawful purpose or in any way that could damage, disable, overburden, or impair our servers or networks.
            </p>
          </section>

          {/* Payment Terms */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">4. Payment Terms</h2>
            <p className="text-[#9B9BA4] leading-relaxed mb-4">
              Our services are provided under the following pricing structure:
            </p>
            
            <div className="bg-[#16161A] rounded-xl p-6 border border-[#2A2A30] mb-6">
              <h3 className="text-xl font-semibold text-white mb-4">Pricing Tiers</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-[#2A2A30] pb-4">
                  <div>
                    <h4 className="text-white font-medium">Starter</h4>
                    <p className="text-sm text-[#6B6B7A]">Single agent, 3 custom skills, 2 channel integrations</p>
                  </div>
                  <span className="text-[#FF6B2B] font-bold text-xl">$2,497/month</span>
                </div>
                <div className="flex justify-between items-center border-b border-[#2A2A30] pb-4">
                  <div>
                    <h4 className="text-white font-medium">Professional</h4>
                    <p className="text-sm text-[#6B6B7A]">Up to 3 agents, 10 skills each, all integrations</p>
                  </div>
                  <span className="text-[#FF6B2B] font-bold text-xl">$4,997/month</span>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="text-white font-medium">Enterprise</h4>
                    <p className="text-sm text-[#6B6B7A]">Unlimited agents, custom solutions, white-label</p>
                  </div>
                  <span className="text-[#FF6B2B] font-bold text-xl">Custom pricing</span>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-white mb-3 mt-6">Payment Terms</h3>
            <ul className="list-disc list-inside text-[#9B9BA4] leading-relaxed mb-4 space-y-2">
              <li>All fees are billed monthly in advance unless otherwise agreed</li>
              <li>Payment is due within 14 days of invoice date</li>
              <li>Enterprise clients may have customized billing arrangements</li>
              <li>All prices are in USD unless otherwise specified</li>
              <li>Refunds are handled on a case-by-case basis</li>
            </ul>
            <p className="text-[#9B9BA4] leading-relaxed">
              We reserve the right to modify our pricing with 30 days' prior notice.
            </p>
          </section>

          {/* Intellectual Property Rights */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">5. Intellectual Property Rights</h2>
            <p className="text-[#9B9BA4] leading-relaxed mb-4">
              The Services and all content, features, and functionality are owned by AI agency Claw and are protected by copyright, trademark, and other intellectual property laws.
            </p>
            <h3 className="text-xl font-semibold text-white mb-3 mt-6">Our Rights</h3>
            <ul className="list-disc list-inside text-[#9B9BA4] leading-relaxed mb-4 space-y-2">
              <li>All Claw technology and frameworks</li>
              <li>Our proprietary methodologies and processes (including SOUL Workshop)</li>
              <li>Documentation, templates, and training materials</li>
              <li>Brand identity, logos, and trademarks</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mb-3 mt-6">Your Rights</h3>
            <p className="text-[#9B9BA4] leading-relaxed mb-4">
              You retain ownership of:
            </p>
            <ul className="list-disc list-inside text-[#9B9BA4] leading-relaxed mb-4 space-y-2">
              <li>Your business data and information</li>
              <li>Custom configurations and workflows you create</li>
              <li>Content you provide for agent training</li>
            </ul>
            <p className="text-[#9B9BA4] leading-relaxed">
              You grant us a license to use your data solely for providing the Services.
            </p>
          </section>

          {/* Limitation of Liability */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">6. Limitation of Liability</h2>
            <p className="text-[#9B9BA4] leading-relaxed mb-4">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, AI AGENCY CLAW SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION:
            </p>
            <ul className="list-disc list-inside text-[#9B9BA4] leading-relaxed mb-4 space-y-2">
              <li>Loss of profits, revenue, or business opportunities</li>
              <li>Loss of data or information</li>
              <li>Costs of replacement services</li>
              <li>Personal injury or property damages</li>
            </ul>
            <p className="text-[#9B9BA4] leading-relaxed mb-4">
              Our total liability under these Terms shall not exceed the total amount paid by you for the Services in the twelve (12) months preceding the claim.
            </p>
            <p className="text-[#9B9BA4] leading-relaxed">
              This limitation does not apply to liability arising from our gross negligence or willful misconduct.
            </p>
          </section>

          {/* Service Level Agreement */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">7. Service Level Agreement</h2>
            <p className="text-[#9B9BA4] leading-relaxed mb-4">
              We commit to the following service levels for our deployed AI employees:
            </p>
            <ul className="list-disc list-inside text-[#9B9BA4] leading-relaxed mb-4 space-y-2">
              <li><strong>Uptime:</strong> 99.9% availability through our fallback chain (Claude 3.5/4.0 → Gemini 2.0 Flash → GPT-4o Mini)</li>
              <li><strong>Response Time:</strong> Initial response within 2 business hours</li>
              <li><strong>Deployment Timeline:</strong> Starter: 2 weeks, Professional: 3 weeks, Enterprise: 4-6 weeks</li>
              <li><strong>Support Channels:</strong> Email (all tiers), Priority Slack (Professional+), 24/7 Dedicated (Enterprise)</li>
            </ul>
            <p className="text-[#9B9BA4] leading-relaxed">
              Scheduled maintenance will be communicated with at least 48 hours' notice. Exclusions apply for force majeure events.
            </p>
          </section>

          {/* Termination */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">8. Termination</h2>
            <h3 className="text-xl font-semibold text-white mb-3 mt-6">Termination by You</h3>
            <p className="text-[#9B9BA4] leading-relaxed mb-4">
              You may cancel your subscription at any time. Cancellations take effect at the end of the current billing period. No refunds will be provided for partial months unless otherwise agreed.
            </p>

            <h3 className="text-xl font-semibold text-white mb-3 mt-6">Termination by Us</h3>
            <p className="text-[#9B9BA4] leading-relaxed mb-4">
              We may terminate or suspend your access to the Services immediately if:
            </p>
            <ul className="list-disc list-inside text-[#9B9BA4] leading-relaxed mb-4 space-y-2">
              <li>You breach these Terms of Service</li>
              <li>Your payment is overdue by more than 30 days</li>
              <li>We are required to do so by law</li>
              <li>We discontinue the Services</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mb-3 mt-6">Effect of Termination</h3>
            <p className="text-[#9B9BA4] leading-relaxed">
              Upon termination, your right to use the Services ceases immediately. You may request a copy of your data within 30 days of termination. We will retain your data for 30 days after termination, after which it may be deleted.
            </p>
          </section>

          {/* Governing Law */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">9. Governing Law</h2>
            <p className="text-[#9B9BA4] leading-relaxed mb-4">
              These Terms of Service shall be governed by and construed in accordance with the laws of Indonesia, without regard to its conflict of law provisions.
            </p>
            <p className="text-[#9B9BA4] leading-relaxed">
              Any legal action or proceeding relating to these Terms shall be subject to the exclusive jurisdiction of the courts located in Bali, Indonesia.
            </p>
          </section>

          {/* Dispute Resolution */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">10. Dispute Resolution</h2>
            <p className="text-[#9B9BA4] leading-relaxed mb-4">
              In the event of any dispute arising from these Terms or the Services, we encourage you to contact us first to seek a resolution. We will make good faith efforts to resolve any disputes through negotiation.
            </p>
            <p className="text-[#9B9BA4] leading-relaxed mb-4">
              If negotiation fails, disputes may be resolved through:
            </p>
            <ul className="list-disc list-inside text-[#9B9BA4] leading-relaxed mb-4 space-y-2">
              <li>Mediation by a mutually agreed mediator</li>
              <li>Binding arbitration in accordance with applicable arbitration rules</li>
              <li>Legal proceedings in applicable courts</li>
            </ul>
            <p className="text-[#9B9BA4] leading-relaxed">
              Each party will bear its own costs in any dispute resolution process.
            </p>
          </section>

          {/* Changes to Terms */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">11. Changes to Terms</h2>
            <p className="text-[#9B9BA4] leading-relaxed mb-4">
              We reserve the right to modify these Terms of Service at any time. We will provide notice of material changes by:
            </p>
            <ul className="list-disc list-inside text-[#9B9BA4] leading-relaxed mb-4 space-y-2">
              <li>Posting the updated terms on our website</li>
              <li>Emailing registered users at least 30 days before changes take effect</li>
            </ul>
            <p className="text-[#9B9BA4] leading-relaxed mb-4">
              Your continued use of the Services after the effective date of any changes constitutes acceptance of the new terms.
            </p>
            <p className="text-[#9B9BA4] leading-relaxed">
              If you do not agree to the new terms, you may terminate your account before the changes take effect.
            </p>
          </section>

          {/* Contact Information */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">12. Contact Information</h2>
            <p className="text-[#9B9BA4] leading-relaxed mb-4">
              If you have any questions about these Terms of Service, please contact us:
            </p>
            <div className="bg-[#16161A] rounded-xl p-6 border border-[#2A2A30]">
              <p className="text-[#9B9BA4] leading-relaxed mb-2">
                <strong className="text-white">AI agency Claw</strong>
              </p>
              <p className="text-[#9B9BA4] leading-relaxed mb-2">
                Canggu, Bali, Indonesia
              </p>
              <p className="text-[#9B9BA4] leading-relaxed mb-2">
                Email:{" "}
                <a href="mailto:hello@claw.agency" className="text-[#FF6B2B] hover:underline">hello@claw.agency</a>
              </p>
              <p className="text-[#9B9BA4] leading-relaxed mb-2">
                WhatsApp:{" "}
                <a href="https://wa.me/628113702343" className="text-[#FF6B2B] hover:underline">+62 811-3702-343</a>
              </p>
              <p className="text-[#9B9BA4] leading-relaxed">
                Response time: Within 2 business hours
              </p>
            </div>
          </section>
        </div>

        {/* Back to Home */}
        <div className="mt-16 pt-8 border-t border-[#2A2A30] text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[#FF6B2B] hover:text-white transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
