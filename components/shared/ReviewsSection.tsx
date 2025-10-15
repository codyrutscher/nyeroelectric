"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaStar, FaGoogle, FaQuoteLeft } from "react-icons/fa";
import { siteConfig } from "@/config/site.config";

interface Review {
  id: string;
  author: string;
  rating: number;
  text: string;
  date: string;
  source: string;
  avatar?: string;
}

export default function ReviewsSection() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [stats, setStats] = useState({
    averageRating: 0,
    totalReviews: 0,
  });

  useEffect(() => {
    // In production, fetch from Google Business Profile API
    // For now, using mock data
    const mockReviews: Review[] = [
      {
        id: "1",
        author: "Sarah Johnson",
        rating: 5,
        text: "Absolutely outstanding service! They upgraded our entire electrical panel and installed EV charging in our garage. Professional, clean, and on time. Highly recommend!",
        date: "2 weeks ago",
        source: "Google",
      },
      {
        id: "2",
        author: "Michael Chen",
        rating: 5,
        text: "Emergency electrical issue at 11PM and they came out within an hour. Fixed the problem quickly and didn't overcharge. These guys are lifesavers!",
        date: "1 month ago",
        source: "Google",
      },
      {
        id: "3",
        author: "Jessica Martinez",
        rating: 5,
        text: "Had them install smart lighting throughout our new home. The team was knowledgeable, friendly, and did an amazing job. The house looks incredible!",
        date: "1 month ago",
        source: "Google",
      },
      {
        id: "4",
        author: "David Thompson",
        rating: 5,
        text: "Best electrician we've ever worked with. Transparent pricing, excellent communication, and top-quality work. Will definitely use them again!",
        date: "2 months ago",
        source: "Google",
      },
      {
        id: "5",
        author: "Emily Rodriguez",
        rating: 5,
        text: "Installed a whole-home generator for us. The installation was flawless and they explained everything clearly. Great value for the quality of work!",
        date: "2 months ago",
        source: "Google",
      },
      {
        id: "6",
        author: "Robert Williams",
        rating: 5,
        text: "Professional from start to finish. They rewired our entire office building ahead of schedule. Impressed with their attention to detail and safety standards.",
        date: "3 months ago",
        source: "Google",
      },
    ];

    setReviews(mockReviews);
    setStats({
      averageRating: 5.0,
      totalReviews: mockReviews.length,
    });
  }, []);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <FaStar
        key={i}
        className={`${
          i < rating ? "text-yellow-400" : "text-gray-300"
        } text-lg`}
      />
    ));
  };

  if (!siteConfig.features.reviews) return null;

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Don&apos;t just take our word for it - hear from our satisfied customers
          </p>

          {/* Stats */}
          <div className="flex items-center justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="flex items-center justify-center space-x-1 mb-2">
                {renderStars(5)}
              </div>
              <p className="text-3xl font-bold text-gray-900">
                {stats.averageRating.toFixed(1)}
              </p>
              <p className="text-sm text-gray-600">Average Rating</p>
            </div>
            <div className="h-16 w-px bg-gray-300" />
            <div className="text-center">
              <p className="text-3xl font-bold text-gray-900">
                {stats.totalReviews}+
              </p>
              <p className="text-sm text-gray-600">5-Star Reviews</p>
            </div>
            <div className="h-16 w-px bg-gray-300" />
            <div className="text-center">
              <FaGoogle className="text-4xl text-blue-500 mx-auto mb-2" />
              <p className="text-sm text-gray-600">Google Reviews</p>
            </div>
          </div>
        </motion.div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200"
            >
              {/* Quote Icon */}
              <FaQuoteLeft className="text-3xl text-orange-500 mb-4 opacity-50" />

              {/* Stars */}
              <div className="flex items-center space-x-1 mb-4">
                {renderStars(review.rating)}
              </div>

              {/* Review Text */}
              <p className="text-gray-700 mb-4 leading-relaxed">
                {review.text}
              </p>

              {/* Author */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                <div>
                  <p className="font-semibold text-gray-900">{review.author}</p>
                  <p className="text-sm text-gray-500">{review.date}</p>
                </div>
                <FaGoogle className="text-2xl text-blue-500" />
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
          <a
            href={`https://g.page/r/${siteConfig.googleBusinessProfile.placeId}/review`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-blue-500 hover:bg-blue-600 text-white font-bold px-8 py-4 rounded-full transition-all shadow-lg hover:shadow-xl"
          >
            <FaGoogle />
            <span>Leave us a Review</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
