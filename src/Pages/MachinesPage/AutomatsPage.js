import { Box, useMediaQuery, useTheme } from "@mui/material";
import React, { useEffect, useState, lazy, Suspense, useRef } from "react";
import "./AutomatsPage.css";

import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";
import logoUrl from '../../assets/Home/NAF-logo.png';
import frenchFries from '../../assets/Home/Fries-machine.webp';
import PizzaMachine from '../../assets/Home/Pizza-machine.png';

// Immediately import critical above-the-fold components
import Maintenance from "./Maintenance";
import MarqTextScroll from "./MarqueTextScroll";

// Lazy load heavy components
const PhysicsButtons = lazy(() => import("./PhysicsButtons"));
const MachinesSection = lazy(() => import("./MachinesSection"));
const PaymentOptions = lazy(() => import("./PaymentOptions"));
const Solutions = lazy(() => import("./Solutions"));
const PartnersForm = lazy(() => import("./PartnersForm"));
const MobileButtons = lazy(() => import("./MobileButtons"));
const GetinTouch = lazy(() => import("./GetInTouch"));
const CatalogueDownloadSection = lazy(() => import("./CatalogueDownloadSection"));
const MachinesSection1 = lazy(() => import("./MachinesSection1"));

// Skeleton loader for sections
const SectionSkeleton = ({ height = "400px", width = "100%", margin = "40px 0" }) => (
  <Box
    sx={{
      height,
      width,
      margin,
      background: "linear-gradient(90deg, #1a1a1a 0%, #2a2a2a 50%, #1a1a1a 100%)",
      backgroundSize: "200% 100%",
      animation: "loading 1.5s ease-in-out infinite",
      borderRadius: "8px",
    }}
  />
);

// Add loading animation to CSS
if (typeof document !== "undefined") {
  const style = document.createElement("style");
  style.textContent = `
    @keyframes loading {
      0% {
        background-position: 200% 0;
      }
      100% {
        background-position: -200% 0;
      }
    }
  `;
  document.head.appendChild(style);
}

// Intersection Observer Hook
const useIntersectionObserver = (ref, options = {}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
      }
    }, {
      rootMargin: "150px", // Start loading 150px before element enters viewport
      threshold: 0.1,
      ...options,
    });

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [ref, options]);

  return isVisible;
};

// Lazy load component wrapper
const LazyComponent = ({ component: Component, fallback = <SectionSkeleton />, prefetch = false, ...props }) => {
  const ref = useRef();
  const isVisible = useIntersectionObserver(ref);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    if (prefetch) {
      // Prefetch component in background
      import("./" + Component.name);
    }
  }, [prefetch]);

  useEffect(() => {
    if (isVisible) {
      setShouldLoad(true);
    }
  }, [isVisible]);

  if (!shouldLoad) {
    return <div ref={ref}>{fallback}</div>;
  }

  return (
    <Suspense fallback={fallback}>
      <Component ref={ref} {...props} />
    </Suspense>
  );
};

const AutomatsPage = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const theme = useTheme();
  const isMobileOrTablet = useMediaQuery(theme.breakpoints.down("md"));
  
  const [selectedMachine, setSelectedMachine] = useState(
    location.state?.selectedMachine || "All"
  );
  
  const [hasLoadedSections, setHasLoadedSections] = useState({
    physicsButtons: false,
    machinesSection: false,
    paymentOptions: false,
    solutions: false,
    partnersForm: false,
    getInTouch: false,
    catalogue: false,
  });

  // Progressive loading in sequence
  useEffect(() => {
    const loadSections = async () => {
      // Immediate load for critical sections
      setTimeout(() => {
        setHasLoadedSections(prev => ({ ...prev, physicsButtons: true }));
      }, 300);
      
      // Load main content after
      setTimeout(() => {
        setHasLoadedSections(prev => ({ ...prev, machinesSection: true }));
      }, 500);
      
      // Load supporting sections
      setTimeout(() => {
        setHasLoadedSections(prev => ({ 
          ...prev, 
          solutions: true,
          paymentOptions: true 
        }));
      }, 1000);
      
      // Load less critical sections
      setTimeout(() => {
        setHasLoadedSections(prev => ({
          ...prev,
          catalogue: true,
          getInTouch: true,
        }));
      }, 1500);
      
      // Load form last
      setTimeout(() => {
        setHasLoadedSections(prev => ({ ...prev, partnersForm: true }));
      }, 2000);
    };

    loadSections();
    
    // Scroll to top and set title
    window.scrollTo(0, 0);
    // document.title = `NAF Vending - ${t("titles.Machines")}`;
  }, [t]);

  return (
    <Box>
      <Helmet>
        <title>NAF Vending - Automats</title>
        <link rel="canonical" href="https://vendinaf.com/en/Automats" />
        <meta
          name="description"
          content="Hochleistungs-Verkaufsautomaten von NAF Germany: Gourmet-, Pizza-, Snack- und Rückgabeautomaten mit KI-Technologie, flexibler Finanzierung und individueller Anpassung."
        />

        <meta name='keywords'
        content='Verkaufsautomaten, Food Automaten, Pizza Automat, Gourmet Automat, KI Verkaufsautomaten, smarte Automaten, Vending Maschinen Deutschland, Mehrweg Rückgabeautomat, nachhaltige Automaten, Automaten Leasing, Automaten kaufen'
         />

        <meta name="author" content="NAF Vending" />
        <meta name="robots" content="index, follow" />
        <html lang="de" />
        
        <meta property="og:title" content="NAF Germany: AI-Powered Vending Machines & Solutions" />
        <meta
          property="og:description"
          content="Browse innovative vending machines from NAF – AI-driven, sustainable, and customizable for businesses in Germany and beyond."
        />
        <meta property="og:image" content={frenchFries} />
        <meta property="og:url" content="https://vendinaf.com/en/machine" />
        <meta property="og:type" content="website" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="NAF Germany: AI-Powered Vending Machines & Solutions" />
        <meta
          name="twitter:description"
          content="Browse innovative vending machines from NAF – AI-driven, sustainable, and customizable for businesses in Germany and beyond."
        />
        <meta name="twitter:image" content={frenchFries} />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "NAF Vending Machines",
            "description": "A collection of AI-powered, sustainable vending machines from NAF Germany, including pizza, beer, and return systems.",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "item": {
                  "@type": "Product",
                  "name": "Pizza Vending Machine",
                  "description": "Discover the Pizza Vending Machine from NAF Germany: AI-powered for fresh, on-demand pizzas with real-time analytics, waste reduction, and sustainable features to optimize efficiency in hotels and events.",
                  "image": PizzaMachine,
                  "url": "https://vendinaf.com/en/products/pizza-machine"
                }
              },
              {
                "@type": "ListItem",
                "position": 2,
                "item": {
                  "@type": "Product",
                  "name": "French Fries Vending Machine",
                  "description": "Explore the French Fries Vending Machine by NAF: Smart, AI-driven dispenser with precise temperature control, energy efficiency, and eco-friendly design for high-traffic locations like gas stations and universities.",
                  "image": frenchFries,
                  "url": "https://vendinaf.com/en/products/fries-machine"
                }
              },
              {
                "@type": "ListItem",
                "position": 3,
                "item": {
                  "@type": "Product",
                  "name": "Ice cream Vending Machine",
                  "description": "Check out the Ice cream Vending Machine from NAF Germany: Automated and sustainable solution for creamy treats, featuring AI optimization, temperature management, and minimal waste for festivals and public spaces.",
                  "url": "https://vendinaf.com/en/products/ice-cream-machine"
                }
              },
              {
                "@type": "ListItem",
                "position": 4,
                "item": {
                  "@type": "Product",
                  "name": "Beer Vending Machine",
                  "description": "Learn about the Beer Vending Machine by NAF: Innovative, AI-powered dispenser with smart telemetry, reusable packaging support, and energy-efficient operation ideal for restaurants, events, and factories.",
                  "url": "https://vendinaf.com/en/products/beer-machine"
                }
              },
              {
                "@type": "ListItem",
                "position": 5,
                "item": {
                  "@type": "Product",
                  "name": "Return Vending System",
                  "description": "Experience the Return Vending System from NAF Germany: Eco-friendly and AI-integrated for seamless deposit management, reusable packaging, and waste reduction, perfect for municipalities and sustainable businesses.",
                  "url": "https://vendinaf.com/en/products/return-system"
                }
              }
            ],
            "publisher": {
              "@type": "Organization",
              "name": "NAF Germany",
              "logo": {
                "@type": "ImageObject",
                "url": logoUrl
              }
            }
          })}
        </script>
      </Helmet>
      
      {/* Above-the-fold content - loads immediately */}
      <Box className="machines-container1">
        <Box className="machines-container">
          <h1 className="headings-h1" variant="h1" sx={{ color: "#FCFCFC" }}>
            {t("machines.machineTitle")}
          </h1>
          <h2
            className="bodyRegularText3"
            variant="body1"
            sx={{ color: "#C2C2C4", mt: { xs: "8px", sm: "8px", md: "16px" } }}
          >
            {t("machines.machineSubTitle")}
          </h2>
        </Box>
        <MarqTextScroll />
      </Box>

      {/* Physics/Mobile Buttons - lazy loaded */}
      {hasLoadedSections.physicsButtons ? (
        <Suspense fallback={<SectionSkeleton height="80px" />}>
          {isMobileOrTablet ? (
            <MobileButtons
              selectedMachine={selectedMachine}
              setSelectedMachine={setSelectedMachine}
            />
          ) : (
            <PhysicsButtons
              selectedMachine={selectedMachine}
              setSelectedMachine={setSelectedMachine}
            />
          )}
        </Suspense>
      ) : (
        <SectionSkeleton height="80px" />
      )}

      {/* Machines Section - lazy loaded */}
      {hasLoadedSections.machinesSection ? (
        <Suspense fallback={<SectionSkeleton height="800px" />}>
          {isMobileOrTablet ? (
            <MachinesSection1 selectedMachine={selectedMachine} />
          ) : (
            <MachinesSection selectedMachine={selectedMachine} />
          )}
        </Suspense>
      ) : (
        <SectionSkeleton height="800px" />
      )}

      {/* Catalogue Download Section - lazy loaded */}
      {hasLoadedSections.catalogue ? (
        <Suspense fallback={<SectionSkeleton height="300px" />}>
          <CatalogueDownloadSection />
        </Suspense>
      ) : (
        <SectionSkeleton height="300px" />
      )}

      {/* Solutions Section - lazy loaded */}
      {hasLoadedSections.solutions ? (
        <Suspense fallback={<SectionSkeleton height="500px" />}>
          <Solutions />
        </Suspense>
      ) : (
        <SectionSkeleton height="500px" />
      )}

      {/* Payment Options - lazy loaded */}
      {hasLoadedSections.paymentOptions ? (
        <Suspense fallback={<SectionSkeleton height="400px" />}>
          <PaymentOptions />
        </Suspense>
      ) : (
        <SectionSkeleton height="400px" />
      )}

      {/* Below-the-fold sections with lazy loading */}
      <Box
        className="section-container"
        sx={{ display: "flex", alignItems: "center", flexDirection: "column", px: 0 }}
      >
        <h2
          className="expertise-title headings-h2"
          sx={{
            position: "relative",
            bottom: "-50px",
            width: { md: "70%" },
            px: { xs: 2, sm: 3, md: 4 },
          }}
          variant="h4"
          align="center"
          gutterBottom
        >
          {t("machines.PartnerNAFGermany")}
        </h2>
        
        {/* Get in Touch - lazy loaded */}
        {hasLoadedSections.getInTouch ? (
          <Suspense fallback={<SectionSkeleton height="200px" />}>
            <GetinTouch />
          </Suspense>
        ) : (
          <SectionSkeleton height="200px" />
        )}

        {/* Partners Form - lazy loaded (forms are heavy) */}
        {hasLoadedSections.partnersForm ? (
          <Suspense fallback={<SectionSkeleton height="600px" />}>
            <PartnersForm />
          </Suspense>
        ) : (
          <SectionSkeleton height="600px" />
        )}
      </Box>

      {/* Maintenance section - loads last */}
      <Maintenance />
    </Box>
  );
};

export default React.memo(AutomatsPage);