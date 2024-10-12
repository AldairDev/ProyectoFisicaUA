import React from 'react';
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';

const LengthSlider = ({ value, onChange }) => (
    <>
        <Typography>Longitud (m): {value}m</Typography>
        <Slider
            value={value}
            min={0.1}
            max={10}
            step={0.1}
            onChange={(e, newValue) => onChange(newValue)}
        />
    </>
);

export default LengthSlider;
