import React, { useEffect, useState } from "react";
import axiosInstance from "../../axios"; // Adjust the path as necessary

const ServicesVisualImage = () => {
  const [imageData, setImageData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchImageData = async () => {
      try {
        const response = await axiosInstance.get("/image-services/675d2521b73484d7746d1243");
        if (response.data.success) {
          setImageData(response.data.data.image);
        } else {
          throw new Error("Failed to load image");
        }
      } catch (err) {
        setError(err.message || "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchImageData();
  }, []);

  if (loading) {
    return <div className="text-center text-white">Loading image...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">Error: {error}</div>;
  }

  return (
    <div className="relative w-full h-screen visual-image-wrap">
      {/* Background image for desktop */}
      <div
        className="hidden md:block absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${process.env.NODE_ENV === "production" 
            ? "https://your-backend-url" 
            : "https://sleepy-blinnie-beshoynasry-2859766e.koyeb.app"}${imageData})`,
        }}
      ></div>

      {/* Background image for mobile */}
      <div
        className="md:hidden absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${process.env.NODE_ENV === "production" 
            ? "https://your-backend-url" 
            : "https://sleepy-blinnie-beshoynasry-2859766e.koyeb.app"}${imageData})`,
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
        <h2 className="text-4xl font-light uppercase fade-left transition-opacity duration-500">
          Villa Allegra
        </h2>
        <h3 className="text-lg font-thin mt-2 uppercase md:mb-0 mb-[10px]">
          Palm Jumeirah <span className="mx-2">•</span> Request Price
        </h3>
        <a
          href="/Projects/Features/villa-allegra__67112f9c673d16920a7bbf41"
          className="inline-block mt-4 px-6 py-2 bg-transparent border border-[#faf8f7] hover:bg-[#faf8f7] hover:text-[#111612] transition-colors duration-500"
        >
          See details
        </a>
      </div>

      {/* Search tabs */}
      <div className="absolute bottom-0 right-0 p-[10px] md:p-10 z-30 text-[#faf8f7]">
        <div className="flex space-x-4">
          <a href="/Projects/Features" className="hover:underline">
            Feature
          </a>
          <a href="/Projects/Off-Plan" className="hover:underline">
            Off Plan
          </a>
        </div>
      </div>
    </div>
  );
};

export default ServicesVisualImage;
