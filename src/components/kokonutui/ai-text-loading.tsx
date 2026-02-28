"use client";

/**
 * @author: @kokonutui
 * @description: AI Text Loading
 * @version: 1.0.0
 * @date: 2025-06-26
 * @license: MIT
 * @website: https://kokonutui.com
 * @github: https://github.com/kokonut-labs/kokonutui
 */

import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";

interface AITextLoadingProps {
  texts?: string[];
  className?: string;
  interval?: number;
}

export default function AITextLoading({
  texts = [],
  className,
  interval = 1500,
}: AITextLoadingProps) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, interval);

    return () => clearInterval(timer);
  }, [interval, texts.length]);

  return (
    <div className="flex items-center justify-center p-8 fixed top-0 left-0 w-full h-full bg-black/80 z-50 text-white">
      <motion.div
        className="relative px-4 py-2 w-full h-full max-h-[40%] max-w-[98%] md:max-w-[50%] bg-red-500 flex justify-center items-center rounded-2xl overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentTextIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: 1,
              y: 0,
              backgroundPosition: ["200% center", "-200% center"],
            }}
            exit={{ opacity: 0, y: -20 }}
            transition={{
              opacity: { duration: 0.3 },
              y: { duration: 0.3 },
              backgroundPosition: {
                duration: 2.5,
                ease: "linear",
                repeat: Infinity,
              },
            }}
            className={cn(
              "flex justify-center text-3xl font-bold bg-red-500 bg-[length:200%_100%] bg-clip-text  whitespace-nowrap min-w-max",
              className,
            )}
          >
            {texts[currentTextIndex]}
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
