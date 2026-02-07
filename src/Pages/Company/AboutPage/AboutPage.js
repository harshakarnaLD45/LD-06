import React, { useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import './AboutPage.css';
import StarIcon from '../../../assets/About/Vector.svg';
import TextSection from './TextSection';
import TeamSection from './TeamSection';
import AwardsSection from './AwardsSection';
import ValuesSection from './ValuesSection';
import { useTranslation } from 'react-i18next';
import NAF1Image from '../../../assets/About/NAF1.svg';
import NAF2Image from '../../../assets/About/NAF2.svg';
import NAF3Image from '../../../assets/About/NAF3.svg';
import { motion } from 'framer-motion';
import SmallVideo from '../../../assets/Home/NAF-showreel.mp4';
import AboutGrid from './AboutGrid';
import { Helmet } from 'react-helmet';

function AboutPage() {
    const { t } = useTranslation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <Box>

            {/* SEO + Meta Tags */}
            <Helmet htmlAttributes={{ lang: "en" }}>
                <title>NAF About Us</title>

                <link rel="canonical" href="https://vendinaf.com/en/company/about" />

                <meta
                    name="description"
                    content="NAF Deutschland ist ein innovativer Anbieter von Verkaufsautomaten, der smarte Technologie, zuverlässige Hardware und nachhaltige Food-Systeme vereint.
"
                />

                <meta name='keywords'
                content='NAF Deutschland, Über NAF, Verkaufsautomaten Hersteller, innovative Verkaufsautomaten, smarte Automatenlösungen, Food Automaten, automatisierte Gastronomie, nachhaltige Verkaufsautomaten, KI Automaten, New Age of Food, Verkaufsautomaten Deutschland' 
                />

                <meta name="author" content="NAF Vending" />
                <meta name="robots" content="index, follow" />

                {/* Open Graph */}
                <meta property="og:title" content="NAF Germany: About AI Vending Innovations" />
                <meta
                    property="og:description"
                    content="Explore the story behind NAF Germany, from fine dining roots to cutting-edge AI vending technology and eco-friendly solutions."
                />
                <meta property="og:image" content="https://vendinaf.com/about-hero.jpg" />
                <meta property="og:url" content="https://vendinaf.com/en/company/about" />
                <meta property="og:type" content="website" />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="NAF Germany: About AI Vending Innovations" />
                <meta
                    name="twitter:description"
                    content="Discover our vision and innovation behind NAF Germany's AI-powered vending systems."
                />
                <meta name="twitter:image" content="https://vendinaf.com/about-hero.jpg" />

                {/* JSON-LD Structured Data */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "AboutPage",
                        "name": "About NAF Germany",
                        "description": "NAF Germany is a leader in AI-powered vending machines, combining culinary expertise with sustainable technology.",
                        "mainEntity": {
                            "@type": "Organization",
                            "name": "NAF Germany",
                            "url": "https://vendinaf.com",
                            "logo": "https://vendinaf.com/logo.png",
                            "founder": [
                                { "@type": "Person", "name": "Odette Lamkhizni" },
                                { "@type": "Person", "name": "Abdelilah Lamkhizni" }
                            ],
                            "address": {
                                "@type": "PostalAddress",
                                "streetAddress": "Obere Straße 3",
                                "addressLocality": "Freiberg, OT Halsbach",
                                "postalCode": "09599",
                                "addressCountry": "Germany"
                            },
                            "contactPoint": {
                                "@type": "ContactPoint",
                                "telephone": "+49-152-28387141",
                                "contactType": "customer service",
                                "email": "info@naf-halsbach.de"
                            }
                        }
                    })}
                </script>
            </Helmet>

            {/* Hero Section */}
            <Box className="about-page-container">

                {/* Letter Images */}
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        mb: { xs: '3rem', md: '5rem' },
                        flexWrap: 'wrap',
                    }}
                >
                    {[
                        { src: NAF1Image, alt: 'NAF Silver Balloon Letter N' },
                        { src: NAF2Image, alt: 'NAF Silver Balloon Letter A' },
                        { src: NAF3Image, alt: 'NAF Silver Balloon Letter F' }
                    ].map((img, index) => (
                        <motion.img
                            key={index}
                            src={img.src}
                            alt={img.alt}
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{
                                delay: index * 0.2,
                                duration: 0.5,
                                type: 'spring',
                                stiffness: 100
                            }}
                            whileHover={{
                                scale: 1.2,
                                rotate: [0, -5, 5, 0],
                                transition: { duration: 0.4 }
                            }}
                            className="about-naf-img-let"
                            style={{ cursor: 'pointer' }}
                        />
                    ))}
                </Box>

                {/* Row 1 */}
                <Box className="about-container">
                    <Typography className="headings-h1 responsive-text white-text">
                        {t('about.heroTitleline1')}
                    </Typography>
                    <img src={StarIcon} alt="decorative star icon" className="star-icon" />
                    <Typography className="bodyRegularText3 white-text description">
                        {t('about.heroSubTitleline')}
                    </Typography>
                </Box>

                {/* Row 2 */}
                <Box className="about-container">
                    <Typography className="headings-h1 responsive-text green-text">
                        NEW AGE OF FOOD,
                    </Typography>
                    <Typography className="headings-h1 responsive-text white-text">
                        {t('about.YOUR')}
                    </Typography>
                </Box>

                {/* Row 3 */}
                <Box className="about-container">
                    <Typography className="headings-h1 responsive-text white-text">
                        {t('about.heroTitleline3')}
                    </Typography>
                </Box>

                {/* Row 4 */}
                <Box className="about-container">
                    <Typography className="headings-h1 responsive-text white-text">
                        {t('about.heroTitleline4')}
                    </Typography>

                    <Box
                        sx={{
                            width: '100%',
                            maxWidth: '355px',
                            maxHeight: '150px',
                            aspectRatio: '16 / 9',
                            borderRadius: 100,
                            overflow: 'hidden',
                            display: { xs: 'none', sm: 'block', md: 'block' }
                        }}
                    >
                        <video
                            src={SmallVideo}
                            title="NAF promotional showreel"
                            autoPlay
                            muted
                            loop
                            playsInline
                            preload="metadata"
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            
                        />
                    </Box>
                </Box>

                {/* Subtitle */}
                <Typography className="bodyRegularText3 white-text description1">
                    {t('about.heroSubTitleline')}
                </Typography>
            </Box>

            {/* Sections */}
            <AboutGrid />
            <TextSection />
            <TeamSection />
            <AwardsSection />
            <ValuesSection />
        </Box>
    );
}

export default AboutPage;