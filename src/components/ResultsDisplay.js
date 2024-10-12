import React from 'react';
import Typography from '@mui/material/Typography';

const ResultsDisplay = ({ resistance, current }) => (
    <>
        <Typography>Resistencia: {resistance.toFixed(2)} Ω</Typography>
        <Typography>Corriente: {current.toFixed(2)} A</Typography>
    </>
);

export default ResultsDisplay;
