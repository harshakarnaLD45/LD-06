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
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router-dom';
import AnimateButton from '../../../Components/CommonComponents/AnimateButton';
import TelemetryMonitoring from '../../../assets/Home/TelemetryMonitoring-img.jpg';
import SolutionProductForm from './SolutionProductForm';

//images 
import Gdr from '../../../assets/Home/GDR.png'
import secure from '../../../assets/Home/Secure.png'
import Paymentvending from '../../../assets/Home/VendingPayment.png';



function Telemetry() {

  const { lang } = useParams();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [expandedFaqIndex, setExpandedFaqIndex] = useState(null);

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
      question: t('telemetryMonitoring.Faq1Question'),
      answer: t('telemetryMonitoring.Faq1Answer')
    },
    {
      question: t('telemetryMonitoring.Faq2Question'),
      answer: t('telemetryMonitoring.Faq2Answer')
    },
    {
      question: t('telemetryMonitoring.Faq3Question'),
      answer: t('telemetryMonitoring.Faq3Answer')
    },
  ];

  return (
    <>
      <Box>

          <Helmet htmlAttributes={{ lang: "de" }}>
  {/* SEO Title */}
  <title>
    NAF Telemetrie & Monitoring
  </title>

  {/* Canonical URL */}
  <link
    rel="canonical"
    href="https://vendinaf.com/de/telemetry-monitoring"
  />

  {/* Meta Description */}
  <meta
    name="description"
    content="NAF Telemetrie & Monitoring bietet Echtzeit-Transparenz über Status, Leistung und Zustand von Verkaufsautomaten für zuverlässige und effiziente Abläufe."
  />

  {/* Meta Keywords */}
  <meta
    name="keywords"
    content="Telemetrie Verkaufsautomaten, Verkaufsautomaten Monitoring, NAF Telemetrie, Echtzeit Automatenüberwachung, Fernüberwachung Verkaufsautomaten, Automaten Statusüberwachung, Vending Monitoring Software, Cloud Telemetrie Automaten, Verkaufsautomaten Analyse"
  />

  {/* Robots */}
  <meta name="robots" content="index, follow" />

  {/* Open Graph */}
  <meta
    property="og:title"
    content="NAF Telemetrie & Monitoring – Echtzeit-Überwachung von Verkaufsautomaten"
  />
  <meta
    property="og:description"
    content="Echtzeit-Monitoring für Verkaufsautomaten: Status, Leistung und Zustand zentral überwachen mit NAF Telemetrie."
  />
  <meta
    property="og:url"
    content="https://vendinaf.com/de/telemetry-monitoring"
  />
  <meta
    property="og:type"
    content="website"
  />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta
    name="twitter:title"
    content="NAF Telemetrie & Monitoring – Verkaufsautomaten in Echtzeit"
  />
  <meta
    name="twitter:description"
    content="NAF Telemetrie ermöglicht die Echtzeit-Überwachung von Verkaufsautomaten für effiziente und sichere Abläufe."
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
              p: { xs: 1.5, sm: 4, md: 6 },
              boxSizing: 'border-box',
              overflow: 'hidden',
              background: `linear-gradient(
                      270deg,
                      rgba(0, 0, 0, 0.00) 32.78%,
                      rgba(0, 0, 0, 0.50) 62.37%
                    ), url(${TelemetryMonitoring }) lightgray 50% / cover no-repeat`,
                    }}
          >
            <Box sx={{

              width: { xs: '100%', sm: '70%', md: '45%' }
            }}>

              <Typography className="bodyRegularText3" sx={{ color: '#c2c2c4' }}>
                {t("telemetryMonitoring.NAFVendingSolutions")}
              </Typography>

              <Typography className="headings-h3" sx={{ color: '#fcfcfc', mt: 1 }}>
                {t("telemetryMonitoring.heroTitle")}
              </Typography>

              <Typography
                className="bodyRegularText3"
                sx={{ color: '#c2c2c4', mt: 2 }}
              >
                {t("telemetryMonitoring.heroSubtitle")}
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

        <Box  className="section-container" sx={{
          display: 'flex',
          flexDirection: 'column',
           mt: { xs: 8,sm:12,  md: '100px' },
        }} >
          <Typography sx={{ color: '#fcfcfc' }} className='headings-h3'>
            {t("telemetryMonitoring.featureOverviewTitle")}
          </Typography>

          <Typography sx={{ mt: 2, color: '#c2c2c4' }} className='bodyRegularText3'>
            {t("telemetryMonitoring.featureOverviewText1")}</Typography>
          <Typography sx={{ mt: 2, color: '#c2c2c4' }} className='bodyRegularText3'>
            {t("telemetryMonitoring.featureOverviewText2")}
          </Typography>
        </Box>

        <Box className="section-container" sx={{ 
            display: 'flex',
            flexDirection: 'column',

          }} 
        >
          <Typography sx={{ color: '#fcfcfc' }} className='headings-h3'>
            {t("telemetryMonitoring.howItWorksTitle")}
          </Typography>
          <Typography sx={{ mt: 3, mb: 4, color: '#c2c2c4' }} className='bodyRegularText3'>
            {t("telemetryMonitoring.howItWorksSubtitle")}
          </Typography>

          <Grid container alignItems="stretch"
            rowSpacing={{ xs: 5, sm: 10, md: 6, }}
            columnSpacing={{ xs: 1.5, sm: 2, md: 3 }}
          >
            {[
              {

                description:
                  t("telemetryMonitoring.howItWorksFeature1"),
              },
              {

                description:
                  t("telemetryMonitoring.howItWorksFeature2"),
              },
              {

                description:
                  t("telemetryMonitoring.howItWorksFeature3"),
              },
              {

                description:
                  t("telemetryMonitoring.howItWorksFeature4"),
              },

            ].map((feature, index) => (
              <Grid sx={{ display: 'flex' }} item xs={12} sm={6} md={3} key={index}>
                <Box
                  sx={{
                    height: { xs: '100%', sm: '100%', md: '100%', lg: '150px', xl: '150px' },
                    p: { xs: 2, sm: 4, md: 2, xl: 4 },
                    backgroundColor: '#161616',
                    width: '100%',
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

          {/*Benifits*/}
          <Box className="section-container" sx={{ p: 0 ,
              display: 'flex', 
            flexDirection: 'column',
            mb:0
           }} >
            <Typography sx={{ color: '#fcfcfc', mb: 4 }} className='headings-h3'>
              {t("telemetryMonitoring.benefitsTitle")}
            </Typography>
          </Box>

          <Grid container
              rowSpacing={{ xs: 5, sm: 10, md: 6, lg:2 ,xl: 2 }}
            columnSpacing={{ xs: 2, sm: 2, md: 2.5, lg: 2 ,xl: 2 }}
          >
            {[
              {

                description:
                  t("telemetryMonitoring.benefit1"),
              },
              {

                description:
                  t("telemetryMonitoring.benefit2"),
              },
              {

                description:
                  t("telemetryMonitoring.benefit3"),
              },
              {

                description:
                  t("telemetryMonitoring.benefit4"),
              },

              {

                description:
                  t("telemetryMonitoring.benefit5"),
              },

            ].map((feature, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Box
                  sx={{
                    height: { xs: '100%', sm: '100%', md: '100%', lg: '150px', xl: '150px' },
                    p: { xs: 2, sm: 4, md: 2, lg: 2, xl: 3 },
                    backgroundColor: '#161616',
                    border: '1px solid #393939',
                    borderRadius: '24px',
                    // p: "32px",
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}
                >
                  <Box>

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
              {t("telemetryMonitoring.industryComplianceTitle")}
            </Typography>
            <Typography sx={{ mt: 2, color: "#c2c2c4" }} className='bodyRegularText4'>
              {t("telemetryMonitoring.industryComplianceSubtitle")}
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
                sx={{width: "100%",
                  borderRadius: '16px',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column'
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
                    // height: '300px',
                    objectFit: 'cover',

                  }}
                />
                {/* Content */}
                <Box sx={{ py: { xs: 1.5, sm: 2, md: 2.4 }  }}>
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

          <Box  className="section-container" id="contact" sx={{  p :0}}>
       
            <SolutionProductForm />
          </Box>


          {/* FAQ Section */}
          <Box className="section-container" sx={{ p: 0,  width: '100%' }} >
            <Box sx={{ mb: { xs: 5, md: 7 }, textAlign: 'center' }}>
              <Typography className="headings-h2" sx={{ color: '#fcfcfc' }}>
                {t('telemetryMonitoring.title')}
              </Typography>
              <Typography className="bodyMediumText2" sx={{ color: '#C2C2C4' }}>
                {t('telemetryMonitoring.subtitle')}
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
export default Telemetry;