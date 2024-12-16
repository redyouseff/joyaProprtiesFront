import React from "react";
import { useQuery } from "@tanstack/react-query";
import axiosInstance from '../../axios'; // Importing Axios instance

// Fetch function for all blogs
const fetchBlogs = async () => {
  try {
    const response = await axiosInstance.get("/blog");
    console.log("API Response:", response); // Log response for debugging
    return response?.data || []; // Return the blog array or an empty array if undefined
  } catch (error) {
    console.error("Error fetching blogs:", error); // Log any errors
    throw error; // Ensure the query knows there was an error
  }
};

const Blog = () => {
  const { data: blogs, isLoading, isError, error } = useQuery({
    queryKey: ["blogs"], // Query key
    queryFn: fetchBlogs, // Query function
  });

  // Log the blogs data to debug
  console.log("Blogs Data:", blogs);
  const baseURL = "https://joyaproprties.onrender.com";
  return (
    <div className="bg-[#111612] text-white">
      {/* Hero Section */}
      <div className="relative w-full h-[300px] bg-[#111612] flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white">NEWS & BLOGS</h1>
        <div className="w-16 h-[2px] bg-gray-300 my-4"></div>
        <p className="text-xl md:text-2xl font-light text-gray-400">
          Discover the latest insights, tips, and updates about the Dubai real estate market
        </p>
      </div>

      {/* Blogs Section */}
      <div className="py-12 px-4">
        <div className="max-w-5xl mx-auto space-y-8">
          {/* Loading Indicator */}
          {isLoading ? (
            <div className="text-center">
              <p className="text-xl text-gray-400">Loading blogs...</p>
            </div>
          ) : isError ? (
            <div className="text-center">
              <p className="text-xl text-red-500">Error: {error.message}</p>
            </div>
          ) : blogs?.length > 0 ? (
            blogs.map((blog) => (
              <a
                href={`/SpecificBlog/${blog._id}`} // Dynamic link to /SpecificBlog/:id
                key={blog._id} // Use `_id` as the unique key
                className="bg-[#1c1e1b] rounded-lg shadow-lg flex overflow-hidden flex-col md:flex-row transform transition duration-300 hover:scale-105"
              >
                {/* Image Section */}
                <div className="w-full md:w-1/3 relative">
                  <img
                    src={`${baseURL}${blog.image}`}
                     // Fallback image if `image` is null
                    alt={blog.title || "No Title"} // Use fallback title if `title` is null
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute bottom-4 right-4 text-gray-300 text-sm">
                    {blog.author || "Unknown"}
                  </span>
                </div>

                {/* Content Section */}
                <div className="p-6 flex flex-col justify-between flex-grow">
                  {/* Title and Author */}
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {blog.title || "No Title"} {/* Fallback if title is missing */}
                    </h3>
                    <p className="text-sm text-gray-500">
                      By <span className="text-blue-500">{blog.author}</span> on{" "}
                      {new Date(blog.date).toLocaleDateString() || "No Date"}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-[#a0b3b1] text-sm mt-4 mb-4 flex-grow truncate-description">
                    {blog.paragraph
                      ? blog.paragraph.slice(0, 100) + "..."
                      : "No description available."} {/* Fallback text */}
                  </p>

                  {/* Footer - Read More and Views */}
                  <div className="flex items-center justify-between">
                    <span className="text-blue-500 font-medium text-sm flex items-center space-x-2 hover:underline">
                      <span>Read More</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        className="w-4 h-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </span>
                    <div className="text-gray-500 text-sm flex items-center space-x-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        className="w-4 h-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 5c7 0 7 6-7 6s0 6-7 6-7-6-7-6 0-6 7-6z"
                        />
                      </svg>
                      <span>{blog.views || 0}</span>
                    </div>
                  </div>
                </div>
              </a>
            ))
          ) : (
            <div className="text-center">
              <p className="text-xl text-gray-400">No blogs available.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Blog;
