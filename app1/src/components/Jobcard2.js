// src/components/JobCard.js
import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const JobCard = ({ job }) => {
    return (
        <Card>
            <CardContent>
                <Typography variant="h6" component="h2">
                    {job.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {job.company}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    Location: {job.location}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    Experience: {job.experience}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    Description: {job.description}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default JobCard;
