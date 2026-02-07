import { Box, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import AnimateButton from "../../Components/CommonComponents/AnimateButton";
import MaintainceImage from '../../assets/Machines/Maintaince.png'
import { useTranslation } from 'react-i18next';
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import SharedPaymentModal from "../../Components/SharedPaymentModal";

const Maintenance = () => {
  const { t, i18n } = useTranslation();
  const { lang } = useParams();



  const [modalOpen, setModalOpen] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleCloseSuccess = () => {
    setShowSuccess(false);
    closeModal();
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);



  return (
    <Box className='section-container'>
      <Helmet>
        <title>NAF Vending - Automats</title>
        <link rel="canonical" href="https://vendinaf.com/en/maintaince" />
        <meta name='description'
          content="Discover NAF’s AI-powered food vending machines near you. Enjoy fresh, sustainable NAF solutions with smart technology and cloud management. Partner today!" />
        <meta name="keywords"
          content="Pizza vending machine, Fries vending machine, NAF food vending, NAF sustainable vending, Soft ice cream vending, Cotton candy vending, Beer vending machine, Return vending system, Gourmet vending machine, Vending maintenance support, NAF cloud system, Real-time vending analytics, Inventory management vending, Targeted vending ads, Remote machine monitoring, Vending machine leasing, Vending machine partnerships, Germany vending solutions, Innovative vending technology, Food waste reduction vending, Reusable packaging vending, Vending for hotels/universities, Fresh food vending machine, Local food vending, AI vending machines, Smart vending solutions, Automated vending systems, Sustainable vending, Cloud-based vending, Custom vending machines, High-performance vending, Vending machine management, Eco-friendly vending, AI gastronomy, NAF AI vending, NAF vending machines, Near food vending machine, Food vending near me" />
        <meta name="author" content="NAF Vending" />
        <meta name="robots" content="index, follow" />
        <html lang="en" />
      </Helmet>
      <Box
        sx={{
          backgroundColor: '#262626',
          borderRadius: '24px',
          display: 'flex',
          flexDirection: { xs: 'column-reverse', lg: 'row' },
          alignItems: 'center',
          gap: { xs: 3, md: 5 },
          px: { xs: 2, md: 6 },
          py: { xs: 2, md: 6 },
        }}
      >
        {/* Left Content */}
        <Box sx={{ flex: 1, zIndex: 1 }}>
          <div data-cursor="hover">
            <Typography data-cursor="hover" variant='h1' className='headings-h2' sx={{ color: '#FCFCFC' }}>
              {t('machines.NAFMaintenanceTitle')}
            </Typography>
          </div>
          <Box sx={{ mb: 3, mt: 2 }} data-cursor="hover">
            <Typography data-cursor="hover" className='bodyRegularText3' sx={{ color: '#C2C2C4' }}>
              {t('machines.NAFMaintenanceSubTitle')}
            </Typography>
          </Box>

          <div onClick={openModal} style={{ cursor: 'pointer' }}>
            <AnimateButton text1={t('AnimateBtn.raise')} text2={t('AnimateBtn.arequest')} />
          </div>
          <SharedPaymentModal 
            open={modalOpen} 
            handleClose={closeModal} 
            showSuccess={showSuccess}
            handleCloseSuccess={handleCloseSuccess}
            onSuccess={() => setShowSuccess(true)}
          />
        </Box>

        {/* Right Image Section */}
        <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end', zIndex: 1 }}>
          <Box component="img" src={MaintainceImage} alt="NAF : Expert Vending Machine Maintenance for Reliability and Uptime." sx={{ width: '100%', maxWidth: '800px' }} />
        </Box>
      </Box>
    </Box>
  );
};

export default Maintenance;