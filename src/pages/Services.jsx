"use client";
import React, { useEffect, useState } from "react";
import axiosInstance from "../axios"; // Import the Axios instance

import AOS from "aos";
import "aos/dist/aos.css";
import ServiceTitle from "../component/services/ServiceTitle";
import ServiceCardsSection from "../component/services/ServiceCardsSection";
import MortageCalculator from "../component/services/MortageCalculator";

function Services() {
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    // Initialize AOS for animations
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
      once: false,
    });

    // Fetch image data using Axios instance
    axiosInstance
      .get("/image-services/675d2521b73484d7746d1243") // Replace with your endpoint
      .then((response) => {
        // Assuming the image URL is returned in the `data.image` field
        setImageUrl(response.data.data.image); // Set the image URL from the response
      })
      .catch((error) => {
        console.error("Error fetching image:", error);
      });
  }, []);
 

  return (
    <div className="bg-[#111612] overflow-hidden">
      <div data-aos="fade-up">
        <div className="relative w-full h-screen visual-image-wrap">
          {/* Background image for desktop */}
          <div
            className="hidden md:block absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(https://joyaproprties.onrender.com${imageUrl || ""})`, // Concatenate with the base URL
            }}
          ></div>

          {/* Background image for mobile */}
          <div
            className="md:hidden absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(https://joyaproprties.onrender.com${imageUrl || ""})`, // Concatenate with the base URL
            }}
          ></div>

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
          <div className="absolute bottom-0 left-0 w-full p-[10px] md:p-10 z-30 text-[#faf8f7]">
            {/* Content for the image */}
          </div>

          {/* Search tabs */}
          <div className="absolute bottom-0 right-0 p-[10px] md:p-10 z-30 text-[#faf8f7]">
            <div className="flex space-x-4">
              {/* Navigation Links */}
            </div>
          </div>
        </div>
      </div>

      <div data-aos="fade-left">
        <ServiceTitle />
      </div>

      <div data-aos="fade-up">
        <ServiceCardsSection />
      </div>

      <div data-aos="fade-right">
        <MortageCalculator />
      </div>
    </div>
  );
}

export default Services;
