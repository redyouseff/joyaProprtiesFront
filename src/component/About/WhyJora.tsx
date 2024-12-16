import React, { useEffect, useState } from "react";
import axios from "axios";

const WhyJoya = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const dataId = "675a9ff34dbf105954b6165d"; // Specific ID for fetching data

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Replace this URL with your actual API endpoint for fetching data by ID
        const response = await axios.get(`https://joyaproprties.onrender.com/api/hero-sections/${dataId}`);
        setData(response.data);
        setLoading(false);
      } catch (err) {
        setError("Error fetching data");
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
    <div className="grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-2 w-full">
      {/* Text Section */}
      <div className="flex flex-col bg-[#041d1a] py-3 md:py-0 lg:py-0">
        <div className="mx-2 md:mx-4 md:my-auto lg:mx-20 lg:my-auto">
          <div className="mb-2 lg:mb-10">
            <h1 className="text-2xl lg:text-5xl text-[#f0ede6] font-bold">
              {data ? data.title : "Why Choose Joya Properties?"}
            </h1>
          </div>
          <p className="text-sm lg:text-lg font-serif text-[#f4f3ef] whitespace-pre-wrap leading-relaxed">
            {data ? data.paragraph : "Data content is loading..."}
          </p>
        </div>
      </div>

      {/* Image Section */}
      <div>
        <img
          src={data ? `${baseurl}${data.image}` : ""}
          alt="Why Joya"
          className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
        />
      </div>
    </div>
  );
};

export default WhyJoya;
