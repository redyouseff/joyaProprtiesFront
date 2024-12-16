import React from "react";
import { motion } from "framer-motion";

const FeaturesVisualImage = () => {
  return (
    <motion.div
      className="relative w-full h-screen visual-image-wrap"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
    >
      {/* Background image for desktop */}
      <motion.div
        className="hidden md:block absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/2.png')", // Absolute path
        }}
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      ></motion.div>

      {/* Background image for mobile */}
      <motion.div
        className="md:hidden absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/2.png')", // Absolute path
        }}
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      ></motion.div>

      {/* Gradients on top and bottom */}
      <div className="absolute inset-0 bg-gradient-to-t w-full h-1/2 from-transparent to-[#111612] z-10"></div>
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-b from-transparent to-[#111612] z-10"></div>

      {/* Scroll indicator */}
      <div className="absolute bottom-[-9px] md:bottom-6 left-1/2 transform -translate-x-1/2 z-20">
        <div className="w-6 h-12 flex flex-col items-center">
          <div className="w-[1px] h-8 bg-[#faf8f7] animate-bounce"></div>
        </div>
      </div>

      {/* Info section */}
      <motion.div
        className="absolute bottom-0 left-0 w-full p-[10px] md:p-10 z-30 text-[#faf8f7]"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
      >
        <h2 className="text-4xl font-light uppercase">
          Villa Allegra
        </h2>
        <h3 className="text-lg font-thin mt-2 uppercase md:mb-0 mb-[10px]">
          Palm Jumeirah <span className="mx-2">•</span> Request Price
        </h3>
      </motion.div>

      {/* Search tabs */}
      <motion.div
        className="absolute bottom-0 right-0 p-[10px] md:p-10 z-30 text-[#faf8f7]"
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
      >
        <div className="flex space-x-4">
          <a href="/Projects/Features" className="hover:underline">
            Feature
          </a>
          <a href="/Projects/Off-Plan" className="hover:underline">
            Off Plan
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default FeaturesVisualImage;
