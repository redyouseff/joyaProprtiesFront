import React from "react";
import { motion } from "framer-motion";

const VisualImage = () => {
  return (
    <div className="relative w-full h-screen visual-image-wrap">
    {/* Animated Background image for desktop */}
    <motion.div
      initial={{ opacity: 0, scale: 1.1 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.5, delay: 0.2 }}
      className="hidden md:block absolute inset-0 bg-cover bg-center"
      style={{
        backgroundImage: "url('/features/WhatsApp Image 2024-11-04 at 21.54.12_4a2182ac.jpg')",
      }}
    ></motion.div>

    {/* Animated Background image for mobile */}
    <motion.div
      initial={{ opacity: 0, scale: 1.1 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.5, delay: 0.2 }}
      className="md:hidden absolute inset-0 bg-cover bg-center"
      style={{
        backgroundImage: "url('/features/WhatsApp Image 2024-11-04 at 21.54.12_4a2182ac.jpg')",
      }}
    ></motion.div>

    {/* Gradients on top and bottom */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, delay: 0.5 }}
      className="absolute inset-0 bg-gradient-to-t w-full h-1/2 from-transparent to-[#111612] z-10"
    ></motion.div>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, delay: 0.5 }}
      className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-b from-transparent to-[#111612] z-10"
    ></motion.div>

    {/* Scroll indicator */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, delay: 1 }}
      className="absolute bottom-[-9px] md:bottom-6 left-1/2 transform -translate-x-1/2 z-20"
    >
      <div className="w-6 h-12 flex flex-col items-center">
        <div className="w-[1px] h-8 bg-[#faf8f7] animate-bounce"></div>
      </div>
    </motion.div>

    {/* Info section */}
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5, delay: 1.2 }}
      className="absolute bottom-0 left-0 w-full p-[10px] md:p-10 z-30 text-[#faf8f7]"
    >
      <h2 className="text-4xl font-light uppercase fade-left transition-opacity duration-500">
      Bugatti Residences
      </h2>
      {/* <h3 className="text-lg font-thin mt-2 uppercase md:mb-0 mb-[10px]">
        Palm Jumeirah <span className="mx-2">•</span> Request Price
      </h3> */}
     
    </motion.div>

    {/* Search tabs */}
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5, delay: 1.4 }}
      className="absolute bottom-0 right-0 p-[10px] md:p-10 z-30 text-[#faf8f7]"
    >
      <div className="flex space-x-4">
        <motion.a
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          whileHover={{ scale: 1.05, textDecoration: "underline" }}
          transition={{ duration: 0.3 }}
          href="/Projects/Features"
          className="hover:underline"
        >
          Feature
        </motion.a>
        <motion.a
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          whileHover={{ scale: 1.05, textDecoration: "underline" }}
          transition={{ duration: 0.3 }}
          href="/Projects/Off-Plan"
          className="hover:underline"
        >
          Off Plan
        </motion.a>
      </div>
    </motion.div>
  </div>
  );
};

export default VisualImage;
