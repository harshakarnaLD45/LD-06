import { Box, Typography } from '@mui/material';
import React, {useEffect} from 'react';
import { useTranslation } from 'react-i18next';

function Specifications() {
  const { t } = useTranslation();
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  

  return (
    <Box className="section-container" sx={{ p: 0 }}>
      <Typography
        className="headings-h2"
        variant="h4"
        sx={{ color: '#FCFCFC', marginBottom: '20px', textAlign: 'left' }}
      >
        {t('software.Specifications')}
      </Typography>

      <hr className="software-hr" style={{ margin: '50px 0', width: '100%' }} />

      {/* Sales Performance */}
      <Box className="software-specifications-items" sx={{ display: 'flex' }}>
        <Box className="spec-title-sec">
          <Typography
            className="headings-h4"
            variant="h6"
            sx={{ color: '#FCFCFC', marginBottom: '10px' }}
          >
            {t('software.SalesPerformance')}
          </Typography>
        </Box>

        <Box className="spec-text-sec">
          <Typography className="bodyRegularText3" variant="body2" sx={{ color: '#C2C2C4' }}>
            {t('software.salespoints1')}
          </Typography>
          <Typography className="bodyRegularText3" variant="body2" sx={{ color: '#C2C2C4' }}>
            {t('software.salespoints2')}
          </Typography>
          <Typography className="bodyRegularText3" variant="body2" sx={{ color: '#C2C2C4' }}>
            {t('software.salespoints3')}
          </Typography>
          <Typography className="bodyRegularText3" variant="body2" sx={{ color: '#C2C2C4' }}>
            {t('software.salespoints4')}
          </Typography>
        </Box>
      </Box>

      <hr className="software-hr" style={{ margin: '50px 0' }} />

      {/* Machines */}
      <Box className="software-specifications-items" sx={{ display: 'flex' }}>
        <Box className="spec-title-sec">
          <Typography
            className="headings-h4"
            variant="h6"
            sx={{ color: '#FCFCFC', marginBottom: '10px' }}
          >
            {t('software.Machines')}
          </Typography>
        </Box>

        <Box className="spec-text-sec">
          <Typography className="bodyRegularText3" variant="body2" sx={{ color: '#C2C2C4' }}>
            {t('software.machinepoints1')}
          </Typography>
          <Typography className="bodyRegularText3" variant="body2" sx={{ color: '#C2C2C4' }}>
            {t('software.machinepoints2')}
          </Typography>
          <Typography className="bodyRegularText3" variant="body2" sx={{ color: '#C2C2C4' }}>
            {t('software.machinepoints3')}
          </Typography>
          <Typography className="bodyRegularText3" variant="body2" sx={{ color: '#C2C2C4' }}>
            {t('software.machinepoints4')}
          </Typography>
          <Typography className="bodyRegularText3" variant="body2" sx={{ color: '#C2C2C4' }}>
            {t('software.machinepoints5')}
          </Typography>
          <Typography className="bodyRegularText3" variant="body2" sx={{ color: '#C2C2C4' }}>
            {t('software.machinepoints6')}
          </Typography>
          <Typography className="bodyRegularText3" variant="body2" sx={{ color: '#C2C2C4' }}>
            {t('software.machinepoints7')}
          </Typography>
        </Box>
      </Box>

      <hr className="software-hr" style={{ margin: '50px 0' }} />

      {/* Products */}
      <Box className="software-specifications-items" sx={{ display: 'flex' }}>
        <Box className="spec-title-sec">
          <Typography
            className="headings-h4"
            variant="h6"
            sx={{ color: '#FCFCFC', marginBottom: '10px' }}
          >
            {t('software.Products')}
          </Typography>
        </Box>

        <Box className="spec-text-sec">
          <Typography className="bodyRegularText3" variant="body2" sx={{ color: '#C2C2C4' }}>
            {t('software.Productspoints1')}
          </Typography>
          <Typography className="bodyRegularText3" variant="body2" sx={{ color: '#C2C2C4' }}>
            {t('software.Productspoints2')}
          </Typography>
          <Typography className="bodyRegularText3" variant="body2" sx={{ color: '#C2C2C4' }}>
            {t('software.Productspoints3')}
          </Typography>
          <Typography className="bodyRegularText3" variant="body2" sx={{ color: '#C2C2C4' }}>
            {t('software.Productspoints4')}
          </Typography>
          <Typography className="bodyRegularText3" variant="body2" sx={{ color: '#C2C2C4' }}>
            {t('software.Productspoints5')}
          </Typography>
          <Typography className="bodyRegularText3" variant="body2" sx={{ color: '#C2C2C4' }}>
            {t('software.Productspoints6')}
          </Typography>
          <Typography className="bodyRegularText3" variant="body2" sx={{ color: '#C2C2C4' }}>
            {t('software.Productspoints7')}
          </Typography>
          <Typography className="bodyRegularText3" variant="body2" sx={{ color: '#C2C2C4' }}>
            {t('software.Productspoints8')}
          </Typography>
        </Box>
      </Box>

      <hr className="software-hr" style={{ margin: '50px 0' }} />

      {/* User */}
      <Box className="software-specifications-items" sx={{ display: 'flex' }}>
        <Box className="spec-title-sec">
          <Typography
            className="headings-h4"
            variant="h6"
            sx={{ color: '#FCFCFC', marginBottom: '10px' }}
          >
            {t('software.user')}
          </Typography>
        </Box>

        <Box className="spec-text-sec">
          <Typography className="bodyRegularText3" variant="body2" sx={{ color: '#C2C2C4' }}>
            {t('software.userpoints1')}
          </Typography>
          <Typography className="bodyRegularText3" variant="body2" sx={{ color: '#C2C2C4' }}>
            {t('software.userpoints2')}
          </Typography>
          <Typography className="bodyRegularText3" variant="body2" sx={{ color: '#C2C2C4' }}>
            {t('software.userpoints3')}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Specifications;
