"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedIconProps {
  icon: ReactNode;
  className?: string;
  animate?: "pulse" | "bounce" | "spin" | "float" | "shake";
  delay?: number;
}

export default function AnimatedIcon({
  icon,
  className = "",
  animate = "float",
  delay = 0,
}: AnimatedIconProps) {
  const getAnimation = () => {
    switch (animate) {
      case "pulse":
        return {
          scale: [1, 1.1, 1],
          transition: {
            duration: 2,
            repeat: Infinity as number,
            delay,
          },
        };
      case "bounce":
        return {
          y: [0, -10, 0],
          transition: {
            duration: 1.5,
            repeat: Infinity as number,
            delay,
          },
        };
      case "spin":
        return {
          rotate: 360,
          transition: {
            duration: 3,
            repeat: Infinity as number,
            ease: "linear" as const,
            delay,
          },
        };
      case "float":
        return {
          y: [0, -15, 0],
          transition: {
            duration: 3,
            repeat: Infinity as number,
            ease: "easeInOut" as const,
            delay,
          },
        };
      case "shake":
        return {
          rotate: [0, 5, -5, 5, 0],
          transition: {
            duration: 2,
            repeat: Infinity as number,
            delay,
          },
        };
      default:
        return {};
    }
  };

  return (
    <motion.div
      className={className}
      animate={getAnimation()}
      whileHover={{ scale: 1.1 }}
    >
      {icon}
    </motion.div>
  );
}
