import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import HeroAbout from "./HeroAbout.tsx";
import KeyStats from "./KeyState.tsx";
import Founder from "./Founder.tsx";
import WhyJoya from "./WhyJora.tsx";
import OurVision from "./OurVision.tsx";
import OurMission from "./OurMision.tsx";
import PeopleApproach from "./PeopleApproach.tsx";
import EducationTechnology from "./EducationTechnology.tsx";
import CommercialDominance from "./CommercialDominance.tsx";
import OurValues from "./OurValues.tsx";
import AgentSlider from "../Home/AgentSlider.jsx";
import TeamSlider from "../Home/TeamSlider.jsx";
import axios from "axios";
import { CodeSandboxLogoIcon } from "@radix-ui/react-icons";


function AboutPage() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
      once: false,
    });

    const handleScroll = () => {
      AOS.refresh(); // This refreshes animations on scroll up/down
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const [image,setimage]=useState();

  useEffect(() => {
    const fetchFeatures = async () => {
      try {
        const response = await axios.get("https://joyaproprties.onrender.com/api/hero-sections/675d45d8f80100a8efe8dda8");

        // Check if response.data.data is an array
      
          setimage(response?.data?.image);
     
          
    
      } catch (error) {
        console.error("Error fetching features:", error);
      } finally {
       
      }
    };

    fetchFeatures();
  }, []);
  console.log(image)


  return (
    <div className="bg-[#111612] text-white pt-28 overflow-x-hidden">
      {/* Hero About  */}
      <div data-aos="fade-up">
        <HeroAbout />
      </div>

      {/* Key Stats Section */}
      <div data-aos="fade-left">
        <KeyStats />
      </div>
      <hr className="w-3/4 mx-auto mt-10 border-[#354948]" />

      {/* Founder Section */}
      <div data-aos="fade-up">
      <TeamSlider />
      </div>

      {/* Why Joya Section */}
      <div data-aos="fade-right">
        <WhyJoya />
      </div>

      {/* Our Vision Section */}
      <div data-aos="fade-up" data-aos-delay="100">
        <OurVision />
      </div>

      {/* Our Mission Section */}
      <div data-aos="fade-down" data-aos-delay="200">
        <OurMission />
      </div>
{/* 
      People-Centric Approach Section
      <div data-aos="fade-left" data-aos-delay="100">
        <PeopleApproach />
      </div> */}

      {/* Education and Technology Prowess Section */}
      {/* <div data-aos="fade-up">
        <EducationTechnology />
      </div> */}

      {/* Commercial Dominance Section */}
      {/* <div data-aos="fade-right">
        <CommercialDominance />
        <hr className="w-3/4 mx-auto mt-10 border-[#354948]" />
      </div> */}

      
      <div data-aos="fade-up">
        <OurValues />
      </div>

      {/* Our Agents Section */}
      
      <div
        className="w-full bg-no-repeat bg-cover bg-fixed min-h-[400px] md:min-h-[550px]"
        style={{
          backgroundImage: `url('https://joyaproprties.onrender.com${image || "/default-image.jpg"}')`,
        }}
      ></div>

      <div data-aos="fade-left">
        <AgentSlider />
      </div>

      {/* Footer Background Image */}
    </div>
  );
}

export default AboutPage;