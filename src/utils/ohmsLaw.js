// src/utils/ohmsLaw.js
const resistivities = {
    copper: 1.68e-8,
    aluminum: 2.82e-8,
    rubber: 1e13,
};

export const calculateResistance = (material, length) => {
    const resistivity = resistivities[material] || 1;
    return resistivity * length;
};

export const calculateCurrent = (voltage, resistance) => {
    return resistance === 0 ? 0 : voltage / resistance;
};
