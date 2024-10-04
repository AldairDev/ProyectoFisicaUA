// Función para calcular la resistencia total y la corriente total en el circuito
export function calculateCircuit(components, connections) {
    let totalResistance = 0;
    let totalVoltage = 0;

    components.forEach((component) => {
        if (component.type === "resistor") {
            totalResistance += parseFloat(component.value);
        }
        if (component.type === "voltage") {
            totalVoltage += parseFloat(component.value);
        }
    });

    const totalCurrent = totalVoltage / totalResistance;

    return {
        totalResistance: totalResistance.toFixed(2),
        totalCurrent: totalCurrent.toFixed(2),
    };
}
