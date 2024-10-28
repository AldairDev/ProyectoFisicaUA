import React, { useState, useEffect, useCallback } from 'react';
import MaterialSelect from './MaterialSelector';
import VoltageSlider from './VoltageSlider';
import LengthSlider from './LengthSlider';
import ResultsDisplay from './ResultsDisplay';
import CurrentIndicator from './CurrentGauge';
// import ChartDisplay from './ChartDisplay';
import AreaSelector from './AreaSelector';
import { materials, areas } from '../utils/constants';
import {Typography} from "@mui/material";

const ConductivitySimulator = () => {
    const [material, setMaterial] = useState('Plata');
    const [voltage, setVoltage] = useState(5);
    const [length, setLength] = useState(1);
    const [current, setCurrent] = useState(0);
    const [resistance, setResistance] = useState(0);
    const [area, setArea] = useState('10 AWG'); // Valor inicial: 10 AWG

    // Memoriza la función para que no cambie en cada render
    const calculateResistance = useCallback(() => {
        const resistivity = materials[material].resistivity;
        const resistance = (resistivity * length) /  areas[area].value;
        setResistance(resistance);
        return resistance;
    }, [material, length, area]);  // Solo se recalcula si cambian 'material' o 'length'

    const calculateCurrent = useCallback(() => {
        const resistance = calculateResistance();
        const current = voltage / resistance;
        setCurrent(current);
    }, [voltage, calculateResistance]);  // Incluye 'voltage' y la función memoizada

    useEffect(() => {
        calculateCurrent();  // Usa la función memoizada
    }, [material, voltage, length, calculateCurrent,area]);  // Añade 'calculateCurrent' como dependencia

    return (
        <>
            <Typography align='center' variant='h2'>Calculadora de conductividad </Typography>
            <MaterialSelect value={material} onChange={setMaterial} />
            <AreaSelector value={area} onChange={setArea} />
            <VoltageSlider value={voltage} onChange={setVoltage} />
            <LengthSlider value={length} onChange={setLength} />
            <ResultsDisplay resistance={resistance} current={current} />
            <CurrentIndicator current={current} />
            {/*<ChartDisplay resistance={resistance} current={current} />*/}
        </>
    );
};

export default ConductivitySimulator;
