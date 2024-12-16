import React, { useEffect, useState } from "react";
import axios from "axios";

const OurValues = () => {
  // State to store the fetched values
  const [values, setValues] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch data from the API on component mount
  useEffect(() => {
    const fetchValues = async () => {
      try {
        // Replace the URL with your actual API endpoint
        const response = await axios.get("https://joyaproprties.onrender.com/api/values");
        setValues(response.data);
        setLoading(false);
      } catch (err) {
       
        setLoading(false);
      }
    };

    fetchValues();
  }, []);

  if (loading) {
    return <div className="text-center text-[#a0b3b1]">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-[#ff0000]">{error}</div>;
  }

  return (
    <div className="bg-[#041d1a] py-16">
      {/* Header */}
      <div className="text-center mb-14">
        <p className="text-[#a0b3b1] font-bold mb-3 text-lg md:text-xl lg:text-2xl">
          SETTING NEW INDUSTRY STANDARDS
        </p>
        <h1 className="text-4xl md:text-5xl text-[#f1f0ec] font-bold mb-10">
          OUR VALUES
        </h1>
      </div>

      {/* Card-like Layout */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 px-6">
        {values.map((value, index) => (
          <div
            key={index}
            className="bg-[#111612] border border-[#354948] p-8 rounded-md shadow-md hover:shadow-lg transition-all duration-300 ease-in-out text-center group"
          >
            <h2 className="text-xl md:text-2xl text-[#f1f0ec] font-bold mb-4 uppercase group-hover:scale-105 transition-transform duration-300">
              {value.title}
            </h2>
            <p className="text-[#a2a39b] text-base md:text-lg group-hover:opacity-80 group-hover:translate-y-1 transition-all duration-300">
              {value.content}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurValues;
