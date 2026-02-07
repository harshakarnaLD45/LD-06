import React, { useEffect } from 'react'; 
import { Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import "./privacypolicy.css"; // Assuming this contains your shared styles

const ImprintsPage = () => {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);

  const renderLink = (href, text) => (
    <li>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: '#FCFCFC', textDecoration: 'underline', cursor: 'pointer' }}
        className="bodyRegularText3 shantellSansFont"
      >
        {text}
      </a>
    </li>
  );

  const renderTextList = (keys) => keys.map((key, index) => (
    <Typography key={index} className="bodyRegularText3 shantellSansFont" variant="body1" sx={{ mb: 1 }}>
      {t(key)}
    </Typography>
  ));

  return (
    <Box  className="section-container" >
      
      {/* Header */}
      <Typography className="headings-h1" variant="h3" gutterBottom>
        {t('imprints.imprintTitle')}
      </Typography>

      {/* Sections */}
      <Box my={5}>
        <Typography className='headings-h4' variant="h5" gutterBottom>{t('imprints.companyNameTitle')}</Typography>
        <Typography className='bodyRegularText3 shantellSansFont' variant="body1">{t('imprints.companyName')}</Typography>
      </Box>

      <Box my={5}>
        <Typography className='headings-h4' variant="h5" gutterBottom>{t('imprints.registeredAddressTitle')}</Typography>
        <Typography className='bodyRegularText3 shantellSansFont' variant="body1">{t('imprints.registeredAddressLine1')}</Typography>
        <Typography className='bodyRegularText3 shantellSansFont' variant="body1">{t('imprints.registeredAddressLine2')}</Typography>
      </Box>

      <Box my={5}>
        <Typography className='headings-h4' variant="h5" gutterBottom>{t('imprints.representedByTitle')}</Typography>
        <Typography className='bodyMediumText2 shantellSansFont' color={'#C2C2C4'}  variant="body1"><span>{t('imprints.managingDirector')}</span>{t('imprints.managingDirectorText')}</Typography>
        <Typography className='bodyMediumText2 shantellSansFont'  color={'#C2C2C4'} variant="body1"><span>{t('imprints.ceo')}</span>{t('imprints.ceoText')}</Typography>
      </Box>

      <Box my={5}>
        <Typography className='headings-h4' variant="h5" gutterBottom>{t('imprints.contactTitle')}</Typography>
        <Typography className='bodyMediumText2 shantellSansFont' color={'#C2C2C4'} variant="body1"><span>{t('imprints.emailLabel')}</span>{t('imprints.emailAddress')}</Typography>
        <Typography className='bodyMediumText2 shantellSansFont' color={'#C2C2C4'} variant="body1"><span>{t('imprints.phoneLabel')}</span>{t('imprints.phoneNumber')}</Typography>
      </Box>

      <Box my={5}>
        <Typography className='headings-h4' variant="h5" gutterBottom>{t('imprints.commercialRegisterTitle')}</Typography>
        <Typography className='bodyRegularText3 shantellSansFont' variant="body1">{t('imprints.registeredAtCourt')}</Typography>
        <Typography className='bodyRegularText3 shantellSansFont' variant="body1">{t('imprints.registrationNumberLabel')}: {t('imprints.registrationNumber')}</Typography>
      </Box>

      <Box my={5}>
        <Typography className='headings-h4' variant="h5" gutterBottom>{t('imprints.vatIdTitle')}</Typography>
        <Typography className='bodyRegularText3 shantellSansFont' variant="body1">{t('imprints.vatIdNumber')}</Typography>
      </Box>

      <Box my={5}>
        <Typography className='headings-h4' variant="h5" gutterBottom>{t('imprints.responsibleForContentTitle')}</Typography>
        <Typography className='bodyRegularText3 shantellSansFont' variant="body1">{t('imprints.responsiblePersonName')}</Typography>
      </Box>

      <Box my={7}>
        <Typography className='headings-h4' variant="h5" gutterBottom>{t('imprints.disputeResolutionTitle')}</Typography>
        <Typography className='bodyRegularText3 shantellSansFont' variant="body1" sx={{ mb: 1 }}>
          {t('imprints.disputeResolutionText1')}
          <a href={t('imprints.odrLink')} target="_blank" rel="noopener noreferrer" style={{ color: '#FCFCFC', textDecoration: 'underline', cursor: 'pointer' }}>
            {t('imprints.odrLink')}
          </a>
        </Typography>
        {renderTextList(['imprints.disputeResolutionText2','imprints.disputeResolutionText3'])}
      </Box>

      <Box my={5}>
        <Typography className='headings-h4' variant="h5" gutterBottom>{t('imprints.liabilityContentTitle')}</Typography>
        {renderTextList([
          'imprints.liabilityContentText',
          'imprints.liabilityContentText1',
          'imprints.liabilityContentText2',
          'imprints.liabilityContentText3'
        ])}
      </Box>

      <Box my={5}>
        <Typography className='headings-h4' variant="h5" gutterBottom>{t('imprints.liabilityLinksTitle')}</Typography>
        {renderTextList([
          'imprints.liabilityLinksText',
          'imprints.liabilityLinksText1',
          'imprints.liabilityLinksText2'
        ])}
      </Box>

      <Box my={5}>
        <Typography className='headings-h4' variant="h5" gutterBottom>{t('imprints.copyrightTitle')}</Typography>
        {renderTextList([
          'imprints.copyrightText',
          'imprints.copyrightText1',
          'imprints.copyrightText2'
        ])}
      </Box>

      <Box my={5}>
        <Typography className='headings-h4' variant="h5" gutterBottom>{t('imprints.imageCreditsTitle')}</Typography>
        <Typography className='bodyRegularText3 shantellSansFont' variant="body1">{t('imprints.imageCreditsText')}</Typography>
        <ul>
          {renderLink("https://unsplash.com/", t('imprints.unsplash'))}
          {renderLink("https://pexels.com/", t('imprints.pexels'))}
          {renderLink("https://freepik.com/", t('imprints.freepik'))}
          {renderLink("https://thenounproject.com/", t('imprints.nounProject'))}
        </ul>
      </Box>

      <Box my={5}>
        <Typography className='headings-h4' variant="h5" gutterBottom>{t('imprints.designImplementationTitle')}</Typography>
        <Typography className='bodyRegularText3 shantellSansFont' variant="body1">{t('imprints.designImplementationText')}</Typography>
      </Box>

    </Box>
  );
};

export default ImprintsPage;
