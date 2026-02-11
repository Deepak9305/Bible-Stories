import React from 'react';

export default function Spinner() {
    return (
        <div
            style={{
                width: 32,
                height: 32,
                borderRadius: "50%",
                border: "3px solid #2a251d",
                borderTopColor: "#d4a574",
                animation: "spin 0.8s linear infinite"
            }}
        />
    );
}
