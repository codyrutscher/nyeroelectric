"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaArrowLeft, FaArrowRight } from "react-icons/fa";

interface GalleryItem {
  id: number;
  title: string;
  category: string;
  description: string;
}

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const categories = ["all", "residential", "commercial", "ev-charging", "emergency"];

  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      title: "Electrical Panel Upgrade",
      category: "residential",
      description: "Complete 200-amp panel upgrade with modern circuit breakers",
    },
    {
      id: 2,
      title: "Commercial Office Wiring",
      category: "commercial",
      description: "Full office building electrical system installation",
    },
    {
      id: 3,
      title: "Tesla Charger Installation",
      category: "ev-charging",
      description: "Level 2 EV charging station installation in residential garage",
    },
    {
      id: 4,
      title: "Smart Home Lighting",
      category: "residential",
      description: "Automated lighting system with smart controls",
    },
    {
      id: 5,
      title: "Emergency Power Restoration",
      category: "emergency",
      description: "24/7 emergency electrical repair service",
    },
    {
      id: 6,
      title: "Industrial Electrical",
      category: "commercial",
      description: "Heavy-duty commercial electrical installation",
    },
    {
      id: 7,
      title: "Home Rewiring Project",
      category: "residential",
      description: "Complete home rewiring with modern electrical standards",
    },
    {
      id: 8,
      title: "EV Charging Station",
      category: "ev-charging",
      description: "Commercial EV charging station installation",
    },
    {
      id: 9,
      title: "Generator Installation",
      category: "residential",
      description: "Whole-home backup generator system",
    },
  ];

  const filteredItems =
    selectedCategory === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory);

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
              Our <span className="text-orange-400">Work</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100">
              Explore our portfolio of completed electrical projects
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {/* Filter Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold capitalize transition-all ${
                  selectedCategory === category
                    ? "bg-orange-500 text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category === "all" ? "All Projects" : category.replace("-", " ")}
              </button>
            ))}
          </motion.div>

          {/* Gallery Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence>
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="group relative bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all cursor-pointer aspect-square"
                  onClick={() => setSelectedImage(item)}
                >
                  {/* Placeholder background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-blue-500/20 flex items-center justify-center">
                    <div className="text-6xl text-white/30">⚡</div>
                  </div>

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6">
                    <h3 className="text-white text-xl font-bold mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-200 text-sm">{item.description}</p>
                    <span className="inline-block mt-3 px-4 py-1 bg-orange-500 text-white text-xs rounded-full capitalize w-fit">
                      {item.category.replace("-", " ")}
                    </span>
                  </div>

                  {/* Hover Effect */}
                  <motion.div
                    className="absolute inset-0 border-4 border-orange-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"
                    layoutId={`border-${item.id}`}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                No projects found in this category
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl max-w-4xl w-full overflow-hidden"
            >
              {/* Image */}
              <div className="aspect-video bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                <div className="text-9xl text-gray-400">⚡</div>
              </div>

              {/* Details */}
              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">
                      {selectedImage.title}
                    </h2>
                    <span className="inline-block px-4 py-1 bg-orange-500 text-white text-sm rounded-full capitalize">
                      {selectedImage.category.replace("-", " ")}
                    </span>
                  </div>
                  <button
                    onClick={() => setSelectedImage(null)}
                    className="text-gray-500 hover:text-gray-700 p-2"
                  >
                    <FaTimes className="text-2xl" />
                  </button>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {selectedImage.description}
                </p>

                {/* Navigation */}
                <div className="flex justify-between mt-8">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      const currentIndex = filteredItems.findIndex(
                        (item) => item.id === selectedImage.id
                      );
                      const prevIndex =
                        currentIndex > 0
                          ? currentIndex - 1
                          : filteredItems.length - 1;
                      setSelectedImage(filteredItems[prevIndex]);
                    }}
                    className="flex items-center space-x-2 bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-3 rounded-lg transition-all"
                  >
                    <FaArrowLeft />
                    <span>Previous</span>
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      const currentIndex = filteredItems.findIndex(
                        (item) => item.id === selectedImage.id
                      );
                      const nextIndex =
                        currentIndex < filteredItems.length - 1
                          ? currentIndex + 1
                          : 0;
                      setSelectedImage(filteredItems[nextIndex]);
                    }}
                    className="flex items-center space-x-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg transition-all"
                  >
                    <span>Next</span>
                    <FaArrowRight />
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
