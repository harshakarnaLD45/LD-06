import { Box, Stack, Typography, Grid } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";

const TextSection = () => {
  const { t } = useTranslation();

  // Company information paragraphs
  const aboutParagraphs = [
    t('about.AboutText1'),
    t('about.AboutText2'),
    t('about.AboutText3'),
  ];

  const missionParagraphs = [
    t('about.missionText1'),
    // "Our commitment extends beyond just providing products. We are passionate about delivering exceptional service, building lasting relationships with our clients, and continuously improving our offerings to meet the evolving needs of the vending industry.",
  ];

  const visionParagraphs = [
    t('about.visionText1'),
    // "We envision a future where vending machines are not just a source of quick snacks, but a valuable asset for businesses, providing employees and customers with access to high-quality products and innovative solutions that enhance their daily lives. We are committed to leading the way in this transformation.",
  ];

  return (
    <Box className="section-container" sx={{ px: { xs: 2, sm: 4, md: 6 } }}>
      {/* First Section: About */}
      <Grid container spacing={4} mb={10}>
        {/* Title and Paragraphs */}
        <Grid item xs={12} md={3}>
          <Typography
            variant="h5"
            color="#fcfcfc"
            className="bodyMediumText1"
            sx={{
              textAlign: { xs: "center", md: "left" },
            }}
          >
            {t('about.About')}
          </Typography>
        </Grid>
        <Grid item xs={12} md={9}
        >
          <Stack spacing={3}>
            {aboutParagraphs.map((paragraph, index) => (
              <Typography
                key={index}
                variant="body1"
                color="#c2c2c4"
                className="shantellSansFont"
                sx={{
                  textAlign: { xs: "center", md: "left" },
                }}
              >
                {paragraph}
              </Typography>
            ))}
          </Stack>
        </Grid>
      </Grid>

      {/* Second Section: Mission */}
      <Grid container spacing={4} mb={10}>
        {/* Title and Paragraphs */}
        <Grid item xs={12} md={3}>
          <Typography
            variant="h5"
            color="#fcfcfc"
            className="bodyMediumText1"
            sx={{
              textAlign: { xs: "center", md: "left" },
            }}
          >
            {t('about.mission')}
          </Typography>
        </Grid>
        <Grid item xs={12} md={9}>
          <Stack spacing={3}>
            {missionParagraphs.map((paragraph, index) => (
              <Typography
                key={index}
                variant="body1"
                color="#c2c2c4"
                className="shantellSansFont"
                sx={{
                  textAlign: { xs: "center", md: "left" },
                }}
              >
                {paragraph}
              </Typography>
            ))}
          </Stack>
        </Grid>
      </Grid>

      {/* Third Section: Vision */}
      <Grid container spacing={4}>
        {/* Title and Paragraphs */}
        <Grid item xs={12} md={3}>
          <Typography
            variant="h5"
            color="#fcfcfc"
            className="bodyMediumText1"
            sx={{
              textAlign: { xs: "center", md: "left" },
            }}
          >
            {t('about.vision')}
          </Typography>
        </Grid>
        <Grid item xs={12} md={9}>
          <Stack spacing={3}>
            {visionParagraphs.map((paragraph, index) => (
              <Typography
                key={index}
                variant="body1"
                color="#c2c2c4"
                className="shantellSansFont"
                sx={{
                  textAlign: { xs: "center", md: "left" },
                }}
              >
                {paragraph}
              </Typography>
            ))}
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default TextSection;