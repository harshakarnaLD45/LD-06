import React, { useEffect, useState } from 'react';
import {
  Box,
  Button,
  Typography,
  Grid,

  Accordion,
  AccordionSummary,
  AccordionDetails,

} from '@mui/material';
import {
  ArrowDropDown,
} from '@mui/icons-material';
import hotel from '../../../assets/Home/WhoWeServe/Hotels-&-restaurants.avif';
import AnimateButton from '../../../Components/CommonComponents/AnimateButton';
import { useNavigate, useParams } from 'react-router-dom';
import ArrowButton from '../../../Components/CommonComponents/ArrowButton';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Mousewheel } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import ProductEnquiryForm from './ProductEnquiryForm';

import { useTranslation } from 'react-i18next';

import Machine1 from '../../../assets/Home/Pizza-machine.png';
import Machine6 from '../../../assets/Home/Return-machine.png';
import Machine7 from '../../../assets/Home/Gourmet-machine.webp';

import MachineSmallIcon1 from '../../../assets/Home/MachineIcons/Machine1Icon1.svg'
import MachineSmallIcon2 from '../../../assets/Home/MachineIcons/Machine1Icon2.svg'
import MachineSmallIcon3 from '../../../assets/Home/MachineIcons/Machine1Icon3.svg'
import MachineSmallIcon4 from '../../../assets/Home/MachineIcons/Machine1Icon4.svg'
import MachineSmallIcon5 from '../../../assets/Home/MachineIcons/Machine1Icon5.svg'
import MachineSmallIcon6 from '../../../assets/Home/MachineIcons/Machine1Icon6.svg'
import Machine7SmallIcon1 from '../../../assets/Home/MachineIcons/Machine7Icon1.svg'
import Machine7SmallIcon2 from '../../../assets/Home/MachineIcons/Machine7Icon2.svg'
import { Flexibleicon, Quickdeloyment, Consistentquality, Brush, Threepersons, Personavialability } from "../../../Components/CustomIcons";
import '../HomePage.css';

const HotelsPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { lang } = useParams();
  const [expandedFaqIndex, setExpandedFaqIndex] = useState(null);

  const handleScrollToContact = () => {
    console.log('clicked');
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const faqData = [
    {
      question: t('hotels.faq.question1'),
      answer: t('hotels.faq.answer1')
    },
    {
      question: t('hotels.faq.question2'),
      answer: t('hotels.faq.answer2')
    },
    {
      question: t('hotels.faq.question3'),
      answer: t('hotels.faq.answer3')
    },
    {
      question: t('hotels.faq.question4'),
      answer: t('hotels.faq.answer4')
    },
    {
      question: t('hotels.faq.question5'),
      answer: t('hotels.faq.answer5')
    },
    {
      question: t('hotels.faq.question6'),
      answer: t('hotels.faq.answer6')
    },
    {
      question: t('hotels.faq.question7'),
      answer: t('hotels.faq.answer7')
    }
  ];

  const machines = [
    {
      img: Machine7,
      name: t('machines.GourmetMachine'),
      button: 'Explore Combo',
      route: 'products/gourmet-machine',
      alt: 'NAF Gourmet Vending Machine Delivering Fresh, High-Quality Food Options.',
      icons: [
        {
          src: Machine7SmallIcon1,
          positions: {
            1500: { top: '40px', left: '20px' },
            900: { top: '40px', left: '15px' },
            400: { top: '20px', left: '10px' },
            0: { top: '20px', left: '7px' }
          }
        },
        {
          src: Machine7SmallIcon2,
          positions: {
            1500: { top: '420px', left: '400px' },
            900: { top: '300px', left: '370px' },
            400: { top: '250px', left: '240px' },
            0: { top: '200px', left: '150px' }
          }
        }
      ]
    },
    {
      img: Machine1,
      name: t('machines.PizzaMachine'),
      button: 'Explore Pizza',
      route: 'products/pizza-machine',
      alt: 'NAF  Vending at Gas Stations & Rest Areas: 24/7 Convenience.',
      icons: [
        {
          src: MachineSmallIcon1, positions: {
            1500: { top: '40px', left: '35px' },
            900: { top: '40px', left: '35px' },
            400: { top: '20px', left: '17px' },
            0: { top: '14px', left: '10px' }
          }
        },
        {
          src: MachineSmallIcon2, positions: {
            1500: { top: '260px', left: '40px' },
            900: { top: '265px', left: '35px' },
            400: { top: '150px', left: '20px' },
            0: { top: '130px', left: '10px' }
          }
        },
        {
          src: MachineSmallIcon3, positions: {
            1500: { top: '480px', left: '0px' },
            900: { top: '420px', left: '0px' },
            400: { top: '250px', left: '0px' },
            0: { top: '200px', left: '0px' }
          }
        },
        {
          src: MachineSmallIcon4, positions: {
            1500: { top: '50px', left: '420px' },
            900: { top: '50px', left: '370px' },
            400: { top: '25px', left: '240px' },
            0: { top: '15px', left: '175px' }
          }
        },
        {
          src: MachineSmallIcon5, positions: {
            1500: { top: '270px', left: '440px' },
            900: { top: '250px', left: '375px' },
            400: { top: '120px', left: '250px' },
            0: { top: '70px', left: '150px' }
          }
        },
        {
          src: MachineSmallIcon6, positions: {
            1500: { top: '460px', left: '390px' },
            900: { top: '400px', left: '340px' },
            400: { top: '240px', left: '195px' },
            0: { top: '180px', left: '200px' }
          }
        }
      ]
    },

    {
      img: Machine6, name: t('machines.ReturnMachine'),
      route: 'automats',
      alt: 'NAF  Automated Bowl Return Machine - Sustainable Vending Solution.', button: 'Return Machine', icons: [

      ]
    },

  ];



  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleMachineNavigate = (route) => {
    navigate(`/${lang}/${route}`);
  };



  return (
    <>
      {/* HERO SECTION */}
       <Box sx={{ mt: { xs: 10,sm:14, md: 16 }, width: '100%', boxSizing: 'border-box' }}>
        <Box className='solutions-hero-sec'
          sx={{
            width: '100%',
            height: { xs: '60vh', sm: '80vh', md: '80vh' },
            display: 'flex',
            flexDirection: 'column',
            justifyContent: { xs: 'center', sm: 'center', md: 'center' },
            alignItems: 'flex-start',

              p: { xs: 1.5, sm: 2.5, md: 6 },
            boxSizing: 'border-box',
            overflow: 'hidden',
            background: `linear-gradient(
                                  270deg,
                                  rgba(0, 0, 0, 0.00) 32.78%,
                                  rgba(0, 0, 0, 0.50) 62.37%
                                ), url(${hotel}) lightgray 50% / cover no-repeat`,
          }}


        >
          <Box sx={{

            width: { xs: '100%', sm: '70%', md: '45%' }
          }}>

            <Typography className="bodyRegularText3" sx={{ color: '#c2c2c4' }}>
              {t('hotels.hero')}
            </Typography>

            <Typography className="headings-h3" sx={{ color: '#fcfcfc', mt: 1 }}>
              {t('hotels.heroTitle')}
            </Typography>

            <Typography
              className="bodyRegularText3"
              sx={{ color: '#c2c2c4', mt: 2 }}
            >
              {t('hotels.heroSubtitle')}
            </Typography>

            <Box
              sx={{
                mt: 4,
                display: 'flex',
                justifyContent: { sm: 'flex-start', md: 'flex-start' },
              }}
            >
              <AnimateButton onClick={handleScrollToContact} />
            </Box>
          </Box>
        </Box>
      </Box>

      {/* CONTENT SECTION */}
      <Box className="section-container"  sx={{ mt: { xs: 8, md: 10 },}}>
        <Typography className="bodyRegularText3" sx={{ color: '#c2c2c4' }}>
          {t('hotels.introText1')}
        </Typography>

        <Typography
          className="bodyRegularText3"
          sx={{ color: '#c2c2c4', mt: 3 }}
        >
          {t('hotels.introText2')}
        </Typography>
      </Box>

      {/* FEATURES SECTION */}
      <Box className="section-container" sx={{ pb: { xs: 4, sm: 8, md: 5, lg: 0 } }}>
        <Box>
          <Typography
            className="headings-h3"
            sx={{
              textAlign: 'center',
              color: '#fcfcfc',
              mb: 6,
            }}
          >
            {t('hotels.advantagesTitle')}
          </Typography>

          <Grid container alignItems="stretch"
            rowSpacing={{ xs: 5, sm: 10, md: 8, xl: 2 }}
            columnSpacing={{ xs: 2, sm: 2, md: 3 }}
          >
            {[
              {
                title: t('hotels.advantage1Title'),
                description:
                  t('hotels.advantage1Desc'),
                icons: Personavialability,


              },
              {
                title: t('hotels.advantage2Title'),
                description:
                  t('hotels.advantage2Desc'),
                icons: Threepersons,
              },
              {
                title: t('hotels.advantage3Title'),
                description:
                  t('hotels.advantage3Desc'),
                icons: Brush,
              },
              {
                title: t('hotels.advantage4Title'),
                description:
                  t('hotels.advantage4Desc'),
                icons: Consistentquality,
              },
              {
                title: t('hotels.advantage5Title'),
                description:
                  t('hotels.advantage5Desc'),
                icons: Flexibleicon,
              },
              {
                title: t('hotels.advantage6Title'),
                description:
                  t('hotels.advantage6Desc'),
                icons: Quickdeloyment,
              },
            ].map((feature, index) => (
              <Grid sx={{ display: 'flex' }} item xs={12} sm={6} md={4} key={index}>
                <Box
                  sx={{
                    height: { xs: '100%', sm: '100%', md: '100%', lg: '200px', xl: '200px' },
                    p: { xs: 2, sm: 4, md: 2, xl: 4 },
                    width: '100%',
                    // minHeight:{ xs: '100%', sm: '100%', md: '200px ', lg: '200px', xl: '200px' },
                    backgroundColor: '#161616',
                    border: '1px solid #393939',
                    borderRadius: '24px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}
                >
                  <Box className="feature-icons" sx={{
                    transform: { xs: 'scale(0.5)', sm: 'scale(1)' },
                    transformOrigin: 'top left',
                    '@media (max-width: 750px)': {
                      transform: 'scale(0.5)',
                    }
                  }} >
                    {/* <img src={""} alt={machine.name} style={{ width: '100%', height: '180px', objectFit: 'cover' }} /> */}
                    <feature.icons />
                  </Box>

                  <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: 1.5 }}>

                    <Typography
                      className="bodyMediumText1"
                      sx={{ color: '#fcfcfc', }}
                    >
                      {feature.title}
                    </Typography>

                    <Typography
                      className="bodyRegularText4"
                      sx={{ color: '#c2c2c4', lineHeight: 1.6 }}
                    >
                      {feature.description}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>

         
        </Box>
      </Box>

      {/* Swiper Machines */}
        <Box className="section-container" sx={{ pr:0,}}>
          <Box className="section-container" sx={{ mb: 4, pl: 0 }}>
            <Typography sx={{
              display: 'flex',
              flexDirection: 'column',
              color: '#fcfcfc',
              mb: 2

            }} className='headings-h3'>
              {t('hotels.suitableTitle')}
            </Typography>
            <Typography sx={{ color: '#c2c2c4' }} className='bodyRegularText3'>
              {t('hotels.suitableSubtitle')}
            </Typography>
          </Box>
          < Swiper
            modules={[FreeMode, Mousewheel]}
            spaceBetween={16}
            slidesPerView={'auto'}
            freeMode={true}
            mousewheel={false}
            grabCursor={true}
          >
            {machines.map((machine, index) => (
              <SwiperSlide key={index} style={{ width: 'auto' }}>
                <Box
                  className="machine-card"
                  sx={{
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    borderRadius: '12px',
                    background: '#262626',
                    p: { xs: 1, sm: 2, md: 4 },
                    cursor: 'grab',
                    // overflow: 'hidden',
                  }}
                >
                  <Box sx={{
                    height: { xs: 320, sm: 400, md: 500, xl: 650 },
                  }}>


                    {/* Machine image */}
                    <Box sx={{ position: 'relative', height: '90%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      {machine.name === t('machines.FriesMachine') ? (
                        /* Coming Soon display for Fries Machine */
                        <Box
                          sx={{
                            width: '100%',
                            minWidth: '450px',
                            height: '100%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: '#262626',
                            borderRadius: '8px',
                            '@media (max-width: 1490px)': {
                              minWidth: '350px',

                            },
                            '@media (max-width: 1090px)': {
                              minWidth: '300px',

                            },
                            '@media (max-width: 550px)': {
                              minWidth: '250px',

                            },
                          }}
                        >
                          <Box
                            className='bodyMediumText2'
                            sx={{
                              color: '#7FEE64',
                              fontSize: { xs: '16px', sm: '18px', md: '20px' },
                              fontWeight: 'bold',
                              textAlign: 'center',
                            }}
                          >
                            {t('Home.comingSoon')}
                          </Box>
                        </Box>
                      ) : (
                        /* Normal machine image for other machines */
                        <Box
                          component="img"
                          src={machine.img}
                          alt={machine.name}
                          sx={{
                            width: { xs: 200, sm: 250, md: 300, xl: 400 },
                            height: '100%',
                            p: { xs: 3, sm: 4, md: 5 },
                            transition: 'transform 0.3s ease',
                            cursor: 'grab',
                            zIndex: 2,
                            '&:hover': {
                              transform: 'scale(1.05)',
                            },
                          }}
                        />
                      )}
                    </Box>
                  </Box>
                  {/* Name and button */}
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      width: '100%',
                      mt: 2,
                      px: 1,
                      gap: 2,
                      zIndex: 2,
                    }}
                  >
                    <Box>
                      <h2 className='bodyMediumText2' style={{ color: '#fff' }}>
                        {machine.name}
                      </h2>
                    </Box>
                    <ArrowButton onClick={() => handleMachineNavigate(machine.route)} />

                  </Box>
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>

      {/*ProductEnqiryForm */}
       <Box className="section-container" id="contact" >
        <ProductEnquiryForm />
      </Box>

      {/* FAQ Section */}
      <Box className="section-container" sx={{  width: '100%', boxSizing: 'border-box', }}>
        <Box sx={{ mb: { xs: 5, md: 7 }, textAlign: 'center' }}>
          <Typography className="headings-h2" sx={{ color: '#fcfcfc' }}>
            {t('hotels.faq.title')}
          </Typography>
          <Typography className="bodyMediumText2" sx={{ color: '#C2C2C4' }}>
            {t('hotels.faq.subtitle')}
          </Typography>
        </Box>

        <Box sx={{ width: { xs: '100%', sm: '80%', md: '60%', lg: '40%' }, mx: 'auto' }}>
          {faqData.map((faq, index) => (
            <Accordion
              key={index}
              expanded={expandedFaqIndex === index}
              onChange={() => setExpandedFaqIndex(expandedFaqIndex === index ? null : index)}
              sx={{
                py: 2,
                border: '1px solid #393939',
                backgroundColor: 'transparent',
                color: '#C2C2C4',
                borderRadius: '12px !important',
                boxShadow: 'none',
                mb: 2,
                '&::before': { display: 'none' },
              }}
            >
              <AccordionSummary expandIcon={<ArrowDropDown sx={{ color: '#C2C2C4' }} />}>
                <Typography className="bodyRegularText4">
                  {faq.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className="bodyRegularText4">
                  {faq.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>

      </Box>
    </>
  );
};

export default HotelsPage
