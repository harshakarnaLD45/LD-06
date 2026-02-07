import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import {
  Box,
  Typography,
  IconButton,
  useMediaQuery,
  useTheme,
} from '@mui/material';

import EastIcon from '@mui/icons-material/East';
import { useTranslation } from 'react-i18next';

import Menu4 from '../../../assets/About/Menu/Monthlymenu/Jan.png';
import Menu5 from '../../../assets/About/Menu/Monthlymenu/feb.png';
import Menu6 from '../../../assets/About/Menu/Monthlymenu/march.png';

import sourceimg1 from '../../../assets/About/Menu/SourceMenu/sourceimg1.jpg';
import sourceimg2 from '../../../assets/About/Menu/SourceMenu/sourceimg2.jpg';

import downLoadicon from '../../../assets/About/Menu/downLoad-icon.svg';
import './Menu.css';

const monthlyMenus = [Menu4, Menu5, Menu6];

export default function MonthlyMenu() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const { t } = useTranslation();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  // Check if screen is mobile only (less than 768px)
  const isMobileOnly = useMediaQuery(theme.breakpoints.down('sm'));
  // Check if screen is tablet (768px and above)
  const isTabletOrDesktop = useMediaQuery(theme.breakpoints.up('sm'));

  const handleDownload = (index) => {
    const link = document.createElement('a');
    link.href = monthlyMenus[index];
    link.download = `menu-${index + 1}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Box sx={{ position: 'relative', pr: 0 }} className='section-container' >
      {/* HEADER */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          mb: 3,
        }}
      >
        <Typography
          variant="h4"
          className="headings-h2"
          sx={{ color: '#FCFCFC' }}
        >
          {t('menu.monthlyMenu')}
        </Typography>

        <Box>
          <IconButton ref={prevRef} sx={{ color: '#FCFCFC', mr: 1 }}>
            <EastIcon sx={{ transform: 'rotate(180deg)' }} />
          </IconButton>
          <IconButton ref={nextRef} sx={{ color: '#FCFCFC' }}>
            <EastIcon />
          </IconButton>
        </Box>
      </Box>
      <Box className="monthly-menu-container">
        {/* TOP INFO IMAGES */}
        {/* <Box className="top-info-images-sec"
        sx={{
          display: 'flex',
          flexDirection: 'row',
          gap: '16px',
          mb: 4,
          width: '50%',
          // justifyContent: isMobileOnly ? 'center' : 'normal',
        }}
          
        >
          {[sourceimg1, sourceimg2].map((img, index) => (
            <Box 
              key={index}
              sx={{
                width: '50%',
              }}
            >
              <Box
                component="img"
                src={img}
                alt={`Info ${index + 1}`}
                sx={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '16px',
                  objectFit: 'cover',
                  display: 'block',
                }}
              />
            </Box>
          ))}
        </Box> */}

        {/* MONTHLY MENU SLIDER */}
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={isSmallScreen ? 1.1 : 1.8}
          pagination={{ clickable: true }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
        >
          {monthlyMenus.map((src, index) => (
            <SwiperSlide key={index}>
              <Box sx={{ position: 'relative' }}>
                <Box
                  component="img"
                  src={src}
                  alt={`Monthly menu ${index + 1}`}
                  sx={{
                    width: '100%',
                    borderRadius: '16px',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.4)',
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
         {/* bottom INFO IMAGES */}
        <Box className="bottom-info-images-sec"
        sx={{
          display: 'flex',
          flexDirection: 'row',
          gap: '16px',
          mb: 4,
          width: '50%',
        }}
          
        >
          {[sourceimg1, sourceimg2].map((img, index) => (
            <Box 
              key={index}
              sx={{
                width: { xs: '100%', sm: '50%' },
              }}
            >
              <Box
                component="img"
                src={img}
                alt={`Info ${index + 1}`}
                sx={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '16px',
                  objectFit: 'cover',
                  display: 'block',
                }}
              />
            </Box>
          ))}
        </Box>
      </Box>

      </Box>
      );
}