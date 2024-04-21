import React, { useState } from "react";

const FilterButton = () => {
  const [activeFilter, setActiveFilter] = useState("filter1");

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };

  return (
    <>
      <div className="flex space-x-4">
        <button
          className={`px-4 py-2 border border-gray-300 rounded ${
            activeFilter === "filter1" ? "bg-blue-500 text-white" : ""
          }`}
          onClick={() => handleFilterClick("filter1")}
        >
          1
        </button>
        <button
          className={`px-4 py-2 border border-gray-300 rounded ${
            activeFilter === "filter2" ? "bg-blue-500 text-white" : ""
          }`}
          onClick={() => handleFilterClick("filter2")}
        >
          2
        </button>
        <button
          className={`px-4 py-2 border border-gray-300 rounded ${
            activeFilter === "filter3" ? "bg-blue-500 text-white" : ""
          }`}
          onClick={() => handleFilterClick("filter3")}
        >
          3
        </button>
        <button
          className={`px-4 py-2 border border-gray-300 rounded ${
            activeFilter === "filter4" ? "bg-blue-500 text-white" : ""
          }`}
          onClick={() => handleFilterClick("filter4")}
        >
          4
        </button>

        {activeFilter === "filter1" && (
          <div className="p-4 bg-gray-100 w-full">Section for Filter 1</div>
        )}
        {activeFilter === "filter2" && (
          <div className="p-4 bg-gray-100 w-full">Section for Filter 2</div>
        )}
        {activeFilter === "filter3" && (
          <div className="p-4 bg-gray-100 w-full">Section for Filter 3</div>
        )}
        {activeFilter === "filter4" && (
          <div className="p-4 bg-gray-100 w-full">Section for Filter 4</div>
        )}
      </div>
    </>
  );
};

export default FilterButton;
