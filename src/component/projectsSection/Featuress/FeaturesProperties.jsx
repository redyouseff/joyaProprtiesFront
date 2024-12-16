import React from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt } from "react-icons/fa";

const FeaturesProperties = ({ featureProperties }) => {
  return (
    <div className="properties page pt-10 pb-20 bg-[#111612] text-[#faf8f7]">
      <div className="container mx-auto px-4 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featureProperties.map((property) => (
            <motion.div
              key={property._id}
              className="property-item relative rounded-2xl overflow-hidden shadow-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              {/* Property Image */}
              <motion.div
                className="image relative"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
              >
                <img
                  src={property.card_image}
                  alt={property.title}
                  className="w-full h-[350px] md:h-[580px] object-cover rounded-2xl"
                />
              </motion.div>

              {/* Property Info */}
              <motion.div
                className="property-info absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black to-transparent text-white z-10 transition-all duration-300 ease-in-out"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-2xl font-light">{property.title}</h2>
                  <span className="text-sm font-light text-gray-300">
                    {property.price > 0 ? `AED ${property.price.toLocaleString()}` : "Request Price"}
                  </span>
                </div>
                <div className="flex items-center text-sm text-gray-300">
                  <FaMapMarkerAlt className="mr-2" />
                  <span>{property.location}</span>
                </div>
                <div className="mt-6">
                  <a
                    href={`Features/${property.slug}__${property._id}`}
                    className="inline-block px-4 py-2 bg-[#111612] hover:bg-[#404740] transition-colors duration-300 rounded-lg font-semibold text-white"
                  >
                    Find out more
                  </a>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesProperties;
