import React, { useEffect, lazy, Suspense } from "react";
import { Box, Typography } from '@mui/material';
import './HomePage.css';
import HomepageShowreel from './Homepagereel';
import Explore from './Explore';
import NafApp from "./solutionpages/NafApp";
import Clients from './Clients';
import TakeControl from './TakeControl';
import NafParagrap from './NafParagrap';
import WhatsNew from './WhatsNew';
import AnimateButton from '../../Components/CommonComponents/AnimateButton';
import AutomatsButton from "./AutomatsButton";
import Testmonials from './Testmonials';
import Sustainability from './Sustainability';
import WhoWeServe from './WhoWeServe';
import FooterLogo from '../../assets/footer/Foote-logo.svg'

import Solutions from "./Solutions";
import GradientMaskText from '../../Components/CommonComponents/GradientMaskText';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import VendImg from '../../assets/Home/Gourmet-machine.webp'
import Logourl from '../../assets/Home/NAF-logo.png'
import CookieSettingsButton from './CookieSettingsButton';
import TradefairPopup from './TradefairPopup';

const HomePage = () => {
  const { t } = useTranslation();
  const { lang } = useParams();


  // useEffect(() => {
  //   window.scrollTo(0, 0);
  //   //  document.title = `NAF Vending -${t('titles.Home')}`; // Set tab title
  // }, []);

  return (
    <Box>
      <Helmet>
        {/* Shorter, SEO-Optimized Title (targets "AI vending machines Germany" queries) */}
        <title>NAF Germany: AI-Powered Vending Machines</title>

        {/* Canonical URL */}
        <link rel="canonical" href="https://vendinaf.com/en" />

        {/* Optimized Meta Description */}
        <meta
          name="description"
          content="NAF bietet intelligente, KI-gestützte Gourmet-Verkaufsautomaten mit frischen Speisen, Mehrwegsystemen, Cloud-Technologie und nachhaltiger Food-Automatisierung.
"
        />
        {/*Meta Keywords}*/}
        <meta name='keywords'
          content='NAF Verkaufsautomaten, KI Verkaufsautomaten, smarte Food Automaten, Gourmet Verkaufsautomat, Pizza Automat, automatisierte Gastronomie, nachhaltige Verkaufsautomaten, Mehrwegsystem, Cloud Plattform für Automaten, Smart Gastronomie, Food Automatisierung, KI Food Technologie, Verkaufsautomaten Deutschland
'
        />

        {/* Meta Author and Robots */}
        <meta name="author" content="NAF Vending" />
        <meta name="robots" content="index, follow" />

        {/* HTML Lang */}
        <html lang="en" />

        {/* Open Graph Tags for Social Sharing */}
        <meta property="og:title" content="NAF Germany: AI-Powered Vending Machines" />
        <meta
          property="og:description"
          content="Explore NAF Germany's innovative vending machines – AI-driven, eco-friendly solutions for hotels, events, and more."
        />
        <meta property="og:image" content={VendImg} /> {/* Replace with actual image URL */}
        <meta property="og:url" content="https://vendinaf.com/en" />
        <meta property="og:type" content="website" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="NAF Germany: AI-Powered Vending Machines" />
        <meta
          name="twitter:description"
          content="Explore NAF Germany's innovative vending machines – AI-driven, eco-friendly solutions for hotels, events, and more."
        />
        <meta name="twitter:image" content={VendImg} /> {/* Replace with actual image URL */}

        {/* Structured Data (JSON-LD) for Rich Snippets – Organization with HomePage Focus */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "NAF Germany",
            "url": "https://vendinaf.com",
            "description": "NAF Germany provides AI-powered vending machines and sustainable food solutions with smart cloud technology for various industries.",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://vendinaf.com/en/search?q={search_term_string}",
              "query-input": "required name=search_term_string"
            },
            "mainEntity": {
              "@type": "Organization",
              "name": "NAF Germany",
              "url": "https://vendinaf.com",
              "logo": Logourl, // Replace with actual logo URL
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Obere Straße 3",
                "addressLocality": "Freiberg, OT Halsbach",
                "postalCode": "09599",
                "addressCountry": "Germany"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+49-152-28387141",
                "contactType": "customer service",
                "email": "info@naf-halsbach.de"
              }
            }
          })}
        </script>
      </Helmet>

      {/* <TradefairPopup /> */}
      {/* <CookieSettingsButton /> */}
      <Box className='main-container'>
        <Box sx={{
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxSizing: 'border-box',
          height: '100vh',
          width: '100%'
        }}>
          <Box sx={{ position: 'absolute', width: '50%', height: '50%', background: 'linear-gradient(155deg, rgba(127, 238, 100, 0.60) 8.85%, rgba(250, 120, 84, 0.60) 52.81%)', filter: 'blur(125px)', borderRadius: '50%', }} />
          <Box sx={{ width: '100%', position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <Typography sx={{ color: '#fcfcfc', textAlign: 'center', maxWidth: { xs: '100%', sm: '45%', md: '45%' }, mb: { xs: 0.5, sm: 3, md: 4 }, letterSpacing: 4 }} className="headings-h1">
              {t("Home.mainHeading")}
            </Typography>
            <Typography sx={{ color: '#c2c2c4', textAlign: 'center', maxWidth: '45%' }} className="bodyRegularText4">
              {t("Home.mainParagraph")}
            </Typography>
            <Box data-cursor="hover" className="button-container" sx={{ width: '100%', transform: 'none', gap: '50px', display: 'flex', flexDirection: 'row', justifyContent: 'center', mt: 4 }}>
              <AnimateButton route={`/${lang}/contact`} />
              <AutomatsButton route={`/${lang}/Automats`} />
            </Box>
          </Box>
        </Box>

      </Box>


      <Box
        sx={{
          mt: { xs: -14, md: -12, xl: -18 },
          width: "100%",
          display: 'flex',
          flexDirection: "column",
          justifyContent: "center",
          alignItems: 'center',

        }}
      >
        <Box
          component="img"
          loading="lazy"
          src={VendImg}
          alt="NAF Gourmet Vending Machine Delivering Fresh, High-Quality Food Options."
          sx={{

            width: { xs: "70%", sm: "70%", md: "45%", lg: "35%", xl: "30%", },

            maxWidth: "582px",
            height: "auto",
            maxHeight: "60vh",
            objectFit: "contain",
            display: "block",
          }}

        />
        <div style={{ display: 'flex', justifyContent: 'center', width: { xs: "50%", sm: "70%", md: "45%", lg: "35%", xl: "50%", }, }}>
        <img
          src={FooterLogo}
          alt="logo"
          style={{
            width: "92%",
            maxWidth: { xs: "200px", sm: "300px", md: "300px", lg: "300px", xl: "300px", }, 
            height:  "100%",}}
        />
      </div>
      </Box>
      <HomepageShowreel />
      <Explore />
      {/* <NafApp /> */}
      <Clients />
      <WhoWeServe />
      <Sustainability />
      <Solutions />
      {/*<TakeControl />*/}
      <WhatsNew />
      <NafParagrap />
      <Testmonials />
    </Box>

  );
};

export default HomePage;