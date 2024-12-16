import React, { useEffect, useState } from "react";
import axios from "axios";

const Presentation = () => {
  const [data, setData] = useState(null); // Updated to handle single object
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://joyaproprties.onrender.com/api/secondsection"
        );
        if (response.data && response.data.length > 0) {
          setData(response.data[0]); // Assuming you want the first object in the array
        } else {
          setError("No data available.");
        }
      } catch (err) {
        console.error("Error fetching data:", err);
        setError("Failed to fetch data. Please try again.");
      }
    };

    fetchData();
  }, []);

  return (
    <section className="text-[#EFECE6] py-16 bg-[#111612]">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-wrap items-center">
          {/* Left Column - Text */}
          <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
            <div className="space-y-8">
              {error ? (
                <p className="text-red-500">{error}</p>
              ) : data ? (
                <>
                  <h6 className="text-5xl md:text-6xl font-bold leading-tight text-[#EFECE6]">
                    {data.title}
                  </h6>
                  <div className="w-24 h-1 bg-gradient-to-r from-[#3d6a64] to-[#698f8c] rounded-full"></div>
                  <p
                    className="text-lg leading-relaxed text-[#EFECE6]"
                    dangerouslySetInnerHTML={{
                      __html: data.paragraph.replace(/\u003C\/?p\u003E/g, ""),
                    }}
                  ></p>
                </>
              ) : (
                <p>Loading...</p>
              )}
            </div>
          </div>

          {/* Right Column - Image & Call to Action */}
          <div className="w-full lg:w-1/2 px-4">
            <div className="relative group">
              {data && data.image ? (
                <img
                  src={` https://joyaproprties.onrender.com${data.image}`}
                  alt="Presentation"
                  className="rounded-lg shadow-lg transition-transform transform group-hover:scale-105 w-full"
                  style={{ maxHeight: "855px" }}
                />
              ) : (
                <div className="rounded-lg bg-gray-700 w-full h-[855px]"></div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Presentation;