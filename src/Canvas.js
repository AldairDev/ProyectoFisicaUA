import React, { useState } from "react";
import { useDrop } from "react-dnd";

function Canvas({ components, connections, onDrop, onConnect }) {
    const [selectedComponent, setSelectedComponent] = useState(null);

    const [, drop] = useDrop(() => ({
        accept: "component",
        drop: (item, monitor) => onDrop(item, monitor),
    }));

    const handleComponentClick = (id) => {
        if (selectedComponent === null) {
            setSelectedComponent(id);
        } else {
            onConnect(selectedComponent, id);
            setSelectedComponent(null);
        }
    };

    return (
        <div ref={drop} className="canvas">
            {/* Dibujar las conexiones usando SVG */}
            <svg className="connections">
                {connections.map((connection, index) => {
                    const fromComponent = components.find((c) => c.id === connection.fromId);
                    const toComponent = components.find((c) => c.id === connection.toId);

                    if (fromComponent && toComponent) {
                        return (
                            <line
                                key={index}
                                x1={fromComponent.x + 50}
                                y1={fromComponent.y + 10}
                                x2={toComponent.x + 50}
                                y2={toComponent.y + 10}
                                stroke="black"
                                strokeWidth="2"
                            />
                        );
                    }
                    return null;
                })}
            </svg>

            {/* Dibujar los componentes */}
            {components.map((component, index) => (
                <div
                    key={index}
                    className={`component-in-canvas ${component.type}`}
                    style={{
                        position: "absolute",
                        left: component.x,
                        top: component.y,
                    }}
                    onClick={() => handleComponentClick(component.id)}
                >
                    {component.type === "resistor"
                        ? `Resistor (${component.value})`
                        : component.type === "voltage"
                            ? `Voltaje (${component.value})`
                            : `Capacitor (${component.value})`}
                </div>
            ))}
        </div>
    );
}

export default Canvas;
