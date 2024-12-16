import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Autoplay } from "swiper/modules";

const PropertiesOffPlan = () => {
  const properties = [
    {
      name: "Bugatti Residences",
      subtitle: "By Binghatti | Business Bay",
      price: "Starting at AED 19,000,000",
      image: "/List-and-offplan 100x667/1.png",
      link: "/List-and-offplan 100x667/1.png",
    },
    {
      name: "Como Residences",
      subtitle: "By Nakheel on Palm Jumeirah",
      price: "Starting at AED 21,000,000",
      image: "./List-and-offplan 100x667/2.png",
      link: "https://www.joyaproperties.ae/en/item/163-como-residences/",
    },
    {
      name: "Baccarat Residences",
      subtitle: "DIFC",
      price: "Request Price",
      image: "./List-and-offplan 100x667/3.png",
      link: "https://www.joyaproperties.ae/en/item/127-baccarat-residences/",
    },
    {
      name: "Armani Residences",
      subtitle: "By Arada | Palm Jumeirah",
      price: "Request Price",
      image: "./List-and-offplan 100x667/4.png",
      link: "https://www.joyaproperties.ae/en/item/161-armani-residences/",
    },
    {
      name: "Vela Residences",
      subtitle: "By Omniyat | Business Bay",
      price: "Starting at AED 45,000,000",
      image: "./List-and-offplan 100x667/5.png",
      link: "https://www.joyaproperties.ae/en/item/223-vela-residences/",
    },
  ];

  return (
    <div className="w-full py-10 px-1 md:pl-[60px]">
      <Swiper
        spaceBetween={40}
        slidesPerView={2.25}
        loop={true}
        centeredSlides={false}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="properties-slider"
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 1.25,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 1.75,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 2.25,
            spaceBetween: 40,
          },
        }}
      >
        {properties.map((property, index) => (
          <SwiperSlide
            key={index}
            className="relative overflow-hidden cursor-pointer"
          >
            <a href={property.link} className="absolute inset-0 z-10"></a>
            <img
              src={property.image}
              alt={property.name}
              className="w-full h-[530px] object-cover transition-all duration-300 rounded-2xl"
            />
            <div className="absolute w-full inset-0 bg-gradient-to-t from-[#111612] to-transparent z-10"></div>
            <div className="absolute w-full -bottom-3 left-0 p-6 text-[#faf8f7] z-20 transition-all duration-300 translate-y-10 hover:translate-y-0">
              <h2 className="text-2xl font-bold">{property.name}</h2>
              <div className="flex justify-between w-full items-center">
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

export default PropertiesOffPlan;
