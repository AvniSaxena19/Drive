import React from "react";
import "./SearchBar.css"; 
const SearchBar = () => {
  return (
    <div className="search-bar-container">
      <div className="search-bar-inner">
        <div className="search-input">
          <i className="icon-search">🔍</i>
          <input type="text" placeholder="Search by: Job title, Position, Keyword..." />
        </div>
        <div className="search-input-divider"></div>
        <div className="location-input">
          <i className="icon-location">📍</i>
          <input type="text" placeholder="City, state or country" />
        </div>
        <button className="find-job-button">Find Job</button>
      </div>
    </div>
  );
};

export default SearchBar;
