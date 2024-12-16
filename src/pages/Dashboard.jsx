import React, { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { FaTrash, FaEdit } from "react-icons/fa";
import Sidebar from "../component/DashboredCompnents/SideBar";
import axiosInstance from "../axios";

// Fetch function for properties based on selected type
const fetchProperties = async (type) => {
  const response = await axiosInstance.get(`/${type}`);
  return response.data;
};

function PropertiesPage() {
  const queryClient = useQueryClient();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState("off-plan"); // Default to 'off-plan'
  const [currentProperty, setCurrentProperty] = useState(null);

  // Fetch properties from the selected type
  const { data, error, isLoading } = useQuery({
    queryKey: ["property", selectedType],
    queryFn: () => fetchProperties(selectedType),
  });

  // Mutation to update a property
  const updateProperty = useMutation({
    mutationFn: async (property) => {
      const updatedProperty = {
        title: property.title,
        description: property.description,
        details: property.details,
      };
      return axiosInstance.put(`/${selectedType}/${property._id}`, updatedProperty);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["property", selectedType]);
      setCurrentProperty(null); // Close the modal after saving
    },
  });

  // Function to delete a property
  const deleteProperty = async (propertyId) => {
    try {
      await axiosInstance.delete(`/${selectedType}/${propertyId}`);
      queryClient.invalidateQueries(["property", selectedType]); // Refetch data after deletion
    } catch (error) {
      console.error("Failed to delete property:", error);
    }
  };

  // Handle input changes in the edit modal
  const handleInputChange = (field, value) => {
    setCurrentProperty((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const baseURL = "https://joyaproprties.onrender.com";

  return (
    <div className="flex min-h-screen bg-[#111612] text-white">
      <Sidebar />

      <main className="flex-1 p-6">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold">PROPERTIES</h1>
        </div>

        {/* Search Bar and Filter */}
        <div className="flex items-center justify-between mb-6">
          <input
            type="text"
            placeholder="Search For Properties"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="p-2 w-64 rounded-md bg-[#1a1f1e] text-white border border-[#3d6a64] placeholder-[#9da5a4]"
          />
          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="p-2 rounded-md bg-[#1a1f1e] text-white border border-[#3d6a64]"
          >
            <option value="luxury">Luxury</option>
            <option value="feature">Feature</option>
            <option value="off-plan">Off Plan</option>
          </select>
        </div>

        {/* Property Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {data
            ?.filter((property) =>
              property.description
                ?.toLowerCase()
                .includes(searchQuery.toLowerCase())
            )
            .map((property) => (
              <div
                key={property._id}
                className="bg-[#1a1f1e] rounded-lg shadow-md overflow-hidden relative"
              >
                <img
                  src={`${baseURL}${property.imgSrcs?.[0] || "/default-image.jpg"}`}
                  alt={property.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold truncate">
                    {property.title || "No Title"}
                  </h3>
                  <p className="text-sm text-gray-400 mt-2 line-clamp-3">
                    {property.description || "No description available."}
                  </p>
                </div>
                <button
                  onClick={() => setCurrentProperty(property)}
                  className="absolute top-2 right-10 bg-[#3d6a64] text-white p-2 rounded-full hover:bg-[#2c5b4c]"
                  title="Edit Property"
                >
                  <FaEdit />
                </button>
                <button
                  onClick={() => deleteProperty(property._id)}
                  className="absolute top-2 right-2 bg-red-600 text-white p-2 rounded-full hover:bg-red-800"
                  title="Delete Property"
                >
                  <FaTrash />
                </button>
              </div>
            ))}
        </div>

        {/* Edit Modal */}
        {currentProperty && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
            <div className="bg-[#1a1f1e] rounded-lg shadow-lg p-6 w-full max-w-4xl">
              <h2 className="text-2xl font-semibold mb-6 text-center">Edit Property</h2>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm mb-2">Title</label>
                  <input
                    type="text"
                    value={currentProperty.title || ""}
                    onChange={(e) =>
                      handleInputChange("title", e.target.value)
                    }
                    className="w-full p-2 bg-[#111612] text-white border border-[#3d6a64] rounded"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-2">Description</label>
                  <textarea
                    value={currentProperty.description || ""}
                    onChange={(e) =>
                      handleInputChange("description", e.target.value)
                    }
                    className="w-full p-4 bg-[#111612] text-white border border-[#3d6a64] rounded"
                    rows="4"
                  ></textarea>
                </div>
                <div>
                  <label className="block text-sm mb-2">Details</label>
                  <textarea
                    value={currentProperty.details || ""}
                    onChange={(e) =>
                      handleInputChange("details", e.target.value)
                    }
                    className="w-full p-4 bg-[#111612] text-white border border-[#3d6a64] rounded"
                    rows="4"
                  ></textarea>
                </div>
                <div className="flex justify-end gap-4">
                  <button
                    type="button"
                    onClick={() => setCurrentProperty(null)}
                    className="px-6 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    onClick={() => updateProperty.mutate(currentProperty)}
                    className="px-6 py-2 bg-[#3d6a64] text-white rounded hover:bg-[#2c5b4c]"
                  >
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default PropertiesPage;
