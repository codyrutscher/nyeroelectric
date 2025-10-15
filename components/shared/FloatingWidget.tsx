"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPhone, FaComments, FaTimes } from "react-icons/fa";
import { siteConfig } from "@/config/site.config";

export default function FloatingWidget() {
  const [isOpen, setIsOpen] = useState(false);

  if (!siteConfig.features.floatingWidget) return null;

  return (
    <>
      {/* Main Floating Button */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
        className="fixed bottom-6 right-6 z-50"
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-orange-500 hover:bg-orange-600 text-white rounded-full p-4 shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 group"
        >
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {isOpen ? (
              <FaTimes className="text-2xl" />
            ) : (
              <FaPhone className="text-2xl group-hover:animate-pulse" />
            )}
          </motion.div>
        </button>

        {/* Pulse Effect */}
        {!isOpen && (
          <motion.div
            className="absolute inset-0 bg-orange-500 rounded-full -z-10"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.5, 0, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        )}
      </motion.div>

      {/* Expanded Widget */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed bottom-24 right-6 z-40 bg-white rounded-2xl shadow-2xl w-80 overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-4">
              <h3 className="text-lg font-bold">Get in Touch</h3>
              <p className="text-sm text-orange-100">
                Call or text us anytime!
              </p>
            </div>

            {/* Content */}
            <div className="p-4 space-y-3">
              {/* Call Button */}
              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="flex items-center space-x-3 p-4 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl group"
              >
                <div className="bg-white/20 p-3 rounded-full">
                  <FaPhone className="text-xl group-hover:animate-bounce" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium opacity-90">Call Now</p>
                  <p className="font-bold">{siteConfig.contact.phone}</p>
                </div>
              </a>

              {/* Text/SMS Button */}
              <a
                href={`sms:${siteConfig.contact.phone}`}
                className="flex items-center space-x-3 p-4 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl group"
              >
                <div className="bg-white/20 p-3 rounded-full">
                  <FaComments className="text-xl group-hover:animate-bounce" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium opacity-90">Text Us</p>
                  <p className="font-bold">{siteConfig.contact.phone}</p>
                </div>
              </a>

              {/* Hours */}
              <div className="text-center pt-2 border-t border-gray-200">
                <p className="text-xs text-gray-500 font-medium">
                  Business Hours
                </p>
                <p className="text-sm text-gray-700 font-semibold">
                  {siteConfig.contact.hours}
                </p>
              </div>

              {/* Emergency Note */}
              <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                <p className="text-xs text-red-800 text-center font-medium">
                  🚨 24/7 Emergency Services Available
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
