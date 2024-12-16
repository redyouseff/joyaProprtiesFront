import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaEdit, FaTrash } from "react-icons/fa"; // Import Font Awesome icons

const Partners = () => {
  const [partners, setPartners] = useState([]); // All partners from the database
  const [newPartner, setNewPartner] = useState({
    image: null,
    preview: "https://via.placeholder.com/300x150", // Default placeholder image
  });
  const [loading, setLoading] = useState(false);
  const [editingPartner, setEditingPartner] = useState(null); // Store the partner being edited

  // Fetch partners from the API
  useEffect(() => {
    const fetchPartners = async () => {
      try {
        const response = await axios.get(
          "https://joyaproprties.onrender.com/api/partner"
        );
        setPartners(response.data);
      } catch (error) {
        console.error("Error fetching partners:", error);
      }
    };

    fetchPartners();
  }, []);

  // Handle new partner image change
  const handleNewPartnerImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setNewPartner({
        image: file,
        preview: URL.createObjectURL(file),
      });
    }
  };

  // Handle new partner form submission
  const handleNewPartnerSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    if (newPartner.image) {
      formData.append("image", newPartner.image);
    }

    try {
      setLoading(true);
      const response = await axios.post(
        "https://joyaproprties.onrender.com/api/partner",
        formData
      );
      setPartners([...partners, response.data]);
      setNewPartner({ image: null, preview: "https://via.placeholder.com/300x150" });
      setLoading(false);
      alert("Partner added successfully!");
    } catch (error) {
      console.error("Error adding partner:", error);
      setLoading(false);
      alert("Failed to add partner. Please try again.");
    }
  };

  // Handle delete partner
  const handleDeletePartner = async (id) => {
    try {
      await axios.delete(
        `https://joyaproprties.onrender.com/api/partner/${id}`
      );
      setPartners(partners.filter((partner) => partner._id !== id));
      alert("Partner deleted successfully!");
    } catch (error) {
      console.error("Error deleting partner:", error);
      alert("Failed to delete partner. Please try again.");
    }
  };

  // Handle edit partner (open edit form)
  const handleEditPartner = (partner) => {
    setEditingPartner(partner);
    setNewPartner({
      image: null,
      preview: partner.image, // Display the existing image
    });
  };

  // Handle save edited partner
  const handleSaveEdit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    if (newPartner.image) {
      formData.append("image", newPartner.image); // Update with new image
    }

    try {
      setLoading(true);
      const response = await axios.put(
        `https://joyaproprties.onrender.com/api/partner/${editingPartner._id}`,
        formData
      );
      setPartners(
        partners.map((partner) =>
          partner._id === editingPartner._id ? response.data : partner
        )
      );
      setEditingPartner(null); // Close edit form
      setNewPartner({ image: null, preview: "https://via.placeholder.com/300x150" });
      setLoading(false);
      alert("Partner updated successfully!");
    } catch (error) {
      console.error("Error updating partner:", error);
      setLoading(false);
      alert("Failed to update partner. Please try again.");
    }
  };

  return (
    <div className="bg-[#111612] text-white p-6">
      {/* Add/Edit Partner Section */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-center mb-6">
          {editingPartner ? "Edit Partner" : "Add Partner"}
        </h2>
        <form onSubmit={editingPartner ? handleSaveEdit : handleNewPartnerSubmit} className="bg-[#1a1f1e] p-6 rounded-lg shadow-md">
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Image</label>
            <div className="relative">
              <img
                src={newPartner.preview}
                alt="Preview"
                className="w-full h-48 object-cover rounded-lg mb-4 border border-[#3d6a64]"
              />
              <div className="flex justify-between items-center">
                <label
                  htmlFor="partnerImageUpload"
                  className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer hover:bg-blue-600"
                >
                  Upload Image
                </label>
                <input
                  id="partnerImageUpload"
                  type="file"
                  accept="image/*"
                  onChange={handleNewPartnerImageChange}
                  className="hidden"
                />
              </div>
            </div>
          </div>
          <button
            type="submit"
            disabled={loading}
            className="bg-[#3d6a64] text-white px-4 py-2 rounded-md hover:bg-[#2f4e43] w-full"
          >
            {loading ? "Uploading..." : editingPartner ? "Save Changes" : "Add Partner"}
          </button>
        </form>
      </div>

      {/* Partners List Section */}
      <h2 className="text-2xl font-semibold text-center mb-6">Partners</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {partners.map((partner) => (
          <div
            key={partner._id}
            className="border border-[#3d6a64] p-4 rounded-lg bg-[#1a1f1e] shadow-md relative"
          >
            <img
              src={`https://joyaproprties.onrender.com${partner.image}`}
              alt="Partner"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <div className="absolute top-2 right-2">
              <button
                onClick={() => handleEditPartner(partner)}
                className="bg-blue-500 text-white px-3 py-2 rounded-md mr-2 hover:bg-blue-600"
              >
                <FaEdit /> {/* Edit Icon */}
              </button>
              <button
                onClick={() => handleDeletePartner(partner._id)}
                className="bg-red-500 text-white px-3 py-2 rounded-md hover:bg-red-600"
              >
                <FaTrash /> {/* Delete Icon */}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partners;
