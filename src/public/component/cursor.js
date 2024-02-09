// Cursor.js
import React, { useEffect, useState } from 'react';
import './curs or.css';

const Cursor = () => {
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const updateCursorPosition = (e) => {
            setCursorPosition({ x: e.pageX, y: e.pageY });
        };

        document.addEventListener('mousemove', updateCursorPosition);

        return () => {
            document.removeEventListener('mousemove', updateCursorPosition);
        };
    }, []);

    return (
        <div
            className={`cursor ${isHovered ? 'hovered' : ''}`}
            style={{ left: `${cursorPosition.x}px`, top: `${cursorPosition.y}px` }}
        />
    );
};

export default Cursor;
