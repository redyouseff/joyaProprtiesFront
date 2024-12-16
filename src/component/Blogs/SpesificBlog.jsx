import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import axiosInstance from '../../axios'; // Importing Axios instance

// Fetch function for a specific blog
const fetchBlogById = async (id) => {
  const response = await axiosInstance.get(`/blog/${id}`);
  return response.data; // Adjust based on the response structure
};

const SpecificBlog = () => {
  const { id } = useParams();

  const { data: blog, isLoading, isError, error } = useQuery({
    queryKey: ['blog', id],
    queryFn: () => fetchBlogById(id),
    enabled: !!id, // Only run the query if `id` is available
  });
  const baseURL = "https://joyaproprties.onrender.com";
  return (
    <div style={{ backgroundColor: '#041d1a', padding: '20px', minHeight: '100vh' }}>
      <div
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
          padding: '20px',
          fontFamily: 'Arial, sans-serif',
          color: '#ffffff',
        }}
      >
        <div style={{ paddingTop: 120, color: '#041d1a' }}>.</div>

        {/* Breadcrumb Navigation */}
        <nav style={{ marginBottom: '20px', fontSize: '0.9rem', color: '#cccccc', textAlign: 'left' }}>
          <a href="#" style={{ color: '#cccccc', textDecoration: 'none', marginRight: '10px' }}>
            Dubai Properties
          </a>
          <span style={{ color: '#777777', marginRight: '10px' }}>&gt;</span>
          <a href="#" style={{ color: '#cccccc', textDecoration: 'none' }}>
            Dubai Real Estate News
          </a>
        </nav>

        {/* Blog Header */}
        <header style={{ textAlign: 'center', marginBottom: '40px' }}>
          {isLoading ? (
            <h1>Loading...</h1>
          ) : isError ? (
            <p>Error: {error.message}</p>
          ) : (
            <>
              <h1
                style={{
                  fontSize: '2.5rem',
                  fontWeight: 'bold',
                  color: '#ffffff',
                  marginBottom: '20px',
                  lineHeight: '1.2',
                }}
              >
                {blog?.title || 'No Title Available'}
              </h1>
              {/* Author Metadata */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: '20px',
                  gap: '15px',
                }}
              >
               
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px', fontSize: '1rem', color: '#cccccc' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <i className="fa fa-user-circle" style={{ color: '#cccccc', marginRight: '5px' }}></i>
                    {blog?.author || 'Unknown'}
                  </span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <i className="fa fa-calendar" style={{ color: '#cccccc', marginRight: '5px' }}></i>
                    {new Date(blog?.date).toLocaleDateString() || 'No Date'}
                  </span>
                </div>
              </div>
            </>
          )}
        </header>

        {/* Blog Image */}
        {isLoading ? (
          <div>Loading...</div>
        ) : blog?.image ? (
          <img
          src={`${baseURL}${blog.image}`}
            alt={blog.title}
            style={{ width: '100%', height: 'auto', borderRadius: '10px' }}
          />
        ) : (
          <p style={{ color: '#cccccc', textAlign: 'center' }}>No Image Available</p>
        )}

        {/* Blog Content */}
        <div style={{ marginTop: '40px', lineHeight: '1.8', fontSize: '1.2rem', color: '#ffffff' }}>
          {isLoading ? (
            <div>Loading content...</div>
          ) : isError ? (
            <div>Error: {error.message}</div>
          ) : (
            <p>{blog?.paragraph || 'Content not available.'}</p>
          )}
        </div>

        {/* External Link */}
        {blog?.link && (
          <div style={{ marginTop: '40px', textAlign: 'center' }}>
            <a href={blog.link} style={{ color: '#1E90FF' }} target="_blank" rel="noopener noreferrer">
              Visit original post
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default SpecificBlog;
