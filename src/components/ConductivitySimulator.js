import React, { useState, useEffect } from 'react';
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

    useEffect(() => {
        calculateCurrent();
    }, [material, voltage, length]);

    const calculateResistance = () => {
        const resistivity = materials[material].resistivity;
        const area = 1e-6;
        const resistance = (resistivity * length) / area;
        setResistance(resistance);
        return resistance;
    };

    const calculateCurrent = () => {
        const resistance = calculateResistance();
        const current = voltage / resistance;
        setCurrent(current);
    };

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
