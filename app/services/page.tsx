"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  FaHome,
  FaBuilding,
  FaClock,
  FaCarBattery,
  FaBolt,
  FaTools,
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa";
import { siteConfig } from "@/config/site.config";
import AnimatedIcon from "@/components/shared/AnimatedIcon";

export default function ServicesPage() {
  const icons: Record<string, JSX.Element> = {
    home: <FaHome className="text-6xl" />,
    building: <FaBuilding className="text-6xl" />,
    emergency: <FaClock className="text-6xl" />,
    ev: <FaCarBattery className="text-6xl" />,
    generator: <FaBolt className="text-6xl" />,
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-96 h-96 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
        </div>

        <div className="container mx-auto px-4 relative z-10 pt-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Our <span className="text-orange-400">Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100">
              Comprehensive electrical solutions for every need
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {siteConfig.services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                <AnimatedIcon
                  icon={
                    <div className="text-orange-500">
                      {icons[service.icon] || <FaTools className="text-6xl" />}
                    </div>
                  }
                  animate="bounce"
                  className="mb-6"
                />

                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.name}
                </h2>
                <p className="text-gray-600 mb-6">{service.description}</p>

                <ul className="space-y-2 mb-6">
                  {service.features.slice(0, 4).map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-2 text-gray-700">
                      <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={`/services/${service.slug}`}
                  className="inline-flex items-center space-x-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg transition-all w-full justify-center group-hover:scale-105"
                >
                  <span>Learn More</span>
                  <FaArrowRight />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-orange-600 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8 text-orange-100">
              Contact us today for a free consultation and quote
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center space-x-2 bg-white text-orange-500 hover:bg-gray-100 font-bold px-8 py-4 rounded-full transition-all shadow-lg hover:shadow-xl"
            >
              <span>Get Free Quote</span>
              <FaArrowRight />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
