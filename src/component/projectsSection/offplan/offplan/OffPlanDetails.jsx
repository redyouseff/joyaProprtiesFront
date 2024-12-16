import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaWhatsapp, FaBed, FaBath, FaRulerCombined, FaCar, FaCity, FaShip, FaPlane, FaGlobe } from "react-icons/fa";
import MortgageCalculator from "../../../services/MortageCalculator";
import icon1 from "../../../../images/icons/DWC.svg"
import icon2 from "../../../../images/icons/marina.svg"
import icon3 from  "../../../../images/icons/DXB.svg"
import icon4 from "../../../../images/icons/Downtown.svg"

import icon5 from "../../../../images/icons/new/Wallet.svg"
import icon6 from "../../../../images/icons/Booking fees.svg"
import icon7 from "../../../../images/icons/handover.svg"
import icon8 from "../../../../images/icons/Beds.svg"


 

import VisualImage from "./VisualImage";
import axios from "axios";
import { useParams } from "react-router-dom";


const OffPlanDetails = () => {
  const [offplan, setoffplan] = useState([]); // State to store blogs
  const [loading, setLoading] = useState(true); // State to manage loading status
  const [allofplan,setallofplan] =useState([])
  const {id}=useParams();

  // Fetch blogs from API
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(`https://joyaproprties.onrender.com/api/off-plan/${id}`);
        setoffplan(response.data); // Update blogs state with fetched data
      } catch (error) {
        console.error("Error fetching the blogs:", error);
      } finally {
        setLoading(false); // Set loading to false
      }
    };

    fetchBlogs();
  }, []); 
  console.log(offplan)



  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(`https://joyaproprties.onrender.com/api/off-plan`);
        setallofplan(response.data); // Update blogs state with fetched data
      } catch (error) {
        console.error("Error fetching the blogs:", error);
      } finally {
        setLoading(false); // Set loading to false
      }
    };

    fetchBlogs();
  }, []); 

 
   
   
const proximity= [
    { icon: icon4, text: `${offplan?.ExpoCity} Minutes to Expo City` },
    { icon: icon2 , text: `${offplan?.MarinaWalk} Minutes to Marina Walk` },
    { icon: icon3, text: `${offplan?.DubaiInternationalAirport} Minutes to Dubai International Airport` },
    { icon:icon1, text: `${offplan?.DowntownDubai} Minutes to Downtown Dubai` }
  ]

 


  useEffect(() => {
    const fetchAllProjects = async () => {
      try {
        const response = await axios.get(
          "https://joyaproprties.onrender.com/api/off-plan"
        );
        setallofplan(response.data);
      } catch (error) {
        console.error("Error fetching all projects:", error);
      }
    };

    fetchAllProjects();
  }, []);

 
  console.log(allofplan)

  return (
    <>

{/* Slider Page */}
<div data-aos="fade-up">
  <div className="relative w-full h-screen visual-image-wrap">
    {/* Animated Background image for desktop */}
    <motion.div
      initial={{ opacity: 0, scale: 1.1 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.5, delay: 0.2 }}
      className="hidden sm:block absolute inset-0 bg-cover bg-center"
      style={{
        backgroundImage: `url(https://joyaproprties.onrender.com${offplan?.imgSrcs?.[0] || "/default-desktop-image.jpg"})`,
      }}
    ></motion.div>

    {/* Animated Background image for mobile */}
    <motion.div
      initial={{ opacity: 0, scale: 1.1 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.5, delay: 0.2 }}
      className="block sm:hidden absolute inset-0 bg-cover bg-center"
      style={{
        backgroundImage: `url(${offplan?.imgSrcs?.[0] || "/default-mobile-image.jpg"})`,
      }}
    ></motion.div>

    {/* Gradients on top and bottom */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, delay: 0.5 }}
      className="absolute inset-0 bg-gradient-to-t w-full h-1/2 from-transparent to-[#111612] z-10"
    ></motion.div>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, delay: 0.5 }}
      className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-b from-transparent to-[#111612] z-10"
    ></motion.div>

    {/* Scroll indicator */}
    {/* <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, delay: 1 }}
      className="absolute bottom-[-9px] sm:bottom-6 left-1/2 transform -translate-x-1/2 z-20"
    >
      <div className="w-6 h-12 flex flex-col items-center">
        <div className="w-[1px] h-8 bg-[#faf8f7] animate-bounce"></div>
      </div>
    </motion.div> */}

    {/* Info section */}
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5, delay: 1.2 }}
      className="absolute bottom-0 left-0 w-full px-4 sm:px-10 z-30 text-[#faf8f7]"
    >
      <h2 className="text-2xl sm:text-4xl font-light uppercase fade-left transition-opacity duration-500">
        {offplan?.title || "Default Title"}
      </h2>
    </motion.div>

    {/* Search tabs */}
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5, delay: 1.4 }}
      className="absolute bottom-0 right-0 px-4 sm:px-10 z-30 text-[#faf8f7]"
    >
      {/* Hide these links on mobile view */}
      <div className="hidden sm:flex space-x-4">
        <motion.a
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          whileHover={{ scale: 1.05, textDecoration: "underline" }}
          transition={{ duration: 0.3 }}
          href="/Projects/Features"
          className="hover:underline text-sm sm:text-base"
        >
          Feature
        </motion.a>
        <span>|</span> {/* Horizontal line */}
        <motion.a
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          whileHover={{ scale: 1.05, textDecoration: "underline" }}
          transition={{ duration: 0.3 }}
          href="/Projects/Off-Plan"
          className="hover:underline text-sm sm:text-base"
        >
          Off Plan
        </motion.a>
      </div>
    </motion.div>
  </div>
</div>



      
     <div className="bg-[#111612] text-[#faf8f7]">
{/* Icons Section */}
<div className="py-10 mt-10">
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">

      <div className="flex flex-col items-center space-y-2">
        <img
          src={icon5}
          alt="Starting Price Icon"
          className="w-16 h-16 mb-2" // Increased Icon size
        />
        <div>
          <p className="text-lg font-semibold">AED {offplan.StartingPrice}</p>
          <span className="text-sm text-[#d3d3d3]">Starting Price</span>
        </div>
      </div>

      <div className="flex flex-col items-center space-y-2">
        <img
          src={icon7}
          alt="Buy Property Icon"
          className="w-16 h-16 mb-2" // Increased Icon size
        />
        <div>
          <p className="text-lg font-semibold">{offplan.HandoverDate}</p>
          <span className="text-sm text-[#d3d3d3]">Handover Date {offplan.HandoverDate}</span>
        </div>
      </div>

      <div className="flex flex-col items-center space-y-2">
        <img
          src={icon6}
          alt="Special Conditions Icon"
          className="w-16 h-16 mb-2" // Increased Icon size
        />
        <div>
          <p className="text-lg font-semibold">{offplan.Bookingfees}%</p>
          <span className="text-sm text-[#d3d3d3]">Booking fees {offplan.Bookingfees}</span>
        </div>
      </div>

      <div className="flex flex-col items-center space-y-2">
        <img
          src={icon8}
          alt="Another Property Icon"
          className="w-16 h-16 mb-2" // Increased Icon size
        />
        <div>
          <p className="text-lg font-semibold">{offplan.Bedrooms?.[0]} | {offplan.Bedrooms?.[1]} | {offplan.Bedrooms?.[2]} | {offplan.Bedrooms?.[3]}</p>
          <span className="text-sm text-[#d3d3d3]">Bedrooms</span>
        </div>
      </div>

    </div>
  </div>
</div>




      {/* About This Property Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="py-20"
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
                {offplan?.imgSrcs?.slice(0, 2).map((src, index) => (
                  <img
                    key={index}
                    src={
                      src
                        ? `https://joyaproprties.onrender.com${src}`
                        : "/default-image.jpg"
                    }
                    alt={`Property Image ${index + 1}`}
                    className="w-full h-[250px] object-cover rounded-lg"
                  />
                ))}
              </div>
              <img
                src={
                  offplan.imgSrcs
                    ? `https://joyaproprties.onrender.com${offplan.imgSrcs?.[2]}`
                    : "/default-image.jpg"
                }
                alt="Property Image 3"
                className="w-full h-[300px] object-cover rounded-lg"
              />
            </motion.div>

            {/* Details Section */}
            <motion.div
              initial={{ x: 150, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="w-full space-y-6"
            >
              <h2 className="text-4xl font-bold mb-10 mt-10">About This Property</h2>
              <p className="text-[#d3d3d3] leading-relaxed mb-10">{offplan?.description}</p>
              <p className="text-[#d3d3d3] leading-relaxed mt-10 pt-10">{offplan?.details}</p>
            </motion.div>
          </div>
        </div>
      </motion.div>


<div className="py-12">
  <div className="container mx-auto px-4">
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            staggerChildren: 0.2, // Stagger delay for children
          },
        },
      }}
      className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
    >
      {proximity.map((item, index) => {
        const [time, ...place] = item.text.split(" to "); // Separate time from the place
        return (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            className="flex flex-col items-center"
          >
            {/* Render icon with applied color */}
            <img
              src={item.icon}
              alt="Proximity Icon"
              className="w-16 h-16 mb-6" // Increased size here
              style={{ color: "#6b7280", fill: "#6b7280" }} // Apply color here
            />
            <p className="text-base font-semibold text-[#faf8f7]"> {/* Increased text size */}
              {time} <br />
            </p>
            <p className="text-sm text-[#d3d3d3]">{place.join(" ")}</p> {/* Adjusted text size */}
          </motion.div>
        );
      })}
    </motion.div>
  </div>
</div>

{/* Payment Plan Section */}
<div className="py-12">
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: false, amount: 0.2 }} // Trigger on scroll up/down
    transition={{ duration: 1.5, ease: "easeOut" }} // Smooth animation
    className="container mx-auto px-4 lg:px-16"
  >
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      {/* Description with Title */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="text-[#d3d3d3] text-lg leading-relaxed"
      >
      <h2 className="text-2xl font-extrabold mb-10">Payment Plan</h2>

        <p>{offplan?.PaymentPlan}</p>
      </motion.div>

      {/* Clickable Map */}
      <motion.a
         href={offplan?.location || "#"}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="w-full h-64 md:h-96 rounded-lg overflow-hidden block"
      >
        <iframe
          src={`${offplan.location}`}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          className="rounded-lg"
        ></iframe>
      </motion.a>
    </div>
  </motion.div>
</div>
      
  {/* Other sections of OffPlanDetails */}

      {/* Similar Projects Section */}  
      <div className="bg-[#111612] text-[#faf8f7] py-16">
        <div className="container mx-auto px-4 lg:px-16">
          <h2 className="text-3xl font-bold mb-8">Similar Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {allofplan
              .filter((project) => project._id !== id) // Exclude the current project
              .slice(0, 3) // Limit to 3 similar projects
              .map((project, index) => (
                <motion.div
                  key={project._id}
                  className="bg-[#1c1e1b] rounded-lg shadow-lg overflow-hidden transform transition-all hover:scale-105"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{
                    duration: 1.5,
                    ease: "easeOut",
                    delay: index * 0.3,
                  }}
                >
                  <a href={`/projects/off-plan2/${project._id}`}>
                    <img
                      src={
                        project.imgSrcs?.[0]
                          ? `https://joyaproprties.onrender.com${project.imgSrcs[0]}`
                          : "/default-image.jpg"
                      }
                      alt={project.title || "Project Image"}
                      className="w-full h-64 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="text-lg font-semibold">
                        {project.title || "Untitled Project"}
                      </h3>
                      <p className="text-sm text-[#d3d3d3] mt-2">
                        {project.description
                          ? project.description.substring(0, 100) + "..."
                          : "No description available."}
                      </p>
                    </div>
                  </a>
                </motion.div>
              ))}
          </div>
        </div>
      </div>
      



    </div>
    </>
   
  );
};

export default OffPlanDetails;