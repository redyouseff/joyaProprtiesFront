import React from "react";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../../axios"; // Axios instance

const ServiceCardsSection = () => {
  // Fetch services using React Query
  const { data: services = [], isLoading, isError, error } = useQuery({
    queryKey: ["services"],
    queryFn: async () => {
      const response = await axiosInstance.get("/services"); // Replace with your endpoint
      return response.data;
    },
  });

  const cardVariants = {
    hover: {
      scale: 1.1, // Makes the card grow larger when hovered
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };

  const iconVariants = {
    hover: {
      rotate: 45, // Rotates the icon when hovered
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <div className="landing-card-wrapper py-12 bg-[#111612]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <motion.div
              key={service._id} // Use _id as the key for better React performance
              className="card-item group"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              whileHover="hover"
              variants={cardVariants} // Applies the scaling effect to the card
            >
              <div className="icon-section flex flex-col justify-center items-center bg-[#1b1f1d] h-[300px]  transition-transform transform duration-500">
                {/* Image Section */}
                <motion.div
                  className="w-24 h-24  flex items-center justify-center  overflow-hidden"
                  variants={iconVariants} // Rotate only the hovered card’s image
                >
                  <img
                    src={`https://joyaproprties.onrender.com${service.image}`} // Use the full image URL
                    alt={service.title}
                    className="w-full h-full object-contain"
                  />
                </motion.div>
                {/* Service Title */}
                <h3 className="text-lg mt-6 text-center text-[#faf8f7] font-semibold group-hover:text-[#3d6a64] transition-colors duration-300">
                  {service.title}
                </h3>
                {/* Service Paragraph */}
                <p className="mt-3 text-sm text-center text-[#a2a39b] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {service.paragraph}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceCardsSection;
