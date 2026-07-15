"use client";

import Image from "next/image";
import { motion, HTMLMotionProps } from "framer-motion";
import { precisionFeatures } from "@/lib/content";
import Reveal from "./Reveal";

// Create a typed motion component
type MotionDivProps = HTMLMotionProps<"div">;

export default function PrecisionModules() {
  return (
    <section id="precision-modules" className="section-px py-16 md:py-24 bg-visaia-black">
      <Reveal>
        <h2 className="text-3xl md:text-5xl text-white text-center mb-10">Precision Modules</h2>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
        <Reveal delay={0}>
          <motion.div
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="relative h-64 md:h-72 overflow-hidden rounded-xl2"
          >
            <Image
              src="/images/ai-pest-detection.svg"
              alt="AI Pest Detection"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
            <div className="absolute bottom-5 left-5 right-5">
              <h3 className="text-white text-lg">AI Pest Detection</h3>
              <p className="mt-1 text-white/70 text-xs normal-case font-body">
                Edge-computing-ready models trained on thousands of crop images.
              </p>
            </div>
          </motion.div>
        </Reveal>

        <Reveal delay={0.08}>
          <motion.div
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="relative h-64 md:h-72 overflow-hidden rounded-xl2"
          >
            <Image
              src="/images/gis-risk-mapping.svg"
              alt="GIS Risk Mapping"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
            <div className="absolute bottom-5 left-5 right-5">
              <h3 className="text-white text-lg">GIS Risk Mapping</h3>
              <p className="mt-1 text-white/70 text-xs normal-case font-body">
                Spatio-temporal analysis to predict infestation patterns.
              </p>
            </div>
          </motion.div>
        </Reveal>

        <Reveal delay={0.16} className="md:col-span-2">
          <motion.div
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="relative overflow-hidden rounded-xl2 bg-visaia-dark h-64 md:h-72 flex items-center justify-between px-8"
          >
            <div>
              <h3 className="text-white text-2xl md:text-3xl leading-tight">
                Farmer
                <br />
                Mobile App
              </h3>
              <p className="mt-2 max-w-xs text-white/70 text-sm normal-case font-body">
                Empower local farmers with field-ready tools for instant validation and reporting.
              </p>
              
              <a
                href="#download"
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-visaia-leaf px-5 py-2 text-xs font-semibold text-visaia-black hover:bg-white transition-colors"
              >
                Download the App now →
              </a>
            </div>
            <div className="relative hidden sm:block h-56 w-32 shrink-0">
              <Image
                src="/images/mobile-app-mockup.svg"
                alt="VISAIA mobile app mockup"
                fill
                className="object-contain"
              />
            </div>
          </motion.div>
        </Reveal>
      </div>

      <div className="mt-5 grid grid-cols-1 md:grid-cols-4 gap-5">
        {precisionFeatures.map((feature, index) => (
          <Reveal key={feature.title} delay={index * 0.06}>
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="rounded-xl2 bg-visaia-dark p-6 border border-visaia-line"
            >
              <span className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-md bg-visaia-leaf/10 text-visaia-leaf">
                ●
              </span>
              <h3 className="text-white text-base">{feature.title}</h3>
              <p className="mt-1 text-white/60 text-xs normal-case font-body">
                {feature.description}
              </p>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}