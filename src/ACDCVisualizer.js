import React, { useState } from "react";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';

const ACDCVisualizer = () => {
    const [amplitude, setAmplitude] = useState(1); // Amplitud de CA
    const [frequency, setFrequency] = useState(1); // Frecuencia de CA
    const [resistance, setResistance] = useState(1); // Resistencia en ohmios

    const generateData = () => {
        const data = [];
        const points = 100;
        const voltage = 5; // Voltaje constante para simplificar

        for (let i = 0; i < points; i++) {
            const time = (i / points) * (2 * Math.PI);
            const acValue = amplitude * Math.sin(frequency * time); // Corriente alterna
            const dcCurrent = voltage / resistance; // Corriente continua basada en la resistencia
            data.push({ time: i, CA: acValue, CC: dcCurrent });
        }
        return data;
    };

    return (
        <div style={{ width: "100%", height: 500 }}>
            <h2>Visualizador de Corriente Alterna vs. Corriente Continua</h2>

            {/* Sliders para controlar amplitud, frecuencia y resistencia */}
            <div style={{ marginBottom: 20 }}>
                <Typography id="amplitude-slider" gutterBottom>
                    Amplitud CA
                </Typography>
                <Slider
                    value={amplitude}
                    onChange={(e, newValue) => setAmplitude(newValue)}
                    aria-labelledby="amplitude-slider"
                    min={0} max={5} step={0.1}
                />
                <Typography id="frequency-slider" gutterBottom>
                    Frecuencia CA
                </Typography>
                <Slider
                    value={frequency}
                    onChange={(e, newValue) => setFrequency(newValue)}
                    aria-labelledby="frequency-slider"
                    min={0} max={10} step={0.1}
                />
                <Typography id="resistance-slider" gutterBottom>
                    Resistencia (Ω)
                </Typography>
                <Slider
                    value={resistance}
                    onChange={(e, newValue) => setResistance(newValue)}
                    aria-labelledby="resistance-slider"
                    min={1} max={100} step={1}
                />
            </div>

            <ResponsiveContainer>
                <LineChart data={generateData()}>
                    <CartesianGrid strokeDasharray="3 3"/>
                    <br/>
                    <br/>
                    <XAxis dataKey="time" label={{value: "Tiempo", position: "top"}}/>
                    <YAxis label={{value: "Corriente (A)", angle: -90, position: "insideLeft"}}/>
                    <Tooltip/>
                    <Legend/>
                    <Line type="monotone" dataKey="CA" stroke="#ff7300" activeDot={{r: 8}}/>
                    <Line type="monotone" dataKey="CC" stroke="#387908"/>
                    <XAxis dataKey="time" label={{value: "Tiempo", position: "top"}}/>
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default ACDCVisualizer;
