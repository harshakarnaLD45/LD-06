import React, { useEffect, useRef, useState } from "react";
import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

const GradientMaskText = () => {
    const { t } = useTranslation();
    const containerRef = useRef(null);
    const [maskPosition, setMaskPosition] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);
    const [showMask, setShowMask] = useState(false);
    const timeoutRef = useRef(null);

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (!containerRef.current) return;

            const rect = containerRef.current.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            setMaskPosition({ x, y });
        };

        const el = containerRef.current;
        if (el && isHovered) {
            el.addEventListener("mousemove", handleMouseMove);
        }

        return () => {
            if (el) el.removeEventListener("mousemove", handleMouseMove);
        };
    }, [isHovered]);

    const handleMouseEnter = () => {
        // Cancel any existing timeout
        clearTimeout(timeoutRef.current);
        setIsHovered(true);
        setShowMask(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        // Delay removing mask so opacity can fade out first
        timeoutRef.current = setTimeout(() => {
            setShowMask(false);
        }, 300); // match the opacity transition duration
    };

    return (
        <div
            ref={containerRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{
                position: "relative",
                display: "inline-block",
                cursor: "none",
            }}
        >
            {/* Base Text */}
            <Typography
                data-cursor="hover"
                variant="h1"
                className="headings-h1 maintext"
                sx={{
                    color: "#FCFCFC",
                    position: "relative",
                    zIndex: 1,
                    width: { xs: "100%", sm: "100%", md: "100%" },
                }}
            >
                {t("Home.mainHeading")}
            </Typography>

            {/* Gradient Reveal Text */}
            <Typography
                variant="h1"
                className="headings-h1 maintext"
                sx={{
                    color: "transparent",
                    background: "linear-gradient(to right, #7FEE64, #FA7854)",
                    WebkitBackgroundClip: "text",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    zIndex: 2,
                    pointerEvents: "none",
                    width: { xs: "100%", sm: "100%", md: "100%" },
                    opacity: isHovered ? 1 : 0,
                    transition: "opacity 0.3s ease-out",
                    maskImage: showMask
                        ? `radial-gradient(circle 250px at ${maskPosition.x}px ${maskPosition.y}px, white 0%, transparent 100%)`
                        : "none",
                    WebkitMaskImage: showMask
                        ? `radial-gradient(circle 180px at ${maskPosition.x}px ${maskPosition.y}px, white 0%, transparent 100%)`
                        : "none",
                }}
            >
                {t("Home.mainHeading")}
            </Typography>
        </div>
    );
};

export default GradientMaskText;
