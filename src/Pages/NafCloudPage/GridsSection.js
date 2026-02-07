import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Box, Typography,useMediaQuery } from '@mui/material';
import SoftwareSystemIcon1 from '../../assets/Solutions/Real-time-sales-analytics.svg';
import SoftwareSystemIcon2 from '../../assets/Solutions/Intelligent-inventory-management.jpg';
import SoftwareSystemIcon3 from '../../assets/Solutions/Targeted-advertising-capabilities.svg';
import SoftwareSystemIcon4 from '../../assets/Solutions/Remote-machine-monitoring.jpg'
import SoftwareSystemIcon5 from '../../assets/Solutions/Customer-relationship-management.svg';
import SoftwareSystemIcon6 from '../../assets/Solutions/Automated-tax-reporting.svg';
import SoftwareSystemIcon7 from '../../assets/Solutions/Secure-insfrastructure.svg';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@mui/material/styles';
import { useEffect } from 'react';



const GridsSection = () => {
    const { t } = useTranslation();
    const [openImage, setOpenImage] = React.useState(null); // to track clicked image
    const theme = useTheme();

    const handleImageClick = (src) => {
        setOpenImage(src);
    };

    const handleOverlayClick = () => {
        setOpenImage(null);
    };


    

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: '#262626',
        color: '#fff',
       padding: "31px 31.77px 32px 30.77px",
        textAlign: 'center',
        borderRadius: '24px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        height: '100%', // Make each card fill the grid item height
        display: 'flex',
        gap:'50px',
        
        flexDirection: 'column',
        justifyContent: 'space-between',
    }));
    
    const renderGridItem = (icon, titleKey, subTitleKey, altText) => (
        <Item sx={{flexGrow:1,}} className='bentogrid-item'>
            <Box className="bentogrid-image-sec" onClick={() => handleImageClick(icon)} style={{ cursor: 'pointer' }}>
                <img src={icon} className='soft-ware-icon' loading="lazy" alt={altText}/>
            </Box>
            <Box className="bentogrid-text-sec">
                <Typography className='headings-h4' sx={{ textAlign: 'left' }}>{t(titleKey)}</Typography>
                <Typography className='bodyRegularText3' sx={{ color: '#C2C2C4', textAlign: 'left', maxWidth: '720px' }}>
                    {t(subTitleKey)}
                </Typography>
            </Box>
        </Item>
    );
    const isXs = useMediaQuery(theme.breakpoints.down('sm'));

      useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    

    return (
        <div className="bentogrid-container" style={{ padding: '0px' }}>
            <Grid container  spacing={ 1 }  sx={{ width: '100%' }}>
                <Grid item xs={12} sm={6} lg={4}>
                    {renderGridItem(SoftwareSystemIcon1, 'software.bentoTitle1', 'software.bentoSubTitle1', 'Real-Time Vending Machine Sales Analytics')}
                </Grid>
                <Grid item xs={12} sm={6} lg={8}>
                    {renderGridItem(SoftwareSystemIcon2, 'software.bentoTitle2', 'software.bentoSubTitle2', 'Intelligent Inventory Management')}
                </Grid>
                <Grid item xs={12} sm={6} lg={6}>
                    {renderGridItem(SoftwareSystemIcon3, 'software.bentoTitle3', 'software.bentoSubTitle3', 'Targeted Advertising')}
                </Grid>
                <Grid item xs={12} sm={6} lg={6}>
                    {renderGridItem(SoftwareSystemIcon4, 'software.bentoTitle4', 'software.bentoSubTitle4', 'Remote Monitoring')}
                </Grid>
                <Grid item xs={12} sm={6} lg={4}>
                    {renderGridItem(SoftwareSystemIcon5, 'software.bentoTitle5', 'software.bentoSubTitle5', 'Customer Relationship')}
                </Grid>
                <Grid item xs={12} sm={6} lg={4}>
                    {renderGridItem(SoftwareSystemIcon6, 'software.bentoTitle6', 'software.bentoSubTitle6', 'Automated Tax Reporting')}
                </Grid>
                <Grid item xs={12} sm={6} lg={4}>
                    {renderGridItem(SoftwareSystemIcon7, 'software.bentoTitle7', 'software.bentoSubTitle7', 'Secure Infrastructure')}
                </Grid>
            </Grid>

            {/* Fullscreen Image Overlay */}
            {openImage && (
                <Box
                    onClick={handleOverlayClick}
                    sx={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'rgba(0, 0, 0, 0.8)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        zIndex: 1300,
                    }}
                >
                    {/* Close Button */}
                    <Box
                        onClick={handleOverlayClick}
                        sx={{
                            position: 'absolute',
                            top: '20px',
                            right: '30px',
                            fontSize: '32px',
                            color: '#fff',
                            cursor: 'pointer',
                            zIndex: 1400,
                            fontWeight: 'bold',
                        }}
                    >
                        ×
                    </Box>

                    {/* Enlarged Image */}
                    <img
                        src={openImage}
                        alt="Enlarged Preview"
                        loading="lazy"
                        style={{
                            height: '75%',
                            width: '75%',
                            borderRadius: '8px',
                            zIndex: 1350,
                        }}
                        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image
                    />
                </Box>
            )}

        </div>
    );
};

export default GridsSection;
