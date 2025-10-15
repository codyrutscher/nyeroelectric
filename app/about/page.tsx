"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  FaBolt,
  FaAward,
  FaUsers,
  FaShieldAlt,
  FaClock,
  FaCheckCircle,
  FaArrowRight,
  FaLightbulb,
  FaTools,
  FaHardHat,
} from "react-icons/fa";
import { siteConfig } from "@/config/site.config";
import AnimatedIcon from "@/components/shared/AnimatedIcon";

export default function AboutPage() {
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
              About <span className="text-orange-400">{siteConfig.name}</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100">
              Your trusted electrical partner for over 15 years
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Founded in 2009, {siteConfig.name} has been serving our community
                  with exceptional electrical services for over 15 years. What
                  started as a small family-owned business has grown into one of
                  the most trusted electrical service providers in the region.
                </p>
                <p>
                  Our commitment to quality, safety, and customer satisfaction has
                  remained unwavering throughout our journey. We've completed
                  thousands of projects, from simple residential repairs to complex
                  commercial installations, always maintaining the highest
                  standards of workmanship.
                </p>
                <p>
                  Today, we're proud to serve both residential and commercial
                  clients with a team of highly skilled, licensed electricians who
                  are passionate about their craft and dedicated to exceeding
                  customer expectations.
                </p>
              </div>

              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center space-x-2 bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-full transition-all shadow-lg hover:shadow-xl"
                >
                  <span>Work With Us</span>
                  <FaArrowRight />
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                <AnimatedIcon
                  icon={
                    <div className="bg-orange-500 rounded-2xl p-8 text-white">
                      <FaBolt className="text-6xl mb-4" />
                      <p className="text-3xl font-bold">5000+</p>
                      <p className="text-sm">Projects Completed</p>
                    </div>
                  }
                  animate="float"
                />
                <AnimatedIcon
                  icon={
                    <div className="bg-blue-500 rounded-2xl p-8 text-white mt-8">
                      <FaUsers className="text-6xl mb-4" />
                      <p className="text-3xl font-bold">15+</p>
                      <p className="text-sm">Years Experience</p>
                    </div>
                  }
                  animate="float"
                  delay={0.2}
                />
                <AnimatedIcon
                  icon={
                    <div className="bg-green-500 rounded-2xl p-8 text-white">
                      <FaAward className="text-6xl mb-4" />
                      <p className="text-3xl font-bold">100%</p>
                      <p className="text-sm">Satisfaction</p>
                    </div>
                  }
                  animate="float"
                  delay={0.4}
                />
                <AnimatedIcon
                  icon={
                    <div className="bg-purple-500 rounded-2xl p-8 text-white mt-8">
                      <FaShieldAlt className="text-6xl mb-4" />
                      <p className="text-3xl font-bold">24/7</p>
                      <p className="text-sm">Emergency Service</p>
                    </div>
                  }
                  animate="float"
                  delay={0.6}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <FaShieldAlt />,
                title: "Safety First",
                description:
                  "We never compromise on safety. Every project follows strict safety protocols and meets all local and national electrical codes.",
              },
              {
                icon: <FaCheckCircle />,
                title: "Quality Workmanship",
                description:
                  "We take pride in our work and ensure every job is completed to the highest standards with attention to detail.",
              },
              {
                icon: <FaUsers />,
                title: "Customer Focus",
                description:
                  "Your satisfaction is our priority. We listen to your needs and deliver solutions that exceed expectations.",
              },
              {
                icon: <FaLightbulb />,
                title: "Innovation",
                description:
                  "We stay current with the latest electrical technologies and best practices to provide cutting-edge solutions.",
              },
              {
                icon: <FaClock />,
                title: "Reliability",
                description:
                  "We show up on time, complete work as promised, and are available 24/7 for emergency services.",
              },
              {
                icon: <FaAward />,
                title: "Integrity",
                description:
                  "Honest pricing, transparent communication, and ethical business practices define our relationships.",
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all"
              >
                <div className="text-5xl text-orange-500 mb-4">{value.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Expert Team
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Licensed, certified professionals you can trust
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                icon: <FaHardHat />,
                title: "Licensed Electricians",
                description: "Fully licensed and certified professionals",
              },
              {
                icon: <FaTools />,
                title: "Experienced Technicians",
                description: "Years of hands-on experience",
              },
              {
                icon: <FaShieldAlt />,
                title: "Safety Certified",
                description: "OSHA compliant and safety trained",
              },
              {
                icon: <FaAward />,
                title: "Continuously Trained",
                description: "Up-to-date with latest technologies",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <AnimatedIcon
                  icon={
                    <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-full p-6 inline-block mb-4 text-white">
                      <div className="text-4xl">{item.icon}</div>
                    </div>
                  }
                  animate="pulse"
                  delay={index * 0.2}
                />
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
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
              Ready to Experience the Difference?
            </h2>
            <p className="text-xl mb-8 text-orange-100">
              Join thousands of satisfied customers who trust {siteConfig.name} for
              their electrical needs.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                href="/contact"
                className="bg-white text-orange-500 hover:bg-gray-100 font-bold px-8 py-4 rounded-full flex items-center space-x-2 transition-all shadow-lg hover:shadow-xl"
              >
                <span>Get Started Today</span>
                <FaArrowRight />
              </Link>
              <Link
                href="/services"
                className="bg-orange-700 hover:bg-orange-800 text-white font-bold px-8 py-4 rounded-full transition-all"
              >
                View Our Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
