import React from 'react';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';

const getCurrentPercentage = (current) => {
    const maxCurrent = 1000;
    return Math.min((current / maxCurrent) * 100, 100);
};

const getProgressBarColor = (percentage) => {
    if (percentage < 33) return 'green';
    if (percentage < 66) return 'yellow';
    return 'red';
};

const CurrentIndicator = ({ current }) => {
    const percentage = getCurrentPercentage(current);

    return (
        <>
            <LinearProgress
                variant="determinate"
                value={percentage}
                sx={{
                    '& .MuiLinearProgress-bar': {
                        backgroundColor: getProgressBarColor(percentage),
                    },
                }}
                style={{ height: '10px', marginBottom: '20px' }}
            />
            <Typography>{percentage.toFixed(2)}% de corriente máxima</Typography>
        </>
    );
};

export default CurrentIndicator;
