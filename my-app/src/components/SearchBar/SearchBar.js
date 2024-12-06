import React, { useState } from "react";
import "./SearchBar.css";

const SearchBar = ({ onFilterChange }) => {
  const [filters, setFilters] = useState({
    keyword: "",
    location: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const updatedFilters = { ...filters, [name]: value };
    setFilters(updatedFilters);
    onFilterChange(updatedFilters); 
  };

  return (
    <div className="search-bar-container">
      <div className="search-bar-inner">
        
        <div className="search-input">
          <i className="icon-search">🔍</i>
          <input
            type="text"
            name="keyword"
            placeholder="Search by: Job title, Position, Keyword..."
            value={filters.keyword}
            onChange={handleInputChange}
          />
        </div>

        <div className="search-input-divider"></div>

        
        <div className="location-input">
          <i className="icon-location">📍</i>
          <input
            type="text"
            name="location"
            placeholder="City, state or country"
            value={filters.location}
            onChange={handleInputChange}
          />
        </div>

        <button
          className="find-job-button"
          onClick={() => onFilterChange(filters)}
        >
          Find Job
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
