import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { useQuery } from "@tanstack/react-query";
import { Mail } from "lucide-react";
import { Pagination, Autoplay } from "swiper/modules";
import axiosInstance from "../../axios";
import { FaWhatsapp } from "react-icons/fa";

const fetchTeamMembers = async () => {
  const response = await axiosInstance.get("/team");
  return response.data.teamMembers; // Ensure we return the array directly
};

const TeamSlider = () => {
  const { data: teamMembers, isLoading, error } = useQuery({
    queryKey: ["teamMembers"],
    queryFn: fetchTeamMembers,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading team members</div>;
  const baseURL = "https://joyaproprties.onrender.com";
  return (
    <section className="py-16 bg-black text-[#EFECE6] flex items-center justify-center min-h-screen">
      <div className="container mx-auto px-6 lg:px-12 text-center">
        <div className="mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-[#f1f0ec]">The Team</h2>
          <h3 className="text-[14px] md:text-xl text-[#f0ede6] mt-2">
            With unrivalled experience in UAE market
          </h3>
        </div>
        <Swiper
          spaceBetween={30}
          slidesPerView={3}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            el: ".custom-pagination",
            bulletClass: "swiper-pagination-bullet",
            renderBullet: (index, className) =>
              `<span class="${className}" style="background-color: #ffffff; opacity: 0.7; margin: 0 4px;"></span>`,
          }}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 10 },
            640: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 30 },
          }}
          modules={[Pagination, Autoplay]}
        >
          {teamMembers.map((member) => (
            <SwiperSlide key={member._id}>
              <div className="relative group overflow-hidden rounded-lg bg-[#111111] mx-auto p-4 max-w-xs">
                <img
                  src={`${baseURL}${member.image}`} // Ensure your API includes a full path or prefix the base URL
                  alt={member.name || "Team Member"}
                  className="w-full h-[250px] object-cover object-top rounded-t-lg transition-transform duration-500 group-hover:scale-105 grayscale hover:grayscale-0"
                />
                <div className="p-4 text-center bg-[#333333] rounded-b-lg">
                  <h2 className="text-lg font-semibold text-white">
                    {member.name || "Unnamed"}
                  </h2>
                  <h3 className="text-sm font-light text-[#cccccc]">
                    {member.position || "No Position"}
                  </h3>
                  <p className="text-xs text-[#bfbfbf] mt-2">
                    {member.language || "No Language Info"}
                  </p>
                  <div className="flex justify-center space-x-4 mt-4 text-[#bfbfbf]">
                    {member.email && (
                      <a href={`mailto:${member.email}`} aria-label="Email">
                        <Mail size={18} className="hover:text-white transition duration-300" />
                      </a>
                    )}
                    {member.phone && (
                      <a href={`https://wa.me/${member.phone}`} aria-label="WhatsApp">
                        <FaWhatsapp size={18} className="hover:text-white transition duration-300" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TeamSlider;
