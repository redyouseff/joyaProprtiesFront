import React from "react";
import image1 from "../../images/sliders/Profile Pic 1.png";
import image2 from "../../images/sliders/Profile Pic 2.png";

const Founder = () => {
  return (
    <>
      <div className="bg-[#041d1a] py-10">
        <div>
          <h1 className="text-3xl md:text-5xl text-[#f0ede6] font-bold text-center mb-5 lg:mb-12">
            JOYA Real Estate Brokers Founder and Owner
          </h1>
          <p className="text-[#f1f0ec] font-bold text-center mb-16 text-lg md:text-xl lg:text-2xl w-3/4 mx-auto">
            Success isn’t just about what you accomplish in your life. It’s
            about what you inspire others to do.
            <br />
            <br />
            Success is the progression of a worthy idea; it’s about who you
            become as a person.
          </p>

          {/* Nabeel Hammudeh Section */}
          <div className="flex flex-col md:flex-row md:space-x-5 md:mx-10 lg:mx-60 mx-2 justify-start items-start mt-6 mb-12"> {/* Added margin-bottom */}
            {/* Founder Image */}
            <div className="w-full md:w-[350px] overflow-hidden rounded-lg shadow-lg group">
              <img
                src={image1}
                alt="Joya Home"
                className="w-[200px] h-[200px] object-cover rounded-full"
              />
            </div>
            {/* Founder Info */}
            <div className="flex flex-col justify-start items-start space-y-5 w-full">
              <p className="md:text-2xl text-lg text-[#f0ede6] font-bold uppercase">
                Nabeel Hammudeh
              </p>
              <p className="text-base md:text-lg text-[#f1f0ec] uppercase">
                Managing Director
              </p>
              <div className="text-[#f1f0ec] whitespace-pre-wrap font-serif text-sm leading-relaxed">
                Nabeel Hammudeh is the managing director of a Joya Properties
                real estate agency that focuses on offering personalized and
                bespoke real estate solutions. Under his leadership, the agency
                is dedicated to empowering clients with financial freedom and
                delivering exceptional service in the Joya property market.
                Rabie leads with a strong commitment to integrity, excellence,
                and innovation, ensuring long-term relationships with clients
                and partners. His vision is to establish the agency as a
                globally recognized player in the real estate industry, known
                for trust, transparency, and success.
              </div>
            </div>
          </div>

          {/* Mohammad Rabie Section */}
          <div className="flex flex-col md:flex-row md:space-x-5 md:mx-10 lg:mx-60 mx-2 justify-start items-start">
            {/* Founder Image */}
            <div className="w-full md:w-[350px] overflow-hidden rounded-lg shadow-lg group">
              <img
                src={image2}
                alt="Joya Home"
                className="w-[200px] h-[200px] object-cover rounded-full"
              />
            </div>
            {/* Founder Info */}
            <div className="flex flex-col justify-start items-start space-y-5 w-full">
              <p className="md:text-2xl text-lg text-[#f0ede6] font-bold uppercase">
                Mohammad Rabie
              </p>
              <p className="text-base md:text-lg text-[#f1f0ec] uppercase">
                Chief Executive Officer
              </p>
              <div className="text-[#f1f0ec] whitespace-pre-wrap font-serif text-sm leading-relaxed">
                Mohammad Rabie is the CEO of a Joya Properties agency that
                focuses on offering personalized and bespoke real estate
                solutions. Under his leadership, the agency is dedicated to
                empowering clients with financial freedom and delivering
                exceptional service in the Joya property market. Rabie leads
                with a strong commitment to integrity, excellence, and
                innovation, ensuring long-term relationships with clients and
                partners. His vision is to establish the agency as a globally
                recognized player in the real estate industry, known for trust,
                transparency, and success.
              </div>
            </div>
          </div>

          <hr className="w-3/4 mx-auto mt-10 border-[#354948]" />
        </div>
      </div>
    </>
  );
};

export default Founder;
