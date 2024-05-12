// src/App.js
import React, { useEffect, useState } from 'react';
import JobCard from './components/Jobcard2';

const App = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch('https://gist.githubusercontent.com/anubhavmalik/1733c9cec2aebde6ecd5bef8b906a690/raw/30d5c6f97b98731a7b76f597981a6f72a1a057ed/sample_jobs.json')
      .then(response => response.json())
      .then(data => {
        console.log('Fetched data:', data); // Log fetched data to the console
        setJobs(data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <p>Hello</p>
      {/* {jobs.map(job => (
        <JobCard key={job.id} job={job} />
      ))} */}
    </div>
  );
};

export default App;
