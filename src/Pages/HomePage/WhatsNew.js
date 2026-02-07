import { Box, Typography } from "@mui/material";
import React, {useEffect} from 'react';
import "../../Pages/HomePage/HomePage.css";
import AnimateButton from "../../Components/CommonComponents/AnimateButton";
import ScrollManualLinesHeadings from "../../Components/CommonComponents/ScrollMaskHeadings";
import { useTranslation } from "react-i18next";
import BlogHover from "../Insights/BlogHover";

const WhatsNew = () => {
  const { t } = useTranslation();

  const handleBlogClick = () => {
    window.open("https://blog.vendinaf.com/de", "_blank");
  };


  return (
    <Box sx={{ position: "relative" }} className='section-container'>
      {/* Title Section */}
      <Box className='whatsnewcontainer' sx={{
        mb: {xs:2 ,sm:4,md:8},
        display: 'flex',
        alignItems: 'center',
        gap: 1,
        flexWrap: { xs: 'nowrap', md: 'nowrap' }
      }}>
        {/* <Typography variant='h2' className='headings-h2' sx={{ color: '#FCFCFC' }}>
          What's New
        </Typography> */}

        <Box
          sx={{
            flexGrow: 1,
            minWidth: 0, // Important for flexbox ellipsis
            color: '#FCFCFC',
            maxWidth: { xs: '190px', sm: '100%' },
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap'
          }}
        >
          <ScrollManualLinesHeadings text={t('Home.WhatsNew')} />
        </Box>
        <Box className="animate-div" onClick={() => handleBlogClick()}>
          <AnimateButton text1={t('AnimateBtn.view')} text2={t('AnimateBtn.more')} />
        </Box>
      </Box>
      <BlogHover />
    </Box>
  );
};

export default WhatsNew;