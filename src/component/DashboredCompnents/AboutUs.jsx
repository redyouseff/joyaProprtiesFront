import React, { useState, useEffect } from "react";
import axios from "axios"; // Import Axios
import { FaSave, FaTrashAlt } from "react-icons/fa"; // Import FontAwesome icons
import Sidebar from "./SideBar";
import Section from "./Sections";
import KeyStats from "./KeyStatesDashobored";

const Dashboard = () => {
  const [heroSection, setHeroSection] = useState({
    title: "WHO WE ARE?",
    paragraph: "We are a team dedicated to providing exceptional property solutions.",
    image: "https://via.placeholder.com/1200x400",
  });

  const [stats, setStats] = useState({
    experience: "6 years",
    properties: "86",
    yearEstablished: "2024",
  });

  const [sections, setSections] = useState([
    {
      id: 1,
      title: "Why Choose Us?",
      paragraph: "We stand out because of our dedication to client satisfaction.",
      image: "https://via.placeholder.com/1200x400",
    },
    {
      id: 2,
      title: "Our Vision",
      paragraph: "To revolutionize the property market with innovative solutions.",
      image: "https://via.placeholder.com/1200x400",
    },
  ]);

  const [values, setValues] = useState([]);

  // Fetch values from the API
  const fetchValues = async () => {
    try {
      const response = await axios.get("https://joyaproprties.onrender.com/api/values");
      setValues(response.data);
    } catch (error) {
      console.error("Error fetching values:", error);
    }
  };

  // Handle Hero Section Update
  const handleUpdateHeroSection = (field, value) => {
    setHeroSection((prev) => ({ ...prev, [field]: value }));
  };

  // Handle Stats Update
  const handleUpdateStats = (field, value) => {
    setStats((prev) => ({ ...prev, [field]: value }));
  };

  // Add New Section
  const handleAddSection = () => {
    setSections([
      ...sections,
      {
        id: sections.length + 1,
        title: "",
        paragraph: "",
        image: "https://via.placeholder.com/1200x400",
      },
    ]);
  };

  // Update Section by ID
  const handleUpdateSection = (id, field, value) => {
    setSections((prev) =>
      prev.map((section) =>
        section.id === id ? { ...section, [field]: value } : section
      )
    );
  };

  // Handle Image Upload for Sections
  const handleImageUpload = (id, file) => {
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSections((prev) =>
          prev.map((section) =>
            section.id === id ? { ...section, image: reader.result } : section
          )
        );
      };
      reader.readAsDataURL(file);
    }
  };

  // Delete Section by ID
  const handleDeleteSection = (id) => {
    const confirmed = window.confirm("Are you sure you want to delete this section?");
    if (confirmed) {
      setSections((prev) => prev.filter((section) => section.id !== id));
    }
  };

  // Add New Value (Commitment, etc.)
  const handleAddValue = async () => {
    const newValue = {
      title: "",
      content: "",
    };

    try {
      const response = await axios.post("https://joyaproprties.onrender.com/api/values", newValue);
      setValues((prev) => [...prev, response.data]);
    } catch (error) {
      console.error("Error adding value:", error);
    }
  };

  // Update Value by ID
  const handleUpdateValue = async (id, field, value) => {
    const updatedValues = values.map((valueItem) =>
      valueItem._id === id ? { ...valueItem, [field]: value } : valueItem
    );
    setValues(updatedValues);

    const updatedValue = updatedValues.find((valueItem) => valueItem._id === id);

    try {
      await axios.put(`https://joyaproprties.onrender.com/api/values/${id}`, updatedValue);
    } catch (error) {
      console.error("Error updating value:", error);
    }
  };

  // Delete Value by ID
  const handleDeleteValue = async (id) => {
    const confirmed = window.confirm("Are you sure you want to delete this value?");
    if (confirmed) {
      try {
        await axios.delete(`https://joyaproprties.onrender.com/api/values/${id}`);
        setValues((prev) => prev.filter((valueItem) => valueItem._id !== id));
      } catch (error) {
        console.error("Error deleting value:", error);
      }
    }
  };

  // Save Section Action
  const handleSaveSection = (id) => {
    alert(`Section ${id} saved!`);
    // You can replace this alert with an API call to save the section data.
  };

  // Save Value Action
  const handleSaveValue = (id) => {
    alert(`Value ${id} saved!`);
    // You can replace this alert with an API call to save the value data.
  };

  // Use Effect to Fetch Values on Component Mount
  useEffect(() => {
    fetchValues();
  }, []);

  return (
    <div className="flex min-h-screen bg-[#111612] text-white">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-6">
        <h1 className="text-2xl font-semibold mb-20 text-center">ABOUT US</h1>

      
        {/* Stats Section */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold">Our Stats</h2>
            <KeyStats/>
        </div>

     {/* Sections Component */}
     <div className="mt-6">
        <h2 className="text-xl font-semibold mb-6">Manage Sections</h2>
        <Section />
      </div>
    
        {/* Values Section */}
        <div className="mt-8">
          <h2 className="text-4xl font-semibold my-20 text-center ">Our Values</h2>
          <div className="space-y-6">
            {values.length > 0 ? (
              values.map((value) => (
                <div key={value._id} className="bg-[#222c28] p-6 rounded-lg shadow-lg">
                  <input
                    type="text"
                    value={value.title}
                    onChange={(e) => handleUpdateValue(value._id, "title", e.target.value)}
                    placeholder="Enter value title"
                    className="w-full p-2 mb-2 bg-[#111612] text-white border border-[#3d6a64] rounded"
                  />
                  <textarea
                    value={value.content}
                    onChange={(e) => handleUpdateValue(value._id, "content", e.target.value)}
                    placeholder="Enter value content"
                    className="w-full p-4 mb-2 bg-[#111612] text-white border border-[#3d6a64] rounded"
                    rows="5"
                  />
                  <div className="flex justify-end mt-4">
                    <button
                      onClick={() => handleDeleteValue(value._id)}
                      className="bg-red-500 text-white p-2 rounded mr-4"
                    >
                      <FaTrashAlt />
                    </button>
                    <button
                      onClick={() => handleSaveValue(value._id)}
                      className="bg-green-500 text-white p-2 rounded"
                    >
                      <FaSave />
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p>No values available. Please add one.</p>
            )}
          </div>
        </div>

      
        <button
          onClick={handleAddValue}
          className="mt-8 px-4 py-2 bg-blue-500 text-white rounded text-center block mx-auto"
        >
          Add Value
        </button>

      </div>
    </div>
  );
};

export default Dashboard;
