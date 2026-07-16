"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  IoDownloadOutline, 
  IoPhonePortraitOutline,
  IoCheckmarkCircleOutline,
  IoArrowBackOutline,
  IoCloudDownloadOutline,
  IoTimerOutline,
  IoShieldCheckmarkOutline,
  IoHardwareChipOutline,
  IoBatteryChargingOutline,
  IoWifiOutline,
  IoGlobeOutline,
  IoArrowForwardOutline,
  IoQrCodeOutline,
  IoShareOutline
} from "react-icons/io5";
import { FaLeaf } from "react-icons/fa";
import { QRCodeSVG } from "qrcode.react";

export default function DownloadPage() {
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadComplete, setDownloadComplete] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [platform, setPlatform] = useState<'android' | 'ios' | 'other'>('other');
  const [showQR, setShowQR] = useState(true);
  const [imageError, setImageError] = useState(false);
  const [downloadUrl, setDownloadUrl] = useState('');
  
  // Real-time download counter - starts from 0
  const [downloadCount, setDownloadCount] = useState(0);

  useEffect(() => {
    // Get the full URL for the APK download
    if (typeof window !== 'undefined') {
      const baseUrl = window.location.origin;
      setDownloadUrl(`${baseUrl}/downloads/visaia_v1.5_alphatest.apk`);
    }

    const userAgent = navigator.userAgent || '';
    if (/android/i.test(userAgent)) {
      setPlatform('android');
    } else if (/iphone|ipad|ipod/i.test(userAgent)) {
      setPlatform('ios');
    }
  }, []);

  const handleDownload = () => {
    setIsDownloading(true);
    setShowModal(true);
    
    // Increment download count when user downloads
    setDownloadCount(prev => prev + 1);
    
    setTimeout(() => {
      const link = document.createElement('a');
      link.href = '/downloads/visaia_v1.5_alphatest.apk';
      link.download = 'VISAIA-Mobile-App.apk';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      setIsDownloading(false);
      setDownloadComplete(true);
      
      setTimeout(() => {
        setDownloadComplete(false);
        setShowModal(false);
      }, 3000);
    }, 1500);
  };

  // Format number with K suffix
  const formatDownloads = (num: number) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
  };

  // Share functionality
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'VISAIA Mobile App',
          text: 'Download the VISAIA app and start protecting your crops with AI-powered intelligence!',
          url: downloadUrl,
        });
      } catch (error) {
        console.log('Share cancelled');
      }
    } else {
      // Fallback - copy to clipboard
      navigator.clipboard.writeText(downloadUrl);
      alert('Download link copied to clipboard!');
    }
  };

  return (
    <div className="min-h-screen bg-visaia-black">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, #4CAF50 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Back Button */}
      <Link 
        href="/#precision-modules"
        className="fixed top-6 left-6 z-50 p-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-all group"
      >
        <IoArrowBackOutline className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" />
      </Link>

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-16 md:py-24">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-visaia-leaf/10 border border-visaia-leaf/20 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-visaia-leaf animate-pulse" />
            <span className="text-visaia-leaf text-xs font-semibold tracking-wider uppercase">Version 1.4 Available</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">
            Get the <span className="text-visaia-leaf">VISAIA</span> App
          </h1>
          <p className="text-gray-400 text-base max-w-2xl mx-auto leading-relaxed">
            Download the latest version and start protecting your crops with AI-powered intelligence
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Left Column - Download Card (3/5 width) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-3"
          >
            <div className="bg-white/[0.03] rounded-3xl border border-white/10 p-8 md:p-10">
              {/* App Header with Logo */}
              <div className="flex items-start gap-5 mb-8">
                <div className="w-16 h-16 rounded-2xl bg-visaia-leaf/10 flex items-center justify-center border border-visaia-leaf/20 shrink-0 relative">
                  {/* Logo as app icon */}
                  {!imageError ? (
                    <Image
                      src="/images/logo.svg"
                      alt="VISAIA Logo"
                      width={32}
                      height={32}
                      className="object-contain"
                      onError={() => setImageError(true)}
                    />
                  ) : (
                    <FaLeaf className="w-8 h-8 text-visaia-leaf" />
                  )}
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <div>
                      <h2 className="text-white text-xl font-bold">VISAIA Mobile App</h2>
                      <p className="text-gray-400 text-sm">Version 4.0 Alpha Test</p>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-visaia-leaf/10 text-visaia-leaf text-xs font-semibold border border-visaia-leaf/20">
                      Android
                    </span>
                  </div>
                  <div className="flex items-center gap-4 mt-2 text-sm text-gray-400">
                    <span>71.2 MB</span>
                    <span className="w-px h-3 bg-white/10" />
                    <span>Updated: Dec 2026</span>
                  </div>
                </div>
              </div>

              {/* Platform Detection */}
              {platform === 'ios' && (
                <div className="mb-6 p-4 rounded-xl bg-yellow-500/5 border border-yellow-500/20">
                  <p className="text-yellow-400 text-sm flex items-center gap-2">
                    <span>ℹ️</span>
                    iOS version coming soon. You can download the Android APK below.
                  </p>
                </div>
              )}

              {/* Download Button */}
              <motion.button
                onClick={handleDownload}
                disabled={isDownloading}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                className="w-full relative bg-visaia-leaf rounded-2xl px-8 py-4 text-visaia-black font-semibold hover:bg-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span className="flex items-center justify-center gap-3">
                  {isDownloading ? (
                    <>
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Preparing Download...
                    </>
                  ) : downloadComplete ? (
                    <>
                      <IoCheckmarkCircleOutline className="w-5 h-5" />
                      Download Started!
                    </>
                  ) : (
                    <>
                      <IoDownloadOutline className="w-5 h-5" />
                      Download App (APK)
                      <IoArrowForwardOutline className="w-4 h-4" />
                    </>
                  )}
                </span>
              </motion.button>

              {/* Quick Actions */}
              <div className="flex items-center justify-between mt-6">
                <div className="flex items-center gap-4">
                  <button 
                    onClick={() => setShowQR(!showQR)}
                    className="flex items-center gap-2 text-gray-400 hover:text-white text-xs transition-colors"
                  >
                    <IoQrCodeOutline className="w-4 h-4" />
                    {showQR ? 'Hide QR' : 'Show QR'}
                  </button>
                  <button 
                    onClick={handleShare}
                    className="flex items-center gap-2 text-gray-400 hover:text-white text-xs transition-colors"
                  >
                    <IoShareOutline className="w-4 h-4" />
                    Share
                  </button>
                </div>
                <span className="text-gray-500 text-xs">Requires Android 5.0+</span>
              </div>

              {/* QR Code Section - Direct APK Download */}
              <AnimatePresence>
                {showQR && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-4 p-6 bg-white/5 rounded-xl border border-white/10 flex items-center justify-center"
                  >
                    <div className="text-center">
                      <div className="w-40 h-40 bg-white rounded-xl mx-auto flex items-center justify-center relative p-2">
                        {downloadUrl && (
                          <QRCodeSVG
                            value={downloadUrl}
                            size={140}
                            level="H"
                            includeMargin={true}
                            imageSettings={{
                              src: "/images/logo.svg",
                              x: undefined,
                              y: undefined,
                              height: 30,
                              width: 30,
                              excavate: true,
                            }}
                          />
                        )}
                      </div>
                      <p className="text-gray-400 text-xs mt-2">Scan to download APK directly</p>
                      <p className="text-gray-500 text-[10px] mt-1 truncate max-w-xs mx-auto">
                        {downloadUrl}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-3 mt-6 pt-6 border-t border-white/5">
                {[
                  { icon: IoTimerOutline, label: "Install Time", value: "~2 min" },
                  { icon: IoShieldCheckmarkOutline, label: "Security", value: "Verified" },
                  { icon: IoHardwareChipOutline, label: "Compatible", value: "Android 5.0+" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <stat.icon className="w-4 h-4 text-visaia-leaf mx-auto mb-1.5" />
                    <p className="text-white text-sm font-medium">{stat.value}</p>
                    <p className="text-gray-500 text-xs">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column - Info (2/5 width) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2 space-y-5"
          >
            {/* What's New */}
            <div className="bg-white/[0.03] rounded-2xl border border-white/10 p-6">
              <h3 className="text-white font-semibold text-sm mb-4 flex items-center gap-2">
                <span className="text-visaia-leaf">✦</span>
                What's New
              </h3>
              <ul className="space-y-2.5">
                {[
                  "AI pest detection with 94% accuracy",
                  "Real-time crop monitoring & alerts",
                  "Offline mode for remote fields",
                  "Enhanced GIS mapping",
                  "Multi-language support"
                ].map((item, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, x: 5 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.05 }}
                    className="flex items-start gap-3 text-gray-300 text-sm"
                  >
                    <IoCheckmarkCircleOutline className="w-4 h-4 text-visaia-leaf shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Requirements */}
            <div className="bg-white/[0.03] rounded-2xl border border-white/10 p-6">
              <h3 className="text-white font-semibold text-sm mb-3 flex items-center gap-2">
                <IoHardwareChipOutline className="w-4 h-4 text-visaia-leaf" />
                Requirements
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { icon: IoPhonePortraitOutline, label: "OS", value: "Android 5.0+" },
                  { icon: IoBatteryChargingOutline, label: "Storage", value: "100 MB" },
                  { icon: IoWifiOutline, label: "Internet", value: "Required" },
                  { icon: IoGlobeOutline, label: "Language", value: "English" },
                ].map((req) => (
                  <div key={req.label} className="flex items-center gap-2 p-2 rounded-lg bg-white/5">
                    <req.icon className="w-3.5 h-3.5 text-visaia-leaf" />
                    <div>
                      <p className="text-gray-500 text-[10px]">{req.label}</p>
                      <p className="text-white text-xs font-medium">{req.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Trust Badges - with Real-time Downloads */}
            <div className="bg-white/[0.03] rounded-2xl border border-white/10 p-4">
              <div className="flex items-center justify-center gap-6">
                <div className="flex items-center gap-2">
                  <IoShieldCheckmarkOutline className="w-4 h-4 text-green-400" />
                  <span className="text-gray-400 text-xs">Secure</span>
                </div>
                <div className="w-px h-4 bg-white/10" />
                <motion.div 
                  className="flex items-center gap-2"
                  key={downloadCount}
                  initial={{ scale: 1 }}
                  animate={{ scale: downloadCount > 0 ? [1, 1.1, 1] : 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <IoCloudDownloadOutline className="w-4 h-4 text-blue-400" />
                  <span className="text-gray-400 text-xs font-mono">
                    {downloadCount === 0 ? '0' : formatDownloads(downloadCount)} Downloads
                  </span>
                </motion.div>
                <div className="w-px h-4 bg-white/10" />
                <div className="flex items-center gap-2">
                  <IoCheckmarkCircleOutline className="w-4 h-4 text-visaia-leaf" />
                  <span className="text-gray-400 text-xs">v154</span>
                </div>
              </div>
            </div>

            {/* File Info */}
            <div className="bg-white/[0.03] rounded-2xl border border-white/10 p-4 text-center">
              <p className="text-gray-500 text-xs">
                File: visaia_v154_alphatest.apk • 76 MB • Android Package
              </p>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-16 text-center border-t border-white/5 pt-8"
        >
          <p className="text-gray-500 text-sm">
            By downloading, you agree to our{" "}
            <a href="#" className="text-visaia-leaf hover:underline">Terms</a>{" "}
            and{" "}
            <a href="#" className="text-visaia-leaf hover:underline">Privacy Policy</a>
          </p>
          <p className="text-gray-600 text-xs mt-2">
            © 2026 VISAIA. All rights reserved.
          </p>
        </motion.div>
      </div>

      {/* Download Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
            onClick={() => setShowModal(false)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 10 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 10 }}
              className="bg-visaia-dark rounded-2xl p-8 max-w-sm w-full border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              {!downloadComplete ? (
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-visaia-leaf/10 flex items-center justify-center mx-auto mb-4 border border-visaia-leaf/20">
                    <svg className="animate-spin h-8 w-8 text-visaia-leaf" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                  </div>
                  <h3 className="text-white text-lg font-bold mb-2">Preparing Download</h3>
                  <p className="text-gray-400 text-sm">Starting your download...</p>
                </div>
              ) : (
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-4 border border-green-500/20">
                    <IoCheckmarkCircleOutline className="w-8 h-8 text-green-400" />
                  </div>
                  <h3 className="text-white text-lg font-bold mb-2">Download Started!</h3>
                  <p className="text-gray-400 text-sm">Your APK file is being downloaded.</p>
                  <button
                    onClick={() => setShowModal(false)}
                    className="mt-4 px-6 py-2 rounded-full bg-white/10 text-white text-sm hover:bg-white/20 transition-colors"
                  >
                    Close
                  </button>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}