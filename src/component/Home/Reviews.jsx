import React, { useEffect, useState } from "react";
import { Star } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";
import './reviews.css';
import axios from "axios";

// const reviews = [
//   {
//     name: "Mark Baxter",
//     initials: "MB",
//     rating: 5,
//     review:
//       "Our estate agent was excellent from start to finish. So helpful and attentive. His name was Nabeel, and we couldn’t do enough for him to show how grateful we are. He is an asset to his company.",
//   },
//   {
//     name: "Karine Ugarte",
//     initials: "KU",
//     rating: 5,
//     review: "Best service ever with Nabilios!",
//   },
//   {
//     name: "Daria Derbasova",
//     initials: "DD",
//     rating: 5,
//     review:
//       "Nabeel Hammudeh was our agent for 2 deals; everything went perfectly smooth! Always very professional, great follow-ups, attention to detail and excellent relationship maintenance with the clients and seller. I would recommend it to my friends.",
//   },
//   {
//     name: "Sena Yesil",
//     initials: "SY",
//     rating: 5,
//     review:
//       "I got great support from Nabeel when I was looking for an apartment to buy. He has played the role of an advisor instead of a seller. He has followed up constantly and shared his in-depth expertise in the real estate market.",
//   },
//   {
//     name: "Neira Milavica",
//     initials: "NM",
//     rating: 5,
//     review:
//       "Very reliable and efficient service. We had the luck to get Mr. Nabeel as our agent. 24/7 availability for all questions and information. Well organized process and without any unnecessary steps. Highly recommend.",
//   },
//   {
//     name: "Stephanie Haakman",
//     initials: "SH",
//     rating: 5,
//     review:
//       "Since I arrived in Dubai, I’ve visited many apartments with Nabilios. He went above and beyond to find options that I would like. He provided valuable feedback on each apartment we saw (ROI, rental prices, etc.).",
//   },
//   {
//     name: "Amany Mohey",
//     initials: "AM",
//     rating: 5,
//     review:
//       "My experience in dealing with fäm was through the broker Mr. Nabeel, who was extremely professional and credible without a doubt. I genuinely thank him for this outstanding work.",
//   },
//   {
//     name: "Amancio Torres",
//     initials: "AT",
//     rating: 5,
//     review: "Nabeel is a great professional and a person who cares.",
//   },
//   {
//     name: "Seema Sekharan",
//     initials: "SS",
//     rating: 5,
//     review:
//       "Thanks a lot, Nabeel, for all help, really appreciate it. Very professional and unbelievable response time. We would love to work with you again in the future.",
//   },
//   {
//     name: "Daniel C.",
//     initials: "DC",
//     rating: 5,
//     review:
//       "Nabeel is one of the best real estate agents that I’ve met. He’s one of the few that are fully transparent, honest, and always helps me at any part of the buying/selling process. Thank you!",
//   },
// ];

function Reviews() {
    const [reviews,setreviews] =useState([]);
    useEffect(() => {
      axios.get('https://joyaproprties.onrender.com/api/testimonial')
        .then(response => {
          setreviews(response.data); 
        })
        .catch(err => {
          setreviews(err.message); // Handle errors
       
        });
    }, []);

    console.log(reviews)
    
  return (
    <section className="py-16 bg-[#111612] text-[#f1f0ec] mt-10">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <h2 className="text-4xl font-extrabold text-center mb-12 text-[#f0ede6]">
          What Our Clients Say
        </h2>

        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          modules={[FreeMode, Pagination]}
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <div className="p-8 bg-[#111612] rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 group">
                {/* Client Initials Avatar */}
                <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-[#3d6a64] flex items-center justify-center text-[#f0ede6] text-3xl font-bold">
                  {review.initials}
                </div>

                {/* Client Name */}
                <h3 className="text-2xl font-bold text-center mb-2 text-[#f0ede6]">
                  {review.nameOfUser}
                </h3>

                {/* Rating */}
                <div className="flex justify-center mb-4">
                  {[...Array(review.rate)].map((_, i) => (
                    <Star
                      key={i}
                      className="text-[#f0ede6]"
                      fill="#f0ede6"
                      size={24}
                    />
                  ))}
                </div>

                {/* Review Text with White Quotes */}
                <p className="text-lg text-center text-[#faf8f7]">
                  <span className="text-white">“</span>
                  {review.comment}
                  <span className="text-white">”</span>
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Reviews;