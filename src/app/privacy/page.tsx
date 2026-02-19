import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy - AI agency Claw",
  description:
    "AI agency Claw Privacy Policy - Learn how we collect, use, and protect your personal information when you use our custom AI employee solutions.",
  robots: "index, follow",
  alternates: {
    canonical: "https://claw.agency/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#0A0A0B] pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Privacy Policy
          </h1>
          <p className="text-[#6B6B7A]">Last updated: February 2026</p>
        </div>

        {/* Content */}
        <div className="prose prose-invert max-w-none">
          {/* Introduction */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">Introduction</h2>
            <p className="text-[#9B9BA4] leading-relaxed mb-4">
              At AI agency Claw ("we," "our," or "us"), we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your data when you visit our website, use our services, or engage with our custom AI employee solutions.
            </p>
            <p className="text-[#9B9BA4] leading-relaxed">
              By accessing or using our services, you agree to this Privacy Policy. If you do not agree with the terms of this policy, please do not use our services.
            </p>
          </section>

          {/* Information We Collect */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">Information We Collect</h2>
            
            <h3 className="text-xl font-semibold text-white mb-3 mt-6">Personal Information</h3>
            <p className="text-[#9B9BA4] leading-relaxed mb-4">
              We may collect personal information that you voluntarily provide to us when you:
            </p>
            <ul className="list-disc list-inside text-[#9B9BA4] leading-relaxed mb-4 space-y-2">
              <li>Fill out a contact form or inquiry form</li>
              <li>Request a consultation or quote</li>
              <li>Subscribe to our newsletter</li>
              <li>Engage our services for AI employee solutions</li>
              <li>Communicate with us via email, phone, WhatsApp, or other channels</li>
            </ul>
            <p className="text-[#9B9BA4] leading-relaxed mb-4">
              This information may include:
            </p>
            <ul className="list-disc list-inside text-[#9B9BA4] leading-relaxed mb-4 space-y-2">
              <li>Name and business name</li>
              <li>Email address and phone number</li>
              <li>Company information and job title</li>
              <li>Billing and payment information</li>
              <li>Communication preferences</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mb-3 mt-6">Usage Data</h3>
            <p className="text-[#9B9BA4] leading-relaxed mb-4">
              We automatically collect certain information when you visit, use, or navigate our website. This data may include:
            </p>
            <ul className="list-disc list-inside text-[#9B9BA4] leading-relaxed mb-4 space-y-2">
              <li>IP address and browser type</li>
              <li>Pages visited and time spent on pages</li>
              <li>Links clicked and actions taken</li>
              <li>Device information and operating system</li>
              <li>Referral source and exit pages</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mb-3 mt-6">Cookies and Tracking Technologies</h3>
            <p className="text-[#9B9BA4] leading-relaxed">
              We use cookies and similar tracking technologies to enhance your browsing experience. Cookies are small files stored on your device that help us analyze web traffic and improve our website. You can instruct your browser to refuse all cookies or indicate when a cookie is being sent.
            </p>
          </section>

          {/* How We Use Your Information */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">How We Use Your Information</h2>
            <p className="text-[#9B9BA4] leading-relaxed mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc list-inside text-[#9B9BA4] leading-relaxed mb-4 space-y-2">
              <li>Provide, maintain, and improve our services</li>
              <li>Respond to your inquiries and fulfill your requests</li>
              <li>Process transactions and send related information</li>
              <li>Send you technical notices, updates, and support messages</li>
              <li>Communicate with you about products, services, and events</li>
              <li>Monitor and analyze trends, usage, and activities</li>
              <li>Detect, investigate, and prevent fraudulent transactions</li>
              <li>Comply with legal obligations and enforce our terms</li>
            </ul>
          </section>

          {/* Data Security */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">Data Security</h2>
            <p className="text-[#9B9BA4] leading-relaxed mb-4">
              We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
            </p>
            <ul className="list-disc list-inside text-[#9B9BA4] leading-relaxed mb-4 space-y-2">
              <li>Encryption of data in transit and at rest</li>
              <li>Secure socket layer (SSL) technology</li>
              <li>Regular security audits and vulnerability assessments</li>
              <li>Access controls and authentication requirements</li>
              <li>Employee training on data protection</li>
            </ul>
            <p className="text-[#9B9BA4] leading-relaxed">
              While we strive to protect your personal information, no method of transmission over the Internet is 100% secure. We cannot guarantee absolute security.
            </p>
          </section>

          {/* Third-Party Services */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">Third-Party Services</h2>
            <p className="text-[#9B9BA4] leading-relaxed mb-4">
              We may share your information with third-party service providers who assist us in operating our website, conducting our business, or providing services to you. These parties are obligated to maintain the confidentiality of your information and are restricted from using it for any other purpose.
            </p>
            <p className="text-[#9B9BA4] leading-relaxed mb-4">
              Third-party services we may use include:
            </p>
            <ul className="list-disc list-inside text-[#9B9BA4] leading-relaxed mb-4 space-y-2">
              <li>Cloud hosting and infrastructure providers</li>
              <li>Payment processors</li>
              <li>Analytics and tracking services</li>
              <li>Customer relationship management (CRM) tools</li>
              <li>Email marketing platforms</li>
            </ul>
            <p className="text-[#9B9BA4] leading-relaxed">
              We do not sell, trade, or otherwise transfer your personal information to outside parties unless we provide you with advance notice.
            </p>
          </section>

          {/* Your Rights */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">Your Rights</h2>
            <p className="text-[#9B9BA4] leading-relaxed mb-4">
              Depending on your location, you may have certain rights regarding your personal information:
            </p>

            <h3 className="text-xl font-semibold text-white mb-3 mt-6">GDPR Rights (European Union)</h3>
            <p className="text-[#9B9BA4] leading-relaxed mb-4">
              If you are located in the EU, you have the right to:
            </p>
            <ul className="list-disc list-inside text-[#9B9BA4] leading-relaxed mb-4 space-y-2">
              <li><strong>Access:</strong> Request copies of your personal data</li>
              <li><strong>Rectification:</strong> Request correction of inaccurate data</li>
              <li><strong>Erasure:</strong> Request deletion of your personal data ("right to be forgotten")</li>
              <li><strong>Restriction:</strong> Request restriction of processing</li>
              <li><strong>Data Portability:</strong> Request transfer of your data to another service</li>
              <li><strong>Objection:</strong> Object to processing of your data</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mb-3 mt-6">CCPA Rights (California)</h3>
            <p className="text-[#9B9BA4] leading-relaxed mb-4">
              If you are a California resident, you have the right to:
            </p>
            <ul className="list-disc list-inside text-[#9B9BA4] leading-relaxed mb-4 space-y-2">
              <li><strong>Know:</strong> Request disclosure of categories of personal information collected</li>
              <li><strong>Delete:</strong> Request deletion of personal information</li>
              <li><strong>Opt-Out:</strong> Opt-out of the sale of personal information</li>
              <li><strong>Non-Discrimination:</strong> Not be discriminated against for exercising these rights</li>
            </ul>
            <p className="text-[#9B9BA4] leading-relaxed">
              To exercise any of these rights, please contact us at{" "}
              <a href="mailto:hello@claw.agency" className="text-[#FF6B2B] hover:underline">hello@claw.agency</a>{" "}
              or via WhatsApp: <a href="https://wa.me/628113702343" className="text-[#FF6B2B] hover:underline">+62 811-3702-343</a>.
            </p>
          </section>

          {/* Cookies Policy */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">Cookies Policy</h2>
            <p className="text-[#9B9BA4] leading-relaxed mb-4">
              Our website uses cookies to distinguish you from other users. This helps us provide you with a better experience and allows us to improve our site.
            </p>

            <h3 className="text-xl font-semibold text-white mb-3 mt-6">Types of Cookies We Use</h3>
            <ul className="list-disc list-inside text-[#9B9BA4] leading-relaxed mb-4 space-y-2">
              <li><strong>Essential Cookies:</strong> Necessary for the website to function properly</li>
              <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website</li>
              <li><strong>Functional Cookies:</strong> Allow enhanced functionality and personalization</li>
              <li><strong>Marketing Cookies:</strong> Used to track visitors across websites for advertising purposes</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mb-3 mt-6">Managing Cookies</h3>
            <p className="text-[#9B9BA4] leading-relaxed">
              You can manage or disable cookies through your browser settings. However, please note that disabling essential cookies may affect the functionality of our website.
            </p>
          </section>

          {/* Changes to This Policy */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">Changes to This Policy</h2>
            <p className="text-[#9B9BA4] leading-relaxed mb-4">
              We may update this Privacy Policy from time to time to reflect changes in our practices, technologies, or legal requirements. We will post any changes on this page and update the "Last updated" date at the top of this policy.
            </p>
            <p className="text-[#9B9BA4] leading-relaxed">
              We encourage you to review this Privacy Policy periodically to stay informed about how we protect your information.
            </p>
          </section>

          {/* Contact Information */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">Contact Information</h2>
            <p className="text-[#9B9BA4] leading-relaxed mb-4">
              If you have any questions, concerns, or requests regarding this Privacy Policy, please contact us:
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
