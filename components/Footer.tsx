'use client';

import { teamMembers } from "@/lib/content";
import Reveal from "./Reveal";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="section-px py-12 bg-visaia-black text-white/70">
      <Reveal>
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
          <div>
            <div className="flex items-center gap-2 text-white">
              {/* Logo Placeholder */}
              <div className="relative h-8 w-8 flex items-center justify-center">
                <Image
                  src="/images/logo.svg"
                  alt="VISAIA Logo"
                  width={32}
                  height={32}
                  className="object-contain"
                  onError={(e) => {
                    // Fallback if image doesn't load
                    e.currentTarget.style.display = 'none';
                  }}
                />
                {/* Fallback if image doesn't load */}
                <div className="absolute inset-0 flex items-center justify-center bg-visaia-leaf/10 rounded-lg pointer-events-none">
                  <span className="text-visaia-leaf font-display text-xs">V</span>
                </div>
              </div>
              <span className="font-display text-lg tracking-wide">VISAIA</span>
            </div>
            <p className="mt-3 text-xs normal-case font-body max-w-xs">
              © 2026 VISAIA. Precision Intelligence for Sustainable Agriculture.
            </p>
          </div>

          <div>
            <p className="eyebrow mb-3">Team</p>
            <ul className="space-y-1 text-xs normal-case font-body">
              {teamMembers.map((name) => (
                <li key={name}>{name}</li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>
    </footer>
  );
}