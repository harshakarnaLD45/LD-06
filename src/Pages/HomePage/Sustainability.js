import React, { useEffect, useRef, useState } from 'react';
import { Box, List, ListItem, ListItemText, Typography } from '@mui/material';
import gsap from 'gsap';
import AnimateButton from '../../Components/CommonComponents/AnimateButton';
import SustainabilityBgImg from '../../assets/Home/sustainablity-background.svg'
import { SustainabilityIcon1, SustainabilityIcon2, SustainabilityIcon3, SustainabilityIcon4, SustainabilityIcon5 } from '../../Components/CustomIcons';
import ScrollMaskText from '../../Components/CommonComponents/ScrollMaskText';
import ScrollMaskHeadings from '../../Components/CommonComponents/ScrollMaskHeadings';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

const Sustainability = () => {
    const { t } = useTranslation();
    const { lang } = useParams();

    const features = [
        { icon: SustainabilityIcon1, text: t('Home.sustainabilitybenifits1') },
        { icon: SustainabilityIcon2, text: t('Home.sustainabilitybenifits2') },
        { icon: SustainabilityIcon3, text: t('Home.sustainabilitybenifits3') },
        { icon: SustainabilityIcon4, text: t('Home.sustainabilitybenifits4') },
        { icon: SustainabilityIcon5, text: t('Home.sustainabilitybenifits5') },
    ];

    const scrollContainerRef = useRef();
    const leftSectionRef = useRef();
    const rightSectionRef = useRef();

    useEffect(() => {
        let timeoutId = null;

        const updateHeight = () => {
            if (!leftSectionRef.current || !rightSectionRef.current) return;

            const newHeight = leftSectionRef.current.offsetHeight;

            // Only update if there's a significant difference (avoid micro-changes)
            if (newHeight > 0) {
                // Update the right section height directly via CSS (no state update.)
                rightSectionRef.current.style.height = `${newHeight}px`;
                if (scrollContainerRef.current) {
                    scrollContainerRef.current.style.height = `${newHeight}px`;
                }
            }
        };

        const debouncedUpdate = () => {
            if (timeoutId) clearTimeout(timeoutId);
            timeoutId = setTimeout(updateHeight, 150);
        };

        const resizeObserver = new ResizeObserver(debouncedUpdate);

        // Use a more stable approach - wait for the initial render
        requestAnimationFrame(() => {
            if (leftSectionRef.current) {
                resizeObserver.observe(leftSectionRef.current);
                updateHeight(); // Initial update
            }
        });

        return () => {
            resizeObserver.disconnect();
            if (timeoutId) clearTimeout(timeoutId);
        };
    }, []); // Remove all dependencies to prevent re-creation

    useEffect(() => {
        const ctx = gsap.context(() => {
            const container = scrollContainerRef.current;
            if (!container) return;

            // Wait for initial layout to settle
            requestAnimationFrame(() => {
                // Get height of a single loop
                const singleLoopHeight = container.scrollHeight / 2;

                // Only animate if we have valid height
                if (singleLoopHeight > 0) {
                    gsap.to(container, {
                        y: `-=${singleLoopHeight}`,
                        ease: 'none',
                        duration: 40,
                        repeat: -1,
                        modifiers: {
                            y: gsap.utils.unitize((y) => parseFloat(y) % singleLoopHeight),
                        },
                    });
                }
            });
        });

        return () => ctx.revert();
    }, []); // Remove leftHeight dependency to prevent re-initialization

    // Duplicate the features list to simulate infinite scroll
    const doubledFeatures = [...features, ...features, ...features, ...features];

    return (
        <Box className='section-container'
            sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                justifyContent: "space-between",
                // minHeight: 400,
                backgroundImage: `url(${SustainabilityBgImg})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                gap: { md: 6 },
                overflow: 'hidden',
            }}
        >
            {/* Left Side */}
            <Box ref={leftSectionRef} className='sustain-sec' sx={{
                flex: 1, py: { xs: 5, sm: 8, md: 5 }, display: 'flex', flexDirection: 'column', justifyContent: 'center'
            }}>

                <List>
                    <ListItem sx={{ p: 0, alignItems: 'center' }}>
                        <Box
                            component="span"
                            sx={{
                                display: 'inline-block',
                                width: '6px',
                                height: '6px',
                                borderRadius: '50%',
                                backgroundColor: '#444',
                                mr: 1.5,
                            }}
                            className='bodyRegularText4'
                        />
                        <ListItemText
                            primary={t('Home.sustainability')}
                            sx={{ '& .MuiListItemText-primary': { color: '#444', fontSize: '16px', fontWeight: 400 } }}
                        />
                    </ListItem>
                </List>

                <ScrollMaskHeadings text={t('Home.sustainabilityHeading')} textColor='#1A1A1A' />

                <Box sx={{ mb: 2, mt: { xs: '8px', sm: '8px', md: '16px' } }}>
                    <ScrollMaskText text={t('Home.sustainabilityText')} textColor='#444'
                    />
                </Box>
                {/*<AnimateButton text1={t('footer.footergetIn')} text2={t('footer.footertouch')} getBtnColor='#161616' route={`/${lang}/contact`} />*/}
            </Box>

            {/* Right Side: Infinite Scroll */}
            <Box
                ref={rightSectionRef}
                sx={{
                    flex: 1,
                    overflow: 'hidden',
                    position: 'relative',
                    height: { xs: 200, sm: 200, md: 400 }, // Use fixed default height
                    maxWidth: 800,
                }}
            >
                <Box ref={scrollContainerRef} sx={{ height: '100%' }}>
                    {doubledFeatures.map((item, i) => (
                        <Box
                            key={`feature-${i}`}
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                backgroundColor: '#B3F5A3',
                                borderRadius: 150,
                                p: 1,
                                mb: { xs: 1, sm: 2, md: 3 },
                                gap: { xs: 2, sm: 3, md: 6 },
                            }}
                        >
                            <Box className='sustain-icons'>
                                <item.icon className="sustainability-icon" />
                            </Box>
                            <Typography variant="body1" className='bodyRegularText3' color='#444'>
                                {item.text}
                            </Typography>
                        </Box>
                    ))}
                </Box>
            </Box>
        </Box>
    );
};

export default Sustainability;
