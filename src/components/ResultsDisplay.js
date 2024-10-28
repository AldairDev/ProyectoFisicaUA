import React from 'react';
import { Typography } from '@mui/material';

const ResultsDisplay = ({ resistance, current }) => (
    <>
        <Typography variant="h4">Resultados:</Typography>
        <Typography>Resistencia: {resistance.toFixed(2)} Ω</Typography>
        <Typography>Corriente: {current.toFixed(2)} A</Typography>
    </>
);

export default ResultsDisplay;
