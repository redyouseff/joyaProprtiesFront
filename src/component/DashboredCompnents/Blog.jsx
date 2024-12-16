import React from 'react';
import { useNavigate } from 'react-router-dom'; // For navigation
import { FaEdit, FaPlusSquare, FaTrash } from 'react-icons/fa'; // For edit and add icons
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import axiosInstance from '../../axios'; // Make sure axiosInstance is properly set up for your API
import Sidebar from './SideBar';
import BlogCard from './BlogCard';

const Blogs = () => {
  const navigate = useNavigate(); // For navigation
  const queryClient = useQueryClient();

  // Use React Query to fetch blogs
  const { data: blogs, isLoading, isError } = useQuery({
    queryKey: ['blogs'],
    queryFn: async () => {
      const response = await axiosInstance.get('/blog');
      return response.data;
    },
  });

  // Delete blog mutation directly in the component
  const deleteBlog = useMutation({
    mutationFn: async (id) => {
      const response = await axiosInstance.delete(`/blog/${id}`);
      return response.data;
    },
    onSuccess: () => {
      // After successful deletion, invalidate the query to refresh the data
      queryClient.invalidateQueries({ queryKey: ['blogs'] });
    },
  });

  // Handle Edit functionality
  const handleEditClick = (id) => {
    navigate(`/edit-blog/${id}`);
  };

  // Handle Add New Blog functionality
  const handleAddBlog = () => {
    navigate('/add-blog');
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching blogs</div>;
  }

  return (
    <div className="flex min-h-screen bg-[#111612] text-white">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-6">
        <h1 className="text-2xl font-semibold mb-6 text-center">Blogs</h1>

        {/* Add New Blog Button */}
        <div className="text-center mb-6">
          <button
            onClick={handleAddBlog}
            className="bg-[#3d6a64] text-white px-6 py-2 rounded-md hover:bg-[#3d6a64]"
          >
            <FaPlusSquare size={20} className="mr-2" />
            Add New Blog
          </button>
        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs?.map((blog) => (
            <BlogCard
              key={blog._id}
              blog={blog}
              onEdit={handleEditClick}
              onDelete={deleteBlog.mutate} // Pass the delete function to BlogCard
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
