import React, { useState, useEffect } from "react";
import axios from "axios";

const HomePageSlider = () => {
  const [cards, setCards] = useState([]);
  const [newProjectName, setNewProjectName] = useState("");
  const [newProjectUrl, setNewProjectUrl] = useState("");
  const [newImage, setNewImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null); // To preview the uploaded image
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await axios.get(
          "https://joyaproprties.onrender.com/api/slider"
        );
        const fetchedCards = response.data.map((item) => ({
          id: item._id,
          projectName: item.name,
          projectUrl: item.url,
          imageUrl: `https://joyaproprties.onrender.com/api${item.image}`,
        }));
        setCards(fetchedCards);
      } catch (error) {
        console.error("Error fetching cards:", error);
      }
    };

    fetchCards();
  }, []);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setNewImage(file);
      setImagePreview(URL.createObjectURL(file)); // Preview the image
    }
  };

  const handleAddSlider = async (e) => {
    e.preventDefault();

    if (!newProjectName || !newProjectUrl || !newImage) {
      alert("Please fill all fields and upload an image.");
      return;
    }

    const formData = new FormData();
    formData.append("name", newProjectName);
    formData.append("url", newProjectUrl);
    formData.append("image", newImage);

    try {
      setLoading(true);
      const response = await axios.post(
        "https://joyaproprties.onrender.com/api/slider",
        formData
      );

      const newCard = {
        id: response.data._id,
        projectName: newProjectName,
        projectUrl: newProjectUrl,
        imageUrl: `https://joyaproprties.onrender.com${response.data.image}`,
      };

      setCards([...cards, newCard]);
      setNewProjectName("");
      setNewProjectUrl("");
      setNewImage(null);
      setImagePreview(null); // Reset preview
      alert("Slider added successfully!");
    } catch (error) {
      console.error("Error adding slider:", error);
      alert("Failed to add slider. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `https://joyaproprties.onrender.com/api/slider/${id}`
      );
      setCards(cards.filter((card) => card.id !== id));
      alert("Slider deleted successfully!");
    } catch (error) {
      console.error("Error deleting slider:", error);
      alert("Failed to delete slider. Please try again.");
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#111612] text-white">
      <main className="p-6">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold">Home Page Slider</h1>
        </div>

        {/* Add New Slider Form */}
        <form
          onSubmit={handleAddSlider}
          className="bg-[#1a1f1e] p-6 rounded-lg shadow-md mb-8"
        >
          <h2 className="text-xl font-semibold mb-4">Add New Slider</h2>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Project Name</label>
            <input
              type="text"
              value={newProjectName}
              onChange={(e) => setNewProjectName(e.target.value)}
              className="w-full p-2 bg-[#111612] text-white border border-[#3d6a64] rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Project URL</label>
            <input
              type="text"
              value={newProjectUrl}
              onChange={(e) => setNewProjectUrl(e.target.value)}
              className="w-full p-2 bg-[#111612] text-white border border-[#3d6a64] rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Image</label>
            <div className="relative">
              {imagePreview ? (
                <img
                  src={imagePreview}
                  alt="Preview"
                  className="w-full h-48 object-cover rounded-lg mb-4 border border-[#3d6a64]"
                />
              ) : (
                <div className="w-full h-48 bg-gray-800 rounded-lg mb-4 flex items-center justify-center border border-[#3d6a64]">
                  <span className="text-gray-400">No Image Selected</span>
                </div>
              )}
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="w-full text-white"
                required
              />
            </div>
          </div>
          <button
            type="submit"
            disabled={loading}
            className="bg-[#3d6a64] text-white px-4 py-2 rounded-md hover:bg-[#2f4e43] w-full"
          >
            {loading ? "Uploading..." : "Add Slider"}
          </button>
        </form>

        {/* Slider Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {cards.map((card) => (
            <div
              key={card.id}
              className="bg-[#1a1f1e] rounded-lg shadow-md overflow-hidden relative"
            >
              <div
                className="w-full relative"
                style={{ paddingBottom: "56.25%" }}
              >
                <img
                  src={card.imageUrl}
                  alt={card.projectName}
                  className="absolute inset-0 w-full h-full object-cover rounded-tl-lg rounded-tr-lg"
                />
              </div>
              <div className="absolute top-2 right-2">
                <button
                  onClick={() => handleDelete(card.id)}
                  className="p-1 bg-red-500 text-white rounded-full text-sm hover:bg-red-600"
                >
                  🗑
                </button>
              </div>
              <div className="p-4">
                <h2 className="text-lg font-semibold">{card.projectName}</h2>
                <p className="text-sm text-gray-400 mt-2">{card.projectUrl}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default HomePageSlider;