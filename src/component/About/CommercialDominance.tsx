import React from "react";

const CommercialDominance = () => {
  return (
    <div className="grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-2 w-full bg-[#041d1a] text-[#f1f0ec]">
      <div className="flex flex-col md:order-2 lg:order-2 py-6 md:py-0 lg:py-0">
        <div className="mx-4 md:mx-6 lg:mx-20 my-auto">
          <div className="mb-4 lg:mb-12">
            <h1 className="text-3xl lg:text-6xl font-bold text-[#f0ede6]">
              Commercial Dominance
            </h1>
          </div>
          <p className="text-base lg:text-lg font-serif leading-relaxed">
            Joya boasts one of the largest commercial teams in Dubai,
            reinforcing our position as a key player in the real estate market.
            Our comprehensive approach extends beyond traditional real estate
            services; we are a one-stop-shop with in-house property management
            and maintenance departments. This ensures that our clients
            experience a holistic and streamlined real estate journey with Joya.
          </p>
        </div>
      </div>

      <div>
        <img
          src="/about us/WhatsApp Image 2024-11-05 at 13.35.35_6f1ca8b5.jpg"
          alt="Business Success"
          className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
        />
      </div>
    </div>
  );
};

export default CommercialDominance;
