import React from "react";

const ServiceTitle = () => {
  return (
    <div className="landing-content-wrapper text-[#f4f3ef] flex justify-center items-center transition-all duration-500 pt-12">
      <div className="animated animate__slideInUp w-full max-w-4xl p-6">
        <div className="container mx-auto">
          <div className="content-section text-center space-y-6">
            <h1 className="heading text-4xl md:text-5xl font-bold text-[#f4f3ef]">
              How can we help?
            </h1>
            <p className="description text-lg md:text-xl leading-relaxed text-[#f0ede6]">
              Wherever you are on your real estate journey, professional support can help steer you in the right direction.
              Select the service you’re looking for and let us guide you through the process.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceTitle;
