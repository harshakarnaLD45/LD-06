import React, { useEffect, useState } from 'react';
import {
  Box,
  Typography,
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails
} from '@mui/material';
import { ArrowDropDown } from '@mui/icons-material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Mousewheel } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router-dom';

import cityImg from '../../../assets/Home/WhoWeServe/Municipalities-&-public-authorities.avif';
import AnimateButton from '../../../Components/CommonComponents/AnimateButton';
import ArrowButton from '../../../Components/CommonComponents/ArrowButton';
import ProductEnquiryForm from './ProductEnquiryForm';

import Machine1 from '../../../assets/Home/Pizza-machine.png';
import Machine6 from '../../../assets/Home/Return-machine.png';
import Machine7 from '../../../assets/Home/Gourmet-machine.webp';

// Machine Icons
import MachineSmallIcon1 from '../../../assets/Home/MachineIcons/Machine1Icon1.svg';
import MachineSmallIcon2 from '../../../assets/Home/MachineIcons/Machine1Icon2.svg';
import Machine7SmallIcon1 from '../../../assets/Home/MachineIcons/Machine7Icon1.svg';
import Machine7SmallIcon2 from '../../../assets/Home/MachineIcons/Machine7Icon2.svg';

const CitiesPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { lang } = useParams();
  const [expandedFaqIndex, setExpandedFaqIndex] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleScrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const faqData = [
    {
      question: t('cities.faq.questions.question1'),
      answer: t('cities.faq.questions.answer1')
    },
    {
      question: t('cities.faq.questions.question2'),
      answer: t('cities.faq.questions.answer2')
    },
    {
      question: t('cities.faq.questions.question3'),
      answer: t('cities.faq.questions.answer3')
    },
    {
      question: t('cities.faq.questions.question4'),
      answer: t('cities.faq.questions.answer4')
    },
    {
      question: t('cities.faq.questions.question5'),
      answer: t('cities.faq.questions.answer5')
    },
    {
      question: t('cities.faq.questions.question6'),
      answer: t('cities.faq.questions.answer6')
    },
    {
      question: t('cities.faq.questions.question7'),
      answer: t('cities.faq.questions.answer7')
    }
  ];

  const machines = [
    {
      img: Machine7,
      name: t('machines.GourmetMachine'),
      alt: t('machines.GourmetMachineAlt'),
      route: 'products/gourmet-machine',
      button: t('cities.machines.title'),
      icons: [
        { src: Machine7SmallIcon1 },
        { src: Machine7SmallIcon2 }
      ]
    },
    {
      img: Machine1,
      name: t('machines.PizzaMachine'),
      alt: t('machines.PizzaMachineAlt'),
      route: 'products/pizza-machine',
      button: t('cities.machines.title'),
      icons: [
        { src: MachineSmallIcon1 },
        { src: MachineSmallIcon2 }
      ]
    },
    {
      img: Machine6,
      name: t('machines.ReturnMachine'),
      alt: t('machines.ReturnMachineAlt'),
      button: t('cities.machines.title'),
      route: 'automats',
      icons: []
    }
  ];

  const handleMachineNavigate = (route) => {
    navigate(`/${lang}/${route}`);
  };
  useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  return (
    <>
      {/* HERO */}
      <Box sx={{ mt: { xs: 10, sm: 14, md: 16 }, width: '100%', boxSizing: 'border-box' }}>

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
                          ), url(${cityImg}) lightgray 50% / cover no-repeat`,
          }}


        >
          <Box sx={{ width: { xs: '100%', sm: '70%', md: '45%' } }}>
            <Typography className="bodyRegularText3" sx={{ color: '#c2c2c4' }}>
              {t('cities.hero.subtitle')}
            </Typography>
            <Typography className="headings-h3" sx={{ color: '#fcfcfc', mt: 1 }}>
              {t('cities.hero.title')}
            </Typography>
            <Typography className="bodyRegularText3" sx={{ color: '#c2c2c4', mt: 2 }}>
              {t('cities.hero.description')}
            </Typography>
            <Box sx={{
              mt: 4, display: 'flex',
              justifyContent: { xs: 'flex-start', md: 'flex-start' }
            }}>
              <AnimateButton onClick={handleScrollToContact} />
            </Box>
          </Box>
        </Box>
      </Box>

      {/* CONTENT */}
      <Box className="section-container" sx={{ mt: { xs: 8, md: 10 }, }}>
        <Typography className="bodyRegularText3" sx={{ color: '#c2c2c4' }}>
          {t('cities.content.paragraph1')}
        </Typography>
        <Typography className="bodyRegularText3" sx={{ color: '#c2c2c4', mt: 3 }}>
          {t('cities.content.paragraph2')}
        </Typography>
      </Box>

      {/* ADVANTAGES */}
      <Box className="section-container" sx={{ pb: { xs: 4, sm: 8, md: 5, lg: 0 } }}>
        <Box>
          <Typography className="headings-h3" sx={{ textAlign: 'center', color: '#fcfcfc', mb: 6 }}>
            {t('cities.advantages.title')}
          </Typography>
          <Grid container alignItems="stretch"
            rowSpacing={{ xs: 5, sm: 10, md: 3, lg: 2, xl: 2 }}
            columnSpacing={{ xs: 2, sm: 2, md: 2.5, lg: 2, xl: 2 }}
          >
            {Object.values(t('cities.advantages.features', { returnObjects: true })).map((feature, index) => (
              <Grid sx={{ display: 'flex' }} item xs={12} sm={6} md={4} key={index}>
                <Box sx={{
                  height: { xs: '100%', sm: '100%', md: '200px', lg: '200px', xl: '250px' },
                  p: { xs: 2, sm: 4, md: 2, xl: 4 }, width: '100%',
                  backgroundColor: '#161616',
                  border: '1px solid #393939',
                  borderRadius: '24px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',

                  // p: "32px",
                }}
                >
                  <Box >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="12" fill="#FA7854" />
                    </svg>
                  </Box>
                  <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: 1.5 }}>

                    <Typography className="bodyMediumText1" sx={{ color: '#fcfcfc' }}>
                      {feature.title}
                    </Typography>
                    <Typography className="bodyRegularText4" sx={{ color: '#c2c2c4', lineHeight: 1.6 }}>
                      {feature.description}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
        {/* MACHINES */}

      </Box>


      <Box className="section-container" sx={{ pr: 0, }}>
        <Box className="section-container" sx={{ mb: 4, pl: 0 }}>
          <Typography className="headings-h3" sx={{ color: '#fcfcfc', mb: 2 }}>
            {t('cities.machines.title')}
          </Typography>
          <Typography className="bodyRegularText3" sx={{ color: '#c2c2c4' }}>
            {t('cities.machines.description')}
          </Typography>
        </Box>
        <Swiper modules={[FreeMode, Mousewheel]} spaceBetween={16} slidesPerView={'auto'} freeMode grabCursor>
          {machines.map((machine, index) => (
            <SwiperSlide key={index} style={{ width: 'auto' }}>
              <Box
                className="machine-card"
                sx={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', borderRadius: '12px', background: '#262626', p: { xs: 1, sm: 2, md: 4 }, cursor: 'grab' }}
              >
                <Box sx={{ height: { xs: 320, sm: 400, md: 500, xl: 650 } }}>
                  <Box component="img" src={machine.img} alt={machine.alt} sx={{ width: { xs: 200, sm: 250, md: 300, xl: 400 }, height: '100%', p: { xs: 3, sm: 4, md: 5 }, transition: 'transform 0.3s ease', '&:hover': { transform: 'scale(1.05)' } }} />
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', mt: 2, px: 1, gap: 2 }}>
                  <Typography className="bodyMediumText2" sx={{ color: '#fff' }}>
                    {machine.name}
                  </Typography>
                  <ArrowButton onClick={() => handleMachineNavigate(machine.route)} />
                </Box>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
      {/* PRODUCT ENQUIRY */}
     <Box className="section-container" id="contact">
        <ProductEnquiryForm />
      </Box>

      {/* FAQ */}
      <Box className="section-container" sx={{  width: '100%', boxSizing: 'border-box', overflow: 'hidden' }}>
        <Box sx={{ mb: { xs: 5, md: 7 }, textAlign: 'center' }}>
          <Typography className="headings-h2" sx={{ color: '#fcfcfc' }}>
            {t('cities.faq.title')}
          </Typography>
          <Typography className="bodyMediumText2" sx={{ color: '#C2C2C4' }}>
            {t('cities.faq.subtitle')}
          </Typography>
        </Box>
        <Box sx={{ width: { xs: '100%', sm: '80%', md: '60%', lg: '40%' }, mx: 'auto' }}>
          {faqData.map((faq, index) => (
            <Accordion
              key={index}
              expanded={expandedFaqIndex === index}
              onChange={() => setExpandedFaqIndex(expandedFaqIndex === index ? null : index)}
              sx={{ py: 2, border: '1px solid #393939', backgroundColor: 'transparent', color: '#C2C2C4', borderRadius: '12px !important', boxShadow: 'none', mb: 2, '&::before': { display: 'none' } }}
            >
              <AccordionSummary expandIcon={<ArrowDropDown sx={{ color: '#C2C2C4' }} />}>
                <Typography className="bodyRegularText4">{faq.question}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className="bodyRegularText4">{faq.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Box>
    </>
  );
};

export default CitiesPage;
