import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";

function AgentSlider() {
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

  const [agentsData, setAgentsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAgentsData = async () => {
      try {
        const response = await axios.get(
          "https://joyaproprties.onrender.com/api/partner"
        );
        setAgentsData(response.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching agents data:", err);
        setError("Failed to fetch partner data. Please try again.");
        setLoading(false);
      }
    };

    fetchAgentsData();
  }, []);

  return (
    <div className="py-16 mt-10 agent-slider">
      <div className="text-center">
        <p className="text-[#f0ede6] font-header mb-3 text-sm md:text-base lg:text-lg">
          STRONG NETWORK IN DUBAI & UAE
        </p>
        <h1 className="text-2xl md:text-4xl text-[#f1f0ec] font-header mb-8">
          Our Partners
        </h1>
        <div className="mx-10 md:mx-14 mt-3 py-8 gap-x-2 slick-initialized" dir="ltr">
          <Slider {...settings}>
            {agentsData.map((agent, index) => (
              <div key={index} className="slick-slide">
                <div className="flex flex-col justify-center items-center bg-[#111612] shadow-lg rounded-lg p-4 transition-transform transform hover:scale-105">
                  <div className="bg-[#f0ede6] w-fit mx-auto rounded-2xl">
                    <img
                      src={`https://joyaproprties.onrender.com${agent.image}`}
                      alt={`AgentLogo ${index + 1}`}
                      className="mx-auto w-60 h-36 object-contain rounded-xl border-2 border-[#698f8c]"
                    />
                  </div>
                  <p className="text-xs md:text-sm text-[#f1f0ec] font-header font-semibold uppercase mt-3">
                    {agent.name}
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



