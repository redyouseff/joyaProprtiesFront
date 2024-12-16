import React from "react";

const ConnectWithUs = () => {
  return (
    <div className="block cta-contacts py-40  text-[#faf8f7]">
      <div className="container mx-auto">
        <div className="flex justify-center">
          <div className="lg:w-10/12 md:w-full">
            <div className="item text-center">
              <h2 className="text-5xl leading-none font-thin mb-6">
                Connect with us on{" "}
                <span className="text-[#a2a39b]">Instagram</span>
              </h2>
              <p className="text-lg mb-5">
                To view our exclusive high-end properties, connect with us on
                social media and follow our journey.
              </p>
              <a
                href="https://www.instagram.com/Joyaproperties/"
                className="btn btn-primary bg-none  text-white px-6 py-3 rounded-lg hover:bg-[#404740] transition-colors border border-[#404740]"
              >
                Follow us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectWithUs;
