import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { Autoplay } from "swiper/modules";

const PropertiesSlider = () => {
  const properties = [
    {
      id: 1,
      name: "Villa Amaiia",
      subtitle: "Al Barari",
      price: "Request Price",
      imageUrl: "./List-and-offplan 100x667/1.png",
      link: "https://www.joyaproperties.ae/en/item/43-villa-amaiia/",
    },
    {
      id: 2,
      name: "Sea Mirror",
      subtitle: "Jumeirah Bay Island",
      price: "Request Price",
      imageUrl: "./List-and-offplan 100x667/2.png",
      link: "https://www.joyaproperties.ae/en/item/75-sea-mirror-villa/",
    },
    {
      id: 3,
      name: "Golf Course Plot",
      subtitle: "Emirates Hills",
      price: "AED 66,300,000",
      imageUrl: "./List-and-offplan 100x667/3.png",
      link: "https://www.joyaproperties.ae/en/item/317-emirates-hills-plot--golf-facing/",
    },
    {
      id: 4,
      name: "Parkway’s Mansion",
      subtitle: "Dubai Hills",
      price: "AED 47,000,000",
      imageUrl: "./List-and-offplan 100x667/4.png",
      link: "https://www.joyaproperties.ae/en/item/299-parkways-mansion/",
    },
  ];

  return (
    <div className="w-full py-10 pl-[60px]">
      <Swiper
        spaceBetween={40}
        slidesPerView={2.25}
        loop={true}
        centeredSlides={false}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="properties-slider"
      >
        {properties.map((property) => (
          <SwiperSlide
            key={property.id}
            className="relative overflow-hidden cursor-pointer"
          >
            <a href={property.link} className="absolute inset-0 z-10"></a>
            <img
              src={property.imageUrl}
              alt={property.name}
              className="w-full h-[530px] object-cover grayscale transition-all duration-300 rounded-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#111612] to-transparent z-10"></div>
            <div className="absolute w-full -bottom-3 left-0 p-6 text-[#faf8f7] z-20 transition-all duration-300 translate-y-10 hover:translate-y-0">
              <h2 className="text-2xl font-bold">{property.name}</h2>
              <div className="flex justify-between items-center">
                <h3 className="text-lg">{property.subtitle}</h3>
                <p className="text-md">{property.price}</p>
              </div>
              <a
                href={property.link}
                className="inline-block mt-3 px-4 py-2 bg-[#111612] hover:bg-[#404740] transition-colors duration-200 text-sm font-semibold"
              >
                Find out more
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PropertiesSlider;
