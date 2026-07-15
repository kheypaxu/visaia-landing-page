"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "./Reveal";
import { 
  IoPersonOutline,
  IoBusinessOutline,
  IoChatbubbleOutline,
  IoSendOutline,
  IoCheckmarkCircleOutline,
  IoCloseOutline,
  IoMailOutline,
  IoCallOutline,
  IoLocationOutline,
  IoTimeOutline
} from "react-icons/io5";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [formData, setFormData] = useState({
    fullName: "",
    agency: "",
    email: "",
    message: ""
  });

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    
    // Simulate API call
    setTimeout(() => {
      setStatus("sent");
      setFormData({ fullName: "", agency: "", email: "", message: "" });
      
      // Reset after 5 seconds
      setTimeout(() => {
        setStatus("idle");
      }, 5000);
    }, 1500);
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="section-px py-20 md:py-28 bg-gradient-to-b from-visaia-cream to-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-visaia-leaf blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-blue-500/20 blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Left Column - Info */}
          <Reveal className="lg:col-span-2">
            <div className="space-y-6">
              <div>
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-visaia-leaf/10 text-visaia-leaf text-xs font-semibold tracking-wider uppercase border border-visaia-leaf/20">
                  <IoSendOutline className="w-3.5 h-3.5" />
                  Get in Touch
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mt-4 tracking-tight bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                  Contact Our Experts
                </h2>
                <p className="mt-3 text-gray-600 leading-relaxed">
                  Have questions about VISAIA? Our team is here to help you protect your crops with AI-powered intelligence.
                </p>
              </div>

              {/* Contact Info Cards */}
              <div className="space-y-3">
                {[
                  { icon: IoMailOutline, label: "Email", value: "support@visaia.com" },
                  { icon: IoCallOutline, label: "Phone", value: "+63 967 918 6232" },
                  { icon: IoLocationOutline, label: "Location", value: "WVSU Main Campus" },
                  { icon: IoTimeOutline, label: "Hours", value: "Mon-Fri: 8AM - 6PM" },
                ].map((item) => (
                  <motion.div
                    key={item.label}
                    whileHover={{ x: 4 }}
                    className="flex items-center gap-3 p-3 rounded-xl bg-white/50 backdrop-blur-sm border border-white/60 hover:border-visaia-leaf/30 transition-all"
                  >
                    <div className="w-8 h-8 rounded-lg bg-visaia-leaf/10 flex items-center justify-center shrink-0">
                      <item.icon className="w-4 h-4 text-visaia-leaf" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">{item.label}</p>
                      <p className="text-sm font-medium text-gray-800">{item.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Trust Badge */}
              <div className="p-4 rounded-xl bg-visaia-leaf/5 border border-visaia-leaf/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-visaia-leaf/10 flex items-center justify-center">
                    <IoCheckmarkCircleOutline className="w-5 h-5 text-visaia-leaf" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-800">Response within 24 hours</p>
                    <p className="text-xs text-gray-500">We value your time</p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Right Column - Form */}
          <Reveal delay={0.1} className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl border border-white/60 shadow-xl p-6 md:p-8"
            >
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Full Name */}
                <div>
                  <label htmlFor="fullName" className="flex items-center gap-2 text-sm font-medium text-gray-700">
                    <IoPersonOutline className="w-4 h-4 text-visaia-leaf" />
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className="mt-1.5 w-full rounded-xl border border-gray-200 bg-white/50 px-4 py-3 text-sm font-body placeholder:text-gray-400 focus:border-visaia-leaf focus:ring-2 focus:ring-visaia-leaf/20 focus:outline-none transition-all"
                  />
                </div>

                {/* Agency */}
                <div>
                  <label htmlFor="agency" className="flex items-center gap-2 text-sm font-medium text-gray-700">
                    <IoBusinessOutline className="w-4 h-4 text-visaia-leaf" />
                    Agency / Institution
                  </label>
                  <input
                    id="agency"
                    name="agency"
                    type="text"
                    value={formData.agency}
                    onChange={handleChange}
                    placeholder="Your organization name"
                    className="mt-1.5 w-full rounded-xl border border-gray-200 bg-white/50 px-4 py-3 text-sm font-body placeholder:text-gray-400 focus:border-visaia-leaf focus:ring-2 focus:ring-visaia-leaf/20 focus:outline-none transition-all"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="flex items-center gap-2 text-sm font-medium text-gray-700">
                    <IoMailOutline className="w-4 h-4 text-visaia-leaf" />
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="mt-1.5 w-full rounded-xl border border-gray-200 bg-white/50 px-4 py-3 text-sm font-body placeholder:text-gray-400 focus:border-visaia-leaf focus:ring-2 focus:ring-visaia-leaf/20 focus:outline-none transition-all"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="flex items-center gap-2 text-sm font-medium text-gray-700">
                    <IoChatbubbleOutline className="w-4 h-4 text-visaia-leaf" />
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us how we can help you..."
                    className="mt-1.5 w-full rounded-xl border border-gray-200 bg-white/50 px-4 py-3 text-sm font-body placeholder:text-gray-400 focus:border-visaia-leaf focus:ring-2 focus:ring-visaia-leaf/20 focus:outline-none transition-all resize-none"
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={status === "sending" || status === "sent"}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  className="relative w-full overflow-hidden rounded-xl bg-gradient-to-r from-visaia-leaf to-emerald-600 py-3.5 text-sm font-semibold text-white shadow-lg shadow-visaia-leaf/20 hover:shadow-visaia-leaf/40 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  <AnimatePresence mode="wait">
                    {status === "sending" ? (
                      <motion.span
                        key="sending"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex items-center justify-center gap-2"
                      >
                        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Sending...
                      </motion.span>
                    ) : status === "sent" ? (
                      <motion.span
                        key="sent"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className="flex items-center justify-center gap-2"
                      >
                        <IoCheckmarkCircleOutline className="w-5 h-5" />
                        Message Sent Successfully!
                      </motion.span>
                    ) : (
                      <motion.span
                        key="idle"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex items-center justify-center gap-2"
                      >
                        <IoSendOutline className="w-4 h-4" />
                        Send Inquiry
                      </motion.span>
                    )}
                  </AnimatePresence>
                  
                  {/* Shine effect */}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                </motion.button>

                {/* Form Footer */}
                <p className="text-center text-xs text-gray-400">
                  We'll never share your information. 
                  <span className="text-visaia-leaf"> Privacy Guaranteed</span>
                </p>
              </form>
            </motion.div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}