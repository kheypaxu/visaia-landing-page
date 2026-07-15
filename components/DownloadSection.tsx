"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Reveal from "./Reveal";
import { QRCodeSVG } from "qrcode.react";
import { 
  IoDownloadOutline, 
  IoQrCodeOutline,
  IoPhonePortraitOutline,
  IoCloudDownloadOutline,
  IoArrowForwardOutline,
  IoCheckmarkCircleOutline,
  IoRocketOutline,
  IoShieldCheckmarkOutline,
  IoTimerOutline
} from "react-icons/io5";

export default function DownloadSection() {
  const [downloadUrl, setDownloadUrl] = useState('');
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    // Get the full URL for the APK download
    if (typeof window !== 'undefined') {
      const baseUrl = window.location.origin;
      setDownloadUrl(`${baseUrl}/downloads/visaia_v4_alphatest.apk`);
    }
  }, []);

  return (
    <section id="download" className="section-px py-20 md:py-28 bg-gradient-to-b from-visaia-cream to-white relative overflow-hidden">
      {/* Background decorative element */}
      <div className="absolute inset-0 opacity-[0.05]">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-visaia-leaf blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-blue-500/20 blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <Reveal>
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-visaia-leaf/10 text-visaia-leaf text-xs font-semibold tracking-wider uppercase border border-visaia-leaf/20">
              <IoCloudDownloadOutline className="w-3.5 h-3.5" />
              Download
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mt-4 tracking-tight bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Get Started with VISAIA
            </h2>
            <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
              Download the mobile app and start protecting your crops with AI-powered intelligence
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Card - Direct Download */}
          <Reveal>
            <motion.div 
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 to-visaia-black p-8 md:p-10 h-full border border-white/10 shadow-xl hover:shadow-2xl transition-shadow"
            >
              {/* Decorative gradient */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-visaia-leaf/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700" />
              
              <div className="relative z-10">
                <div className="flex items-start justify-between">
                  <div className="w-12 h-12 rounded-xl bg-visaia-leaf/10 flex items-center justify-center border border-visaia-leaf/20">
                    <IoPhonePortraitOutline className="w-6 h-6 text-visaia-leaf" />
                  </div>
                  <span className="px-3 py-1 rounded-full bg-visaia-leaf/10 text-visaia-leaf text-[10px] font-semibold border border-visaia-leaf/20">
                    Android
                  </span>
                </div>
                
                <h3 className="mt-5 text-2xl md:text-3xl text-white font-bold tracking-tight">
                  Direct Download
                </h3>
                <p className="mt-2 text-white/70 text-sm leading-relaxed max-w-sm">
                  Available for all agricultural stakeholders. Direct deployment for quick field
                  monitoring and reporting.
                </p>

                {/* Feature pills */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {[
                    { icon: IoShieldCheckmarkOutline, label: "Secure" },
                    { icon: IoTimerOutline, label: "Quick Install" },
                    { icon: IoCheckmarkCircleOutline, label: "Verified" },
                  ].map((item) => (
                    <span key={item.label} className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-white/60 text-[10px]">
                      <item.icon className="w-3 h-3" />
                      {item.label}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex flex-col gap-3 max-w-xs">
                  <motion.a
                    href="/downloads/visaia_v4_alphatest.apk"
                    download="VISAIA-Mobile-App.apk"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="group/btn inline-flex items-center justify-center gap-2 rounded-full bg-visaia-leaf px-6 py-3.5 text-sm font-semibold text-visaia-black hover:bg-white transition-all shadow-lg shadow-visaia-leaf/20 hover:shadow-visaia-leaf/40"
                  >
                    <IoDownloadOutline className="w-4 h-4" />
                    <span>Download APK</span>
                    <IoArrowForwardOutline className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </motion.a>
                  <p className="text-white/40 text-[10px] text-center">
                    Version 4.0 • 71 MB • Android 5.0+
                  </p>
                </div>
              </div>
            </motion.div>
          </Reveal>

          {/* Right Card - QR Code */}
          <Reveal delay={0.1}>
            <motion.div 
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 to-visaia-black p-8 md:p-10 h-full border border-white/10 shadow-xl hover:shadow-2xl transition-shadow"
            >
              {/* Decorative gradient */}
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/5 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2 group-hover:scale-150 transition-transform duration-700" />
              
              <div className="relative z-10">
                <div className="flex items-start justify-between">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
                    <IoQrCodeOutline className="w-6 h-6 text-blue-400" />
                  </div>
                  <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-[10px] font-semibold border border-blue-500/20">
                    Instant
                  </span>
                </div>
                
                <h3 className="mt-5 text-2xl md:text-3xl text-white font-bold tracking-tight">
                  Scan & Go
                </h3>
                <p className="mt-2 text-white/70 text-sm leading-relaxed max-w-sm">
                  Scan the QR code to instantly download the latest build of the VISAIA Field
                  Application.
                </p>

                {/* Dynamic QR Code */}
                <div className="mt-5 flex justify-center">
                  <div className="relative h-36 w-36 rounded-xl bg-white p-3 border border-white/10 hover:border-visaia-leaf/30 transition-colors flex items-center justify-center">
                    {downloadUrl && (
                      <QRCodeSVG
                        value={downloadUrl}
                        size={120}
                        level="H"
                        includeMargin={true}
                        imageSettings={{
                          src: "/images/logo.svg",
                          x: undefined,
                          y: undefined,
                          height: 24,
                          width: 24,
                          excavate: true,
                        }}
                      />
                    )}
                  </div>
                </div>

                <div className="mt-5 space-y-3">
                  <motion.a
                    href="/downloads/visaia_v4_alphatest.apk"
                    download="VISAIA_alpha-test.apk"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center justify-center gap-2 w-full rounded-full bg-white/10 px-6 py-3 text-sm font-semibold text-white hover:bg-white/20 transition-all border border-white/10"
                  >
                    <IoCloudDownloadOutline className="w-4 h-4" />
                    <span>Download App Now</span>
                  </motion.a>
                  <div className="flex items-center justify-center gap-4 text-white/40 text-[10px]">
                    <span className="flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                      Available
                    </span>
                    <span>•</span>
                    <span>v4.0 Alpha</span>
                    <span>•</span>
                    <span>71 MB</span>
                  </div>
                  <p className="text-white/30 text-[8px] text-center truncate max-w-xs mx-auto">
                    {downloadUrl}
                  </p>
                </div>
              </div>
            </motion.div>
          </Reveal>
        </div>

        {/* Bottom Info Bar */}
        <Reveal>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-6 p-5 rounded-2xl bg-white/50 backdrop-blur-sm border border-white/60"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-visaia-leaf/10 flex items-center justify-center">
                <IoShieldCheckmarkOutline className="w-4 h-4 text-visaia-leaf" />
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-800">Secure Download</p>
                <p className="text-[10px] text-gray-500">Verified APK</p>
              </div>
            </div>
            
            <div className="hidden sm:block w-px h-8 bg-gray-200" />
            
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center">
                <IoRocketOutline className="w-4 h-4 text-blue-500" />
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-800">Quick Setup</p>
                <p className="text-[10px] text-gray-500">~2 minutes to install</p>
              </div>
            </div>
            
            <div className="hidden sm:block w-px h-8 bg-gray-200" />
            
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center">
                <IoCheckmarkCircleOutline className="w-4 h-4 text-green-500" />
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-800">Trusted</p>
                <p className="text-[10px] text-gray-500">By agricultural experts</p>
              </div>
            </div>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}