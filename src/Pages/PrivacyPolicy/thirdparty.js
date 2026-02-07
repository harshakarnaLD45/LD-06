import React, { useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import "./privacypolicy.css";

const ThirdPartyPage = () => {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box className="section-container" sx={{ color: '#FCFCFC', padding: 0 }}>
      <Typography id="Third_party_integration"  className='headings-h1' variant="h3" gutterBottom>
        {t('privacypolicy.thirdpartyTitle')}
      </Typography>

      {/* 1. Introduction */}
      <Box id="introduction" my={5}>
        <Typography 
          className='headings-h3 policy_heading' 
          variant="h5" 
          sx={{ 
            color: '#fcfcfc',
            fontWeight: 600,
            mb: 2
          }}
        >
          {t('privacypolicy.thirdparty1Title')}
        </Typography>

        <Box>
         <Box sx={{ 
              display: 'block', 
              alignItems: 'center', 
              mb: 2, 
              wordWrap: 'break-word', 
              overflowWrap: 'break-word',
              wordBreak: 'break-word',
              whiteSpace: 'normal',
              maxWidth: '100%'
            }}>

           
            {t('privacypolicy.thirdparty1Text1')}{' '}
            
            <span className='bodyRegularText3 shantellSansFont' style={{ 
              fontWeight: 700, 
              color: '#fcfcfc', 
              wordWrap: 'break-word', 
              overflowWrap: 'break-word',
              wordBreak: 'break-word',
              whiteSpace: 'normal',
              display: 'inline-block',
              textWrap:'wrap',
              maxWidth: '100%'
            }}>
              {t('privacypolicy.thirdparty1CompanyName')}
            </span>
           
            {t('privacypolicy.thirdparty1Text2')}
           
            </Box>

          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
            {t('privacypolicy.thirdparty1Text3')}
          </Typography>

          <Box component="ul" sx={{ 
            pl: 4, 
            mb: 3,
            '& li': {
              marginBottom: 0.5
            }
          }}>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.thirdparty1Platform1')}{' '}
              <Typography component="span" sx={{ fontWeight: 700, color: '#fcfcfc' }}>
                {t('privacypolicy.thirdparty1Platform1Name')}
              </Typography>,
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.thirdparty1Platform2')}{' '}
              <Typography component="span" sx={{ fontWeight: 700, color: '#fcfcfc' }}>
                {t('privacypolicy.thirdparty1Platform2Name')}
              </Typography>{t('privacypolicy.thirdparty1Platform2End')}
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.thirdparty1Platform3')}{' '}
              <Typography component="span" sx={{ fontWeight: 700, color: '#fcfcfc' }}>
                {t('privacypolicy.thirdparty1Platform3Name')}
              </Typography>{t('privacypolicy.thirdparty1Platform3End')}
            </Typography>
          </Box>

          <Typography className='bodyRegularText3 shantellSansFont' variant="body1">
            {t('privacypolicy.thirdparty1Text4')}{' '}
            <Typography component="span" sx={{ fontWeight: 700, color: '#fcfcfc' }}>
              {t('privacypolicy.thirdparty1DataProcessors')}
            </Typography>{' '}
            {t('privacypolicy.thirdparty1Text5')}
          </Typography>
        </Box>
      </Box>

      {/* 2. General Principles for Third-Party Use */}
      <Box id="general-principles" my={5}>
        <Typography 
          className='headings-h3 policy_heading' 
          variant="h5" 
          sx={{ 
            color: '#fcfcfc',
            fontWeight: 600,
            mb: 2
          }}
        >
          {t('privacypolicy.thirdparty2Title')}
        </Typography>

        {/* 2.1 Purpose Limitation */}
        <Box sx={{ mb: 4 }}>
          <Typography 
            className='headings-h4' 
            variant="h6" 
            gutterBottom
            sx={{ 
              color: '#fcfcfc',
              fontWeight: 600,
              mb: 2
            }}
          >
            {t('privacypolicy.thirdparty2_1Title')}
          </Typography>

          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
            {t('privacypolicy.thirdparty2_1Text1')}
          </Typography>

          <Box component="ul" sx={{ 
            pl: 4, 
            mb: 3,
            '& li': {
              marginBottom: 0.5
            }
          }}>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.thirdparty2_1Purpose1')}
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.thirdparty2_1Purpose2')}
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.thirdparty2_1Purpose3')}
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.thirdparty2_1Purpose4')}
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.thirdparty2_1Purpose5')}
            </Typography>
          </Box>

          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
            {t('privacypolicy.thirdparty2_1Text2')}
          </Typography>
        </Box>

        {/* 2.2 Data Minimisation */}
        <Box sx={{ mb: 4 }}>
          <Typography 
            className='headings-h4' 
            variant="h6" 
            gutterBottom
            sx={{ 
              color: '#fcfcfc',
              fontWeight: 600,
              mb: 2
            }}
          >
            {t('privacypolicy.thirdparty2_2Title')}
          </Typography>

          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
            {t('privacypolicy.thirdparty2_2Text1')}
          </Typography>

          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
            {t('privacypolicy.thirdparty2_2Text2')}
          </Typography>
        </Box>

        {/* 2.3 Contractual Safeguards */}
        <Box sx={{ mb: 4 }}>
          <Typography 
            className='headings-h4' 
            variant="h6" 
            gutterBottom
            sx={{ 
              color: '#fcfcfc',
              fontWeight: 600,
              mb: 2
            }}
          >
            {t('privacypolicy.thirdparty2_3Title')}
          </Typography>

          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
            {t('privacypolicy.thirdparty2_3Text1')}
          </Typography>

          <Box component="ul" sx={{ 
            pl: 4, 
            mb: 3,
            '& li': {
              marginBottom: 0.5
            }
          }}>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.thirdparty2_3Safeguard1')}
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.thirdparty2_3Safeguard2')}
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.thirdparty2_3Safeguard3')}
            </Typography>
          </Box>

          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" sx={{ fontWeight: 600, color: '#fcfcfc' }}>
            {t('privacypolicy.thirdparty2_3LegalLabel')}
          </Typography>
          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" sx={{ ml: 2 }}>
            {t('privacypolicy.thirdparty2_3Legal').split('\n').map((line, i) => (<span className='bodyRegularText3 shantellSansFont' key={i}>{line}<br /></span>))}
          </Typography>
        </Box>
      </Box>

      {/* 3. Core Infrastructure and Cloud Hosting */}
      <Box id="core-infrastructure" my={5}>
        <Typography 
          className='headings-h3 policy_heading' 
          variant="h5" 
          sx={{ 
            color: '#fcfcfc',
            fontWeight: 600,
            mb: 2
          }}
        >
          {t('privacypolicy.thirdparty3Title')}
        </Typography>

        {/* 3.1 Amazon Web Services (AWS) */}
        <Box sx={{ mb: 4 }}>
          <Typography 
            className='headings-h4' 
            variant="h6" 
            gutterBottom
            sx={{ 
              color: '#fcfcfc',
              fontWeight: 600,
              mb: 2
            }}
          >
            {t('privacypolicy.thirdparty3_1Title')}
          </Typography>

          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
            <Typography component="span" sx={{ fontWeight: 700, color: '#fcfcfc' }}>
              {t('privacypolicy.thirdparty3_1UsedByLabel')}
            </Typography>{' '}
            {t('privacypolicy.thirdparty3_1UsedByValue')}
          </Typography>

          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
            {t('privacypolicy.thirdparty3_1Text1')}
          </Typography>

          <Box component="ul" sx={{ 
            pl: 4, 
            mb: 3,
            '& li': {
              marginBottom: 0.5
            }
          }}>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.thirdparty3_1Purpose1')}
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.thirdparty3_1Purpose2')}
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.thirdparty3_1Purpose3')}
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.thirdparty3_1Purpose4')}
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.thirdparty3_1Purpose5')}
            </Typography>
          </Box>

          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
              {t('privacypolicy.thirdparty3_1DataLabel')}
          </Typography>

          <Box component="ul" sx={{ 
            pl: 4,
            mb: 3,
            '& li': {
              marginBottom: 0.5
            }
          }}>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.thirdparty3_1Data1')}
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.thirdparty3_1Data2')}
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.thirdparty3_1Data3')}
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.thirdparty3_1Data4')}
            </Typography>
          </Box>

          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
            {t('privacypolicy.thirdparty3_1Text2')}{' '}
            <Typography component="span" sx={{ fontWeight: 700, color: '#fcfcfc' }}>
              {t('privacypolicy.thirdparty3_1EU')}
            </Typography>.
          </Typography>

          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
            {t('privacypolicy.thirdparty3_1Text3')}
          </Typography>

          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" sx={{ fontWeight: 600, color: '#fcfcfc' }}>
            {t('privacypolicy.thirdparty3_1LegalLabel')}
          </Typography>
          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" sx={{ ml: 2 }}>
            {t('privacypolicy.thirdparty3_1Legal').split('\n').map((line, i) => (<span className='bodyRegularText3 shantellSansFont' key={i}>{line}<br /></span>))}
          </Typography>
        </Box>
      </Box>

      {/* 4. Payment Processing */}
      <Box id="payment-processing" my={5}>
        <Typography 
          className='headings-h3 policy_heading' 
          variant="h5" 
          sx={{ 
            color: '#fcfcfc',
            fontWeight: 600,
            mb: 2
          }}
        >
          {t('privacypolicy.thirdparty4Title')}
        </Typography>

        {/* 4.1 Stripe */}
        <Box sx={{ mb: 4 }}>
          <Typography 
            className='headings-h4' 
            variant="h6" 
            gutterBottom
            sx={{ 
              color: '#fcfcfc',
              fontWeight: 600,
              mb: 2
            }}
          >
            {t('privacypolicy.thirdparty4_1Title')}
          </Typography>

          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
            <Typography component="span" sx={{ fontWeight: 700, color: '#fcfcfc' }}>
              {t('privacypolicy.thirdparty4_1UsedByLabel')}
            </Typography>{' '}
            {t('privacypolicy.thirdparty4_1UsedByValue')}
          </Typography>

          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
            {t('privacypolicy.thirdparty4_1Text1')}{' '}
            <Typography component="span" sx={{ fontWeight: 700, color: '#fcfcfc' }}>
              {t('privacypolicy.thirdparty4_1SoleProcessor')}
            </Typography>{' '}
            {t('privacypolicy.thirdparty4_1Text2')}
          </Typography>

          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
            {t('privacypolicy.thirdparty4_1Text3')}
          </Typography>

          <Box component="ul" sx={{ 
            pl: 4, 
            mb: 3,
            '& li': {
              marginBottom: 0.5
            }
          }}>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.thirdparty4_1Process1')}
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.thirdparty4_1Process2')}
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.thirdparty4_1Process3')}
            </Typography>
          </Box>

          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
            {t('privacypolicy.thirdparty4_1Text4')}
          </Typography>

          <Box component="ul" sx={{ 
            pl: 4, 
            mb: 3,
            '& li': {
              marginBottom: 0.5
            }
          }}>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.thirdparty4_1NAF1')}{' '}
              <Typography component="span" sx={{ fontWeight: 700, color: '#fcfcfc' }}>
                {t('privacypolicy.thirdparty4_1Not')}
              </Typography>{' '}
              {t('privacypolicy.thirdparty4_1NAF1End')}
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.thirdparty4_1NAF2')}
            </Typography>
          </Box>

          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
            {t('privacypolicy.thirdparty4_1Text5')}
          </Typography>

          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" sx={{ fontWeight: 600, color: '#fcfcfc' }}>
            {t('privacypolicy.thirdparty4_1LegalLabel')}
          </Typography>
          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" sx={{ ml: 2 }}>
            {t('privacypolicy.thirdparty4_1Legal').split('\n').map((line, i) => (<span className='bodyRegularText3 shantellSansFont' key={i}>{line}<br /></span>))}
          </Typography>
        </Box>
      </Box>

      {/* 5. Email and Communication Services */}
      <Box id="email-communication" my={5}>
        <Typography 
          className='headings-h3 policy_heading' 
          variant="h5" 
          sx={{ 
            color: '#fcfcfc',
            fontWeight: 600,
            mb: 2
          }}
        >
          {t('privacypolicy.thirdparty5Title')}
        </Typography>

        {/* 5.1 Amazon Simple Email Service (SES) */}
        <Box sx={{ mb: 4 }}>
          <Typography 
            className='headings-h4' 
            variant="h6" 
            gutterBottom
            sx={{ 
              color: '#fcfcfc',
              fontWeight: 600,
              mb: 2
            }}
          >
            {t('privacypolicy.thirdparty5_1Title')}
          </Typography>

          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
            <Typography component="span" sx={{ fontWeight: 700, color: '#fcfcfc' }}>
              {t('privacypolicy.thirdparty5_1UsedByLabel')}
            </Typography>{' '}
            {t('privacypolicy.thirdparty5_1UsedByValue')}
          </Typography>

          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
            {t('privacypolicy.thirdparty5_1Text1')}
          </Typography>

          <Box component="ul" sx={{ 
            pl: 4, 
            mb: 3,
            '& li': {
              marginBottom: 0.5
            }
          }}>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.thirdparty5_1Send1')}
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.thirdparty5_1Send2')}
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.thirdparty5_1Send3')}
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.thirdparty5_1Send4')}
            </Typography>
          </Box>

          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
            <Typography component="span" sx={{ fontWeight: 700, color: '#fcfcfc' }}>
              {t('privacypolicy.thirdparty5_1DataLabel')}
            </Typography>
          </Typography>

          <Box component="ul" sx={{ 
            pl: 4, 
            mb: 3,
            '& li': {
              marginBottom: 0.5
            }
          }}>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.thirdparty5_1Data1')}
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.thirdparty5_1Data2')}
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.thirdparty5_1Data3')}
            </Typography>
          </Box>

          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
            {t('privacypolicy.thirdparty5_1Text2')}
          </Typography>

          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" sx={{ fontWeight: 600, color: '#fcfcfc' }}>
            {t('privacypolicy.thirdparty5_1LegalLabel')}
          </Typography>
          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" sx={{ ml: 2 }}>
            {t('privacypolicy.thirdparty5_1Legal').split('\n').map((line, i) => (<span className='bodyRegularText3 shantellSansFont' key={i}>{line}<br /></span>))}
          </Typography>
        </Box>
      </Box>

      {/* 6. Analytics, Monitoring, and Diagnostics */}
      <Box id="analytics-monitoring" my={5}>
        <Typography 
          className='headings-h3 policy_heading' 
          variant="h5" 
          sx={{ 
            color: '#fcfcfc',
            fontWeight: 600,
            mb: 2
          }}
        >
          {t('privacypolicy.thirdparty6Title')}
        </Typography>

        {/* 6.1 Website Analytics Tools */}
        <Box sx={{ mb: 4 }}>
          <Typography 
            className='headings-h4' 
            variant="h6" 
            gutterBottom
            sx={{ 
              color: '#fcfcfc',
              fontWeight: 600,
              mb: 2
            }}
          >
            {t('privacypolicy.thirdparty6_1Title')}
          </Typography>

          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
            <Typography component="span" sx={{ fontWeight: 700, color: '#fcfcfc' }}>
              {t('privacypolicy.thirdparty6_1UsedByLabel')}
            </Typography>{' '}
            {t('privacypolicy.thirdparty6_1UsedByValue')}
          </Typography>

          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
            {t('privacypolicy.thirdparty6_1Text1')}
          </Typography>

          <Box component="ul" sx={{ 
            pl: 4, 
            mb: 3,
            '& li': {
              marginBottom: 0.5
            }
          }}>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.thirdparty6_1Tool1')}
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.thirdparty6_1Tool2')}
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.thirdparty6_1Tool3')}
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.thirdparty6_1Tool4')}
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.thirdparty6_1Tool5')}
            </Typography>
          </Box>

          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
            {t('privacypolicy.thirdparty6_1Text2')}
          </Typography>

          <Box component="ul" sx={{ 
            pl: 4, 
            mb: 3,
            '& li': {
              marginBottom: 0.5
            }
          }}>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.thirdparty6_1Process1')}
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.thirdparty6_1Process2')}
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.thirdparty6_1Process3')}
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.thirdparty6_1Process4')}
            </Typography>
          </Box>

          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
            {t('privacypolicy.thirdparty6_1Text3')}
          </Typography>

          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" sx={{ fontWeight: 600, color: '#fcfcfc' }}>
            {t('privacypolicy.thirdparty6_1LegalLabel')}
          </Typography>
          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" sx={{ ml: 2 }}>
            {t('privacypolicy.thirdparty6_1Legal')}
          </Typography>
        </Box>

        {/* 6.2 Mobile App Analytics and Crash Reporting */}
        <Box sx={{ mb: 4 }}>
          <Typography 
            className='headings-h4' 
            variant="h6" 
            gutterBottom
            sx={{ 
              color: '#fcfcfc',
              fontWeight: 600,
              mb: 2
            }}
          >
            {t('privacypolicy.thirdparty6_2Title')}
          </Typography>

          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
            <Typography component="span" sx={{ fontWeight: 700, color: '#fcfcfc' }}>
              {t('privacypolicy.thirdparty6_2UsedByLabel')}
            </Typography>{' '}
            {t('privacypolicy.thirdparty6_2UsedByValue')}
          </Typography>

          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
            {t('privacypolicy.thirdparty6_2Text1')}
          </Typography>

          <Box component="ul" sx={{ 
            pl: 4, 
            mb: 3,
            '& li': {
              marginBottom: 0.5
            }
          }}>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.thirdparty6_2Setting1')}
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.thirdparty6_2Setting2')}
            </Typography>
          </Box>

          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
            {t('privacypolicy.thirdparty6_2Text2')}
          </Typography>

          <Box component="ul" sx={{ 
            pl: 4, 
            mb: 3,
            '& li': {
              marginBottom: 0.5
            }
          }}>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.thirdparty6_2Data1')}
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.thirdparty6_2Data2')}
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.thirdparty6_2Data3')}
            </Typography>
          </Box>

          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" sx={{ fontWeight: 600, color: '#fcfcfc' }}>
            {t('privacypolicy.thirdparty6_2LegalLabel')}
          </Typography>
          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" sx={{ ml: 2 }}>
            {t('privacypolicy.thirdparty6_2Legal')}
          </Typography>
        </Box>
      </Box>

      {/* 7. Mapping and Geolocation Services */}
      <Box id="mapping-geolocation" my={5}>
        <Typography 
          className='headings-h3 policy_heading' 
          variant="h5" 
          sx={{ 
            color: '#fcfcfc',
            fontWeight: 600,
            mb: 2
          }}
        >
          {t('privacypolicy.thirdparty7Title')}
        </Typography>

        {/* 7.1 Mapping Providers */}
        <Box sx={{ mb: 4 }}>
          <Typography 
            className='headings-h4' 
            variant="h6" 
            gutterBottom
            sx={{ 
              color: '#fcfcfc',
              fontWeight: 600,
              mb: 2
            }}
          >
            {t('privacypolicy.thirdparty7_1Title')}
          </Typography>

          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
            <Typography component="span" sx={{ fontWeight: 700, color: '#fcfcfc' }}>
              {t('privacypolicy.thirdparty7_1UsedByLabel')}
            </Typography>{' '}
            {t('privacypolicy.thirdparty7_1UsedByValue')}
          </Typography>

          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
            {t('privacypolicy.thirdparty7_1Text1')}
          </Typography>

          <Box component="ul" sx={{ 
            pl: 4, 
            mb: 3,
            '& li': {
              marginBottom: 0.5
            }
          }}>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.thirdparty7_1Provider1')}
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.thirdparty7_1Provider2')}
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.thirdparty7_1Provider3')}
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.thirdparty7_1Provider4')}
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.thirdparty7_1Provider5')}
            </Typography>
          </Box>

          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
            {t('privacypolicy.thirdparty7_1Text2')}
          </Typography>

          <Box component="ul" sx={{ 
            pl: 4, 
            mb: 3,
            '& li': {
              marginBottom: 0.5
            }
          }}>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.thirdparty7_1Purpose1')}
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.thirdparty7_1Purpose2')}
            </Typography>
          </Box>

          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
            {t('privacypolicy.thirdparty7_1Text3')}
          </Typography>

          <Box component="ul" sx={{ 
            pl: 4, 
            mb: 3,
            '& li': {
              marginBottom: 0.5
            }
          }}>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.thirdparty7_1Data1')}
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.thirdparty7_1Data2')}
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* 8. Frontend UI, Styling, and Animation Libraries */}
      <Box id="frontend-ui" my={5}>
        <Typography 
          className='headings-h3 policy_heading' 
          variant="h5" 
          sx={{ 
            color: '#fcfcfc',
            fontWeight: 600,
            mb: 2
          }}
        >
          {t('privacypolicy.thirdparty8Title')}
        </Typography>

        {/* 8.1 UI Frameworks */}
        <Box sx={{ mb: 4 }}>
          <Typography 
            className='headings-h4' 
            variant="h6" 
            gutterBottom
            sx={{ 
              color: '#fcfcfc',
              fontWeight: 600,
              mb: 2
            }}
          >
            {t('privacypolicy.thirdparty8_1Title')}
          </Typography>

          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
            <Typography component="span" sx={{ fontWeight: 700, color: '#fcfcfc' }}>
              {t('privacypolicy.thirdparty8_1UsedByLabel')}
            </Typography>{' '}
            {t('privacypolicy.thirdparty8_1UsedByValue')}
          </Typography>

          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
            {t('privacypolicy.thirdparty8_1Text1')}
          </Typography>

          <Box component="ul" sx={{ 
            pl: 4, 
            mb: 3,
            '& li': {
              marginBottom: 0.5
            }
          }}>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.thirdparty8_1Library1')}
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.thirdparty8_1Library2')}
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.thirdparty8_1Library3')}
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.thirdparty8_1Library4')}
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.thirdparty8_1Library5')}
            </Typography>
          </Box>

          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
            {t('privacypolicy.thirdparty8_1Text2')}
          </Typography>

          <Box component="ul" sx={{ 
            pl: 4, 
            mb: 3,
            '& li': {
              marginBottom: 0.5
            }
          }}>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.thirdparty8_1Feature1')}
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.thirdparty8_1Feature2')}
            </Typography>
          </Box>
        </Box>

        {/* 8.2 Animation and Interaction Libraries */}
        <Box sx={{ mb: 4 }}>
          <Typography 
            className='headings-h4' 
            variant="h6" 
            gutterBottom
            sx={{ 
              color: '#fcfcfc',
              fontWeight: 600,
              mb: 2
            }}
          >
            {t('privacypolicy.thirdparty8_2Title')}
          </Typography>

          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
            {t('privacypolicy.thirdparty8_2Text1')}
          </Typography>

          <Box component="ul" sx={{ 
            pl: 4, 
            mb: 3,
            '& li': {
              marginBottom: 0.5
            }
          }}>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.thirdparty8_2Library1')}
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.thirdparty8_2Library2')}
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.thirdparty8_2Library3')}
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.thirdparty8_2Library4')}
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.thirdparty8_2Library5')}
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.thirdparty8_2Library6')}
            </Typography>
          </Box>

          <Typography className='bodyRegularText3 shantellSansFont' variant="body1">
            {t('privacypolicy.thirdparty8_2Text2')}
          </Typography>
        </Box>
      </Box>

      {/* 9. Internationalisation (i18n) */}
      <Box id="internationalisation" my={5}>
        <Typography 
          className='headings-h3 policy_heading' 
          variant="h5" 
          sx={{ 
            color: '#fcfcfc',
            fontWeight: 600,
            mb: 2
          }}
        >
          {t('privacypolicy.thirdparty9Title')}
        </Typography>

        <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
          {t('privacypolicy.thirdparty9Text1')}
        </Typography>

        <Box component="ul" sx={{ 
          pl: 4, 
          mb: 3,
          '& li': {
            marginBottom: 0.5
          }
        }}>
          <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
            {t('privacypolicy.thirdparty9Library1')}
          </Typography>
          <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
            {t('privacypolicy.thirdparty9Library2')}
          </Typography>
          <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
            {t('privacypolicy.thirdparty9Library3')}
          </Typography>
          <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
            {t('privacypolicy.thirdparty9Library4')}
          </Typography>
        </Box>

        <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
          <Typography component="span" sx={{ fontWeight: 700, color: '#fcfcfc' }}>
            {t('privacypolicy.thirdparty9DataLabel')}
          </Typography>
        </Typography>

        <Box component="ul" sx={{ 
          pl: 4, 
          mb: 3,
          '& li': {
            marginBottom: 0.5
          }
        }}>
          <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
            {t('privacypolicy.thirdparty9Data1')}
          </Typography>
          <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
            {t('privacypolicy.thirdparty9Data2')}
          </Typography>
        </Box>

        <Typography className='bodyRegularText3 shantellSansFont' variant="body1" sx={{ fontWeight: 600, color: '#fcfcfc' }}>
          {t('privacypolicy.thirdparty9LegalLabel')}
        </Typography>
        <Typography className='bodyRegularText3 shantellSansFont' variant="body1" sx={{ ml: 2 }}>
          {t('privacypolicy.thirdparty9Legal')}
        </Typography>
      </Box>

      {/* 10. Backend Frameworks and Services */}
      <Box id="backend-frameworks" my={5}>
        <Typography 
          className='headings-h3 policy_heading' 
          variant="h5" 
          sx={{ 
            color: '#fcfcfc',
            fontWeight: 600,
            mb: 2
          }}
        >
          {t('privacypolicy.thirdparty10Title')}
        </Typography>

        {/* 10.1 Core Backend Technologies */}
        <Box sx={{ mb: 4 }}>
          <Typography 
            className='headings-h4' 
            variant="h6" 
            gutterBottom
            sx={{ 
              color: '#fcfcfc',
              fontWeight: 600,
              mb: 2
            }}
          >
            {t('privacypolicy.thirdparty10_1Title')}
          </Typography>

          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
            {t('privacypolicy.thirdparty10_1Text1')}
          </Typography>

          <Box component="ul" sx={{ 
            pl: 4, 
            mb: 3,
            '& li': {
              marginBottom: 0.5
            }
          }}>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.thirdparty10_1Tech1')}
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.thirdparty10_1Tech2')}
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.thirdparty10_1Tech3')}
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.thirdparty10_1Tech4')}
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.thirdparty10_1Tech5')}
            </Typography>
          </Box>

          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
            {t('privacypolicy.thirdparty10_1Text2')}
          </Typography>

          <Box component="ul" sx={{ 
            pl: 4, 
            mb: 3,
            '& li': {
              marginBottom: 0.5
            }
          }}>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.thirdparty10_1Component1')}
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.thirdparty10_1Component2')}
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.thirdparty10_1Component3')}
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.thirdparty10_1Component4')}
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.thirdparty10_1Component5')}
            </Typography>
          </Box>
        </Box>

        {/* 10.2 IoT and Machine Communication */}
        <Box sx={{ mb: 4 }}>
          <Typography 
            className='headings-h4' 
            variant="h6" 
            gutterBottom
            sx={{ 
              color: '#fcfcfc',
              fontWeight: 600,
              mb: 2
            }}
          >
            {t('privacypolicy.thirdparty10_2Title')}
          </Typography>

          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
            <Typography component="span" sx={{ fontWeight: 700, color: '#fcfcfc' }}>
              {t('privacypolicy.thirdparty10_2UsedByLabel')}
            </Typography>{' '}
            {t('privacypolicy.thirdparty10_2UsedByValue')}
          </Typography>

          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph sx={{ ml: 2 }}>
            {t('privacypolicy.thirdparty10_2Text1')}
          </Typography>

          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
            <Typography component="span" sx={{ fontWeight: 700, color: '#fcfcfc' }}>
              {t('privacypolicy.thirdparty10_2DataLabel')}
            </Typography>
          </Typography>

          <Box component="ul" sx={{ 
            pl: 4, 
            mb: 3,
            '& li': {
              marginBottom: 0.5
            }
          }}>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.thirdparty10_2Data1')}
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.thirdparty10_2Data2')}
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.thirdparty10_2Data3')}
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.thirdparty10_2Data4')}
            </Typography>
          </Box>

          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
            {t('privacypolicy.thirdparty10_2Text2')}
          </Typography>
        </Box>
      </Box>

      {/* 11. Security, Monitoring, and Quality Assurance Tools */}
      <Box id="security-monitoring" my={5}>
        <Typography 
          className='headings-h3 policy_heading' 
          variant="h5" 
          sx={{ 
            color: '#fcfcfc',
            fontWeight: 600,
            mb: 2
          }}
        >
          {t('privacypolicy.thirdparty11Title')}
        </Typography>

        <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
          {t('privacypolicy.thirdparty11Text1')}
        </Typography>

        <Box component="ul" sx={{ 
          pl: 4, 
          mb: 3,
          '& li': {
            marginBottom: 0.5
          }
        }}>
          <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
            {t('privacypolicy.thirdparty11Tool1')}
          </Typography>
          <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
            {t('privacypolicy.thirdparty11Tool2')}
          </Typography>
          <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
            {t('privacypolicy.thirdparty11Tool3')}
          </Typography>
          <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
            {t('privacypolicy.thirdparty11Tool4')}
          </Typography>
          <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
            {t('privacypolicy.thirdparty11Tool5')}
          </Typography>
          <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
            {t('privacypolicy.thirdparty11Tool6')}
          </Typography>
          <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
            {t('privacypolicy.thirdparty11Tool7')}
          </Typography>
        </Box>

        <Typography className='bodyRegularText3 shantellSansFont' variant="body1">
          {t('privacypolicy.thirdparty11Text2')}
        </Typography>
      </Box>

      {/* 12. Build, CI/CD, and Deployment Tools */}
      <Box id="build-cicd" my={5}>
        <Typography 
          className='headings-h3 policy_heading' 
          variant="h5" 
          sx={{ 
            color: '#fcfcfc',
            fontWeight: 600,
            mb: 2
          }}
        >
          {t('privacypolicy.thirdparty12Title')}
        </Typography>

        <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
          {t('privacypolicy.thirdparty12Text1')}
        </Typography>

        <Box component="ul" sx={{ 
          pl: 4, 
          mb: 3,
          '& li': {
            marginBottom: 0.5
          }
        }}>
          <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
            {t('privacypolicy.thirdparty12Tool1')}
          </Typography>
          <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
            {t('privacypolicy.thirdparty12Tool2')}
          </Typography>
          <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
            {t('privacypolicy.thirdparty12Tool3')}
          </Typography>
          <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
            {t('privacypolicy.thirdparty12Tool4')}
          </Typography>
          <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
            {t('privacypolicy.thirdparty12Tool5')}
          </Typography>
        </Box>

        <Typography className='bodyRegularText3 shantellSansFont' variant="body1">
          {t('privacypolicy.thirdparty12Text2')}
        </Typography>
      </Box>

      {/* 13. Third-Party Assets, Media, and Design Resources */}
      <Box id="third-party-assets" my={5}>
        <Typography 
          className='headings-h3 policy_heading' 
          variant="h5" 
          sx={{ 
            color: '#fcfcfc',
            fontWeight: 600,
            mb: 2
          }}
        >
          {t('privacypolicy.thirdparty13Title')}
        </Typography>

        {/* 13.1 Icons and UI Assets */}
        <Box sx={{ mb: 4 }}>
          <Typography 
            className='headings-h4' 
            variant="h6" 
            gutterBottom
            sx={{ 
              color: '#fcfcfc',
              fontWeight: 600,
              mb: 2
            }}
          >
            {t('privacypolicy.thirdparty13_1Title')}
          </Typography>

          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
            {t('privacypolicy.thirdparty13_1Text1')}
          </Typography>

          <Box component="ul" sx={{ 
            pl: 4, 
            mb: 3,
            '& li': {
              marginBottom: 0.5
            }
          }}>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.thirdparty13_1Platform1')}
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.thirdparty13_1Platform2')}
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.thirdparty13_1Platform3')}
            </Typography>
          </Box>

          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
            {t('privacypolicy.thirdparty13_1Text2')}
          </Typography>

          <Box component="ul" sx={{ 
            pl: 4, 
            mb: 3,
            '& li': {
              marginBottom: 0.5
            }
          }}>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.thirdparty13_1Feature1')}
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.thirdparty13_1Feature2')}
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.thirdparty13_1Feature3')}
            </Typography>
          </Box>

          <Typography className='bodyRegularText3 shantellSansFont' variant="body1">
            {t('privacypolicy.thirdparty13_1Text3')}
          </Typography>
        </Box>

        {/* 13.2 Images, Videos, SVGs, and Media Assets */}
        <Box sx={{ mb: 4 }}>
          <Typography 
            className='headings-h4' 
            variant="h6" 
            gutterBottom
            sx={{ 
              color: '#fcfcfc',
              fontWeight: 600,
              mb: 2
            }}
          >
            {t('privacypolicy.thirdparty13_2Title')}
          </Typography>

          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
            {t('privacypolicy.thirdparty13_2Text1')}
          </Typography>

          <Box component="ul" sx={{ 
            pl: 4, 
            mb: 3,
            '& li': {
              marginBottom: 0.5
            }
          }}>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.thirdparty13_2Platform1')}
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.thirdparty13_2Platform2')}
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.thirdparty13_2Platform3')}
            </Typography>
          </Box>

          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
            {t('privacypolicy.thirdparty13_2Text2')}
          </Typography>

          <Box component="ul" sx={{ 
            pl: 4, 
            mb: 3,
            '& li': {
              marginBottom: 0.5
            }
          }}>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.thirdparty13_2Feature1a')}{' '}
              <span className='bodyRegularText3 shantellSansFont' style={{ color: '#fcfcfc',fontWeight:'600'}}>{t('privacypolicy.thirdparty13_2FreeToUse')}</span>, <span className='bodyRegularText3 shantellSansFont' style={{ color: '#fcfcfc',fontWeight:'600'}}>{t('privacypolicy.thirdparty13_2RoyaltyFree')}</span>, or <span className='bodyRegularText3 shantellSansFont' style={{ color: '#fcfcfc',fontWeight:'600'}}>{t('privacypolicy.thirdparty13_2OpenLicense')}</span> {t('privacypolicy.thirdparty13_2Feature1b')}
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.thirdparty13_2Feature2')}
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.thirdparty13_2Feature3')}
            </Typography>
          </Box>

          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
            {t('privacypolicy.thirdparty13_2Text3')}
          </Typography>

          <Box component="ul" sx={{ 
            pl: 4, 
            mb: 3,
            '& li': {
              marginBottom: 0.5
            }
          }}>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.thirdparty13_2Use1')}
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.thirdparty13_2Use2')}
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.thirdparty13_2Use3')}
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.thirdparty13_2Use4')}
            </Typography>
          </Box>

          <Typography className='bodyRegularText3 shantellSansFont' variant="body1">
            {t('privacypolicy.thirdparty13_2Text4')}
          </Typography>
        </Box>

        {/* 13.3 License Compliance and Attribution */}
        <Box sx={{ mb: 4 }}>
          <Typography 
            className='headings-h4' 
            variant="h6" 
            gutterBottom
            sx={{ 
              color: '#fcfcfc',
              fontWeight: 600,
              mb: 2
            }}
          >
            {t('privacypolicy.thirdparty13_3Title')}
          </Typography>

          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
            {t('privacypolicy.thirdparty13_3Text1')}
          </Typography>

          <Box component="ul" sx={{ 
            pl: 4, 
            mb: 3,
            '& li': {
              marginBottom: 0.5
            }
          }}>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.thirdparty13_3Requirement1')}
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.thirdparty13_3Requirement2')}
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.thirdparty13_3Requirement3')}
            </Typography>
          </Box>

          <Typography className='bodyRegularText3 shantellSansFont' variant="body1">
            {t('privacypolicy.thirdparty13_3Text2')}
          </Typography>
        </Box>

        {/* 13.4 No Paid or Restricted Asset Usage */}
        <Box sx={{ mb: 4 }}>
          <Typography 
            className='headings-h4' 
            variant="h6" 
            gutterBottom
            sx={{ 
              color: '#fcfcfc',
              fontWeight: 600,
              mb: 2
            }}
          >
            {t('privacypolicy.thirdparty13_4Title')}
          </Typography>

          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
            {t('privacypolicy.thirdparty13_4Text1')}
          </Typography>

          <Box component="ul" sx={{ 
            pl: 4, 
            mb: 3,
            '& li': {
              marginBottom: 0.5
            }
          }}>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.thirdparty13_4Confirmation1')}
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.thirdparty13_4Confirmation2')}
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.thirdparty13_4Confirmation3')}
            </Typography>
          </Box>

          <Typography className='bodyRegularText3 shantellSansFont' variant="body1">
            {t('privacypolicy.thirdparty13_4Text2')}
          </Typography>
        </Box>
      </Box>

      {/* 14. International Data Transfers */}
      <Box id="international-data-transfers" my={5}>
        <Typography 
          className='headings-h3 policy_heading' 
          variant="h5" 
          sx={{ 
            color: '#fcfcfc',
            fontWeight: 600,
            mb: 2
          }}
        >
          {t('privacypolicy.thirdparty14Title')}
        </Typography>

        <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
          {t('privacypolicy.thirdparty14Text1')}
        </Typography>

        <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
          {t('privacypolicy.thirdparty14Text2')}
        </Typography>

        <Box component="ul" sx={{ 
          pl: 4, 
          mb: 3,
          '& li': {
            marginBottom: 0.5
          }
        }}>
          <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
            {t('privacypolicy.thirdparty14Safeguard1')}
          </Typography>
          <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
            {t('privacypolicy.thirdparty14Safeguard2')}
          </Typography>
        </Box>

        <Typography className='bodyRegularText3 shantellSansFont' variant="body1" sx={{ fontWeight: 600, color: '#fcfcfc' }}>
          {t('privacypolicy.thirdparty14LegalLabel')}
        </Typography>
        <Typography className='bodyRegularText3 shantellSansFont' variant="body1" sx={{ ml: 2 }}>
          {t('privacypolicy.thirdparty14Legal')}
        </Typography>
      </Box>

      {/* 15. Changes to Third-Party Integrations */}
      <Box id="changes-third-party" my={5}>
        <Typography 
          className='headings-h3 policy_heading' 
          variant="h5" 
          sx={{ 
            color: '#fcfcfc',
            fontWeight: 600,
            mb: 2
          }}
        >
          {t('privacypolicy.thirdparty15Title')}
        </Typography>

        <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
          {t('privacypolicy.thirdparty15Text1')}
        </Typography>

        <Box component="ul" sx={{ 
          pl: 4, 
          mb: 3,
          '& li': {
            marginBottom: 0.5
          }
        }}>
          <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
            {t('privacypolicy.thirdparty15Reason1')}
          </Typography>
          <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
            {t('privacypolicy.thirdparty15Reason2')}
          </Typography>
          <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
            {t('privacypolicy.thirdparty15Reason3')}
          </Typography>
        </Box>

        <Typography className='bodyRegularText3 shantellSansFont' variant="body1">
          {t('privacypolicy.thirdparty15Text2')}
        </Typography>
      </Box>

      {/* 16. Document Control */}
      <Box id="document-control" my={5}>
        <Typography 
          className='headings-h3 policy_heading' 
          variant="h5" 
          sx={{ 
            color: '#fcfcfc',
            fontWeight: 600,
            mb: 2
          }}
        >
          {t('privacypolicy.thirdparty16Title')}
        </Typography>

        <Box component="ul" sx={{ 
          pl: 4, 
          mb: 3,
          '& li': {
            marginBottom: 0.5
          }
        }}>
          <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
            <Typography component="span" sx={{ fontWeight: 700, color: '#fcfcfc' }}>
              {t('privacypolicy.thirdparty16DocNameLabel')}
            </Typography>{' '}
            {t('privacypolicy.thirdparty16DocName')}
          </Typography>
          <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
            <Typography component="span" sx={{ fontWeight: 700, color: '#fcfcfc' }}>
              {t('privacypolicy.thirdparty16AppliesLabel')}
            </Typography>{' '}
            {t('privacypolicy.thirdparty16Applies')}
          </Typography>
          <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
            <Typography component="span" sx={{ fontWeight: 700, color: '#fcfcfc' }}>
              {t('privacypolicy.thirdparty16VersionLabel')}
            </Typography>{' '}
            {t('privacypolicy.thirdparty16Version')}
          </Typography>
          <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
            <Typography component="span" sx={{ fontWeight: 700, color: '#fcfcfc' }}>
              {t('privacypolicy.thirdparty16OwnerLabel')}
            </Typography>{' '}
            {t('privacypolicy.thirdparty16Owner')}
          </Typography>
        </Box>
      </Box>

      {/* 17. NAF Mobile App — Third-Party Integrations and Dependencies */}
      <Box id="naf-mobile-app" my={5}>
        <Typography 
          className='headings-h3 policy_heading' 
          variant="h5" 
          sx={{ 
            color: '#fcfcfc',
            fontWeight: 600,
            mb: 2
          }}
        >
          {t('privacypolicy.thirdparty17Title')}
        </Typography>

        <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
          {t('privacypolicy.thirdparty17Intro')}
        </Typography>

        {/* 17.1 Core Framework and Runtime Environment */}
        <Box sx={{ mb: 4 }}>
          <Typography 
            className='headings-h4' 
            variant="h6" 
            gutterBottom
            sx={{ 
              color: '#fcfcfc',
              fontWeight: 600,
              mb: 5
            }}
          >
            {t('privacypolicy.thirdparty17_1Title')}
          </Typography>

          {/* 17.1.1 Primary Framework */}
          <Box sx={{ mb: 3 }}>
            <Typography 
              className='headings-h4' 
              variant="subtitle1" 
              gutterBottom
              sx={{ 
                color: '#fcfcfc',
                fontWeight: 600,
                mb: 1
              }}
            >
              {t('privacypolicy.thirdparty17_1_1Title')}
            </Typography>

            <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
              {t('privacypolicy.thirdparty17_1_1Text1')}
            </Typography>

            <Box component="ul" sx={{ 
              pl: 4, 
              mb: 2,
              '& li': {
                marginBottom: 0.5
              }
            }}>
              <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
                <span   className='bodyRegularText3 shantellSansFont' sx={{ fontWeight: 700, color: '#fcfcfc' }}>
                  {t('privacypolicy.thirdparty17_1_1FrameworkLabel')}
                </span>{' '}
              <Typography  className='bodyRegularText3 shantellSansFont' variant="body1">

                {t('privacypolicy.thirdparty17_1_1Framework')}
              </Typography>
              </Typography>

              <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1" sx={{ mt: 1, }}>
                <Typography   className='bodyRegularText3 shantellSansFont'  variant="body1" sx={{ fontWeight: 700, color: '#fcfcfc' }}>
                  {t('privacypolicy.thirdparty17_1_1SdkLabel')}
                </Typography>{' '}
  <Typography  className='bodyRegularText3 shantellSansFont' variant="body1">
                {t('privacypolicy.thirdparty17_1_1Sdk')}
              </Typography>
              </Typography>
              <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
                <span  className='bodyRegularText3 shantellSansFont' sx={{ fontWeight: 700, color: '#fcfcfc' }}>
                  {t('privacypolicy.thirdparty17_1_1SourceLabel')}
                </span>{' '}
                  <Typography  className='bodyRegularText3 shantellSansFont' variant="body1">
                {t('privacypolicy.thirdparty17_1_1Source')}
              </Typography>
              </Typography>
            </Box>

            <Typography className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.thirdparty17_1_1Text2')}
            </Typography>
          </Box>

          {/* 17.1.2 Programming Language */}
          <Box sx={{ mb: 3 }}>
            <Typography 
              className='headings-h4' 
              variant="subtitle1" 
              gutterBottom
              sx={{ 
                color: '#fcfcfc',
                fontWeight: 600,
                mb: 1
              }}
            >
              {t('privacypolicy.thirdparty17_1_2Title')}
            </Typography>

            <Box component="ul" sx={{ 
              pl: 4, 
              mb: 2,
              '& li': {
                marginBottom: 0.5
              }
            }}>
              <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
                <Typography component="span" sx={{ fontWeight: 700, color: '#fcfcfc' }}>
                  {t('privacypolicy.thirdparty17_1_2LanguageLabel')}
                </Typography>{' '}
                {t('privacypolicy.thirdparty17_1_2Language')}
              </Typography>
              <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
                <Typography component="span" sx={{ fontWeight: 700, color: '#fcfcfc' }}>
                  {t('privacypolicy.thirdparty17_1_2SdkLabel')}
                </Typography>{' '}
                {t('privacypolicy.thirdparty17_1_2Sdk')}
              </Typography>
              <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
                <Typography component="span" sx={{ fontWeight: 700, color: '#fcfcfc' }}>
                  {t('privacypolicy.thirdparty17_1_2SourceLabel')}
                </Typography>{' '}
                {t('privacypolicy.thirdparty17_1_2Source')}
              </Typography>
            </Box>

            <Typography className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.thirdparty17_1_2Text1')}
            </Typography>
          </Box>

          {/* 17.1.3 Platform Support */}
          <Box sx={{ mb: 3 }}>
            <Typography 
              className='headings-h4' 
              variant="subtitle1" 
              gutterBottom
              sx={{ 
                color: '#fcfcfc',
                fontWeight: 600,
                mb: 1
              }}
            >
              {t('privacypolicy.thirdparty17_1_3Title')}
            </Typography>

            <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
              {t('privacypolicy.thirdparty17_1_3Text1')}
            </Typography>

            <Box component="ul" sx={{ 
              pl: 4, 
              mb: 2,
              '& li': {
                marginBottom: 0.5
              }
            }}>
              <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
                {t('privacypolicy.thirdparty17_1_3Android')}
              </Typography>
              <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
                {t('privacypolicy.thirdparty17_1_3IOS')}
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* 17.2 Direct Dependencies (Production) */}
        <Box sx={{ mb: 4 }}>
          <Typography 
            className='headings-h4' 
            variant="h6" 
            gutterBottom
            sx={{ 
              color: '#fcfcfc',
              fontWeight: 600,
              mb: 2
            }}
          >
            {t('privacypolicy.thirdparty17_2Title')}
          </Typography>

          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
            {t('privacypolicy.thirdparty17_2Text1')}
          </Typography>

          {/* 17.2.1 State Management */}
          <Box sx={{ mb: 3 }}>
            <Typography 
              className='headings-h4' 
              variant="subtitle1" 
              gutterBottom
              sx={{ 
                color: '#fcfcfc',
                fontWeight: 600,
                mb: 1
              }}
            >
              {t('privacypolicy.thirdparty17_2_1Title')}
            </Typography>

            <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
              {t('privacypolicy.thirdparty17_2_1Package')}
            </Typography>
            <Typography className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.thirdparty17_2_1Text1')}
            </Typography>
          </Box>

          {/* 17.2.2 Networking and HTTP Communication */}
          <Box sx={{ mb: 3 }}>
            <Typography 
              className='headings-h4' 
              variant="subtitle1" 
              gutterBottom
              sx={{ 
                color: '#fcfcfc',
                fontWeight: 600,
                mb: 1
              }}
            >
              {t('privacypolicy.thirdparty17_2_2Title')}
            </Typography>

            <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
              {t('privacypolicy.thirdparty17_2_2Package')}
            </Typography>
            <Typography className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.thirdparty17_2_2Text1')}
            </Typography>
          </Box>

          {/* 17.2.3 Localization and Internationalization */}
          <Box sx={{ mb: 3 }}>
            <Typography 
              className='headings-h4' 
              variant="subtitle1" 
              gutterBottom
              sx={{ 
                color: '#fcfcfc',
                fontWeight: 600,
                mb: 1
              }}
            >
              {t('privacypolicy.thirdparty17_2_3Title')}
            </Typography>

            <Box component="ul" sx={{ 
              pl: 4, 
              mb: 2,
              '& li': {
                marginBottom: 0.5
              }
            }}>
              <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
                {t('privacypolicy.thirdparty17_2_3Item1')}
              </Typography>
              <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
                {t('privacypolicy.thirdparty17_2_3Item2')}
              </Typography>
            </Box>

            <Typography className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.thirdparty17_2_3Text1')}
            </Typography>
          </Box>

          {/* 17.2.4 Location Services */}
          <Box sx={{ mb: 3 }}>
            <Typography 
              className='headings-h4' 
              variant="subtitle1" 
              gutterBottom
              sx={{ 
                color: '#fcfcfc',
                fontWeight: 600,
                mb: 1
              }}
            >
              {t('privacypolicy.thirdparty17_2_4Title')}
            </Typography>

            <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
              {t('privacypolicy.thirdparty17_2_4Package')}
            </Typography>

            <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
              {t('privacypolicy.thirdparty17_2_4Text1')}
            </Typography>

            <Box component="ul" sx={{ 
              pl: 4, 
              mb: 2,
              '& li': {
                marginBottom: 0.5
              }
            }}>
              <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
                {t('privacypolicy.thirdparty17_2_4Use1')}
              </Typography>
              <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
                {t('privacypolicy.thirdparty17_2_4Use2')}
              </Typography>
            </Box>

            <Typography className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.thirdparty17_2_4Text2')}
            </Typography>
          </Box>

          {/* 17.2.5 Permissions Management */}
          <Box sx={{ mb: 3 }}>
            <Typography 
              className='headings-h4' 
              variant="subtitle1" 
              gutterBottom
              sx={{ 
                color: '#fcfcfc',
                fontWeight: 600,
                mb: 1
              }}
            >
              {t('privacypolicy.thirdparty17_2_5Title')}
            </Typography>

            <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
              {t('privacypolicy.thirdparty17_2_5Package')}
            </Typography>

            <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
              {t('privacypolicy.thirdparty17_2_5Text1')}
            </Typography>

            <Box component="ul" sx={{ 
              pl: 4, 
              mb: 2,
              '& li': {
                marginBottom: 0.5
              }
            }}>
              <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
                {t('privacypolicy.thirdparty17_2_5Use1')}
              </Typography>
              <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
                {t('privacypolicy.thirdparty17_2_5Use2')}
              </Typography>
            </Box>

            <Typography className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.thirdparty17_2_5Text2')}
            </Typography>
          </Box>

          {/* 17.2.6 UI, Media, and Image Handling */}
          <Box sx={{ mb: 3 }}>
            <Typography 
              className='headings-h4' 
              variant="subtitle1" 
              gutterBottom
              sx={{ 
                color: '#fcfcfc',
                fontWeight: 600,
                mb: 1
              }}
            >
              {t('privacypolicy.thirdparty17_2_6Title')}
            </Typography>

            <Box component="ul" sx={{ 
              pl: 4, 
              mb: 2,
              '& li': {
                marginBottom: 0.5
              }
            }}>
              <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
                {t('privacypolicy.thirdparty17_2_6Item1')}
              </Typography>
              <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
                {t('privacypolicy.thirdparty17_2_6Item2')}
                <Box component="ul" sx={{ pl: 4, mt: 0.5 }}>
                  <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body2">
                    {t('privacypolicy.thirdparty17_2_6Item2DepTitle')}
                  </Typography>
                  <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body2" >
                    {t('privacypolicy.thirdparty17_2_6Item2Dep1')}
                  </Typography>
                  <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body2" >
                    {t('privacypolicy.thirdparty17_2_6Item2Dep2')}
                  </Typography>
                </Box>
              </Typography>
            </Box>

            <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
              {t('privacypolicy.thirdparty17_2_6Text1')}
            </Typography>

            <Box component="ul" sx={{ 
              pl: 4, 
              mb: 2,
              '& li': {
                marginBottom: 0.5
              }
            }}>
              <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
                {t('privacypolicy.thirdparty17_2_6Use1')}
              </Typography>
              <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
                {t('privacypolicy.thirdparty17_2_6Use2')}
              </Typography>
              <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
                {t('privacypolicy.thirdparty17_2_6Use3')}
              </Typography>
            </Box>

            <Typography className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.thirdparty17_2_6Text2')}
            </Typography>
          </Box>

          {/* 17.2.7 Device Features and System Integration */}
          <Box sx={{ mb: 3 }}>
            <Typography 
              className='headings-h4' 
              variant="subtitle1" 
              gutterBottom
              sx={{ 
                color: '#fcfcfc',
                fontWeight: 600,
                mb: 1
              }}
            >
              {t('privacypolicy.thirdparty17_2_7Title')}
            </Typography>

            <Box component="ul" sx={{ 
              pl: 4, 
              mb: 2,
              '& li': {
                marginBottom: 0.5
              }
            }}>
              <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
                {t('privacypolicy.thirdparty17_2_7Item1')}
                <Typography className='bodyRegularText3 shantellSansFont' variant="body2" sx={{ ml: 2 }}>
                  {t('privacypolicy.thirdparty17_2_7Item1Desc')}
                </Typography>
              </Typography>
              <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
                {t('privacypolicy.thirdparty17_2_7Item2')}
                <Typography className='bodyRegularText3 shantellSansFont' variant="body2" sx={{ ml: 2 }}>
                  {t('privacypolicy.thirdparty17_2_7Item2Desc')}
                </Typography>
              </Typography>
              <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
                {t('privacypolicy.thirdparty17_2_7Item3')}
                <Typography className='bodyRegularText3 shantellSansFont' variant="body2" sx={{ ml: 2 }}>
                  {t('privacypolicy.thirdparty17_2_7Item3Desc')}
                </Typography>
              </Typography>
            </Box>
          </Box>

          {/* 17.2.8 Local Storage */}
          <Box sx={{ mb: 3 }}>
            <Typography 
              className='headings-h4' 
              variant="subtitle1" 
              gutterBottom
              sx={{ 
                color: '#fcfcfc',
                fontWeight: 600,
                mb: 1
              }}
            >
              {t('privacypolicy.thirdparty17_2_8Title')}
            </Typography>

            <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
              {t('privacypolicy.thirdparty17_2_8Package')}
            </Typography>

            <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
              {t('privacypolicy.thirdparty17_2_8Text1')}
            </Typography>

            <Box component="ul" sx={{ 
              pl: 4, 
              mb: 2,
              '& li': {
                marginBottom: 0.5
              }
            }}>
              <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
                {t('privacypolicy.thirdparty17_2_8Use1')}
              </Typography>
              <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
                {t('privacypolicy.thirdparty17_2_8Use2')}
              </Typography>
              <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
                {t('privacypolicy.thirdparty17_2_8Use3')}
              </Typography>
            </Box>

            <Typography className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.thirdparty17_2_8Text2')}
            </Typography>
          </Box>

          {/* 17.3 Development Dependencies */}
          <Box sx={{ mb: 4 }}>
            <Typography 
              className='headings-h4' 
              variant="subtitle1" 
              gutterBottom
              sx={{ 
                color: '#fcfcfc',
                fontWeight: 600,
                mb: 1
              }}
            >
              {t('privacypolicy.thirdparty17_3Title')}
            </Typography>

            <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
              {t('privacypolicy.thirdparty17_3Text1')}
            </Typography>

            <Box component="ul" sx={{ 
              pl: 4, 
              mb: 2,
              '& li': {
                marginBottom: 0.5
              }
            }}>
              <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
                {t('privacypolicy.thirdparty17_3Item1')}
              </Typography>
              <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
                {t('privacypolicy.thirdparty17_3Item2')}
              </Typography>
              <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
                {t('privacypolicy.thirdparty17_3Item3')}
              </Typography>
            </Box>

            <Typography className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.thirdparty17_3Text2')}
            </Typography>
          </Box>
        </Box>

        {/* 17.4 Android Native Dependencies */}
        <Box sx={{ mb: 4 }}>
          <Typography 
            className='headings-h4' 
            variant="h6" 
            gutterBottom
            sx={{ 
              color: '#fcfcfc',
              fontWeight: 600,
              mb: 5
            }}
          >
            {t('privacypolicy.thirdparty17_4Title')}
          </Typography>

          {/* 17.4.1 Build and Tooling */}
          <Box sx={{ mb: 3 }}>
            <Typography 
              className='headings-h4' 
              variant="subtitle1" 
              gutterBottom
              sx={{ 
                color: '#fcfcfc',
                fontWeight: 600,
                mb: 1
              }}
            >
              {t('privacypolicy.thirdparty17_4_1Title')}
            </Typography>

            <Box component="ul" sx={{ 
              pl: 4, 
              mb: 2,
              '& li': {
                marginBottom: 0.5
              }
            }}>
              <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
                {t('privacypolicy.thirdparty17_4_1Item1')}
              </Typography>
              <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
                {t('privacypolicy.thirdparty17_4_1Item2')}
              </Typography>
              <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
                {t('privacypolicy.thirdparty17_4_1Item3')}
              </Typography>
              <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
                {t('privacypolicy.thirdparty17_4_1Item4')}
              </Typography>
            </Box>
          </Box>

          {/* 17.4.2 Android SDK Configuration */}
          <Box sx={{ mb: 3 }}>
            <Typography 
              className='headings-h4' 
              variant="subtitle1" 
              gutterBottom
              sx={{ 
                color: '#fcfcfc',
                fontWeight: 600,
                mb: 1
              }}
            >
              {t('privacypolicy.thirdparty17_4_2Title')}
            </Typography>

            <Box component="ul" sx={{ 
              pl: 4, 
              mb: 2,
              '& li': {
                marginBottom: 0.5
              }
            }}>
              <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
                {t('privacypolicy.thirdparty17_4_2Item1')}
              </Typography>
              <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
                {t('privacypolicy.thirdparty17_4_2Item2')}
              </Typography>
              <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
                {t('privacypolicy.thirdparty17_4_2Item3')}
              </Typography>
              <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
                {t('privacypolicy.thirdparty17_4_2Item4')}
              </Typography>
            </Box>
          </Box>

          {/* 17.4.3 Android Permissions */}
          <Box sx={{ mb: 3 }}>
            <Typography 
              className='headings-h4' 
              variant="subtitle1" 
              gutterBottom
              sx={{ 
                color: '#fcfcfc',
                fontWeight: 600,
                mb: 1
              }}
            >
              {t('privacypolicy.thirdparty17_4_3Title')}
            </Typography>

            <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
              {t('privacypolicy.thirdparty17_4_3Text1')}
            </Typography>

            <Box component="ul" sx={{ 
              pl: 4, 
              mb: 2,
              '& li': {
                marginBottom: 1.5
              }
            }}>
              <Box component="li" >
                <Typography className='bodyRegularText3 shantellSansFont' component="div" sx={{ fontWeight: 700, color: '#fcfcfc', overflowWrap: 'break-word', wordBreak: 'break-word', whiteSpace: 'normal' }}>
                  {t('privacypolicy.thirdparty17_4_3PermInternetLabel')}
                </Typography>
                <Typography className='bodyRegularText3 shantellSansFont' variant="body2" sx={{ mt: 0.5, overflowWrap: 'break-word', wordBreak: 'break-word', whiteSpace: 'normal' }}>
                  {t('privacypolicy.thirdparty17_4_3PermInternetDesc')}
                </Typography>
              </Box>
              <Box component="li" className='bodyRegularText3 shantellSansFont'>
                <Typography  className='bodyRegularText3 shantellSansFont' component="div" sx={{ fontWeight: 700, color: '#fcfcfc', overflowWrap: 'break-word', wordBreak: 'break-word', whiteSpace: 'normal' }}>
                  {t('privacypolicy.thirdparty17_4_3PermFineLabel')}
                </Typography>
                <Typography className='bodyRegularText3 shantellSansFont' variant="body2" sx={{ mt: 0.5, overflowWrap: 'break-word', wordBreak: 'break-word', whiteSpace: 'normal' }}>
                  {t('privacypolicy.thirdparty17_4_3PermFineDesc')}
                </Typography>
              </Box>
              <Box component="li" className='bodyRegularText3 shantellSansFont'>
                <Typography  className='bodyRegularText3 shantellSansFont' component="div" sx={{ fontWeight: 700, color: '#fcfcfc', overflowWrap: 'break-word', wordBreak: 'break-word', whiteSpace: 'normal' }}>
                  {t('privacypolicy.thirdparty17_4_3PermCoarseLabel')}
                </Typography>
                <Typography className='bodyRegularText3 shantellSansFont' variant="body2" sx={{ mt: 0.5, overflowWrap: 'break-word', wordBreak: 'break-word', whiteSpace: 'normal' }}>
                  {t('privacypolicy.thirdparty17_4_3PermCoarseDesc')}
                </Typography>
              </Box>
              <Box component="li" className='bodyRegularText3 shantellSansFont'>
                <Typography  className='bodyRegularText3 shantellSansFont' component="div" sx={{ fontWeight: 700, color: '#fcfcfc', overflowWrap: 'break-word', wordBreak: 'break-word', whiteSpace: 'normal' }}>
                  {t('privacypolicy.thirdparty17_4_3PermCameraLabel')}
                </Typography>
                <Typography className='bodyRegularText3 shantellSansFont' variant="body2" sx={{ mt: 0.5, overflowWrap: 'break-word', wordBreak: 'break-word', whiteSpace: 'normal' }}>
                  {t('privacypolicy.thirdparty17_4_3PermCameraDesc')}
                </Typography>
              </Box>
            </Box>

            <Typography className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.thirdparty17_4_3Text2')}
            </Typography>
          </Box>
        </Box>

        {/* 17.5 iOS Native Dependencies */}
        <Box sx={{ mb: 4 }}>
          <Typography 
            className='headings-h4' 
            variant="h6" 
            gutterBottom
            sx={{ 
              color: '#fcfcfc',
              fontWeight: 600,
              mb: 5
            }}
          >
            {t('privacypolicy.thirdparty17_5Title')}
          </Typography>

          {/* 17.5.1 Build and Tooling */}
          <Box sx={{ mb: 3 }}>
            <Typography 
              className='headings-h4' 
              variant="subtitle1" 
              gutterBottom
              sx={{ 
                color: '#fcfcfc',
                fontWeight: 600,
                mb: 1
              }}
            >
              {t('privacypolicy.thirdparty17_5_1Title')}
            </Typography>
             <Box component="ul" sx={{ 
              pl: 4, 
              mb: 2,
              '& li': {
                marginBottom: 0.5
              }
            }}>

            <Typography  component="li"  className='bodyRegularText3 shantellSansFont' variant="body1">
                {t('privacypolicy.thirdparty17_5_1Item1')}
            </Typography>
            <Typography  component="li"  className='bodyRegularText3 shantellSansFont' variant="body1">
                {t('privacypolicy.thirdparty17_5_1Item2')}
            </Typography>
             </Box>
          </Box>

          {/* 17.5.2 iOS Platform Requirements */}
          <Box sx={{ mb: 3 }}>
            <Typography 
              className='headings-h4' 
              variant="subtitle1" 
              gutterBottom
              sx={{ 
                color: '#fcfcfc',
                fontWeight: 600,
                mb: 1
              }}
            >
              {t('privacypolicy.thirdparty17_5_2Title')}
            </Typography>
            <Box component="ul" sx={{ 
              pl: 4, 
              mb: 2,
              '& li': {
                marginBottom: 0.5
              }
            }}>

            <Typography  component="li"  className='bodyRegularText3 shantellSansFont' variant="body1">
                {t('privacypolicy.thirdparty17_5_2Item1')}
            </Typography>
            
             </Box>
           </Box>
        </Box>

        {/* 17.6 Third-Party Services and APIs */}
        <Box sx={{ mb: 4 }}>
          <Typography 
            className='headings-h4' 
            variant="h6" 
            gutterBottom
            sx={{ 
              color: '#fcfcfc',
              fontWeight: 600,
              mb: 5
            }}
          >
            {t('privacypolicy.thirdparty17_6Title')}
          </Typography>

          {/* 17.6.1 Backend API - NAF Cloud System */}
          <Box sx={{ mb: 3 }}>
            <Typography 
              className='headings-h4' 
              variant="subtitle1" 
              gutterBottom
              sx={{ 
                color: '#fcfcfc',
                fontWeight: 600,
                mb: 1
              }}
            >
              {t('privacypolicy.thirdparty17_6_1Title')}
            </Typography>

            <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
              {t('privacypolicy.thirdparty17_6_1Text1')}
            </Typography>

            <Box component="ul" sx={{ 
              pl: 4, 
              mb: 2,
              '& li': {
                marginBottom: 0.5
              }
            }}>
              <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
                {t('privacypolicy.thirdparty17_6_1Item1')}
              </Typography>
              <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
                {t('privacypolicy.thirdparty17_6_1Item2')}
              </Typography>
              <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
                {t('privacypolicy.thirdparty17_6_1Item3')}
              </Typography>
              <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
                {t('privacypolicy.thirdparty17_6_1Item4')}
              </Typography>
              <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
                {t('privacypolicy.thirdparty17_6_1Item5')}
              </Typography>
              <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
                {t('privacypolicy.thirdparty17_6_1Item6')}
              </Typography>
              <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
                {t('privacypolicy.thirdparty17_6_1Item7')}
              </Typography>
            </Box>

            <Typography className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.thirdparty17_6_1Text2')}
            </Typography>
          </Box>

          {/* 17.6.2 Payment Processing — Stripe */}
          <Box sx={{ mb: 3 }}>
            <Typography 
              className='headings-h4' 
              variant="subtitle1" 
              gutterBottom
              sx={{ 
                color: '#fcfcfc',
                fontWeight: 600,
                mb: 1
              }}
            >
              {t('privacypolicy.thirdparty17_6_2Title')}
            </Typography>

            <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
              {t('privacypolicy.thirdparty17_6_2Text1')}
            </Typography>

            <Box component="ul" sx={{ 
              pl: 4, 
              mb: 2,
              '& li': {
                marginBottom: 0.5
              }
            }}>
              <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
                {t('privacypolicy.thirdparty17_6_2Item1')}
              </Typography>
              <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
                {t('privacypolicy.thirdparty17_6_2Item2')}
              </Typography>
            </Box>

            <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
              {t('privacypolicy.thirdparty17_6_2Text2')}
            </Typography>

            <Box component="ul" sx={{ 
              pl: 4, 
              mb: 2,
              '& li': {
                marginBottom: 0.5
              }
            }}>
              <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
                <Typography component="span" sx={{ fontWeight: 700, color: '#fcfcfc' }}>
                  {t('privacypolicy.thirdparty17_6_2MinAmountLabel')}
                </Typography>{' '}
                {t('privacypolicy.thirdparty17_6_2MinAmountValue')}
              </Typography>
              <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
                <Typography component="span" sx={{ fontWeight: 700, color: '#fcfcfc' }}>
                  {t('privacypolicy.thirdparty17_6_2MethodLabel')}
                </Typography>{' '}
                {t('privacypolicy.thirdparty17_6_2MethodValue')}
              </Typography>
              <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
                <Typography component="span" sx={{ fontWeight: 700, color: '#fcfcfc' }}>
                  {t('privacypolicy.thirdparty17_6_2SourceLabel')}
                </Typography>{' '}
                {t('privacypolicy.thirdparty17_6_2SourceValue')}
              </Typography>
              <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
                <Typography component="span" sx={{ fontWeight: 700, color: '#fcfcfc' }}>
                  {t('privacypolicy.thirdparty17_6_2PrivacyLabel')}
                </Typography>{' '}
                {t('privacypolicy.thirdparty17_6_2PrivacyValue')}
              </Typography>
            </Box>

            <Typography className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.thirdparty17_6_2Text3')}
            </Typography>
          </Box>

          {/* 17.6.3 Location and Maps — Google Maps */}
          <Box sx={{ mb: 3 }}>
            <Typography 
              className='headings-h4' 
              variant="subtitle1" 
              gutterBottom
              sx={{ 
                color: '#fcfcfc',
                fontWeight: 600,
                mb: 1
              }}
            >
              {t('privacypolicy.thirdparty17_6_3Title')}
            </Typography>

            <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
              {t('privacypolicy.thirdparty17_6_3Text1')}
            </Typography>

            <Box component="ul" sx={{ 
              pl: 4, 
              mb: 2,
              '& li': {
                marginBottom: 0.5
              }
            }}>
              <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
                {t('privacypolicy.thirdparty17_6_3Use1')}
              </Typography>
              <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
                {t('privacypolicy.thirdparty17_6_3Use2')}
              </Typography>
            </Box>

            <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
              {t('privacypolicy.thirdparty17_6_3Text2')}
            </Typography>

            <Box component="ul" sx={{ 
              pl: 4, 
              mb: 2,
              '& li': {
                marginBottom: 0.5
              }
            }}>
              <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
                <Typography component="span" sx={{ fontWeight: 700, color: '#fcfcfc' }}>
                  {t('privacypolicy.thirdparty17_6_3SourceLabel')}
                </Typography>{' '}
                {t('privacypolicy.thirdparty17_6_3SourceValue')}
              </Typography>
              <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
                <Typography component="span" sx={{ fontWeight: 700, color: '#fcfcfc' }}>
                  {t('privacypolicy.thirdparty17_6_3PrivacyLabel')}
                </Typography>{' '}
                {t('privacypolicy.thirdparty17_6_3PrivacyValue')}
              </Typography>
            </Box>
          </Box>

          {/* 17.7 Open-Source Licenses */}
          <Box sx={{ mb: 4 }}>
            <Typography 
              className='headings-h4' 
              variant="subtitle1" 
              gutterBottom
              sx={{ 
                color: '#fcfcfc',
                fontWeight: 600,
                mb: 1
              }}
            >
              {t('privacypolicy.thirdparty17_7Title')}
            </Typography>

            <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
              {t('privacypolicy.thirdparty17_7Text1')}
            </Typography>

            <Box component="ul" sx={{ 
              pl: 4, 
              mb: 2,
              '& li': {
                marginBottom: 0.5
              }
            }}>
              <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
                {t('privacypolicy.thirdparty17_7Item1')}
              </Typography>
              <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
                {t('privacypolicy.thirdparty17_7Item2')}
              </Typography>
              <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
                {t('privacypolicy.thirdparty17_7Item3')}
              </Typography>
            </Box>

            <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
              {t('privacypolicy.thirdparty17_7Text2')}
            </Typography>

            <Typography className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.thirdparty17_7Text3')}
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* APPENDIX A — Credits and Acknowledgements */}
      <Box id="appendix-a" my={5}>
        <Typography 
          className='headings-h3 policy_heading' 
          variant="h5" 
          sx={{ 
            color: '#fcfcfc',
            fontWeight: 600,
            mb: 2
          }}
        >
          {t('privacypolicy.policy_appendixA_title')}
        </Typography>

        <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
          {t('privacypolicy.policy_appendixA_intro_1')}
        </Typography>

        <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
          {t('privacypolicy.policy_appendixA_intro_2')}
        </Typography>

        {/* A.1 Software Frameworks and Libraries */}
        <Box sx={{ mb: 4 }}>
          <Typography 
            className='headings-h4' 
            variant="h6" 
            gutterBottom
            sx={{ 
              color: '#fcfcfc',
              fontWeight: 600,
              mb: 2
            }}
          >
            {t('privacypolicy.policy_appendixA_1_title')}
          </Typography>

          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
            {t('privacypolicy.policy_appendixA_1_text_1')}
          </Typography>

          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
            {t('privacypolicy.policy_appendixA_1_text_2')}
          </Typography>

          <Typography className='bodyRegularText3 shantellSansFont' variant="body1">
            {t('privacypolicy.policy_appendixA_1_text_3')}
          </Typography>
        </Box>

        {/* A.2 Icon and UI Asset Credits */}
        <Box sx={{ mb: 4 }}>
          <Typography 
            className='headings-h4' 
            variant="h6" 
            gutterBottom
            sx={{ 
              color: '#fcfcfc',
              fontWeight: 600,
              mb: 2
            }}
          >
            {t('privacypolicy.policy_appendixA_2_title')}
          </Typography>

          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
            {t('privacypolicy.policy_appendixA_2_text_1')}
          </Typography>

          <Box component="ul" sx={{ 
            pl: 4, 
            mb: 3,
            '& li': {
              marginBottom: 0.5
            }
          }}>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.policy_appendixA_2_item_1')}
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.policy_appendixA_2_item_2')}
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.policy_appendixA_2_item_3')}
            </Typography>
          </Box>

          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
            {t('privacypolicy.policy_appendixA_2_text_2')}
          </Typography>

          <Box component="ul" sx={{
            pl: 4,
            mb: 3,
            '& li': {
              marginBottom: 0.5
            }
          }}>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.policy_appendixA_2_item_4')}
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.policy_appendixA_2_item_5')}
            </Typography>
          </Box>

          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
            {t('privacypolicy.policy_appendixA_2_text_3')}
          </Typography>

          <Typography className='bodyRegularText3 shantellSansFont' variant="body1">
            {t('privacypolicy.policy_appendixA_2_text_4')}
          </Typography>
        </Box>

        {/* A.3 Images, Videos, Illustrations, and Media */}
        <Box sx={{ mb: 4 }}>
          <Typography 
            className='headings-h4' 
            variant="h6" 
            gutterBottom
            sx={{ 
              color: '#fcfcfc',
              fontWeight: 600,
              mb: 2
            }}
          >
            {t('privacypolicy.policy_appendixA_3_title')}
          </Typography>

          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
            {t('privacypolicy.policy_appendixA_3_text_1')}
          </Typography>

          <Box component="ul" sx={{ 
            pl: 4, 
            mb: 3,
            '& li': {
              marginBottom: 0.5
            }
          }}>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.policy_appendixA_3_item_1')}
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.policy_appendixA_3_item_2')}
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.policy_appendixA_3_item_3')}
            </Typography>
          </Box>

          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
            {t('privacypolicy.policy_appendixA_3_text_2')}
          </Typography>

          <Box component="ul" sx={{ 
            pl: 4, 
            mb: 3,
            '& li': {
              marginBottom: 0.5
            }
          }}>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.policy_appendixA_3_item_4')}
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.policy_appendixA_3_item_5')}
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.policy_appendixA_3_item_6')}
            </Typography>
          </Box>

          <Typography className='bodyRegularText3 shantellSansFont' variant="body1">
            {t('privacypolicy.policy_appendixA_3_text_3')}
          </Typography>
        </Box>

        {/* A.4 Design Inspiration and Community Resources */}
        <Box sx={{ mb: 4 }}>
          <Typography 
            className='headings-h4' 
            variant="h6" 
            gutterBottom
            sx={{ 
              color: '#fcfcfc',
              fontWeight: 600,
              mb: 2
            }}
          >
            {t('privacypolicy.policy_appendixA_4_title')}
          </Typography>

          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
            {t('privacypolicy.policy_appendixA_4_text_1')}
          </Typography>

          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
            {t('privacypolicy.policy_appendixA_4_text_2')}
          </Typography>

          <Box component="ul" sx={{ 
            pl: 4, 
            mb: 3,
            '& li': {
              marginBottom: 0.5
            }
          }}>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.policy_appendixA_4_item_1')}
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.policy_appendixA_4_item_2')}
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.policy_appendixA_4_item_3')}
            </Typography>
          </Box>
        </Box>

        {/* A.5 Third-Party Service Providers */}
        <Box sx={{ mb: 4 }}>
          <Typography 
            className='headings-h4' 
            variant="h6" 
            gutterBottom
            sx={{ 
              color: '#fcfcfc',
              fontWeight: 600,
              mb: 2
            }}
          >
            {t('privacypolicy.policy_appendixA_5_title')}
          </Typography>

          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
            {t('privacypolicy.policy_appendixA_5_text_1')}
          </Typography>

          <Box component="ul" sx={{
            pl: 4, 
            mb: 3,
            '& li': {
              marginBottom: 0.5
            }
          }}>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.policy_appendixA_5_item_1')}
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.policy_appendixA_5_item_2')}
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.policy_appendixA_5_item_3')}
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.policy_appendixA_5_item_4')}
            </Typography>
          </Box>

          <Typography className='bodyRegularText3 shantellSansFont' variant="body1">
            {t('privacypolicy.policy_appendixA_5_text_2')}
          </Typography>
        </Box>

        {/* A.6 No Endorsement or Partnership Implied */}
        <Box sx={{ mb: 4 }}>
          <Typography 
            className='headings-h4' 
            variant="h6" 
            gutterBottom
            sx={{ 
              color: '#fcfcfc',
              fontWeight: 600,
              mb: 2
            }}
          >
            {t('privacypolicy.policy_appendixA_6_title')}
          </Typography>

          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
            {t('privacypolicy.policy_appendixA_6_text_1')}
          </Typography>

          <Box component="ul" sx={{ 
            pl: 4, 
            mb: 3,
            '& li': {
              marginBottom: 0.5
            }
          }}>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.policy_appendixA_6_item_1')}
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.policy_appendixA_6_item_2')}
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.policy_appendixA_6_item_3')}
            </Typography>
          </Box>

          <Typography className='bodyRegularText3 shantellSansFont' variant="body1">
            {t('privacypolicy.policy_appendixA_6_text_2')}
          </Typography>
        </Box>

        {/* A.7 Ongoing Review and Compliance */}
        <Box sx={{ mb: 4 }}>
          <Typography 
            className='headings-h4' 
            variant="h6" 
            gutterBottom
            sx={{ 
              color: '#fcfcfc',
              fontWeight: 600,
              mb: 2
            }}
          >
            {t('privacypolicy.policy_appendixA_7_title')}
          </Typography>

          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
            {t('privacypolicy.policy_appendixA_7_text_1')}
          </Typography>

          <Box component="ul" sx={{ 
            pl: 4, 
            mb: 3,
            '& li': {
              marginBottom: 0.5
            }
          }}>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.policy_appendixA_7_item_1')}
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.policy_appendixA_7_item_2')}
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.policy_appendixA_7_item_3')}
            </Typography>
          </Box>

          <Typography className='bodyRegularText3 shantellSansFont' variant="body1">
            {t('privacypolicy.policy_appendixA_7_text_2')}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ThirdPartyPage;