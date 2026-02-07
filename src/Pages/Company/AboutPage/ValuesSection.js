import { Box, Card, Typography } from "@mui/material";
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
    ValuesIcon1,
    ValuesIcon2,
    ValuesIcon3,
    ValuesIcon4,
} from "../../../Components/CustomIcons";
import { useTranslation } from "react-i18next";
import './AboutPage.css';

const ValuesSection = () => {
    const { t } = useTranslation();
    const sectionRef = useRef(null);
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [hasAnimated, setHasAnimated] = useState(false);

    const maintenanceServices = [
        {
            valueIcon: <ValuesIcon1 />,
            title: t('about.ValueTitle1'),
            desc: t('about.ValuesubTitle1'),
            rotation: -10.54,
            position: { top: "5%", left: "-15%" },
        },
        {
            valueIcon: <ValuesIcon2 />,
            title: t('about.ValueTitle2'),
            desc: t('about.ValuesubTitle2'),
            rotation: 15,
            position: { top: "15%", left: "10%" },
        },
        {
            valueIcon: <ValuesIcon3 />,
            title: t('about.ValueTitle3'),
            desc: t('about.ValuesubTitle3'),
            rotation: -22.85,
            position: { top: "15%", left: "40%" },
        },
        {
            valueIcon: <ValuesIcon4 />,
            title: t('about.ValueTitle4'),
            desc: t('about.ValuesubTitle4'),
            rotation: 18.33,
            position: { top: "20%", left: "65%" },
        },
    ];

  useEffect(() => {
    const currentSection = sectionRef.current;

    if (!currentSection) return;

    const observer = new IntersectionObserver(
        (entries) => {
            const entry = entries[0];
            if (entry.isIntersecting && !hasAnimated) {
                setIsCollapsed(true);
                setHasAnimated(true);
            }
        },
        { threshold: 0.3 }
    );

    observer.observe(currentSection);

    return () => {
        observer.unobserve(currentSection);
    };
}, [hasAnimated]);


    return (
        <Box
            className="section-container"
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
                transition: "all 0.5s ease",
                py: { xs: 0 },
            }}
        >
            <Box
                className="maintenance-containers1"
                sx={{
                    position: "relative",
                    width: "90%",
                    mt: { xs: -1,  md: -3 },
                      minHeight: { xs: "1400px", md: "605px" },
                    '@media (min-width: 475px)': {
                        minHeight: '800px'
                    }, // default
                    
                    
                }}
            >
                <Typography
                    variant="h2"
                    className="headings-h2"
                    sx={{ color: "#FCFCFC", textAlign: "center",mb:2 }}
                >
                    {t('about.OurValues')}
                </Typography>

                <Typography
                    variant="body1"
                    className="bodyRegularText3"
                    sx={{ color: "#C2C2C4", textAlign: "center" }}
                >
                    {t('about.OurValuesubTilte')}
                </Typography>

                <Box
                    ref={sectionRef}
                    sx={{
                        position: { xs: "relative", md: "absolute" },
                        width: isCollapsed ? "100%" : "80%",
                        maxWidth: { xs:  isCollapsed ? "100%" : "80%", md: isCollapsed ? "auto" : "1200px" },
                        top: { xs: "50px", sm: "60px", md: isCollapsed ? "200px" : "100px" },
                        left: "50%",
                        transform: "translateX(-50%)",
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "center",
                        gap: { xs: 2, md: 1 },
                        transition: "all 0.5s ease",
                    }}
                >
                    {maintenanceServices.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: -80, rotate: service.rotation }}
                            animate={
                                isCollapsed
                                    ? { opacity: 1, y: 0, rotate: 0 }
                                    : { opacity: 0, y: -80 }
                            }
                            transition={{
                                duration: 0.8,
                                delay: index * 0.25,
                                ease: "easeOut",
                            }}
                            className="val-motion-effect"
                            style={{
                                position:
                                    isCollapsed || window.innerWidth < 900
                                        ? "relative"
                                        : "absolute",
                                top:
                                    isCollapsed || window.innerWidth < 900
                                        ? "auto"
                                        : service.position.top,
                                left:
                                    isCollapsed || window.innerWidth < 900
                                        ? "auto"
                                        : service.position.left,
                                width: "100%",
                                zIndex: 1,
                            }}
                        >
                            <Card
                                sx={{
                                    width:  "100%" ,
                                    height: { xs: "300px", sm: "350px", md: "426px" },
                                    bgcolor: "#161616",
                                    borderRadius: "24px",
                                    overflow: "hidden",
                                    border: "1px solid #525252",
                                    transition: "all 0.5s ease",
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "flex-end",
                                    marginBottom: { xs: "1rem", md: "0" },
                                }}
                            >
                                <Box
                                    sx={{
                                        position: "absolute",
                                        top: 16,
                                        left: 16,
                                        padding: { xs: 0, sm: 0, md: "8px" },
                                    }}
                                >
                                    {service.valueIcon}
                                </Box>

                                <Box className='crads-title-sec'
                                    sx={{
                                        
                                        position: "absolute",
                                        display: "flex",
                                        flexDirection: "column",
                                    }}
                                >
                                    <Typography
                                        variant="body1" id="value_title"
                                        className="bodyRegularText2 "
                                        sx={{ color: "#FCFCFC" }}
                                    >
                                        {service.title}
                                    </Typography>
                                    <Typography
                                        variant="body1"
                                        className="bodyRegularText3"
                                        sx={{ color: "#C2C2C4" }}
                                    >
                                        {service.desc}
                                    </Typography>
                                </Box>
                            </Card>
                        </motion.div>
                    ))}
                </Box>
            </Box>
        </Box>
    );
};

export default ValuesSection;