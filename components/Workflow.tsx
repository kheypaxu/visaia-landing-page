"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { workflowSteps } from "@/lib/content";

export default function Workflow() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Draw the connecting line left-to-right as the section enters view.
      gsap.from(".workflow-line", {
        scaleX: 0,
        transformOrigin: "left center",
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      });

      // Stagger the step markers + copy in after the line starts drawing.
      gsap.from(".workflow-step", {
        opacity: 0,
        y: 24,
        duration: 0.6,
        stagger: 0.15,
        ease: "power3.out",
        delay: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section-px py-16 md:py-24 bg-visaia-leaf overflow-hidden">
      <h2 className="text-3xl md:text-5xl text-center mb-12">Intelligence Workflow</h2>

      <div className="relative">
        <div className="workflow-line absolute left-0 right-0 top-5 hidden md:block h-[2px] bg-visaia-black/20" />

        <div className="relative grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
          {workflowSteps.map((step) => (
            <div key={step.number} className="workflow-step flex flex-col items-center text-center">
              <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-visaia-black text-visaia-leaf font-display text-sm">
                {step.number}
              </span>
              <h3 className="text-sm md:text-base">{step.title}</h3>
              <p className="mt-2 text-xs text-visaia-black/70 normal-case font-body">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}