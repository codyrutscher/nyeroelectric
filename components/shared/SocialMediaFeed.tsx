"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FaInstagram,
  FaFacebook,
  FaTiktok,
  FaHeart,
  FaComment,
  FaExternalLinkAlt,
} from "react-icons/fa";
import { siteConfig } from "@/config/site.config";

interface SocialPost {
  id: string;
  platform: "instagram" | "facebook" | "tiktok";
  image: string;
  caption: string;
  likes: number;
  comments: number;
  url: string;
  timestamp: Date;
}

export default function SocialMediaFeed() {
  const [posts, setPosts] = useState<SocialPost[]>([]);
  const [activeFilter, setActiveFilter] = useState<
    "all" | "instagram" | "facebook" | "tiktok"
  >("all");

  useEffect(() => {
    // In production, this would fetch from your social media APIs
    // For now, using placeholder data
    const mockPosts: SocialPost[] = [
      {
        id: "1",
        platform: "instagram",
        image: "/images/social/post-1.jpg",
        caption: "Just completed a major electrical panel upgrade! ⚡",
        likes: 145,
        comments: 12,
        url: siteConfig.social.instagram,
        timestamp: new Date("2024-10-10"),
      },
      {
        id: "2",
        platform: "facebook",
        image: "/images/social/post-2.jpg",
        caption: "Installing EV charging stations for local businesses 🚗⚡",
        likes: 98,
        comments: 8,
        url: siteConfig.social.facebook,
        timestamp: new Date("2024-10-08"),
      },
      {
        id: "3",
        platform: "tiktok",
        image: "/images/social/post-3.jpg",
        caption: "Quick tip: Signs you need an electrical inspection",
        likes: 234,
        comments: 23,
        url: siteConfig.social.tiktok,
        timestamp: new Date("2024-10-05"),
      },
      {
        id: "4",
        platform: "instagram",
        image: "/images/social/post-4.jpg",
        caption: "Smart home lighting installation completed ✨",
        likes: 187,
        comments: 15,
        url: siteConfig.social.instagram,
        timestamp: new Date("2024-10-03"),
      },
    ];

    setPosts(mockPosts);
  }, []);

  const filteredPosts =
    activeFilter === "all"
      ? posts
      : posts.filter((post) => post.platform === activeFilter);

  const getPlatformIcon = (platform: string) => {
    switch (platform) {
      case "instagram":
        return <FaInstagram className="text-xl" />;
      case "facebook":
        return <FaFacebook className="text-xl" />;
      case "tiktok":
        return <FaTiktok className="text-xl" />;
      default:
        return null;
    }
  };

  const getPlatformColor = (platform: string) => {
    switch (platform) {
      case "instagram":
        return "bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500";
      case "facebook":
        return "bg-blue-600";
      case "tiktok":
        return "bg-black";
      default:
        return "bg-gray-500";
    }
  };

  if (!siteConfig.features.socialFeed) return null;

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Follow Our Work
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Stay updated with our latest projects and electrical tips on social
            media
          </p>
        </motion.div>

        {/* Platform Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex justify-center space-x-4 mb-12"
        >
          <button
            onClick={() => setActiveFilter("all")}
            className={`px-6 py-2 rounded-full font-semibold transition-all ${
              activeFilter === "all"
                ? "bg-orange-500 text-white shadow-lg"
                : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
          >
            All Posts
          </button>
          <button
            onClick={() => setActiveFilter("instagram")}
            className={`px-6 py-2 rounded-full font-semibold transition-all flex items-center space-x-2 ${
              activeFilter === "instagram"
                ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg"
                : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
          >
            <FaInstagram />
            <span>Instagram</span>
          </button>
          <button
            onClick={() => setActiveFilter("facebook")}
            className={`px-6 py-2 rounded-full font-semibold transition-all flex items-center space-x-2 ${
              activeFilter === "facebook"
                ? "bg-blue-600 text-white shadow-lg"
                : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
          >
            <FaFacebook />
            <span>Facebook</span>
          </button>
          <button
            onClick={() => setActiveFilter("tiktok")}
            className={`px-6 py-2 rounded-full font-semibold transition-all flex items-center space-x-2 ${
              activeFilter === "tiktok"
                ? "bg-black text-white shadow-lg"
                : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
          >
            <FaTiktok />
            <span>TikTok</span>
          </button>
        </motion.div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
            >
              {/* Post Image */}
              <div className="relative aspect-square bg-gradient-to-br from-gray-200 to-gray-300 overflow-hidden">
                {/* Placeholder for image - in production, use actual images */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className={`${getPlatformColor(post.platform)} p-8 rounded-full opacity-20`}>
                    {getPlatformIcon(post.platform)}
                  </div>
                </div>

                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <a
                    href={post.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-gray-900 px-6 py-3 rounded-full font-semibold flex items-center space-x-2 hover:bg-orange-500 hover:text-white transition-colors"
                  >
                    <span>View Post</span>
                    <FaExternalLinkAlt />
                  </a>
                </div>

                {/* Platform Badge */}
                <div
                  className={`absolute top-4 right-4 ${getPlatformColor(
                    post.platform
                  )} text-white p-2 rounded-full`}
                >
                  {getPlatformIcon(post.platform)}
                </div>
              </div>

              {/* Post Info */}
              <div className="p-4">
                <p className="text-gray-700 text-sm mb-3 line-clamp-2">
                  {post.caption}
                </p>
                <div className="flex items-center justify-between text-gray-500 text-sm">
                  <div className="flex items-center space-x-4">
                    <span className="flex items-center space-x-1">
                      <FaHeart className="text-red-500" />
                      <span>{post.likes}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <FaComment className="text-blue-500" />
                      <span>{post.comments}</span>
                    </span>
                  </div>
                  <span className="text-xs">
                    {post.timestamp.toLocaleDateString()}
                  </span>
                </div>
              </div>
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
          <p className="text-gray-600 mb-4">
            Want to see more? Follow us on social media!
          </p>
          <div className="flex justify-center space-x-4">
            {siteConfig.social.instagram && (
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full font-semibold flex items-center space-x-2 hover:shadow-lg transition-all"
              >
                <FaInstagram />
                <span>Instagram</span>
              </a>
            )}
            {siteConfig.social.facebook && (
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold flex items-center space-x-2 hover:shadow-lg transition-all"
              >
                <FaFacebook />
                <span>Facebook</span>
              </a>
            )}
            {siteConfig.social.tiktok && (
              <a
                href={siteConfig.social.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black text-white px-6 py-3 rounded-full font-semibold flex items-center space-x-2 hover:shadow-lg transition-all"
              >
                <FaTiktok />
                <span>TikTok</span>
              </a>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
