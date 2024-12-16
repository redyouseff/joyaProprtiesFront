import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import VisualImage from "./VisualImage";
import FeatureTitle from "./OffPlanDetails";


function OffPlan2() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
      once: false,
    });
  }, []);

  return (
    <div className="bg-[#111612] overflow-hidden">
   
  
 
      <div data-aos="fade-up">
        <FeatureTitle></FeatureTitle>
      </div>

    

      <div data-aos="fade-up">
      </div>

      
    </div>
  );
}

export default OffPlan2;
