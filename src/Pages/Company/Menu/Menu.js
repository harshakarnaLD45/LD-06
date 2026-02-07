import { Box, Typography } from "@mui/material";
import React, { useEffect, useMemo } from "react";
import arrowicon from "../../../assets/About/Menu/buton.png";
import "./Menu.css";
import Allergen from "./Allergen";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";
import MonthlyMenu from "./MonthlyMenu";
import FoodLabeling from "./FoodLabeling";

const Menu = () => {
  const { t } = useTranslation();

  // Update tab title on language change
  useEffect(() => {
    document.title = `NAF Vending - Live Menu`;
    window.scrollTo(0, 0);
  }, [t]);

  // Memoized JSON-LD
  const jsonLd = useMemo(
    () =>
      JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ItemList",
        name: "NAF Vending Machine Menu",
        description:
          "A selection of fresh, sustainable food options from NAF Germany's AI-powered vending machines.",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            item: {
              "@type": "Product",
              name: "Pizza Menu Option",
              description:
                "Fresh pizza with AI-optimized preparation and sustainable ingredients.",
            },
          },
          {
            "@type": "ListItem",
            position: 2,
            item: {
              "@type": "Product",
              name: "French Fries Menu Option",
              description:
                "Crispy fries with allergen labeling and eco-friendly packaging.",
            },
          },
          {
            "@type": "ListItem",
            position: 3,
            item: {
              "@type": "Product",
              name: "Ice Cream Menu Option",
              description:
                "Soft ice cream options updated monthly with food-waste reduction features.",
            },
          },
        ],
        publisher: {
          "@type": "Organization",
          name: "NAF Germany",
        },
      }),
    []
  );

  return (
    <Box>
      <Helmet>
  <title>NAF Germany – Vending Machine Menu & Fresh Food Options</title>

  <link
    rel="canonical"
    href="https://vendinaf.com/en/company/menu"
  />

  <meta
    name="description"
    content="Discover NAF’s live and monthly vending machine menu. Explore fresh food options, detailed ingredient information, and allergen details available at NAF smart vending machines."
  />

  <meta
    name="keywords"
    content="NAF vending menu, vending machine menu, live menu vending machine, monthly menu vending, fresh food vending machine, smart vending food, NAF menu Germany, vending machine food options"
  />

  <meta name="robots" content="index, follow" />

  {/* Open Graph / Social */}
  <meta
    property="og:title"
    content="NAF Germany – Vending Machine Menu & Fresh Food"
  />
  <meta
    property="og:description"
    content="Browse NAF’s live and monthly menu for smart vending machines with fresh food and transparent product information."
  />
  <meta
    property="og:url"
    content="https://vendinaf.com/en/company/menu"
  />
  <meta property="og:type" content="website" />

  <script type="application/ld+json">
    {jsonLd}
  </script>
</Helmet>


      <Box className="section-container menucontainer">
        <Box
          sx={{
            bgcolor: "#FA7854",
            borderRadius: "24px",
            overflow: "hidden",
          }}
        >
          <Box
            sx={{
              p: { xs: 2, sm: 4, md: 6 },
              display: "flex",
              flexDirection: "column",
              height: "100%",
            }}
          >
            <Typography
              variant="h1"
              id="menu-orange-heading"
              className="headings-h1"
              sx={{
                color: "#fcfcfc",
                maxWidth: { xs: "100%", sm: "80%", md: "60%" },
                textAlign: { xs: "center", sm: "left" },
                mb: { xs: 2, sm: 3, md: 4 },
              }}
            >
              {t("menu.menuherotitle")}
            </Typography>

            <Typography
              variant="body1"
              className="bodyRegularText3"
              sx={{
                color: "#fcfcfc",
                textAlign: { xs: "center", sm: "left" },
                mb: { xs: 3, sm: 4, md: 5 },
              }}
            >
              {t("menu.menuheroSubtitle1")}
            </Typography>

            <Box
              sx={{
                width: { xs: 50, md: 70 },
                height: { xs: 60, md: 80 },
                display: "flex",
                justifyContent: "center",
                cursor: "pointer",
              }}
            >
              <img src={arrowicon} alt="Arrow Down" style={{ width: "100%" }} />
            </Box>
          </Box>
        </Box>
      </Box>

      <MonthlyMenu />
      <FoodLabeling />
      <Allergen />
     {/* <Unlock /> */}
    </Box>
  );
};

export default Menu;
