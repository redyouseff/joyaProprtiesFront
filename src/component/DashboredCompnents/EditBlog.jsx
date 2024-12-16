import React, { useState, useEffect } from "react";
import { FaSave } from "react-icons/fa"; // FontAwesome icons
import { useNavigate, useParams } from "react-router-dom"; // For navigation and params
import { useQuery, useMutation } from '@tanstack/react-query'; // React Query hooks
import axiosInstance from '../../axios'; // Axios instance for API requests
import Sidebar from "./SideBar";

// Fetch blog data by ID from the API
const fetchBlogById = async (id) => {
  const response = await axiosInstance.get(`/blog/${id}`);
  return response.data;
};

// Update blog data via API
const updateBlog = async (updatedBlog) => {
  const response = await axiosInstance.put(`/blog/${updatedBlog._id}`, updatedBlog); // Ensure correct id format
  return response.data;
};

const EditBlog = () => {
  const { id } = useParams(); // Get the blog id from the URL
  const navigate = useNavigate();

  const [blog, setBlog] = useState({
    _id: "",
    title: "",
    paragraph: "",
    author: "",
    date: "",
    link: "",
    image: "",
  });

  // Fetch the blog data by ID using React Query (v5 format)
  const { data: fetchedBlog, isLoading, isError, error } = useQuery({
    queryKey: ['blog', id],  // Define the query key
    queryFn: () => fetchBlogById(id),  // Define the query function
    enabled: !!id,  // Only run the query if id is available
  });

  useEffect(() => {
    if (fetchedBlog) {
      setBlog(fetchedBlog); // Populate form with the fetched blog data
    }
  }, [fetchedBlog]);

  const { mutate } = useMutation({
    mutationFn: updateBlog,  // Define the mutation function
    onSuccess: () => {
      alert("Blog updated!");
      navigate("/blogs"); // Redirect back to Blogs page after save
    },
    onError: (error) => {
      console.error("Error updating blog:", error);
    },
  });

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setBlog({ ...blog, image: file ? URL.createObjectURL(file) : "" }); // Update image preview or clear it
  };

  const handleSaveChanges = () => {
    // Ensure the image is either a URL (if selected) or empty string
    const updatedBlog = {
      ...blog,
      image: blog.image || "", // Ensure image is not null, send empty string if no image
    };

    mutate(updatedBlog); // Trigger the mutation to update the blog
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <div className="flex min-h-screen bg-[#111612] text-white">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-6">
        <h1 className="text-2xl font-semibold mb-6 text-center">Edit Blog</h1>

        {/* Blog Form */}
        <div className="bg-[#1a1f1e] p-6 rounded shadow-lg mb-6">
          <div>
            <label className="block text-sm font-medium mb-2">Title</label>
            <input
              type="text"
              value={blog.title}
              onChange={(e) => setBlog({ ...blog, title: e.target.value })}
              placeholder="Enter blog title"
              className="w-full p-2 bg-[#111612] text-white border border-[#3d6a64] rounded focus:outline-none focus:ring-2 focus:ring-[#3d6a64] mb-4"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Paragraph</label>
            <textarea
              value={blog.paragraph}
              onChange={(e) => setBlog({ ...blog, paragraph: e.target.value })}
              placeholder="Enter blog paragraph"
              className="w-full p-4 bg-[#111612] text-white border border-[#3d6a64] rounded focus:outline-none focus:ring-2 focus:ring-[#3d6a64] mb-4"
              rows="5"
            ></textarea>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Author</label>
            <input
              type="text"
              value={blog.author}
              onChange={(e) => setBlog({ ...blog, author: e.target.value })}
              placeholder="Enter author name"
              className="w-full p-2 bg-[#111612] text-white border border-[#3d6a64] rounded focus:outline-none focus:ring-2 focus:ring-[#3d6a64] mb-4"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Date</label>
            <input
              type="date"
              value={blog.date}
              onChange={(e) => setBlog({ ...blog, date: e.target.value })}
              className="w-full p-2 bg-[#111612] text-white border border-[#3d6a64] rounded focus:outline-none focus:ring-2 focus:ring-[#3d6a64] mb-4"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Link</label>
            <input
              type="text"
              value={blog.link}
              onChange={(e) => setBlog({ ...blog, link: e.target.value })}
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
            {blog.image && <img src={blog.image} alt="Preview" className="w-full h-40 object-cover rounded mb-4" />}
          </div>

          {/* Save Button */}
          <div className="text-right">
            <button
              onClick={handleSaveChanges}
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

export default EditBlog;
