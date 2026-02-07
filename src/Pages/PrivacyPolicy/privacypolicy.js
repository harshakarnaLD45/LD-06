import React, { useEffect } from 'react';
import {
  Box, Typography, Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import "./privacypolicy.css";

import ThirdPartyPage from './thirdparty'


const PrivacyPolicyPage = () => {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
    // document.title = `NAF Vending -${t('titles.about')}`; // Set tab title

  }, []);
  return (
    <Box className="section-container" >
      {/* Header */}
      <Typography className='headings-h1' variant="h3" gutterBottom>
        {t('privacypolicy.privacyPolicy')}
      </Typography>

      {/* Section 1 */}

      <Box my={5}>
        <Typography className='headings-h4 policy_heading ' variant="h5" gutterBottom>
          {t('privacypolicy.introductionTitle')}
        </Typography>

        <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
          {t('privacypolicy.section1Text1')}
        </Typography>

        <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
          {t('privacypolicy.section1Text2')}
        </Typography>

        <Box sx={{
          pl: 3,
          mb: 2,
          '& > div': {
            display: 'flex',
            alignItems: 'flex-start',
            marginBottom: 1
          }
        }}>
          <Box>
            <Typography component="span" sx={{ mr: 1, fontWeight: 500 }}>- {t('privacypolicy.section1Platform1')} </Typography>
            <Typography component="span" className='bodyRegularText3 shantellSansFont' variant="body1">
              <Box component="span" sx={{ fontWeight: 600 }}>{t('privacypolicy.section1PlatformWebsite')}</Box>
            </Typography>
          </Box>
          <Box>
            <Typography component="span" sx={{ mr: 1, fontWeight: 500 }}>- {t('privacypolicy.section1Platform2')} </Typography>
            <Typography component="span" className='bodyRegularText3 shantellSansFont' variant="body1">

              <Box component="span" sx={{ fontWeight: 600 }} >  {t('privacypolicy.section1PlatformCloud')} </Box>{t('privacypolicy.section1And')}
            </Typography>
          </Box>
          <Box>
            <Typography component="span" sx={{ mr: 1, fontWeight: 500 }}>- {t('privacypolicy.section1Platform3')} </Typography>
            <Typography component="span" className='bodyRegularText3 shantellSansFont' variant="body1">
              <Box component="span" sx={{ fontWeight: 600 }}>{t('privacypolicy.section1PlatformApp')}</Box>
            </Typography>
          </Box>
        </Box>

        <Typography className='bodyRegularText3 shantellSansFont' variant="body1">
          {t('privacypolicy.section1Text3')}
        </Typography>
      </Box>


      {/* Section 2 */}

      <Box my={5}>
        {/* Main Heading with Number */}
        <Box sx={{ display: 'flex', alignItems: 'baseline', mb: 2 }}>

          <Typography
            className='headings-h4 policy_heading '
            variant="h5"
            sx={{
              color: '#fcfcfc',
              fontWeight: 600
            }}
          >
            {t('privacypolicy.section2Title')}
          </Typography>
        </Box>

        {/* Sub-heading */}
        <Typography
          className='headings-h5'
          variant="h6"
          gutterBottom
          sx={{

            color: '#fcfcfc',
            fontWeight: 600,
            mb: 2
          }}
        >
          {t('privacypolicy.section2_1Title')}
        </Typography>

        {/* First Paragraph */}
        <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
          {t('privacypolicy.section2Text1')} <strong sx={{ color: '#fcfcfc' }}>{t('privacypolicy.section2Text1Bold')}</strong> {t('privacypolicy.section2Text1End')}
        </Typography>

        {/* Second Paragraph */}
        <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
          {t('privacypolicy.section2Text2')}
        </Typography>

        {/* Bullet List */}
        <Box component="ul" sx={{
          pl: 4,
          mb: 2,
          '& li': {
            marginBottom: 1
          }
        }}>
          <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
            {t('privacypolicy.section2List1')}
          </Typography>
          <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
            {t('privacypolicy.section2List2')}
          </Typography>
          <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
            {t('privacypolicy.section2List3')}
          </Typography>
          <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
            {t('privacypolicy.section2List4')}
          </Typography>
        </Box>

        {/* Final Paragraph */}
        <Typography className='bodyRegularText3 shantellSansFont' variant="body1">
          {t('privacypolicy.section2Text3')}
        </Typography>
      </Box>


      {/* Section 3 */}
      <Box my={5}>
        {/* Main Heading with Number */}
        <Box sx={{ display: 'flex', alignItems: 'baseline', mb: 2 }}>

          <Typography
            className='headings-h4 policy_heading '
            variant="h5"
            sx={{
              color: '#fcfcfc',
              fontWeight: 600
            }}
          >
            {t('privacypolicy.section3Title')}
          </Typography>
        </Box>

        {/* Introduction Paragraph */}
        <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
          {t('privacypolicy.section3Text')}
        </Typography>

        {/* Definitions List */}
        <Box component="ul" sx={{
          pl: 4,
          mb: 2,
          '& li': {
            marginBottom: 1.5
          }
        }}>
          <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
            <Box component="span" sx={{ fontWeight: 600 }}>{t('privacypolicy.section3Def1Bold')}</Box> {t('privacypolicy.section3Def1')}
          </Typography>
          <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
            <Box component="span" sx={{ fontWeight: 600 }}>{t('privacypolicy.section3Def2Bold')}</Box> {t('privacypolicy.section3Def2')}
          </Typography>
          <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
            <Box component="span" sx={{ fontWeight: 600 }}>{t('privacypolicy.section3Def3Bold')}</Box> {t('privacypolicy.section3Def3')}
          </Typography>
          <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
            <Box component="span" sx={{ fontWeight: 600 }}>{t('privacypolicy.section3Def4Bold')}</Box> {t('privacypolicy.section3Def4')}
          </Typography>
          <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
            <Box component="span" sx={{ fontWeight: 600 }}>{t('privacypolicy.section3Def5Bold')}</Box> {t('privacypolicy.section3Def5')}
          </Typography>
          <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
            <Box component="span" sx={{ fontWeight: 600 }}>{t('privacypolicy.section3Def6Bold')}</Box> {t('privacypolicy.section3Def6')}
          </Typography>
          <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
            <Box component="span" sx={{ fontWeight: 600 }}>{t('privacypolicy.section3Def7Bold')}</Box> {t('privacypolicy.section3Def7')}
          </Typography>
        </Box>

        {/* Final Paragraph */}
        <Typography className='bodyRegularText3 shantellSansFont' variant="body1">
          {t('privacypolicy.section3Footer')} <Box component="span" sx={{ fontWeight: 600 }}>{t('privacypolicy.section3FooterBold')}</Box>.
        </Typography>
      </Box>

      {/* Section 4 */}
      <Box my={5}>
        {/* Main Heading with Number */}
        <Box sx={{ display: 'flex', alignItems: 'baseline', mb: 2 }}>

          <Typography
            className='headings-h4 policy_heading'
            variant="h5"
            sx={{
              color: '#fcfcfc',
              fontWeight: 600
            }}
          >
            {t('privacypolicy.section4Title')}
          </Typography>
        </Box>

        {/* Introduction Paragraph */}
        <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
          {t('privacypolicy.section4Text')}
        </Typography>

        {/* Legal Bases List */}
        <Box component="ul" sx={{
          pl: 4,
          mb: 2,
          '& li': {
            marginBottom: 1
          }
        }}>
          <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
            <Box component="span" sx={{ fontWeight: 600 }}>{t('privacypolicy.section4Legal1Bold')}</Box> {t('privacypolicy.section4Legal1')}
          </Typography>
          <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
            <Box component="span" sx={{ fontWeight: 600 }}>{t('privacypolicy.section4Legal2Bold')}</Box> {t('privacypolicy.section4Legal2')}
          </Typography>
          <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
            <Box component="span" sx={{ fontWeight: 600 }}>{t('privacypolicy.section4Legal3Bold')}</Box> {t('privacypolicy.section4Legal3')}
          </Typography>
          <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
            <Box component="span" sx={{ fontWeight: 600 }}>{t('privacypolicy.section4Legal4Bold')}</Box> {t('privacypolicy.section4Legal4')}
          </Typography>
        </Box>

        {/* Final Paragraph */}
        <Typography className='bodyRegularText3 shantellSansFont' variant="body1">
          {t('privacypolicy.section4Footer')}
        </Typography>
      </Box>

      {/* Section 5 */}
      <Box my={5}>
        {/* Main Heading with Number */}
        <Box sx={{ display: 'flex', alignItems: 'baseline', mb: 2 }}>

          <Typography
            className='headings-h4 policy_heading'
            variant="h5"
            sx={{
              color: '#fcfcfc',
              fontWeight: 600
            }}
          >
            {t('privacypolicy.section5Title')}
          </Typography>
        </Box>

        {/*  5.1 Account and Contact Data*/}
        <Box sx={{ mb: 4 }}>
          {/* Sub-heading 5.1 */}
          <Typography
            className='headings-h5'
            variant="h6"
            gutterBottom
            sx={{

              color: '#fcfcfc',
              fontWeight: 600,
              mb: 2
            }}
          >
            {t('privacypolicy.section5_1Title')}
          </Typography>

          {/* First Paragraph */}
          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
            {t('privacypolicy.section5_1Text')}
          </Typography>

          {/* Data List */}
          <Box component="ul" sx={{
            pl: 4,
            mb: 3,
            '& li': {
              marginBottom: 0.5
            }
          }}>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.section5_1Data1')}
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.section5_1Data2')}
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.section5_1Data3')}
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.section5_1Data4')}
            </Typography>
          </Box>

          {/* Purpose */}
          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph sx={{ fontWeight: 600, color: '#fcfcfc' }}>
            {t('privacypolicy.section5_1PurposeLabel')}
          </Typography>
          <Box component="ul" sx={{
            pl: 4,
            mb: 3,
            '& li': {
              marginBottom: 0.5
            }
          }}>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.section5_1Purpose1')}
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.section5_1Purpose2')}
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.section5_1Purpose3')}
            </Typography>
          </Box>

          {/* Legal Basis */}
          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" sx={{ fontWeight: 600, color: '#fcfcfc' }}>
            {t('privacypolicy.section5_1LegalLabel')}
          </Typography>
          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" sx={{ ml: 2, mb: 4 }}>
            {t('privacypolicy.section5_1Legal')}
          </Typography>


        </Box>

        {/*5.2 Cookies and Website Analytics */}
        <Box sx={{ mb: 4 }}>
          {/* Sub-heading 5.2 */}
          <Typography
            className='headings-h5'
            variant="h6"
            gutterBottom
            sx={{

              color: '#fcfcfc',
              fontWeight: 600,
              mb: 2
            }}
          >
            {t('privacypolicy.section5_2Title')}
          </Typography>

          {/* First Paragraph */}
          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
            {t('privacypolicy.section5_2Text1')}
          </Typography>

          {/* Cookies Purpose List */}
          <Box component="ul" sx={{
            pl: 4,
            mb: 3,
            '& li': {
              marginBottom: 0.5
            }
          }}>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.section5_2Item1')}
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.section5_2Item2')}
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.section5_2Item3')}
            </Typography>
          </Box>

          {/* Third-party tools */}
          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
            {t('privacypolicy.section5_2Text2')}
          </Typography>

          {/* Cookie consent */}
          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
            {t('privacypolicy.section5_2Text3')}
          </Typography>

          {/* Legal Basis */}
          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" sx={{ fontWeight: 600, color: '#fcfcfc' }}>
            {t('privacypolicy.section5_2LegalLabel')}
          </Typography>
          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" sx={{ ml: 2, mb: 4 }}>
            {t('privacypolicy.section5_2Legal')}
          </Typography>

        </Box>

        {/*5.3 Website Payments  */}
        <Box>
          {/* Sub-heading 5.3 */}
          <Typography
            className='headings-h5'
            variant="h6"
            gutterBottom
            sx={{

              color: '#fcfcfc',
              fontWeight: 600,
              mb: 2
            }}
          >
            {t('privacypolicy.section5_3Title')}
          </Typography>

          {/* First Paragraph */}
          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
            {t('privacypolicy.section5_3Text1')} <Box component="span" sx={{ fontWeight: 600 }}>{t('privacypolicy.section5_3Text1Bold')}</Box>.
          </Typography>

          {/* Second Paragraph */}
          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
            {t('privacypolicy.section5_3Text2')}
          </Typography>

          {/* Legal Basis */}
          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" sx={{ fontWeight: 600, color: '#fcfcfc' }}>
            {t('privacypolicy.section5_3LegalLabel')}
          </Typography>
          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" sx={{ ml: 2 }}>
            {t('privacypolicy.section5_3Legal')}
          </Typography>
        </Box>
      </Box>

      {/* Section 6 */}
      <Box my={5}>
        {/* Main Heading with Number */}
        <Box sx={{ display: 'flex', alignItems: 'baseline', mb: 2 }}>

          <Typography
            className='headings-h4 policy_heading'
            variant="h5"
            sx={{
              color: '#fcfcfc',
              fontWeight: 600
            }}
          >
            {t('privacypolicy.section6Title')}
          </Typography>
        </Box>

        {/*  6.1 User Roles and Access Control  */}
        <Box sx={{ mb: 4 }}>
          {/* Sub-heading 6.1 */}
          <Typography
            className='headings-h5'
            variant="h6"
            gutterBottom
            sx={{

              color: '#fcfcfc',
              fontWeight: 600,
              mb: 2
            }}
          >
            {t('privacypolicy.section6_1Title')}
          </Typography>

          {/* First Paragraph */}
          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
            {t('privacypolicy.section6_1Text1')}
          </Typography>

          {/* User Roles List */}
          <Box component="ul" sx={{
            pl: 4,
            mb: 3,
            '& li': {
              marginBottom: 0.5
            }
          }}>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.section6_1Role1')}
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.section6_1Role2')}
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.section6_1Role3')}
            </Typography>
          </Box>

          {/* Second Paragraph */}
          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
            {t('privacypolicy.section6_1Text2')}
          </Typography>

          {/* Access Control List */}
          <Box component="ul" sx={{
            pl: 4,
            mb: 3,
            '& li': {
              marginBottom: 0.5
            }
          }}>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.section6_1Access1')}
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.section6_1Access2')}
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.section6_1Access3')}
            </Typography>
          </Box>
        </Box>

        {/* 6.2 Activity Logging */}
        <Box>
          {/* Sub-heading 6.2 */}
          <Typography
            className='headings-h5'
            variant="h6"
            gutterBottom
            sx={{

              color: '#fcfcfc',
              fontWeight: 600,
              mb: 2
            }}
          >
            {t('privacypolicy.section6_2Title')}
          </Typography>

          {/* First Paragraph */}
          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
            {t('privacypolicy.section6_2Text1')}
          </Typography>

          {/* Records List */}
          <Box component="ul" sx={{
            pl: 4,
            mb: 3,
            '& li': {
              marginBottom: 0.5
            }
          }}>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.section6_2Record1')}
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.section6_2Record2')}
            </Typography>
          </Box>

          {/* Second Paragraph */}
          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
            {t('privacypolicy.section6_2Text2')}
          </Typography>

          {/* Does Not Record List */}
          <Box component="ul" sx={{
            pl: 4,
            mb: 3,
            '& li': {
              marginBottom: 0.5
            }
          }}>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.section6_2NotRecord1')}
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.section6_2NotRecord2')}
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.section6_2NotRecord3')}
            </Typography>
          </Box>

          {/* Purpose */}
          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph sx={{ fontWeight: 600, color: "#fcfcfc" }}>
            {t('privacypolicy.section6_2PurposeLabel')}
          </Typography>
          <Box component="ul" sx={{
            pl: 4,
            mb: 3,
            '& li': {
              marginBottom: 0.5
            }
          }}>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.section6_2Purpose1')}
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.section6_2Purpose2')}
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.section6_2Purpose3')}
            </Typography>
          </Box>

          {/* Legal Basis */}
          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" sx={{ fontWeight: 600, color: "#fcfcfc" }}>
            {t('privacypolicy.section6_2LegalLabel')}
          </Typography>
          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" sx={{ ml: 2 }}>
            {t('privacypolicy.section6_2Legal')}
          </Typography>
        </Box>
      </Box>

      {/* Section 7 */}

      <Box my={5}>
        {/* Main Heading with Number */}
        <Box sx={{ display: 'flex', alignItems: 'baseline', mb: 2 }}>

          <Typography
            className='headings-h4 policy_heading'
            variant="h5"
            sx={{
              color: '#fcfcfc',
              fontWeight: 600
            }}
          >
            {t('privacypolicy.section7Title')}
          </Typography>
        </Box>

        {/*  7.1 Location Data  */}
        <Box sx={{ mb: 4 }}>
          {/* Sub-heading 7.1 */}
          <Typography
            className='headings-h5'
            variant="h6"
            gutterBottom
            sx={{

              color: '#fcfcfc',
              fontWeight: 600,
              mb: 2
            }}
          >
            {t('privacypolicy.section7_1Title')}
          </Typography>

          {/* First Paragraph */}
          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
            {t('privacypolicy.section7_1Text1')}
          </Typography>

          {/* Second Paragraph */}
          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph sx={{ color: '#fcfcfc' }}>
            {t('privacypolicy.section7_1Text2')}
          </Typography>

          {/* Location Characteristics List */}
          <Box component="ul" sx={{
            pl: 4,
            mb: 3,
            '& li': {
              marginBottom: 0.5
            }
          }}>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.section7_1Location1')}
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.section7_1Location2')}
            </Typography>
          </Box>

          {/* Location Usage */}
          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph sx={{ fontWeight: 600, color: '#fcfcfc' }}>
            {t('privacypolicy.section7_1UsageLabel')}
          </Typography>
          <Box component="ul" sx={{
            pl: 4,
            mb: 3,
            '& li': {
              marginBottom: 0.5
            }
          }}>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.section7_1Usage1')}
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.section7_1Usage2')}
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.section7_1Usage3')}
            </Typography>
          </Box>

          {/* Legal Basis */}
          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" sx={{ fontWeight: 600, color: '#fcfcfc' }}>
            {t('privacypolicy.section7_1LegalLabel')}
          </Typography>
          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" sx={{ ml: 2, mb: 4 }}>
            {t('privacypolicy.section7_1Legal').split('\n').map((line, i) => (<span key={i}>{line}<br /></span>))}
          </Typography>


        </Box>

        {/*  7.2 Camera Access (Scan Feature) */}
        <Box sx={{ mb: 4 }}>
          {/* Sub-heading 7.2 */}
          <Typography
            className='headings-h5'
            variant="h6"
            gutterBottom
            sx={{

              color: '#fcfcfc',
              fontWeight: 600,
              mb: 2
            }}
          >
            {t('privacypolicy.section7_2Title')}
          </Typography>

          {/* First Paragraph */}
          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph sx={{ color: '#fcfcfc' }}>
            {t('privacypolicy.section7_2Text1')}
          </Typography>

          {/* Camera Usage List */}
          <Box component="ul" sx={{
            pl: 4,
            mb: 3,
            '& li': {
              marginBottom: 0.5
            }
          }}>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.section7_2Usage1')}
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.section7_2Usage2')}
            </Typography>
          </Box>

          {/* Second Paragraph */}
          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph sx={{  }}>
            {t('privacypolicy.section7_2Text2')}
          </Typography>

          {/* Legal Basis */}
          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" sx={{ fontWeight: 600, color: '#fcfcfc' }}>
            {t('privacypolicy.section7_2LegalLabel')}
          </Typography>
          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" sx={{ ml: 2, mb: 4 }}>
            {t('privacypolicy.section7_2Legal')}
          </Typography>


        </Box>

        {/* 7.3 Device Telemetry and Technical Records */}
        <Box>
          {/* Sub-heading 7.3 */}
          <Typography
            className='headings-h5'
            variant="h6"
            gutterBottom
            sx={{

              color: '#fcfcfc',
              fontWeight: 600,
              mb: 2
            }}
          >
            {t('privacypolicy.section7_3Title')}
          </Typography>

          {/* First Paragraph */}
          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph sx={{ color: '#fcfcfc' }}>
            {t('privacypolicy.section7_3Text1')}
          </Typography>

          {/* Data Collection List */}
          <Box component="ul" sx={{
            pl: 4,
            mb: 3,
            '& li': {
              marginBottom: 0.5
            }
          }}>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.section7_3Data1')}
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.section7_3Data2')}
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.section7_3Data3')}
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.section7_3Data4')}
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.section7_3Data5')}
            </Typography>
          </Box>

          {/* Analytics Section */}
          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph sx={{ color: '#fcfcfc' }}>
            {t('privacypolicy.section7_3Text2')}
          </Typography>
          <Box component="ul" sx={{
            pl: 4,
            mb: 3,
            '& li': {
              marginBottom: 0.5
            }
          }}>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.section7_3Analytics1')}
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.section7_3Analytics2')}
            </Typography>
          </Box>

          {/* Legal Basis */}
          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" sx={{ fontWeight: 600, color: '#fcfcfc' }}>
            {t('privacypolicy.section7_3LegalLabel')}
          </Typography>
          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" sx={{ ml: 2 }}>
            {t('privacypolicy.section7_3Legal').split('\n').map((line, i) => (<span key={i}>{line}<br /></span>))}
          </Typography>
        </Box>
      </Box>

      {/* Section 8 */}

      <Box my={5}>
        {/* Main Heading with Number */}
        <Box sx={{ display: 'flex', alignItems: 'baseline', mb: 2 }}>

          <Typography
            className='headings-h4 policy_heading'
            variant="h5"
            sx={{
              color: '#fcfcfc',
              fontWeight: 600
            }}
          >
            {t('privacypolicy.section8Title')}
          </Typography>
        </Box>

        {/* 8.1 Reservation Processing  */}
        <Box>
          {/* Sub-heading 8.1 */}
          <Typography
            className='headings-h5'
            variant="h6"
            gutterBottom
            sx={{

              color: '#fcfcfc',
              fontWeight: 600,
              mb: 2
            }}
          >
            {t('privacypolicy.section8_1Title')}
          </Typography>

          {/* First Paragraph */}
          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph sx={{ color: "#fcfcfc" }}>
            {t('privacypolicy.section8_1Text1')}
          </Typography>

          {/* Data Processing List */}
          <Box component="ul" sx={{
            pl: 4,
            mb: 3,
            '& li': {
              marginBottom: 0.5
            }
          }}>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.section8_1Data1')}
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.section8_1Data2')}
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.section8_1Data3')}
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.section8_1Data4')}
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.section8_1Data5')}
            </Typography>
          </Box>

          {/* Second Paragraph */}
          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph sx={{ color: "#fcfcfc" }}>
            {t('privacypolicy.section8_1Text2')}
          </Typography>

          {/* Reservation Rules List */}
          <Box component="ul" sx={{
            pl: 4,
            mb: 3,
            '& li': {
              marginBottom: 0.5
            }
          }}>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.section8_1Rule1')}
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
             {t('privacypolicy.section8_1Rule2')}
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.section8_1Rule3')} <Box component="span" sx={{ fontWeight: 600 }}>{t('privacypolicy.section8_1Rule3Bold')}</Box> {t('privacypolicy.section8_1Rule3End')}
            </Typography>
          </Box>

          {/* Third Paragraph with bold text */}
          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
            {t('privacypolicy.section8_1Text3')} <Box component="span" sx={{ fontWeight: 600 }}>{t('privacypolicy.section8_1Text3Bold')}</Box>.
          </Typography>

          {/* Legal Basis */}
          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" sx={{ fontWeight: 600, color: '#fcfcfc' }}>
            {t('privacypolicy.section8_1LegalLabel')}
          </Typography>
          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" sx={{ ml: 2 }}>
            {t('privacypolicy.section8_1Legal')}
          </Typography>
        </Box>
      </Box>


      {/* Section 9 */}
      <Box my={5}>
        {/* Main Heading with Number */}
        <Box sx={{ display: 'flex', alignItems: 'baseline', mb: 2 }}>

          <Typography
            className='headings-h4 policy_heading'
            variant="h5"
            sx={{
              color: '#fcfcfc',
              fontWeight: 600
            }}
          >
            {t('privacypolicy.section9Title')}
          </Typography>
        </Box>

        {/*  9.1 Membership Data  */}
        <Box sx={{ mb: 4 }}>
          {/* Sub-heading 9.1 */}
          <Typography
            className='headings-h5'
            variant="h6"
            gutterBottom
            sx={{

              color: '#fcfcfc',
              fontWeight: 600,
              mb: 2
            }}
          >
            {t('privacypolicy.section9_1Title')}
          </Typography>

          {/* First Paragraph */}
          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph sx={{ color: '#fcfcfc' }}>
            {t('privacypolicy.section9_1Text1')}
          </Typography>

          {/* Membership Data List */}
          <Box component="ul" sx={{
            pl: 4,
            mb: 3,
            '& li': {
              marginBottom: 0.5
            }
          }}>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.section9_1Data1')}
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.section9_1Data2')}
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.section9_1Data3')}
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.section9_1Data4')}
            </Typography>
          </Box>
        </Box>

        {/* 9.2 Wallet Rules  */}
        <Box>
          {/* Sub-heading 9.2 */}
          <Typography
            className='headings-h5'
            variant="h6"
            gutterBottom
            sx={{

              color: '#fcfcfc',
              fontWeight: 600,
              mb: 2
            }}
          >
            {t('privacypolicy.section9_2Title')}
          </Typography>

          {/* First Rule */}
          <Box component="ul" sx={{
            pl: 4,
            mb: 3,
            '& li': {
              marginBottom: 1
            }
          }}>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.section9_2Rule1')}
            </Typography>
          </Box>

          {/* Second Rule with sub-rules */}
          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph sx={{ color: '#fcfcfc' }}>
            {t('privacypolicy.section9_2Text1')}
          </Typography>

          <Box component="ul" sx={{
            pl: 8,
            mb: 3,
            '& li': {
              marginBottom: 0.5
            }
          }}>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.section9_2Fund1')}
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.section9_2Fund2')}
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.section9_2Fund3')}
            </Typography>
          </Box>

          {/* Legal Basis */}
          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" sx={{ fontWeight: 600, color: '#fcfcfc' }}>
            {t('privacypolicy.section9_2LegalLabel')}
          </Typography>
          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" sx={{ ml: 2 }}>
            {t('privacypolicy.section9_2Legal')}
          </Typography>
        </Box>
      </Box>

      {/*  10. Email Communications  */}
      <Box my={5}>
        {/* Main Heading with Number */}
        <Box sx={{ display: 'flex', alignItems: 'baseline', mb: 2 }}>

          <Typography
            className='headings-h4 policy_heading'
            variant="h5"
            sx={{
              color: '#fcfcfc',
              fontWeight: 600
            }}
          >
            {t('privacypolicy.section10Title')}
          </Typography>
        </Box>

        {/* First Paragraph */}
        <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph sx={{ color: "#fcfcfc" }}>
          {t('privacypolicy.section10Text1')}
        </Typography>

        {/* Email Types List */}
        <Box component="ul" sx={{
          pl: 4,
          mb: 3,
          '& li': {
            marginBottom: 0.5
          }
        }}>
          <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
            {t('privacypolicy.section10Type1')}
          </Typography>
          <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
            {t('privacypolicy.section10Type2')}
          </Typography>
          <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
            {t('privacypolicy.section10Type3')}
          </Typography>
          <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
            {t('privacypolicy.section10Type4')}
          </Typography>
        </Box>

        {/* Second Paragraph */}
        <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
          {t('privacypolicy.section10Text2')}
        </Typography>

        {/* Legal Basis */}
        <Typography className='bodyRegularText3 shantellSansFont' variant="body1" sx={{ fontWeight: 600, color: '#fcfcfc' }}>
          {t('privacypolicy.section10LegalLabel')}
        </Typography>
        <Typography className='bodyRegularText3 shantellSansFont' variant="body1" sx={{ ml: 2 }}>
          {t('privacypolicy.section10Legal')}
        </Typography>
      </Box>

      {/* 11. Data Security  */}
      <Box my={5}>
        {/* Main Heading with Number */}
        <Box sx={{ display: 'flex', alignItems: 'baseline', mb: 2 }}>

          <Typography
            className='headings-h4 policy_heading'
            variant="h5"
            sx={{
              color: '#fcfcfc',
              fontWeight: 600
            }}
          >
            {t('privacypolicy.section11Title')}
          </Typography>
        </Box>

        {/*  11.1 Technical and Organisational Measures*/}
        <Box>
          {/* Sub-heading 11.1 */}
          <Typography
            className='headings-h5'
            variant="h6"
            gutterBottom
            sx={{

              color: '#fcfcfc',
              fontWeight: 600,
              mb: 2
            }}
          >
            {t('privacypolicy.section11_1Title')}
          </Typography>

          {/* First Paragraph */}
          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph sx={{ color: "#fcfcfc" }}>
            {t('privacypolicy.section11_1Text1')}
          </Typography>

          {/* Security Measures List */}
          <Box component="ul" sx={{
            pl: 4,
            mb: 3,
            '& li': {
              marginBottom: 0.5
            }
          }}>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.section11_1Measure1')}
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.section11_1Measure2')}
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.section11_1Measure3')}
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.section11_1Measure4')}
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.section11_1Measure5')}
            </Typography>
          </Box>

          {/* Legal Basis */}
          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" sx={{ fontWeight: 600, color: '#fcfcfc' }}>
            {t('privacypolicy.section11_1LegalLabel')}
          </Typography>
          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" sx={{ ml: 2 }}>
            {t('privacypolicy.section11_1Legal')}
          </Typography>
        </Box>
      </Box>

      {/* 12. Data Retention*/}
      <Box my={5}>
        {/* Main Heading with Number */}
        <Box sx={{ display: 'flex', alignItems: 'baseline', mb: 2 }}>

          <Typography
            className='headings-h4 policy_heading'
            variant="h5"
            sx={{
              color: '#fcfcfc',
              fontWeight: 600
            }}
          >
            {t('privacypolicy.section12Title')}
          </Typography>
        </Box>

        {/* First Paragraph */}
        <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph sx={{ color: "#fcfcfc" }}>
          {t('privacypolicy.section12Text1')}
        </Typography>

        {/* Retention Purposes List */}
        <Box component="ul" sx={{
          pl: 4,
          mb: 3,
          '& li': {
            marginBottom: 0.5
          }
        }}>
          <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
            {t('privacypolicy.section12Purpose1')}
          </Typography>
          <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
            {t('privacypolicy.section12Purpose2')}
          </Typography>
          <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
            {t('privacypolicy.section12Purpose3')}
          </Typography>
        </Box>

        {/* Final Sentence */}
        <Typography className='bodyRegularText3 shantellSansFont' variant="body1">
          {t('privacypolicy.section12Text2')}
        </Typography>
      </Box>

      {/*  13. International Data Transfers */}
      <Box my={5}>
        {/* Main Heading with Number */}
        <Box sx={{ display: 'flex', alignItems: 'baseline', mb: 2 }}>

          <Typography
            className='headings-h4 policy_heading'
            variant="h5"
            sx={{
              color: '#fcfcfc',
              fontWeight: 600
            }}
          >
            {t('privacypolicy.section13Title')}
          </Typography>
        </Box>

        {/* First Paragraph */}
        <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
          {t('privacypolicy.section13Text1')}
        </Typography>

        {/* Second Paragraph */}
        <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
          {t('privacypolicy.section13Text2')}
        </Typography>

        {/* Legal Basis */}
        <Typography className='bodyRegularText3 shantellSansFont' variant="body1" sx={{ fontWeight: 600, color: "#fcfcfc" }}>
          {t('privacypolicy.section13LegalLabel')}
        </Typography>
        <Typography className='bodyRegularText3 shantellSansFont' variant="body1" sx={{ ml: 2 }}>
          {t('privacypolicy.section13Legal')}
        </Typography>
      </Box>

      {/*  14. Children's Privacy */}
      <Box my={5}>
        {/* Main Heading with Number */}
        <Box sx={{ display: 'flex', alignItems: 'baseline', mb: 2 }}>

          <Typography
            className='headings-h4 policy_heading'
            variant="h5"
            sx={{
              color: '#fcfcfc',
              fontWeight: 600
            }}
          >
            {t('privacypolicy.section14Title')}
          </Typography>
        </Box>

        {/* First Paragraph */}
        <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
          {t('privacypolicy.section14Text1')}
        </Typography>

        {/* Second Paragraph */}
        <Typography className='bodyRegularText3 shantellSansFont' variant="body1">
          {t('privacypolicy.section14Text2')}
        </Typography>
      </Box>


      {/*  15. User Rights */}

      <Box my={5}>
        {/* Main Heading with Number */}
        <Box sx={{ display: 'flex', alignItems: 'baseline', mb: 2 }}>

          <Typography
            className='headings-h4 policy_heading'
            variant="h5"
            sx={{
              color: '#fcfcfc',
              fontWeight: 600
            }}
          >
            {t('privacypolicy.section15Title')}
          </Typography>
        </Box>

        {/* First Paragraph */}
        <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph sx={{ color: "#fcfcfc" }}>
          {t('privacypolicy.section15Text1')}
        </Typography>

        {/* User Rights List */}
        <Box component="ul" sx={{
          pl: 4,
          mb: 3,
          '& li': {
            marginBottom: 0.5
          }
        }}>
          <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
            {t('privacypolicy.section15Right1')}
          </Typography>
          <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
            {t('privacypolicy.section15Right2')}
          </Typography>
          <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
            {t('privacypolicy.section15Right3')}
          </Typography>
          <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
            {t('privacypolicy.section15Right4')}
          </Typography>
          <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
            {t('privacypolicy.section15Right5')}
          </Typography>
          <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
            {t('privacypolicy.section15Right6')}
          </Typography>
          <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
            {t('privacypolicy.section15Right7')}
          </Typography>
        </Box>
      </Box>

      {/* 16. Changes to This Policy  */}
      <Box my={5}>
        {/* Main Heading with Number */}
        <Box sx={{ display: 'flex', alignItems: 'baseline', mb: 2 }}>

          <Typography
            className='headings-h4 policy_heading'
            variant="h5"
            sx={{
              color: '#fcfcfc',
              fontWeight: 600
            }}
          >
            {t('privacypolicy.section16Title')}
          </Typography>
        </Box>
        <Typography className='bodyRegularText3 shantellSansFont' variant="body1">
          {t('privacypolicy.section16Text')}
        </Typography>
      </Box>

      {/* 17. Data Controller and Contact*/}
      <Box my={5}>
        {/* Main Heading with Number */}
        <Box sx={{ display: 'flex', alignItems: 'baseline', mb: 2 }}>

          <Typography
            className='headings-h4 policy_heading'
            variant="h5"
            sx={{
              color: '#fcfcfc',
              fontWeight: 600
            }}
          >
            {t('privacypolicy.section17Title')}
          </Typography>
        </Box>

        {/* Company Name */}
        <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
          {t('privacypolicy.section17Company')}
        </Typography>

        {/* Address */}
        <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
          {t('privacypolicy.section17Address').split('\n').map((line, i) => (<span key={i}>{line}<br /></span>))}
        </Typography>

        {/* Email */}
        <Typography className='bodyRegularText3 shantellSansFont' variant="body1">
          {t('privacypolicy.section17Email')}
        </Typography>
      </Box>

      {/* ========== 18. Detailed Processing by Application Section ========== */}
      <Box my={5}>
        {/* Main Heading with Number */}
        <Box sx={{ display: 'flex', alignItems: 'baseline', mb: 2 }}>

          <Typography
            className='headings-h4 policy_heading'
            variant="h5"
            sx={{
              color: '#fcfcfc',
              fontWeight: 600
            }}
          >
            {t('privacypolicy.section18Title')}
          </Typography>
        </Box>

        {/* 18.1 Home Section (Website & Mobile App)  */}
        <Box sx={{ mb: 4 }}>
          {/* Sub-heading 18.1 */}
          <Typography
            className='headings-h5'
            variant="h6"
            gutterBottom
            sx={{
              color: '#fcfcfc',
              fontWeight: 600,
              mb: 5
            }}
          >
            {t('privacypolicy.section18_1Title')}
          </Typography>

          {/*  18.1.1 Machine Discovery and Availability */}
          <Box sx={{ mb: 4 }}>
            {/* Sub-sub-heading 18.1.1 */}
            <Typography
              className='headings-h5'
              variant="subtitle1"
              gutterBottom
              sx={{
                ml: 2,
                color: '#fcfcfc',
                fontWeight: 600,
                mb: 3
              }}
            >
              {t('privacypolicy.section18_1_1Title')}
            </Typography>

            {/* First Paragraph */}
            <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
              {t('privacypolicy.section18_1_1Text1')}
            </Typography>

            {/* Second Paragraph */}
            <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
              {t('privacypolicy.section18_1_1Text2')}
            </Typography>

            {/* Purpose */}
            <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph sx={{ fontWeight: 600, color: '#fcfcfc' }}>
              {t('privacypolicy.section18_1_1PurposeLabel')}
            </Typography>
            <Box component="ul" sx={{
              pl: 4,
              mb: 3,
              '& li': {
                marginBottom: 0.5
              }
            }}>
              <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
                {t('privacypolicy.section18_1_1Purpose1')}
              </Typography>
              <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
                {t('privacypolicy.section18_1_1Purpose2')}
              </Typography>
              <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
                {t('privacypolicy.section18_1_1Purpose3')}
              </Typography>
            </Box>

            {/* Legal Basis */}
            <Typography className='bodyRegularText3 shantellSansFont' variant="body1" sx={{ fontWeight: 600, color: '#fcfcfc' }}>
              {t('privacypolicy.section18_1_1LegalLabel')}
            </Typography>
            <Typography className='bodyRegularText3 shantellSansFont' variant="body1" sx={{ ml: 2, mb: 1 }}>
              {t('privacypolicy.section18_1_1LegalLine1')}
            </Typography>
            <Typography className='bodyRegularText3 shantellSansFont' variant="body1" sx={{ ml: 2, mb: 4 }}>
              {t('privacypolicy.section18_1_1LegalLine2')}
            </Typography>


          </Box>

          {/* 18.1.2 Location-Based Sorting (Mobile App)  */}
          <Box sx={{ mb: 4 }}>
            {/* Sub-sub-heading 18.1.2 */}
            <Typography
              className='headings-h5'
              variant="subtitle1"
              gutterBottom
              sx={{
                ml: 2,
                color: '#fcfcfc',
                fontWeight: 600,
                mb: 2
              }}
            >
              {t('privacypolicy.section18_1_2Title')}
            </Typography>

            {/* First Paragraph */}
            <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
              {t('privacypolicy.section18_1_2Text1')}
            </Typography>

            {/* Location Usage */}
            <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
              {t('privacypolicy.section18_1_2Text2')}
            </Typography>
            <Box component="ul" sx={{
              pl: 4,
              mb: 3,
              '& li': {
                marginBottom: 0.5
              }
            }}>
              <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
                {t('privacypolicy.section18_1_2Usage1')}
              </Typography>
              <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
                {t('privacypolicy.section18_1_2Usage2')}
              </Typography>
              <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
                {t('privacypolicy.section18_1_2Usage3')}
              </Typography>
            </Box>

            {/* Third Paragraph */}
            <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
              {t('privacypolicy.section18_1_2Text3')}
            </Typography>

            {/* Legal Basis */}
            <Typography className='bodyRegularText3 shantellSansFont' variant="body1" sx={{ fontWeight: 600, color: '#fcfcfc' }}>
              {t('privacypolicy.section18_1_2LegalLabel')}
            </Typography>
            <Typography className='bodyRegularText3 shantellSansFont' variant="body1" sx={{ ml: 2 }}>
              {t('privacypolicy.section18_1_2Legal').split('\n').map((line, i) => (<span key={i}>{line}<br /></span>))}
            </Typography>
          </Box>
        </Box>

        {/* 18.2 Menu and Item Display */}
        <Box sx={{ mb: 4 }}>
          {/* Sub-heading 18.2 */}
          <Typography
            className='headings-h5'
            variant="h6"
            gutterBottom
            sx={{
              color: '#fcfcfc',
              fontWeight: 600,
              mb: 5
            }}
          >
            {t('privacypolicy.section18_2Title')}
          </Typography>

          {/*  18.2.1 Menu Content */}
          <Box>
            {/* Sub-sub-heading 18.2.1 */}
            <Typography
              className='headings-h5'
              variant="subtitle1"
              gutterBottom
              sx={{
                ml: 2,
                color: '#fcfcfc',
                fontWeight: 600,
                mb: 2
              }}
            >
              {t('privacypolicy.section18_2_1Title')}
            </Typography>

            {/* First Paragraph */}
            <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
              {t('privacypolicy.section18_2_1Text1')}
            </Typography>

            {/* Second Paragraph */}
            <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
              {t('privacypolicy.section18_2_1Text2')}
            </Typography>

            {/* Personalization List */}
            <Box component="ul" sx={{
              pl: 4,
              mb: 3,
              '& li': {
                marginBottom: 0.5
              }
            }}>
              <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
                {t('privacypolicy.section18_2_1Factor1')}
              </Typography>
              <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
                {t('privacypolicy.section18_2_1Factor2')}
              </Typography>
              <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
                {t('privacypolicy.section18_2_1Factor3')}
              </Typography>
            </Box>

            {/* Third Paragraph */}
            <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
              {t('privacypolicy.section18_2_1Text3')}
            </Typography>

            {/* Legal Basis */}
            <Typography className='bodyRegularText3 shantellSansFont' variant="body1" sx={{ fontWeight: 600, color: '#fcfcfc' }}>
              {t('privacypolicy.section18_2_1LegalLabel')}
            </Typography>
            <Typography className='bodyRegularText3 shantellSansFont' variant="body1" sx={{ ml: 2 }}>
              {t('privacypolicy.section18_2_1Legal')}
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* 19. Reservation Lifecycle Processing */}
      <Box my={5}>
        {/* Main Heading with Number */}
        <Box sx={{ display: 'flex', alignItems: 'baseline', mb: 2 }}>

          <Typography
            className='headings-h4 policy_heading'
            variant="h5"
            sx={{
              color: '#fcfcfc',
              fontWeight: 600
            }}
          >
            {t('privacypolicy.section19Title')}
          </Typography>
        </Box>

        {/* 19.1 Reservation Creation */}
        <Box sx={{ mb: 4 }}>
          {/* Sub-heading 19.1 */}
          <Typography
            className='headings-h5'
            variant="h6"
            gutterBottom
            sx={{
              color: '#fcfcfc',
              fontWeight: 600,
              mb: 2
            }}
          >
            {t('privacypolicy.section19_1Title')}
          </Typography>

          {/* First Paragraph */}
          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
            {t('privacypolicy.section19_1Text1')}
          </Typography>

          {/* Data Points List */}
          <Box component="ul" sx={{
            pl: 4,
            mb: 3,
            '& li': {
              marginBottom: 0.5
            }
          }}>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.section19_1Data1')}
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.section19_1Data2')}
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.section19_1Data3')}
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.section19_1Data4')}
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.section19_1Data5')}
            </Typography>
          </Box>

          {/* Second Paragraph */}
          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
            {t('privacypolicy.section19_1Text2')}
          </Typography>

          {/* Legal Basis */}
          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" sx={{ fontWeight: 600, color: '#fcfcfc' }}>
            {t('privacypolicy.section19_1LegalLabel')}
          </Typography>
          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" sx={{ ml: 2 }}>
            {t('privacypolicy.section19_1Legal')}
          </Typography>


        </Box>

        {/*  19.2 Reservation Expiry and Release */}
        <Box>
          {/* Sub-heading 19.2 */}
          <Typography
            className='headings-h5'
            variant="h6"
            gutterBottom
            sx={{
              color: '#fcfcfc',
              fontWeight: 600,
              mb: 2
            }}
          >
            {t('privacypolicy.section19_2Title')}
          </Typography>

          {/* First Paragraph */}
          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
            {t('privacypolicy.section19_2Text1')}
          </Typography>

          {/* Expiry Actions List */}
          <Box component="ul" sx={{
            pl: 4,
            mb: 3,
            '& li': {
              marginBottom: 0.5
            }
          }}>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.section19_2Action1')}
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.section19_2Action2')}
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.section19_2Action3')}
            </Typography>
          </Box>

          {/* Second Paragraph */}
          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
            {t('privacypolicy.section19_2Text2')}
          </Typography>

          {/* Legal Basis */}
          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" sx={{ fontWeight: 600, color: '#fcfcfc' }}>
            {t('privacypolicy.section19_2LegalLabel')}
          </Typography>
          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" sx={{ ml: 2 }}>
            {t('privacypolicy.section19_2Legal').split('\n').map((line, i) => (<span key={i}>{line}<br /></span>))}
          </Typography>
        </Box>
      </Box>


      {/* 20. Wallet and Financial Data Processing */}
      <Box my={5}>
        {/* Main Heading with Number */}
        <Box sx={{ display: 'flex', alignItems: 'baseline', mb: 2 }}>

          <Typography
            className='headings-h4 policy_heading'
            variant="h5"
            sx={{
              color: '#fcfcfc',
              fontWeight: 600
            }}
          >
            {t('privacypolicy.section20Title')}
          </Typography>
        </Box>
      </Box>

      {/* 20.1 Wallet Balance Management */}
      <Box my={4} ml={3}>
        <Typography
          className='headings-h5'
          variant="h6"
          sx={{
            color: '#fcfcfc',
            fontWeight: 600,
            mb: 1.5
          }}
        >
          {t('privacypolicy.section20_1Title')}
        </Typography>
        <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
          {t('privacypolicy.section20_1Text1')}
        </Typography>
        <Box component="ul" sx={{ pl: 4, mb: 2 }}>
          <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
            {t('privacypolicy.section20_1Data1')}
          </Typography>
          <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
            {t('privacypolicy.section20_1Data2')}
          </Typography>
          <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
            {t('privacypolicy.section20_1Data3')}
          </Typography>
          <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
            {t('privacypolicy.section20_1Data4')}
          </Typography>
        </Box>
        <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph >
          {t('privacypolicy.section20_1Text2')} <span className='bodyRegularText3 shantellSansFont' style={{ color: '#fcfcfc',fontWeight:'600'}}>{t('privacypolicy.section20_1Text2Bold')}</span>{t('privacypolicy.section20_1Text2End')}
        </Typography>
        <Typography className='bodyRegularText3 shantellSansFont' variant="body1" sx={{ fontStyle: 'italic' }}>
          <span className='bodyRegularText3 shantellSansFont' style={{ color: '#fcfcfc',fontWeight:'600'}}>{t('privacypolicy.section20_1LegalLabel')}</span><br />
          {t('privacypolicy.section20_1Legal')}
        </Typography>
      </Box>

      {/* 20.2 Refund and Adjustment Records */}
      <Box my={4} ml={3}>
        <Typography
          className='headings-h5'
          variant="h6"
          sx={{
            color: '#fcfcfc',
            fontWeight: 600,
            mb: 1.5
          }}
        >
          {t('privacypolicy.section20_2Title')}
        </Typography>
        <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
          {t('privacypolicy.section20_2Text1')}
        </Typography>
        <Box component="ul" sx={{ pl: 4, mb: 2 }}>
          <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
            {t('privacypolicy.section20_2Action1')}
          </Typography>
          <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
            {t('privacypolicy.section20_2Action2')}
          </Typography>
          <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
            {t('privacypolicy.section20_2Action3')}
          </Typography>
        </Box>
        <Typography className='bodyRegularText3 shantellSansFont' variant="body1">
          {t('privacypolicy.section20_2Text2')}
        </Typography>
      </Box>

      {/* 21. Security Logging and Fraud Prevention */}
      <Box my={5}>
        {/* Main Heading with Number */}
        <Box sx={{ display: 'flex', alignItems: 'baseline', mb: 2 }}>

          <Typography
            className='headings-h4 policy_heading'
            variant="h5"
            sx={{
              color: '#fcfcfc',
              fontWeight: 600
            }}
          >
            {t('privacypolicy.section21Title')}
          </Typography>
        </Box>
      </Box>

      {/* 21.1 Security Events */}
      <Box my={4} ml={3}>
        <Typography
          className='headings-h5'
          variant="h6"
          sx={{
            color: '#fcfcfc',
            fontWeight: 600,
            mb: 1.5
          }}
        >
          {t('privacypolicy.section21_1Title')}
        </Typography>
        <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
          {t('privacypolicy.section21_1Text1')}
        </Typography>
        <Box component="ul" sx={{ pl: 4, mb: 2 }}>
          <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
            {t('privacypolicy.section21_1Data1')}
          </Typography>
          <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
            {t('privacypolicy.section21_1Data2')}
          </Typography>
          <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
            {t('privacypolicy.section21_1Data3')}
          </Typography>
          <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
            {t('privacypolicy.section21_1Data4')}
          </Typography>
        </Box>
        <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
          {t('privacypolicy.section21_1Text2')}
        </Typography>
        <Typography className='bodyRegularText3 shantellSansFont' variant="body1" sx={{ fontStyle: 'italic' }}>
         <span className='bodyRegularText3 shantellSansFont' style={{ color: '#fcfcfc',fontWeight:'600'}}>{t('privacypolicy.section21_1LegalLabel')}</span><br />
          {t('privacypolicy.section21_1Legal')}
        </Typography>
      </Box>



      {/* 21.2 No Behavioral Profiling */}
      <Box my={4} ml={3}>
        <Typography
          className='headings-h5'
          variant="h6"
          sx={{
            color: '#fcfcfc',
            fontWeight: 600,
            mb: 1.5
          }}
        >
          {t('privacypolicy.section21_2Title')}
        </Typography>
        <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
          {t('privacypolicy.section21_2Text1')}
        </Typography>
        <Box component="ul" sx={{ pl: 4, mb: 2 }}>
          <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
            {t('privacypolicy.section21_2Action1')}
          </Typography>
          <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
            {t('privacypolicy.section21_2Action2')}
          </Typography>
          <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
            {t('privacypolicy.section21_2Action3')}
          </Typography>
        </Box>
      </Box>

      {/*22. Data Access Within NAF  */}
      <Box my={5}>
        {/* Main Heading with Number */}
        <Box sx={{ display: 'flex', alignItems: 'baseline', mb: 2 }}>

          <Typography
            className='headings-h4 policy_heading'
            variant="h5"
            sx={{
              color: '#fcfcfc',
              fontWeight: 600
            }}
          >
            {t('privacypolicy.section22Title')}
          </Typography>
        </Box>


        {/* 22.1 Internal Access Controls */}
        <Box sx={{ mb: 4 }}>
          {/* Sub-heading 22.1 */}
          <Typography
            className='headings-h5'
            variant="h6"
            gutterBottom
            sx={{
              color: '#fcfcfc',
              fontWeight: 600,
              mb: 2
            }}
          >
            {t('privacypolicy.section22_1Title')}
          </Typography>

          {/* First Paragraph */}
          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
            {t('privacypolicy.section22_1Text1')}
          </Typography>

          {/* Restrictions List */}
          <Box component="ul" sx={{
            pl: 4,
            mb: 3,
            '& li': {
              marginBottom: 0.5
            }
          }}>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.section22_1Restriction1')}
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.section22_1Restriction2')}
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.section22_1Restriction3')}
            </Typography>
          </Box>

          {/* Second Paragraph */}
          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
            {t('privacypolicy.section22_1Text2')}
          </Typography>


        </Box>
      </Box>

      {/*  23. Data Portability and Export */}
      <Box my={5}>
        {/* Main Heading with Number */}
        <Box sx={{ display: 'flex', alignItems: 'baseline', mb: 2 }}>

          <Typography
            className='headings-h4 policy_heading'
            variant="h5"
            sx={{
              color: '#fcfcfc',
              fontWeight: 600
            }}
          >
            {t('privacypolicy.section23Title')}
          </Typography>
        </Box>

        {/* Content Section */}
        <Box>
          {/* First Paragraph */}
          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
            {t('privacypolicy.section23Text1')}
          </Typography>

          {/* Export Options List */}
          <Box component="ul" sx={{
            pl: 4,
            mb: 3,
            '& li': {
              marginBottom: 0.5
            }
          }}>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.section23Option1')}
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.section23Option2')}
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.section23Option3')}
            </Typography>
          </Box>
        </Box>
      </Box>

      {/*  24. Data Breach Handling  */}
      <Box my={5}>
        {/* Main Heading with Number */}
        <Box sx={{ display: 'flex', alignItems: 'baseline', mb: 2 }}>

          <Typography
            className='headings-h4 policy_heading'
            variant="h5"
            sx={{
              color: '#fcfcfc',
              fontWeight: 600
            }}
          >
            {t('privacypolicy.section24Title')}
          </Typography>
        </Box>

        {/* 24.1 Breach Detection and Response*/}
        <Box sx={{ mb: 4 }}>
          {/* Sub-heading 24.1 */}
          <Typography
            className='headings-h5'
            variant="h6"
            gutterBottom
            sx={{
              color: '#fcfcfc',
              fontWeight: 600,
              mb: 2
            }}
          >
            {t('privacypolicy.section24_1Title')}
          </Typography>

          {/* First Paragraph */}
          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
            {t('privacypolicy.section24_1Text1')}
          </Typography>

          {/* Procedures List */}
          <Box component="ul" sx={{
            pl: 4,
            mb: 3,
            '& li': {
              marginBottom: 0.5
            }
          }}>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.section24_1Procedure1')}
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.section24_1Procedure2')}
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.section24_1Procedure3')}
            </Typography>
          </Box>

          {/* Second Paragraph */}
          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
            {t('privacypolicy.section24_1Text2')}
          </Typography>

          {/* Legal Requirements List */}
          <Box component="ul" sx={{
            pl: 4,
            mb: 3,
            '& li': {
              marginBottom: 0.5
            }
          }}>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.section24_1Requirement1')}
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.section24_1Requirement2')}
            </Typography>
          </Box>

          {/* Legal Basis */}
          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" sx={{ fontWeight: 600, color: '#fcfcfc' }}>
            {t('privacypolicy.section24_1LegalLabel')}
          </Typography>
          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" sx={{ ml: 2 }}>
            {t('privacypolicy.section24_1Legal')}
          </Typography>
        </Box>
      </Box>

      {/*25. Automated Decision-Making  */}
      <Box my={5}>
        {/* Main Heading with Number */}
        <Box sx={{ display: 'flex', alignItems: 'baseline', mb: 2 }}>

          <Typography
            className='headings-h4 policy_heading'
            variant="h5"
            sx={{
              color: '#fcfcfc',
              fontWeight: 600
            }}
          >
            {t('privacypolicy.section25Title')}
          </Typography>
        </Box>

        {/* Content Section */}
        <Box>
          {/* First Paragraph */}
          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
            {t('privacypolicy.section25Text1')}
          </Typography>

          {/* Automated Processes List */}
          <Box component="ul" sx={{
            pl: 4,
            mb: 3,
            '& li': {
              marginBottom: 0.5
            }
          }}>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.section25Process1')}
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.section25Process2')}
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.section25Process3')}
            </Typography>
          </Box>

          {/* Second Paragraph */}
          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
            {t('privacypolicy.section25Text2')}
          </Typography>

          {/* Legal Basis */}
          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" sx={{ fontWeight: 600, color: '#fcfcfc' }}>
            {t('privacypolicy.section25LegalLabel')}
          </Typography>
          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" sx={{ ml: 2 }}>
            {t('privacypolicy.section25Legal')}
          </Typography>
        </Box>
      </Box>

      {/* 26. Supervisory Authority */}
      <Box my={5}>
        {/* Main Heading with Number */}
        <Box sx={{ display: 'flex', alignItems: 'baseline', mb: 2 }}>

          <Typography
            className='headings-h4 policy_heading'
            variant="h5"
            sx={{
              color: '#fcfcfc',
              fontWeight: 600
            }}
          >
            {t('privacypolicy.section26Title')}
          </Typography>
        </Box>

        {/* Content Section */}
        <Box>
          {/* Single Paragraph */}
          <Typography className='bodyRegularText3 shantellSansFont' variant="body1">
            {t('privacypolicy.section26Text')}
          </Typography>
        </Box>
      </Box>
      {/*  27. Final Provisions */}
      <Box my={5}>
        {/* Main Heading with Number */}
        <Box sx={{  alignItems: 'baseline', mb: 2 }}>

          <Typography
            className='headings-h4 policy_heading'
            variant="h5"
            sx={{
              color: '#fcfcfc',
              fontWeight: 600
            }}
          >
            {t('privacypolicy.section27Title')}
          </Typography>
          <Typography
             className='bodyRegularText3 shantellSansFont'
            variant="body1"
          
          >
            {t('privacypolicy.section27Text')}
          </Typography>
        </Box>
      </Box>

      {/* 28. Data Categories and Retention Matrix */}
      {/* <Box my={5}>
        
        <Box sx={{ display: 'flex', alignItems: 'baseline', mb: 3 }}>

          <Typography
            className='headings-h4 policy_heading'
            variant="h5"
            sx={{
              color: '#fcfcfc',
              fontWeight: 600
            }}
          >
            {t('privacypolicy.section28Title')}
          </Typography>
        </Box>

       
        <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
          {t('privacypolicy.section28Intro')}
        </Typography> */}

        {/*  28.1 Core Account and Identity Data  */}
        {/* <Box sx={{ mb: 6, mt: 4 }}>
      
          <Typography
            className='headings-h5'
            variant="h6"
            gutterBottom
            sx={{
              color: '#fcfcfc',
              fontWeight: 600,
              mb: 3
            }}
          >
            {t('privacypolicy.section28_1Title')}
          </Typography>

         
          <Box sx={{ overflowX: 'auto' }}>
            <Table sx={{
              minWidth: 800,
              borderCollapse: 'collapse'
            }}>
              <TableHead>
                <TableRow sx={{ backgroundColor: '#2a2a2a' }}>
                  <TableCell sx={{
                    color: '#fcfcfc',
                    fontWeight: 600,
                    border: '1px solid #444'
                  }}>
                    Data Category
                  </TableCell>
                  <TableCell sx={{
                    color: '#fcfcfc',
                    fontWeight: 600,
                    border: '1px solid #444'
                  }}>
                    Examples
                  </TableCell>
                  <TableCell sx={{
                    color: '#fcfcfc',
                    fontWeight: 600,
                    border: '1px solid #444'
                  }}>
                    Platform(s)
                  </TableCell>
                  <TableCell sx={{
                    color: '#fcfcfc',
                    fontWeight: 600,
                    border: '1px solid #444'
                  }}>
                    Purpose
                  </TableCell>
                  <TableCell sx={{
                    color: '#fcfcfc',
                    fontWeight: 600,
                    border: '1px solid #444'
                  }}>
                    Legal Basis
                  </TableCell>
                  <TableCell sx={{
                    color: '#fcfcfc',
                    fontWeight: 600,
                    border: '1px solid #444'
                  }}>
                    Retention
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                
                <TableRow sx={{ '&:hover': { backgroundColor: '#333' } }}>
                  <TableCell sx={{
                    color: '#fcfcfc',
                    border: '1px solid #444'
                  }}>
                    Account Identifier
                  </TableCell>
                  <TableCell sx={{
                    color: '#fcfcfc',
                    border: '1px solid #444'
                  }}>
                    User ID, Membership ID
                  </TableCell>
                  <TableCell sx={{
                    color: '#fcfcfc',
                    border: '1px solid #444'
                  }}>
                    Website, Cloud, App
                  </TableCell>
                  <TableCell sx={{
                    color: '#fcfcfc',
                    border: '1px solid #444'
                  }}>
                    Account management
                  </TableCell>
                  <TableCell sx={{
                    color: '#fcfcfc',
                    border: '1px solid #444'
                  }}>
                    Art. 6(1)(b) GDPR
                  </TableCell>
                  <TableCell sx={{
                    color: '#fcfcfc',
                    border: '1px solid #444'
                  }}>
                    While account active
                  </TableCell>
                </TableRow>

               
                <TableRow sx={{ '&:hover': { backgroundColor: '#333' } }}>
                  <TableCell sx={{
                    color: '#fcfcfc',
                    border: '1px solid #444'
                  }}>
                    Contact Information
                  </TableCell>
                  <TableCell sx={{
                    color: '#fcfcfc',
                    border: '1px solid #444'
                  }}>
                    Email address, phone number
                  </TableCell>
                  <TableCell sx={{
                    color: '#fcfcfc',
                    border: '1px solid #444'
                  }}>
                    Website, App
                  </TableCell>
                  <TableCell sx={{
                    color: '#fcfcfc',
                    border: '1px solid #444'
                  }}>
                    Communication & support access
                  </TableCell>
                  <TableCell sx={{
                    color: '#fcfcfc',
                    border: '1px solid #444'
                  }}>
                    Art. 6(1)(b) GDPR
                  </TableCell>
                  <TableCell sx={{
                    color: '#fcfcfc',
                    border: '1px solid #444'
                  }}>
                    Until account deletion
                  </TableCell>
                </TableRow>

               
                <TableRow sx={{ '&:hover': { backgroundColor: '#333' } }}>
                  <TableCell sx={{
                    color: '#fcfcfc',
                    border: '1px solid #444'
                  }}>
                    Authentication Data
                  </TableCell>
                  <TableCell sx={{
                    color: '#fcfcfc',
                    border: '1px solid #444'
                  }}>
                    MPIN, hashed credentials
                  </TableCell>
                  <TableCell sx={{
                    color: '#fcfcfc',
                    border: '1px solid #444'
                  }}>
                    All
                  </TableCell>
                  <TableCell sx={{
                    color: '#fcfcfc',
                    border: '1px solid #444'
                  }}>
                    Secure access
                  </TableCell>
                  <TableCell sx={{
                    color: '#fcfcfc',
                    border: '1px solid #444'
                  }}>
                    Art. 6(1)(f) GDPR
                  </TableCell>
                  <TableCell sx={{
                    color: '#fcfcfc',
                    border: '1px solid #444'
                  }}>
                    While account active
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Box>
        </Box> */}

        {/*  28.2 Transaction, Wallet, and Reservation Data  */}
        {/* <Box sx={{ mb: 6 }}> */}
         
          {/* <Typography
            className='headings-h5'
            variant="h6"
            gutterBottom
            sx={{
              color: '#fcfcfc',
              fontWeight: 600,
              mb: 3
            }}
          >
            {t('privacypolicy.section28_2Title')}
          </Typography> */}

          {/* Table Container */}
          {/* <Box sx={{ overflowX: 'auto' }}>
            <Table sx={{
              minWidth: 800,
              borderCollapse: 'collapse'
            }}>
              <TableHead>
                <TableRow sx={{ backgroundColor: '#2a2a2a' }}>
                  <TableCell sx={{
                    color: '#fcfcfc',
                    fontWeight: 600,
                    border: '1px solid #444'
                  }}>
                    Data Category
                  </TableCell>
                  <TableCell sx={{
                    color: '#fcfcfc',
                    fontWeight: 600,
                    border: '1px solid #444'
                  }}>
                    Examples
                  </TableCell>
                  <TableCell sx={{
                    color: '#fcfcfc',
                    fontWeight: 600,
                    border: '1px solid #444'
                  }}>
                    Platform(s)
                  </TableCell>
                  <TableCell sx={{
                    color: '#fcfcfc',
                    fontWeight: 600,
                    border: '1px solid #444'
                  }}>
                    Purpose
                  </TableCell>
                  <TableCell sx={{
                    color: '#fcfcfc',
                    fontWeight: 600,
                    border: '1px solid #444'
                  }}>
                    Legal Basis
                  </TableCell>
                  <TableCell sx={{
                    color: '#fcfcfc',
                    fontWeight: 600,
                    border: '1px solid #444'
                  }}>
                    Retention
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                
                <TableRow sx={{ '&:hover': { backgroundColor: '#333' } }}>
                  <TableCell sx={{
                    color: '#fcfcfc',
                    border: '1px solid #444'
                  }}>
                    Payment References
                  </TableCell>
                  <TableCell sx={{
                    color: '#fcfcfc',
                    border: '1px solid #444'
                  }}>
                    Stripe transaction IDs
                  </TableCell>
                  <TableCell sx={{
                    color: '#fcfcfc',
                    border: '1px solid #444'
                  }}>
                    All
                  </TableCell>
                  <TableCell sx={{
                    color: '#fcfcfc',
                    border: '1px solid #444'
                  }}>
                    Payment verification
                  </TableCell>
                  <TableCell sx={{
                    color: '#fcfcfc',
                    border: '1px solid #444'
                  }}>
                    Art. 6(1)(b) GDPR
                  </TableCell>
                  <TableCell sx={{
                    color: '#fcfcfc',
                    border: '1px solid #444'
                  }}>
                    As required by tax law
                  </TableCell>
                </TableRow>

               
                <TableRow sx={{ '&:hover': { backgroundColor: '#333' } }}>
                  <TableCell sx={{
                    color: '#fcfcfc',
                    border: '1px solid #444'
                  }}>
                    Wallet Balance
                  </TableCell>
                  <TableCell sx={{
                    color: '#fcfcfc',
                    border: '1px solid #444'
                  }}>
                    Credit amount
                  </TableCell>
                  <TableCell sx={{
                    color: '#fcfcfc',
                    border: '1px solid #444'
                  }}>
                    App, Cloud
                  </TableCell>
                  <TableCell sx={{
                    color: '#fcfcfc',
                    border: '1px solid #444'
                  }}>
                    Prepaid services
                  </TableCell>
                  <TableCell sx={{
                    color: '#fcfcfc',
                    border: '1px solid #444'
                  }}>
                    Art. 6(1)(b) GDPR
                  </TableCell>
                  <TableCell sx={{
                    color: '#fcfcfc',
                    border: '1px solid #444'
                  }}>
                    While wallet exists
                  </TableCell>
                </TableRow>

                
                <TableRow sx={{ '&:hover': { backgroundColor: '#333' } }}>
                  <TableCell sx={{
                    color: '#fcfcfc',
                    border: '1px solid #444'
                  }}>
                    Reservation Records
                  </TableCell>
                  <TableCell sx={{
                    color: '#fcfcfc',
                    border: '1px solid #444'
                  }}>
                    Item, machine, expiry
                  </TableCell>
                  <TableCell sx={{
                    color: '#fcfcfc',
                    border: '1px solid #444'
                  }}>
                    App, Cloud
                  </TableCell>
                  <TableCell sx={{
                    color: '#fcfcfc',
                    border: '1px solid #444'
                  }}>
                    Fulfillment & disputes
                  </TableCell>
                  <TableCell sx={{
                    color: '#fcfcfc',
                    border: '1px solid #444'
                  }}>
                    Art. 6(1)(b) GDPR
                  </TableCell>
                  <TableCell sx={{
                    color: '#fcfcfc',
                    border: '1px solid #444'
                  }}>
                    Up to 24 months
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Box>
        </Box> */}

        {/*  28.3 Technical and Usage Data */}
        {/* <Box sx={{ mb: 4 }}> */}
          {/* Sub-heading 28.3 */}
          {/* <Typography
            className='headings-h5'
            variant="h6"
            gutterBottom
            sx={{
              color: '#fcfcfc',
              fontWeight: 600,
              mb: 3
            }}
          >
            {t('privacypolicy.section28_3Title')}
          </Typography> */}

          {/* Table Container */}
          {/* <Box sx={{ overflowX: 'auto' }}>
            <Table sx={{
              minWidth: 800,
              borderCollapse: 'collapse'
            }}>
              <TableHead>
                <TableRow sx={{ backgroundColor: '#2a2a2a' }}>
                  <TableCell sx={{
                    color: '#fcfcfc',
                    fontWeight: 600,
                    border: '1px solid #444'
                  }}>
                    Data Category
                  </TableCell>
                  <TableCell sx={{
                    color: '#fcfcfc',
                    fontWeight: 600,
                    border: '1px solid #444'
                  }}>
                    Examples
                  </TableCell>
                  <TableCell sx={{
                    color: '#fcfcfc',
                    fontWeight: 600,
                    border: '1px solid #444'
                  }}>
                    Platform(s)
                  </TableCell>
                  <TableCell sx={{
                    color: '#fcfcfc',
                    fontWeight: 600,
                    border: '1px solid #444'
                  }}>
                    Purpose
                  </TableCell>
                  <TableCell sx={{
                    color: '#fcfcfc',
                    fontWeight: 600,
                    border: '1px solid #444'
                  }}>
                    Legal Basis
                  </TableCell>
                  <TableCell sx={{
                    color: '#fcfcfc',
                    fontWeight: 600,
                    border: '1px solid #444'
                  }}>
                    Retention
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                
                <TableRow sx={{ '&:hover': { backgroundColor: '#333' } }}>
                  <TableCell sx={{
                    color: '#fcfcfc',
                    border: '1px solid #444'
                  }}>
                    Device Data
                  </TableCell>
                  <TableCell sx={{
                    color: '#fcfcfc',
                    border: '1px solid #444'
                  }}>
                    OS version, app version
                  </TableCell>
                  <TableCell sx={{
                    color: '#fcfcfc',
                    border: '1px solid #444'
                  }}>
                    App
                  </TableCell>
                  <TableCell sx={{
                    color: '#fcfcfc',
                    border: '1px solid #444'
                  }}>
                    Compatibility
                  </TableCell>
                  <TableCell sx={{
                    color: '#fcfcfc',
                    border: '1px solid #444'
                  }}>
                    Art. 6(1)(f) GDPR
                  </TableCell>
                  <TableCell sx={{
                    color: '#fcfcfc',
                    border: '1px solid #444'
                  }}>
                    90 days
                  </TableCell>
                </TableRow>

               
                <TableRow sx={{ '&:hover': { backgroundColor: '#333' } }}>
                  <TableCell sx={{
                    color: '#fcfcfc',
                    border: '1px solid #444'
                  }}>
                    Usage Logs
                  </TableCell>
                  <TableCell sx={{
                    color: '#fcfcfc',
                    border: '1px solid #444'
                  }}>
                    Screen views, actions
                  </TableCell>
                  <TableCell sx={{
                    color: '#fcfcfc',
                    border: '1px solid #444'
                  }}>
                    App, Website
                  </TableCell>
                  <TableCell sx={{
                    color: '#fcfcfc',
                    border: '1px solid #444'
                  }}>
                    Performance
                  </TableCell>
                  <TableCell sx={{
                    color: '#fcfcfc',
                    border: '1px solid #444'
                  }}>
                    Art. 6(1)(f) GDPR
                  </TableCell>
                  <TableCell sx={{
                    color: '#fcfcfc',
                    border: '1px solid #444'
                  }}>
                    90–180 days
                  </TableCell>
                </TableRow>

               
                <TableRow sx={{ '&:hover': { backgroundColor: '#333' } }}>
                  <TableCell sx={{
                    color: '#fcfcfc',
                    border: '1px solid #444'
                  }}>
                    Login History
                  </TableCell>
                  <TableCell sx={{
                    color: '#fcfcfc',
                    border: '1px solid #444'
                  }}>
                    Timestamped logins
                  </TableCell>
                  <TableCell sx={{
                    color: '#fcfcfc',
                    border: '1px solid #444'
                  }}>
                    Cloud
                  </TableCell>
                  <TableCell sx={{
                    color: '#fcfcfc',
                    border: '1px solid #444'
                  }}>
                    Security
                  </TableCell>
                  <TableCell sx={{
                    color: '#fcfcfc',
                    border: '1px solid #444'
                  }}>
                    Art. 6(1)(f) GDPR
                  </TableCell>
                  <TableCell sx={{
                    color: '#fcfcfc',
                    border: '1px solid #444'
                  }}>
                    180 days
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Box> */}
        {/* </Box> */}
      {/* </Box> */}

      {/*  29. Consent Management and User Controls */}
      
      <Box my={5}>
        {/* Main Heading with Number */}
        <Box sx={{ display: 'flex', alignItems: 'baseline', mb: 2 }}>

          <Typography
            className='headings-h4 policy_heading'
            variant="h5"
            sx={{
              color: '#fcfcfc',
              fontWeight: 600
            }}
          >
            {t('privacypolicy.section29Title')}
          </Typography>
        </Box>

        {/* 29.1 Consent Collection */}
        <Box sx={{ mb: 4 }}>
          {/* Sub-heading 29.1 */}
          <Typography
            className='headings-h5'
            variant="h6"
            gutterBottom
            sx={{
              color: '#fcfcfc',
              fontWeight: 600,
              mb: 2
            }}
          >
            {t('privacypolicy.section29_1Title')}
          </Typography>

          {/* First Paragraph */}
          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
            {t('privacypolicy.section29_1Text1')}
          </Typography>

          {/* Consent Types List */}
          <Box component="ul" sx={{
            pl: 4,
            mb: 3,
            '& li': {
              marginBottom: 0.5
            }
          }}>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.section29_1Type1')}
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.section29_1Type2')}
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.section29_1Type3')}
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.section29_1Type4')}
            </Typography>
          </Box>

          {/* Second Paragraph */}
          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
            {t('privacypolicy.section29_1Text2')}
          </Typography>

          {/* Consent Principles List */}
          <Box component="ul" sx={{
            pl: 4,
            mb: 3,
            '& li': {
              marginBottom: 0.5
            }
          }}>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.section29_1Principle1')}
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.section29_1Principle2')}
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.section29_1Principle3')}
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.section29_1Principle4')}
            </Typography>
          </Box>


        </Box>

        {/* 29.2 Withdrawal of Consent */}
        <Box sx={{ mb: 4 }}>
          {/* Sub-heading 29.2 */}
          <Typography
            className='headings-h5'
            variant="h6"
            gutterBottom
            sx={{
              color: '#fcfcfc',
              fontWeight: 600,
              mb: 2
            }}
          >
            {t('privacypolicy.section29_2Title')}
          </Typography>

          {/* First Paragraph */}
          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
            {t('privacypolicy.section29_2Text1')}
          </Typography>

          {/* Withdrawal Methods List */}
          <Box component="ul" sx={{
            pl: 4,
            mb: 3,
            '& li': {
              marginBottom: 0.5
            }
          }}>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.section29_2Method1')}
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.section29_2Method2')}
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.section29_2Method3')}
            </Typography>
          </Box>

          {/* Second Paragraph */}
          <Typography className='bodyRegularText3 shantellSansFont' variant="body1">
            {t('privacypolicy.section29_2Text2')}
          </Typography>
        </Box>

        {/* 30. Platform-Specific Processing Overview */}
        <Box my={5}>
          {/* Main Heading with Number */}
          <Box sx={{ display: 'flex', alignItems: 'baseline', mb: 2 }}>

            <Typography
              className='headings-h4 policy_heading'
              variant="h5"
              sx={{
                color: '#fcfcfc',
                fontWeight: 600
              }}
            >
              {t('privacypolicy.section30Title')}
            </Typography>
          </Box>

          {/*  30.1 Vendinar Website  */}
          <Box sx={{ mb: 4 }}>
            {/* Sub-heading 30.1 */}
            <Typography
              className='headings-h5'
              variant="h6"
              gutterBottom
              sx={{
                color: '#fcfcfc',
                fontWeight: 600,
                mb: 2
              }}
            >
              {t('privacypolicy.section30_1Title')}
            </Typography>

            {/* First Paragraph */}
            <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
              {t('privacypolicy.section30_1Text1')}
            </Typography>

            {/* Processing List */}
            <Box component="ul" sx={{
              pl: 4,
              mb: 3,
              '& li': {
                marginBottom: 0.5
              }
            }}>
              <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
                {t('privacypolicy.section30_1Process1')}
              </Typography>
              <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
                {t('privacypolicy.section30_1Process2')}
              </Typography>
              <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
                {t('privacypolicy.section30_1Process3')}
              </Typography>
              <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
                {t('privacypolicy.section30_1Process4')}
              </Typography>
            </Box>

            {/* Second Paragraph */}
            <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
              {t('privacypolicy.section30_1Text2')}
            </Typography>

            {/* Restrictions List */}
            <Box component="ul" sx={{
              pl: 4,
              mb: 3,
              '& li': {
                marginBottom: 0.5
              }
            }}>
              <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
                {t('privacypolicy.section30_1Restriction1')}
              </Typography>
              <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
                {t('privacypolicy.section30_1Restriction2')}
              </Typography>
              <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
                {t('privacypolicy.section30_1Restriction3')}
              </Typography>
            </Box>


          </Box>

          {/* 30.2 NAF Cloud System */}
          <Box sx={{ mb: 4 }}>
            {/* Sub-heading 30.2 */}
            <Typography
              className='headings-h5'
              variant="h6"
              gutterBottom
              sx={{
                color: '#fcfcfc',
                fontWeight: 600,
                mb: 2
              }}
            >
              {t('privacypolicy.section30_2Title')}
            </Typography>

            {/* First Paragraph */}
            <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
              {t('privacypolicy.section30_2Text1')}
            </Typography>

            {/* Processing List */}
            <Box component="ul" sx={{
              pl: 4,
              mb: 3,
              '& li': {
                marginBottom: 0.5
              }
            }}>
              <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
                {t('privacypolicy.section30_2Process1')}
              </Typography>
              <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
                {t('privacypolicy.section30_2Process2')}
              </Typography>
              <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
                {t('privacypolicy.section30_2Process3')}
              </Typography>
              <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
                {t('privacypolicy.section30_2Process4')}
              </Typography>
            </Box>

            {/* Second Paragraph */}
            <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
              {t('privacypolicy.section30_2Text2')}
            </Typography>

            {/* Restrictions List */}
            <Box component="ul" sx={{
              pl: 4,
              mb: 3,
              '& li': {
                marginBottom: 0.5
              }
            }}>
              <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
                {t('privacypolicy.section30_2Restriction1')}
              </Typography>
              <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
                {t('privacypolicy.section30_2Restriction2')}
              </Typography>
              <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
                {t('privacypolicy.section30_2Restriction3')}
              </Typography>
            </Box>


          </Box>

          {/*  30.3 NAF Mobile App */}
          <Box sx={{ mb: 4 }}>
            {/* Sub-heading 30.3 */}
            <Typography
              className='headings-h5'
              variant="h6"
              gutterBottom
              sx={{
                color: '#fcfcfc',
                fontWeight: 600,
                mb: 2
              }}
            >
              {t('privacypolicy.section30_3Title')}
            </Typography>

            {/* First Paragraph */}
            <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
              {t('privacypolicy.section30_3Text1')}
            </Typography>

            {/* Processing List */}
            <Box component="ul" sx={{
              pl: 4,
              mb: 3,
              '& li': {
                marginBottom: 0.5
              }
            }}>
              <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
                {t('privacypolicy.section30_3Process1')}
              </Typography>
              <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
                {t('privacypolicy.section30_3Process2')}
              </Typography>
              <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
                {t('privacypolicy.section30_3Process3')}
              </Typography>
              <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
                {t('privacypolicy.section30_3Process4')}
              </Typography>
            </Box>

            {/* Second Paragraph */}
            <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
              {t('privacypolicy.section30_3Text2')}
            </Typography>

            {/* Restrictions List */}
            <Box component="ul" sx={{
              pl: 4,
              mb: 3,
              '& li': {
                marginBottom: 0.5
              }
            }}>
              <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
                {t('privacypolicy.section30_3Restriction1')}
              </Typography>
              <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
                {t('privacypolicy.section30_3Restriction2')}
              </Typography>
              <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
                {t('privacypolicy.section30_3Restriction3')}
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* 31. Data Sharing Scenarios (Illustrative) */}
        <Box my={5}>
          {/* Main Heading with Number */}
          <Box sx={{ display: 'flex', alignItems: 'baseline', mb: 2 }}>

            <Typography
              className='headings-h4 policy_heading'
              variant="h5"
              sx={{
                color: '#fcfcfc',
                fontWeight: 600
              }}
            >
              {t('privacypolicy.section31Title')}
            </Typography>
          </Box>

          {/* Content Section */}
          <Box>
            {/* First Paragraph */}
            <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
              {t('privacypolicy.section31Text1')}
            </Typography>

            {/* Sharing Scenarios List */}
            <Box component="ul" sx={{
              pl: 4,
              mb: 3,
              '& li': {
                marginBottom: 0.5
              }
            }}>
              <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
                {t('privacypolicy.section31Scenario1')}
              </Typography>
              <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
                {t('privacypolicy.section31Scenario2')}
              </Typography>
              <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
                {t('privacypolicy.section31Scenario3')}
              </Typography>
            </Box>

            {/* Second Paragraph */}
            <Typography className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.section31Text2')}
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* 32. Data Minimisation and Privacy by Design  */}
      <Box my={5}>
        {/* Main Heading with Number */}
        <Box sx={{ display: 'flex', alignItems: 'baseline', mb: 2 }}>

          <Typography
            className='headings-h4 policy_heading'
            variant="h5"
            sx={{
              color: '#fcfcfc',
              fontWeight: 600
            }}
          >
            {t('privacypolicy.section32Title')}
          </Typography>
        </Box>

        {/* Content Section */}
        <Box>
          {/* First Paragraph */}
          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
            {t('privacypolicy.section32Text1')}
          </Typography>

          {/* Principles List */}
          <Box component="ul" sx={{
            pl: 4,
            mb: 3,
            '& li': {
              marginBottom: 0.5
            }
          }}>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.section32Principle1')}
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.section32Principle2')}
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.section32Principle3')}
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.section32Principle4')}
            </Typography>
          </Box>

          {/* Second Paragraph */}
          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
            {t('privacypolicy.section32Text2')}
          </Typography>

          {/* Review Criteria List */}
          <Box component="ul" sx={{
            pl: 4,
            mb: 3,
            '& li': {
              marginBottom: 0.5
            }
          }}>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.section32Criteria1')}
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.section32Criteria2')}
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.section32Criteria3')}
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* 33. Data Deletion and Anonymisation */}
      <Box my={5}>
        {/* Main Heading with Number */}
        <Box sx={{ display: 'flex', alignItems: 'baseline', mb: 2 }}>

          <Typography
            className='headings-h4 policy_heading'
            variant="h5"
            sx={{
              color: '#fcfcfc',
              fontWeight: 600
            }}
          >
            {t('privacypolicy.section33Title')}
          </Typography>
        </Box>

        {/* 33.1 Deletion Triggers */}
        <Box sx={{ mb: 4 }}>
          {/* Sub-heading 33.1 */}
          <Typography
            className='headings-h5'
            variant="h6"
            gutterBottom
            sx={{
              color: '#fcfcfc',
              fontWeight: 600,
              mb: 2
            }}
          >
            {t('privacypolicy.section33_1Title')}
          </Typography>

          {/* First Paragraph */}
          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
            {t('privacypolicy.section33_1Text1')}
          </Typography>

          {/* Deletion Triggers List */}
          <Box component="ul" sx={{
            pl: 4,
            mb: 3,
            '& li': {
              marginBottom: 0.5
            }
          }}>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.section33_1Trigger1')}
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.section33_1Trigger2')}
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.section33_1Trigger3')}
            </Typography>
          </Box>


        </Box>

        {/* 33.2 Anonymisation  */}
        <Box sx={{ mb: 4 }}>
          {/* Sub-heading 33.2 */}
          <Typography
            className='headings-h5'
            variant="h6"
            gutterBottom
            sx={{
              color: '#fcfcfc',
              fontWeight: 600,
              mb: 2
            }}
          >
            {t('privacypolicy.section33_2Title')}
          </Typography>

          {/* Single Paragraph */}
          <Typography className='bodyRegularText3 shantellSansFont' variant="body1">
            {t('privacypolicy.section33_2Text')}
          </Typography>
        </Box>
      </Box>

      {/* 34. Complaints and Supervisory Authorities */}
      <Box my={5}>
        {/* Main Heading with Number */}
        <Box sx={{ display: 'flex', alignItems: 'baseline', mb: 2 }}>

          <Typography
            className='headings-h4 policy_heading'
            variant="h5"
            sx={{
              color: '#fcfcfc',
              fontWeight: 600
            }}
          >
            {t('privacypolicy.section34Title')}
          </Typography>
        </Box>

        {/* Content Section */}
        <Box>
          {/* First Paragraph */}
          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
            {t('privacypolicy.section34Text1')}
          </Typography>

          {/* Complaints List */}
          <Box component="ul" sx={{
            pl: 4,
            mb: 3,
            '& li': {
              marginBottom: 0.5
            }
          }}>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.section34Option1')}
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.section34Option2')}
            </Typography>
          </Box>

          {/* Second Paragraph */}
          <Typography className='bodyRegularText3 shantellSansFont' variant="body1">
            {t('privacypolicy.section34Text2')}
          </Typography>
        </Box>
      </Box>

      {/*  35. Policy Governance and Review  */}
      <Box my={5}>
        {/* Main Heading with Number */}
        <Box sx={{ display: 'flex', alignItems: 'baseline', mb: 2 }}>

          <Typography
            className='headings-h4 policy_heading'
            variant="h5"
            sx={{
              color: '#fcfcfc',
              fontWeight: 600
            }}
          >
            {t('privacypolicy.section35Title')}
          </Typography>
        </Box>

        {/* Content Section */}
        <Box>
          {/* First Paragraph */}
          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
            {t('privacypolicy.section35Text1')}
          </Typography>

          {/* Review Criteria List */}
          <Box component="ul" sx={{
            pl: 4,
            mb: 3,
            '& li': {
              marginBottom: 0.5
            }
          }}>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.section35Criteria1')}
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.section35Criteria2')}
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.section35Criteria3')}
            </Typography>
          </Box>

          {/* Second Paragraph */}
          <Typography className='bodyRegularText3 shantellSansFont' variant="body1">
            {t('privacypolicy.section35Text2')}
          </Typography>
        </Box>
      </Box>

      {/* 36. Document Control */}
      <Box my={5}>
        {/* Main Heading with Number */}
        <Box sx={{ display: 'flex', alignItems: 'baseline', mb: 2 }}>

          <Typography
            className='headings-h4 policy_heading'
            variant="h5"
            sx={{
              color: '#fcfcfc',
              fontWeight: 600
            }}
          >
            {t('privacypolicy.section36Title')}
          </Typography>
        </Box>

        {/* Content Section */}
        <Box>
          {/* Document Control List */}
          <Box component="ul" sx={{
            pl: 4,
            mb: 3,
            '& li': {
              marginBottom: 1
            }
          }}>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              <Typography component="span" sx={{ fontWeight: 600 }}>
                {t('privacypolicy.section36Label1')}
              </Typography>{' '}
              {t('privacypolicy.section36Value1')}
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              <Typography component="span" sx={{ fontWeight: 600 }}>
                {t('privacypolicy.section36Label2')}
              </Typography>{' '}
              {t('privacypolicy.section36Value2')}
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              <Typography component="span" sx={{ fontWeight: 600 }}>
                {t('privacypolicy.section36Label3')}
              </Typography>{' '}
              {t('privacypolicy.section36Value3')}
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              <Typography component="span" sx={{ fontWeight: 600 }}>
                {t('privacypolicy.section36Label4')}
              </Typography>{' '}
              {t('privacypolicy.section36Value4')}
            </Typography>
          </Box>
        </Box>


      </Box>
      {/* Divider */}
      <Box sx={{ borderBottom: '1px solid #e0e0e0', my: 3 }} />
      <ThirdPartyPage />
    </Box>




  );
}
export default PrivacyPolicyPage;