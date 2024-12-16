import React, { useState, useEffect } from "react";
import { FaSave } from "react-icons/fa"; // FontAwesome icons
import Sidebar from "./SideBar";
import { useQuery, useMutation } from "@tanstack/react-query"; // Importing React Query hooks
import axiosInstance from "../../axios"; // Axios instance

// Fetch data function for Contact Us info by ID
const fetchContactInfo = async (id) => {
  const response = await axiosInstance.get(`/contact/`); // Fetching contact info using ID
  return response.data;
};

// Update data function for Contact Us info by ID
const updateContactInfo = async (id, updatedData) => {
  const response = await axiosInstance.put(`/contact/${id}`, updatedData); // Updating contact info by ID
  return response.data;
};

const ContactUs = () => {
  const [description, setDescription] = useState("");
  const [mapUrl, setMapUrl] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [facebook, setFacebook] = useState("");
  const [twitter, setTwitter] = useState("");
  const [instagram, setInstagram] = useState("");
  const [linkedin, setLinkedin] = useState("");

  const [successMessage, setSuccessMessage] = useState(""); // To display success message after update

  const contactId = "67529e9fbb28f3f448a44951"; // Replace with dynamic ID or pass from URL

  // Fetching data with React Query's useQuery hook
  const { data, error, isLoading } = useQuery({
    queryKey: ['contactInfo', contactId], // Including ID in the query key
    queryFn: () => fetchContactInfo(contactId), // Pass the ID to the fetch function
    onSuccess: (fetchedData) => {
      // Initialize states with fetched data
      if (fetchedData) {
        setDescription(fetchedData.description);
        setMapUrl(fetchedData.mapUrl);
        setPhone(fetchedData.phone);
        setEmail(fetchedData.email);
        setFacebook(fetchedData.facebook);
        setTwitter(fetchedData.twitter);
        setInstagram(fetchedData.instagram);
        setLinkedin(fetchedData.linkedin);
      }
    }
  });

  // Mutation to save updates
  const saveUpdates = useMutation({
    mutationFn: (updatedData) => updateContactInfo(contactId, updatedData), // Pass the ID to the update function
    onSuccess: () => {
      setSuccessMessage("Updates Saved Successfully!"); // Show success message
    },
    onError: () => {
      setSuccessMessage("Failed to save updates."); // Handle error and show message
    }
  });

  const handleSaveUpdates = () => {
    const updatedData = {
      description,
      mapUrl,
      phone,
      email,
      facebook,
      twitter,
      instagram,
      linkedin,
    };

    saveUpdates.mutate(updatedData); // Send the updated data to the server
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading data</div>;

  return (
    <div className="flex min-h-screen bg-[#111612] text-white">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-6">
        <h1 className="text-2xl font-semibold mb-6 text-center">Contact Us</h1>

        {/* Success Message */}
        {successMessage && (
          <div className="bg-green-500 text-white p-3 mb-4 rounded">{successMessage}</div>
        )}

        {/* Contact Info Card */}
        <div className="bg-[#1a1f1e] p-6 rounded shadow-lg mb-8">
          <h2 className="text-lg font-semibold mb-4">Contact Info</h2>

          {/* Description */}
          <div className="mb-4">
            <h3 className="text-sm text-[#9da5a4] mb-2">Description</h3>
            <textarea
              value={description}
              onChange={(e) => setDescription( e.target.value)}
              className="w-full p-4 bg-[#111612] text-white border border-[#3d6a64] rounded focus:outline-none focus:ring-2 focus:ring-[#3d6a64]"
              rows="4"
            />
          </div>

          {/* Map URL */}
          <div className="mb-4">
            <h3 className="text-sm text-[#9da5a4] mb-2">Map URL</h3>
            <input
              type="text"
              value={mapUrl}
              onChange={(e) => setMapUrl(e.target.value)}
              className="w-full p-2 bg-[#111612] text-white border border-[#3d6a64] rounded focus:outline-none focus:ring-2 focus:ring-[#3d6a64]"
            />
            <iframe
              src={mapUrl}
              title="Google Map"
              className="w-full h-64 rounded border border-[#3d6a64] mt-4"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>

          {/* Phone */}
          <div className="mb-4">
            <h3 className="text-sm text-[#9da5a4] mb-2">Phone</h3>
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full p-2 bg-[#111612] text-white border border-[#3d6a64] rounded focus:outline-none focus:ring-2 focus:ring-[#3d6a64]"
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <h3 className="text-sm text-[#9da5a4] mb-2">Email</h3>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 bg-[#111612] text-white border border-[#3d6a64] rounded focus:outline-none focus:ring-2 focus:ring-[#3d6a64]"
            />
          </div>

          {/* Social Media Links */}
          <div className="mb-4">
            <h3 className="text-sm text-[#9da5a4] mb-2">Social Media Links</h3>

            {/* Facebook */}
            <div className="flex items-center mb-2">
              <input
                type="url"
                value={facebook}
                onChange={(e) => setFacebook(e.target.value)}
                placeholder="Facebook URL"
                className="w-full p-2 bg-[#111612] text-white border border-[#3d6a64] rounded focus:outline-none focus:ring-2 focus:ring-[#3d6a64]"
              />
            </div>

            {/* Twitter */}
            <div className="flex items-center mb-2">
              <input
                type="url"
                value={twitter}
                onChange={(e) => setTwitter(e.target.value)}
                placeholder="Twitter URL"
                className="w-full p-2 bg-[#111612] text-white border border-[#3d6a64] rounded focus:outline-none focus:ring-2 focus:ring-[#3d6a64]"
              />
            </div>

            {/* Instagram */}
            <div className="flex items-center mb-2">
              <input
                type="url"
                value={instagram}
                onChange={(e) => setInstagram(e.target.value)}
                placeholder="Instagram URL"
                className="w-full p-2 bg-[#111612] text-white border border-[#3d6a64] rounded focus:outline-none focus:ring-2 focus:ring-[#3d6a64]"
              />
            </div>

            {/* LinkedIn */}
            <div className="flex items-center mb-2">
              <input
                type="url"
                value={linkedin}
                onChange={(e) => setLinkedin(e.target.value)}
                placeholder="LinkedIn URL"
                className="w-full p-2 bg-[#111612] text-white border border-[#3d6a64] rounded focus:outline-none focus:ring-2 focus:ring-[#3d6a64]"
              />
            </div>
          </div>

          {/* Save Button */}
          <div className="flex justify-end mt-4">
            <button
              onClick={handleSaveUpdates}
              className="bg-[#3d6a64] text-white px-6 py-2 rounded-md flex items-center hover:bg-[#3d6a64] transition-all"
            >
              <FaSave className="mr-2" /> Save Updates
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
