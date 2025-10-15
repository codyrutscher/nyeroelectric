"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
import {
  FaBolt,
  FaHome,
  FaBuilding,
  FaClock,
  FaCarBattery,
  FaTools,
  FaShieldAlt,
  FaCheckCircle,
  FaPhone,
  FaArrowRight,
  FaStar,
  FaAward,
  FaUsers,
  FaLightbulb,
} from "react-icons/fa";
import { siteConfig } from "@/config/site.config";
import AnimatedIcon from "@/components/shared/AnimatedIcon";
import ReviewsSection from "@/components/shared/ReviewsSection";
import SocialMediaFeed from "@/components/shared/SocialMediaFeed";
import GBPPosts from "@/components/shared/GBPPosts";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
          <div className="absolute top-40 right-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
          <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-block bg-orange-500/20 backdrop-blur-sm border border-orange-500/30 rounded-full px-6 py-2 mb-6"
              >
                <span className="text-orange-400 font-semibold flex items-center space-x-2">
                  <FaBolt className="animate-pulse" />
                  <span>Licensed & Insured Professional Electricians</span>
                </span>
              </motion.div>

              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                <TypeAnimation
                  sequence={[
                    "Expert Electrical",
                    2000,
                    "Professional Electrical",
                    2000,
                    "Reliable Electrical",
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
                <br />
                <span className="text-orange-400">Solutions</span>
              </h1>

              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                From residential repairs to commercial installations, we deliver
                top-quality electrical services with a commitment to safety,
                reliability, and customer satisfaction.
              </p>

              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
                <Link
                  href="/contact"
                  className="group bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-full flex items-center justify-center space-x-2 transition-all shadow-lg hover:shadow-2xl"
                >
                  <span>Get Free Quote</span>
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="bg-white/10 backdrop-blur-sm border-2 border-white/30 hover:bg-white/20 text-white font-bold px-8 py-4 rounded-full flex items-center justify-center space-x-2 transition-all"
                >
                  <FaPhone />
                  <span>{siteConfig.contact.phone}</span>
                </a>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <p className="text-3xl font-bold text-orange-400">15+</p>
                  <p className="text-sm text-gray-400">Years Experience</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-orange-400">5,000+</p>
                  <p className="text-sm text-gray-400">Projects Completed</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-orange-400">24/7</p>
                  <p className="text-sm text-gray-400">Emergency Service</p>
                </div>
              </div>
            </motion.div>

            {/* Right Content - Animated Icons */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="hidden lg:flex items-center justify-center relative"
            >
              <div className="relative w-96 h-96">
                <AnimatedIcon
                  icon={<FaBolt className="text-8xl text-orange-500" />}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                  animate="spin"
                />
                <AnimatedIcon
                  icon={<FaLightbulb className="text-5xl text-yellow-400" />}
                  className="absolute top-10 left-10"
                  animate="bounce"
                  delay={0.2}
                />
                <AnimatedIcon
                  icon={<FaShieldAlt className="text-5xl text-blue-400" />}
                  className="absolute top-10 right-10"
                  animate="float"
                  delay={0.4}
                />
                <AnimatedIcon
                  icon={<FaTools className="text-5xl text-green-400" />}
                  className="absolute bottom-10 left-10"
                  animate="shake"
                  delay={0.6}
                />
                <AnimatedIcon
                  icon={<FaCarBattery className="text-5xl text-purple-400" />}
                  className="absolute bottom-10 right-10"
                  animate="pulse"
                  delay={0.8}
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-white text-center"
          >
            <p className="text-sm mb-2">Scroll to explore</p>
            <div className="w-6 h-10 border-2 border-white rounded-full mx-auto flex items-start justify-center p-2">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1.5 h-1.5 bg-white rounded-full"
              />
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive electrical solutions for every need
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {siteConfig.services.slice(0, 6).map((service, index) => {
              const icons: Record<string, React.ReactElement> = {
                home: <FaHome className="text-5xl" />,
                building: <FaBuilding className="text-5xl" />,
                emergency: <FaClock className="text-5xl" />,
                ev: <FaCarBattery className="text-5xl" />,
                generator: <FaBolt className="text-5xl" />,
              };

              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
                >
                  <AnimatedIcon
                    icon={icons[service.icon] || <FaTools className="text-5xl" />}
                    className="text-orange-500 mb-6"
                    animate="bounce"
                  />
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {service.name}
                  </h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center space-x-2 text-orange-500 font-semibold hover:text-orange-600 group-hover:translate-x-1 transition-transform"
                  >
                    <span>Learn More</span>
                    <FaArrowRight />
                  </Link>

                  {/* CTA on every section */}
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <Link
                      href="/contact"
                      className="block text-center bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg transition-all"
                    >
                      Request Service
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              href="/services"
              className="inline-flex items-center space-x-2 bg-gray-900 hover:bg-gray-800 text-white font-bold px-8 py-4 rounded-full transition-all shadow-lg hover:shadow-xl"
            >
              <span>View All Services</span>
              <FaArrowRight />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-gray-900 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why Choose {siteConfig.name}?
            </h2>
            <p className="text-xl text-blue-200 max-w-2xl mx-auto">
              Excellence in every connection
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <FaAward />,
                title: "Licensed & Certified",
                description:
                  "Fully licensed, insured, and certified professionals you can trust",
              },
              {
                icon: <FaClock />,
                title: "24/7 Availability",
                description:
                  "Emergency services available around the clock when you need us most",
              },
              {
                icon: <FaShieldAlt />,
                title: "Safety First",
                description:
                  "We prioritize safety in every project, meeting all codes and standards",
              },
              {
                icon: <FaUsers />,
                title: "Customer Focused",
                description:
                  "Dedicated to exceptional service and complete customer satisfaction",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <AnimatedIcon
                  icon={
                    <div className="bg-orange-500 rounded-full p-6 inline-block mb-6">
                      <div className="text-4xl text-white">{feature.icon}</div>
                    </div>
                  }
                  animate="pulse"
                  delay={index * 0.2}
                />
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-blue-200">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <Link
              href="/about"
              className="inline-flex items-center space-x-2 bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-full transition-all shadow-lg hover:shadow-xl"
            >
              <span>Learn More About Us</span>
              <FaArrowRight />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Trust Badges Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Guarantee
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Quality workmanship backed by our commitment to excellence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                icon: <FaCheckCircle />,
                title: "100% Satisfaction Guarantee",
                description: "We&apos;re not happy until you&apos;re happy",
              },
              {
                icon: <FaStar />,
                title: "Top-Rated Service",
                description: "Consistently 5-star reviews from our customers",
              },
              {
                icon: <FaShieldAlt />,
                title: "Warranty Protected",
                description: "All work covered by comprehensive warranty",
              },
            ].map((badge, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-all"
              >
                <div className="text-6xl text-orange-500 mb-4 flex justify-center">
                  {badge.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {badge.title}
                </h3>
                <p className="text-gray-600">{badge.description}</p>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              href="/contact"
              className="inline-flex items-center space-x-2 bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-full transition-all shadow-lg hover:shadow-xl"
            >
              <span>Schedule Service Today</span>
              <FaArrowRight />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Reviews Section */}
      <ReviewsSection />

      {/* GBP Posts Section */}
      <GBPPosts />

      {/* Social Media Feed */}
      <SocialMediaFeed />

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-orange-600 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Power Your Project?
            </h2>
            <p className="text-xl mb-8 text-orange-100">
              Get in touch today for a free consultation and quote. Our team is
              standing by to help with all your electrical needs.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                href="/contact"
                className="bg-white text-orange-500 hover:bg-gray-100 font-bold px-8 py-4 rounded-full flex items-center space-x-2 transition-all shadow-lg hover:shadow-xl"
              >
                <span>Get Free Quote</span>
                <FaArrowRight />
              </Link>
              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="bg-orange-700 hover:bg-orange-800 text-white font-bold px-8 py-4 rounded-full flex items-center space-x-2 transition-all"
              >
                <FaPhone />
                <span>Call {siteConfig.contact.phone}</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
