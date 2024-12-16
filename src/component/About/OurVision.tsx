import React, { useState, useEffect } from "react";
import axiosInstance from "../../axios"; // Assuming axios instance is configured

const OurVision = () => {
  const [section, setSection] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  // Fetch specific section by ID
  useEffect(() => {
    const fetchSection = async () => {
      try {
        const response = await axiosInstance.get(`/hero-sections/675aa5e56ff9292f28bbbb89`);
        setSection(response.data); // Set the section data
      } catch (error) {
        setErrorMessage("Error fetching section: " + (error.response?.data?.message || error.message));
      }
    };

    fetchSection();
  }, []); // Empty dependency array means this runs once when the component mounts

  if (errorMessage) {
    return <div className="text-red-500">{errorMessage}</div>;
  }

  if (!section) {
    return <div>Loading...</div>; // Show loading while fetching data
  }
  const baseurl = "https://joyaproprties.onrender.com"
  return (
    <div className="grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-2 w-full">
      {/* Text Section */}
      <div className="flex flex-col bg-[#041d1a] md:order-2 lg:order-2 py-3 md:py-0 lg:py-0">
        <div className="mx-2 md:mx-4 md:my-auto lg:mx-20 lg:my-auto">
          <div className="mb-2 lg:mb-10">
            <h1 className="text-2xl lg:text-5xl text-[#f0ede6] font-bold">{section.title}</h1>
          </div>
          <p className="text-sm lg:text-lg font-serif text-[#f1f0ec] whitespace-pre-wrap leading-relaxed">
            {section.paragraph}
          </p>
        </div>
      </div>

      {/* Image Section */}
      {section.image && (
        <div>
          <img
            src={`${baseurl}${section.image}`}
            alt="Joya Vision"
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
          />
        </div>
      )}
    </div>
  );
};

export default OurVision;
