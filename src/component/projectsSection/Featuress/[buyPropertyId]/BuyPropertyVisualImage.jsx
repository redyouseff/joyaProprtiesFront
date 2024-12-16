import React from "react";

function BuyPropertyVisualImage({ visualImage, price, location }) {
  console.log(visualImage);
  return (
    <div className="relative w-full h-screen visual-image-wrap">
      {/* Background image for desktop */}
      <div
        className="hidden md:block absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${visualImage})`,
        }}
      ></div>
      {/* Background image for mobile */}
      <div
        className="md:hidden absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${visualImage})`,
        }}
      ></div>

      {/* Gradients on top and bottom */}
      <div className="absolute inset-0 bg-gradient-to-t w-full h-1/2 from-transparent to-[#111612] z-10"></div>
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-b from-transparent to-[#111612] z-10"></div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20">
        <div className="w-6 h-12 flex flex-col items-center">
          <div className="w-[1px] h-8 bg-[#faf8f7] animate-bounce"></div>
        </div>
      </div>

      {/* Info section */}
      <div className="absolute bottom-0 left-0 w-full p-10 z-30 text-[#faf8f7]">
        <h2 className="text-xl lg:text-4xl font-light uppercase fade-left transition-opacity duration-500">
          Villa Allegra
        </h2>
        <h3 className="text-base lg:text-lg font-thin mt-2 uppercase">
          {location} <span className="mx-2">•</span>{" "}
          {price > 0 ? "AED " + price.toLocaleString() : "Request Price"}
        </h3>
      </div>

      {/* Search tabs */}
      <div className="absolute bottom-0 right-0 lg:p-10 p-4 z-30 text-[#faf8f7]">
        <div className="flex lg:space-x-4 space-x-2">
          <a href="/Projects/Features" className="hover:underline">
            Features
          </a>
          <a href="/Projects/Off-Plan" className="hover:underline">
            Off Plans
          </a>
        </div>
      </div>
    </div>
  );
}

export default BuyPropertyVisualImage;
