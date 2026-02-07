import React, { useEffect }from 'react';
import { Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router-dom';

// Images
import nafcloud from '../../assets/Home/NAFCloud-img.png';
import nafai from '../../assets/Home/NafAi-img.jpg';
import TelemetryMonitoring from '../../assets/Home/TelemetryMonitoring-img.jpg';
import payment from '../../assets/Home/Payments-img.jpg';
import ReuseReturn from '../../assets/Home/Reuse-img.jpg';
import cloudKitchenPayments from '../../assets/Home/cloudKitchenPayments.svg';
import SoftwareIntegration from '../../assets/Home/SoftwareIntegrations-img.jpg';


// Components

import ArrowButton from '../../Components/CommonComponents/ArrowButton';





const Solutions = () => {
  const { t } = useTranslation();
  const { lang } = useParams();
  const navigate = useNavigate();

  //  navigation handler
  const handleMachineClick = (route) => {
    navigate(`/${lang}/${route}`);
  };

  const cards = [
    {
      title: t('solutions.nafCloud.title'),
      desc: t('solutions.nafCloud.desc'),
      image: nafcloud,
      route: 'nafcloud'
    },
    {
      title: t('solutions.nafAI.title'),
      desc: t('solutions.nafAI.desc'),
      image: nafai,
      route: 'nafai'
    },
    {
      title: t('solutions.telemetry.title'),
      desc: t('solutions.telemetry.desc'),
      image: TelemetryMonitoring,
      route: 'telemetry-monitoring'
    },
    {
      title: t('solutions.payments.title'),
      desc: t('solutions.payments.desc'),
      image: payment,
      route: 'payment'
    },
    {
      title: t('solutions.reuse.title'),
      desc: t('solutions.reuse.desc'),
      image: ReuseReturn,
      route: 'reuse-return'
    },
    {
      title: t('solutions.cloudKitchen.title'),
      desc: t('solutions.cloudKitchen.desc'),
      image: cloudKitchenPayments,
      route: 'cloudKitchenPayments'
    },
    {
      title: t('solutions.integration.title'),
      desc: t('solutions.integration.desc'),
      image: SoftwareIntegration,
      route: 'software-integration'
    }
  ];


  return (
    <Box className="section-container" >
      {/* Heading */}
      <Typography sx={{ display: 'flex', justifyContent: 'center', textAlign: 'center' }} className='headings-h2'>
        {t('solutions.heading')}

      </Typography>


      {/* Cards Grid */}
      <Box
        sx={{
          mt: 6,
          display: 'grid',
          gridTemplateColumns: {
            xs: '1fr',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(3, 1fr)',
          },
          gap: '24px',
          rowGap: '40px',
        }}
      >
        {cards.map((card, index) => (
          <Box
            key={index}
            sx={{
              //backgroundColor: '#161616',
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
                backgroundColor: '#262626',
                width: '100%',
                height: '280px',
                objectFit: 'cover',
              }}
            />

            {/* Content */}
            <Box sx={{ py: { xs: 1.5, sm: 2, md: 2.5 }, flexGrow: 1 }}>
              <Typography
                sx={{ color: '#FCFCFC', mb: 1 }}
                className="bodyRegularText3"
              >
                {card.title}
              </Typography>

              <Typography
                sx={{ color: '#C2C2C4', fontSize: '14px', lineHeight: 1.6 }} className='bodyRegularText4'
              >
                {card.desc}
              </Typography>
            </Box>

            {/* Name and button */}
            <Box sx={{
              display: 'flex',
              justifyContent: 'flex-start',
            }}
            >
              <ArrowButton
                sx={{ ml: 'auto', zIndex: "none" }}
                onClick={() => handleMachineClick(card.route)}
              />


            </Box>
          </Box>

        ))}
      </Box>
    </Box>
  );
};

export default Solutions;
