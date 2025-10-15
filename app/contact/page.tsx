"use client";

import { motion } from "framer-motion";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaBolt,
} from "react-icons/fa";
import { siteConfig } from "@/config/site.config";
import ContactForm from "@/components/shared/ContactForm";
import AnimatedIcon from "@/components/shared/AnimatedIcon";

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-96 h-96 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
        </div>

        <div className="container mx-auto px-4 relative z-10 pt-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Get In <span className="text-orange-400">Touch</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100">
              Ready to power your project? Contact us today!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Let's Talk About Your Project
              </h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Whether you need emergency repairs, routine maintenance, or a
                complete electrical installation, we're here to help. Contact us
                today for a free consultation and quote.
              </p>

              {/* Contact Cards */}
              <div className="space-y-4">
                <motion.a
                  href={`tel:${siteConfig.contact.phone}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="flex items-start space-x-4 bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl hover:shadow-lg transition-all group"
                >
                  <AnimatedIcon
                    icon={
                      <div className="bg-orange-500 text-white p-4 rounded-full">
                        <FaPhone className="text-2xl" />
                      </div>
                    }
                    animate="pulse"
                  />
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">
                      Call Us
                    </h3>
                    <p className="text-orange-600 font-semibold text-xl group-hover:text-orange-700">
                      {siteConfig.contact.phone}
                    </p>
                    <p className="text-gray-600 text-sm mt-1">
                      Available 24/7 for emergencies
                    </p>
                  </div>
                </motion.a>

                <motion.a
                  href={`mailto:${siteConfig.contact.email}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="flex items-start space-x-4 bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl hover:shadow-lg transition-all group"
                >
                  <AnimatedIcon
                    icon={
                      <div className="bg-blue-500 text-white p-4 rounded-full">
                        <FaEnvelope className="text-2xl" />
                      </div>
                    }
                    animate="bounce"
                  />
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">
                      Email Us
                    </h3>
                    <p className="text-blue-600 font-semibold group-hover:text-blue-700 break-all">
                      {siteConfig.contact.email}
                    </p>
                    <p className="text-gray-600 text-sm mt-1">
                      We'll respond within 24 hours
                    </p>
                  </div>
                </motion.a>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="flex items-start space-x-4 bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl"
                >
                  <AnimatedIcon
                    icon={
                      <div className="bg-green-500 text-white p-4 rounded-full">
                        <FaMapMarkerAlt className="text-2xl" />
                      </div>
                    }
                    animate="float"
                  />
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">
                      Visit Us
                    </h3>
                    <p className="text-gray-700">{siteConfig.contact.address}</p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="flex items-start space-x-4 bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl"
                >
                  <AnimatedIcon
                    icon={
                      <div className="bg-purple-500 text-white p-4 rounded-full">
                        <FaClock className="text-2xl" />
                      </div>
                    }
                    animate="shake"
                  />
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">
                      Business Hours
                    </h3>
                    <p className="text-gray-700">{siteConfig.contact.hours}</p>
                    <p className="text-purple-600 font-semibold text-sm mt-1">
                      24/7 Emergency Services Available
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Booking Integration */}
              {siteConfig.booking.url && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="mt-8 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl p-6 text-white"
                >
                  <h3 className="text-xl font-bold mb-2">
                    Book an Appointment Online
                  </h3>
                  <p className="mb-4 text-orange-100">
                    Schedule your service at a time that works for you
                  </p>
                  <a
                    href={siteConfig.booking.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-white text-orange-500 hover:bg-gray-100 font-bold px-6 py-3 rounded-lg transition-all"
                  >
                    Schedule Now
                  </a>
                </motion.div>
              )}
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-2xl p-8 shadow-xl"
            >
              <div className="flex items-center space-x-3 mb-6">
                <AnimatedIcon
                  icon={<FaBolt className="text-4xl text-orange-500" />}
                  animate="spin"
                />
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">
                    Request a Quote
                  </h2>
                  <p className="text-gray-600">Free consultation included</p>
                </div>
              </div>
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl h-96 flex items-center justify-center shadow-lg"
          >
            <div className="text-center">
              <FaMapMarkerAlt className="text-6xl text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600 text-lg font-medium">
                Google Maps Integration
              </p>
              <p className="text-gray-500 text-sm">
                Add your Google Maps embed code here
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
