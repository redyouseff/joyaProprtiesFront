import React from "react";
import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../../axios"; // Assuming axios instance is defined elsewhere for API requests

const Services = () => {
  // Fetch services using React Query
  const { data: services = [], isLoading, isError, error } = useQuery({
    queryKey: ['services'],
    queryFn: async () => {
      const response = await axiosInstance.get("/services"); // Replace with your API endpoint
      return response.data;
    },
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;
  const baseURL = "https://joyaproprties.onrender.com/api";
  return (
    <section className="py-16 text-[#EFECE6] mt-10">
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="text-5xl font-extrabold text-center mb-12 text-[#f0ede6]">
          Our Signature Services
        </h2>

        {/* Grid for Main Services */}
        <div className="flex flex-wrap justify-center items-center gap-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-10 bg-[#1a1f21] rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 text-center relative group w-72 h-auto min-h-[300px]"
            >
              {/* Icon */}
              <div className="w-20 h-20 mx-auto bg-[#3d6a64] rounded-full flex items-center justify-center mb-8 group-hover:bg-opacity-90 transition duration-300">
                {/* Use a fallback for images if needed */}
                <img
                  src={`${baseURL}${service.image}`} // Use the full image URL
                  alt={service.title}
                  className="w-12 h-12"
                />
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-[#faf8f7]">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-[#a2a39b] mt-4">{service.paragraph}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
