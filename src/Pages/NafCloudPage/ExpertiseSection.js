import React, {useEffect} from 'react';
import { Box, Typography } from '@mui/material';
import CloudMigration from '../../assets/Solutions/Clou-migration.svg';
import CloudSecurity from '../../assets/Solutions/Cloud-security.svg';
import CustomCloudSolutions from '../../assets/Solutions/Custom-cloudSolutions.svg';
import CloudOptimization from '../../assets/Solutions/Cloud-optimization.svg';
import ManagedCloudServices from '../../assets/Solutions/Managed-cloudServices.svg';
import { useTranslation } from 'react-i18next';
import './NafCloud.css';

const ExpertiseSection = () => {
    const { t } = useTranslation();

      useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    

    return (
        <Box className="section-container" sx={{ position: 'relative', p: 0 }}>
            <Box
                sx={{
                    position: 'sticky',
                    top: '50%',
                    zIndex: -1000,
                    py: 2,
                    marginTop: { xs: '50px', sm: '100px', md: '200px' },
                    marginBottom: { xs: '50px', sm: '50px', md: '100px' },
                }}
            >
                <Typography
                    className="expertise-title headings-h2"
                    sx={{ position: 'relative', bottom: '-10px' }}
                    variant="h4"
                    align="center"
                    gutterBottom
                >
                    {t('software.ourExpertise')}
                </Typography>
            </Box>

            <Box className="expertise-maincards-container" style={{ padding: '0px', zIndex: '5' }}>
                <Box className="expertise-sub-cards-container" style={{ padding: '0px' }}>
                    <Box className="expertise-sub-cards">
                        <Box className="expertise-image">
                            <img className="expertise-image" src={CloudMigration} alt="Software Hero Image" />
                        </Box>
                        <Box className="expertise-text-sec">
                            <Typography className="headings-h4" sx={{ textAlign: 'left' }}>
                                {t('software.ExpCardTitile1')}
                            </Typography>
                            <Typography
                                className="bodyRegularText3"
                                sx={{
                                    color: '#C2C2C4',
                                    textAlign: 'left',
                                    maxWidth: '720px',
                                }}
                            >
                                {t('software.ExpCardSubTitile1')}
                            </Typography>
                        </Box>
                    </Box>

                    <Box className="expertise-sub-cards">
                        <Box className="expertise-image">
                            <img className="expertise-image" src={CloudSecurity} alt="Software Hero Image" />
                        </Box>
                        <Box className="expertise-text-sec">
                            <Typography className="headings-h4" sx={{ textAlign: 'left' }}>
                                {t('software.ExpCardTitile2')}
                            </Typography>
                            <Typography
                                className="bodyRegularText3"
                                sx={{
                                    color: '#C2C2C4',
                                    textAlign: 'left',
                                    maxWidth: '720px',
                                }}
                            >
                                {t('software.ExpCardSubTitile2')}
                            </Typography>
                        </Box>
                    </Box>

                    <Box className="expertise-sub-cards">
                        <Box className="expertise-image">
                            <img className="expertise-image" src={CustomCloudSolutions} alt="Software Hero Image" />
                        </Box>
                        <Box className="expertise-text-sec">
                            <Typography className="headings-h4" sx={{ textAlign: 'left' }}>
                                {t('software.ExpCardTitile3')}
                            </Typography>
                            <Typography
                                className="bodyRegularText3"
                                sx={{
                                    color: '#C2C2C4',
                                    textAlign: 'left',
                                    maxWidth: '720px',
                                }}
                            >
                                {t('software.ExpCardSubTitile3')}
                            </Typography>
                        </Box>
                    </Box>
                </Box>

                <Box className="expertise-sub-cards-container2">
                    <Box className="expertise-sub-cards">
                        <Box className="expertise-image">
                            <img className="expertise-image" src={CloudOptimization} alt="Software Hero Image" />
                        </Box>
                        <Box className="expertise-text-sec">
                            <Typography className="headings-h4" sx={{ textAlign: 'left' }}>
                                {t('software.ExpCardTitile4')}
                            </Typography>
                            <Typography
                                className="bodyRegularText3"
                                sx={{
                                    color: '#C2C2C4',
                                    textAlign: 'left',
                                    maxWidth: '720px',
                                }}
                            >
                                {t('software.ExpCardSubTitile4')}
                            </Typography>
                        </Box>
                    </Box>

                    <Box className="expertise-sub-cards">
                        <Box className="expertise-image">
                            <img className="expertise-image" src={ManagedCloudServices} alt="Software Hero Image" />
                        </Box>
                        <Box className="expertise-text-sec">
                            <Typography className="headings-h4" sx={{ textAlign: 'left' }}>
                                {t('software.ExpCardTitile5')}
                            </Typography>
                            <Typography
                                className="bodyRegularText3"
                                sx={{
                                    color: '#C2C2C4',
                                    textAlign: 'left',
                                    maxWidth: '720px',
                                }}
                            >
                                {t('software.ExpCardSubTitile5')}
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default ExpertiseSection;
