import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Page Not Found - AI agency Claw",
  description:
    "The page you're looking for doesn't exist or has been moved. Explore our custom AI employee solutions or contact us for assistance.",
  robots: "index, follow",
  alternates: {
    canonical: "https://claw.agency/404",
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
              The page you're looking for doesn't exist or has been moved.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              {/* Back to Home Button */}
              <Link
                href="/"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#FF6B2B] hover:bg-[#E5521A] text-white font-semibold rounded-lg transition-all hover:scale-105 glow-orange-sm"
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
                Go Home
              </Link>

              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/628113702343"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#16161A] hover:bg-[#1E1E24] border border-[#2A2A30] hover:border-[#FF6B2B]/50 text-white font-semibold rounded-lg transition-all hover:scale-105"
              >
                <svg
                  className="w-5 h-5 text-[#25D366]"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Need help? Chat with us on WhatsApp
              </a>
            </div>

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
