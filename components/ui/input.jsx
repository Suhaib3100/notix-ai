"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  const [isFocused, setIsFocused] = React.useState(false);

  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <input
        type={type}
        className={cn(
          "flex h-12 w-full rounded-md bg-[#1a1a1a] px-3 py-2 text-base text-white placeholder:text-gray-500",
          "border-none outline-none transition-all duration-300",
          "focus:ring-2 focus:ring-blue-500/20",
          "hover:bg-[#222222]",
          isFocused && "ring-2 ring-blue-500/20",
          className
        )}
        ref={ref}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        {...props}
      />
      {isFocused && (
        <motion.div
          className="absolute inset-0 -z-10 rounded-md bg-gradient-to-b from-blue-500/20 to-transparent blur-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        />
      )}
    </motion.div>
  );
});
Input.displayName = "Input";

export { Input };

