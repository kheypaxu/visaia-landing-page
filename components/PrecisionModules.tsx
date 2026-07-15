"use client";

import Image from "next/image";
import { motion, HTMLMotionProps } from "framer-motion";
import { precisionFeatures } from "@/lib/content";
import Reveal from "./Reveal";
import { 
  IoEyeOutline,
  IoMapOutline,
  IoPhonePortraitOutline,
  IoNotificationsOutline,
  IoPeopleOutline,
  IoBulbOutline,
  IoAnalyticsOutline
} from "react-icons/io5";

type MotionDivProps = HTMLMotionProps<"div">;

export default function PrecisionModules() {
  // Icon mapping for features
  const featureIcons: Record<string, any> = {
    "Real-Time Alerts": IoNotificationsOutline,
    "Expert Validation": IoPeopleOutline,
    "Smart Suggestions": IoBulbOutline,
    "Real-Time Monitoring": IoAnalyticsOutline,
  };

  return (
    <section id="precision-modules" className="section-px py-16 md:py-24 bg-visaia-black">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <Reveal>
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl text-white font-bold tracking-tight">
              Precision Modules
            </h2>
            <p className="mt-3 text-gray-400 max-w-2xl mx-auto">
              Advanced tools designed for modern agriculture
            </p>
          </div>
        </Reveal>

        {/* Main Grid - First Row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
          {/* AI Pest Detection */}
          <Reveal delay={0}>
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="group relative h-64 md:h-72 overflow-hidden rounded-xl2"
            >
              <Image
                src="/images/pestdetect.png"
                alt="AI Pest Detection"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
              
              <div className="absolute bottom-5 left-5 right-5">
                <h3 className="text-white text-lg font-semibold">AI Pest Detection</h3>
                <p className="mt-1 text-white/70 text-xs normal-case font-body leading-relaxed">
                  Edge-computing vision models trained on millions of crop images.
                </p>
              </div>
            </motion.div>
          </Reveal>

          {/* GIS Risk Mapping */}
          <Reveal delay={0.08}>
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="group relative h-64 md:h-72 overflow-hidden rounded-xl2"
            >
              <Image
                src="/images/riskmap.png"
                alt="GIS Risk Mapping"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
              
              <div className="absolute bottom-5 left-5 right-5">
                <h3 className="text-white text-lg font-semibold">GIS Risk Mapping</h3>
                <p className="mt-1 text-white/70 text-xs normal-case font-body leading-relaxed">
                  Spatio-temporal analysis to predict infestation spread patterns.
                </p>
              </div>
            </motion.div>
          </Reveal>

          {/* Farmer Mobile App - Full width card */}
          <Reveal delay={0.16} className="md:col-span-2">
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="relative overflow-hidden rounded-xl2 bg-visaia-dark h-64 md:h-72 flex flex-col md:flex-row items-center justify-between p-6 md:p-8 border border-visaia-line"
            >
              <div className="flex-1 space-y-3">
                <h3 className="text-white text-2xl md:text-3xl font-bold leading-tight">
                  Farmer
                  <br />
                  Mobile App
                </h3>
                
                <p className="text-white/70 text-sm max-w-xs leading-relaxed font-body">
                  Empower local farmers with field-ready tools for instant validation and reporting.
                </p>
                
                <motion.a
                  href="/download" 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-2 rounded-full bg-visaia-leaf px-5 py-2 text-xs font-semibold text-visaia-black hover:bg-white transition-colors"
                >
                  Download the App now →
                </motion.a>
              </div>

              {/* Mobile App Mockup Image */}
              <div className="relative hidden md:block w-[15rem] h-[30rem] shrink-0">
                <Image
                  src="/images/mockup.png"
                  alt="VISAIA Mobile App"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 0vw, 128px"
                />
              </div>
            </motion.div>
          </Reveal>
        </div>

        {/* Features Grid - Second Row */}
        <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
          {precisionFeatures.map((feature, index) => {
            const Icon = featureIcons[feature.title] || IoEyeOutline;

            return (
              <Reveal key={feature.title} delay={index * 0.06}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                  className="rounded-xl2 bg-visaia-dark p-6 border border-visaia-line hover:border-visaia-leaf/30 transition-colors"
                >
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-visaia-leaf/10 shrink-0">
                      <Icon className="w-4 h-4 text-visaia-leaf" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-white text-sm font-semibold">
                        {feature.title}
                      </h3>
                      <p className="mt-1 text-white/60 text-xs normal-case font-body leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}