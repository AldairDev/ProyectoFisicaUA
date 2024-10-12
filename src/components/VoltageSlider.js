import React from 'react';
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';

const VoltageSlider = ({ value, onChange }) => (
    <>
        <Typography>Voltaje (V): {value}V</Typography>
        <Slider
            value={value}
            min={0}
            max={10}
            step={0.1}
            onChange={(e, newValue) => onChange(newValue)}
        />
    </>
);

export default VoltageSlider;
