// components/JobCard.js
import React, { useState } from 'react';

const JobCard = ({ job }) => {
    const [expanded, setExpanded] = useState(false);

    const toggleExpanded = () => {
        setExpanded(!expanded);
    };

    return (
        <div className="job-card">
            <div className="job-header">
                <div className="job-symbol">
                    {job.logoUrl && <img src={job.logoUrl} alt={job.companyName} width="50" height="50" />}
                </div>
                <div className="job-details">
                    <div className="job-name">{job.companyName}</div>
                    <div className="job-info">
                        <span className="job-info-title">Salary:</span> {job.minJdSalary} - {job.maxJdSalary}
                    </div>
                    <div className="job-info">
                        <span className="job-info-title">Job Role:</span> {job.jobRole}
                    </div>
                    <div className="job-info">
                        <span className="job-info-title">Experience:</span> {job.minExp} - {job.maxExp} years
                    </div>
                    <div className="job-info">
                        <span className="job-info-title">Location:</span> {job.location}
                    </div>
                </div>
            </div>
            <div className="job-actions">
                <button className="apply-btn">Apply</button>
                <button className="subscribe-btn">Subscribe to Premium</button>
            </div>
            <div className={`job-description ${expanded ? 'expanded' : ''}`}>
                <p>{job.jobDetailsFromCompany}</p>
                <button onClick={toggleExpanded}>View Less</button>
            </div>
            {!expanded && job.jobDetailsFromCompany.length > 100 && (
                <button className="view-more-btn" onClick={toggleExpanded}>View More</button>
            )}
        </div>
    );
};

export default JobCard;
