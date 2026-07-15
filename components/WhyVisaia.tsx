"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { whyVisaia } from "@/lib/content";
import Reveal from "./Reveal";
import { 
  IoShieldCheckmarkOutline,
  IoStatsChartOutline,
  IoNotificationsOutline,
  IoMapOutline
} from "react-icons/io5";

export default function WhyVisaia() {
  // Icons mapping for better visual representation
  const iconMap: Record<string, any> = {
    "Early Detection": IoShieldCheckmarkOutline,
    "Smart Monitoring": IoStatsChartOutline,
    "Instant Alerts": IoNotificationsOutline,
    "GIS Risk Mapping": IoMapOutline,
  };

  // Color schemes for each card
  const colorSchemes: Record<string, { bg: string; accent: string; text: string }> = {
    "Early Detection": { bg: "from-blue-500/10 to-cyan-500/10", accent: "bg-blue-500", text: "text-blue-600" },
    "Smart Monitoring": { bg: "from-purple-500/10 to-pink-500/10", accent: "bg-purple-500", text: "text-purple-600" },
    "Instant Alerts": { bg: "from-amber-500/10 to-orange-500/10", accent: "bg-amber-500", text: "text-amber-600" },
    "GIS Risk Mapping": { bg: "from-emerald-500/10 to-teal-500/10", accent: "bg-emerald-500", text: "text-emerald-600" },
  };

  return (
    <section id="why-visaia" className="section-px py-20 md:py-28 bg-gradient-to-br from-visaia-cream to-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-visaia-leaf blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-blue-500/20 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <Reveal>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-visaia-leaf/20 text-visaia-leaf text-sm font-semibold tracking-wide uppercase mb-4">
              Why Choose Us
            </span>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Why VISAIA?
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Intelligent solutions designed to protect what matters most
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {whyVisaia.map((item, index) => {
            const Icon = iconMap[item.title];
            const colors = colorSchemes[item.title] || colorSchemes["Early Detection"];

            return item.variant === "image" ? (
              <Reveal key={item.title} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -8, scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  className="group relative h-72 md:h-80 lg:h-96 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
                >
                  <Image 
                    src={item.image!} 
                    alt={item.title} 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                  
                  {/* Content overlay with better typography */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 rounded-lg bg-white/20 backdrop-blur-sm">
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="text-white text-2xl md:text-3xl font-bold tracking-tight">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-white/90 text-sm md:text-base leading-relaxed max-w-lg">
                      {item.description}
                    </p>
                    
                    {/* Interactive hint */}
                    <div className="mt-4 flex items-center gap-2 text-white/50 text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                      <span>Learn more</span>
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </motion.div>
              </Reveal>
            ) : (
              <Reveal key={item.title} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -8, scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  className="group relative h-72 md:h-80 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 bg-gradient-to-br p-8"
                  style={{
                    background: `linear-gradient(135deg, ${colors.bg.split(' ').join('')}, white)`,
                    border: '1px solid rgba(255,255,255,0.2)',
                  }}
                >
                  {/* Decorative accent line */}
                  <div className={`absolute top-0 left-0 w-1 h-full ${colors.accent} rounded-l-full opacity-75`} />
                  
                  <div className="flex flex-col justify-between h-full relative">
                    <div className="flex items-start justify-between">
                      <div className={`p-3 rounded-xl ${colors.accent}/10 backdrop-blur-sm`}>
                        <Icon className={`w-7 h-7 ${colors.text}`} />
                      </div>
                      <span className={`text-xs font-semibold ${colors.text} opacity-60`}>
                        Feature
                      </span>
                    </div>

                    <div>
                      <h3 className={`text-2xl md:text-3xl font-bold tracking-tight ${colors.text} mb-3`}>
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                        {item.description}
                      </p>
                      
                      {/* Interactive hover element */}
                      <div className="mt-6 flex items-center gap-2 text-gray-400 text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className={`w-8 h-0.5 ${colors.accent} rounded-full`} />
                        <span>Discover more</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </Reveal>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <Reveal>
          <motion.div 
            className="text-center mt-16"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-visaia-leaf text-white font-semibold hover:bg-visaia-leaf/90 transition-all shadow-lg hover:shadow-xl"
            >
              <span>Explore all features</span>
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}