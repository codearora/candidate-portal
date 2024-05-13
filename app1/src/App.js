// App.js
import React, { useEffect, useState } from 'react';
import JobCard from './components/Jobcard2';
import jobsData from './jobs.json'; // Import the downloaded JSON file

const App = () => {
  const [jobs, setJobs] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedJobRole, setSelectedJobRole] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedExp, setSelectedExp] = useState('');
  const [selectedBasePay, setSelectedBasePay] = useState('');

  useEffect(() => {
    setJobs(jobsData);
  }, []);

  const jobRoles = [...new Set(jobs.map(job => job.jobRole))];
  const locations = [...new Set(jobs.map(job => job.location))];
  const experiences = Array.from({ length: 10 }, (_, i) => i + 1); // Experience values from 1 to 10
  const basePays = [...new Set(jobs.map(job => job.minJdSalary !== null ? job.minJdSalary : 0))]; // Minimum base pay values, replace null with 0

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleJobRoleChange = (event) => {
    setSelectedJobRole(event.target.value);
  };

  const handleLocationChange = (event) => {
    setSelectedLocation(event.target.value);
  };

  const handleExpChange = (event) => {
    setSelectedExp(event.target.value);
  };

  const handleBasePayChange = (event) => {
    setSelectedBasePay(event.target.value);
  };

  const filteredJobs = jobs.filter(job => {
    return (
      job.companyName.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedJobRole === '' || job.jobRole.toLowerCase() === selectedJobRole.toLowerCase()) &&
      (selectedLocation === '' || job.location.toLowerCase() === selectedLocation.toLowerCase()) &&
      (selectedExp === '' || (job.minExp <= parseInt(selectedExp) && job.maxExp >= parseInt(selectedExp))) &&
      (selectedBasePay === '' || (job.minJdSalary <= parseInt(selectedBasePay) && job.maxJdSalary >= parseInt(selectedBasePay)))
    );
  });

  return (
    <div>
      <h1>Job Listings</h1>
      <input
        type="text"
        placeholder="Search by company name"
        value={searchTerm}
        onChange={handleSearchTermChange}
      />
      <select value={selectedJobRole} onChange={handleJobRoleChange}>
        <option value="">Select job role</option>
        {jobRoles.filter(role => role).map((role, index) => (
          <option key={index} value={role}>{role}</option>
        ))}
      </select>
      <select value={selectedLocation} onChange={handleLocationChange}>
        <option value="">Select location</option>
        {locations.filter(location => location).map((location, index) => (
          <option key={index} value={location}>{location}</option>
        ))}
      </select>
      <select value={selectedExp} onChange={handleExpChange}>
        <option value="">Select experience</option>
        {experiences.map((exp, index) => (
          <option key={index} value={exp}>{exp}</option>
        ))}
      </select>
      <select value={selectedBasePay} onChange={handleBasePayChange}>
        <option value="">Select base pay</option>
        {basePays.map((pay, index) => (
          <option key={index} value={pay}>{pay}</option>
        ))}
      </select>
      <div className="job-list">
        {filteredJobs.map(job => (
          <JobCard key={job.jdUid} job={job} />
        ))}
      </div>
    </div>
  );
};

export default App;
