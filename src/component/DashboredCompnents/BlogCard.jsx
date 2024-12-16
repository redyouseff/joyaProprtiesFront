import React from "react";
import { FaEdit } from "react-icons/fa"; // FontAwesome icon for editing
import { FaTrash } from "react-icons/fa"; // FontAwesome icon for editing

const BlogCard = ({ blog, onEdit ,onDelete}) => {
  const baseURL = "https://sleepy-blinnie-beshoynasry-2859766e.koyeb.app";
  const localbase = "http://localhost:5000"

  return (
    <div className="bg-[#1a1f1e] p-6 rounded shadow-lg relative">
      {/* Edit Button */}
      <button
        onClick={() => onEdit(blog._id)} // Trigger the edit functionality (using blog._id)
        className="absolute top-2 right-2 bg-[#3d6a64] text-white p-2 rounded-full hover:bg-[#3d6a64]"
      >
        <FaEdit size={20} />
      </button>
      <button
        onClick={() => onDelete(blog._id)} // Trigger the edit functionality (using blog._id)
        className="absolute top-2 left-2 bg-[#812a2a] text-white p-2 rounded-full hover:bg-[#ff3a3a]"
      >
        <FaTrash size={20} />
      </button>

      {/* Blog Image */}
      <img
        src={`${baseURL}${blog.image}`}
        alt={blog.title}
        className="w-full h-48 object-cover rounded mb-4"
      />

      {/* Blog Title and Paragraph */}
      <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
      <p className="text-sm text-gray-400 mb-4">{blog.paragraph}</p>

      {/* Blog Author and Date */}
      <p className="text-sm">By {blog.author} | {blog.date}</p>

      {/* Link to full blog */}
      <a href={blog.link} className="text-[#3d6a64] hover:underline">
        Read More
      </a>
    </div>
  );
};

export default BlogCard;
