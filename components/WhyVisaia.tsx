"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { whyVisaia } from "@/lib/content";
import Reveal from "./Reveal";

export default function WhyVisaia() {
  // Define custom sizes for each card by title
  const cardSizes: Record<string, string> = {
    "Early Detection": "h-64 md:h-[27rem]",
    "Smart Monitoring": "h-80 md:h-[27rem]",
    "Instant Alerts": "h-72 md:h-[20rem]",
    "GIS Risk Mapping": "h-80 md:h-[20rem]",
  };

  const cardWidths: Record<string, string> = {
    "Early Detection": "w-full md:w-[78rem]",
    "Smart Monitoring": "w-full md:w-[27rem] ml-[26.5rem]",
    "Instant Alerts": "w-full md:w-[53rem] ml-[0.5rem]", // Full width on desktop
    "GIS Risk Mapping": "w-full md:w-[53rem]",
  };

  return (
    <section id="why-visaia" className="section-px py-16 md:py-24 bg-visaia-cream">
      <Reveal>
        <h2 className="text-3xl md:text-5xl mb-10">Why VISAIA?</h2>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {whyVisaia.map((item, index) => {
          const customHeight = cardSizes[item.title] || "h-72 md:h-80";
          const customWidth = cardWidths[item.title] || "w-full md:w-1/2";

          return item.variant === "image" ? (
            <Reveal key={item.title} delay={index * 0.08}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className={`relative ${customHeight} ${customWidth} overflow-hidden rounded-xl2`}
              >
                <Image src={item.image!} alt={item.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-white text-xl md:text-2xl">{item.title}</h3>
                  <p className="mt-1 text-white/80 text-sm normal-case font-body">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            </Reveal>
          ) : (
            <Reveal key={item.title} delay={index * 0.08}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className={`flex flex-col justify-between ${customHeight} ${customWidth} rounded-xl2 bg-visaia-leaf p-8`}
              >
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-visaia-black/10 text-visaia-black font-semibold">
                  ⋮⋮
                </span>
                <div>
                  <h3 className="text-visaia-black text-xl md:text-2xl">{item.title}</h3>
                  <p className="mt-1 text-visaia-black/70 text-sm normal-case font-body">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}