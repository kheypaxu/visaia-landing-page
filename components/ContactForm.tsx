"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import Reveal from "./Reveal";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // REPLACE: wire this up to your form handler / API route / email service.
    setStatus("sent");
  }

  return (
    <section id="contact" className="section-px py-16 md:py-24 bg-visaia-cream">
      <Reveal>
        <h2 className="text-2xl md:text-4xl mb-8">Contact Our Experts</h2>
      </Reveal>

      <Reveal delay={0.1}>
        <form onSubmit={handleSubmit} className="max-w-2xl space-y-5">
          <div>
            <label htmlFor="fullName" className="eyebrow">
              Full Name
            </label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              required
              placeholder="Enter your name"
              className="mt-2 w-full rounded-lg border border-visaia-black/15 bg-white px-4 py-3 text-sm normal-case font-body focus:border-visaia-leaf focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor="agency" className="eyebrow">
              Agency / Institution
            </label>
            <input
              id="agency"
              name="agency"
              type="text"
              placeholder="Your organization"
              className="mt-2 w-full rounded-lg border border-visaia-black/15 bg-white px-4 py-3 text-sm normal-case font-body focus:border-visaia-leaf focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor="message" className="eyebrow">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              placeholder="How can we help?"
              className="mt-2 w-full rounded-lg border border-visaia-black/15 bg-white px-4 py-3 text-sm normal-case font-body focus:border-visaia-leaf focus:outline-none"
            />
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            className="w-full rounded-full bg-visaia-black py-4 text-sm font-semibold text-white hover:bg-visaia-leafDark transition-colors"
          >
            {status === "sent" ? "Inquiry Sent ✓" : "Send Inquiry"}
          </motion.button>
        </form>
      </Reveal>
    </section>
  );
}