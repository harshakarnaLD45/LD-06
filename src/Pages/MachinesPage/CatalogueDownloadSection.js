import React from "react";
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import { useTranslation } from 'react-i18next';
import catalogueImage from "../../assets/Machines/catalogue.png";
import AnimateButton from "../../Components/CommonComponents/AnimateButton";
import CATPDF from '../../assets/Machines/NAF-automaten-catalogue.pdf';

const CatalogueDownloadSection = () => {
    const { t } = useTranslation();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <Box className='section-container'>
            <Box
                sx={{
                    position: "relative",
                    backgroundColor: "#393939",
                    borderRadius: "24px",
                    padding: { xs: "40px 20px", md: "80px 40px" }, // Extra bottom padding for image space
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    flexDirection: { md: "row" },
                    gap: "30px",
                    overflow: "hidden",
                }}
            >
                {/* Text */}
                <Box sx={{ flex: 1 }}>
                    <Typography
                        variant="h3"
                        className="headings-h2"
                        sx={{ color: "#FCFCFC" }}
                    >
                        {t('catalogue.titleLine1')} <br /> {t('catalogue.titleLine2')}
                    </Typography>
                </Box>

                {/* Download Button */}
                <Box>
                    <a
                        href={CATPDF}
                        download="NAF_Automaten_Katalog.pdf"
                        style={{ textDecoration: "none" }}
                    >
                        <AnimateButton text1={t('AnimateBtn.Download')} text2={t('AnimateBtn.now')} />
                    </a>
                </Box>

                {/* Centered Bottom Image */}
                <Box
                    sx={{
                        position: "absolute",
                        bottom: -20, // Push image slightly outside the box
                        left: "60%",
                        transform: "translateX(-50%)", // Center horizontally
                        zIndex: 1,
                        display: {
                            xs: 'none', sm: 'none', md: 'none', lg: 'block'
                        }
                    }}
                >
                    <img
                        src={catalogueImage}
                        alt="Catalogue"
                        style={{
                            width: isMobile ? "180px" : "250px",
                            borderRadius: "16px",
                        }}
                    />
                </Box>
            </Box>
        </Box >
    );
};

export default CatalogueDownloadSection;
