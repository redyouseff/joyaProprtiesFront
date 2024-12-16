import axios from "axios";
import React, { useState } from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";

const SecondSection = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState("Default Section Title");
  const [paragraph, setParagraph] = useState(
    "This is the content of the second section that can be edited."
  );
  const [imageFile, setImageFile] = useState(null); // File input for the image
  const [previewImage, setPreviewImage] = useState(
    "https://via.placeholder.com/600"
  ); // To show a preview of the uploaded image

  const handleEdit = () => {
    setIsEditing(!isEditing); // Toggle the editing state
  };

  const handleDelete = () => {
    alert("Image Deleted!");
    setPreviewImage("https://via.placeholder.com/600");
    setImageFile(null);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      setPreviewImage(URL.createObjectURL(file)); // Preview the selected image
    }
  };

  const handleSubmit = async(e) => {
    e.preventDefault();

    // Use FormData to handle file uploads
    const formData = new FormData();
    formData.append("title", title);
    formData.append("paragraph", paragraph);
    if (imageFile) {
      formData.append("image", imageFile);
    }

    // Simulate a submission
    console.log("Submitting form data...");
    for (let [key, value] of formData.entries()) {
    
    }
    try {
      const response = await axios.put(
        "https://joyaproprties.onrender.com/api/secondsection/6758d22126e5d95ea18c8ab4 ",
          formData
      );
      console.log("Testimonial saved:", response.data);
      
    } catch (error) {
      console.error("Error saving testimonial:", error);
     
    }

    alert("Form submitted!");
  };



 

  return (
    <>
      <div className="w-full text-center py-6 bg-[#111612] text-white">
        <h1 className="text-3xl font-bold">Second Section</h1>
      </div>
      <div className="flex flex-col min-h-screen bg-[#111612] text-white p-6">
        <form
          onSubmit={handleSubmit}
          className="flex flex-wrap md:flex-nowrap items-start justify-between"
        >
          {/* Left Section */}
          <div className="w-full md:w-1/2 p-6">
            <div className="mb-6">
              <label className="block text-lg font-semibold mb-2">Title</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full p-2 bg-[#1a1f1e] text-white border border-[#3d6a64] rounded"
              />
            </div>

            <div className="mb-6">
              <label className="block text-lg font-semibold mb-2">
                Paragraph
              </label>
              <textarea
                value={paragraph}
                onChange={(e) => setParagraph(e.target.value)}
                className="w-full p-2 bg-[#1a1f1e] text-white border border-[#3d6a64] rounded"
                rows="5"
              />
            </div>

            <button
              type="submit"
              className="bg-[#3d6a64] text-white px-4 py-2 rounded-md hover:bg-blue-600"
            >
              Save Changes
            </button>
          </div>

          {/* Right Section (Image Upload) */}
          <div className="w-full md:w-1/2 p-6">
            <div className="relative">
              <img
                src={previewImage}
                alt="Preview"
                className="w-full h-auto object-cover rounded-lg mb-4"
              />
              <div className="flex justify-between items-center">
                <label
                  htmlFor="imageUpload"
                  className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer hover:bg-blue-600"
                >
                  Upload Image
                </label>
                <button
                  type="button"
                  onClick={handleDelete}
                  className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
                >
                  Delete Image
                </button>
              </div>
              <input
                id="imageUpload"
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
              />
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default SecondSection;