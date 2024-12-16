import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Autoplay } from "swiper/modules";

const PropertySlider = () => {
  const [properties, setProperties] = useState([]);

  // useEffect(() => {
  //   async function fetchProperties() {
  //     const data = await fetch(
  //       "https://joya-backend-deploy-test.vercel.app/property/get-all-properties"
  //     );
  //     const res = await data.json();
  //     setProperties(res.properties);
  //   }
  //   fetchProperties();
  // }, []);

  return (
    <div className="w-full py-10 px-1 md:pl-[60px]">
      <Swiper
        spaceBetween={40}
        slidesPerView={2.25}
        loop={true}
        centeredSlides={false}
        autoplay={{
          delay: 5000,
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
        {properties.map((property) => (
          <SwiperSlide
            key={property._id}
            className="relative overflow-hidden cursor-pointer"
          >
            <a
              href={`/Projects/Features/${property.slug}__${property._id}`}
              className="absolute inset-0 z-10"
            ></a>
            <div>
              <img
                width={1000}
                height={667}
                src={property.card_image}
                alt={property.title}
                className="w-full h-[530px] object-cover grayscale-[0.5] transition-all duration-300 hover:grayscale-0 rounded-2xl"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#111612] to-transparent z-10"></div>
            <div className="absolute -bottom-3 left-0 p-6 text-[#faf8f7] z-20 transition-all duration-300 translate-y-10 hover:translate-y-0 w-full">
              <h2 className="text-2xl font-bold">{property.title}</h2>
              <div className="flex justify-between items-center w-full">
                <h3 className="text-lg">{property.location}</h3>
                <p className="text-md">
                  {property.price > 0
                    ? "AED " + property.price.toLocaleString()
                    : "Requested Price"}
                </p>
              </div>
              <a
                href={`/Projects/Features/${property.slug}__${property._id}`}
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

export default PropertySlider;
