import React from 'react';
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

import foodlabel1 from '../../../assets/About/Menu/foodlabels/foodlabel1.png';
import foodlabel2 from '../../../assets/About/Menu/foodlabels/foodlabel2.png';
import foodlabel3 from '../../../assets/About/Menu/foodlabels/foodlabel3.png';
import foodlabel4 from '../../../assets/About/Menu/foodlabels/foodlabel4.png';
import foodlabel5 from '../../../assets/About/Menu/foodlabels/foodlabel5.png';
import foodlabel6 from '../../../assets/About/Menu/foodlabels/foodlabel6.png';
import './Menu.css';


import { useTranslation } from 'react-i18next'

const Foodlabeling = () => {
    const { t } = useTranslation();

    const theme = useTheme();

    const foodlabels = [foodlabel1, foodlabel2, foodlabel3, foodlabel4, foodlabel5, foodlabel6 ];
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const isTablet = useMediaQuery(theme.breakpoints.down('md'));
    return (
        <Box className='section-container' sx={{  pr: '0px' }}>
            <Typography variant="h4" className='headings-h2' sx={{ color: '#FCFCFC', mb: isSmallScreen? '20px ': '50px' }}>
                {t('menu.FoodLabeling')}
            </Typography>

            <Swiper
                modules={[Autoplay]}
                spaceBetween={20}
                slidesPerView={
                    isSmallScreen ? 1.2 : isTablet ? 3.5 :
                                4.5
                }
               
              
            >
                {foodlabels.map((foodlabel, index) => (
                    <SwiperSlide
                        key={index}
                        style={{
                            flexShrink: 0,
                            position: 'relative',
                        }}
                    >
                        <Box
                            component="img"
                            src={foodlabel}
                            alt={`Food Label ${index + 1}`}
                            sx={{
                                width: '100%',
                                height: 'auto',
                                borderRadius: 2,
                                boxShadow: 2, 
                                cursor: 'grab !important',
                            }}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </Box>
    );
};

export default Foodlabeling;
