import React, { useEffect, useState } from "react";
import axios from "axios";

const HeroAbout = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const dataId = "675aac2019eb0fb275756d21"; // Specific ID for fetching data

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Make the API request to fetch data by ID
        const response = await axios.get(`https://joyaproprties.onrender.com/api/hero-sections/${dataId}`);
        setData(response.data);
        setLoading(false);
      } catch (err) {
      
        setLoading(false);
      }
    };

    fetchData();
  }, [dataId]);

  if (loading) {
    return <div className="text-center text-[#a0b3b1]">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-[#ff0000]">{error}</div>;
  }

  const baseurl = "https://joyaproprties.onrender.com"; // Set base URL for images

  return (
    <div className="relative">
      {/* Hero Title Section */}
      <div className="flex w-full h-20 md:h-32 lg:h-32 bg-[#041d1a]">
        <h1 className="text-2xl lg:text-5xl font-bold text-center text-[#f1f0ec] my-auto mx-auto">
          About Us
        </h1>
      </div>

      {/* Hero Image Section */}
      <div className="relative flex flex-col">
        {/* Background Decoration */}
        <div className="hidden lg:w-full h-64 md:h-64 lg:h-72 bg-[#041d1a] lg:relative lg:flex"></div>

        {/* Image Section */}
        <div
          className="w-full bg-no-repeat bg-cover bg-fixed min-h-[400px] md:min-h-[550px]"
          style={{
            backgroundImage: "url('https://res.cloudinary.com/dp5bcywc7/image/upload/v1732729770/WhatsApp_Image_2024-11-27_at_19.40.19_27016a17_bb9ryn.jpg')",
          }}
        ></div>
        {/* Content Section */}
        <div className="relative">
          <div className="absolute bottom-1/2 md:bottom-1/2 lg:bottom-40 lg:left-1/2 transform lg:-translate-x-3/4 -translate-y-1/2 md:-translate-y-1/2 lg:-translate-y-1/2 lg:flex lg:flex-row lg:justify-start lg:items-start flex flex-col-reverse ">
            <div className="text-center mx-2 md:mx-8 lg:mx-0">
              <div className="bg-[#354948] px-2 py-2 lg:px-10 lg:py-10 shadow-md flex flex-col justify-start items-start rounded-md transition-all duration-300 ease-in-out transform hover:md:scale-105 hover:shadow-lg">
                {/* Main Heading */}
                <h3 className="font-bold text-[#faf8f7] text-base md:text-2xl lg:text-4xl mb-1 md:mb-3 lg:mb-4">
                  {data ? data.title : "WHO WE ARE?"}
                </h3>

                {/* Description */}
                <p className="text-[#f1f0ec] my-2 md:my-4 text-xs md:text-sm lg:text-base text-start">
                  {data ? data.paragraph : "Content is loading..."}
                </p>

                <a
                  href={data ? data.contactLink : "https://wa.me/971585976060"} // Dynamically set contact link if available
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#687878] text-white px-6 md:px-10 py-2 md:py-3 rounded-md text-xs md:text-sm lg:text-base transition-all duration-300 ease-in-out transform hover:bg-[#3d6a64] hover:md:scale-110"
                >
                  Get In Touch
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroAbout;
