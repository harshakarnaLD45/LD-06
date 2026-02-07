import React, { useEffect } from 'react';
import { Box, Typography, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import { useTranslation } from 'react-i18next';
import "./privacypolicy.css";

const TermsOfUsePage = () => {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
    // document.title = `NAF Vending -${t('titles.about')}`; // Set tab title
  }, []);

  return (
    <Box className='terms-of-use-page' sx={{ color: '#FCFCFC', marginLeft: "50px", marginRight: "50px", paddingTop: "150px" }}>
      {/* Header */}
      <Typography className='headings-h1' variant="h3" gutterBottom>
        {t('privacypolicy.termsof_USE')}
      </Typography>

      {/*  1. Introduction and Acceptance of Terms  */}
      <Box my={5}>
        {/* Main Heading with Number */}
        <Box sx={{ display: 'flex', alignItems: 'baseline', mb: 2 }}>
        
          <Typography 
            className='headings-h3 policy_heading '
            sx={{
              color: '#fcfcfc',
              fontWeight: 600
            }}
          >
            {t('privacypolicy.terms_1_title')}
          </Typography>
        </Box>
      
        {/* Content Section */}
        <Box>
          {/* First Paragraph */}
          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
            {t('privacypolicy.terms_1_text_1')}
          </Typography>
      
          {/* Platform List */}
          <Box component="ul" sx={{ 
            pl: 4, 
            mb: 3,
            '& li': {
              marginBottom: 0.5
            }
          }}>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.terms_1_item_1')}
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.terms_1_item_2')}
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.terms_1_item_3')}
            </Typography>
          </Box>
      
          {/* Second Paragraph */}
          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
            {t('privacypolicy.terms_1_text_2')}
          </Typography>
      
          {/* Third Paragraph */}
          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
            {t('privacypolicy.terms_1_text_3')}
          </Typography>
        </Box>
      </Box>
      
      {/*  2. Eligibility and Account Requirements */}
      <Box my={5}>
        {/* Main Heading with Number */}
        <Box sx={{ display: 'flex', alignItems: 'baseline', mb: 2 }}>
        
          <Typography 
            className='headings-h3 policy_heading ' 
            
            sx={{ 
              color: '#fcfcfc',
              fontWeight: 600 
            }}
          >
            {t('privacypolicy.terms_2_title')}
          </Typography>
        </Box>
      
        {/* 2.1 Minimum Age ========== */}
        <Box sx={{ mb: 4 }}>
          {/* Sub-heading 2.1 */}
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
            {t('privacypolicy.terms_2_1_title')}
          </Typography>
      
          {/* First Paragraph */}
          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
            {t('privacypolicy.terms_2_1_text_1')}
          </Typography>
      
          {/* Second Paragraph */}
          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
            {t('privacypolicy.terms_2_1_text_2')}
          </Typography>
      
          {/* Confirmation List */}
          <Box component="ul" sx={{ 
            pl: 4, 
            mb: 3,
            '& li': {
              marginBottom: 0.5
            }
          }}>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.terms_2_1_item_1')}
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.terms_2_1_item_2')}
            </Typography>
          </Box>
      
        </Box>
      
        {/* ========== 2.2 Account Accuracy ========== */}
        <Box sx={{ mb: 4 }}>
          {/* Sub-heading 2.2 */}
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
            {t('privacypolicy.terms_2_2_title')}
          </Typography>
      
          {/* First Paragraph */}
          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
            {t('privacypolicy.terms_2_2_text_1')}
          </Typography>
      
          {/* Agreement List */}
          <Box component="ul" sx={{ 
            pl: 4, 
            mb: 3,
            '& li': {
              marginBottom: 0.5
            }
          }}>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.terms_2_2_item_1')}
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.terms_2_2_item_2')}
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.terms_2_2_item_3')}
            </Typography>
          </Box>
      
          {/* Second Paragraph */}
          <Typography className='bodyRegularText3 shantellSansFont' variant="body1">
            {t('privacypolicy.terms_2_2_text_2')}
          </Typography>
        </Box>
      </Box>
      
      {/* ========== 3. Platform Overview and Permitted Use ========== */}
      <Box my={5}>
        {/* Main Heading with Number */}
        <Box sx={{ display: 'flex', alignItems: 'baseline', mb: 2 }}>
         
          <Typography 
            className='headings-h3 policy_heading ' 
            variant="h5" 
            sx={{ 
              color: '#fcfcfc',
              fontWeight: 600 
            }}
          >
            {t('privacypolicy.terms_3_title')}
          </Typography>
        </Box>
      
        {/* ========== 3.1 Vendinaf Website ========== */}
        <Box sx={{ mb: 4 }}>
          {/* Sub-heading 3.1 */}
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
            {t('privacypolicy.terms_3_1_title')}
          </Typography>
      
          {/* First Paragraph */}
          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
            {t('privacypolicy.terms_3_1_text_1')}
          </Typography>
      
          {/* Website Features List */}
          <Box component="ul" sx={{ 
            pl: 4, 
            mb: 3,
            '& li': {
              marginBottom: 0.5
            }
          }}>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.terms_3_1_item_1')}
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.terms_3_1_item_2')}
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.terms_3_1_item_3')}
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.terms_3_1_item_4')}
            </Typography>
          </Box>
      
          {/* Second Paragraph */}
          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
            {t('privacypolicy.terms_3_1_text_2')}
          </Typography>
      
        
        </Box>
      
        {/* ========== 3.2 NAF Cloud System ========== */}
        <Box sx={{ mb: 4 }}>
          {/* Sub-heading 3.2 */}
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
            {t('privacypolicy.terms_3_2_title')}
          </Typography>
      
          {/* First Paragraph */}
          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
            {t('privacypolicy.terms_3_2_text_1')}
          </Typography>
      
          {/* Cloud System Users List */}
          <Box component="ul" sx={{ 
            pl: 4, 
            mb: 3,
            '& li': {
              marginBottom: 0.5
            }
          }}>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.terms_3_2_item_1')}
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.terms_3_2_item_2')}
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.terms_3_2_item_3')}
            </Typography>
          </Box>
      
          {/* Second Paragraph */}
          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
            {t('privacypolicy.terms_3_2_text_2')}
          </Typography>
      
          {/* Third Paragraph */}
          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
            {t('privacypolicy.terms_3_2_text_3')}
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
              {t('privacypolicy.terms_3_2_item_4')}
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.terms_3_2_item_5')}
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.terms_3_2_item_6')}
            </Typography>
          </Box>
      
        </Box>
      
        {/* ========== 3.3 NAF Mobile App ========== */}
        <Box sx={{ mb: 4 }}>
          {/* Sub-heading 3.3 */}
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
            {t('privacypolicy.terms_3_3_title')}
          </Typography>
      
          {/* First Paragraph */}
          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
            {t('privacypolicy.terms_3_3_text_1')}
          </Typography>
      
          {/* App Features List */}
          <Box component="ul" sx={{ 
            pl: 4, 
            mb: 3,
            '& li': {
              marginBottom: 0.5
            }
          }}>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.terms_3_3_item_1')}
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.terms_3_3_item_2')}
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.terms_3_3_item_3')}
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.terms_3_3_item_4')}
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.terms_3_3_item_5')}
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.terms_3_3_item_6')}
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.terms_3_3_item_7')}
            </Typography>
          </Box>
      
          {/* Second Paragraph */}
          <Typography className='bodyRegularText3 shantellSansFont' variant="body1">
            {t('privacypolicy.terms_3_3_text_2')}
          </Typography>
        </Box>
      </Box>
      
      {/* ========== 4. NAF Membership ========== */}
      <Box my={5}>
        {/* Main Heading with Number */}
        <Box sx={{ display: 'flex', alignItems: 'baseline', mb: 2 }}>
        
          <Typography 
            className='headings-h3 policy_heading ' 
            variant="h5" 
            sx={{ 
              color: '#fcfcfc',
              fontWeight: 600 
            }}
          >
            {t('privacypolicy.terms_4_title')}
          </Typography>
        </Box>
      
        {/* ========== 4.1 Membership Creation ========== */}
        <Box sx={{ mb: 4 }}>
          {/* Sub-heading 4.1 */}
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
            4.1 Membership Creation
          </Typography>
      
          {/* First Paragraph */}
          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
            {t('privacypolicy.terms_4_1_text_1')}
          </Typography>
      
          {/* Second Paragraph */}
          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
            {t('privacypolicy.terms_4_1_text_2')}
          </Typography>
      
          {/* Account Properties List */}
          <Box component="ul" sx={{ 
            pl: 4, 
            mb: 3,
            '& li': {
              marginBottom: 0.5
            }
          }}>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.terms_4_1_item_1')}
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.terms_4_1_item_2')}
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.terms_4_1_item_3')}
            </Typography>
          </Box>
      
        </Box>
      
        {/* ========== {t('privacypolicy.terms_4_2_title')} ========== */}
        <Box sx={{ mb: 4 }}>
          {/* Sub-heading 4.2 */}
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
            {t('privacypolicy.terms_4_2_title')}
          </Typography>
      
          {/* First Paragraph */}
          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
            {t('privacypolicy.terms_4_2_text_1')}
          </Typography>
      
          {/* Responsibility List */}
          <Box component="ul" sx={{ 
            pl: 4, 
            mb: 3,
            '& li': {
              marginBottom: 0.5
            }
          }}>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.terms_4_2_item_1')}
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.terms_4_2_item_2')}
            </Typography>
          </Box>
      
          {/* Second Paragraph */}
          <Typography className='bodyRegularText3 shantellSansFont' variant="body1">
            {t('privacypolicy.terms_4_2_text_2')}
          </Typography>
        </Box>
      </Box>
      
      {/* ========== 5. Reservations ========== */}
      <Box my={5}>
        {/* Main Heading with Number */}
        <Box sx={{ display: 'flex', alignItems: 'baseline', mb: 2 }}>
          
          <Typography 
            className='headings-h3 policy_heading ' 
            variant="h5" 
            sx={{ 
              color: '#fcfcfc',
              fontWeight: 600 
            }}
          >
            {t('privacypolicy.terms_5_title')}
          </Typography>
        </Box>
      
        {/* ========== 5.1 Reservation Conditions ========== */}
        <Box sx={{ mb: 4 }}>
          {/* Sub-heading 5.1 */}
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
            {t('privacypolicy.terms_5_1_title')}
          </Typography>
      
          {/* First Paragraph */}
          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
            {t('privacypolicy.terms_5_1_text_1')}
          </Typography>
      
          {/* Second Paragraph */}
          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
            {t('privacypolicy.terms_5_1_text_2')}
          </Typography>
      
          {/* Reservation Properties List */}
          <Box component="ul" sx={{ 
            pl: 4, 
            mb: 3,
            '& li': {
              marginBottom: 0.5
            }
          }}>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.terms_5_1_item_1')}
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.terms_5_1_item_2')}
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.terms_5_1_item_3')}
            </Typography>
          </Box>
  
        </Box>
      
        {/* ========== 5.2 Reservation Duration and Expiry ========== */}
        <Box sx={{ mb: 4 }}>
          {/* Sub-heading 5.2 */}
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
            {t('privacypolicy.terms_5_2_title')}
          </Typography>
      
          {/* First Paragraph */}
          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
            {t('privacypolicy.terms_5_2_text_1')}
          </Typography>
      
          {/* Second Paragraph */}
          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
            {t('privacypolicy.terms_5_2_text_2')}
          </Typography>
      
          {/* Third Paragraph */}
          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
            {t('privacypolicy.terms_5_2_text_3')}
          </Typography>
      
          {/* Expiry Consequences List */}
          <Box component="ul" sx={{ 
            pl: 4, 
            mb: 3,
            '& li': {
              marginBottom: 0.5
            }
          }}>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.terms_5_2_item_1')}
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.terms_5_2_item_2')}
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.terms_5_2_item_3')}
            </Typography>
          </Box>
      
          
        </Box>
      
        {/* ========== 5.3 Pickup Responsibility ========== */}
        <Box sx={{ mb: 4 }}>
          {/* Sub-heading 5.3 */}
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
            {t('privacypolicy.terms_5_3_title')}
          </Typography>
      
          {/* First Paragraph */}
          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
            {t('privacypolicy.terms_5_3_text_1')}
          </Typography>
      
          {/* Pickup Requirements List */}
          <Box component="ul" sx={{ 
            pl: 4, 
            mb: 3,
            '& li': {
              marginBottom: 0.5
            }
          }}>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.terms_5_3_item_1')}
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.terms_5_3_item_2')}
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.terms_5_3_item_3')}
            </Typography>
          </Box>
      
          {/* Second Paragraph */}
          <Typography className='bodyRegularText3 shantellSansFont' variant="body1">
            {t('privacypolicy.terms_5_3_text_2')}
          </Typography>
        </Box>
      </Box>
      
      {/* ========== 6. NAF Wallet and Payments ========== */}
      <Box my={5}>
        {/* Main Heading with Number */}
        <Box sx={{ display: 'flex', alignItems: 'baseline', mb: 2 }}>
         
          <Typography 
            className='headings-h3 policy_heading ' 
            variant="h5" 
            sx={{ 
              color: '#fcfcfc',
              fontWeight: 600 
            }}
          >
            {t('privacypolicy.terms_6_title')}
          </Typography>
        </Box>
      
        {/* ========== 6.1 Wallet Overview ========== */}
        <Box sx={{ mb: 4 }}>
          {/* Sub-heading 6.1 */}
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
            {t('privacypolicy.terms_6_1_title')}
          </Typography>
      
          {/* First Paragraph */}
          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
            {t('privacypolicy.terms_6_1_text_1')}
          </Typography>
      
          {/* Second Paragraph */}
          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
            {t('privacypolicy.terms_6_1_text_2')}
          </Typography>
      
          {/* Usage Platforms List */}
          <Box component="ul" sx={{ 
            pl: 4, 
            mb: 3,
            '& li': {
              marginBottom: 0.5
            }
          }}>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.terms_6_1_item_1')}
            </Typography>
            
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.terms_6_1_item_3')}
            </Typography>
          </Box>
      
         
        </Box>
      
        {/* ========== 6.2 Minimum Top-Up and Usage Rules ========== */}
        <Box sx={{ mb: 4 }}>
          {/* Sub-heading 6.2 */}
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
            {t('privacypolicy.terms_6_2_title')}
          </Typography>
      
          {/* First Paragraph */}
          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
            {t('privacypolicy.terms_6_2_text_1')}
          </Typography>
      
          {/* Second Paragraph */}
          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
            {t('privacypolicy.terms_6_2_text_2')}
          </Typography>
      
          {/* Wallet Rules List */}
          <Box component="ul" sx={{ 
            pl: 4, 
            mb: 3,
            '& li': {
              marginBottom: 0.5
            }
          }}>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.terms_6_2_item_1')}
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.terms_6_2_item_2')}
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.terms_6_2_item_3')}
            </Typography>
          </Box>
      
          {/* Third Paragraph */}
          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
            {t('privacypolicy.terms_6_2_text_3')}
          </Typography>
      
       
        </Box>
      
        {/* ========== 6.3 Payment Processing ========== */}
        <Box sx={{ mb: 4 }}>
          {/* Sub-heading 6.3 */}
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
            {t('privacypolicy.terms_6_3_title')}
          </Typography>
      
          {/* First Paragraph */}
          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
            {t('privacypolicy.terms_6_3_text_1')}
          </Typography>
      
          {/* Second Paragraph */}
          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
            {t('privacypolicy.terms_6_3_text_2')}
          </Typography>
      
          {/* Payment Handling List */}
          <Box component="ul" sx={{ 
            pl: 4, 
            mb: 3,
            '& li': {
              marginBottom: 0.5
            }
          }}>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.terms_6_3_item_1')}
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.terms_6_3_item_2')}
            </Typography>
          </Box>
      
        
        </Box>
      
        {/* ========== 6.4 Refund Policy ========== */}
        <Box sx={{ mb: 4 }}>
          {/* Sub-heading 6.4 */}
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
            {t('privacypolicy.terms_6_4_title')}
          </Typography>
      
          {/* First Paragraph */}
          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
            {t('privacypolicy.terms_6_4_text_1')}
          </Typography>
      
          {/* Refund Conditions List */}
          <Box component="ul" sx={{ 
            pl: 4, 
            mb: 3,
            '& li': {
              marginBottom: 0.5
            }
          }}>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.terms_6_4_item_1')}
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.terms_6_4_item_2')}
            </Typography>
          </Box>
      
          {/* Second Paragraph */}
          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
            {t('privacypolicy.terms_6_4_text_2')}
          </Typography>
      
          {/* Non-Refundable Items List */}
          <Box component="ul" sx={{ 
            pl: 4, 
            mb: 3,
            '& li': {
              marginBottom: 0.5
            }
          }}>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.terms_6_4_item_3')}
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.terms_6_4_item_4')}
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.terms_6_4_item_5')}
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.terms_6_4_item_6')}
            </Typography>
          </Box>
        </Box>
      </Box>
      
      {/* ========== 7. Scan Feature ========== */}
      <Box my={5}>
        {/* Main Heading with Number */}
        <Box sx={{ display: 'flex', alignItems: 'baseline', mb: 2 }}>
         
          <Typography 
            className='headings-h3 policy_heading ' 
            variant="h5" 
            sx={{ 
              color: '#fcfcfc',
              fontWeight: 600 
            }}
          >
            {t('privacypolicy.terms_7_title')}
          </Typography>
        </Box>
      
        {/* ========== 7.1 Purpose of Scan ========== */}
        <Box sx={{ mb: 4 }}>
          {/* Sub-heading 7.1 */}
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
            {t('privacypolicy.terms_7_1_title')}
          </Typography>
      
          {/* First Paragraph */}
          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
            {t('privacypolicy.terms_7_1_text_1')}
          </Typography>
      
          {/* Purpose List */}
          <Box component="ul" sx={{ 
            pl: 4, 
            mb: 3,
            '& li': {
              marginBottom: 0.5
            }
          }}>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.terms_7_1_item_1')}
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.terms_7_1_item_2')}
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.terms_7_1_item_3')}
            </Typography>
          </Box>
      
        </Box>
      
        {/* ========== 7.2 Prohibited Use ========== */}
        <Box sx={{ mb: 4 }}>
          {/* Sub-heading 7.2 */}
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
            {t('privacypolicy.terms_7_2_title')}
          </Typography>
      
          {/* First Paragraph */}
          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
            {t('privacypolicy.terms_7_2_text_1')}
          </Typography>
      
          {/* Prohibited Actions List */}
          <Box component="ul" sx={{ 
            pl: 4, 
            mb: 3,
            '& li': {
              marginBottom: 0.5
            }
          }}>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.terms_7_2_item_1')}
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.terms_7_2_item_2')}
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.terms_7_2_item_3')}
            </Typography>
          </Box>
      
          {/* Second Paragraph */}
          <Typography className='bodyRegularText3 shantellSansFont' variant="body1">
            {t('privacypolicy.terms_7_2_text_2')}
          </Typography>
        </Box>
      </Box>
      
      {/* ========== 8. Cloud System User Obligations ========== */}
      <Box my={5}>
        {/* Main Heading with Number */}
        <Box sx={{ display: 'flex', alignItems: 'baseline', mb: 2 }}>
         
          <Typography 
            className='headings-h3 policy_heading ' 
            variant="h5" 
            sx={{ 
              color: '#fcfcfc',
              fontWeight: 600 
            }}
          >
            {t('privacypolicy.terms_8_title')}
          </Typography>
        </Box>
      
        {/* Content Section */}
        <Box>
          {/* First Paragraph */}
          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
            {t('privacypolicy.terms_8_text_1')}
          </Typography>
      
          {/* Obligations List */}
          <Box component="ul" sx={{ 
            pl: 4, 
            mb: 3,
            '& li': {
              marginBottom: 0.5
            }
          }}>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.terms_8_item_1')}
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.terms_8_item_2')}
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.terms_8_item_3')}
            </Typography>
          </Box>
      
          {/* Second Paragraph */}
          <Typography className='bodyRegularText3 shantellSansFont' variant="body1">
            {t('privacypolicy.terms_8_text_2')}
          </Typography>
        </Box>
      </Box>
      
      {/* ========== 9. Prohibited Conduct ========== */}
      <Box my={5}>
        {/* Main Heading with Number */}
        <Box sx={{ display: 'flex', alignItems: 'baseline', mb: 2 }}>
         
          <Typography 
            className='headings-h3 policy_heading ' 
            variant="h5" 
            sx={{ 
              color: '#fcfcfc',
              fontWeight: 600 
            }}
          >
            {t('privacypolicy.terms_9_title')}
          </Typography>
        </Box>
      
        {/* Content Section */}
        <Box>
          {/* First Paragraph */}
          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
            {t('privacypolicy.terms_9_text_1')}
          </Typography>
      
          {/* Prohibited Conduct List */}
          <Box component="ul" sx={{ 
            pl: 4, 
            mb: 3,
            '& li': {
              marginBottom: 0.5
            }
          }}>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.terms_9_item_1')}
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.terms_9_item_2')}
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.terms_9_item_3')}
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.terms_9_item_4')}
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.terms_9_item_5')}
            </Typography>
          </Box>
        </Box>
      </Box>
      
      {/* ========== 10. Suspension and Termination ========== */}
      <Box my={5}>
        {/* Main Heading with Number */}
        <Box sx={{ display: 'flex', alignItems: 'baseline', mb: 2 }}>
         
          <Typography 
            className='headings-h3 policy_heading ' 
            variant="h5" 
            sx={{ 
              color: '#fcfcfc',
              fontWeight: 600 
            }}
          >
            {t('privacypolicy.terms_10_title')}
          </Typography>
        </Box>
      
        {/* Content Section */}
        <Box>
          {/* First Paragraph */}
          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
            {t('privacypolicy.terms_10_text_1')}
          </Typography>
      
          {/* Termination Conditions List */}
          <Box component="ul" sx={{ 
            pl: 4, 
            mb: 3,
            '& li': {
              marginBottom: 0.5
            }
          }}>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.terms_10_item_1')}
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.terms_10_item_2')}
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.terms_10_item_3')}
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.terms_10_item_4')}
            </Typography>
          </Box>
      
          {/* Second Paragraph */}
          <Typography className='bodyRegularText3 shantellSansFont' variant="body1">
            {t('privacypolicy.terms_10_text_2')}
          </Typography>
        </Box>
      </Box>
      
      {/* ========== 11. Intellectual Property ========== */}
      <Box my={5}>
        {/* Main Heading with Number */}
        <Box sx={{ display: 'flex', alignItems: 'baseline', mb: 2 }}>
        
          <Typography 
            className='headings-h3 policy_heading ' 
            variant="h5" 
            sx={{ 
              color: '#fcfcfc',
              fontWeight: 600 
            }}
          >
            {t('privacypolicy.terms_11_title')}
          </Typography>
        </Box>
      
        {/* Content Section */}
        <Box>
          {/* First Paragraph */}
          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
            {t('privacypolicy.terms_11_text_1')}
          </Typography>
      
          {/* Second Paragraph */}
          <Typography className='bodyRegularText3 shantellSansFont' variant="body1">
            {t('privacypolicy.terms_11_text_2')}
          </Typography>
        </Box>
      </Box>
      
      {/* ========== 12. Limitation of Liability ========== */}
      <Box my={5}>
        {/* Main Heading with Number */}
        <Box sx={{ display: 'flex', alignItems: 'baseline', mb: 2 }}>
         
          <Typography 
            className='headings-h3 policy_heading ' 
            variant="h5" 
            sx={{ 
              color: '#fcfcfc',
              fontWeight: 600 
            }}
          >
            {t('privacypolicy.terms_12_title')}
          </Typography>
        </Box>
      
        {/* Content Section */}
        <Box>
          {/* First Paragraph */}
          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
            {t('privacypolicy.terms_12_text_1')}
          </Typography>
      
          {/* Liability Exclusions List */}
          <Box component="ul" sx={{ 
            pl: 4, 
            mb: 3,
            '& li': {
              marginBottom: 0.5
            }
          }}>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.terms_12_item_1')}
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.terms_12_item_2')}
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.terms_12_item_3')}
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.terms_12_item_4')}
            </Typography>
          </Box>
      
          {/* Second Paragraph */}
          <Typography className='bodyRegularText3 shantellSansFont' variant="body1">
            {t('privacypolicy.terms_12_text_2')}
          </Typography>
        </Box>
      </Box>
      
      {/* ========== 13. Force Majeure ========== */}
      <Box my={5}>
        {/* Main Heading with Number */}
        <Box sx={{ display: 'flex', alignItems: 'baseline', mb: 2 }}>
        
          <Typography
            className='headings-h3 policy_heading '
            variant="h5"
            sx={{
              color: '#fcfcfc',
              fontWeight: 600
            }}
          >
            {t('privacypolicy.terms_13_title')}
          </Typography>
        </Box>
      
        {/* Content Section */}
        <Box>
          {/* Single Paragraph */}
          <Typography className='bodyRegularText3 shantellSansFont' variant="body1">
            {t('privacypolicy.terms_13_text_1')}
          </Typography>
        </Box>
      </Box>
      
      {/* ========== 14. Modifications to Services ========== */}
      <Box my={5}>
        {/* Main Heading with Number */}
        <Box sx={{ display: 'flex', alignItems: 'baseline', mb: 2 }}>
         
          <Typography 
            className='headings-h3 policy_heading ' 
            variant="h5" 
            sx={{ 
              color: '#fcfcfc',
              fontWeight: 600 
            }}
          >
            {t('privacypolicy.terms_14_title')}
          </Typography>
        </Box>
      
        {/* Content Section */}
        <Box>
          {/* Single Paragraph */}
          <Typography className='bodyRegularText3 shantellSansFont' variant="body1">
            {t('privacypolicy.terms_14_text_1')}
          </Typography>
        </Box>
      </Box>
      
      {/* ========== 15. Governing Law and Jurisdiction ========== */}
      <Box my={5}>
        {/* Main Heading with Number */}
        <Box sx={{ display: 'flex', alignItems: 'baseline', mb: 2 }}>
         
          <Typography 
            className='headings-h3 policy_heading ' 
            variant="h5" 
            sx={{ 
              color: '#fcfcfc',
              fontWeight: 600 
            }}
          >
            {t('privacypolicy.terms_15_title')}
          </Typography>
        </Box>
      
        {/* Content Section */}
        <Box>
          {/* First Paragraph */}
          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
            {t('privacypolicy.terms_15_text_1')}
          </Typography>
      
          {/* Second Paragraph */}
          <Typography className='bodyRegularText3 shantellSansFont' variant="body1">
            {t('privacypolicy.terms_15_text_2')}
          </Typography>
        </Box>
      </Box>
      
      {/* ========== 16. Changes to These Terms ========== */}
      <Box my={5}>
        {/* Main Heading with Number */}
        <Box sx={{ display: 'flex', alignItems: 'baseline', mb: 2 }}>
         
          <Typography 
            className='headings-h3 policy_heading ' 
            variant="h5" 
            sx={{ 
              color: '#fcfcfc',
              fontWeight: 600 
            }}
          >
            {t('privacypolicy.terms_16_title')}
          </Typography>
        </Box>
      
        {/* Content Section */}
        <Box>
          {/* Single Paragraph */}
          <Typography className='bodyRegularText3 shantellSansFont' variant="body1">
            {t('privacypolicy.terms_16_text_1')}
          </Typography>
        </Box>
      </Box>
      
      {/* ========== 17. Appendices ========== */}
      <Box my={5}>
        {/* Main Heading with Number */}
        <Box sx={{ display: 'flex', alignItems: 'baseline', mb: 2 }}>
         
          <Typography 
            className='headings-h3 policy_heading ' 
            variant="h5" 
            sx={{ 
              color: '#fcfcfc',
              fontWeight: 600 
            }}
          >
            {t('privacypolicy.terms_17_title')}
          </Typography>
        </Box>
      
        {/* ========== 18.1 Platform Feature Matrix ========== */}
        <Box sx={{ mb: 6, mt: 4 }}>
          
          <Typography 
            className='headings-h4' 
            variant="h6" 
            gutterBottom
            sx={{ 
              color: '#fcfcfc',
              fontWeight: 600,
              mb: 3
            }}
          >
            {t('privacypolicy.terms_17_1_title')}
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
                    {t('privacypolicy.terms_17_1_col_1')}
                  </TableCell>
                  <TableCell sx={{ 
                    color: '#fcfcfc', 
                    fontWeight: 600,
                    border: '1px solid #444',
                     textAlign: 'center'
                  }}>
                    {t('privacypolicy.terms_17_1_col_2')}
                  </TableCell>
                  <TableCell sx={{ 
                    color: '#fcfcfc', 
                    fontWeight: 600,
                    border: '1px solid #444',
                     textAlign: 'center'
                  }}>
                    {t('privacypolicy.terms_17_1_col_3')}
                  </TableCell>
                  <TableCell sx={{ 
                    color: '#fcfcfc', 
                    fontWeight: 600,
                    border: '1px solid #444',
                     textAlign: 'center'
                  }}>
                    {t('privacypolicy.terms_17_1_col_4')}
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                
                <TableRow sx={{ '&:hover': { backgroundColor: '#333' } }}>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444'
                  }}>
                    {t('privacypolicy.terms_17_1_row_1')}
                  </TableCell>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444',
                    textAlign: 'center'
                  }}>
                    ✓
                  </TableCell>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444',
                    textAlign: 'center'
                  }}>
                    ✓
                  </TableCell>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444',
                    textAlign: 'center'
                  }}>
                    ✗
                  </TableCell>
                </TableRow>
                
               
                <TableRow sx={{ '&:hover': { backgroundColor: '#333' } }}>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444'
                  }}>
                    {t('privacypolicy.terms_17_1_row_2')}
                  </TableCell>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444',
                    textAlign: 'center'
                  }}>
                    ✓
                  </TableCell>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444',
                    textAlign: 'center'
                  }}>
                    ✓
                  </TableCell>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444',
                    textAlign: 'center'
                  }}>
                    ✓ {t('privacypolicy.terms_Adminview')}
                  </TableCell>
                </TableRow>
                
                
                <TableRow sx={{ '&:hover': { backgroundColor: '#333' } }}>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444'
                  }}>
                    {t('privacypolicy.terms_17_1_row_3')}
                  </TableCell>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444',
                    textAlign: 'center'
                  }}>
                    ✓
                  </TableCell>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444',
                    textAlign: 'center'
                  }}>
                    ✓
                  </TableCell>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444',
                    textAlign: 'center'
                  }}>
                    ✗
                  </TableCell>
                </TableRow>
                
               
                <TableRow sx={{ '&:hover': { backgroundColor: '#333' } }}>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444'
                  }}>
                    {t('privacypolicy.terms_17_1_row_4')}
                  </TableCell>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444',
                    textAlign: 'center'
                  }}>
                    ✓
                  </TableCell>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444',
                    textAlign: 'center'
                  }}>
                    ✓
                  </TableCell>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444',
                    textAlign: 'center'
                  }}>
                    ✗
                  </TableCell>
                </TableRow>
                
                
                <TableRow sx={{ '&:hover': { backgroundColor: '#333' } }}>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444'
                  }}>
                    {t('privacypolicy.terms_17_1_row_5')}
                  </TableCell>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444',
                    textAlign: 'center'
                  }}>
                    ✗
                  </TableCell>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444',
                    textAlign: 'center'
                  }}>
                    ✓
                  </TableCell>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444',
                    textAlign: 'center'
                  }}>
                    ✗
                  </TableCell>
                </TableRow>
                 
                <TableRow sx={{ '&:hover': { backgroundColor: '#333' } }}>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444'
                  }}>
                    {t('privacypolicy.terms_17_1_row_6')}
                  </TableCell>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444',
                    textAlign: 'center'
                  }}>
                    ✓
                  </TableCell>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444',
                    textAlign: 'center'
                  }}>
                    ✓
                  </TableCell>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444',
                    textAlign: 'center'
                  }}>
                    ✓
                  </TableCell>
                </TableRow>
                
                <TableRow sx={{ '&:hover': { backgroundColor: '#333' } }}>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444'
                  }}>
                    {t('privacypolicy.terms_17_1_row_7')}
                  </TableCell>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444',
                    textAlign: 'center'
                  }}>
                    ✗
                  </TableCell>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444',
                    textAlign: 'center'
                  }}>
                    ✗
                  </TableCell>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444',
                    textAlign: 'center'
                  }}>
                    ✓ ({t('privacypolicy.terms_Restricted')})
                  </TableCell>
                </TableRow>
                
                
                <TableRow sx={{ '&:hover': { backgroundColor: '#333' } }}>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444'
                  }}>
                    {t('privacypolicy.terms_17_1_row_8')}
                  </TableCell>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444',
                    textAlign: 'center'
                  }}>
                    ✗
                  </TableCell>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444',
                    textAlign: 'center'
                  }}>
                    ✗
                  </TableCell>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444',
                    textAlign: 'center'
                  }}>
                    ✓ ({t('privacypolicy.terms_Restricted')})
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Box>
        </Box>
      </Box>
      
      {/* ========== 18. Cloud System Role and Permission Matrix ========== */}
      <Box my={5}>
        {/* Main Heading with Number */}
        <Box sx={{ display: 'flex', alignItems: 'baseline', mb: 2 }}>
         
          <Typography 
            className='headings-h3 policy_heading ' 
            variant="h5" 
            sx={{ 
              color: '#fcfcfc',
              fontWeight: 600 
            }}
          >
           {t('privacypolicy.terms_18_title')}
          </Typography>
        </Box>
      
        {/* Introduction Paragraph */}
        <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
          {t('privacypolicy.terms_18_text_1')}
        </Typography>
      
        {/* ========== 19.1 User Role Permissions ========== */}
        <Box sx={{ mb: 6, mt: 4 }}>
          {/* Sub-heading 19.1 */}
          <Typography 
            className='headings-h4' 
            variant="h6" 
            gutterBottom
            sx={{ 
              color: '#fcfcfc',
              fontWeight: 600,
              mb: 3
            }}
          >
            {t('privacypolicy.terms_18_1_title')}
          </Typography>
      
          {/* Table Container */}
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
                    border: '1px solid #444',
                    
                  }}>
                    {t('privacypolicy.terms_18_1_col_1')}
                  </TableCell>
                  <TableCell sx={{ 
                    color: '#fcfcfc', 
                    fontWeight: 600,
                    border: '1px solid #444',
                     textAlign: 'center'
                  }}>
                    {t('privacypolicy.terms_18_1_col_2')}
                  </TableCell>
                  <TableCell sx={{ 
                    color: '#fcfcfc', 
                    fontWeight: 600,
                    border: '1px solid #444',
                     textAlign: 'center'
                  }}>
                    {t('privacypolicy.terms_18_1_col_3')}
                  </TableCell>
                  <TableCell sx={{ 
                    color: '#fcfcfc', 
                    fontWeight: 600,
                    border: '1px solid #444',
                     textAlign: 'center'
                  }}>
                    {t('privacypolicy.terms_18_1_col_4')}
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                
                <TableRow sx={{ '&:hover': { backgroundColor: '#333' } }}>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444'
                  }}>
                    {t('privacypolicy.terms_18_1_row_1')}
                  </TableCell>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444',
                    textAlign: 'center'
                  }}>
                    ✓
                  </TableCell>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444',
                    textAlign: 'center'
                  }}>
                    ✗
                  </TableCell>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444',
                    textAlign: 'center'
                  }}>
                    ✗
                  </TableCell>
                </TableRow>
                
               
                <TableRow sx={{ '&:hover': { backgroundColor: '#333' } }}>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444'
                  }}>
                    {t('privacypolicy.terms_18_1_row_2')}
                  </TableCell>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444',
                    textAlign: 'center'
                  }}>
                    ✓
                  </TableCell>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444',
                    textAlign: 'center'
                  }}>
                    ✗
                  </TableCell>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444',
                    textAlign: 'center'
                  }}>
                    ✗
                  </TableCell>
                </TableRow>
                
               
                <TableRow sx={{ '&:hover': { backgroundColor: '#333' } }}>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444'
                  }}>
                    {t('privacypolicy.terms_18_1_row_3')}
                  </TableCell>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444',
                    textAlign: 'center'
                  }}>
                    ✓
                  </TableCell>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444',
                    textAlign: 'center'
                  }}>
                    ✓
                  </TableCell>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444',
                    textAlign: 'center'
                  }}>
                    ✗
                  </TableCell>
                </TableRow>
                
              
                <TableRow sx={{ '&:hover': { backgroundColor: '#333' } }}>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444'
                  }}>
                    {t('privacypolicy.terms_18_1_row_4')}
                  </TableCell>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444',
                    textAlign: 'center'
                  }}>
                    ✓
                  </TableCell>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444',
                    textAlign: 'center'
                  }}>
                    ✓
                  </TableCell>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444',
                    textAlign: 'center'
                  }}>
                    ✗
                  </TableCell>
                </TableRow>
                
                
                <TableRow sx={{ '&:hover': { backgroundColor: '#333' } }}>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444'
                  }}>
                    {t('privacypolicy.terms_18_1_row_5')}
                  </TableCell>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444',
                    textAlign: 'center'
                  }}>
                    ✓
                  </TableCell>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444',
                    textAlign: 'center'
                  }}>
                    ✓
                  </TableCell>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444',
                    textAlign: 'center'
                  }}>
                    ✗
                  </TableCell>
                </TableRow>
                
                
                <TableRow sx={{ '&:hover': { backgroundColor: '#333' } }}>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444'
                  }}>
                    {t('privacypolicy.terms_18_1_row_6')}
                  </TableCell>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444',
                    textAlign: 'center'
                  }}>
                    ✓
                  </TableCell>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444',
                    textAlign: 'center'
                  }}>
                    ✓
                  </TableCell>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444',
                    textAlign: 'center'
                  }}>
                    ✓ ({t('privacypolicy.terms_Limited')})
                  </TableCell>
                </TableRow>
                
               
                <TableRow sx={{ '&:hover': { backgroundColor: '#333' } }}>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444'
                  }}>
                    {t('privacypolicy.terms_18_1_row_7')}
                  </TableCell>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444',
                    textAlign: 'center'
                  }}>
                    ✓
                  </TableCell>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444',
                    textAlign: 'center'
                  }}>
                    ✓ ({t('privacypolicy.terms_Limited')})
                  </TableCell>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444',
                    textAlign: 'center'
                  }}>
                    ✗
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Box>
      
          {/* Warning Paragraph */}
          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" sx={{ mt: 3 }}>
            {t('privacypolicy.terms_18_warning')}
          </Typography>
        </Box>
      </Box>
      
      {/* ========== 19. Reservation Rules Matrix ========== */}
      <Box my={5}>
        {/* Main Heading with Number */}
        <Box sx={{ display: 'flex', alignItems: 'baseline', mb: 2 }}>
         
          <Typography 
            className='headings-h3 policy_heading ' 
            variant="h5" 
            sx={{ 
              color: '#fcfcfc',
              fontWeight: 600 
            }}
          >
           {t('privacypolicy.terms_19_title')}
          </Typography>
        </Box>
      
        {/* 20.1 Reservation Conditions  */}
        <Box sx={{ mb: 6, mt: 4 }}>
          {/* Sub-heading 20.1 */}
          <Typography 
            className='headings-h4' 
            variant="h6" 
            gutterBottom
            sx={{ 
              color: '#fcfcfc',
              fontWeight: 600,
              mb: 3
            }}
          >
            {t('privacypolicy.terms_19_1_title')}
          </Typography>
      
          {/* Table Container */}
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
                    border: '1px solid #444',
                    width: '35%'
                  }}>
                    {t('privacypolicy.terms_19_col_1')}
                  </TableCell>
                  <TableCell sx={{ 
                    color: '#fcfcfc', 
                    fontWeight: 600,
                    border: '1px solid #444',
                    width: '65%'
                  }}>
                    {t('privacypolicy.terms_19_col_2')}
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
               
                <TableRow sx={{ '&:hover': { backgroundColor: '#333' } }}>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444'
                  }}>
                    {t('privacypolicy.terms_19_rule_1')}
                  </TableCell>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444'
                  }}>
                    {t('privacypolicy.terms_19_desc_1')}
                  </TableCell>
                </TableRow>
                
              
                <TableRow sx={{ '&:hover': { backgroundColor: '#333' } }}>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444'
                  }}>
                    {t('privacypolicy.terms_19_rule_2')}
                  </TableCell>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444'
                  }}>
                    {t('privacypolicy.terms_19_desc_2')}
                  </TableCell>
                </TableRow>
                
                
                <TableRow sx={{ '&:hover': { backgroundColor: '#333' } }}>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444'
                  }}>
                    {t('privacypolicy.terms_19_rule_3')}
                  </TableCell>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444'
                  }}>
                    {t('privacypolicy.terms_19_desc_3')}
                  </TableCell>
                </TableRow>
                
               
                <TableRow sx={{ '&:hover': { backgroundColor: '#333' } }}>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444'
                  }}>
                    {t('privacypolicy.terms_19_rule_4')}
                  </TableCell>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444'
                  }}>
                    {t('privacypolicy.terms_19_desc_4')}
                  </TableCell>
                </TableRow>
                
                
                <TableRow sx={{ '&:hover': { backgroundColor: '#333' } }}>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444'
                  }}>
                    {t('privacypolicy.terms_19_rule_5')}
                  </TableCell>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444'
                  }}>
                    {t('privacypolicy.terms_19_desc_5')}
                  </TableCell>
                </TableRow>
                 
                <TableRow sx={{ '&:hover': { backgroundColor: '#333' } }}>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444'
                  }}>
                    {t('privacypolicy.terms_19_rule_6')}
                  </TableCell>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444'
                  }}>
                    {t('privacypolicy.terms_19_desc_6')}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Box>
        </Box>
      </Box>
      
      {/*  20. Wallet Rules and Financial Limitations*/}
      <Box my={5}>
        {/* Main Heading with Number */}
        <Box sx={{ display: 'flex', alignItems: 'baseline', mb: 2 }}>
         
          <Typography 
            className='headings-h3 policy_heading ' 
            variant="h5" 
            sx={{ 
              color: '#fcfcfc',
              fontWeight: 600 
            }}
          >
            {t('privacypolicy.terms_20_title')}
          </Typography>
        </Box>
      
        {/*  21.1 Wallet Usage Matrix  */}
        <Box sx={{ mb: 6, mt: 4 }}>
          {/* Sub-heading 21.1 */}
          <Typography 
            className='headings-h4' 
            variant="h6" 
            gutterBottom
            sx={{ 
              color: '#fcfcfc',
              fontWeight: 600,
              mb: 3
            }}
          >
            {t('privacypolicy.terms_20_1_title')}
          </Typography>
      
          {/* Table Container */}
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
                    border: '1px solid #444',
                    width: '35%'
                  }}>
                    {t('privacypolicy.terms_20_col_1')}
                  </TableCell>
                  <TableCell sx={{ 
                    color: '#fcfcfc', 
                    fontWeight: 600,
                    border: '1px solid #444',
                    width: '65%'
                  }}>
                    {t('privacypolicy.terms_20_col_2')}
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
              
                <TableRow sx={{ '&:hover': { backgroundColor: '#333' } }}>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444'
                  }}>
                    {t('privacypolicy.terms_20_rule_1')}
                  </TableCell>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444'
                  }}>
                    {t('privacypolicy.terms_20_desc_1')}
                  </TableCell>
                </TableRow>
                
             
                <TableRow sx={{ '&:hover': { backgroundColor: '#333' } }}>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444'
                  }}>
                    {t('privacypolicy.terms_20_rule_2')}
                  </TableCell>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444'
                  }}>
                    {t('privacypolicy.terms_20_desc_2')}
                  </TableCell>
                </TableRow>
                
               
                <TableRow sx={{ '&:hover': { backgroundColor: '#333' } }}>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444'
                  }}>
                    {t('privacypolicy.terms_20_rule_3')}
                  </TableCell>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444'
                  }}>
                    {t('privacypolicy.terms_20_desc_3')}
                  </TableCell>
                </TableRow>
                
               
                <TableRow sx={{ '&:hover': { backgroundColor: '#333' } }}>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444'
                  }}>
                    {t('privacypolicy.terms_20_rule_4')}
                  </TableCell>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444'
                  }}>
                    {t('privacypolicy.terms_20_desc_4')}
                  </TableCell>
                </TableRow>
                
                
                <TableRow sx={{ '&:hover': { backgroundColor: '#333' } }}>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444'
                  }}>
                    {t('privacypolicy.terms_20_rule_5')}
                  </TableCell>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444'
                  }}>
                    {t('privacypolicy.terms_20_desc_5')}
                  </TableCell>
                </TableRow>
                
               
                <TableRow sx={{ '&:hover': { backgroundColor: '#333' } }}>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444'
                  }}>
                    {t('privacypolicy.terms_20_rule_6')}
                  </TableCell>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444'
                  }}>
                    {t('privacypolicy.terms_20_desc_6')}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Box>
      
          
          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" sx={{ mt: 3, fontStyle: 'italic' }}>
            {t('privacypolicy.terms_20_note')}
          </Typography>
        </Box>
      </Box>
      
      {/*  21. Refund and Dispute Handling Matrix*/}
      <Box my={5}>
        {/* Main Heading with Number */}
        <Box sx={{ display: 'flex', alignItems: 'baseline', mb: 2 }}>
          
          <Typography 
            className='headings-h3 policy_heading ' 
            variant="h5" 
            sx={{ 
              color: '#fcfcfc',
              fontWeight: 600 
            }}
          >
            {t('privacypolicy.terms_21_title')}
          </Typography>
        </Box>
      
        {/*  21.1 Refund Eligibility */}
        <Box sx={{ mb: 6, mt: 4 }}>
          {/* Sub-heading 21.1 */}
          <Typography 
            className='headings-h4' 
            variant="h6" 
            gutterBottom
            sx={{ 
              color: '#fcfcfc',
              fontWeight: 600,
              mb: 3
            }}
          >
            {t('privacypolicy.terms_21_1_title')}
          </Typography>
      
          {/* Table Container */}
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
                    border: '1px solid #444',
                    width: '70%'
                  }}>
                    {t('privacypolicy.terms_21_col_1')}
                  </TableCell>
                  <TableCell sx={{ 
                    color: '#fcfcfc', 
                    fontWeight: 600,
                    border: '1px solid #444',
                    width: '30%',
                    textAlign: 'center'
                  }}>
                    {t('privacypolicy.terms_21_col_2')}
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                
                <TableRow sx={{ '&:hover': { backgroundColor: '#333' } }}>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444'
                  }}>
                    {t('privacypolicy.terms_21_row_1')}
                  </TableCell>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444',
                    textAlign: 'center'
                  }}>
                    ✓
                  </TableCell>
                </TableRow>
                
               
                <TableRow sx={{ '&:hover': { backgroundColor: '#333' } }}>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444'
                  }}>
                    {t('privacypolicy.terms_21_row_2')}
                  </TableCell>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444',
                    textAlign: 'center'
                  }}>
                    ✗
                  </TableCell>
                </TableRow>
                
                
                <TableRow sx={{ '&:hover': { backgroundColor: '#333' } }}>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444'
                  }}>
                    {t('privacypolicy.terms_21_row_3')}
                  </TableCell>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444',
                    textAlign: 'center'
                  }}>
                    ✗
                  </TableCell>
                </TableRow>
                
                
                <TableRow sx={{ '&:hover': { backgroundColor: '#333' } }}>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444'
                  }}>
                    {t('privacypolicy.terms_21_row_4')}
                  </TableCell>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444',
                    textAlign: 'center'
                  }}>
                    ✗
                  </TableCell>
                </TableRow>
                
                
                <TableRow sx={{ '&:hover': { backgroundColor: '#333' } }}>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444'
                  }}>
                    {t('privacypolicy.terms_21_row_5')}
                  </TableCell>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444',
                    textAlign: 'center'
                  }}>
                    ✗
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Box>
      
          {/* Note Paragraph */}
          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" sx={{ mt: 3 }}>
            {t('privacypolicy.terms_21_note')}
          </Typography>
        </Box>
      </Box>
      
      {/* 22. Account Suspension and Termination Matrix  */}
      <Box my={5}>
        {/* Main Heading with Number */}
        <Box sx={{ display: 'flex', alignItems: 'baseline', mb: 2 }}>
          
          <Typography 
            className='headings-h3 policy_heading ' 
            variant="h5" 
            sx={{ 
              color: '#fcfcfc',
              fontWeight: 600 
            }}
          >
            {t('privacypolicy.terms_22_title')}
          </Typography>
        </Box>
      
        {/*  22.1 Enforcement Actions */}
        <Box sx={{ mb: 6, mt: 4 }}>
          {/* Sub-heading 22.1 */}
          <Typography 
            className='headings-h4' 
            variant="h6" 
            gutterBottom
            sx={{ 
              color: '#fcfcfc',
              fontWeight: 600,
              mb: 3
            }}
          >
            {t('privacypolicy.terms_22_1_title')}
          </Typography>
      
          {/* Table Container */}
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
                    border: '1px solid #444',
                    width: '50%'
                  }}>
                    {t('privacypolicy.terms_22_col_1')}
                  </TableCell>
                  <TableCell sx={{ 
                    color: '#fcfcfc', 
                    fontWeight: 600,
                    border: '1px solid #444',
                    width: '50%'
                  }}>
                    {t('privacypolicy.terms_22_col_2')}
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                
                <TableRow sx={{ '&:hover': { backgroundColor: '#333' } }}>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444'
                  }}>
                    {t('privacypolicy.terms_22_row_1')}
                  </TableCell>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444'
                  }}>
                    {t('privacypolicy.terms_22_action_1')}
                  </TableCell>
                </TableRow>
                
                
                <TableRow sx={{ '&:hover': { backgroundColor: '#333' } }}>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444'
                  }}>
                    {t('privacypolicy.terms_22_row_2')}
                  </TableCell>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444'
                  }}>
                    {t('privacypolicy.terms_22_action_2')}
                  </TableCell>
                </TableRow>
                
                
                <TableRow sx={{ '&:hover': { backgroundColor: '#333' } }}>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444'
                  }}>
                    {t('privacypolicy.terms_22_row_3')}
                  </TableCell>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444'
                  }}>
                    {t('privacypolicy.terms_22_action_3')}
                  </TableCell>
                </TableRow>
                
                
                <TableRow sx={{ '&:hover': { backgroundColor: '#333' } }}>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444'
                  }}>
                    {t('privacypolicy.terms_22_row_4')}
                  </TableCell>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444'
                  }}>
                    {t('privacypolicy.terms_22_action_4')}
                  </TableCell>
                </TableRow>
                
                
                <TableRow sx={{ '&:hover': { backgroundColor: '#333' } }}>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444'
                  }}>
                    {t('privacypolicy.terms_22_row_5')}
                  </TableCell>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444'
                  }}>
                    {t('privacypolicy.terms_22_action_5')}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Box>
      
          {/* Note Paragraph */}
          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" sx={{ mt: 3, fontStyle: 'italic' }}>
            {t('privacypolicy.terms_22_note')}
          </Typography>
        </Box>
      </Box>
      
      {/*  23. Liability Allocation Matrix  */}
      <Box my={5}>
        {/* Main Heading with Number */}
        <Box sx={{ display: 'flex', alignItems: 'baseline', mb: 2 }}>
       
          <Typography 
            className='headings-h3 policy_heading ' 
            variant="h5" 
            sx={{ 
              color: '#fcfcfc',
              fontWeight: 600 
            }}
          >
            {t('privacypolicy.terms_23_title')}
          </Typography>
        </Box>
      
        {/*  23.1 Responsibility Breakdown */}
        <Box sx={{ mb: 6, mt: 4 }}>
          {/* Sub-heading 23.1 */}
          <Typography 
            className='headings-h4' 
            variant="h6" 
            gutterBottom
            sx={{ 
              color: '#fcfcfc',
              fontWeight: 600,
              mb: 3
            }}
          >
            {t('privacypolicy.terms_23_1_title')}
          </Typography>
      
          {/* Table Container */}
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
                    border: '1px solid #444',
                    width: '50%'
                  }}>
                    {t('privacypolicy.terms_23_col_1')}
                  </TableCell>
                  <TableCell sx={{ 
                    color: '#fcfcfc', 
                    fontWeight: 600,
                    border: '1px solid #444',
                    width: '50%'
                  }}>
                    {t('privacypolicy.terms_23_col_2')}
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
               
                <TableRow sx={{ '&:hover': { backgroundColor: '#333' } }}>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444'
                  }}>
                    {t('privacypolicy.terms_23_row_1')}
                  </TableCell>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444'
                  }}>
                    {t('privacypolicy.terms_23_resp_1')}
                  </TableCell>
                </TableRow>
                
               
                <TableRow sx={{ '&:hover': { backgroundColor: '#333' } }}>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444'
                  }}>
                    {t('privacypolicy.terms_23_row_2')}
                  </TableCell>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444'
                  }}>
                    {t('privacypolicy.terms_23_resp_2')}
                  </TableCell>
                </TableRow>
                
                
                <TableRow sx={{ '&:hover': { backgroundColor: '#333' } }}>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444'
                  }}>
                    {t('privacypolicy.terms_23_row_3')}
                  </TableCell>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444'
                  }}>
                    {t('privacypolicy.terms_23_resp_3')}
                  </TableCell>
                </TableRow>
                
                
                <TableRow sx={{ '&:hover': { backgroundColor: '#333' } }}>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444'
                  }}>
                    {t('privacypolicy.terms_23_row_4')}
                  </TableCell>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444'
                  }}>
                    {t('privacypolicy.terms_23_resp_4')}
                  </TableCell>
                </TableRow>
                
                
                <TableRow sx={{ '&:hover': { backgroundColor: '#333' } }}>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444'
                  }}>
                    {t('privacypolicy.terms_23_row_5')}
                  </TableCell>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444'
                  }}>
                    {t('privacypolicy.terms_23_resp_5')}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Box>
      
          {/* Note Paragraph */}
          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" sx={{ mt: 3 }}>
            {t('privacypolicy.terms_23_note')}
          </Typography>
        </Box>
      </Box>
      
      {/* 24. Service Availability and Maintenance */}
      <Box my={5}>
        {/* Main Heading with Number */}
        <Box sx={{ display: 'flex', alignItems: 'baseline', mb: 2 }}>
         
          <Typography 
            className='headings-h3 policy_heading ' 
            variant="h5" 
            sx={{ 
              color: '#fcfcfc',
              fontWeight: 600 
            }}
          >
           {t('privacypolicy.terms_24_title')}
          </Typography>
        </Box>
      
        {/*  24.1 Availability Commitments  */}
        <Box sx={{ mb: 6, mt: 4 }}>
          {/* Sub-heading 24.1 */}
          <Typography 
            className='headings-h4' 
            variant="h6" 
            gutterBottom
            sx={{ 
              color: '#fcfcfc',
              fontWeight: 600,
              mb: 3
            }}
          >
            {t('privacypolicy.terms_24_1_title')}
          </Typography>
      
          {/* Introduction Paragraph */}
          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
            {t('privacypolicy.terms_24_text_1')}
          </Typography>
      
          {/* Table Container */}
          <Box sx={{ overflowX: 'auto', mb: 3 }}>
            <Table sx={{ 
              minWidth: 800,
              borderCollapse: 'collapse'
            }}>
              <TableHead>
                <TableRow sx={{ backgroundColor: '#2a2a2a' }}>
                  <TableCell sx={{ 
                    color: '#fcfcfc', 
                    fontWeight: 600,
                    border: '1px solid #444',
                    width: '50%'
                  }}>
                    {t('privacypolicy.terms_24_col_1')}
                  </TableCell>
                  <TableCell sx={{ 
                    color: '#fcfcfc', 
                    fontWeight: 600,
                    border: '1px solid #444',
                    width: '50%'
                  }}>
                    {t('privacypolicy.terms_24_col_2')}
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                
                <TableRow sx={{ '&:hover': { backgroundColor: '#333' } }}>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444'
                  }}>
                    {t('privacypolicy.terms_24_row_1')}
                  </TableCell>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444'
                  }}>
                    {t('privacypolicy.terms_24_impact_1')}
                  </TableCell>
                </TableRow>
                
                
                <TableRow sx={{ '&:hover': { backgroundColor: '#333' } }}>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444'
                  }}>
                    {t('privacypolicy.terms_24_row_2')}
                  </TableCell>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444'
                  }}>
                    {t('privacypolicy.terms_24_impact_2')}
                  </TableCell>
                </TableRow>
                
                
                <TableRow sx={{ '&:hover': { backgroundColor: '#333' } }}>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444'
                  }}>
                    {t('privacypolicy.terms_24_row_3')}
                  </TableCell>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444'
                  }}>
                    {t('privacypolicy.terms_24_impact_3')}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Box>
      
          {/* Final Paragraph */}
          <Typography className='bodyRegularText3 shantellSansFont' variant="body1">
            {t('privacypolicy.terms_24_text_2')}
          </Typography>
        </Box>
      </Box>
      
      {/* 25. Contractual Hierarchy */}
      <Box my={5}>
        {/* Main Heading with Number */}
        <Box sx={{ display: 'flex', alignItems: 'baseline', mb: 2 }}>
          
          <Typography 
            className='headings-h3 policy_heading ' 
            variant="h5" 
            sx={{ 
              color: '#fcfcfc',
              fontWeight: 600 
            }}
          >
           {t('privacypolicy.terms_25_title')}
          </Typography>
        </Box>
      
        {/* Content Section */}
        <Box>
          {/* First Paragraph */}
          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
            {t('privacypolicy.terms_25_text_1')}
          </Typography>
      
          {/* Hierarchy List */}
          <Box component="ol" sx={{ 
            pl: 4, 
            mb: 3,
            '& li': {
              marginBottom: 1
            }
          }}>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.terms_25_item_1')}
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.terms_25_item_2')}
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.terms_25_item_3')}
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              {t('privacypolicy.terms_25_item_4')}
            </Typography>
          </Box>
        </Box>
      </Box>
      
      {/*26. Document Control  */}
      <Box my={5}>
        {/* Main Heading with Number */}
        <Box sx={{ display: 'flex', alignItems: 'baseline', mb: 2 }}>
          
          <Typography 
            className='headings-h3 policy_heading ' 
            variant="h5" 
            sx={{ 
              color: '#fcfcfc',
              fontWeight: 600 
            }}
          >
           {t('privacypolicy.terms_26_title')}
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
                {t('privacypolicy.terms_26_label_1')}
              </Typography>{' '}
              {t('privacypolicy.terms_26_value_1')}
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              <Typography component="span" sx={{ fontWeight: 600 }}>
                {t('privacypolicy.terms_26_label_2')}
              </Typography>{' '}
              {t('privacypolicy.terms_26_value_2')}
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              <Typography component="span" sx={{ fontWeight: 600 }}>
                {t('privacypolicy.terms_26_label_3')}
              </Typography>{' '}
              {t('privacypolicy.terms_26_value_3')}
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              <Typography component="span" sx={{ fontWeight: 600 }}>
                {t('privacypolicy.terms_26_label_4')}
              </Typography>{' '}
              {t('privacypolicy.terms_26_value_4')}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default TermsOfUsePage;