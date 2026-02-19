import type { Metadata } from "next";
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
  metadataBase: new URL("https://openclaw.agency"),
  title: "OpenClaw AI Agency | Enterprise AI Agent Automation",
  description:
    "We deploy hardened, production-ready OpenClaw AI agents for businesses. Docker sandboxing, multi-channel integration (Slack, WhatsApp, Teams), custom Skills, and 24/7 autonomous automation. No terminal hacks—just results.",
  keywords: [
    "OpenClaw deployment",
    "enterprise AI agent",
    "AI automation agency",
    "business AI automation",
    "OpenClaw gateway",
    "AI agent security",
    "Docker AI sandbox",
    "Slack AI agent",
    "WhatsApp AI automation",
    "custom AI skills",
    "Claude AI deployment",
    "AI workflow automation",
    "autonomous AI agent",
    "AI DevOps automation",
    "email AI agent",
  ],
  authors: [{ name: "OpenClaw AI Agency" }],
  creator: "OpenClaw AI Agency",
  publisher: "OpenClaw AI Agency",
  manifest: "/manifest.json",
  verification: {
    google: "your-google-verification-code",
    other: {
      "msvalidate.01": "your-bing-verification-code",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://openclaw.agency",
    siteName: "OpenClaw AI Agency",
    title: "OpenClaw AI Agency | Enterprise AI Agent Automation",
    description:
      "We deploy hardened, production-ready OpenClaw AI agents for businesses. Docker sandboxing, multi-channel integration, custom Skills, and 24/7 autonomous automation.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "OpenClaw AI Agency - Enterprise AI Agent Deployment",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "OpenClaw AI Agency | Enterprise AI Agent Automation",
    description:
      "We deploy hardened, production-ready OpenClaw AI agents for businesses. No terminal hacks—just results.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://openclaw.agency",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "OpenClaw AI Agency",
  description:
    "Enterprise-grade OpenClaw AI agent deployment and automation services for businesses.",
  url: "https://openclaw.agency",
  logo: "https://openclaw.agency/logo.png",
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    email: "hello@openclaw.agency",
  },
  sameAs: [
    "https://twitter.com/openclawagency",
    "https://linkedin.com/company/openclaw-agency",
  ],
  offers: {
    "@type": "Offer",
    description:
      "Enterprise AI agent deployment, custom skill development, and ongoing management",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is OpenClaw?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "OpenClaw is an enterprise-grade AI agent deployment framework that transforms experimental AI agents into production-ready business automation systems with hardened security, custom skills, and multi-channel integration.",
      },
    },
    {
      "@type": "Question",
      name: "How long does deployment take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most deployments are completed within 2-4 weeks, depending on complexity. Our Starter package includes a 2-week deployment timeline, while Enterprise solutions may take 4-6 weeks.",
      },
    },
    {
      "@type": "Question",
      name: "What AI models do you support?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We support a fallback chain of Claude 3.5/4.0 → Gemini 2.0 Flash → GPT-4o Mini, ensuring 99.9% uptime through automatic model switching.",
      },
    },
    {
      "@type": "Question",
      name: "Is my data secure?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. Every agent runs in Docker-sandboxed environments with OAuth2 secrets management, encrypted communications, and SOC2-compliant infrastructure.",
      },
    },
    {
      "@type": "Question",
      name: "What channels can agents integrate with?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our agents integrate with Slack, WhatsApp, Microsoft Teams, Discord, Telegram, Email, and custom webhooks.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer ongoing support?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, all packages include ongoing support. Starter includes email support, Professional includes priority support with a dedicated Slack channel, and Enterprise includes 24/7 dedicated support.",
      },
    },
    {
      "@type": "Question",
      name: "Can I customize the agent's personality?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, our SOUL Workshop process defines your agent's personality, constraints, decision logic, and communication style through a comprehensive SOUL.md configuration.",
      },
    },
    {
      "@type": "Question",
      name: "What's the pricing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our Starter package begins at $2,497/month, Professional at $4,997/month, and Enterprise pricing is custom. All include deployment, hosting, and support.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer a free consultation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we offer a free 30-minute discovery call to assess your automation needs and recommend the best solution.",
      },
    },
    {
      "@type": "Question",
      name: "What industries do you serve?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We serve all industries including SaaS, e-commerce, healthcare, finance, legal, and manufacturing. Our agents are customized for each industry's specific workflows and compliance requirements.",
      },
    },
  ],
};

const serviceSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "OpenClaw Starter",
    description:
      "Single AI agent deployment with 3 custom skills, 2 channel integrations, Docker-sandboxed hosting, email support, and 2-week deployment timeline.",
    provider: {
      "@type": "Organization",
      name: "OpenClaw Agency",
    },
    offers: {
      "@type": "Offer",
      price: "2497",
      priceCurrency: "USD",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: "2497",
        priceCurrency: "USD",
        unitText: "MONTH",
      },
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "OpenClaw Professional",
    description:
      "Up to 3 AI agents with 10 custom skills each, all channel integrations, advanced analytics dashboard, priority support with dedicated Slack channel, and 3-week deployment timeline.",
    provider: {
      "@type": "Organization",
      name: "OpenClaw Agency",
    },
    offers: {
      "@type": "Offer",
      price: "4997",
      priceCurrency: "USD",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: "4997",
        priceCurrency: "USD",
        unitText: "MONTH",
      },
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "OpenClaw Enterprise",
    description:
      "Unlimited AI agents with unlimited custom skills, all channel integrations plus custom webhooks, white-label deployment, 24/7 dedicated support, custom SLA, and 4-6 week deployment timeline.",
    provider: {
      "@type": "Organization",
      name: "OpenClaw Agency",
    },
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      description: "Custom pricing based on requirements",
    },
  },
];

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "OpenClaw Agency",
  url: "https://openclaw.agency",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://openclaw.agency/?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://openclaw.agency",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <meta name="theme-color" content="#FF6B2B" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema),
          }}
        />
        {serviceSchemas.map((schema, index) => (
          <script
            key={`service-${index}`}
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(schema),
            }}
          />
        ))}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbSchema),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
