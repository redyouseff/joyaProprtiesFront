import React from "react";

const PeopleApproach = () => {
  return (
    <div className="grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-2 w-full">
      {/* Text Section */}
      <div className="flex flex-col bg-[#041d1a] md:order-2 lg:order-2 py-3 md:py-0 lg:py-0">
        <div className="mx-2 md:mx-4 md:my-auto lg:mx-20 lg:my-auto">
          <div className="mb-2 lg:mb-10">
            <h1 className="text-2xl lg:text-5xl text-[#f0ede6] font-bold">
              People-Centric Approach
            </h1>
          </div>
          <p className="text-sm lg:text-lg font-serif text-[#f1f0ec] whitespace-pre-wrap leading-relaxed">
            Jora's education and technology prowess is evident in its commitment
            to leveraging cutting-edge tools and frameworks for optimal website
            development. Utilizing Node.js for backend and React.js for
            frontend, Jora ensures a robust, responsive platform that enhances
            user experience across devices. The integration of innovative
            features, such as WhatsApp connectivity and social media pages,
            reflects Jora's dedication to modern communication methods.
            Additionally, the focus on continuous innovation and data
            utilization positions Jora at the forefront of the Joya real
            estate market. Through thoughtful design and technology integration,
            Jora empowers clients and team members to navigate the real estate
            landscape effectively.
          </p>
        </div>
      </div>

      {/* Image Section */}
      <div>
        <img
          src="/about us/WhatsApp Image 2024-11-05 at 04.27.56_5fca8d1e.jpg"
          alt="People-Centric Approach"
          className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
        />
      </div>
    </div>
  );
};

export default PeopleApproach;
