import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaWhatsapp, FaBed, FaBath, FaRulerCombined, FaCar } from "react-icons/fa";
import axios from "axios";
import { useParams } from "react-router-dom";

const FeatureTitleDuplicate = () => {
  const { id } = useParams();
  const [project, setProject] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const response = await axios.get(`https://sleepy-blinnie-beshoynasry-2859766e.koyeb.app/api/feature/${id}`);
        setProject(response.data);
      } catch (error) {
        console.error("Error fetching the project:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [id]);
  console.log(project)

  const highlights = [
    { icon: <FaBed />, text: `${project?.beds} beds` },
    { icon: <FaBath />, text: `${project?.baths} baths` },
    { icon: <FaRulerCombined />, text: `${project?.sq} Sq. ft.` },
    { icon: <FaCar />, text: "5 cars" },
  ];

  return (
    <>
      {/* Hero Section */}
      <motion.div
        className="relative w-full h-screen visual-image-wrap"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        {/* Background image */}
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://sleepy-blinnie-beshoynasry-2859766e.koyeb.app${project.imgSrcs?.[0] || "/default-image.jpg"}')`,
          }}
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        ></motion.div>

        {/* Title Overlay */}
        <div className="absolute bottom-10 left-10 z-20 text-white">
          <h1 className="text-4xl md:text-6xl font-bold">{project.title }</h1>
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t w-full h-full from-[#111612] to-transparent z-10"></div>
      </motion.div>

      {/* Project Details Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="bg-[#111612] text-[#faf8f7] py-20"
      >
        <div className="container mx-auto px-4 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Images Section */}
            <motion.div
              initial={{ x: -150, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="w-full space-y-4"
            >
              <div className="grid grid-cols-2 gap-4">
                {project?.imgSrcs?.slice(0, 2).map((src, index) => (
                   <img
                   key={index}
                   src={`https://sleepy-blinnie-beshoynasry-2859766e.koyeb.app${src}`}
                   alt={`Property Image ${index + 1}`}
                   className="w-full h-[250px] object-cover rounded-lg"
                 />
                ))}
              </div>
              {project.imgSrcs?.[2] && (
               <img
               src={project?.imgSrcs?.[2] 
                   ? `https://sleepy-blinnie-beshoynasry-2859766e.koyeb.app${project.imgSrcs[2]}` 
                   : "/default-image.jpg"}
                 
                 alt="Property Image 3"
                 className="w-full h-[300px] object-cover rounded-lg"
               />
              )}
            </motion.div>

            {/* Details Section */}
            <motion.div
              initial={{ x: 150, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="w-full space-y-6"
            >
              {/* Title, Agent, and Highlights Section */}
              <div className="flex justify-between items-center mb-8 pt-5">
                <div>
                  <h2 className="text-4xl font-bold mb-5">{project.title}</h2>
                  <div className="flex space-x-8 mb-6 mt-5" style={{ paddingTop: 60 }}>
                    {highlights.map((highlight, index) => (
                      <div key={index} className="flex flex-col items-center space-y-3">
                        <div className="text-2xl text-gray-500">{highlight.icon}</div>
                        <span className="text-lg text-gray-500">{highlight.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col items-center">
                <img
                    src={`https://sleepy-blinnie-beshoynasry-2859766e.koyeb.app${project?.agentImage}` || "/default-agent.jpg"}
                    alt={project?.agent?.name || "Agent"}
                    className="w-24 h-24 rounded-full border-4 border-[#404740] mb-2"
                  />
                  <h4 className="text-xl font-semibold text-center mb-2">
                    {project?.agentName || "No Agent Available"}
                  </h4>
                  <div className="flex flex-col items-center space-y-2">
                    {project?.agentPhone && (
                      <a
                        href={`tel:${project?.agentPhone}`}
                        className="flex items-center space-x-2 text-sm font-medium text-gray-500 hover:text-gray-400"
                      >
                        <FaPhoneAlt /> <span>CALL NOW</span>
                      </a>
                    )}
                    {project?.agentWhatsapp && (
                      <a
                        href={project?.agentWhatsapp}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-sm font-medium text-gray-500 hover:text-gray-400"
                      >
                        <FaWhatsapp /> <span>SEND A MESSAGE</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
              {/* Description Section */}
              <div>
                <p className="text-[#d3d3d3] leading-relaxed mb-4">{project.description}</p>
                <p className="text-[#d3d3d3] leading-relaxed">{project.details}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default FeatureTitleDuplicate;
