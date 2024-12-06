import React from 'react';
import './JobCard.css';

const JobCard = ({ title, location, salary, type }) => {
  return (
    <div className="job-card">
      <div className="job-card-header">
        <h3>{title}</h3>
       
        <button className="remote-btn">{type}</button>
      </div>
      <p className="location">{location}</p>
      <p className="salary">{salary}</p>
    </div>
  );
};

export default JobCard;
