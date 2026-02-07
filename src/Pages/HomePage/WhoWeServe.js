import React,{ useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router-dom';

// Images
import hotel from '../../assets/Home/WhoWeServe/Hotels-&-restaurants.avif';
import camp from '../../assets/Home/WhoWeServe/Campgrounds.avif';
import school from '../../assets/Home/WhoWeServe/Schools-&-universities1.avif';
import factory from '../../assets/Home/WhoWeServe/Companies-&-factories.avif';
import clinic from '../../assets/Home/WhoWeServe/clinics.avif';
import city from '../../assets/Home/WhoWeServe/Municipalities-&-public-authorities.avif';
import senior from '../../assets/Home/WhoWeServe/SeniorHome.avif';
import transport from '../../assets/Home/WhoWeServe/Gas-stations-&-rest-areas.avif';
import events from '../../assets/Home/WhoWeServe/Events-&-festivals.avif';
import office from '../../assets/Home/WhoWeServe/offices.avif';

// Components
import ArrowButton from '../../Components/CommonComponents/ArrowButton';
import ScrollMaskHeadings from '../../Components/CommonComponents/ScrollMaskHeadings';
import ScrollMaskText from '../../Components/CommonComponents/ScrollMaskText';

const WhoWeServe = () => {
  const { t } = useTranslation();
  const { lang } = useParams();
  const navigate = useNavigate();

  //  navigation handler
  const handleMachineClick = (route) => {
    navigate(`/${lang}/${route}`);
  };

  //  Cards data with routes
const cards = [
  {
    title: t('whoWeServe.hotels.title'),
    desc: t('whoWeServe.hotels.desc'),
    image: hotel,
    route: 'hotelsresorts',
  },
  {
    title: t('whoWeServe.campgrounds.title'),
    desc: t('whoWeServe.campgrounds.desc'),
    image: camp,
    route: 'campgrounds',
  },
  {
    title: t('whoWeServe.schools.title'),
    desc: t('whoWeServe.schools.desc'),
    image: school,
    route: 'schools-universities',
  },
  {
    title: t('whoWeServe.factories.title'),
    desc: t('whoWeServe.factories.desc'),
    image: factory,
    route: 'factories',
  },
  {
    title: t('whoWeServe.clinics.title'),
    desc: t('whoWeServe.clinics.desc'),
    image: clinic,
    route: 'clinics',
  },
  {
    title: t('whoWeServe.municipalities.title'),
    desc: t('whoWeServe.municipalities.desc'),
    image: city,
    route: 'municipalities',
  },
  {
    title: t('whoWeServe.seniorHomes.title'),
    desc: t('whoWeServe.seniorHomes.desc'),
    image: senior,
    route: 'senior-homes',
  },
  {
    title: t('whoWeServe.transport.title'),
    desc: t('whoWeServe.transport.desc'),
    image: transport,
    route: 'transportation',
  },
  {
    title: t('whoWeServe.events.title'),
    desc: t('whoWeServe.events.desc'),
    image: events,
    route: 'events-festivals',
  },
  {
    title: t('whoWeServe.offices.title'),
    desc: t('whoWeServe.offices.desc'),
    image: office,
    route: 'offices',
  },
];


  return (
    <Box className="section-container" sx={{  }}>
      {/* Heading */}
      <ScrollMaskHeadings text={t('whoWeServe.heading')} />
      <Box sx={{ mt: 2 }} className="bodyRegularText4">
       <ScrollMaskText text={t('whoWeServe.subheading')} />
      </Box>

      {/* Cards Grid */}
      <Box
        sx={{
          mt: 6,
          display: 'grid',
          gridTemplateColumns: {
            xs: '1fr',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(4, 1fr)',
          },
          gap: '24px',
        }}
      >
        {cards.map((card, index) => (
          <Box
            key={index}
            sx={{
              backgroundColor: '#262626',
              borderRadius: '10px',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              height: '100%',
            }}
          >
            {/* Image */}
            <Box
              component="img"
              src={card.image}
              alt={card.title}
              sx={{
                width: '100%',
                height: '250px',
                objectFit: 'cover',
              }}
            />

            {/* Content */}
            <Box sx={{ p: 2, flexGrow: 1 }}>
              <Typography sx={{ color: '#FCFCFC', mb: 1 }} className="bodyRegularText3">
                {card.title}
              </Typography>

              <Typography
                sx={{ color: '#C2C2C4', fontSize: '14px', lineHeight: 1.6 }}
                className="bodyRegularText4"
              >
                {card.desc}
              </Typography>
            </Box>

            {/* Arrow Button */}
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'flex-end',
                p: 2,
              }}
            >
              <ArrowButton
                onClick={() => handleMachineClick(card.route)}
              />
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default WhoWeServe;
