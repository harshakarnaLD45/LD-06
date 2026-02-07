import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const CursorPointer = styled.div.attrs(props => ({
    style: {
        left: `${props.x}px`,
        top: `${props.y}px`,
        width: props.hovered ? '48px' : '12px',
        height: props.hovered ? '48px' : '12px',
    }
}))`
    background-color: white;
    position: fixed;
    border-radius: 100%;
    mix-blend-mode: difference;
    pointer-events: none;
    transform: translate(-50%, -50%);
    z-index: 9999999;
    transition: width 0.2s ease, height 0.2s ease;
`;

const CustomCursor = () => {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    const [hovered, setHovered] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    useEffect(() => {
        if (isMobile) return;

        const handleMouseMove = (e) => {
            setX(e.clientX);
            setY(e.clientY);

            let el = e.target;
            while (el) {
                if (el.dataset?.cursor === 'hover') {
                    setHovered(true);
                    return;
                }
                el = el.parentElement;
            }

            setHovered(false);
        };

        document.addEventListener('mousemove', handleMouseMove);
        return () => document.removeEventListener('mousemove', handleMouseMove);
    }, [isMobile]);

    if (isMobile) return null;

    return <CursorPointer x={x} y={y} hovered={hovered} />;
};

export default CustomCursor;
