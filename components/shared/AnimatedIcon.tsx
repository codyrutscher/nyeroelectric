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
  const animations = {
    pulse: {
      scale: [1, 1.1, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        delay,
      },
    },
    bounce: {
      y: [0, -10, 0],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        delay,
      },
    },
    spin: {
      rotate: 360,
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "linear",
        delay,
      },
    },
    float: {
      y: [0, -15, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      },
    },
    shake: {
      rotate: [0, 5, -5, 5, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        delay,
      },
    },
  };

  return (
    <motion.div
      className={className}
      animate={animations[animate]}
      whileHover={{ scale: 1.1 }}
    >
      {icon}
    </motion.div>
  );
}
