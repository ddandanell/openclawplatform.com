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
  title: "OpenClaw Deployment Agency | Enterprise AI Agent Automation",
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
  authors: [{ name: "OpenClaw Agency" }],
  creator: "OpenClaw Agency",
  publisher: "OpenClaw Agency",
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
    siteName: "OpenClaw Agency",
    title: "OpenClaw Deployment Agency | Enterprise AI Agent Automation",
    description:
      "We deploy hardened, production-ready OpenClaw AI agents for businesses. Docker sandboxing, multi-channel integration, custom Skills, and 24/7 autonomous automation.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "OpenClaw Agency - Enterprise AI Agent Deployment",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "OpenClaw Deployment Agency | Enterprise AI Agent Automation",
    description:
      "We deploy hardened, production-ready OpenClaw AI agents for businesses. No terminal hacks—just results.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://openclaw.agency",
  },
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
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "OpenClaw Agency",
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
            }),
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
