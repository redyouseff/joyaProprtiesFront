import React, { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import axios from "axios";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]); // All testimonials
  const [editingId, setEditingId] = useState(null); // Track ID of testimonial being edited
  const [responseMessage, setResponseMessage] = useState(null); // Response status or message
  const [newTestimonial, setNewTestimonial] = useState({
    nameOfUser: "",
    rate: 5,
    comment: "",
  });

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await axios.get(
          "https://joyaproprties.onrender.com/api/testimonial"
        );
        setTestimonials(response.data);
      } catch (error) {
        console.error("Error fetching testimonials:", error);
      }
    };

    fetchTestimonials();
  }, []);

  const handleChange = (e, id) => {
    const { name, value } = e.target;
    setTestimonials((prev) =>
      prev.map((t) => (t._id === id ? { ...t, [name]: value } : t))
    );
  };

  const handleStarChange = (star, id) => {
    setTestimonials((prev) =>
      prev.map((t) => (t._id === id ? { ...t, rate: star } : t))
    );
  };

  const saveTestimonial = async (id) => {
    const testimonial = testimonials.find((t) => t._id === id);

    try {
      if (id === editingId) {
        await axios.put(
          `https://joyaproprties.onrender.com/api/testimonial/${id}`,
          testimonial
        );
        setResponseMessage("Testimonial updated successfully!");
      }
      setEditingId(null);
    } catch (error) {
      console.error("Error saving testimonial:", error);
      setResponseMessage("Failed to save testimonial. Please try again.");
    }
  };

  const deleteTestimonial = async (id) => {
    try {
      await axios.delete(
        `https://joyaproprties.onrender.com/api/testimonial/${id}`
      );
      setResponseMessage("Testimonial deleted successfully!");
      setTestimonials(testimonials.filter((t) => t._id !== id));
    } catch (error) {
      console.error("Error deleting testimonial:", error);
      setResponseMessage("Failed to delete testimonial. Please try again.");
    }
  };

  const addTestimonial = async () => {
    try {
      const response = await axios.post(
        "https://joyaproprties.onrender.com/api/testimonial",
        newTestimonial
      );
      setTestimonials([response.data, ...testimonials]);
      setNewTestimonial({ nameOfUser: "", rate: 5, comment: "" });
      setResponseMessage("Testimonial added successfully!");
    } catch (error) {
      console.error("Error adding testimonial:", error);
      setResponseMessage("Failed to add testimonial. Please try again.");
    }
  };

  return (
    <div className="bg-[#111612] text-white shadow-lg p-6">
      <div className="flex justify-center items-center py-10 my-5">
        <h2 className="text-2xl font-semibold text-center">Our Client Review</h2>
      </div>

      {/* Add New Testimonial */}
      <div className="border border-[#3d6a64] p-4 rounded bg-[#1a1f1c] shadow-md mb-6">
        <input
          type="text"
          name="nameOfUser"
          value={newTestimonial.nameOfUser}
          onChange={(e) =>
            setNewTestimonial({ ...newTestimonial, nameOfUser: e.target.value })
          }
          placeholder="Enter your name"
          className="w-full p-2 mb-4 bg-[#111612] text-white border border-[#3d6a64] rounded"
        />

        <div className="flex items-center mb-6">
          <h3 className="text-xl font-medium mr-4">Star Rating</h3>
          <div className="flex space-x-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <FaStar
                key={star}
                size={30}
                color={star <= newTestimonial.rate ? "yellow" : "#3d6a64"}
                onClick={() =>
                  setNewTestimonial({ ...newTestimonial, rate: star })
                }
                className="cursor-pointer"
              />
            ))}
          </div>
        </div>

        <textarea
          name="comment"
          value={newTestimonial.comment}
          onChange={(e) =>
            setNewTestimonial({ ...newTestimonial, comment: e.target.value })
          }
          placeholder="Enter your comment"
          className="w-full p-4 mb-4 bg-[#111612] text-white border border-[#3d6a64] rounded-md"
          rows="3"
        />

        <button
          onClick={addTestimonial}
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          Add Testimonial
        </button>
      </div>

      {/* Testimonials List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((t) => (
          <div
            key={t._id}
            className="border border-[#3d6a64] p-4 rounded bg-[#1a1f1c] shadow-md"
          >
            {editingId === t._id ? (
              <>
                <input
                  type="text"
                  name="nameOfUser"
                  value={t.nameOfUser}
                  onChange={(e) => handleChange(e, t._id)}
                  placeholder="Enter your name"
                  className="w-full p-2 mb-4 bg-[#111612] text-white border border-[#3d6a64] rounded"
                />

                <div className="flex items-center mb-6">
                  <h3 className="text-xl font-medium mr-4">Star Rating</h3>
                  <div className="flex space-x-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <FaStar
                        key={star}
                        size={30}
                        color={star <= t.rate ? "yellow" : "#3d6a64"}
                        onClick={() => handleStarChange(star, t._id)}
                        className="cursor-pointer"
                      />
                    ))}
                  </div>
                </div>

                <textarea
                  name="comment"
                  value={t.comment}
                  onChange={(e) => handleChange(e, t._id)}
                  placeholder="Enter your comment"
                  className="w-full p-4 mb-4 bg-[#111612] text-white border border-[#3d6a64] rounded-md"
                  rows="5"
                />

                <div className="text-right space-x-2">
                  <button
                    onClick={() => saveTestimonial(t._id)}
                    className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                  >
                    Save
                  </button>
                  <button
                    onClick={() => setEditingId(null)}
                    className="bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-700"
                  >
                    Cancel
                  </button>
                </div>
              </>
            ) : (
              <>
                <h3 className="text-lg font-semibold">
                  {t.nameOfUser || "Anonymous"} ({t.rate}★)
                </h3>
                <p className="mb-4">{t.comment}</p>

                <div className="flex justify-between">
                  <button
                    onClick={() => setEditingId(t._id)}
                    className="text-blue-500 hover:text-blue-700"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteTestimonial(t._id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    Delete
                  </button>
                </div>
              </>
            )}
          </div>
        ))}
      </div>

      {/* Response Message */}
      {responseMessage && <p className="mt-4 text-center">{responseMessage}</p>}
    </div>
  );
};

export default Testimonials;
