"use client";
import { useRef, useEffect, useState } from "react";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Ensure all required attributes are set programmatically as well
    video.muted = true;
    video.loop = true;
    video.playsInline = true;
    video.playbackRate = 1;

    const reveal = () => {
      video.play().catch(() => {});
      setVideoLoaded(true);
    };

    // If already has enough data, reveal immediately
    if (video.readyState >= 2) {
      reveal();
      return;
    }

    // Listen for the earliest possible "has first frame" event
    video.addEventListener("loadeddata", reveal, { once: true });
    // Also listen for canplaythrough as a secondary trigger
    video.addEventListener("canplaythrough", reveal, { once: true });

    // Fallback: always show the video after 3s regardless of events
    const fallbackTimer = setTimeout(reveal, 3000);

    return () => {
      video.removeEventListener("loadeddata", reveal);
      video.removeEventListener("canplaythrough", reveal);
      clearTimeout(fallbackTimer);
    };
  }, []);

  return (

    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
      style={{ backgroundColor: "#0A0A0B" }}
    >
      {/* Background video — full cover, positioned absolutely behind all content */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="hero-video-bg"
          style={{
            opacity: videoLoaded ? 1 : 0,
            transition: "opacity 1s ease-in-out",
          }}
          aria-hidden="true"
          src="/herovideo.mp4"
        />
        {/* Premium gradient overlay: dark at top/bottom, semi-transparent in middle so video shows through */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, rgba(10,10,11,0.55) 0%, rgba(10,10,11,0.35) 40%, rgba(10,10,11,0.55) 75%, rgba(10,10,11,0.85) 100%)",
          }}
        />
      </div>

      {/* Overlays removed so video is fully visible behind text */}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center z-10">
        {/* Feature badges */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#FF6B2B] bg-[#FF6B2B] text-white text-sm font-medium">
            🤖 AI Employee Solutions
          </div>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#FF6B2B] bg-[#FF6B2B] text-white text-sm font-medium">
            🌏 Based in Bali, Indonesia
          </div>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#FF6B2B] bg-[#FF6B2B] text-white text-sm font-medium">
            ⚡ 24/7 Autonomous Operations
          </div>
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-tight mb-6 max-w-5xl mx-auto">
          We Connect Directly. We <span className="gradient-text">Understand Your Challenges.</span>
        </h1>

        {/* Sub-headline — updated with new company description */}
        <p className="text-xl sm:text-2xl text-[#D0D0DC] max-w-3xl mx-auto mb-4 leading-relaxed">
          The AI landscape moves faster than most companies can adapt. That's exactly why we exist — to build <strong className="text-[#E8E8F0]">secure, intelligent AI solutions</strong> wrapped in strict guardrails and bulletproof security protocols that never step outside your boundaries.
        </p>
        <p className="text-base sm:text-lg text-[#B0B0C0] max-w-2xl mx-auto mb-6 leading-relaxed">
          One permanent agent stays embedded in your operations — continuously learning, refining responses, and evolving alongside your business over time.
        </p>

        {/* Service Options - Two Paths */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <div className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#FF6B2B] bg-[#FF6B2B] text-white text-sm font-medium">
            ⚡ Hands-Off Implementation
          </div>
          <span className="text-[#6B6B7A]">or</span>
          <div className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#FF6B2B] bg-[#FF6B2B] text-white text-sm font-medium">
            📋 Deep Partnership (Company Blueprinting)
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          {/* Primary CTA - WhatsApp */}
          <a
            href="https://wa.me/628113702343?text=Hi%20Claw%2C%20I%27m%20interested%20in%20AI%20employee%20solutions%20for%20my%20business"
            target="_blank"
            rel="noopener noreferrer"
            className="group px-8 py-4 bg-[#FF6B2B] hover:bg-[#E5521A] text-white font-bold text-lg rounded-xl transition-all hover:scale-105 glow-orange flex items-center gap-3 animate-cta-pulse"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="white" className="shrink-0">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Chat With Us on WhatsApp
          </a>

          {/* Secondary CTA */}
          <a
            href="https://wa.me/628113702343?text=I%27d%20like%20a%20free%20AI%20consultation%20please"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 border border-[#2A2A30] hover:border-[#FF6B2B] text-white font-semibold text-lg rounded-xl transition-all bg-[#16161A] flex items-center gap-2"
          >
            Get a Free AI Consultation
          </a>

          {/* Tertiary CTA */}
          <a
            href="#services"
            className="px-8 py-4 border border-[#2A2A30] hover:border-[#FF6B2B] text-white font-semibold text-lg rounded-xl transition-all bg-[#16161A] flex items-center gap-2"
          >
            See Our Solutions
          </a>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-16">
          {[
            { value: "150+", label: "AI Employees Deployed", sub: "across industries" },
            { value: "99.9%", label: "System Uptime", sub: "SLA guaranteed" },
            { value: "< 2 weeks", label: "Full Deployment", sub: "from kickoff" },
            { value: "10x", label: "Average ROI", sub: "within 6 months" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="p-4 rounded-xl border border-[#2A2A30] bg-[#16161A]"
            >
              <div className="text-3xl font-black text-[#FF6B2B] mb-1">{stat.value}</div>
              <div className="text-sm text-[#E8E8F0] font-medium">{stat.label}</div>
              <div className="text-xs text-[#6B6B7A]">{stat.sub}</div>
            </div>
          ))}
        </div>


        {/* Client logos */}
        <div className="mt-4">
          <p className="text-sm text-[#6B6B7A] mb-6">Trusted by innovative businesses worldwide</p>
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-40">
            {["TechVentures", "GlobalRetail", "FinanceHub", "HealthTech", "EduPlatform", "LogiChain"].map((company) => (
              <span key={company} className="text-[#E8E8F0] font-bold text-lg tracking-tight">
                {company}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
