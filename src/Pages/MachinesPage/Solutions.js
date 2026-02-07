import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import AnimateButton from '../../Components/CommonComponents/AnimateButton';
import SharedPaymentModal from '../../Components/SharedPaymentModal';
import Image1 from '../../assets/Machines/Custom-sizes-&-layouts.avif';
import Image2 from '../../assets/Machines/Branding-&-graphics.avif';
import Image3 from '../../assets/Machines/Specialized-dispensing.avif';
import Image4 from '../../assets/Machines/Unique-storage-options.avif';
import Image5 from '../../assets/Machines/Software-integration.avif';
import Image6 from '../../assets/Machines/Custom-payments.avif';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

const CustomVendingSection = () => {
    const { t } = useTranslation();
    const { lang } = useParams();
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
     
    

    const items = [
        { label: t('machines.CustomSizesLayouts'), image: Image1, alt: 'NAF : Customizable Vending Machines with Flexible Sizes and Layouts.' },
        { label: t('machines.BrandingGraphics'), image: Image2, alt: 'NAF : Enhance Brand Presence with Customized Vending Machines.' },
        { label: t('machines.SpecializedDispensing'), image: Image3, alt: ' NAF  Vending: Solutions with Specialized and Reliable Dispensing.' },
        { label: t('machines.UniqueStorage'), image: Image4, alt: 'NAF  Vending - Unique and Customizable Storage Solutions.' },
        { label: t('machines.SoftwareIntegration'), image: Image5, alt: ' NAF  Vending: Software Integration for Effortless Management.' },
        { label: t('machines.CustomPayments'), image: Image6, alt: 'NAF  Vending: Customizable Payment Options for Maximum Convenience.' },
    ];
    return (
        <Box className='section-container solutuons-sec'>
            {/* Left Section */}
            <Box className='secltion-subsec'>
                <Typography variant="h3" className='headings-h2' sx={{ color: '#FCFCFC' }}>
                    {t('machines.CustomVendingtitle')}
                </Typography>
                <Typography variant="body1" className='bodyRegularText3' sx={{ color: '#C2C2C4', my: { xs: '8px', sm: '8px', md: '16px' } }}>
                    {t('machines.CustomVendingsubtitle')}
                </Typography>

               <div onClick={() => setIsPaymentModalOpen(true)} style={{ cursor: 'pointer' }}>
                              <AnimateButton text1={t('AnimateBtn.request')} text2={t('AnimateBtn.quote')} />
                           </div>
                           <SharedPaymentModal 
                                open={isPaymentModalOpen} 
                                handleClose={() => setIsPaymentModalOpen(false)}
                                showSuccess={showSuccess}
                                handleCloseSuccess={() => {
                                    setShowSuccess(false);
                                    setIsPaymentModalOpen(false);
                                }}
                                onSuccess={() => setShowSuccess(true)}
                            />
            </Box>

            {/* Right Section */}
            <Box className='solution-card-sec'
                sx={{
                    display: "flex",
                    borderBottom: "1px solid #666",
                    borderTop: "1px solid #666",
                    borderLeft: "1px solid #666",
                }}
            >
                {items.map((item, index) => (
                    <Box
                        key={index}
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                        sx={{
                            position: 'relative',
                            borderRight: "1px solid #666",
                            overflow: 'hidden',
                            display: "flex",
                            justifyContent: "flex-start",
                            alignItems: "flex-end",
                            cursor: 'pointer',
                            borderBottom: "none",
                            transition: 'all 0.3s ease-in-out',
                            [`@media (min-width:1301px)`]: {
                                height: hoveredIndex === index ? "100%" : "100%",
                                width: hoveredIndex === index ? '300px' : '80px',
                            },
                            [`@media (max-width:1300px)`]: {
                                height: hoveredIndex === index ? "300px" : 'auto',
                                borderBottom: "1px solid #666",
                            }
                        }}
                    >
                        {/* Hover image with overlay */}
                        <Box
                            sx={{
                                position: 'absolute',
                                inset: 0,
                                backgroundImage: `url(${item.image})`,
                                alt: item.alt,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                opacity: hoveredIndex === index ? 1 : 0,
                                transition: 'all 0.3s ease-in-out',
                                zIndex: 1,
                                height: "100%",
                                [`@media (max-width:1300px)`]: {
                                    height: "300px",
                                }
                            }}
                        >
                            {/* Dark Overlay */}
                            <Box
                                sx={{
                                    position: 'absolute',
                                    inset: 0,
                                    backgroundColor: 'rgba(0,0,0,0.3)',  // black with 50% opacity
                                    zIndex: 2,
                                }}
                            />
                        </Box>


                        {/* Vertical Text */}
                        <Typography className='bodyRegularText3'
                            sx={{
                                textAlign: "center",
                                color: hoveredIndex === index ? "#fff" : "#ccc",
                                zIndex: 2,
                                py: 3,
                                px: 3,
                                transition: 'color 0.3s ease',
                                textShadow: hoveredIndex === index ? '0 0 6px rgba(255,255,255,0.5)' : 'none',
                                [`@media (min-width:1301px)`]: {
                                    writingMode: "vertical-rl",
                                    transform: "rotate(180deg)",
                                }
                            }}
                        >
                            {item.label}
                        </Typography>
                    </Box>
                ))}
            </Box>
        </Box>
    );
};

export default CustomVendingSection;
