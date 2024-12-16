import React, { useState, useEffect } from "react";
import axios from "axios";

const KeyStats = () => {
  const [stats, setStats] = useState([]); // State to hold the fetched data
  const [loading, setLoading] = useState(true); // State to track loading status

  const baseUrl = "https://joyaproprties.onrender.com/api/keystats"; // Your API URL

  // Fetch the stats data from the API on component mount
  useEffect(() => {
    const fetchKeyStats = async () => {
      try {
        const response = await axios.get(baseUrl);
        setStats(response.data); // Set the fetched data to the state
      } catch (error) {
        console.error("Error fetching stats:", error);
      } finally {
        setLoading(false); // Set loading to false after data is fetched
      }
    };

    fetchKeyStats();
  }, []);

  // If data is still loading, show a loading message
  if (loading) {
    return (
      <div className="mx-4 md:mx-8 lg:mx-24 my-14 text-center">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="mx-4 md:mx-8 lg:mx-24 my-14">
      <div className="flex flex-col md:flex-row justify-between items-center">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="flex flex-col items-center my-4 md:my-0 md:mx-4"
          >
            <h1 className="text-4xl md:text-3xl lg:text-6xl font-bold text-[#f0ede6] pb-2 md:pb-4">
              {stat.value}
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl font-serif text-[#f1f0ec]">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KeyStats;
