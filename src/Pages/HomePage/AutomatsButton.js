import React, { useRef, useState, useEffect } from 'react';
import { ArrowIcon } from '../../Components/CustomIcons';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { color } from 'framer-motion';

function AnimateButton({ text1, text2, route, getBtnColor }) {
    const { t } = useTranslation();
    const [position, setPosition] = useState({ x: 0, y: 0, active: false });
    const buttonRef = useRef(null);
    const navigate = useNavigate()

    useEffect(() => {
        // Function to determine if hover effect should be enabled
        const isHoverEnabled = () => window.innerWidth >= 1025;

        const handleMouseMove = (e) => {
            if (!buttonRef.current || !isHoverEnabled()) return;

            const button = buttonRef.current.getBoundingClientRect();
            const x = e.clientX - (button.left + button.width / 2);
            const y = e.clientY - (button.top + button.height / 2);

            const distance = Math.sqrt(x ** 2 + y ** 2);

            if (distance < 200) {
                const strength = Math.max(0.3, 1 - distance / 200);
                setPosition({
                    x: x * strength * 0.4,
                    y: y * strength * 0.4,
                    active: true,
                });
            } else {
                setPosition({ x: 0, y: 0, active: false });
            }
        };

        const handleMouseLeave = () => {
            if (!isHoverEnabled()) return;
            setPosition({ x: 0, y: 0, active: false });
        };

        // Add event listeners only if hover is enabled
        if (isHoverEnabled()) {
            window.addEventListener('mousemove', handleMouseMove);
            window.addEventListener('mouseleave', handleMouseLeave);
        }

        // Handle resize to enable/disable hover effect dynamically
        const handleResize = () => {
            if (isHoverEnabled()) {
                window.addEventListener('mousemove', handleMouseMove);
                window.addEventListener('mouseleave', handleMouseLeave);
            } else {
                window.removeEventListener('mousemove', handleMouseMove);
                window.removeEventListener('mouseleave', handleMouseLeave);
                setPosition({ x: 0, y: 0, active: false }); // Reset position on small screens
            }
        };

        window.addEventListener('resize', handleResize);

        // Cleanup
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseleave', handleMouseLeave);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div onClick={() => route && navigate(route)} className="detection-area animate-buttons" style={styles.detectionArea}>
            {/* Outer Circle Slightly Outside */}
            {position.active && (
                <div
                    style={{
                        ...styles.outerCircle,
                        border: getBtnColor ? '1.5px solid #1A1A1A' : '1.5px solid #fcfcfc',
                        transform: `translate(${position.x * 2.3}px, ${position.y * 2.3}px)`,
                        opacity: 1,
                    }}
                />
            )}

            {/* Main Button */}
            <div
                ref={buttonRef}
                className="animate-button"
                style={{
                    ...styles.button,
                    backgroundColor: position.active ? '#1' : getBtnColor ? getBtnColor : 'transparent',
                    transform: `translate(${position.x}px, ${position.y}px)`,
                    transition: 'transform 0.3s ease-out',
                }}
            >
                <div style={styles.defaultContent}>
                    {position.active ? (
                        <ArrowIcon />
                    ) : (
                        <div style={styles.splitText}>
                            <div className="bodyRegularText1 btn-spac-left" style={styles.leftText}>
                                {text1 ? text1 : t('Home.EXPLORE')}

                            </div>
                            <div className="bodyRegularText1 btn-spac-right" style={styles.rightText}>
                                {text2 ? text2 : t('Home.AUTOMATS')}

                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

const styles = {
    detectionArea: {
        position: 'relative',
        display: 'flex',
        // alignItems: 'center',
        // justifyContent: 'center',
        zIndex: 1,
    },
    button: {
        position: 'relative',
        width: '120px',
        height: '120px',
        borderRadius: '50%',
        border: '1.5px solid #fcfcfc',
        backgroundColor: 'transparent',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fcfcfc',
        cursor: 'pointer',
        zIndex: 2,
    },
    defaultContent: {
        position: 'absolute',
        zIndex: 3,
        fontSize: '20px',
        color: '#00FF00',
        width: '80%',
        textAlign: 'center',
    },
    splitText: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
    },
    leftText: {
        // textAlign: 'left',
        // paddingLeft: '10px',
        color: '#fcfcfc',
    },
    rightText: {
        // textAlign: 'right',
        // paddingRight: '10px',
        marginTop: '4px',
        color: '#fcfcfc',
    },
    outerCircle: {
        position: 'absolute',
        width: '120px', // Same size as main button
        height: '120px',
        borderRadius: '50%',
        border: '1.5px solid #fcfcfc',
        backgroundColor: 'transparent',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transformOrigin: 'center',
        transform: 'scale(1)',
        transition: 'transform 0.3s ease-out, opacity 0.3s ease-out',
        zIndex: 1,
    },
};

export default AnimateButton;