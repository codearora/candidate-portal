// App.js
import React, { useEffect, useState } from 'react';
import JobCard from './components/Jobcard2';
import jobsData from './jobs.json'; // Import the downloaded JSON file

const App = () => {
  const [jobs, setJobs] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    setJobs(jobsData);
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredJobs = jobs.filter(job => {
    return (
      job.companyName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.jobRole.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.location.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <div>
      <h1>Job Listings</h1>
      <input
        type="text"
        placeholder="Search jobs"
        value={searchTerm}
        onChange={handleSearch}
      />
      <div className="job-list">
        {filteredJobs.map(job => (
          <JobCard key={job.jdUid} job={job} />
        ))}
      </div>
    </div>
  );
};

export default App;
