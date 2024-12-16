import React, { useState } from "react";
import { FaSave } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import axiosInstance from "../../axios";
import Sidebar from "./SideBar";

const AddBlog = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [paragraph, setParagraph] = useState("");
  const [author, setAuthor] = useState("");
  const [date, setDate] = useState("");
  const [link, setLink] = useState("");
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file); // Store the file for FormData
  };

  const { mutate } = useMutation({
    mutationFn: async (newBlog) => {
      const formData = new FormData();
      formData.append("title", newBlog.title);
      formData.append("paragraph", newBlog.paragraph);
      formData.append("author", newBlog.author);
      formData.append("date", newBlog.date);
      formData.append("link", newBlog.link);
      if (newBlog.image) {
        formData.append("image", newBlog.image); // Add image to FormData
      }

      // Axios POST with FormData
      const response = await axiosInstance.post("/blog", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      return response.data;
    },
    onSuccess: () => {
      navigate("/blogs"); // Navigate to blogs list
    },
    onError: (error) => {
      console.error("Error adding blog:", error);
    },
  });

  const handleSaveBlog = () => {
    const newBlog = {
      title,
      paragraph,
      author,
      date,
      link,
      image,
    };

    mutate(newBlog); // Trigger mutation
  };

  return (
    <div className="flex min-h-screen bg-[#111612] text-white">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-6">
        <h1 className="text-2xl font-semibold mb-6 text-center">Add New Blog</h1>

        {/* Blog Form */}
        <div className="bg-[#1a1f1e] p-6 rounded shadow-lg mb-6">
          <div>
            <label className="block text-sm font-medium mb-2">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter blog title"
              className="w-full p-2 bg-[#111612] text-white border border-[#3d6a64] rounded focus:outline-none focus:ring-2 focus:ring-[#3d6a64] mb-4"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Paragraph</label>
            <textarea
              value={paragraph}
              onChange={(e) => setParagraph(e.target.value)}
              placeholder="Enter blog paragraph"
              className="w-full p-4 bg-[#111612] text-white border border-[#3d6a64] rounded focus:outline-none focus:ring-2 focus:ring-[#3d6a64] mb-4"
              rows="5"
            ></textarea>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Author</label>
            <input
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              placeholder="Enter author name"
              className="w-full p-2 bg-[#111612] text-white border border-[#3d6a64] rounded focus:outline-none focus:ring-2 focus:ring-[#3d6a64] mb-4"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Date</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full p-2 bg-[#111612] text-white border border-[#3d6a64] rounded focus:outline-none focus:ring-2 focus:ring-[#3d6a64] mb-4"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Link</label>
            <input
              type="text"
              value={link}
              onChange={(e) => setLink(e.target.value)}
              placeholder="Enter link to the blog"
              className="w-full p-2 bg-[#111612] text-white border border-[#3d6a64] rounded focus:outline-none focus:ring-2 focus:ring-[#3d6a64] mb-4"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Image</label>
            <input
              type="file"
              onChange={handleImageChange}
              className="w-full text-[#3d6a64] mb-4"
            />
            {image && <img src={URL.createObjectURL(image)} alt="Preview" className="w-full h-40 object-cover rounded mb-4" />}
          </div>

          {/* Save Button */}
          <div className="text-right">
            <button
              onClick={handleSaveBlog}
              className="flex items-center bg-[#3d6a64] text-white px-6 py-2 rounded-md hover:bg-[#3d6a64]"
            >
              <FaSave size={20} className="mr-2" />
              Save Blog
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddBlog;
