import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./agentSlider.css";

function AgentSlider() {
  const agentsData = [
    {
      image: "https://i.imgur.com/MNCx91k.png",
      name: "maryam island",
      description:
        "Maryam Island is one of the most important investment projects of Egal Hills. Eagle Hills is a private real estate investment and development company based in Abu Dhabi, United Arab Emirates. It owns projects in 11 cities across the UAE. Offering waterfront homes and apartments, joya hotels and mixed-use developments in Sharjah and Fujairah",
    },
    // باقي البيانات...
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-16 mt-10 agent-slider">
      <div className="text-center">
        <p className="text-[#f0ede6] font-header mb-3 text-lg md:text-xl lg:text-2xl">
          STRONG NETWORK IN DUBAI & UAE
        </p>
        <h1 className="text-3xl md:text-5xl text-[#f1f0ec] font-header mb-8">
          OUR AGENTS
        </h1>
        <p className="font-body mx-4 md:mx-16 lg:mx-44 md:text-lg lg:text-xl text-[#f4f3ef]">
          Valorem has established strong alliances with leading developers and brands in Dubai and the United Arab Emirates, enabling us to offer our clients the finest options available in the market.
        </p>
        <div className="mx-10 md:mx-14 mt-3 py-8 gap-x-2" dir="ltr">
          <Slider {...settings}>
            {agentsData.map((agent, index) => (
              <div key={index} className="slick-slide">
                <div className="flex flex-col justify-center items-center bg-[#111612] shadow-lg rounded-lg p-4 transition-transform transform hover:scale-105">
                  <div className="bg-[#f0ede6] w-fit mx-auto rounded-2xl">
                    <img
                      src={agent.image}
                      alt={`Agent Logo ${index + 1}`}
                      className="mx-auto w-72 h-40 object-contain rounded-xl border-2 border-[#698f8c]"
                    />
                  </div>
                  <p className="text-base md:text-lg text-[#f1f0ec] font-header font-semibold uppercase mt-3">
                    {agent.name}
                  </p>
                  <p className="text-sm text-[#f0ede6] font-body text-center px-4">
                    {agent.description}
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default AgentSlider;
