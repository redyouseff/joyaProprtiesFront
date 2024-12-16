import React, { useState, useEffect } from "react";
import axios from "axios";

const KeyStats = () => {
  const [stats, setStats] = useState([]);
  const [newStat, setNewStat] = useState({ value: "", label: "" });
  const [editStat, setEditStat] = useState({ id: "", value: "", label: "" });
  const [loading, setLoading] = useState(false);

  const baseUrl = "https://sleepy-blinnie-beshoynasry-2859766e.koyeb.app/api/keystats"; // Your backend API URL

  // Fetch KeyStats data on component mount
  useEffect(() => {
    const fetchKeyStats = async () => {
      setLoading(true);
      try {
        const response = await axios.get(baseUrl);
        setStats(response.data);
      } catch (error) {
        console.error("Error fetching key stats:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchKeyStats();
  }, []);

  // Handle form input changes for creating new stats
  const handleInputChange = (e) => {
    setNewStat({ ...newStat, [e.target.name]: e.target.value });
  };

  // Handle form input changes for editing stats
  const handleEditChange = (e) => {
    setEditStat({ ...editStat, [e.target.name]: e.target.value });
  };

  // Create a new KeyStat
  const createKeyStat = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(baseUrl, newStat);
      setStats([...stats, response.data]);
      setNewStat({ value: "", label: "" });
    } catch (error) {
      console.error("Error creating key stat:", error);
    }
  };

  // Edit an existing KeyStat
  const updateKeyStat = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`${baseUrl}/${editStat.id}`, editStat);
      setStats(
        stats.map((stat) =>
          stat._id === response.data._id ? response.data : stat
        )
      );
      setEditStat({ id: "", value: "", label: "" });
    } catch (error) {
      console.error("Error updating key stat:", error);
    }
  };

  // Delete a KeyStat
  const deleteKeyStat = async (id) => {
    try {
      await axios.delete(`${baseUrl}/${id}`);
      setStats(stats.filter((stat) => stat._id !== id));
    } catch (error) {
      console.error("Error deleting key stat:", error);
    }
  };

  return (
    <div className="container mx-auto p-6 bg-[#1a1f1e]">
      {/* Loading Spinner */}
      {loading && <div className="text-center py-4">Loading...</div>}

      <h1 className="text-4xl font-semibold text-center text-white mb-8">
        Key Stats
      </h1>

      {/* Key Stats List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        {stats.map((stat) => (
          <div key={stat._id} className="bg-[#3c504c] p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-xl font-medium text-white">{stat.value}</h2>
            <p className="text-white">{stat.label}</p>

            <div className="mt-4 flex justify-between items-center">
              {/* Edit Button */}
              <button
                onClick={() => setEditStat({ ...stat })}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
              >
                Edit
              </button>

              {/* Delete Button */}
              <button
                onClick={() => deleteKeyStat(stat._id)}
                className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Create New Key Stat Form */}
      <div className="bg-[#1a1f1e] p-6 rounded-lg shadow-lg mb-8">
        <h3 className="text-2xl font-medium text-white mb-7">Create New Key Stat</h3>
        <form onSubmit={createKeyStat}>
          <div className="mb-4">
            <input
              type="text"
              name="value"
              placeholder="Value"
              value={newStat.value}
              onChange={handleInputChange}
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
            />
          </div>
          <div className="mb-6">
            <input
              type="text"
              name="label"
              placeholder="Label"
              value={newStat.label}
              onChange={handleInputChange}
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition"
          >
            Create
          </button>
        </form>
      </div>

      {/* Edit Key Stat Form */}
      {editStat.id && (
        <div className="bg-[#1a1f1e] p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-medium text-gray-800 mb-4">Edit Key Stat</h3>
          <form onSubmit={updateKeyStat}>
            <div className="mb-4">
              <input
                type="text"
                name="value"
                placeholder="Value"
                value={editStat.value}
                onChange={handleEditChange}
                required
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-6">
              <input
                type="text"
                name="label"
                placeholder="Label"
                value={editStat.label}
                onChange={handleEditChange}
                required
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-yellow-600 text-white rounded-md hover:bg-yellow-700 transition"
            >
              Update
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default KeyStats;
