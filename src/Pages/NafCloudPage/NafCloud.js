import React, { useEffect } from 'react'
import softwareHeroImg from '../../assets/Solutions/software-hero-svg.jpg'
import { Box, Typography } from '@mui/material'
import './NafCloud.css';
import GridsSection from './GridsSection';
import Specifications from './Specifications';
import ExpertiseSection from './ExpertiseSection';
import  ReadySection  from './ReadySection';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';
import logoUrl from '../../assets/NAF-logo.png'; // Replace with actual logo URL
import SoftwareHeroImg from '../../assets/Solutions/Real-time-sales-analytics.svg'; // Replace with actual logo URL
import SolutionProductForm from '../HomePage/solutionpages/SolutionProductForm';
import NAFCloudVideo from '../../assets/Solutions/NAF-Cloud-System.mp4';

function NafCloud() {
    const { t } = useTranslation();

    useEffect(() => {
        document.title = `NAF Vending Solutions`; // Set tab title

        window.scrollTo(0, 0);
    }, []);

    return (
        <div className='section-container'>
            <Helmet>
                {/* Optimized Title with Primary Keywords */}
                 <title>NAF Cloud System</title> 

                {/* Canonical URL */}
                <link rel="canonical" href="https://vendinaf.com/en/solutions" />

                {/* Optimized Meta Description */}
                <meta
                    name="description"
                    content="Das NAF Cloud-System ist eine intelligente Vending-Plattform mit Echtzeit-Analysen, Bestandsverwaltung, Fernüberwachung und sicherem Cloud-Betrieb."
                />
                <meta name='keywords'
                content='NAF Cloud-System, Vending Software, intelligente Verkaufsautomaten, Verkaufsautomaten Management, Echtzeit Verkaufsanalysen, Bestandsverwaltung Automaten, Fernüberwachung Automaten, Cloud Vending Plattform, CRM Vending, automatisierte Steuerberichte'
             />

                {/* Meta Author and Robots */}
                <meta name="author" content="NAF Vending" />
                <meta name="robots" content="index, follow" />

                {/* HTML Lang */}
                <html lang="de" />

                {/* Open Graph Tags for Social Sharing */}
                <meta property="og:title" content="NAF Germany: AI Vending Software & Cloud Management" />
                <meta
                    property="og:description"
                    content="Discover advanced vending software from NAF – AI-powered for inventory tracking, remote monitoring, and eco-friendly optimizations tailored for businesses."
                />
                <meta property="og:image" content={SoftwareHeroImg} />
                <meta property="og:url" content="https://vendinaf.com/en/solutions" />
                <meta property="og:type" content="website" />

                {/* Twitter Card Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="NAF Germany: AI Vending Software & Cloud Management" />
                <meta
                    name="twitter:description"
                    content="Discover advanced vending software from NAF – AI-powered for inventory tracking, remote monitoring, and eco-friendly optimizations tailored for businesses."
                />
                <meta name="twitter:image" content={SoftwareHeroImg} />

                {/* Structured Data (JSON-LD) for Rich Snippets – SoftwareApplication with Breadcrumb */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "SoftwareApplication",
                        "name": "NAF Vending Software",
                        "applicationCategory": "BusinessApplication",
                        "operatingSystem": "Android, AWS, NAYAX",
                        "description": "AI-powered vending software for cloud-based management, real-time analytics,  telemetry, and energy efficiency. Optimize inventory, reduce waste, and monitor remotely for sustainable operations.",
                        "offers": {
                            "@type": "Offer",
                            "price": "Contact for Pricing",
                            "priceCurrency": "EUR"
                        },
                        "publisher": {
                            "@type": "Organization",
                            "name": "NAF Germany",
                            "logo": {
                                "@type": "ImageObject",
                                "url": { logoUrl } // logo url
                            }
                        },
                        "breadcrumb": {
                            "@type": "BreadcrumbList",
                            "itemListElement": [
                                {
                                    "@type": "ListItem",
                                    "position": 1,
                                    "name": "Home",
                                    "item": "https://vendinaf.com/en"
                                },
                                {
                                    "@type": "ListItem",
                                    "position": 2,
                                    "name": "Software",
                                    "item": "https://vendinaf.com/en/software"
                                }
                            ]
                        },
                        "keywords": "AI vending software, cloud vending management, real-time vending analytics, sustainable vending telemetry"
                    })}
                </script>
            </Helmet>
            <Box className='softwarepage-main-container'>
                <Box className='software-herosection'>
                    <Typography variant='h1' className='headings-h1 maintext' sx={{ color: '#FCFCFC' }}>
                        {t('software.heroTitle')}
                    </Typography>
                    <Typography className='bodyRegularText3 maintext   maintext1' sx={{ color: '#C2C2C4', mt:{xs:2}, }}>
                        {t('software.heroSubTitle')}
                    </Typography>
                </Box>
                <Box className="laptop-img-sec">
                    <video className='software-hero-video' 
                    
                    src={NAFCloudVideo} 
                    alt="NAF : Streamline Vending Operations with Our Innovative Software."
                     autoPlay 
                     muted 
                     loop 
                     Inline />
                </Box>
            </Box>

            <Box className="section-container" sx={{ width: '100%',p:0, margin: '200px 0' }}>
                <Box className='software-intro-sec'>
                    <Typography className="herotitle headings-h2" variant="h2" sx={{ color: "#FCFCFC" }}>
                        {t('software.introducingcloud')}
                    </Typography>
                    <Typography className="bodyRegularText3 bodyMediumText2 " variant="body1" sx={{ color: "#C2C2C4", width: '70%' }} >
                        {t('software.introducingcloudSubtitle')}
                    </Typography>
                </Box>
                <GridsSection />
            </Box>

            <Specifications />
            <ExpertiseSection />
            <Box sx={{ mt: { xs: 8, md: 25 }, mb: 8 }} id="contact"></Box>
            <SolutionProductForm/>
                
        <Box/>
        </div>
    )
}

export default NafCloud;