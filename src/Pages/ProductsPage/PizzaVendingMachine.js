import React, { useState, useEffect } from 'react';
import PizzaMachine from '../../assets/Home/Pizza-machine.png';
import {
  Box,
  Button,
  Typography,
  Grid,

  Accordion,
  AccordionSummary,
  AccordionDetails,
  List,
  ListItem,
  ListItemIcon,

  Paper,
} from '@mui/material';
import {
  ArrowDropDown,
} from '@mui/icons-material';
import {
  SnackBar, CampingSite, Companies,
  OfficaCenters,

} from '../../Components/CustomIcons';
import '../../App.css';
import './products.css';
import ProductModal, { useProductModal } from './ProductModal';
import AnimateButton from '../../Components/CommonComponents/AnimateButton';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';

export default function PizzaVendingMachine() {
  const navigate = useNavigate();
  const { lang } = useParams();
  const { t, i18n } = useTranslation();
  const [expandedFaqIndex, setExpandedFaqIndex] = useState(null);


  const TickIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="14" viewBox="0 0 18 14" fill="none">
      <path d="M17.5 1.41L5.5 13.41L0 7.91L1.41 6.5L5.5 10.58L16.09 0L17.5 1.41Z" fill="#7FEE64" />
    </svg>
  );

  const {
    modalOpen,
    openModal,
    closeModal,
    selectedProduct,
    defaultPurchaseMethod
  } = useProductModal();

  // Handler functions for each button with different purchase methods
   const handleDirectPurchase = () => {
    openModal(t('machines.PizzaMachine'), t('machines.DirectPurchaseTitle'));
  };

  const handleLeasing = () => {
    openModal(t('machines.PizzaMachine'), t('machines.LeasingTitle'));
  };

  const handleRentalPurchase = () => {
    openModal(t('machines.PizzaMachine'),  t('machines.RentalPurchase'));
  };

  const handleSummerSeasonal = () => {
    openModal(t('machines.PizzaMachine'),  t('machines.LeasingTitle'));
  };

  const handleWinterSeasonal = () => {
    openModal(t('machines.PizzaMachine'),   t('machines.LeasingTitle')); 
  };

  const handleCustomQuote = () => {
    openModal( t('machines.PizzaMachine') , "");
  };

  const faqData = [
    // {
    //   question: t('products.gourmetMachine.faq.question1'),
    //   answer: t('products.gourmetMachine.faq.answer1')
    // },
    {
      question: t('products.gourmetMachine.faq.question2'),
      answer: t('products.gourmetMachine.faq.answer2')
    },
    {
      question: t('products.gourmetMachine.faq.question3'),
      answer: t('products.gourmetMachine.faq.answer3')
    },
    {
      question: t('products.gourmetMachine.faq.question4'),
      answer: t('products.gourmetMachine.faq.answer4')
    },
    {
      question: t('products.gourmetMachine.faq.question5'),
      answer: t('products.gourmetMachine.faq.answer5')
    },
    {
      question: t('products.gourmetMachine.faq.question6'),
      answer: t('products.gourmetMachine.faq.answer6')
    },
    {
      question: t('products.gourmetMachine.faq.question7'),
      answer: t('products.gourmetMachine.faq.answer7')
    },
    {
      question: t('products.gourmetMachine.faq.question8'),
      answer: t('products.gourmetMachine.faq.answer8')
    },
    {
      question: t('products.gourmetMachine.faq.question9'),
      answer: t('products.gourmetMachine.faq.answer9')
    },
    {
      question: t('products.gourmetMachine.faq.question10'),
      answer: t('products.gourmetMachine.faq.answer10')
    }
  ];
useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box>
    
        <Helmet>
            <title>NAF Pizza Product Automats </title>
          </Helmet>
    <div className="section-container main-container" style={{ height: '100%', display: 'block', flexDirection: 'column' }}>
      {/* Hero Section */}
      <Box className="hero_sec"
        sx={{
          width: "100%",
          minHeight: "65vh",
          display: "flex",
          justifyContent: "space-between",
          boxSizing: "border-box",
        }}
      >
        <Box className="product_hero_text" sx={{ color: "#fff", width: '50%', pt: 10 }}>
          <h1 className='headings-h1 gourmate_Heading ' sx={{ color: '#C2C2C4', py: { xs: '8px', sm: '8px', md: '16px' }, letterSpacing: '-0.84px', margin: "10px 0px !important", width: '60%' }}>
            {t('products.PizzaMachine.title')}
          </h1>
          <Typography
            sx={{
              fontSize: "16px",
              color: "#C2C2C4",
              width: { md: '75%', sm: '90%' },
              lineHeight: 1.6,
            }}
            className='bodyRegularText3'
          >
            {t('products.PizzaMachine.subtitle')}
          </Typography>
          <Box sx={{ mt: 4 }}>
            <AnimateButton route={`/${lang}/contact`} />
          </Box>
        </Box>


        {/* RIGHT SIDE IMAGE */}
        <Box className='Product_hero_img_sec'
          sx={{
            width: "250px",
            aspectRatio: "169 / 250",
            overflow: "hidden",
            display: { xs: 'none', sm: 'none', md: "flex" },
            justifyContent: "flex-start",
          }}
        >
          <img className='Product_hero_img'
            src={PizzaMachine}
            alt="Pizza Machine"
            style={{
              width: '100%',
              height: '450px',
              objectFit: "contain",
            }}
          />
        </Box>
      </Box>

      {/* Specifications Section */}
      <Box className="section-container" sx={{ p: 0 }}>
        <Typography variant="h2" className='headings-h2' sx={{ color: '#fcfcfc', mb: 2, textAlign: 'center' }}>
          {t('products.PizzaMachine.specifications.title')}
        </Typography>
        <Typography variant="body1" className='bodyRegularText3' sx={{ color: '#C2C2C4', mb: 4, textAlign: 'center' }}>
          {t('products.PizzaMachine.specifications.subtitle')}
        </Typography>

        <Grid container spacing={1}>
          {/* First Row - 3 boxes */}
          <Grid item xs={12} sm={4}>
            <Paper sx={{
              bgcolor: '#161616',
              border: 'solid 1px #393939',
              borderRadius: '24px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              p: 3,
            }}>
              <Typography variant="body2" className='bodyRegularText4' color='#9D9EA1' sx={{ mb: 1 }}>
                {t('products.PizzaMachine.specifications.dimensions')}
              </Typography>
              <Typography variant="h5" fontWeight="bold" color='#FCFCFC' className='bodyRegularText4'>
                {t('products.PizzaMachine.specifications.dimensionsValue')}
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Paper sx={{
              bgcolor: '#161616',
              border: 'solid 1px #393939',
              borderRadius: '24px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              p: 3,
            }}>
              <Typography variant="body2" className='bodyRegularText4' color='#9D9EA1' sx={{ mb: 1 }}>
                {t('products.PizzaMachine.specifications.weight')}
              </Typography>
              <Typography variant="h5" fontWeight="bold" color='#FCFCFC' className='bodyRegularText4'>
                {t('products.PizzaMachine.specifications.weightValue')}
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Paper sx={{
              bgcolor: '#161616',
              border: 'solid 1px #393939',
              borderRadius: '24px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              p: 3,
            }}>
              <Typography variant="body2" className='bodyRegularText4' color='#9D9EA1' sx={{ mb: 1 }}>
                {t('products.PizzaMachine.specifications.powerSupply')}
              </Typography>
              <Typography variant="h5" fontWeight="bold" color='#FCFCFC' className='bodyRegularText4'>
                {t('products.PizzaMachine.specifications.powerSupplyValue')}
              </Typography>
            </Paper>
          </Grid>

          {/* Second Row - 3 boxes */}
          <Grid item xs={12} sm={4}>
            <Paper sx={{
              bgcolor: '#161616',
              border: 'solid 1px #393939',
              borderRadius: '24px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              p: 3,
            }}>
              <Typography variant="body2" className='bodyRegularText4' color='#9D9EA1' sx={{ mb: 1 }}>
                {t('products.PizzaMachine.specifications.temperatureRange')}
              </Typography>
              <Typography variant="h5" fontWeight="bold" color='#FCFCFC' className='bodyRegularText4'>
                {t('products.PizzaMachine.specifications.temperatureRangeValue')}
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Paper sx={{
              bgcolor: '#161616',
              border: 'solid 1px #393939',
              borderRadius: '24px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              p: 3,
            }}>
              <Typography variant="body2" className='bodyRegularText4' color='#9D9EA1' sx={{ mb: 1 }}>
                {t('products.PizzaMachine.specifications.connectivity')}
              </Typography>
              <Typography variant="h5" fontWeight="bold" color='#FCFCFC' className='bodyRegularText4'>
                {t('products.PizzaMachine.specifications.connectivityValue')}
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Paper sx={{
              bgcolor: '#161616',
              border: 'solid 1px #393939',
              borderRadius: '24px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              p: 3,
            }}>
              <Typography className='bodyRegularText4' color='#9D9EA1' sx={{ mb: 1 }}>
                {t('products.PizzaMachine.specifications.heatingTime')}
              </Typography>
              <Typography fontWeight="bold" color='#FCFCFC' className='bodyRegularText4'>
                {t('products.PizzaMachine.specifications.heatingTimeValue')}
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>



      {/* Installation Requirements Section */}
      <Box className="section-container" sx={{ p: 0, width: '100%' }}>


        <Box sx={{
          width: '100%',
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'space-between',
          gap: { xs: 2, md: 3 },

        }}>


          {/* Left Column - Requirements */}
          < Box sx={{ width: { xs: '100%', sm: '100%', md: '50%' }, }}>
            <Typography variant="h2" className='headings-h3' sx={{
              color: '#fcfcfc',
              mb: 2,
            }}>
              {t('products.PizzaMachine.installation.title')}
            </Typography>
            <Box sx={{
              backgroundColor: '#161616',
              border: '1px solid #393939',
              borderRadius: '24px',
              p: { xs: 2, md: 4 },
            }}>
              <List sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 2, md: 3, lg: 5 } }}>
                {[
                  t('products.PizzaMachine.installation.requirement1'),
                  t('products.PizzaMachine.installation.requirement2'),
                  t('products.PizzaMachine.installation.requirement3'),
                  t('products.PizzaMachine.installation.requirement4'),
                  t('products.PizzaMachine.installation.requirement5')
                ].map((item, index) => (
                  <ListItem key={index} sx={{ display: 'flex', alignItems: { xs: 'center', md: 'flex-start' }, p: 0 }}>
                    <Box sx={{ maxWidth: { xs: '18px', md: '24px' }, mr: 2, display: 'flex', alignItems: 'center', width: 'auto' }}>
                      <svg width="100%" height="100%" viewBox="0 0 21 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="10" cy="10" r="9.5" fill="#161616" stroke="#7FEE64" />
                        <path d="M5 10L8.5 13.5L15 7" stroke="#7FEE64" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </Box>
                    <Typography sx={{ color: '#c2c2c4' }} className="bodyRegularText4">
                      {item}
                    </Typography>
                  </ListItem>
                ))}
              </List>
            </Box>
          </Box>

          {/* Right Column - Use Cases */}
          <Box sx={{ width: { xs: '100%', sm: '100%', md: '50%' }, }}>
            <Box>
              <Typography variant="h3" sx={{
                color: '#fcfcfc',
                mb: 2,
                textAlign: { xs: 'left', sm: 'left', md: 'left' }
              }} className="headings-h3">
                {t('machines.IdealFor')}
              </Typography>

              <Box sx={{ display: 'flex', gap: { xs: '10px', md: '30px ' }, flexWrap: 'wrap' }}>
                {[
                  { icon: SnackBar, label: t('machines.SnackBars') },
                  { icon: CampingSite, label: t('machines.CampingSites') },
                  { icon: OfficaCenters, label: t('machines.Officecenters') },
                  { icon: Companies, label: t('machines.Companies') },
                ].map((item, index) => (
                  <Box sx={{ display: 'flex', flexDirection: "column", justifyContent: "center", alignItems: "center" }} key={index}>
                    <Box sx={{ mb: { xs: 0, md: 2, lg: 3 } }}>
                      <item.icon className='custom-icons' />
                    </Box>
                    <Typography sx={{
                      color: '#fcfcfc',
                    }} className="bodyRegularText4">
                      {item.label}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Features & Benefits Section */}
      <Box className="section-container" sx={{ p: 0, mb: { xs: '150px', md: "270px" }, width: '100%' }} >
        <Typography

          className="headings-h3"
          sx={{
            color: '#fcfcfc',
            mb: 4,
          }}
        >
          {t('products.PizzaMachine.features.title')}
        </Typography>

        <Grid container rowSpacing={{ xs: 8, sm: 8, md: 10, lg: 11 }} columnSpacing={2.5}>
          {[
            {
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="60"
                  height="60"
                  viewBox="0 0 60 60"
                  fill="none"
                >
                  <path
                    d="M50.3378 20.0165H9.66217C7.09999 20.0189 4.64502 21.0394 2.83388 22.8492C1.02244 24.6613 0.00475924 27.1172 0 29.6802V50.3339C0.00476717 52.8971 1.0225 55.3531 2.83388 57.165C4.64526 58.9768 7.10024 59.9952 9.66217 60H50.3378C52.9 59.9952 55.355 58.9771 57.1661 57.165C58.9772 55.3529 59.9952 52.8969 60 50.3339V29.6802C59.9952 27.117 58.9775 24.661 57.1661 22.8492C55.3547 21.0394 52.8998 20.0189 50.3378 20.0165ZM25.829 23.0685H34.1686V56.9485H25.829V23.0685ZM22.7782 56.9485H14.4385L14.4409 23.0685H22.7805L22.7782 56.9485ZM37.2194 23.0685H45.5591V56.9485H37.2194V23.0685ZM3.05049 50.3342V29.6805C3.05526 26.0299 6.01312 23.0734 9.66217 23.0685H11.3925V56.9485H9.66217C6.01312 56.9437 3.05537 53.9847 3.05049 50.3342ZM56.9471 50.3342L56.9495 50.3318C56.9447 53.9847 53.9892 56.9437 50.3378 56.9486H48.6098V23.0686H50.3378C53.9868 23.0734 56.9446 26.03 56.9495 29.6805L56.9471 50.3342Z"
                    fill="#FA7854"
                  />
                  <path
                    d="M19.1648 13.5761C19.1171 13.6524 19.0742 13.7335 19.0218 13.805H19.0242C18.7763 14.1364 18.6714 14.5514 18.7358 14.9614C18.8001 15.3692 19.0266 15.7316 19.365 15.97C19.701 16.2084 20.1205 16.299 20.5281 16.2227C20.9332 16.1441 21.2884 15.9056 21.5172 15.5623C21.6173 15.4216 21.7102 15.2714 21.8056 15.1069C23.2737 12.496 23.0044 9.25319 21.1287 6.92132C19.3316 4.45821 20.1109 3.0157 20.5185 2.50778C20.5423 2.47916 20.5924 2.4124 20.6138 2.38379C21.0834 1.71612 20.938 0.795752 20.2849 0.304619C19.6224 -0.186568 18.6904 -0.0697304 18.1684 0.569285C17.4891 1.38235 15.5252 4.41533 18.7786 8.86471C19.8201 10.2238 19.9704 12.0644 19.1648 13.5761Z"
                    fill="#FA7854"
                  />
                  <path
                    d="M29.3233 13.5926C29.2828 13.6641 29.2375 13.7357 29.1899 13.8048C28.942 14.1362 28.8395 14.5511 28.9038 14.9612C28.9682 15.3689 29.1946 15.7314 29.533 15.9698C29.8691 16.2082 30.2886 16.2988 30.6937 16.2225C31.1013 16.1438 31.4564 15.9054 31.6853 15.5621C31.7901 15.4166 31.8878 15.2593 31.9737 15.1067C33.4418 12.4958 33.1725 9.25299 31.2967 6.92111C29.4996 4.458 30.279 3.01549 30.6866 2.50757C30.7104 2.48134 30.7629 2.41458 30.7843 2.38358C31.2538 1.71592 31.1085 0.795545 30.4554 0.304412C29.7928 -0.186775 28.8632 -0.0723241 28.3389 0.566698C27.6596 1.37976 25.6957 4.41751 28.949 8.86456C29.9906 10.2285 30.1385 12.0785 29.3233 13.5926Z"
                    fill="#FA7854"
                  />
                  <path
                    d="M39.5026 13.5761C39.4549 13.6524 39.4097 13.7335 39.3572 13.805C39.1093 14.1364 39.0069 14.5514 39.0712 14.9614C39.1356 15.3692 39.362 15.7316 39.698 15.97C40.0365 16.2084 40.456 16.299 40.8611 16.2227C41.2663 16.1441 41.6238 15.9056 41.8502 15.5623C41.9503 15.4216 42.0528 15.2714 42.1434 15.1045C43.6068 12.4936 43.3375 9.25557 41.4641 6.92137C39.667 4.45826 40.4464 3.01575 40.854 2.50783C40.8778 2.4816 40.9302 2.41484 40.9517 2.38384C41.4212 1.71618 41.2758 0.795807 40.6228 0.304674C39.9602 -0.186513 39.0282 -0.0720621 38.5062 0.56696C37.827 1.38002 35.863 4.41777 39.1164 8.86482C40.1532 10.224 40.3058 12.0644 39.5026 13.5761Z"
                    fill="#FA7854"
                  />
                </svg>
              ),
              title: t('products.PizzaMachine.features.feature1.title'),
              description: t('products.PizzaMachine.features.feature1.description'),
            },
            {
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="60"
                  height="60"
                  viewBox="0 0 60 60"
                  fill="none"
                >
                  <path
                    d="M58.3857 1.63268C57.336 0.582918 55.9091 0 54.4295 0H5.58883C4.12501 0 2.68233 0.601366 1.63261 1.63268C0.582892 2.66395 0 4.09089 0 5.58907V54.4109C0 55.9117 0.580239 57.3176 1.63261 58.3673C2.68233 59.4171 4.10921 60 5.58883 60H54.4085C55.8723 60 57.315 59.3986 58.3648 58.3673C59.4145 57.3361 59.9974 55.9091 59.9974 54.4109L60 5.58907C60 4.08826 59.4198 2.68245 58.3674 1.63268H58.3857ZM56.9799 54.4134C56.9799 55.0886 56.7162 55.7454 56.2309 56.2149C55.7429 56.6843 55.1047 56.9639 54.4295 56.9639H5.58883C4.91364 56.9639 4.25688 56.6817 3.78742 56.2149C3.31795 55.7454 3.03836 55.0886 3.03836 54.4134V5.5888C3.03836 4.91358 3.3021 4.2568 3.78742 3.78731C4.27535 3.31783 4.91364 3.03822 5.58883 3.03822H54.4085C55.0837 3.03822 55.7405 3.32045 56.2099 3.78731C56.6794 4.2568 56.959 4.91358 56.959 5.5888V54.4107L56.9799 54.4134Z"
                    fill="#FA7854"
                  />
                  <path
                    d="M44.2438 38.6566C40.5672 38.6566 37.4737 41.2836 36.7613 44.752H9.65848C8.81449 44.752 8.1393 45.4273 8.1393 46.2713C8.1393 47.1153 8.81449 47.7905 9.65848 47.7905H36.7796C37.4917 51.2616 40.567 53.8859 44.262 53.8859C48.4635 53.8859 51.8951 50.4545 51.8951 46.2526C51.8951 42.0509 48.4822 38.6192 44.262 38.6192L44.2438 38.6566ZM44.2438 50.866C41.7118 50.866 39.6678 48.8034 39.6678 46.2898C39.6678 43.7762 41.7118 41.7136 44.2438 41.7136C46.7758 41.7136 48.8198 43.7762 48.8198 46.2898C48.8198 48.8034 46.7758 50.866 44.2438 50.866Z"
                    fill="#FA7854"
                  />
                  <path
                    d="M50.3604 28.4912H37.4946C36.7825 25.0201 33.7072 22.3957 30.0121 22.3957C26.3171 22.3957 23.242 25.0227 22.5296 28.4912H9.66388C8.81989 28.4912 8.1447 29.1664 8.1447 30.0104C8.1447 30.8544 8.81989 31.5296 9.66388 31.5296H22.5296C23.2418 35.0007 26.3171 37.6251 30.0121 37.6251C33.7072 37.6251 36.7823 34.9981 37.4946 31.5296H50.3604C51.2043 31.5296 51.8795 30.8544 51.8795 30.0104C51.8795 29.1664 51.2043 28.4912 50.3604 28.4912ZM30.0094 34.5866C27.4774 34.5866 25.4334 32.524 25.4334 30.0104C25.4334 27.4968 27.4774 25.4342 30.0094 25.4342C32.5414 25.4342 34.5854 27.4968 34.5854 30.0104C34.5854 32.524 32.5414 34.5866 30.0094 34.5866Z"
                    fill="#FA7854"
                  />
                  <path
                    d="M50.3604 12.2123H23.2393C22.5271 8.74121 19.4519 6.11683 15.7568 6.11683C11.5553 6.11683 8.12377 9.5483 8.12377 13.7502C8.12377 17.9519 11.5367 21.3836 15.7568 21.3836C19.4334 21.3836 22.5269 18.7566 23.2393 15.2882H50.3604C51.2043 15.2882 51.8795 14.6129 51.8795 13.7689C51.8795 12.9249 51.2043 12.2497 50.3604 12.2497V12.2123ZM15.775 18.3077C13.2431 18.3077 11.1991 16.2451 11.1991 13.7315C11.1991 11.2179 13.2431 9.15532 15.775 9.15532C18.307 9.15532 20.351 11.2179 20.351 13.7315C20.351 16.2451 18.307 18.3077 15.775 18.3077Z"
                    fill="#FA7854"
                  />
                </svg>
              ),
              title: t('products.PizzaMachine.features.feature2.title'),
              description: t('products.PizzaMachine.features.feature2.description'),
            },
            {
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="60"
                  height="60"
                  viewBox="0 0 60 60"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0 57.8571V40.7143C0 39.5303 0.958903 38.5714 2.14286 38.5714C3.32681 38.5714 4.28572 39.5303 4.28572 40.7143V52.6848L24.1982 32.7723C25.0339 31.9366 26.3919 31.9366 27.2277 32.7723C28.0634 33.6081 28.0634 34.9661 27.2277 35.8018L7.3152 55.7143H19.2857C20.4697 55.7143 21.4286 56.6732 21.4286 57.8571C21.4286 59.0411 20.4697 60 19.2857 60H2.14286C1.57232 60 1.03125 59.775 0.626812 59.3732C0.225024 58.9714 0 58.4277 0 57.8571ZM55.7143 7.3152L35.8018 27.2277C34.9661 28.0634 33.6081 28.0634 32.7724 27.2277C31.9366 26.3919 31.9366 25.0339 32.7724 24.1982L52.6848 4.28571H40.7143C39.5303 4.28571 38.5714 3.32681 38.5714 2.14286C38.5714 0.958903 39.5303 0 40.7143 0H57.8572C58.4277 0 58.9688 0.224997 59.3732 0.626784C59.775 1.02857 60 1.57232 60 2.14283V19.2857C60 20.4696 59.0411 21.4285 57.8571 21.4285C56.6732 21.4285 55.7143 20.4696 55.7143 19.2857L55.7143 7.3152Z"
                    fill="#FA7854"
                  />
                </svg>
              ),
              title: t('products.PizzaMachine.features.feature3.title'),
              description: t('products.PizzaMachine.features.feature3.description'),
            },
            {
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="60"
                  height="60"
                  viewBox="0 0 60 60"
                  fill="none"
                >
                  <path
                    d="M52.8616 18.2255L37.9961 3.36499C36.3564 1.72295 34.1737 0.820304 31.8503 0.820304C29.527 0.820304 27.3472 1.72568 25.7046 3.36499L23.3756 5.69315L18.1187 0.440747C17.5308 -0.146916 16.5829 -0.146916 15.9979 0.440747C15.41 1.02841 15.41 1.97596 15.9979 2.56081L21.2549 7.81321L7.81581 21.2478L2.56166 15.9926C1.9738 15.4049 1.02594 15.4049 0.440893 15.9926C-0.146964 16.5803 -0.146964 17.5278 0.440893 18.1127L5.69504 23.3679L3.3661 25.696C1.72633 27.3381 0.820576 29.5172 0.820576 31.8398C0.820576 34.1595 1.72626 36.3414 3.3661 37.9835L18.2316 52.8441C23.0047 57.6156 29.2714 60 35.5438 60C41.3436 60 47.1265 57.9333 51.7421 53.8506L55.0667 57.1742C55.3592 57.4666 55.7446 57.6128 56.1271 57.6128C56.5125 57.6128 56.895 57.4666 57.1875 57.1742C57.7754 56.5865 57.7754 55.6389 57.1875 55.0541L53.8629 51.7306C62.3602 42.1311 62.042 27.4175 52.856 18.2312L52.8616 18.2255ZM50.7408 50.7186C42.3616 59.0893 28.7346 59.0893 20.3582 50.7186L5.49278 35.8581C4.41832 34.784 3.82485 33.3556 3.82485 31.8373C3.82485 30.3161 4.41833 28.8905 5.49278 27.8165L8.87925 24.4311H8.88207C8.88488 24.4311 8.88207 24.4311 8.88207 24.4283L27.8309 5.48857C28.9054 4.41447 30.3343 3.8212 31.8531 3.8212C33.3719 3.8212 34.8008 4.41448 35.8752 5.48857L50.7407 20.3491C59.1171 28.7227 59.1171 42.348 50.7407 50.7216L50.7408 50.7186Z"
                    fill="#FA7854"
                  />
                </svg>
              ),
              title: t('products.PizzaMachine.features.feature4.title'),
              description: t('products.PizzaMachine.features.feature4.description'),
            },
            {
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="34"
                  height="60"
                  viewBox="0 0 34 60"
                  fill="none"
                >
                  <path
                    d="M1.97105 5.89487C2.35353 5.89487 2.65645 5.59211 2.65645 5.20393V1.38188H6.44783C6.83031 1.38188 7.13323 1.07912 7.13323 0.690942C7.13323 0.305372 6.8329 0 6.44783 0H1.97105C1.58858 0 1.28566 0.302762 1.28566 0.690942V5.20393C1.28566 5.5895 1.58856 5.89487 1.97105 5.89487Z"
                    fill="#FA7854"
                  />
                  <path
                    d="M21.385 1.38222H25.1764V5.20426C25.1764 5.58983 25.4767 5.8952 25.8618 5.8952C26.2443 5.8952 26.5472 5.59244 26.5472 5.20426L26.5446 0.691273C26.5446 0.305704 26.2443 0.000331046 25.8592 0.000331046H21.385C21.0025 0.000331046 20.6996 0.303094 20.6996 0.691273C20.6996 1.07684 20.9999 1.38222 21.385 1.38222Z"
                    fill="#FA7854"
                  />
                  <path
                    d="M21.385 19.4467H25.8618C26.2443 19.4467 26.5472 19.144 26.5472 18.7558V14.2428C26.5472 13.8572 26.2468 13.5519 25.8618 13.5519C25.4793 13.5519 25.1764 13.8546 25.1764 14.2428V18.0649L21.385 18.0674C21.0025 18.0674 20.6996 18.3702 20.6996 18.7584C20.6996 19.144 20.9999 19.4467 21.385 19.4467Z"
                    fill="#FA7854"
                  />
                  <path
                    d="M1.97105 19.4467H6.44783C6.83031 19.4467 7.13323 19.144 7.13323 18.7558C7.13323 18.3702 6.8329 18.0649 6.44783 18.0649H2.65645V14.2428C2.65645 13.8572 2.35612 13.5519 1.97105 13.5519C1.58858 13.5519 1.28566 13.8546 1.28566 14.2428V18.7558C1.28566 19.144 1.58856 19.4467 1.97105 19.4467Z"
                    fill="#FA7854"
                  />
                  <path
                    d="M30.6671 25.6579C29.6121 25.1896 28.6674 25.4095 27.9564 25.7821C27.5046 24.4572 26.2597 23.505 24.7939 23.505C23.6978 23.505 22.7404 24.0432 22.1243 24.8584C21.5082 24.0432 20.5508 23.505 19.4546 23.505C18.7025 23.505 18.03 23.7534 17.4704 24.1803L17.4678 16.205C19.275 15.0586 20.3967 13.0583 20.3967 10.8769C20.3967 7.38606 17.591 4.55505 14.1411 4.55505C10.6782 4.55505 7.86995 7.38341 7.86995 10.8769C7.86995 12.9186 8.88392 14.8516 10.5396 16.0394C10.306 22.2085 9.95175 31.8556 9.88245 36.0092C9.88245 36.1049 9.82854 36.1748 9.7464 36.2032C9.69249 36.2162 9.58211 36.2446 9.48714 36.1204C9.06359 35.5951 8.58356 34.6998 8.06245 33.7475C6.67884 31.152 4.94103 27.9225 2.27139 28.6549C1.4217 28.8904 0.780006 29.4829 0.394921 30.3809C-0.521464 32.5753 0.189564 36.4957 2.18925 40.1389C3.84492 43.1613 6.03714 45.3428 7.78777 47.1079C9.11486 48.4328 10.211 49.5378 10.5934 50.503H9.84133C9.45886 50.503 9.15594 50.8058 9.15594 51.194V59.3091C9.15594 59.6946 9.45627 60 9.84133 60L31.3778 59.9948C31.7603 59.9948 32.0632 59.6921 32.0632 59.3039V51.1888C32.0632 50.8032 31.7629 50.4978 31.3778 50.4978H30.9671C31.1032 50.001 31.3085 49.3515 31.555 48.6347C32.7999 44.9627 35.0999 38.1467 33.3904 29.6851C33.1029 28.2541 32.2121 26.334 30.6668 25.6586L30.6671 25.6579ZM9.24101 10.8772C9.24101 8.15749 11.4461 5.93727 14.1413 5.93727C16.8392 5.93727 19.0288 8.16014 19.0288 10.8772C19.0288 12.272 18.4538 13.5684 17.4681 14.4922V10.533C17.4681 8.66983 15.9613 7.15082 14.1131 7.15082C12.2649 7.15082 10.758 8.66984 10.758 10.5045C10.758 10.5589 10.7041 12.0494 10.6066 14.3007C9.74664 13.3898 9.24101 12.1737 9.24101 10.8772ZM30.6934 58.6284H10.5428V51.8925L30.6934 51.8951V58.6284ZM30.257 48.2099C29.9285 49.1907 29.682 49.936 29.5588 50.5156L12.0473 50.513C11.7187 49.0768 10.3916 47.7519 8.7744 46.1372C7.07766 44.4396 4.96758 42.3281 3.40687 39.4841C1.65361 36.309 0.929773 32.7072 1.68187 30.9418C1.90006 30.432 2.2158 30.1266 2.65477 30.0024C4.28481 29.5754 5.72231 32.2511 6.88512 34.4197C7.43188 35.4263 7.94016 36.3785 8.44583 37.0152C8.88478 37.5405 9.56757 37.7475 10.2119 37.512C10.8408 37.292 11.2515 36.7124 11.2669 36.0344C11.3773 29.7281 12.1423 10.7497 12.1423 10.5298C12.1423 9.42483 13.033 8.52952 14.1265 8.52952C15.2226 8.52952 16.1107 9.42748 16.1107 10.5298V31.1203C16.1107 31.5059 16.4111 31.8112 16.7961 31.8112C17.1786 31.8112 17.4815 31.5085 17.4815 31.1203V26.8842C17.4815 25.7792 18.3723 24.8839 19.4658 24.8839C20.5619 24.8839 21.45 25.7819 21.45 26.8842V31.1203C21.45 31.5059 21.7504 31.8112 22.1354 31.8112C22.5179 31.8112 22.8208 31.5085 22.8208 31.1203V26.8842C22.8208 25.7792 23.7116 24.8839 24.8051 24.8839C25.9012 24.8839 26.7893 25.7819 26.7893 26.8842V31.1203C26.7893 31.5059 27.0896 31.8112 27.4747 31.8112C27.8572 31.8112 28.1601 31.5085 28.1601 31.1203V27.3112C28.4604 27.0213 29.1869 26.5116 30.1187 26.9101C30.9684 27.2827 31.7487 28.5377 32.0362 29.961C33.6791 38.0655 31.5431 44.4134 30.257 48.2099Z"
                    fill="#FA7854"
                  />
                </svg>
              ),
              title: t('products.PizzaMachine.features.feature5.title'),
              description: t('products.PizzaMachine.features.feature5.description'),
            },
            {
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="60"
                  height="60"
                  viewBox="0 0 60 60"
                  fill="none"
                >
                  <path
                    d="M30 60C13.4579 60 0 46.5421 0 30C0 13.4579 13.4579 0 30 0C46.5421 0 60 13.4579 60 30C60 46.5421 46.5421 60 30 60ZM30 2.95887C15.0898 2.95887 2.95887 15.0898 2.95887 30C2.95887 44.9102 15.0898 57.0411 30 57.0411C44.9102 57.0411 57.0411 44.9102 57.0411 30C57.0411 15.0898 44.9102 2.95887 30 2.95887Z"
                    fill="#FA7854"
                  />
                  <path
                    d="M43.4229 47.8459L39.2756 33.9028C39.1735 30.1923 36.9109 27.0175 33.6986 25.5942V12.3198C33.6986 10.2347 32.0027 8.53881 29.9176 8.53881C27.8331 8.53881 26.1372 10.2347 26.1372 12.3198V25.5942C22.9253 27.0175 20.6638 30.1918 20.5617 33.9008L16.4129 47.8445H43.4229V47.8459ZM37.1057 44.8871L35.4137 38.5719C35.2722 38.0467 34.7347 37.7315 34.206 37.875C33.6799 38.0151 33.3677 38.5561 33.5087 39.0823L35.0631 44.8871H30.9034V38.8263C30.9034 38.2819 30.4616 37.84 29.9172 37.84C29.3727 37.84 28.9309 38.2819 28.9309 38.8263V44.8856H25.2643L26.8192 39.0813C26.9603 38.5556 26.6481 38.0141 26.1219 37.8736C25.5952 37.731 25.0547 38.0452 24.9142 38.5709L23.2222 44.8856H20.3787L23.13 35.6391C23.132 35.6391 23.1339 35.6391 23.1359 35.6391H36.6974C36.6994 35.6391 36.7014 35.6391 36.7043 35.6391L39.4541 44.8856H37.1052L37.1057 44.8871ZM29.0961 12.3198C29.0961 11.8666 29.4649 11.4977 29.9176 11.4977C30.3708 11.4977 30.7397 11.8666 30.7397 12.3198V24.8323C30.4685 24.8087 30.1953 24.7909 29.9181 24.7909C29.641 24.7909 29.3673 24.8087 29.0961 24.8323V12.3198ZM29.9181 27.7498C32.9431 27.7498 35.4784 29.8585 36.15 32.6812H23.6863C24.3569 29.858 26.8932 27.7498 29.9181 27.7498Z"
                    fill="#FA7854"
                  />
                </svg>
              ),
              title: t('products.PizzaMachine.features.feature6.title'),
              description: t('products.PizzaMachine.features.feature6.description'),
            },
          ].map((feature, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Box
                sx={{
                  backgroundColor: '#161616',
                  border: '1px solid #393939',
                  borderRadius: '24px',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  // flexDirection: 'column',
                  gap: { xs: 1, md: 2 },
                  px: { xs: 2, md: 4 },
                  py: { xs: 3, md: 4 },
                }}
              >
                {/* Header */}
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 2.5,
                    mb: 2,
                  }}
                >
                  {feature.icon && (
                    <Box
                      sx={{
                        width: { xs: 30, md: 48 },
                        height: { xs: 30, md: 48 },
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      {feature.icon}
                    </Box>
                  )}

                  <Typography
                    className="bodyRegularText3"
                    sx={{
                      mt: 1,
                      color: '#fcfcfc',
                      lineHeight: 1.3,
                    }}
                  >
                    {feature.title}
                  </Typography>
                </Box>

                {/* Description */}
                <Typography
                  className="bodyRegularText4"
                  sx={{
                    color: '#c2c2c4',
                    lineHeight: 1.6,
                  }}
                >
                  {feature.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
      {/* Accessories & Add-ons Section */}
      <Box className="section-container" sx={{ p: 0, mb:{xs:'140px', sm:'140px', md:'140px', lg:'240px'}, width: '100%' }}>
        <Box sx={{ mb: 4 }}>
          <Typography className='headings-h3' sx={{ color: '#fcfcfc', mb: 1, textAlign: 'center' }}>
            {t('products.gourmetMachine.accessories.title')}
          </Typography>
          <Typography sx={{ color: '#c2c2c4', textAlign: 'center' }} className="bodyRegularText3">
            {t('products.gourmetMachine.accessories.subtitle')}
          </Typography>
        </Box>

        <Grid container rowSpacing={7} columnSpacing={2}>
          {[
            {
              title: t('products.PizzaMachine.accessories.category1.title'),
              items: [
                t('products.PizzaMachine.accessories.category1.item1'),
                t('products.PizzaMachine.accessories.category1.item2'),
                t('products.PizzaMachine.accessories.category1.item3'),
                t('products.PizzaMachine.accessories.category1.item4')
              ],
            },
            {
              title: t('products.PizzaMachine.accessories.category2.title'),
              items: [
                t('products.PizzaMachine.accessories.category2.item1'),
                t('products.PizzaMachine.accessories.category2.item2'),
                t('products.PizzaMachine.accessories.category2.item3'),
                t('products.PizzaMachine.accessories.category2.item4'),
                t('products.PizzaMachine.accessories.category2.item5')
              ],
            },
            {
              title: t('products.PizzaMachine.accessories.category3.title'),
              items: [
                t('products.PizzaMachine.accessories.category3.item1'),
                t('products.PizzaMachine.accessories.category3.item2'),
                t('products.PizzaMachine.accessories.category3.item3'),
                t('products.PizzaMachine.accessories.category3.item4')
              ],
            },
            {
              title: t('products.PizzaMachine.accessories.category4.title'),
              items: [
                t('products.PizzaMachine.accessories.category4.item1'),
                t('products.PizzaMachine.accessories.category4.item2'),
                t('products.PizzaMachine.accessories.category4.item3'),
                t('products.PizzaMachine.accessories.category4.item4'),
                t('products.PizzaMachine.accessories.category4.item5')
              ],
            },
            {
              title: t('products.PizzaMachine.accessories.category5.title'),
              items: [
                t('products.PizzaMachine.accessories.category5.item1'),
                t('products.PizzaMachine.accessories.category5.item2'),
                t('products.PizzaMachine.accessories.category5.item3'),
                t('products.PizzaMachine.accessories.category5.item4')
              ],
            },
            {
              title: t('products.PizzaMachine.accessories.category6.title'),
              items: [
                t('products.PizzaMachine.accessories.category6.item1'),
                t('products.PizzaMachine.accessories.category6.item2'),
                t('products.PizzaMachine.accessories.category6.item3'),
                t('products.PizzaMachine.accessories.category6.item4')
              ],
            }
          ].map((category, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Box sx={{
                backgroundColor: '#161616',
                border: '1px solid #393939',
                borderRadius: '24px',
                px: 4,
                py: 2.4,
                height: '100%'
              }}>
                <Typography variant="h3" sx={{
                  color: '#fcfcfc',
                  mb: 3,
                }} className='bodyRegularText3'>
                  <strong>{category.title}</strong>
                </Typography>
                <List sx={{ pl: '16px', listStyleType: "disc" }}>
                  {category.items.map((item, itemIndex) => (
                    <ListItem key={itemIndex} sx={{ p: 0, mb: 2, display: "list-item", alignItems: 'flex-start' }}>
                      <Typography sx={{ color: '#c2c2c4', fontSize: { xl: '32px' } }} className="bodyRegularText4">
                        {item}
                      </Typography>
                    </ListItem>
                  ))}
                </List>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box className="section-container" sx={{ p: 0, width: '100%', boxSizing: 'border-box' }}>
        <Box sx={{ mb: { xs: 3, md: 4 }, textAlign: 'center' }}>
          <Typography variant="h2" className='headings-h2' sx={{ color: '#fcfcfc', mb: 2, textAlign: 'center' }}>
            {t('products.PizzaMachine.pricing.title')}
          </Typography>
          <Typography className="bodyRegularText3" sx={{ color: '#c2c2c4', mb: 1, textAlign: 'center' }}>
            {t('products.PizzaMachine.pricing.subtitle')}
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'center',
            width: '100%',
            alignItems: { xs: 'center', md: 'stretch' },
            gap: { xs: 3, sm: 4, md: 3 },
          }}
        >
        
          {/* Leasing Option */}
          <Box
            sx={{
              width: { xs: '95%', sm: '95%', md: '100%', lg: '32%' },
              display: 'flex',
              flexDirection: 'column',
              bgcolor: '#161616',
              border: '1px solid #393939',
              borderRadius: '24px !important',
              p: 1,
              maxWidth: { sm: "95%", md: '500px' },
            }}
          >
            <Box
              sx={{
                bgcolor: '#161616',
                width: '100%',
                height: '100%',
                my: 2,
                mx: { sm: 0, md: 1 },
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <Typography sx={{ textAlign: 'center', mb: 2, color: '#c2c2c4' }} className="bodyRegularText2">
                {t('products.PizzaMachine.pricing.leasing.title')}
              </Typography>

              <Typography sx={{ textAlign: 'center', mb: 2, color: '#FA7854' }} className="headings-h4">
                {t('products.PizzaMachine.pricing.leasing.price')}
              </Typography>

              <Typography sx={{ textAlign: 'center', color: '#c2c2c4', mb: 1 }} className="bodyRegularText3">
                {t('products.PizzaMachine.pricing.leasing.frequency')}
              </Typography>

              <List sx={{ p: 0, my: { xs: 4, md: 8 }, flexGrow: 1 }}>
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <ListItem key={i}>
                    <ListItemIcon sx={{ minWidth: 30 }}>
                      <TickIcon />
                    </ListItemIcon>
                    <Typography
                      className="bodyRegularText3"
                      sx={{
                        color: '#c2c2c4',
                        lineHeight: 1.5,
                      }}
                    >
                      {t(`products.PizzaMachine.pricing.leasing.benefit${i}`)}
                    </Typography>
                  </ListItem>
                ))}
              </List>

              <Box sx={{ display: 'flex', justifyContent: 'center', mt: 'auto', pt: 2 }}>
                <Button
                  sx={{
                    padding: '20px 32px',
                    backgroundColor: '#fcfcfc',
                    color: '#1A1A1A',
                    borderRadius: '32px',
                    textTransform: 'none',
                    m: '10px',
                    '&:hover': { backgroundColor: '#7FEE64' },
                  }}
                  className="bodyRegularText4"
                  onClick={handleLeasing} // Updated handler
                >
                  {t('products.PizzaMachine.pricing.getStarted')}
                </Button>
              </Box>
            </Box>
          </Box>

          {/* Hire-Purchase Option - Rental Purchase */}
          <Box
            sx={{
              width: { xs: '95%', sm: '95%', md: '100%', lg: '32%' },
              display: 'flex',
              flexDirection: 'column',
              bgcolor: '#161616',
              border: '1px solid #393939',
              borderRadius: '24px !important',
              p: 1,
              maxWidth: { sm: "95%", md: '500px' },
            }}
          >
            <Box
              sx={{
                bgcolor: '#161616',
                width: '100%',
                height: '100%',
                display: 'flex',
                my: 2,
                mx: { sm: 0, md: 1 },
                flexDirection: 'column',
              }}
            >
              <Typography sx={{ textAlign: 'center', mb: 2, color: '#c2c2c4' }} className="bodyRegularText3">
                 {t('products.gourmetMachine.pricing.hirePurchase.title')}
              </Typography>

              <Typography sx={{ textAlign: 'center', mb: 2, color: '#FA7854' }} className="headings-h4">
                {t('products.PizzaMachine.pricing.hirePurchase.price')}
              </Typography>

              <Typography sx={{ textAlign: 'center', color: '#c2c2c4', mb: 1 }} className="bodyRegularText3">
                {t('products.PizzaMachine.pricing.hirePurchase.frequency')}
              </Typography>

              <List sx={{ p: 0, my: { xs: 4, md: 8 }, flexGrow: 1 }}>
                {[1, 2, 3, 4, 5].map((i) => (
                  <ListItem key={i}>
                    <ListItemIcon sx={{ minWidth: 30 }}>
                      <TickIcon />
                    </ListItemIcon>
                    <Typography
                      className="bodyRegularText3"
                      sx={{
                        color: '#c2c2c4',
                        lineHeight: 1.5,
                      }}
                    >
                      {t(`products.PizzaMachine.pricing.hirePurchase.benefit${i}`)}
                    </Typography>
                  </ListItem>
                ))}
              </List>

              <Box sx={{ display: 'flex', justifyContent: 'center', mt: 'auto', pt: 2 }}>
                <Button
                  sx={{
                    padding: '20px 32px',
                    backgroundColor: '#fcfcfc',
                    color: '#1A1A1A',
                    m: '10px',
                    borderRadius: '32px',
                    textTransform: 'none',
                    '&:hover': { backgroundColor: '#7FEE64' },
                  }}
                  className="bodyRegularText4"
                  onClick={handleRentalPurchase} // Updated handler
                >
                  {t('products.PizzaMachine.pricing.getStarted')}
                </Button>
              </Box>
            </Box>
          </Box>
            {/* Purchase Option - Direct Purchase */}
          <Box
            sx={{
              width: { xs: '95%', sm: '95%', md: '100%', lg: '32%' },
              display: 'flex',
              flexDirection: 'column',
              bgcolor: '#161616',
              border: '1px solid #393939',
              borderRadius: '24px !important',
              p: 1,
              maxWidth: { sm: "95%", md: '500px' },
            }}
          >
            <Box
              sx={{
                bgcolor: '#161616',
                my: 2,
                mx: { sm: 0, md: 1 },
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <Typography sx={{ textAlign: 'center', mb: 2, color: '#c2c2c4' }} className="bodyRegularText2">
                     {t('products.gourmetMachine.pricing.purchase.title')}
              </Typography>

              <Typography sx={{ textAlign: 'center', mb: 2, color: '#FA7854' }} className="headings-h4">
                €27,500
              </Typography>

              <Typography sx={{ textAlign: 'center', color: '#c2c2c4', mb: 1 }} className="bodyRegularText3">
                {t('products.PizzaMachine.pricing.purchase.frequency')}
              </Typography>

              <List sx={{ p: 0, my: { xs: 4, md: 8 }, flexGrow: 1 }}>
                {[1, 2, 3, 4, 5].map((i) => (
                  <ListItem key={i}>
                    <ListItemIcon sx={{ minWidth: 30 }}>
                      <TickIcon />
                    </ListItemIcon>
                    <Typography
                      className="bodyRegularText3"
                      sx={{
                        color: '#c2c2c4',
                        lineHeight: 1.5,
                      }}
                    >
                      {t(`products.PizzaMachine.pricing.purchase.benefit${i}`)}
                    </Typography>
                  </ListItem>
                ))}
              </List>

              <Box sx={{ display: 'flex', justifyContent: 'center', mt: 'auto', pt: 2 }}>
                <Button
                  sx={{
                    padding: '20px 32px',
                    backgroundColor: '#fcfcfc',
                    color: '#1A1A1A',
                    m: '10px',
                    borderRadius: '32px',
                    textTransform: 'none',
                    '&:hover': { backgroundColor: '#7FEE64' },
                  }}
                  className="bodyRegularText4"
                  onClick={handleDirectPurchase} // Updated handler
                >
                  {t('products.PizzaMachine.pricing.getStarted')}
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      {/* Seasonal, CTA & FAQ */}
      <Box
        sx={{
          mt: { xs: 10, md: 13 },
          width: '100%',
          boxSizing: 'border-box',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {/* Section Title */}
        <Typography
          sx={{
            textAlign: 'center',
            color: '#FCFCFC',
            fontWeight: 700,
            fontSize: '40px',
            mb: 6,
          }}
          className="headings-h4"
        >
          {t('products.PizzaMachine.seasonal.title')}
        </Typography>

        {/* Cards Wrapper */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: { xs: 'center', md: 'stretch' },
            gap: { xs: 5, md: 3 },
            width: '100%',
            maxWidth: { xs: "100%", md: 900, lg: 1000, xl: 1200 },
            mx: 'auto',
          }}
        >
          {/* Summer Card */}
          <Box
            sx={{
              width: { xs: '100%', md: '50%' },
              display: 'flex',
            }}
          >
            <Box
              sx={{
                backgroundColor: '#161616',
                border: '1px solid #393939',
                borderRadius: '24px',
                p: { xs: 3, md: 3 },
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography sx={{ color: '#FCFCFC' }} className="bodyRegularText3">
                  {t('products.PizzaMachine.seasonal.summer.title')}
                </Typography>

                {/* Sun Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none">
                  <path
                    d="M2 22H4.22222M22 2V4.22222M39.7778 22H42M22 39.7778V42M7.77778 7.77778L9.33333 9.33333M36.2222 7.77778L34.6667 9.33333M34.6667 34.6667L36.2222 36.2222M9.33333 34.6667L7.77778 36.2222M13.1111 22C13.1111 24.3575 14.0476 26.6184 15.7146 28.2854C17.3816 29.9524 19.6425 30.8889 22 30.8889C24.3575 30.8889 26.6184 29.9524 28.2854 28.2854C29.9524 26.6184 30.8889 24.3575 30.8889 22C30.8889 19.6425 29.9524 17.3816 28.2854 15.7146C26.6184 14.0476 24.3575 13.1111 22 13.1111C19.6425 13.1111 17.3816 14.0476 15.7146 15.7146C14.0476 17.3816 13.1111 19.6425 13.1111 22Z"
                    stroke="#F4F4F4"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Box>
              <Typography sx={{ color: '#C2C2C4', mb: 4 }} className="bodyRegularText4">
                {t('products.PizzaMachine.seasonal.summer.period')}
              </Typography>

              <Box sx={{ mt: 1, mb: 2 }}>
                <Typography sx={{ color: '#FA7854' }} className="bodyRegularText2">
                  {t('products.PizzaMachine.seasonal.summer.price')}
                </Typography>
              </Box>

              <Typography sx={{ color: '#C2C2C4', flexGrow: 1 }} className="bodyRegularText4">
                {t('products.PizzaMachine.seasonal.summer.description')}
              </Typography>

              <Box sx={{ mt: 'auto', pt: 3 }}>
                <Button
                  sx={{
                    backgroundColor: '#fcfcfc',
                    color: '#1A1A1A',
                    borderRadius: '32px',
                    padding: { xs: '16px 24px', md: '20px 32px' },
                    textTransform: 'none',
                    '&:hover': { backgroundColor: '#7FEE64' },
                    width: { xs: '100%', sm: 'auto' },
                  }}
                  className="bodyRegularText4"
                  onClick={handleSummerSeasonal} // Updated handler
                >
                  {t('products.PizzaMachine.pricing.getStarted')}
                </Button>
              </Box>
            </Box>
          </Box>

          {/* Winter Card */}
          <Box
            sx={{
              width: { xs: '100%', md: '50%' },
              display: 'flex',
            }}
          >
            <Box
              sx={{
                backgroundColor: '#161616',
                border: '1px solid #393939',
                borderRadius: '24px',
                p: { xs: 3, md: 3 },
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography sx={{ color: '#FCFCFC' }} className="bodyRegularText3">
                  {t('products.PizzaMachine.seasonal.winter.title')}
                </Typography>

                {/* Snow Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" width="43" height="43" viewBox="0 0 43 43" fill="none">
                  <path
                    d="M21.5 12.6111V8.16667M21.5 8.16667V1.5M21.5 8.16667L14.8333 3.72222M21.5 8.16667L28.1667 3.72222M30.3889 21.5H34.8333M34.8333 21.5H41.5M34.8333 21.5L39.2778 14.8333M34.8333 21.5L39.2778 28.1667M21.5 30.3889V34.8333M21.5 34.8333V41.5M21.5 34.8333L14.8333 39.2778M21.5 34.8333L28.1667 39.2778M12.6111 21.5H8.16667M8.16667 21.5H1.5M8.16667 21.5L3.72222 14.8333M8.16667 21.5L3.72222 28.1667M28.1667 21.5C28.1667 25.1819 25.1819 28.1667 21.5 28.1667C17.8181 28.1667 14.8333 25.1819 14.8333 21.5C14.8333 17.8181 17.8181 14.8333 21.5 14.8333C25.1819 14.8333 28.1667 17.8181 28.1667 21.5Z"
                    stroke="#F4F4F4"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </Box>

              <Typography sx={{ color: '#C2C2C4', mb: 4 }} className="bodyRegularText4">
                {t('products.PizzaMachine.seasonal.winter.period')}
              </Typography>
              <Box sx={{ mt: 1, mb: 2 }}>
                <Typography sx={{ color: '#E56A47' }} className="bodyRegularText2">
                  {t('products.PizzaMachine.seasonal.winter.price')}
                </Typography>
              </Box>

              <Typography sx={{ color: '#C2C2C4', flexGrow: 1 }} className="bodyRegularText4">
                {t('products.PizzaMachine.seasonal.winter.description')}
              </Typography>

              <Box sx={{ mt: 'auto', pt: 3 }}>
                <Button
                  sx={{
                    backgroundColor: '#fcfcfc',
                    color: '#1A1A1A',
                    borderRadius: '32px',
                    padding: { xs: '16px 24px', md: '20px 32px' },
                    textTransform: 'none',
                    '&:hover': { backgroundColor: '#7FEE64' },
                    width: { xs: '100%', sm: 'auto' },
                  }}
                  className="bodyRegularText4"
                  onClick={handleWinterSeasonal} // Updated handler
                >
                  {t('products.PizzaMachine.pricing.getStarted')}
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Custom Quote CTA */}
      <Box
        sx={{
          backgroundColor: '#161616',
          border: '1px solid #393939',
          borderRadius: '16px',
          p: { xs: 3, md: 4 },
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: { xs: 'center', md: 'center' },
          justifyContent: 'space-between',
          maxWidth: { xs: "95%", md: 810, lg: 910, xl: 1130 },
          mx: 'auto',
          mt: { xs: 5, md: 10 },
          gap: { xs: 3, md: 4 },
          textAlign: { xs: 'center', md: 'left' },
        }}
      >
        <Typography sx={{ color: '#FCFCFC', flex: 1 }} className="bodyRegularText3">
          {t('products.PizzaMachine.customQuote.text')}
        </Typography>
        <Button
          sx={{
            backgroundColor: '#fcfcfc',
            color: '#1a1a1a',
            borderRadius: '32px',
            padding: '20px 32px',
            textTransform: 'none',
            '&:hover': { backgroundColor: '#7FEE64' },
            whiteSpace: 'nowrap',
          }}
          className="bodyRegularText4"
          onClick={handleCustomQuote} // Updated handler
        >
          {t('products.PizzaMachine.customQuote.button')}
        </Button>
      </Box>


      {/* FAQ Section */}
      <Box className="section-container" sx={{ p: 0, width: '100%' }}>
        <Box sx={{ mb: { xs: 5, md: 7 }, textAlign: 'center' }}>
          <Typography className="headings-h2" sx={{ color: '#fcfcfc' }}>
            {t('products.PizzaMachine.faq.title')}
          </Typography>
          <Typography className="bodyMediumText2" sx={{ color: '#C2C2C4' }}>
            {t('products.PizzaMachine.faq.subtitle')}
          </Typography>
        </Box>

        <Box sx={{ width: { xs: '100%', sm: '80%', md: '60%', lg: '40%' }, mx: 'auto' }}>
          {faqData.map((faq, index) => (
            <Accordion
              key={index}
              expanded={expandedFaqIndex === index}
              onChange={() => setExpandedFaqIndex(expandedFaqIndex === index ? null : index)}
              sx={{
                py: 2,
                border: '1px solid #393939',
                backgroundColor: 'transparent',
                color: '#C2C2C4',
                borderRadius: '12px !important',
                boxShadow: 'none',
                mb: 2,
                '&::before': { display: 'none' },
              }}
            >
              <AccordionSummary expandIcon={<ArrowDropDown sx={{ color: '#C2C2C4' }} />}>
                <Typography className="bodyRegularText4">
                  {faq.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className="bodyRegularText4">
                  {faq.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
        <Box sx={{ textAlign: 'center', mt: 4 }}>
          <Typography className="bodyMediumText2 " sx={{ color: '#fcfcfc', fontSize: { lg: "16px !important" } }}>
            {t('products.faqContactText')}
          </Typography>
          <Typography
            className="bodyRegularText3"
            sx={{
              color: '#7FEE64',
              fontSize: { lg: "16px !important" },
              cursor: 'pointer'
            }}
            onClick={() => navigate(`/${i18n.language}/contact`)}
          >
            {t('products.faqContactLink')}
          </Typography>
        </Box>
      </Box>

      {/* Product Modal */}
      <ProductModal
        open={modalOpen}
        onClose={closeModal}
        productName={selectedProduct}
        defaultPurchaseMethod={defaultPurchaseMethod}
      />


    </div>
    </Box>

  );
}