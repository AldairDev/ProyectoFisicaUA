import React from "react";
import { useDrag } from "react-dnd";

function Component({ type, value }) {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: "component",
        item: { type, value },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    }));

    const handleCustomize = () => {
        const newValue = prompt(`Introduce el valor para ${type}:`, value);
        return newValue || value;
    };

    return (
        <div
            ref={drag}
            className="component"
            style={{
                opacity: isDragging ? 0.5 : 1,
                cursor: "move",
            }}
            onClick={handleCustomize}
        >
            {type === "resistor" ? `Resistor (${value})` : type === "voltage" ? `Fuente de Voltaje (${value})` : `Capacitor (${value})`}
        </div>
    );
}

export default Component;
