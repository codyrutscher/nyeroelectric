"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useParams } from "next/navigation";
import {
  FaCheckCircle,
  FaArrowRight,
  FaPhone,
  FaHome,
  FaBuilding,
  FaClock,
  FaCarBattery,
  FaBolt,
  FaTools,
} from "react-icons/fa";
import { siteConfig } from "@/config/site.config";
import AnimatedIcon from "@/components/shared/AnimatedIcon";
import ContactForm from "@/components/shared/ContactForm";

export default function ServiceDetailPage() {
  const params = useParams();
  const slug = params.slug as string;

  const service = siteConfig.services.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Service Not Found
          </h1>
          <Link
            href="/services"
            className="text-orange-500 hover:text-orange-600 font-semibold"
          >
            View All Services
          </Link>
        </div>
      </div>
    );
  }

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
            <AnimatedIcon
              icon={
                <div className="text-orange-400 inline-block">
                  {icons[service.icon] || <FaTools className="text-6xl" />}
                </div>
              }
              animate="bounce"
              className="mb-6"
            />
            <h1 className="text-5xl md:text-7xl font-bold mb-6">{service.name}</h1>
            <p className="text-xl md:text-2xl text-blue-100">
              {service.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Features */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                What We Offer
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-start space-x-3 bg-gray-50 p-4 rounded-lg hover:bg-orange-50 transition-colors"
                  >
                    <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Why Choose Us?
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center space-x-2">
                    <FaCheckCircle className="text-blue-500" />
                    <span>Licensed & insured professionals</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <FaCheckCircle className="text-blue-500" />
                    <span>Transparent, upfront pricing</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <FaCheckCircle className="text-blue-500" />
                    <span>100% satisfaction guarantee</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <FaCheckCircle className="text-blue-500" />
                    <span>Same-day service available</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="flex items-center justify-center space-x-2 bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-3 rounded-lg transition-all shadow-lg hover:shadow-xl"
                >
                  <FaPhone />
                  <span>Call Now</span>
                </a>
                <Link
                  href="/contact"
                  className="flex items-center justify-center space-x-2 bg-gray-900 hover:bg-gray-800 text-white font-bold px-6 py-3 rounded-lg transition-all"
                >
                  <span>Request Quote</span>
                  <FaArrowRight />
                </Link>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-2xl p-8 shadow-lg"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Request a Quote
              </h2>
              <p className="text-gray-600 mb-6">
                Fill out the form below and we'll get back to you shortly
              </p>
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Other Services You May Need
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {siteConfig.services
              .filter((s) => s.id !== service.id)
              .slice(0, 3)
              .map((relatedService, index) => (
                <motion.div
                  key={relatedService.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={`/services/${relatedService.slug}`}
                    className="block bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all group"
                  >
                    <div className="text-4xl text-orange-500 mb-4">
                      {icons[relatedService.icon] || <FaTools />}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-500 transition-colors">
                      {relatedService.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {relatedService.description}
                    </p>
                    <span className="text-orange-500 font-semibold inline-flex items-center space-x-1 group-hover:translate-x-1 transition-transform">
                      <span>Learn More</span>
                      <FaArrowRight />
                    </span>
                  </Link>
                </motion.div>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}
