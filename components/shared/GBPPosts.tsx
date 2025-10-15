"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaGoogle, FaCalendar, FaExternalLinkAlt } from "react-icons/fa";
import { siteConfig } from "@/config/site.config";

interface GBPPost {
  id: string;
  title: string;
  summary: string;
  image?: string;
  cta?: {
    text: string;
    url: string;
  };
  date: Date;
  type: "offer" | "update" | "event" | "news";
}

export default function GBPPosts() {
  const [posts, setPosts] = useState<GBPPost[]>([]);

  useEffect(() => {
    // In production, fetch from Google Business Profile API
    // For now, using mock data
    const mockPosts: GBPPost[] = [
      {
        id: "1",
        title: "Spring Special: 15% Off Panel Upgrades!",
        summary:
          "Upgrade your electrical panel this spring and save 15%. Limited time offer for residential customers. Book now!",
        type: "offer",
        date: new Date("2024-10-01"),
        cta: {
          text: "Book Now",
          url: "/contact",
        },
      },
      {
        id: "2",
        title: "Now Installing Tesla Wall Connectors",
        summary:
          "We're now certified Tesla Wall Connector installers! Get your EV charging station installed by the pros.",
        type: "update",
        date: new Date("2024-09-28"),
        cta: {
          text: "Learn More",
          url: "/services/ev-charging-stations",
        },
      },
      {
        id: "3",
        title: "Free Electrical Safety Inspections",
        summary:
          "This month only: Schedule any service and receive a FREE comprehensive electrical safety inspection. Ensure your home is safe!",
        type: "offer",
        date: new Date("2024-09-20"),
        cta: {
          text: "Schedule Now",
          url: "/contact",
        },
      },
      {
        id: "4",
        title: "24/7 Emergency Service Available",
        summary:
          "Electrical emergency? We're here for you 24/7. Fast response times and expert solutions when you need them most.",
        type: "news",
        date: new Date("2024-09-15"),
        cta: {
          text: "Call Now",
          url: `tel:${siteConfig.contact.phone}`,
        },
      },
    ];

    setPosts(mockPosts);
  }, []);

  const getPostIcon = (type: string) => {
    switch (type) {
      case "offer":
        return "🎁";
      case "update":
        return "📢";
      case "event":
        return "📅";
      case "news":
        return "📰";
      default:
        return "ℹ️";
    }
  };

  const getPostColor = (type: string) => {
    switch (type) {
      case "offer":
        return "from-orange-500 to-red-500";
      case "update":
        return "from-blue-500 to-indigo-500";
      case "event":
        return "from-green-500 to-teal-500";
      case "news":
        return "from-purple-500 to-pink-500";
      default:
        return "from-gray-500 to-gray-600";
    }
  };

  if (!siteConfig.features.gbpPosts || posts.length === 0) return null;

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center space-x-2 mb-4">
            <FaGoogle className="text-4xl text-blue-500" />
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Latest Updates
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Stay informed about our latest offers, news, and updates
          </p>
        </motion.div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {posts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
            >
              {/* Header with Gradient */}
              <div
                className={`bg-gradient-to-r ${getPostColor(
                  post.type
                )} p-6 text-white`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-3xl">{getPostIcon(post.type)}</span>
                  <span className="text-xs bg-white/20 px-3 py-1 rounded-full uppercase font-semibold">
                    {post.type}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2">{post.title}</h3>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-gray-700 mb-4 leading-relaxed">
                  {post.summary}
                </p>

                {/* Date */}
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <FaCalendar className="mr-2" />
                  <span>
                    {post.date.toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                </div>

                {/* CTA Button */}
                {post.cta && (
                  <a
                    href={post.cta.url}
                    className={`flex items-center justify-center space-x-2 bg-gradient-to-r ${getPostColor(
                      post.type
                    )} text-white font-semibold px-6 py-3 rounded-lg transition-all hover:shadow-lg group-hover:scale-105`}
                  >
                    <span>{post.cta.text}</span>
                    <FaExternalLinkAlt className="text-sm" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More on Google */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href={`https://www.google.com/search?q=${encodeURIComponent(
              siteConfig.name
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-white border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white font-bold px-8 py-4 rounded-full transition-all shadow-lg hover:shadow-xl"
          >
            <FaGoogle />
            <span>View More on Google</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
