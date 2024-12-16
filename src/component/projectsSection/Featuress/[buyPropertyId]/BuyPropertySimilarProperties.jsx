import React from "react";
import PropertiesOffPlan from "../../PropertiesOffPlan";

function BuyPropertySimilarProperties() {
  return (
    <div>
      {/* Title */}
      <div className="w-full">
        <div className="presentation">
          <div className="left fade-right" data-scroll data-scroll-repeat>
            <h2 className="text-lg md:text-xl font-thin text-[#faf8f7] uppercase mb-0 px-4">
              <span>Similar properties</span>
            </h2>
          </div>
        </div>
      </div>
      <div className="mt-[60px] lg:-ml-[60px]">
        <PropertiesOffPlan />
      </div>
    </div>
  );
}

export default BuyPropertySimilarProperties;
