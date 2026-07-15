"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import Header from "./Header";
import { HiDownload } from "react-icons/hi";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(".hero-bg", { scale: 1.12, duration: 1.4, ease: "power2.out" })
        .from(".hero-nav", { opacity: 0, y: -16, duration: 0.6 }, "-=1")
        .from(
          ".hero-title-line",
          { opacity: 0, y: 40, duration: 0.8, stagger: 0.12 },
          "-=0.7"
        )
        .from(".hero-tagline", { opacity: 0, y: 20, duration: 0.6 }, "-=0.4")
        .from(".hero-copy", { opacity: 0, y: 20, duration: 0.6 }, "-=0.35")
        .from(".hero-cta", { opacity: 0, y: 20, duration: 0.6 }, "-=0.35")
        .from(".hero-status", { opacity: 0, duration: 0.6 }, "-=0.3");
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative h-[100vh] min-h-[640px] w-full overflow-hidden"
    >
      <Image
        src="/images/herobg.png"
        alt="Corn field at sunset"
        fill
        priority
        className="hero-bg object-cover"
      />
      {/* FIX: Add pointer-events-none to the gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/40 pointer-events-none" />

      <div className="hero-nav relative z-20">
        <Header />
      </div>

      {/* Centered content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center section-px pt-16 text-center pointer-events-none">
        <h1 className="text-white text-5xl md:text-7xl lg:text-[9rem] leading-[1] pointer-events-none">
          <span className="hero-title-line block">Secure Your</span>
          <span className="hero-title-line block">Harvest.</span>
        </h1>

        <p className="hero-tagline mt-6 text-visaia-leaf font-display text-lg md:text-[2rem] tracking-wide pointer-events-none">
          DETECT. MONITOR. PROTECT.
        </p>

        <p className="hero-copy mt-3 max-w-xl text-white/80 text-sm md:text-base mx-auto pointer-events-none">
          The ultimate FAW mapper tool for precision agriculture. Deploying AI-powered surveillance
          to protect your crops from the ground up.
        </p>

        {/* Make the button clickable */}
        <a
          href="/download"
          className="hero-cta mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-visaia-leaf px-7 py-5 text-sm font-semibold text-visaia-black transition-colors hover:bg-white pointer-events-auto"
        >
          <HiDownload className="h-4 w-4" />
          Download Mobile App
        </a>
      </div>

      {/* Status text - stays at bottom right */}
      <div className="hero-status absolute bottom-6 right-6 md:right-12 flex items-center gap-2 text-white/80 text-xs pointer-events-none">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-visaia-leaf opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-visaia-leaf" />
        </span>
        <span>System Active — Monitoring 14,200+ hectares across Southern Regions.</span>
      </div>
    </section>
  );
}