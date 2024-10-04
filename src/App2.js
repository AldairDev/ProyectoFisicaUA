import React, { useState, useEffect } from 'react';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from 'recharts';
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import LinearProgress from '@mui/material/LinearProgress';

const materials = {
    Plata: { resistivity: 1.59e-8 },
    Cobre: { resistivity: 1.68e-8 },
    Oro: { resistivity: 2.44e-8 },
    Aluminio: { resistivity: 2.65e-8 },
    Hierro: { resistivity: 9.71e-8 },
    Plomo: { resistivity: 22.00e-8 },
    Goma: { resistivity: 1e13 }

};

const ConductivitySimulator = () => {
    const [material, setMaterial] = useState('Plata');
    const [voltage, setVoltage] = useState(5);
    const [length, setLength] = useState(1);
    const [current, setCurrent] = useState(0);
    const [resistance, setResistance] = useState(0);

    useEffect(() => {
        calculateCurrent(); // Recalcular cuando cambie el material o los parámetros
    }, [material, voltage, length]);

    const calculateResistance = () => {
        const resistivity = materials[material].resistivity;
        const area = 1e-6; // Área en m² (se puede ajustar)
        const resistance = (resistivity * length) / area; // R = ρL/A
        setResistance(resistance);
        return resistance;
    };

    const calculateCurrent = () => {
        const resistance = calculateResistance();
        const current = voltage / resistance; // I = V/R
        setCurrent(current);
    };

    const handleMaterialChange = (event) => {
        setMaterial(event.target.value);
    };

    const handleVoltageChange = (event, newValue) => {
        setVoltage(newValue);
    };

    const handleLengthChange = (event, newValue) => {
        setLength(newValue);
    };

    const generateData = () => {
        return [
            { name: 'Resistencia', value: resistance },
            { name: 'Corriente', value: current },
        ];
    };

    const getCurrentPercentage = () => {
        // Suponemos un máximo de corriente arbitrario para la escala (1000 A)
        const maxCurrent = 1000;
        const percentage = (current / maxCurrent) * 100;
        return Math.min(percentage, 100); // Limitar al 100%
    };

    return (
        <div style={{ width: '100%', height: 'auto' }}>
            <h2>Simulador de Conducción Eléctrica en Materiales</h2>

            {/* Selección de Material */}
            <Typography id="material-select" gutterBottom>
                Seleccionar Material
            </Typography>
            <Select value={material} onChange={handleMaterialChange}>
                {Object.keys(materials).map((mat) => (
                    <MenuItem key={mat} value={mat}>
                        {mat}
                    </MenuItem>
                ))}
            </Select>

            {/* Voltaje Slider */}
            <Typography id="voltage-slider" gutterBottom>
                Voltaje (V): {voltage}V
            </Typography>
            <Slider
                value={voltage}
                onChange={handleVoltageChange}
                aria-labelledby="voltage-slider"
                min={0}
                max={10}
                step={0.1}
            />

            {/* Longitud Slider */}
            <Typography id="length-slider" gutterBottom>
                Longitud (m): {length}m
            </Typography>
            <Slider
                value={length}
                onChange={handleLengthChange}
                aria-labelledby="length-slider"
                min={0.1}
                max={10}
                step={0.1}
            />

            {/* Resultados */}
            <Typography variant="h6">Resultados:</Typography>
            <Typography>Resistencia: {resistance.toFixed(2)} Ω</Typography>
            <Typography>Corriente: {current.toFixed(2)} A</Typography>

            {/* Indicador Visual de Corriente */}
            <Typography variant="h6">Indicador de Corriente:</Typography>
            <LinearProgress
                variant="determinate"
                value={getCurrentPercentage()}
                style={{ height: '10px', marginBottom: '20px' }}
            />
            <Typography>
                {getCurrentPercentage().toFixed(2)}% de corriente máxima (escala relativa)
            </Typography>

            {/* Gráfico de Resultados */}
            <ResponsiveContainer width="100%" height={300}>
                <LineChart data={generateData()}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="value" stroke="#8884d8" />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default ConductivitySimulator;
