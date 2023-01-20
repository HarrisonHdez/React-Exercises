import React, { useState, useEffect } from 'react';
export const RelojApp = () => {
    const [time, setTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        const interval = setInterval(() => {
        setTime(new Date().toLocaleTimeString());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="clock-container">
            <div className="clock">
                <h1 className="title">Hora actual</h1>
                <p className="hours">{time}</p>
            </div>
        </div>
    );
}

