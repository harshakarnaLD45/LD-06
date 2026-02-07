import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Box, Menu, MenuItem } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcons from '../../assets/header/Menu-icon.png';
import './Header.css';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowIcon1, ProfileIcon, DropDownIcon } from '../CustomIcons';
import Lottie from "lottie-react";
import NafLogoGif from '../../assets/header/naf-logo-json.json';
import { useNavigation } from '../../Preload/NavigationProvider';
import { useTheme, useMediaQuery } from '@mui/material';

const Header = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const menuRef = useRef(null);
  const menuTriggerRef = useRef(null);
  const { lang } = useParams();
  const currentLang = lang || i18n.language;
  const { setLoading } = useNavigation();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('lg'));

  const [anchorEl, setAnchorEl] = useState(null);
  const [languageAnchorEl, setLanguageAnchorEl] = useState(null);
  const [language, setLanguage] = useState(i18n.language || 'de');
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [hoveredPath, setHoveredPath] = useState(null);
  const [isBlurred, setIsBlurred] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1024);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openMobileDropdown, setOpenMobileDropdown] = useState(null);
  const [hoveredMenu, setHoveredMenu] = useState(null);


  const toggleMobileDropdown = (key) => {
    setOpenMobileDropdown(prev => (prev === key ? null : key));
  };

  const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

 const [isMouseInDropdown, setIsMouseInDropdown] = useState(false);
  const languageTimeoutRef = useRef(null);

  const handleLanguageMenuOpen = (event) => {
    if (languageTimeoutRef.current) {
      clearTimeout(languageTimeoutRef.current);
      languageTimeoutRef.current = null;
    }
    setLanguageAnchorEl(event.currentTarget);
  };

  const handleLanguageMenuClose = () => {
    setLanguageAnchorEl(null);
  };
  // Single timeout-based hover intent handler for the language dropdown
  const handleLanguageHoverIntent = (isOver) => {
    if (languageTimeoutRef.current) {
      clearTimeout(languageTimeoutRef.current);
      languageTimeoutRef.current = null;
    }
    
    if (isOver) {
      // Mouse is over either button or menu - ensure menu stays open
      setIsMouseInDropdown(true);
      // Clear any pending close timeouts
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
        closeTimeoutRef.current = null;
      }
    } else {
      // Mouse has left both button and menu - schedule closure
      languageTimeoutRef.current = setTimeout(() => {
        setLanguageAnchorEl(null);
        setIsMouseInDropdown(false);
      }, 200); // 200ms grace period to allow cursor travel
    }
  };

  const handleLanguageHoverOpen = (event) => {
    handleLanguageHoverIntent(true);
    setLanguageAnchorEl(event.currentTarget);
  };

  const handleLanguageHoverClose = () => {
    handleLanguageHoverIntent(false);
  };

  const handleDropdownMouseEnter = () => {
    handleLanguageHoverIntent(true);
  };

  const handleDropdownMouseLeave = () => {
    handleLanguageHoverIntent(false);
  };


  const languageOptions = [
    { code: 'de', label: 'Deutsch', shortCode: 'DE' },
    { code: 'en', label: 'English', shortCode: 'EN' },
    { code: 'fr', label: 'Français', shortCode: 'FR' },
    { code: 'es', label: 'Español', shortCode: 'ES' },
    { code: 'pl', label: 'Polski', shortCode: 'PL' }
  ];
  // Add these mapping objects after languageOptions
  const automatsNavigation = {
    [t("Header.automatsDropdown.gourmetHeating")]: `/${currentLang}/products/gourmet-machine`,
    [t("Header.automatsDropdown.gourmetNoHeating")]: `/${currentLang}/products/gourmet-machine-no-heating`,
    [t("Header.automatsDropdown.return")]: `/${currentLang}/return-automats`,
    [t("Header.automatsDropdown.pizza")]: `/${currentLang}/products/pizza-machine`,
    [t("Header.automatsDropdown.snack")]: `/${currentLang}/snack-automats`,
  };

  const disabledAutomats = [
    // t("Header.automatsDropdown.gourmetNoHeating"),
    t("Header.automatsDropdown.return"),
    t("Header.automatsDropdown.snack"),
  ];


  const solutionsNavigation = {
    [t("Header.solutionsDropdown.nafCloud")]: `/${currentLang}/nafcloud`,
    [t("Header.solutionsDropdown.aiDashboard")]: `/${currentLang}/nafai`,
    [t("Header.solutionsDropdown.telemetry")]: `/${currentLang}/telemetry-monitoring`,
    [t("Header.solutionsDropdown.payment")]: `/${currentLang}/payment`,
    [t("Header.solutionsDropdown.reuse")]: `/${currentLang}/reuse-return`,
    [t("Header.solutionsDropdown.cloudKitchen")]: `/${currentLang}/cloudKitchenPayments`,
    [t("Header.solutionsDropdown.integrations")]: `/${currentLang}/software-integration`,
  };

  const homeNavigation = {
    [t("Header.homeDropdown.home")]: `/${currentLang}/`,
    [t("Header.homeDropdown.about")]: `/${currentLang}/company/about`,
  };

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 1024);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;

    if (isDesktop) {
      if (currentScrollY > 20) {
        setIsBlurred(true);
      } else {
        setIsBlurred(false);
      }
    }

    if (currentScrollY > lastScrollY && currentScrollY > 100) {
      setShowHeader(false);
    } else {
      setShowHeader(true);
    }
    setLastScrollY(currentScrollY);
  }, [isDesktop, lastScrollY]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    if (anchorEl && isDesktop) {
      setIsBlurred(true);
    } else if (!anchorEl && isDesktop && window.scrollY <= 20) {
      setIsBlurred(false);
    }
  }, [anchorEl, isDesktop]);

  useEffect(() => {
    setLanguage(i18n.language);
  }, [i18n.language]);


  // Cleanup timeout on component unmount
  useEffect(() => {
    return () => {
      if (languageTimeoutRef.current) {
        clearTimeout(languageTimeoutRef.current);
      }
    };
  }, []);

  const handleNavigation = (path) => {
    setLoading(true);
    navigate(path);
    handleMenuClose();
    setHoveredPath(null);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        anchorEl &&
        menuRef.current && !menuRef.current.contains(event.target) &&
        menuTriggerRef.current && !menuTriggerRef.current.contains(event.target)
      ) {
        handleMenuClose();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [anchorEl]);

  useEffect(() => {
    const handleScrollMenuClose = () => {
      if (anchorEl) {
        handleMenuClose();
      }
    };
    window.addEventListener('scroll', handleScrollMenuClose, { passive: true });
    return () => window.removeEventListener('scroll', handleScrollMenuClose);
  }, [anchorEl]);

  const handleLanguageChange = (newLanguage) => {
    const pathParts = location.pathname.split('/').filter(Boolean);
    if (pathParts.length > 0 && /^[a-z]{2}$/.test(pathParts[0])) {
      pathParts[0] = newLanguage;
    } else {
      pathParts.unshift(newLanguage);
    }
    const newPath = `/${pathParts.join('/')}`;
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        localStorage.setItem("i18nextLng", newLanguage);
      }
    } catch (error) {
      console.warn('Failed to save language preference:', error.message);
    }
    i18n.changeLanguage(newLanguage);

    setLanguage(newLanguage);
     if (languageTimeoutRef.current) {
      clearTimeout(languageTimeoutRef.current);
      languageTimeoutRef.current = null;
    }
    // Reset the mouse state
    setIsMouseInDropdown(false);

    handleLanguageMenuClose();
    navigate(newPath);
  };

  const headerClasses = `header-container header ${showHeader ? "visible" : "hidden"} ${isBlurred ? "blurred" : ""}`;


  const closeTimeoutRef = useRef(null);

  const openMenu = (key) => {
    clearTimeout(closeTimeoutRef.current);
    setOpenDropdown(key);
  };

  const closeMenu = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 200); // 👈 critical
  };

  return (
    <>
      <Box onClick={() => navigate(`/${currentLang}`)} sx={{ cursor: 'pointer' }} className="main-logo">
        <Lottie
          animationData={NafLogoGif}
          className="w-full h-full"
          loop={true}
          autoplay={true}
        />
      </Box>

      <Box className={headerClasses}>
        <Box className="desktop-nav">
          {/* HOME SECTION */}
          <Box
            sx={{ position: 'relative' }}
            // onMouseEnter={() => setOpenDropdown('home')}
            // onMouseLeave={() => setOpenDropdown(null)}
            onMouseEnter={() => openMenu('home')}
            onMouseLeave={closeMenu}
          >
            {/* HOME TEXT */}
            <Box
              data-cursor="hover"
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                cursor: 'pointer',
                color: location.pathname === `/${currentLang}` ? '#7FEE64' : '#FCFCFC',
                fontSize: '14px',
                fontWeight: 400,
                transition: 'color 0.2s ease',
                '&:hover': {
                  color: '#7FEE64'
                }
              }}
              onClick={() => handleNavigation(`/${currentLang}`)}
            >
              {t("Header.menuHome")}
              <Box
                sx={{
                  width: '5px',
                  height: '3px',
                  display: 'flex',
                  alignItems: 'center',
                  mt: 0.5,
                  ml: 1,
                  transform: openDropdown === 'home' ? 'rotate(180deg)' : 'rotate(0deg)',
                }}
              >
                <DropDownIcon color="#FCFCFC" />
              </Box>
            </Box>

            {/* HOME DROPDOWN BOX */}
            {openDropdown === 'home' && (
              <Box
                sx={{
                  position: 'absolute',
                  top: '140%',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  backgroundColor: '#161616',
                  borderRadius: '12px',
                  padding: '12px',
                  minWidth: '150px',
                  border: '1px solid #595D62',
                  zIndex: 1000
                }}
              >
                <Box
                  sx={{
                    padding: '8px 12px',
                    fontSize: '14px',
                    color: '#FCFCFC',
                    cursor: 'pointer',
                    borderRadius: '8px',
                    transition: 'all 0.2s ease',
                    '&:hover': {
                      backgroundColor: '#262626',
                      color: '#7FEE64'
                    }
                  }}
                  onClick={() => {
                    handleNavigation(`/${currentLang}`);
                    setOpenDropdown(null);
                  }}
                >
                  {t("Header.homeDropdown.home")}
                </Box>

                <Box
                  sx={{
                    padding: '8px 12px',
                    fontSize: '14px',
                    color: '#FCFCFC',
                    cursor: 'pointer',
                    borderRadius: '8px',
                    transition: 'all 0.2s ease',
                    '&:hover': {
                      backgroundColor: '#262626',
                      color: '#7FEE64'
                    }
                  }}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNavigation(`/${currentLang}/company/about`);
                    setAnchorEl(null);
                  }}
                >
                  {t("Header.homeDropdown.about")}
                </Box>
              </Box>
            )}
          </Box>

          {/* AUTOMATS SECTION */}
          <Box
            sx={{ position: 'relative' }}
            // onMouseEnter={() => setOpenDropdown('automats')}
            // onMouseLeave={() => setOpenDropdown(null)}
            onMouseEnter={() => openMenu('automats')}
            onMouseLeave={closeMenu}
          >
            {/* AUTOMATS TEXT */}
            <Box
              data-cursor="hover"
              sx={{
                display: 'flex',
                alignItems: 'center',
                cursor: 'pointer',
                color: location.pathname.includes('/automats') ? '#7FEE64' : '#FCFCFC',
                fontSize: '14px',
                '&:hover': { color: '#7FEE64' }
              }}
              onMouseEnter={() => setHoveredMenu('automats')}
              onMouseLeave={() => setHoveredMenu(null)}
              onClick={() => handleNavigation(`/${currentLang}/automats`)}
            >
              {t("Header.menuAutomats")}
              {/* Automats */}

              <Box
                sx={{
                  width: '5px',
                  height: '3px',
                  display: 'flex',
                  alignItems: 'center',
                  mt: 0.5,
                  ml: 1,
                  transform: openDropdown === 'automats' ? 'rotate(180deg)' : 'rotate(0deg)',
                }}
              >
                <DropDownIcon color="#FCFCFC" />
              </Box>
            </Box>

            {/* DESKTOP AUTOMATS DROPDOWN */}
            {openDropdown === 'automats' && (
              <Box
                sx={{
                  position: 'absolute',
                  top: '140%',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  backgroundColor: '#161616',
                  borderRadius: '12px',
                  padding: '8px',
                  minWidth: '250px',
                  border: '1px solid #595D62',
                  zIndex: 1000,
                }}
              >
                {[
                  t("Header.automatsDropdown.gourmetHeating"),
                  t("Header.automatsDropdown.gourmetNoHeating"),
                  t("Header.automatsDropdown.return"),
                  t("Header.automatsDropdown.pizza"),
                  t("Header.automatsDropdown.snack"),
                ].map((item) => {
                  const isDisabled = disabledAutomats.includes(item);

                  return (
                    <Box
                      key={item}
                      sx={{
                        padding: '8px 12px',
                        fontSize: '14px',
                        color: isDisabled ? '#7A7A7A' : '#FCFCFC',
                        cursor: isDisabled ? 'not-allowed' : 'pointer',
                        borderRadius: '8px',
                        opacity: isDisabled ? 0.5 : 1,
                        '&:hover': isDisabled
                          ? {}
                          : {
                            backgroundColor: '#262626',
                            color: '#7FEE64',
                          },
                      }}
                      onClick={() => {
                        if (!isDisabled) {
                          handleNavigation(automatsNavigation[item]);
                          setOpenDropdown(null);
                        }
                      }}
                    >
                      {item}
                    </Box>
                  );
                })}
              </Box>
            )}
          </Box>
          {/* SOLUTIONS SECTION */}
          <Box
            sx={{ position: 'relative' }}
            // onMouseEnter={() => setOpenDropdown('solutions')}
            // onMouseLeave={() => setOpenDropdown(null)}
            onMouseEnter={() => openMenu('solutions')}
            onMouseLeave={closeMenu}
          >
            <Box
              data-cursor="hover"
              sx={{
                display: 'flex',
                alignItems: 'center',
                cursor: 'pointer',
                color: location.pathname.includes('/solutions') ? '#7FEE64' : '#FCFCFC',
                fontSize: '14px',
                '&:hover': { color: '#7FEE64' }
              }}
              onMouseEnter={() => setHoveredMenu('solutions')}
              onMouseLeave={() => setHoveredMenu(null)}
              // onClick={() => handleNavigation(`/${currentLang}/solutions`)}
            >
              {t("Header.menuSolutions")}
              {/* Solutions */}

              < Box
                sx={{
                  width: '5px',
                  height: '3px',
                  display: 'flex',
                  alignItems: 'center',
                  mt: 0.5,
                  ml: 1,
                  transform: openDropdown === 'solutions' ? 'rotate(180deg)' : 'rotate(0deg)',
                }}
              >
                <DropDownIcon color="#FCFCFC" />
              </Box>
            </Box>

            {/* DESKTOP SOLUTIONS DROPDOWN */}
            {openDropdown === 'solutions' && (
              <Box
                sx={{
                  position: 'absolute',
                  top: '160%',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  alignItems: 'center',
                  backgroundColor: '#161616',
                  borderRadius: '12px',
                  padding: '12px',
                  minWidth: '200px',
                  border: '1px solid #595D62',
                  zIndex: 1000
                }}
              >
                {[
                  t("Header.solutionsDropdown.nafCloud"),
                  t("Header.solutionsDropdown.aiDashboard"),
                  t("Header.solutionsDropdown.telemetry"),
                  t("Header.solutionsDropdown.payment"),
                  t("Header.solutionsDropdown.reuse"),
                  t("Header.solutionsDropdown.cloudKitchen"),
                  t("Header.solutionsDropdown.integrations"),
                ].map((item) => (
                  <Box
                    key={item}
                    sx={{
                      padding: '8px 12px',
                      fontSize: '14px',
                      color: '#FCFCFC',
                      cursor: 'pointer',
                      borderRadius: '8px',
                      '&:hover': {
                        backgroundColor: '#262626',
                        color: '#7FEE64'
                      }
                    }}
                    onClick={() => {
                      handleNavigation(solutionsNavigation[item]);
                      setOpenDropdown(null);
                    }}
                  >
                    {item}
                  </Box>
                ))}
              </Box>
            )}
          </Box>

          {/* BLOGS MENU ITEM */}
          <Box
            data-cursor="hover"
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              cursor: 'pointer',
              color: '#FCFCFC',
              fontSize: '14px',
              fontWeight: 400,
              transition: 'color 0.2s ease',
              '&:hover': {
                color: '#7FEE64'
              }
            }}
            onClick={() => {
              setLoading(true);
              window.open("https://blog.vendinaf.com/de", "_blank");
            }}
          >
            {t("Header.menuBlogs")}
          </Box>

          {/* LIVE MENU ITEM */}
          <Box
            data-cursor="hover"
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              cursor: 'pointer',
              color: location.pathname === `/${currentLang}/company/menu` ? '#7FEE64' : '#FCFCFC',
              fontSize: '14px',
              fontWeight: 400,
              transition: 'color 0.2s ease',
              '&:hover': {
                color: '#7FEE64'
              }
            }}
            onClick={() => handleNavigation(`/${currentLang}/company/menu`)}
          >
            {t("Header.LiveMenu")}
          </Box>

          <Box
            data-cursor="hover"
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              cursor: 'pointer',
              color: location.pathname.includes('/support') ? '#7FEE64' : '#FCFCFC',
              fontSize: '14px',
              fontWeight: 400,
              transition: 'color 0.2s ease',
              '&:hover': {
                color: '#7FEE64'
              }
            }}
            onClick={() => handleNavigation(`/${currentLang}/support`)}
          >
            {t("Header.Support")}
            {/* Support */}
          </Box>


          {/* LANGUAGE SELECTOR */}
          <Box
            data-cursor="hover"
            sx={{
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              bgcolor: '#262626',
              borderRadius: '24px',
              color: '#FCFCFC',
              padding: '8px 16px',
              fontSize: '14px',
              fontWeight: 400,
              transition: 'all 0.2s ease',
              position: 'relative',
              '&:hover': {
                backgroundColor: '#333'
              }
            }}
            onMouseEnter={handleLanguageHoverOpen}
            onMouseLeave={handleLanguageHoverClose}
          >
            {language.toUpperCase()}
            <Box sx={{ width: '5px', height: '3px', display: 'flex', alignItems: 'center', mt: 0.5 }}>
              <DropDownIcon color="#FCFCFC" />
            </Box>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16" viewBox="0 0 18 16" fill="none">
              <path d="M0.75 2.85H11.4167M6.08333 0.75V2.85M9.13095 2.85C8.11508 6.58333 5.82937 9.15 2.27381 10.55M3.79762 5.65C4.81349 7.51667 6.3373 8.91667 8.36905 9.85M9.13095 14.75L12.9405 7.05L16.75 14.75M15.6833 12.65H10.1976" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>

            <Menu
              anchorEl={languageAnchorEl}
              open={Boolean(languageAnchorEl)}
              onClose={handleLanguageMenuClose}
              disableScrollLock={true}
              MenuListProps={{
                onMouseEnter: handleDropdownMouseEnter,
                onMouseLeave: handleDropdownMouseLeave,
                sx: {
                  paddingTop: '8px',
                  paddingBottom: '8px',
                  backgroundColor: '#161616',
                  borderRadius: '10px'
                }
              }}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
              transformOrigin={{ vertical: 'top', horizontal: 'center' }}
              slotProps={{
                paper: {
                 onMouseEnter: handleDropdownMouseEnter,
                  onMouseLeave: handleDropdownMouseLeave,
                  sx: {
                    width: '248px',
                    height: '240px',
                    backgroundColor: '#161616 !important',
                    borderRadius: '10px',
                    marginTop: '18px',
                    border: '1px solid #595D62',
                    overflow: 'visible',
                  }
                }
              }}
            >
              {languageOptions.map(({ code, label, shortCode }) => (
                <MenuItem
                  key={code}
                  onClick={() => handleLanguageChange(code)}
                  sx={{
                    padding: '10px 20px',
                    fontSize: '14px',
                    color: language === code ? '#7FEE64' : '#FCFCFC',
                    '&:hover': { color: '#7FEE64' },
                  }}
                >
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                    <Box>{label}</Box>
                    <Box sx={{ opacity: 0.6 }}>{shortCode}</Box>
                  </Box>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Box>
        <Box className="desktop-actions">
          <Box
            sx={{ position: 'relative' }}
            // onMouseEnter={() => setOpenDropdown('login')}
            // onMouseLeave={() => setOpenDropdown(null)}
            onMouseEnter={() => openMenu('login')}
            onMouseLeave={closeMenu}
          >
            {/* LOGIN BUTTON */}
            <Box
              data-cursor="hover"
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                cursor: 'pointer',
                fontSize: '14px',
                padding: '8px 14px',
                color: '#fcfcfc',
              }}
            >
              {t("Header.login")}
              {/* login */}

              <Box
                sx={{
                  width: '5px',
                  height: '3px',
                  display: 'flex',
                  alignItems: 'center',
                  mt: 0.5,
                  ml: 1,
                  transform: openDropdown === 'login'
                    ? 'rotate(180deg)'
                    : 'rotate(0deg)',
                }}> <DropDownIcon color="#FCFCFC" /> </Box>
            </Box>

            {/* LOGIN DROPDOWN */}
            {openDropdown === 'login' && (
              <Box
                sx={{
                  position: 'absolute',
                  top: '140%',
                  left: '50%',
                  transform: 'translateX(-50%)',

                  alignItems: 'center',
                  backgroundColor: '#161616',
                  borderRadius: '12px',
                  padding: '12px',
                  minWidth: '200px',
                  border: '1px solid #595D62',
                  zIndex: 1000
                }}
              >
                <Box
                  sx={{
                    padding: '12px 14px',
                    fontSize: '14px',
                    color: '#FCFCFC',
                    cursor: 'pointer',
                    borderRadius: '10px',
                    '&:hover': {
                      backgroundColor: '#262626',
                      color: '#7FEE64'
                    }
                  }}
                  onClick={() => handleNavigation(`/${currentLang}/membership`)}
                >
                  {t("Header.loginDropdown.member")}

                </Box>

                <Box
                  sx={{
                    padding: '8px 14px',
                    fontSize: '14px',
                    color: '#7A7A7A',
                    cursor: 'not-allowed',
                    borderRadius: '10px',
                    opacity: 0.6,
                    pointerEvents: 'none', // ✅ disables click
                  }}
                >
                  {t("Header.loginDropdown.partner")}
                </Box>

              </Box>
            )}
          </Box>


          <Box
            sx={{ mt: 2, position: 'relative', display: 'flex', alignItems: 'center' }}
            // onMouseEnter={() => setOpenDropdown('contact')}
            // onMouseLeave={() => setOpenDropdown(null)}
            onMouseEnter={() => openMenu('contact')}
            onMouseLeave={closeMenu}
          >
            {/* BOOK DEMO BUTTON */}
            <button
              data-cursor="hover"
              className="book-demo-btn bodyRegularText4"
              style={{
                fontSize: "14px",
                display: "flex",

                alignItems: "center",
                gap: "6px",
              }}
              onClick={() => navigate(`/${currentLang}/contact`)}
            >
              {t("Header.BookaDemo")}
              {/* Book a Demo */}
              <Box
                sx={{
                  width: '5px',
                  height: '3px',
                  display: 'flex',
                  alignItems: 'center',
                  mt: 0.5,
                  ml: 1,
                  transition: 'transform 0.2s ease',
                  transform:
                    openDropdown === 'contact' ? 'rotate(180deg)' : 'rotate(0deg)',
                }}
              >
                <DropDownIcon color="#161616" />
              </Box>
            </button>


            {/* DROPDOWN BOX */}
            {openDropdown === 'contact' && (
              <Box
                sx={{
                  position: 'absolute',
                  top: '100%',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  backgroundColor: '#161616',
                  borderRadius: '12px',
                  padding: '12px',
                  minWidth: '200px',
                  border: '1px solid #595D62',
                  zIndex: 1000
                }}
              >
                <Box
                  sx={{
                    padding: '12px 14px',
                    fontSize: '14px',
                    color: '#FCFCFC',
                    cursor: 'pointer',
                    borderRadius: '10px',
                    '&:hover': {
                      backgroundColor: '#262626',
                      color: '#7FEE64'
                    }
                  }}
                  onClick={() => {
                    handleNavigation(`/${currentLang}/contact`);
                    setOpenDropdown(null);
                  }}
                >
                  {t("Header.contactDropdown.bookDemo")}
                </Box>

                <Box
                  sx={{
                    padding: '12px 14px',
                    fontSize: '14px',
                    color: '#7A7A7A',
                    opacity: 0.6,
                    cursor: 'not-allowed',
                    borderRadius: '10px',
                    pointerEvents: 'none', // ✅ disables click
                  }}
                >
                  {t("Header.contactDropdown.cloudDemo")}
                </Box>

              </Box>
            )}
          </Box>
        </Box>


        {/*Mobile Menu*/}
        <Box
          data-cursor="hover"
          className="mobile-menu-btn"
          ref={menuTriggerRef}
          onClick={anchorEl ? handleMenuClose : handleMenuOpen}
        >



          {anchorEl ? (
            <CloseIcon sx={{ fontSize: '20px' }} />
          ) : (
            <img
              className='menuicons'
              src={MenuIcons}
              alt="Menu"
              style={{ width: '20px', height: '15px' }}
            />
          )}
          <span className="bodyRegularText3" style={{ color: "#1A1A1A", fontSize: '14px' }}>{t("Header.menu")}</span>
        </Box>

        {anchorEl && (
          <>
            <Box
              className="mobile-menu-overlay show"
              onClick={handleMenuClose}
            />
            <Box
              className="menu-container show"
              ref={menuRef}
              onClick={(e) => e.stopPropagation()}


            >

              <Box className="laptop_view ">

                <Box sx={{ position: 'absolute', top: 25, right: 25 }}>
                  <select
                    value={language}
                    onChange={(e) => handleLanguageChange(e.target.value)}
                    className="language-dropdown-trigger bodyRegularText3"
                    style={{
                      paddingRight: '40px',
                      appearance: 'none',
                      WebkitAppearance: 'none',
                      MozAppearance: 'none',
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor'%3E%3Cpath d='M7 10l5 5 5-5z'/%3E%3C/svg%3E")`,
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'right 8px center',
                      backgroundSize: '25px',
                      backgroundColor: '#262626',
                      color: '#FCFCFC',
                      border: '1px solid #595D62',
                      borderRadius: '8px',
                      padding: '8px 16px',
                      fontSize: '14px'
                    }}
                  >
                    {languageOptions.map(({ code, label }) => (
                      <option key={code} value={code} className='bodyRegularText3' style={{ fontSize: '14px' }}>
                        {label}
                      </option>
                    ))}
                  </select>
                </Box>
              </Box>


              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, marginTop: '20px' }}>
                {/* HOME HEADER */}
                <Box className="laptop_view ">

                  <Box
                    className="menu-item bodyRegularText2"
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      width: '24px',
                      height: '24px',
                      flexShrink: 0,
                      cursor: 'pointer',
                      color: {
                        xs: '#000000', // ✅ mobile
                        lg: '#FCFCFC', // desktop (safety)
                      },
                    }}
                    onClick={() => {

                      handleNavigation(`/${currentLang}/home`);
                      setAnchorEl(null);
                    }}

                  >
                    {t("Header.menuHome")}

                    <Box
                      sx={{

                        transform: openMobileDropdown === 'home' ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.2s ease'
                      }}
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleMobileDropdown('home');
                      }}
                    >
                      <DropDownIcon color={isMobile ? '#1A1A1A' : '#FCFCFC'} />
                    </Box>
                  </Box>

                  {/* HOME SUB MENU – MUST BE OUTSIDE */}
                  {openMobileDropdown === 'home' && (
                   <Box className="menu_list_sec" sx={{
                      backgroundColor: '#161616',
                      borderRadius: '12px',
                      padding: '12px',
                      gap: '8px',
                      color: '#c2c2c4',
                      border: '1px solid #595D62',
                      zIndex: 1000
                    }}>
                      <Box
                        className="menu-item bodyRegularText3"
                        onClick={() => {
                          handleNavigation(`/${currentLang}`);
                          setAnchorEl(null);
                        }}
                      >
                        {t("Header.homeDropdown.home")}
                      </Box>

                      <Box
                        className="menu-item bodyRegularText3"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleNavigation(`/${currentLang}/company/about`);
                          setAnchorEl(null);
                        }}

                      >
                        {t("Header.homeDropdown.about")}
                      </Box>
                    </Box>
                  )}

                  {/* AUTOMATS MENU */}
                  <Box
                    className="menu-item bodyRegularText2"
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      width: '24px',
                      height: '24px',
                      cursor: 'pointer',
                      color: {
                        xs: '#000000', // ✅ mobile
                        lg: '#FCFCFC', // desktop (safety)
                      },
                    }}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleNavigation(`/${currentLang}/automats`);
                    }}
                  >
                    {t("Header.menuAutomats")}

                    {/* Dropdown icon container - THIS gets the fixed dimensions */}
                    <Box
                      sx={{

                        transform: openMobileDropdown === 'automats' ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.2s ease'
                      }}
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleMobileDropdown('automats');
                      }}
                    >
                      <DropDownIcon color={isMobile ? '#1A1A1A' : '#FCFCFC'} />
                    </Box>
                  </Box>

                  {openMobileDropdown === 'automats' && (
                    <Box className="menu_list_sec"
                      sx={{
                        backgroundColor: '#161616',
                        borderRadius: '12px',
                        padding: '12px',
                        gap: '8px',
                        border: '1px solid #595D62',
                        mt: 1
                      }}
                    >
                      {Object.keys(automatsNavigation).map((item) => {
                        const isDisabled = disabledAutomats.includes(item);

                        return (
                          <Box
                            key={item}
                            className="menu-item bodyRegularText3"
                            sx={{
                              color: isDisabled ? '#7A7A7A' : '#FCFCFC',
                              cursor: isDisabled ? 'not-allowed' : 'pointer',
                              opacity: isDisabled ? 0.6 : 1,
                            }}
                            onClick={() => {
                              if (!isDisabled) {
                                handleNavigation(automatsNavigation[item]);
                                setAnchorEl(null);
                              }
                            }}
                          >
                            {item}
                          </Box>
                        );
                      })}
                    </Box>
                  )}

                  {/* SOLUTIONS MENU */}
                  <Box
                    className="menu-item bodyRegularText2"
                    sx={{
                      display: 'flex',
                      width: '24px',
                      height: '24px',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      cursor: 'pointer',
                      color: {
                        xs: '#000000', // ✅ mobile
                        lg: '#FCFCFC', // desktop (safety)
                      },
                    }}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleNavigation(`/${currentLang}/solutions`);
                    }}


                  >
                    {t("Header.menuSolutions")}

                    {/* Dropdown icon container */}
                    <Box
                      sx={{

                        transform: openMobileDropdown === 'solutions' ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.2s ease'
                      }}
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleMobileDropdown('solutions');
                      }}
                    >
                      <DropDownIcon color={isMobile ? '#1A1A1A' : '#FCFCFC'} />
                    </Box>
                  </Box>

                  {openMobileDropdown === 'solutions' && (
                     <Box className="menu_list_sec"
                      sx={{
                        backgroundColor: '#161616',
                        borderRadius: '12px',
                        padding: '12px',
                        gap: '8px',
                        border: '1px solid #595D62',
                        mt: 1
                      }}
                    >
                      {Object.keys(solutionsNavigation).map((item) => (
                        <Box
                          key={item}
                          className="menu-item bodyRegularText3"
                          sx={{ cursor: 'pointer', color: '#FCFCFC' }}
                          onClick={() => {
                            handleNavigation(solutionsNavigation[item]);
                            setAnchorEl(null);
                          }}
                        >
                          {item}
                        </Box>
                      ))}
                    </Box>
                  )}


                  <Box className={`menu-item bodyRegularText2`}
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      cursor: 'pointer',
                      color: {
                        xs: '#1A1A1A', // ✅ mobile always black
                        lg: hoveredPath === 'blogs' ? '#1A1A1A' : '#FCFCFC', // ✅ desktop logic
                      },
                      '&:hover': {
                        color: {
                          xs: '#1A1A1A', // mobile stays black
                          lg: '#1A1A1A', // desktop hover
                        },
                      },
                    }}
                    onClick={() => {
                      setLoading(true);
                      window.open("https://blog.vendinaf.com/de", "_blank");
                      setTimeout(() => setAnchorEl(null), 300);
                    }}
                    onMouseEnter={() => setHoveredPath('blogs')}
                    onMouseLeave={() => setHoveredPath(null)}>
                    {hoveredPath === 'blogs' && (
                      <span className="arrow-icon"><ArrowIcon1 /></span>
                    )}
                    {t("Header.menuBlogs")}
                  </Box>

                  {/* <Box className={`menu-item ${location.pathname.includes('/company/about') ? 'bodyMediumText1' : 'bodyRegularText2'}`}
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      color: {
                        xs: '#1A1A1A', // ✅ mobile always black
                        lg: location.pathname.includes('/company/about')
                          ? '#1A1A1A'
                          : '#FCFCFC', // ✅ desktop logic unchanged
                      },
                      cursor: 'pointer',
                      '&:hover': { color: '#1A1A1A' }
                    }}
                    onClick={() => {
                      handleNavigation(`/${currentLang}/company/about`);
                      setTimeout(() => setAnchorEl(null), 300);
                    }}
                    onMouseEnter={() => setHoveredPath('about')}
                    onMouseLeave={() => setHoveredPath(null)}
                  >
                    {hoveredPath === 'about' && (
                      <span className="arrow-icon"><ArrowIcon1 /></span>
                    )}
                    {t("Header.CompanyAbout")}
                  </Box> */}

                  <Box className={`menu-item ${location.pathname === `/${currentLang}/company/menu` ? 'bodyMediumText1' : 'bodyRegularText2'}`}
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      color: {
                        xs: '#1A1A1A', // ✅ mobile always black
                        lg: (location.pathname === `/${currentLang}/company/menu` || hoveredPath === 'liveMenu')
                          ? '#1A1A1A'
                          : '#FCFCFC', // ✅ desktop logic
                      },
                      cursor: 'pointer',
                      '&:hover': { color: '#1A1A1A' }
                    }}
                    onClick={() => {
                      handleNavigation(`/${currentLang}/company/menu`);
                      setTimeout(() => setAnchorEl(null), 300);
                    }}
                    onMouseEnter={() => setHoveredPath('liveMenu')}
                    onMouseLeave={() => setHoveredPath(null)}
                  >
                    {hoveredPath === 'liveMenu' && (
                      <span className="arrow-icon"><ArrowIcon1 /></span>
                    )}
                    {t("Header.LiveMenu")}
                  </Box>

                  <Box className="menu-item bodyRegularText2"
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      color: {
                        xs: '#1A1A1A', // ✅ mobile always black
                        lg: hoveredPath === 'support' ? '#1A1A1A' : '#FCFCFC',
                      },
                      cursor: 'pointer',
                      '&:hover': { color: '#1A1A1A' }
                    }}
                    onClick={() => {
                      handleNavigation(`/${currentLang}/support`);
                      setAnchorEl(null);
                    }}
                    onMouseEnter={() => setHoveredPath('support')}
                    onMouseLeave={() => setHoveredPath(null)}
                  >
                    {hoveredPath === 'support' && (
                      <span className="arrow-icon"><ArrowIcon1 /></span>
                    )}
                    {t("Header.Support")}
                  </Box>
                </Box>


                {/* LOGIN DROPDOWN */}
                <Box>
                  {/* LOGIN HEADER */}
                  <Box
                    className="menu-item bodyRegularText2"
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      cursor: 'pointer',
                      width: "24px",
                      height: '24px',
                      flexShrink: 0,
                      color: '#000000', // desktop (safety)

                    }}
                    onClick={() => {
                      handleNavigation(`/${currentLang}/login`);
                      setAnchorEl(null);
                    }}
                  >
                    {t("Header.login")}
                    <Box
                      sx={{
                        transform: openMobileDropdown === 'login' ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: '0.2s'
                      }}
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleMobileDropdown('login');
                      }}
                    >
                      <DropDownIcon color={'#1A1A1A'} />
                    </Box>
                  </Box>

                  {/* LOGIN SUB MENU */}
                  {openMobileDropdown === 'login' && (
                     <Box className="menu_list_sec"  sx={{
                      mt: 2, backgroundColor: '#161616',
                      borderRadius: '12px',
                      padding: '12px',
                      gap: '8px',
                      color: '#c2c2c4',
                      border: '1px solid #595D62',
                      zIndex: 1000
                    }}>
                      <Box
                        className="menu-item bodyRegularText3"
                        onClick={() => {
                          handleNavigation(`/${currentLang}/membership`);
                          setAnchorEl(null);
                        }}
                      >
                        {t("Header.loginDropdown.member")}
                      </Box>

                      <Box
                        className="menu-item bodyRegularText3"
                        onClick={() => {
                          handleNavigation(`/${currentLang}/patnerlogin`);
                          setAnchorEl(null);
                        }} 
                        sx={{
                          color: '#7A7A7A',
                          opacity: 0.6,
                          cursor: 'not-allowed',
                          pointerEvents: 'none', // ✅ disable click
                        }}
                      >
                        {t("Header.loginDropdown.partner")}
                      </Box>

                    </Box>
                  )}
                </Box>

                {/* BOOK DEMO HEADER */}
                <Box>

                  <Box
                    className="menu-item bodyRegularText2"
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      color: '#000000', // ✅ mobile
                      cursor: 'pointer'
                    }}
                    onClick={() => {
                      handleNavigation(`/${currentLang}/contact`);
                      setAnchorEl(null);
                    }}
                  >
                    {t("Header.BookaDemo")}
                    <Box
                      sx={{
                        transform: openMobileDropdown === 'demo' ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: '0.2s'
                      }}
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleMobileDropdown('demo');
                      }}
                    >
                      <DropDownIcon color={'#1A1A1A'} />
                    </Box>
                  </Box>

                  {/* BOOK DEMO SUB MENU */}
                  {openMobileDropdown === 'demo' && (
                     <Box className="menu_list_sec" sx={{
                      mt: 2, backgroundColor: '#161616',
                      borderRadius: '12px',
                      padding: '12px',
                      gap: '8px',
                      color: '#c2c2c4',
                      border: '1px solid #595D62',
                      zIndex: 1000
                    }}>
                      <Box
                        className="menu-item bodyRegularText3"
                        onClick={() => {
                          handleNavigation(`/${currentLang}/contact`);
                          setAnchorEl(null);
                        }}
                      >
                        {t("Header.contactDropdown.bookDemo")}
                      </Box>

                      <Box
                        className="menu-item bodyRegularText3"
                        sx={{
                          color: '#7A7A7A',
                          opacity: 0.6,
                          cursor: 'not-allowed',
                          pointerEvents: 'none', // ✅ disable click
                        }}
                      >
                        {t("Header.contactDropdown.cloudDemo")}
                      </Box>

                    </Box>
                  )}
                </Box>
              </Box>

              <Box className="custom-button" onClick={handleMenuClose}>
                <CloseIcon sx={{ fontSize: '24px' }} />
                <span style={{ color: "#1A1A1A", fontSize: '14px' }} className="bodyRegularText3">{t("Header.menu")}</span>
              </Box>
            </Box>
          </>
        )}
      </Box >
    </>
  );
};

export default Header;