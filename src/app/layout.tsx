import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://claw.agency"),
  title: "AI agency Claw | Custom AI Employee Solutions for Business",
  description:
    "AI agency Claw builds custom AI employees that automate your customer service, sales, marketing, and operations 24/7. Based in Canggu, Bali. Contact us on WhatsApp: +62 811-3702-343",
  keywords: [
    "AI employees",
    "business automation",
    "custom AI solutions",
    "AI implementation",
    "automation agency",
    "AI consultant",
    "chatbot development",
    "AI customer service",
    "AI sales automation",
    "AI marketing automation",
    "AI agency Bali",
    "AI employee solutions",
    "business AI automation",
    "AI workflow automation",
    "autonomous AI agent",
    "AI integration services",
    "WhatsApp AI automation",
    "CRM AI integration",
    "AI for business",
    "Claw AI agency",
  ],
  alternates: {
    canonical: "https://claw.agency",
  },
  openGraph: {
    title: "AI agency Claw | Custom AI Employee Solutions",
    description:
      "AI agency Claw builds custom AI employees that automate your customer service, sales, marketing, and operations 24/7. Based in Canggu, Bali. Contact us on WhatsApp: +62 811-3702-343",
    url: "https://claw.agency",
    siteName: "AI agency Claw",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI agency Claw | Custom AI Employee Solutions",
    description:
      "AI agency Claw builds custom AI employees that automate your customer service, sales, marketing, and operations 24/7. Based in Canggu, Bali. Contact us on WhatsApp: +62 811-3702-343",
    creator: "@clawagency",
  },
  verification: {
    google: "google-site-verification-placeholder",
    other: {
      "msvalidate.01": "bing-verification-placeholder",
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#FF6B2B",
};

const structuredData = [
  // 1. Organization
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "AI agency Claw",
    url: "https://claw.agency",
    logo: "https://claw.agency/logo.png",
    description:
      "Custom AI employee solutions for businesses worldwide. We build, deploy, and manage AI employees that automate customer service, sales, marketing, and operations 24/7.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Canggu",
      addressRegion: "Bali",
      addressCountry: "ID",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+62-811-3702-343",
      contactType: "sales",
      availableLanguage: ["English", "Indonesian"],
    },
    sameAs: [
      "https://twitter.com/clawagency",
      "https://linkedin.com/company/clawagency",
      "https://instagram.com/clawagency",
    ],
  },

  // 2. FAQPage
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What exactly is an AI employee and how is it different from a chatbot?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "An AI employee is a fully autonomous system that handles end-to-end business workflows across multiple channels, unlike a chatbot which only responds to simple queries. It learns your business, integrates with your tools, and operates 24/7 without human supervision.",
        },
      },
      {
        "@type": "Question",
        name: "How does Claw ensure my business data is secure?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We implement enterprise-grade encryption, strict data access controls, and comply with international data protection standards. Your data is never used to train third-party models.",
        },
      },
      {
        "@type": "Question",
        name: "What integrations do you support?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We support 100+ integrations including WhatsApp, Instagram, Slack, HubSpot, Salesforce, Shopify, and most major CRMs, ERPs, and communication platforms. Custom integrations are available on request.",
        },
      },
      {
        "@type": "Question",
        name: "How long does it take to deploy an AI employee?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Most AI employees are fully deployed within 2–4 weeks, depending on the complexity of integrations and the number of workflows required.",
        },
      },
      {
        "@type": "Question",
        name: "What happens if the AI makes a mistake?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our AI employees include built-in escalation protocols that hand off to a human agent when confidence is low. We also monitor performance continuously and retrain the system to minimize errors over time.",
        },
      },
      {
        "@type": "Question",
        name: "Can I try before committing to a full plan?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes — we offer a scoped pilot engagement so you can validate results before committing to a full deployment. Contact us on WhatsApp to discuss a pilot.",
        },
      },
      {
        "@type": "Question",
        name: "What industries do you serve?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We serve e-commerce, real estate, hospitality, healthcare, finance, SaaS, and professional services. Our AI employees are customized to each industry's specific workflows and compliance requirements.",
        },
      },
      {
        "@type": "Question",
        name: "What's included in the monthly management fee?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The monthly fee covers ongoing monitoring, performance optimization, model retraining, integration maintenance, and priority support from our team.",
        },
      },
      {
        "@type": "Question",
        name: "Can I scale up or add more AI employees later?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Absolutely. You can add additional AI employees or expand to new channels and workflows at any time. Our Growth and Enterprise plans are designed for multi-department scaling.",
        },
      },
      {
        "@type": "Question",
        name: "Why is Claw based in Bali, Indonesia?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Canggu, Bali is a global hub for tech talent and digital nomads, giving us access to world-class AI engineers while keeping costs competitive. We serve clients globally across all time zones.",
        },
      },
      {
        "@type": "Question",
        name: "Do you offer training for our team?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Every plan includes onboarding and training sessions for your team so they can work effectively alongside the AI employee and understand how to manage escalations.",
        },
      },
      {
        "@type": "Question",
        name: "What if I'm not satisfied with the results?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We offer a performance guarantee — if the AI employee doesn't meet agreed KPIs within the first 90 days, we will optimize at no extra cost or provide a prorated refund.",
        },
      },
    ],
  },

  // 3. Service schemas
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "AI Employee Starter Plan",
    provider: {
      "@type": "Organization",
      name: "AI agency Claw",
      url: "https://claw.agency",
    },
    description:
      "Entry-level AI employee deployment for small businesses. Includes one AI employee, core integrations, and 24/7 operations.",
    offers: {
      "@type": "Offer",
      price: "2997",
      priceCurrency: "USD",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: "2997",
        priceCurrency: "USD",
        unitText: "MONTH",
      },
    },
    url: "https://claw.agency/#pricing",
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "AI Employee Growth Plan",
    provider: {
      "@type": "Organization",
      name: "AI agency Claw",
      url: "https://claw.agency",
    },
    description:
      "Comprehensive AI employee solution for growing businesses. Includes multiple AI employees, advanced integrations, and dedicated support.",
    offers: {
      "@type": "Offer",
      price: "7997",
      priceCurrency: "USD",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: "7997",
        priceCurrency: "USD",
        unitText: "MONTH",
      },
    },
    url: "https://claw.agency/#pricing",
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "AI Employee Enterprise Plan",
    provider: {
      "@type": "Organization",
      name: "AI agency Claw",
      url: "https://claw.agency",
    },
    description:
      "Fully custom AI employee infrastructure for enterprise organizations. Custom pricing, unlimited AI employees, and white-glove service.",
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceSpecification: {
        "@type": "PriceSpecification",
        description: "Custom pricing — contact us for a quote",
      },
    },
    url: "https://claw.agency/#pricing",
  },

  // 4. WebSite with SearchAction
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "AI agency Claw",
    url: "https://claw.agency",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://claw.agency/?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  },

  // 5. BreadcrumbList — Home only
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://claw.agency",
      },
    ],
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {structuredData.map((schema, index) => (
          <script
            key={index}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
