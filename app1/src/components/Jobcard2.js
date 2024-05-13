// JobCard.js
import React from 'react';

const JobCard = ({ job }) => {
    return (
        <div className="job-card">
            <img src={job.logoUrl} alt={job.companyName} />
            <div className="job-details">
                <h2>{job.companyName}</h2>
                <p><strong>Job Role:</strong> {job.jobRole}</p>
                <p><strong>Location:</strong> {job.location}</p>
                <p><strong>Salary Range:</strong> {job.minJdSalary} - {job.maxJdSalary} {job.salaryCurrencyCode}</p>
                <p><strong>Experience Range:</strong> {job.minExp || 'N/A'} - {job.maxExp || 'N/A'} years</p>
                <p><strong>Job Details:</strong> {job.jobDetailsFromCompany}</p>
            </div>
        </div>
    );
};

export default JobCard;
