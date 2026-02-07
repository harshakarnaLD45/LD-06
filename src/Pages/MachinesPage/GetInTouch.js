import { Box, Typography } from "@mui/material";
import React from "react";
import NafIcon1 from '../../assets/Machines/star.svg'
import Suitlady from '../../assets/Machines/Odette-lamkhizni.svg'
import { useTranslation } from "react-i18next";

const GetinTouch = () => {
  const { t,i18n } = useTranslation();
  const marqueeText = t('machines.contactUs');

    React.useEffect(() => {
   
  }, [i18n.language, t]);

  // Create content for both marquees
  const marqueeContent = (
    <>
      <Typography
        variant="h3"
        className="headings-h1"
        sx={{
          color: "#393939",
          whiteSpace: "nowrap",
          textTransform: 'uppercase'
        }}
      >
        {marqueeText}
      </Typography>
      <Box
        component="img"
        src={NafIcon1}
        alt="Star"
        sx={{
          width: { xs: "30px", sm: "40px", md: "50px" },
          height: { xs: "30px", sm: "40px", md: "50px" },
          mx: { xs: "20px", sm: "50px", md: "70px" },
          objectFit: "contain",
          aspectRatio: "1/1",
        }}
      />
    </>
  );

  // Create arrays for repeated content
 const leftScrollContent = Array.from({ length: 10 }).map((_, i) => (
  <React.Fragment key={`left-${i}`}>
    {marqueeContent}
  </React.Fragment>
));

const rightScrollContent = Array.from({ length: 10 }).map((_, i) => (
  <React.Fragment key={`right-${i}`}>
    {marqueeContent}
  </React.Fragment>
));


  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
      }}>
      <Box
        sx={{
          position: "relative",
          width: "100%",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          py: "1rem",
          pt: "5rem",
          mt: { xs: "5vh", sm: "5vh", md: "3vh" },
        }}
      >
        {/* Left-scrolling marquee */}
        <Box
          sx={{
            width: "100%",
            height: { xl: "90px", lg: "65px", },
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              animation: "marqueeLeft 30s linear infinite",
              whiteSpace: "nowrap",
              "@keyframes marqueeLeft": {
                "0%": { transform: "translateX(0)" },
                "100%": { transform: "translateX(-20%)" },
              },
            }}
          >
            {leftScrollContent}
          </Box>
        </Box>

        {/* Right-scrolling marquee */}
        <Box
          sx={{
            width: "100%",
            height: { xl: "90px", lg: "65px", },
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              animation: "marqueeRight 30s linear infinite",
              whiteSpace: "nowrap",
              "@keyframes marqueeRight": {
                "0%": { transform: "translateX(-20%)" },
                "100%": { transform: "translateX(0)" },
              },
            }}
          >
            {rightScrollContent}
          </Box>
        </Box>
        {/* Centered Suitlady image */}
        <Box
          component="img"
          src={Suitlady}
          alt="Lady"
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: '100%',
            height: '100%',
            objectFit: "contain",
            aspectRatio: "16/27",
            zIndex: 1,
            pointerEvents: "none", // Prevents interaction with the image
          }}
        />
      </Box>
    </Box>
  );
};

export default GetinTouch;