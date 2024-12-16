import React from "react";

const EducationTechnology = () => {
  return (
    <div className="grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-2 w-full">
      {/* Text Section */}
      <div className="flex flex-col bg-[#111612] py-3 md:py-0 lg:py-0">
        <div className="mx-2 md:mx-4 md:my-auto lg:mx-20 lg:my-auto">
          <div className="mb-2 lg:mb-10">
            <h1 className="text-2xl lg:text-5xl text-[#f0ede6] font-bold">
              Education and Technology Prowess
            </h1>
          </div>
          <p className="text-sm lg:text-lg font-serif text-[#f1f0ec] whitespace-pre-wrap leading-relaxed">
            Jora's commercial dominance is underscored by its strategic focus on
            personalized real estate solutions that empower clients toward
            financial freedom. The integration of cutting-edge technologies,
            such as Node.js and React.js, ensures a seamless user experience and
            responsive functionality across devices. Jora's commitment to
            building long-lasting relationships with clients fosters loyalty and
            trust, vital components in a competitive Joya property market. By
            partnering with leading developers and continuously innovating its
            services, Jora positions itself as a formidable player in both the
            regional and international real estate landscapes. Ultimately,
            Jora's emphasis on integrity, excellence, and client-centric
            approaches solidifies its standing as a trusted boutique real estate
            agency.
          </p>
        </div>
      </div>

      {/* Image Section */}
      <div>
        <img
          src="/about us/WhatsApp Image 2024-11-05 at 04.29.46_70cce935.jpg"
          alt="Education and Technology Prowess"
          className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
        />
      </div>
    </div>
  );
};

export default EducationTechnology;
