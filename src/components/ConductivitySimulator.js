import React, { useState, useEffect, useCallback } from 'react';
import MaterialSelect from './MaterialSelect';
import VoltageSlider from './VoltageSlider';
import LengthSlider from './LengthSlider';
import ResultsDisplay from './ResultsDisplay';
import CurrentIndicator from './CurrentIndicator';
import ChartDisplay from './ChartDisplay';
import { materials } from '../utils/constants';

const ConductivitySimulator = () => {
    const [material, setMaterial] = useState('Plata');
    const [voltage, setVoltage] = useState(5);
    const [length, setLength] = useState(1);
    const [current, setCurrent] = useState(0);
    const [resistance, setResistance] = useState(0);

    // Memoriza la función para que no cambie en cada render
    const calculateResistance = useCallback(() => {
        const resistivity = materials[material].resistivity;
        const area = 1e-6; // Área fija
        const resistance = (resistivity * length) / area;
        setResistance(resistance);
        return resistance;
    }, [material, length]);  // Solo se recalcula si cambian 'material' o 'length'

    const calculateCurrent = useCallback(() => {
        const resistance = calculateResistance();
        const current = voltage / resistance;
        setCurrent(current);
    }, [voltage, calculateResistance]);  // Incluye 'voltage' y la función memoizada

    useEffect(() => {
        calculateCurrent();  // Usa la función memoizada
    }, [material, voltage, length, calculateCurrent]);  // Añade 'calculateCurrent' como dependencia

    return (
        <>
            <MaterialSelect value={material} onChange={setMaterial} />
            <VoltageSlider value={voltage} onChange={setVoltage} />
            <LengthSlider value={length} onChange={setLength} />
            <ResultsDisplay resistance={resistance} current={current} />
            <CurrentIndicator current={current} />
            <ChartDisplay resistance={resistance} current={current} />
        </>
    );
};

export default ConductivitySimulator;
