import React,{useEffect} from 'react';
import { Box, } from '@mui/material';
import AnimateButton from '../../Components/CommonComponents/AnimateButton';
import ScrollMaskText from '../../Components/CommonComponents/ScrollMaskText';
import ScrollMaskHeadings from '../../Components/CommonComponents/ScrollMaskHeadings';
import { useTranslation } from 'react-i18next';
import CloudVideo from '../../assets/Home/NAF-cloud-system.mp4'
import { useParams } from 'react-router-dom';

const TakeControl = () => {
  const { t } = useTranslation();
  const { lang } = useParams();

 

  return (
    <Box sx={{ p: { xs: 2, md: 3 } }} className='section-container'>
      <Box
        sx={{
          position: 'relative',

          display: 'flex',
          flexDirection: { xs: 'column-reverse', lg: 'row' },
          alignItems: 'center',
          gap: { xs: 3, md: 5 },
          px: { xs: 1, md: 6 },
          py: { xs: 1, md: 6 },

        }}
      >
        {/* Left Content */}
        <Box sx={{ flex: 1, zIndex: 1 }}>
          <ul style={{ color: '#C2C2C4', fontSize: '16px', fontWeight: 400, paddingLeft: '20px', margin: 0 }}>
            <li className='bodyRegularText3' style={{ wordBreak: 'break-word', whiteSpace: 'pre-wrap', marginBottom: 0 }}>
              {t('Home.CloudSystem')}
            </li>
          </ul>


          <div data-cursor="hover">
            <ScrollMaskHeadings data-cursor="hover" text={t('Home.CloudSystemTitle')} />
          </div>

          <Box sx={{ mb: 3, mt: { xs: '8px', sm: '8px', md: '16px' } }} data-cursor="hover">
            <ScrollMaskText text={t('Home.CloudSystemSubTitle')}
            />
          </Box>

          <AnimateButton route={`/${lang}/software`} />
        </Box>

        {/* Right Image Section */}
        <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end', zIndex: 1 }}>
          <video
            src={CloudVideo}
            aria-label='NAF  Cloud System: Manage Your Vending Network with Ease.'
            autoPlay
            muted
            loop
            playsInline
            style={{
              width: '100%',
              maxWidth: '850px',
              borderRadius: '16px',
              objectFit: 'cover',
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default TakeControl;