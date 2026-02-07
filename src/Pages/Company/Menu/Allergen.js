import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Box, Typography, IconButton, useMediaQuery, useTheme } from '@mui/material';
import Allergen1 from '../../../assets/About/Menu/Allergen/Allergen1.svg'
import Allergen2 from '../../../assets/About/Menu/Allergen/Allergen2.svg'
import Allergen3 from '../../../assets/About/Menu/Allergen/Allergen3.svg'
import Allergen4 from '../../../assets/About/Menu/Allergen/Allergen4.svg'
import Allergen5 from '../../../assets/About/Menu/Allergen/Allergen5.svg'
import Allergen6 from '../../../assets/About/Menu/Allergen/Allergen6.svg'
import Allergen7 from '../../../assets/About/Menu/Allergen/Allergen7.svg'
import EastIcon from '@mui/icons-material/East';
import { useTranslation } from 'react-i18next';

import downLoadicon from '../../../assets/About/Menu/downLoad-icon.svg';
const allergenImages = [Allergen1, Allergen2, Allergen3, Allergen4, Allergen5, Allergen6, Allergen7];

export default function Allergen() {
    const theme = useTheme();
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const { t } = useTranslation();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const handleDownload = (index) => {
        const imageSrc = allergenImages[index];
        const link = document.createElement('a');
        link.href = imageSrc;
        link.download = `Allergen-${index + 1}.svg`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <Box sx={{ position: 'relative', pr: 0 }} className='section-container' >
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                <Typography variant="h4" className='headings-h2'>
                    {t('menu.Allergene')}
                </Typography>

                {/* Arrows at the Top-Right */}
                <Box className="menu-btn-section" >
                    <IconButton ref={prevRef} sx={{ mr: 1, color: '#FCFCFC' }}>
                        <EastIcon sx={{ rotate: '180deg', cursor: 'pointer' }} fontSize="small" />
                    </IconButton>
                    <IconButton ref={nextRef} sx={{ color: '#FCFCFC' }}>
                        <EastIcon fontSize="small" sx={{ cursor: 'pointer' }} />
                    </IconButton>
                </Box>
            </Box>

            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={30}
                slidesPerView={isSmallScreen ? 1.2 : 1.8}
                navigation={{
                    prevEl: prevRef.current,
                    nextEl: nextRef.current,
                }}
                onBeforeInit={(swiper) => {
                    swiper.params.navigation.prevEl = prevRef.current;
                    swiper.params.navigation.nextEl = nextRef.current;
                }}
                pagination={{ clickable: true }}
            >
                {allergenImages.map((src, index) => (
                    <SwiperSlide className=''
                        key={index}
                    >
                        <Box sx={{ position: 'relative' }}>

                            <Box
                                component="img"
                                src={src}
                                alt="NAF : Allergen Information Chart for Moroccan and German Dishes."
                                sx={{
                                    width: '100%',
                                    height: '100%',
                                    borderRadius: 2,
                                    boxShadow: 2,
                                    cursor: 'grab',
                                }}
                            />
                            {/* DOWNLOAD BUTTON */}
                            <IconButton
                                onClick={() => handleDownload(index)}
                                sx={{
                                    position: 'absolute',
                                    top: 20,
                                    right: 20,
                                    height: '58px',
                                    width: '58px',
                                    backgroundColor: 'rgba(0,0,0,0.6)',
                                    '&:hover': {
                                        backgroundColor: 'rgba(0,0,0,0.8)',
                                    },
                                }}
                            >
                                <Box
                                    component="img"
                                    src={downLoadicon}
                                    sx={{ width: '60%' }}
                                />
                            </IconButton>
                        </Box>

                    </SwiperSlide>
                ))}
            </Swiper>

        </Box >
    );
}