import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Page Not Found - OpenClaw AI Agency",
  description:
    "The page you&apos;re looking for doesn&apos;t exist. Explore our AI agent deployment services or contact us for assistance.",
  robots: "index, follow",
  alternates: {
    canonical: "https://openclaw.agency/404",
  },
};

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#0A0A0B] pt-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            {/* 404 Visual */}
            <div className="relative mb-8">
              <span className="text-[150px] md:text-[200px] font-bold text-[#1A1A20] leading-none">
                404
              </span>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 rounded-full bg-[#FF6B2B]/20 flex items-center justify-center animate-pulse">
                  <svg
                    className="w-12 h-12 text-[#FF6B2B]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Message */}
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Page Not Found
            </h1>
            <p className="text-[#6B6B7A] text-lg mb-8 max-w-xl mx-auto">
              The page you&apos;re looking for doesn&apos;t exist or has been moved.
              Let&apos;s get you back on track with our AI agent services.
            </p>

            {/* Back to Home Button */}
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#FF6B2B] hover:bg-[#E5521A] text-white font-semibold rounded-lg transition-all hover:scale-105 glow-orange-sm mb-12"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              Back to Home
            </Link>

            {/* Helpful Links */}
            <div className="pt-8 border-t border-[#2A2A30]">
              <p className="text-[#6B6B7A] text-sm mb-6">Or explore our main pages:</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
                <Link
                  href="/#services"
                  className="p-4 rounded-xl bg-[#16161A] border border-[#2A2A30] hover:border-[#FF6B2B]/50 transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#FF6B2B]/10 flex items-center justify-center mb-3 group-hover:bg-[#FF6B2B]/20 transition-colors">
                    <svg
                      className="w-5 h-5 text-[#FF6B2B]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-white font-medium">Services</h3>
                  <p className="text-xs text-[#6B6B7A] mt-1">What we offer</p>
                </Link>

                <Link
                  href="/#pricing"
                  className="p-4 rounded-xl bg-[#16161A] border border-[#2A2A30] hover:border-[#FF6B2B]/50 transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#FF6B2B]/10 flex items-center justify-center mb-3 group-hover:bg-[#FF6B2B]/20 transition-colors">
                    <svg
                      className="w-5 h-5 text-[#FF6B2B]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-white font-medium">Pricing</h3>
                  <p className="text-xs text-[#6B6B7A] mt-1">Our plans</p>
                </Link>

                <Link
                  href="/#case-studies"
                  className="p-4 rounded-xl bg-[#16161A] border border-[#2A2A30] hover:border-[#FF6B2B]/50 transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#FF6B2B]/10 flex items-center justify-center mb-3 group-hover:bg-[#FF6B2B]/20 transition-colors">
                    <svg
                      className="w-5 h-5 text-[#FF6B2B]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-white font-medium">Case Studies</h3>
                  <p className="text-xs text-[#6B6B7A] mt-1">Success stories</p>
                </Link>

                <Link
                  href="/#contact"
                  className="p-4 rounded-xl bg-[#16161A] border border-[#2A2A30] hover:border-[#FF6B2B]/50 transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#FF6B2B]/10 flex items-center justify-center mb-3 group-hover:bg-[#FF6B2B]/20 transition-colors">
                    <svg
                      className="w-5 h-5 text-[#FF6B2B]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-white font-medium">Contact</h3>
                  <p className="text-xs text-[#6B6B7A] mt-1">Get in touch</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
