"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/lib/content";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Header() {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState("");

  // Detect which section is in view for anchor links
  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(link => link.href.replace("#", ""));
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-[999] bg-white/95 backdrop-blur-sm border-b border-visaia-line/10 section-px py-3 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Image
          src="/images/logo.svg"
          alt="VISAIA Logo"
          width={50}
          height={50}
          className="object-contain"
          priority
        />
        <span className="font-display text-3xl tracking-wide text-visaia-black">
          VISAIA
        </span>
      </div>

      <nav className="hidden md:flex items-center gap-8 text-sm text-visaia-black/80">
        {navLinks.map((link) => {
          const sectionId = link.href.replace("#", "");
          const isActive = sectionId === activeSection || 
                          (sectionId === "home" && activeSection === "");
          
          return (
            <Link
              key={link.href}
              href={link.href}
              className="relative font-body transition-colors hover:text-visaia-leaf group"
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById(sectionId);
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              {link.label}
              <span
                className={`absolute left-0 right-0 bottom-0 h-0.5 bg-visaia-leaf transition-all duration-300 ${
                  isActive ? "scale-x-100" : "scale-x-0"
                }`}
              />
              <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-visaia-leaf scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </Link>
          );
        })}
      </nav>

      <Link
        href="#download"
        className="rounded-full bg-visaia-leaf px-5 py-2 text-sm font-semibold text-visaia-black hover:bg-visaia-sage transition-colors font-body"
        onClick={(e) => {
          e.preventDefault();
          const element = document.getElementById("download");
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }}
      >
        Get Started
      </Link>
    </header>
  );
}