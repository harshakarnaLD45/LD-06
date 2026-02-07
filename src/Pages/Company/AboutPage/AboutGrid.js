import React from 'react';
import { Box } from '@mui/material';

import Image1 from '../../../assets/About/NAF-about-image (1).png';
import Image2 from '../../../assets/About/NAF-about-image (2).png';
import Image3 from '../../../assets/About/NAF-about-image (3).png';
import Image4 from '../../../assets/About/NAF-about-image (4).png';
import Image5 from '../../../assets/About/NAF-about-image (5).png';
import Image6 from '../../../assets/About/NAF-about-image (6).png';
import Image7 from '../../../assets/About/NAF-about-image (7).png';
import Image8 from '../../../assets/About/NAF-about-image (8).png';
import Image10 from '../../../assets/About/NAF-about-image (10).png';
import Image11 from '../../../assets/About/NAF-about-image (11).png';
import Image12 from '../../../assets/About/NAF-about-image (12).png';
import Image13 from '../../../assets/About/NAF-about-image (13).png';

import Image15 from '../../../assets/About/NAF-about-image (16).png';
// import Video1 from '../../../assets/About/AboutVideo1.mp4';
import Video2 from '../../../assets/About/About-video-2.mp4';

const mediaItems = [
    { type: 'image', src: Image1, alt: "NAF team meeting showcasing vending business success" },
    { type: 'image', src: Image2, alt: "Customer using NAF vending machine touchscreen interface" },
    { type: 'image', src: Image3, alt: "Technician maintaining NAF vending machine hardware components" },
    { type: 'image', src: Image4, alt: 'Franchise partner discussing NAF business opportunities' },
    { type: 'image', src: Image5, alt: 'User interacting with NAF smart vending screen' },
    { type: 'image', src: Image6, alt: 'NAF vending machines installed in high-traffic location' },
    { type: 'image', src: Image7, alt: 'NAF customer support assisting franchise inquiries' },
    { type: 'video', src: Video2, alt: "Behind-the-scenes video of NAF vending operations and setup" },
    { type: 'image', src: Image8, alt: 'A team meeting at NAF Germany, with employees collaborating around a table."' },
    { type: 'image', src: Image10, alt: "Close-up of NAF vending machine product selection panel" },
    { type: 'image', src: Image11, alt: "NAF team demonstrating vending machine features at event", },
    { type: 'image', src: Image12, alt: "User paying at vending machine using mobile wallet", },
    { type: 'image', src: Image13, alt: "Row of NAF vending machines stocked and operational", },
    // { type: 'video', src: Video1 ,alt:  "Introduction video showcasing NAF vending business model", },
    // { type: 'image', src: Image14 },
    { type: 'image', src: Image15, alt: "Customer receiving product from NAF vending machine", },
];

const AboutCarousel = () => {
    return (
        <Box className='section-container' sx={{ overflow: 'hidden', width: '100%', p: 0 }}>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    gap: '20px',
                    width: 'fit-content',
                    animation: 'aboutScroll 100s linear infinite',
                    px: '20px',
                }}
            >
                {[...mediaItems, ...mediaItems, ...mediaItems].map((item, index) => (
                    <Box
                        key={index}
                        sx={{
                            flexShrink: 0,
                            borderRadius: '10px',
                            overflow: 'hidden',
                            display: 'flex',
                            justifyContent: 'flex-start',
                            alignItems: 'flex-start',
                            // Responsive width for different screen sizes
                            width: {
                                xs: '200px', // Mobile size
                                sm: '250px', // Small screen size
                                md: '300px', // Medium screen size
                                lg: '350px', // Large screen size
                            },
                        }}
                    >
                        {item.type === 'image' ? (
                            <img
                                src={item.src}
                                alt={item.alt}
                                style={{
                                    height: 'auto',
                                    width: '100%',
                                    display: 'block',
                                    objectFit: 'cover',
                                }}
                            />
                        ) : (
                            <video
                                src={item.src}
                                aria-label={item.alt}
                                autoPlay
                                loop
                                muted
                                playsInline
                                style={{
                                    display: 'block',
                                    width: '100%',
                                    height: 'auto',
                                    objectFit: 'cover',
                                }}
                            />
                        )}
                    </Box>
                ))}
            </Box>

            {/* CSS Keyframes */}
            <style jsx>{`
                @keyframes aboutScroll {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-50%);
                    }
                }
            `}</style>
        </Box>
    );
};

export default AboutCarousel;
