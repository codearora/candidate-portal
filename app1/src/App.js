// App.js
import React, { useEffect, useState } from 'react';
import JobCard from './components/Jobcard2';
import jobsData from './jobs.json'; // Import the downloaded JSON file

const App = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    setJobs(jobsData);
  }, []);

  return (
    <div>
      <h1>Job Listings</h1>
      <div className="job-list">
        {jobs.map(job => (
          <JobCard key={job.jdUid} job={job} />
        ))}
      </div>
    </div>
  );
};

export default App;
