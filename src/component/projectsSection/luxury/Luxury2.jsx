import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import MortgageCalculator from "../../services/MortageCalculator";
import axios from "axios";
import LuxuryTitle from "./LuxuryTitle";

const Luxury2 = () => {
  const [featureProperties, setFeatureProperties] = useState([]); // Ensure state is initialized as an array
  const [loading, setLoading] = useState(true);

  // Fetch data from API
  useEffect(() => {
    const fetchFeatures = async () => {
      try {
        const response = await axios.get("https://joyaproprties.onrender.com/api/laxury");

        // Check if response.data.data is an array
        if (Array.isArray(response.data)) {
          setFeatureProperties(response.data);
        } else {
          console.error("Unexpected response format:", response.data);
        }
      } catch (error) {
        console.error("Error fetching features:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFeatures();
  }, []);
  console.log(featureProperties)

  // Helper function to truncate description to 30 words
  const truncateText = (text, maxWords) => {
    if (!text) return ""; // Handle undefined text
    const words = text.split(" ");
    if (words.length > maxWords) {
      return words.slice(0, maxWords).join(" ") + "...";
    }
    return text;
  };

  return (
    <div className="bg-[#111612] overflow-hidden">
      Title Section */
       <div>
        <LuxuryTitle />
      </div>

      <MortgageCalculator />

      <div className="py-16 bg-[#111612] text-[#faf8f7]">
        <div className="container mx-auto px-4 lg:px-16">
          <h2 className="text-3xl font-bold mb-8">Similar Projects</h2>
          {loading ? (
            <p className="text-center text-white">Loading...</p>
          ) : featureProperties.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {featureProperties.map((property, index) => (
                <motion.div
                  key={property._id || index} // Use a fallback key
                  className="bg-[#1c1e1b] rounded-lg shadow-lg overflow-hidden transform hover:scale-105 hover:shadow-2xl transition-all duration-500"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                >
                  <a href={`/Projects/Features2/${property._id}`}>
                    {/* Image Hover Effect */}
                    <motion.div
                      className="overflow-hidden"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <img
                        src={`https://joyaproprties.onrender.com${property.imgSrcs?.[0]}` || "/default-image.jpg"} // Fallback for missing image
                        alt={property.title}
                        className="w-full h-64 object-cover"
                      />
                    </motion.div>
                    {/* Text Content */}
                    <div className="p-4">
                      <h3 className="text-lg font-semibold">{property.title}</h3>
                      <p className="text-sm text-[#d3d3d3] mt-2">
                        {truncateText(property.description, 30)}
                      </p>
                    </div>
                  </a>
                </motion.div>
              ))}
            </div>
          ) : (
            <p className="text-center text-white">No properties available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Luxury2;
