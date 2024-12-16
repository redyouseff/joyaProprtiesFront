import React, { useState } from "react";

const FiltersSection = () => {
  const [showFilters, setShowFilters] = useState(false);

  return (
  
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center">
        <div className="text-xl font-semibold">
          {showFilters ? "Filters Active" : "Filters Hidden"}
        </div>
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="bg-gray-900 text-white px-4 py-2 rounded hover:bg-gray-700 transition-colors"
        >
          {showFilters ? "Hide Filters" : "Show Filters"}
        </button>
      </div>

      {/* Optional: Display filter content based on showFilters state */}
      {showFilters && (
        <div className="mt-4">
          {/* Add filter options here */}
          <p>Filter options will be displayed here.</p>
        </div>
      )}
    </div>
  );
};

export default FiltersSection;
