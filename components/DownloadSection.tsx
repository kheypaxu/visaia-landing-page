"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Reveal from "./Reveal";

export default function DownloadSection() {
  return (
    <section id="download" className="section-px py-16 md:py-24 bg-visaia-cream">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <Reveal>
          <div className="rounded-xl2 bg-visaia-black p-8 md:p-10 h-full">
            <p className="eyebrow">Field Access</p>
            <h3 className="mt-3 text-2xl md:text-3xl text-white">Get The Field App</h3>
            <p className="mt-2 text-white/70 text-sm normal-case font-body max-w-sm">
              Available for all agricultural stakeholders. Direct deployment for quick field
              monitoring and reporting.
            </p>

            <div className="mt-6 flex flex-col gap-3 max-w-xs">
              <motion.a
                href="#"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="rounded-full bg-white px-5 py-3 text-center text-sm font-semibold text-visaia-black hover:bg-visaia-leaf transition-colors"
              >
                ▶ Download on Google Play
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="rounded-full bg-visaia-leaf px-5 py-3 text-center text-sm font-semibold text-visaia-black hover:bg-white transition-colors"
              >
                ⬇ Direct APK Download
              </motion.a>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="rounded-xl2 bg-visaia-black p-8 md:p-10 flex flex-col items-center text-center h-full">
            <h3 className="text-2xl md:text-3xl text-white">Deploy VISAIA Today</h3>
            <p className="mt-2 text-white/70 text-sm normal-case font-body max-w-sm">
              Scan the QR code to instantly download the latest build of the VISAIA Field
              Application.
            </p>

            <div className="relative mt-6 h-40 w-40">
              {/* REPLACE: /images/qr-code.svg with a real generated QR code */}
              <Image src="/images/qr-code.svg" alt="QR code to download VISAIA app" fill />
            </div>

            <motion.a
              href="#"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="mt-6 w-full max-w-xs rounded-full bg-visaia-leaf px-5 py-3 text-center text-sm font-semibold text-visaia-black hover:bg-white transition-colors"
            >
              Download App Now
            </motion.a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}