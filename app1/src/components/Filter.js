// src/components/Filter.js
import React from 'react';
import { TextField } from '@mui/material';

const Filter = ({ label, value, onChange }) => {
    return (
        <TextField
            label={label}
            value={value}
            onChange={e => onChange(e.target.value)}
        />
    );
};

export default Filter;
