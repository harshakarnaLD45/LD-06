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
import { Helmet } from "react-helmet";
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router-dom';
import i18n from '../../../i18n';
import AnimateButton from '../../../Components/CommonComponents/AnimateButton';
import ReuseReturn from '../../../assets/Home/Reuse-img.jpg';
import SolutionProductForm from './SolutionProductForm';
//images 
import Gdr from '../../../assets/Home/GDR.png'
import secure from '../../../assets/Home/Secure.png'
import Paymentvending from '../../../assets/Home/VendingPayment.png';



function ReuseRetunPage() {

  const { lang } = useParams();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [expandedFaqIndex, setExpandedFaqIndex] = useState(null);

  useEffect(() => {
    if (lang && i18n.language !== lang) {
      i18n.changeLanguage(lang);
    }
  }, [lang]);

  const handleScrollToContact = () => {
    console.log('clicked');
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const cards = [
    {
      desc: t('cloudKitchen.complianceCards.card1'),
      image: Gdr
    },
    {
      desc: t('cloudKitchen.complianceCards.card2'),
      image: secure
    },
    {
      desc: t('cloudKitchen.complianceCards.card3'),
      image: Paymentvending
    },
  ]
  const faqData = [
    {
      question: t('reuseReturn.question1'),
      answer: t('reuseReturn.answer1')
    },
    {
      question: t('reuseReturn.question2'),
      answer: t('reuseReturn.answer2')
    },
    {
      question: t('reuseReturn.question3'),
      answer: t('reuseReturn.answer3')
    }
  ];




  return (
    <>
      <Box>
       <Helmet htmlAttributes={{ lang: "de" }}>
  <title>NAF Reuse & Return </title>

  <meta
    name="description"
    content="Das NAF Reuse & Return Ökosystem ermöglicht nachhaltiges Vending mit Mehrwegverpackungen, digitaler Rückverfolgung und zirkulären Nutzungskonzepten."
  />

  <meta name='keywords'
    content='Reuse Return Ökosystem, nachhaltige Verkaufsautomaten, Mehrwegverpackungen Automaten, Kreislaufwirtschaft Vending, NAF Mehrwegsystem, Rückgabeautomaten, nachhaltige Food Automaten, digitale Rückverfolgung, Zero Waste Vending' />

  <link
    rel="canonical"
    href="https://vendinaf.com/de/reuse-return"
  />

  <meta name="robots" content="index, follow" />

  {/* Open Graph */}
  <meta property="og:title" content="Reuse & Return – Nachhaltiges Mehrwegsystem | NAF" />
  <meta
    property="og:description"
    content="Erfahren Sie, wie das Reuse- & Return-System von NAF nachhaltige Wiederverwendung und Rückgabe ermöglicht."
  />
  <meta property="og:url" content="https://vendinaf.com/de/reuse-return" />
  <meta property="og:type" content="website" />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Reuse & Return – Nachhaltiges Mehrwegsystem | NAF" />
  <meta
    name="twitter:description"
    content="Nachhaltige Reuse- & Return-Lösungen von NAF für moderne Versorgungssysteme."
  />
</Helmet>
        {/* HERO SECTION */}
        <Box sx={{ mt: {xs: 10,sm:14, md: 16 }, width: '100%', boxSizing: 'border-box' }}>
         
          <Box
            sx={{
              width: '100%',
              height: { xs: '60vh', sm: '80vh', md: '80vh' },
              display: 'flex',
              
              flexDirection: 'column',
              justifyContent: { xs: 'center', sm: 'center', md: 'center' },
              alignItems: 'flex-start',
              p: { xs: 1.5, sm: 4, md: 6 },
              boxSizing: 'border-box',
              overflow: 'hidden',
               background: `linear-gradient(
                      270deg,
                      rgba(0, 0, 0, 0.00) 32.78%,
                      rgba(0, 0, 0, 0.50) 62.37%
                    ), url(${ReuseReturn}) lightgray 50% / cover no-repeat`,
                    }}
          >
            <Box sx={{

              width: { xs: '100%', sm: '70%', md: '45%' }
            }}>

              <Typography className="bodyRegularText3" sx={{ color: '#c2c2c4' }}>
                {t('reuseReturn.NAFVendingSolutions')}
              </Typography>

              <Typography className="headings-h3" sx={{ color: '#fcfcfc', mt: 1 }}>
                {t('reuseReturn.heroTitle')}
              </Typography>

              <Typography
                className="bodyRegularText3"
                sx={{ color: '#c2c2c4', mt: 1 }}
              >
                {t('reuseReturn.heroSubtitle')}
              </Typography>

              <Box
                sx={{
                  mt: 4,
                  display:  'flex' ,
                  justifyContent: { sm: 'flex-start', md: 'flex-start' },
                }}
              >
                <AnimateButton onClick={handleScrollToContact} />
              </Box>
            </Box>
          </Box>
        </Box>

        {/*Feature Overview*/}
        <Box  className="section-container"  sx={{
          display: 'flex',
          flexDirection: 'column',
          mt: { xs: 8,sm:12,  md: '100px' },
            // p: { xs: 3, sm: 4, md: 4 },
        }} >

          <Typography sx={{ color: '#fcfcfc' }} className='headings-h3'>
            {t('reuseReturn.featureOverviewTitle')}
          </Typography>

          <Typography sx={{ mt: 2, color: '#c2c2c4' }} className='bodyRegularText3'>
            {t('reuseReturn.featureOverviewText1')}
          </Typography>
          <Typography sx={{ mt: 2, color: '#c2c2c4' }} className='bodyRegularText3'>
            {t('reuseReturn.featureOverviewText2')}
          </Typography>
        </Box>

        <Box  className="section-container" sx={{ 
            display: 'flex',
            flexDirection: 'column',

          }} 
        >
          <Typography sx={{ color: '#fcfcfc' }} className='headings-h3'>
            {t('reuseReturn.howItWorksTitle')}
          </Typography>
          <Typography sx={{ mt: 3, mb: 4, color: '#c2c2c4' }} className='bodyRegularText3'>
            {t('reuseReturn.howItWorksSubtitle')}
          </Typography>

          <Grid container alignItems="stretch"
            rowSpacing={{ xs: 5, sm:10, md: 6 , }}
            columnSpacing={{ xs: 1.5, sm: 2, md: 3 }}
          >
            {[
              {
                description: t('reuseReturn.howItWorksFeature1'),
              },
              {
                description: t('reuseReturn.howItWorksFeature2'),
              },
              {
                description: t('reuseReturn.howItWorksFeature3'),
              },
              {
                description: t('reuseReturn.howItWorksFeature4'),
              },

            ].map((feature, index) => (
              <Grid sx={{ display: 'flex' }} item xs={12} sm={6} md={3} key={index}>
                <Box
                  sx={{
                    height: { xs: '100%', sm: '100%', md: '100%', lg: '150px', xl: '150px' },
                    p: { xs: 2, sm: 4, md: 2, xl: 4 },
                    width: '100%',
                    backgroundColor: '#161616',
                    border: '1px solid #393939',
                    borderRadius: '24px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}
                >
                  <Box sx={{}}>

                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="12" fill="#FA7854" />
                    </svg>

                  </Box>

                  <Box>


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

          {/*Benifits*/}
          <Box className="section-container" sx={{ p: 0 ,
              display: 'flex', 
            flexDirection: 'column',
            mb:0
           
            }}>
            <Typography sx={{ color: '#fcfcfc', mb: 4   }} className='headings-h3'>
              {t('reuseReturn.benefitsTitle')}
            </Typography>
          </Box>

          <Grid container
            rowSpacing={{ xs: 5, sm: 10, md: 6, lg:2 ,xl: 2 }}
            columnSpacing={{ xs: 2, sm: 2, md: 2.5, lg: 2 ,xl: 2 }}
          >
            {[
              {
                description: t('reuseReturn.benefit1'),
              },
              {
                description: t('reuseReturn.benefit2'),
              },
              {
                description: t('reuseReturn.benefit3'),
              },
              {
                description: t('reuseReturn.benefit4'),
              },
              {
                description: t('reuseReturn.benefit5'),
              },

            ].map((feature, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Box
                  sx={{
                    height: { xs: '100%', sm: '100%', md: '100%', lg: '150px', xl: '150px' },
                     p: { xs: 2, sm: 4, md: 2, lg:2, xl: 3 },
                    backgroundColor: '#161616',
                    border: '1px solid #393939',
                    borderRadius: '24px',
                    // p: "32px",
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}
                >
                  <Box sx={{}}>

                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="12" fill="#FA7854" />
                    </svg>

                  </Box>

                  <Box>


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

          {/* Industry compliance*/}
          <Box className="section-container" sx={{ p: 0 ,
              display: 'flex', 
            flexDirection: 'column',
            mb:0
          
            }}>
            <Typography sx={{ color: '#fcfcfc' }} className='headings-h3'>
              {t('reuseReturn.industryComplianceTitle')}
            </Typography>
            <Typography sx={{ mt: 2, color: "#c2c2c4" }} className='bodyRegularText4'>
              {t('reuseReturn.industryComplianceSubtitle')}
            </Typography>
          </Box>

          {/* Cards Grid */}
          <Box
            sx={{
             mt: {xs:3,sm:4,md:6},
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',
                sm: 'repeat(2, 1fr)',
                md: 'repeat(3, 1fr)',
              },
              gap: '24px',
            }}
          >
            {cards.map((card, index) => (
              <Box
                key={index}
                sx={{
                  borderRadius: '16px',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                {/* Image */}
                <Box
                  component="img"
                  src={card.image}
                  alt={card.title}
                  sx={{
                    backgroundColor: '#161616',
                    width: '100%',
                    height: '300px',
                    objectFit: 'cover',
                  }}
                />
                {/* Content */}
                <Box sx={{ py: 4 }}>
                  <Typography
                    sx={{ color: '#C2C2C4', fontSize: '14px', lineHeight: 1.6 }}
                    className="bodyRegularText4"
                  >
                    {card.desc}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>



          {/*Form */}

            <Box className="section-container" id="contact" sx={{  p :0}}>
            <SolutionProductForm />
          </Box>

          {/* FAQ Section */}

          <Box className="section-container" sx={{ p: 0,  width: '100%' }} >
            <Box sx={{ mb: { xs: 5, md: 7 }, textAlign: 'center' }}>
              <Typography className="headings-h2" sx={{ color: '#fcfcfc' }}>
                {t('reuseReturn.faqTitle')}
              </Typography>
              <Typography className="bodyMediumText2" sx={{ color: '#C2C2C4' }}>
                {t('reuseReturn.faqSubtitle')}
              </Typography>
            </Box>

            <Box sx={{ width: { xs: '90%', sm: '80%', md: '60%', lg: '40%' }, mx: 'auto' }}>
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
                    <Typography sx={{ color: '#fcfcfc', fontStyle: 'bold' }} className="bodyRegularText4">
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
        </Box>
      </Box>
    </>
  );
}
export default ReuseRetunPage;