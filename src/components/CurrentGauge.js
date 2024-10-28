import React from 'react';
import { LinearProgress, Typography } from '@mui/material';

const CurrentGauge = ({ current }) => {
    const maxCurrent = 1000;
    const percentage = Math.min((current / maxCurrent) * 100, 100);

    const getColor = () => {
        if (percentage < 33) return 'success';
        if (percentage < 66) return 'warning';
        return 'error';
    };

    return (
        <>
            <Typography variant="h6">Indicador de Corriente:</Typography>
            <LinearProgress
                variant="determinate"
                value={percentage}
                color={getColor()}
                style={{ height: '10px', marginBottom: '10px' }}
            />
            <Typography>{percentage.toFixed(2)}% de corriente máxima</Typography>
        </>
    );
};

export default CurrentGauge;
