"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const Label = React.forwardRef(({ className, children, ...props }, ref) => {
  return (
    <motion.label
      ref={ref}
      className={cn(
        "text-base font-medium text-white/90 mb-2 block",
        className
      )}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      {...props}
    >
      {children}
    </motion.label>
  );
});
Label.displayName = "Label";

export { Label };

