"use client";

import React from "react";
import { motion } from "framer-motion";

const Motion = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen w-screen bg-background"
    >
      {children}
    </motion.div>
  );
};

export default Motion;
