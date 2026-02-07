import { Box, Typography } from "@mui/material";
import React from "react";

import NafIcon from '../../assets/Home/naf-icon.svg'
import { useTranslation } from "react-i18next";

const MarqTextScroll = () => {
  const { t } = useTranslation();
  const marqueeText = t('machines.EXPLOREOURVENDINGMACHINES');

  const repeatedContent = Array(10) // Increased to 10 for smoother looping
    .fill(
      <>
        <Typography
          variant="h3"
          className="headings-h3"
          sx={{
            color: "#9D9EA1",
            whiteSpace: "nowrap",
            textTransform: 'uppercase'
          }}
        >
          {marqueeText}
        </Typography>
        <Box
          component="img"
          src={NafIcon}
          alt="Star"
          sx={{
            width: { xs: "30px", sm: "40px", md: "50px" }, // Adjust width for different breakpoints
            height: { xs: "30px", sm: "40px", md: "50px" }, // Adjust height for different breakpoints
            mx: { xs: "20px", sm: "50px", md: "70px" }, // Adjust horizontal margin for responsiveness
            objectFit: "contain",
            aspectRatio: "1/1",
          }}
        />
      </>
    );

  return (
    <Box
      className="maruecontainer"
      sx={{
        position: "relative",
        width: "100%",
        height: "65px",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        py: "3rem",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          animation: "marquee 20s linear infinite",
          whiteSpace: "nowrap",
          "@keyframes marquee": {
            "0%": { transform: "translateX(0)" },
            "100%": { transform: "translateX(-10%)" }, // Adjusted for 10 repetitions (100% / 10)
          },
        }}
      >
        {repeatedContent}
      </Box>
    </Box>
  );
};

export default MarqTextScroll;