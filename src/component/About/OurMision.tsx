import React, { useEffect, useState } from "react";
import axios from "axios";

const OurMission = () => {
  const [mission, setMission] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const missionId = "675aa6326ff9292f28bbbb9c"; // Specific ID for fetching mission data

  useEffect(() => {
    const fetchMission = async () => {
      try {
        // Replace this URL with your actual API endpoint for fetching mission by ID
        const response = await axios.get(`https://joyaproprties.onrender.com/api/hero-sections/${missionId}`);
        setMission(response.data);
        setLoading(false);
      } catch (err) {
        setError("Error fetching mission data");
        setLoading(false);
      }
    };

    fetchMission();
  }, [missionId]);

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
              {mission ? mission.title : "Our Mission"}
            </h1>
          </div>
          <p className="text-sm lg:text-lg font-serif text-[#f1f0ec] whitespace-pre-wrap leading-relaxed">
            {mission ? mission.paragraph : "Mission content is loading..."}
          </p>
        </div>
      </div>

      {/* Image Section */}
      <div>
        <img
          src={mission ? `${baseurl}${mission.image}` : ""}
          alt="Mission Image"
          className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
        />
      </div>
    </div>
  );
};

export default OurMission;
