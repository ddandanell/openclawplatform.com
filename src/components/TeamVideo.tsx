"use client";
import React, { useRef, useEffect } from "react";

export default function TeamVideo({ className = "" }: { className?: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const playOnView = () => {
        const rect = video.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0 && video.paused) {
          video.play().catch(() => {});
        }
      };
      window.addEventListener("scroll", playOnView, { passive: true });
      playOnView();
      return () => window.removeEventListener("scroll", playOnView);
    }
  }, []);

  return (
    <div className={"w-full max-w-md rounded-3xl overflow-hidden shadow-2xl border-4 border-[#FF6B2B]/30 bg-[#16161A] " + className}>
      <video
        ref={videoRef}
        src="/videowalking.mp4"
        className="w-full h-auto object-cover"
        muted
        playsInline
        controls={false}
        loop
        preload="auto"
        style={{ aspectRatio: "9/16" }}
      />
    </div>
  );
}
