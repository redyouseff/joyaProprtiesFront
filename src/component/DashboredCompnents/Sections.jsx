import React, { useState } from "react";
import { FaSave, FaEdit, FaTrash } from "react-icons/fa";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axiosInstance from "../../axios";

const Sections = () => {
  const queryClient = useQueryClient();
  const [formData, setFormData] = useState({
    title: "",
    paragraph: "",
    image: null,
    id: null,
  });
  const [message, setMessage] = useState({ type: null, text: "" });

  const { data: sections, isLoading, isError } = useQuery({
    queryKey: ["sections"],
    queryFn: async () => {
      const response = await axiosInstance.get("/hero-sections");
      return response.data;
    },
    onError: (error) => {
      setMessage({ type: "error", text: `Error loading sections: ${error.message}` });
    },
  });

  const handleImageChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const { mutate: saveSection, isLoading: isSaving } = useMutation({
    mutationFn: async ({ id, title, paragraph, image }) => {
      const form = new FormData();
      form.append("title", title);
      form.append("paragraph", paragraph);
      if (image) form.append("image", image);

      if (id) {
        return axiosInstance.put(`/hero-sections/${id}`, form, {
          headers: { "Content-Type": "multipart/form-data" },
        });
      } else {
        return axiosInstance.post("/hero-sections", form, {
          headers: { "Content-Type": "multipart/form-data" },
        });
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["sections"]);
      setMessage({ type: "success", text: "Section saved successfully!" });
      resetForm();
    },
    onError: (error) => {
      setMessage({ type: "error", text: `Error saving section: ${error.response?.data?.message || error.message}` });
    },
  });

  const { mutate: deleteSection, isLoading: isDeleting } = useMutation({
    mutationFn: (id) => axiosInstance.delete(`/hero-sections/${id}`),
    onSuccess: () => {
      queryClient.invalidateQueries(["sections"]);
      setMessage({ type: "success", text: "Section deleted successfully!" });
    },
    onError: (error) => {
      setMessage({ type: "error", text: `Error deleting section: ${error.message}` });
    },
  });

  const handleEdit = (section) => {
    setFormData({
      id: section._id,
      title: section.title,
      paragraph: section.paragraph,
      image: null, // Clear image preview for editing
    });
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this section?")) {
      deleteSection(id);
    }
  };

  const resetForm = () => {
    setFormData({ title: "", paragraph: "", image: null, id: null });
  };

  const handleSaveSection = () => {
    saveSection(formData);
  };

  return (
    <div className="flex min-h-screen bg-[#111612] text-white">
      <div className="flex-1 p-6">
        <h1 className="text-2xl font-semibold mb-6 text-center">Sections</h1>

        {message.text && (
          <div
            className={`mb-4 text-center ${
              message.type === "error" ? "text-red-500" : "text-green-500"
            }`}
          >
            {message.text}
          </div>
        )}

        <div className="bg-[#1a1f1e] p-6 rounded shadow-lg mb-6">
          {isLoading ? (
            <p>Loading sections...</p>
          ) : isError ? (
            <p>Error loading sections</p>
          ) : sections && sections.length > 0 ? (
            sections.map((section) => (
              <div
                key={section._id}
                className="flex justify-between items-center mb-4 p-4 bg-[#2c3432] rounded"
              >
                <div className="flex-1">
                  <h2 className="text-lg">{section.title}</h2>
                  <p>{section.paragraph}</p>
                  {section.image && (
                    <img
                      src={`https://sleepy-blinnie-beshoynasry-2859766e.koyeb.app${section.image}`}
                      alt={section.title}
                      className="mt-4 w-32 h-32 object-cover rounded"
                    />
                  )}
                </div>
                <div className="flex space-x-4">
                  <button
                    onClick={() => handleEdit(section)}
                    className="text-yellow-500"
                  >
                    <FaEdit size={20} />
                  </button>
                  {/* <button
                    onClick={() => handleDelete(section._id)}
                    className="text-red-500"
                  >
                    <FaTrash size={20} />
                  </button> */}
                </div>
              </div>
            ))
          ) : (
            <p>No sections available.</p>
          )}
        </div>

        <div className="bg-[#1a1f1e] p-6 rounded shadow-lg">
          <div>
            <label className="block mb-2">Title</label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="w-full p-2 mb-4 bg-[#2c3432] border rounded"
              placeholder="Enter title"
            />

            <label className="block mb-2">Paragraph</label>
            <textarea
              value={formData.paragraph}
              onChange={(e) => setFormData({ ...formData, paragraph: e.target.value })}
              className="w-full p-2 mb-4 bg-[#2c3432] border rounded"
              placeholder="Enter paragraph"
            ></textarea>

            <label className="block mb-2">Image</label>
            <input type="file" onChange={handleImageChange} className="mb-4" />

            <button
              onClick={handleSaveSection}
              className={`w-full bg-green-500 p-3 rounded text-white ${isSaving ? "opacity-50" : ""}`}
              disabled={isSaving}
            >
              {formData.id ? "Update Section" : "Save Section"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sections;