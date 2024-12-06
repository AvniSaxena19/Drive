import React, { useState } from 'react';
import JobCard from './JobCard';
import SearchBar from '../SearchBar/SearchBar'; 
import './JobList.css';

const jobData = [
  { title: 'Project Manager', location: 'Dhaka, Bangladesh', salary: '$30k - $35k', type: 'REMOTE' },
  { title: 'Software Engineer', location: 'Delhi, India', salary: '$40k - $45k', type: 'REMOTE' },
  { title: 'Senior UX Designer', location: 'Tokyo, Japan', salary: '$50k - $55k', type: 'REMOTE' },
  { title: 'Marketing Officer', location: 'Kathmandu, Nepal', salary: '$20k - $25k', type: 'REMOTE' },
  { title: 'Visual Designer', location: 'Washington DC, Australia', salary: '$35k - $40k', type: 'REMOTE' },
  { title: 'Front End Developer', location: 'Dhaka, Bangladesh', salary: '$25k - $30k', type: 'REMOTE' },
];



const jobCards = Array.from({ length: 50 }, (_, i) => {
  const job = jobData[i % jobData.length]; 
  return { ...job, id: i }; 
});

const JobList = () => {
  const [filteredJobs, setFilteredJobs] = useState(jobCards);

 
  const handleFilterChange = (filters) => {
    const { keyword, location } = filters;
    const filtered = jobCards.filter((job) =>
      (job.title.toLowerCase().includes(keyword.toLowerCase()) || job.location.toLowerCase().includes(keyword.toLowerCase())) &&
      job.location.toLowerCase().includes(location.toLowerCase())
    );
    setFilteredJobs(filtered);
  };

  return (
    <div className="job-list-container">
      <SearchBar onFilterChange={handleFilterChange} />
      <div className="job-list">
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job) => (
            <JobCard key={job.id} {...job} />
          ))
        ) : (
          <p>No jobs found with the given filters.</p>
        )}
      </div>
    </div>
  );
};

export default JobList;
