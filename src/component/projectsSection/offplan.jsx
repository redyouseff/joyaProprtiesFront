import axios from "axios";
import React, { useEffect, useState } from "react";

const OffPlan = () => {
  const [offplan, setoffplan] = useState([]); // State to store blogs
  const [loading, setLoading] = useState(true); // State to manage loading status

  // Fetch blogs from API
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get("https://joya-back.onrender.com/offplan");
        setoffplan(response.data.data); // Update blogs state with fetched data
      } catch (error) {
        console.error("Error fetching the blogs:", error);
      } finally {
        setLoading(false); // Set loading to false
      }
    };

    fetchBlogs();
  }, []); 

  console.log(offplan)
 
  return (
    <div className="px-[60px]">
      <div className="flex flex-wrap items-end justify-between py-10">
        {/* Left Section */}
        <div className="flex flex-col">
          <h2 className="text-3xl font-semibold uppercase text-[#faf8f7]">
            <span>Off Plan</span>
          </h2>
          <h3 className="mt-4 text-lg text-[#6f7672]">
            Find a home that suits your lifestyle
          </h3>
        </div>

        {/* Right Section */}
        <div>
          <a
            href="/Projects/Off-Plan"
            className="inline-block text-sm font-normal uppercase relative text-[#faf8f7] after:content-[''] after:absolute after:bottom-[-5px] after:right-0 after:w-0 after:h-[1px] after:bg-[#faf8f7] after:transition-all after:duration-500 hover:after:w-full"
          >
            Find a home that suits your lifestyle
          </a>
        </div>
      </div>
    </div>
  );
};

export default OffPlan;
