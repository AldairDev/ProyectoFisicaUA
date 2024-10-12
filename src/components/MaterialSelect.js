import React from 'react';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { materials } from '../utils/constants';

const MaterialSelect = ({ value, onChange }) => (
    <Select value={value} onChange={(e) => onChange(e.target.value)}>
        {Object.keys(materials).map((mat) => (
            <MenuItem key={mat} value={mat}>
                {mat}
            </MenuItem>
        ))}
    </Select>
);

export default MaterialSelect;
