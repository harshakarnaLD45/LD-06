import React, { useState } from 'react';
import { Box, MenuItem, Select, Typography, useMediaQuery, useTheme } from '@mui/material';
import SharedPaymentModal from '../../Components/SharedPaymentModal';

import MachineImage1 from '../../assets/Home/Pizza-machine.png';
import MachineImage2 from '../../assets/Home/Fries-machine.webp';
import MachineImage3 from '../../assets/Home/Ice-cream-machine.png';
import MachineImage4 from '../../assets/Home/Cotton-candy-machine.png';
import MachineImage5 from '../../assets/Home/Beer-machine.png';
import MachineImage6 from '../../assets/Home/Return-machine.png';
import MachineImage7 from '../../assets/Home/Gourmet-machine.webp';
import MachineImage8 from '../../assets/Home/Gourmet-machine.webp';
import GourmetPDF from "../../assets/Machines/Gourmet Vending Machine.pdf";
import PizzaPDF from "../../assets/Machines/Bedienungsanleitung NAF Pizza Automat.pdf";
import IceCreamPDF from "../../assets/Machines/Ice Cream Machine Manual -NAF (German).pdf";

import AnimateButton from '../../Components/CommonComponents/AnimateButton';
import {
    DownloadIcon, SnackBar, CampingSite, Companies,
    Pizzarias, Festivals, OfficaCenters, Festivals2, Villagefairs
    , Zoos, AnimalParks, Events, Hotels, Clubs, RoofTop, Fullhygienic, Kidsfriendly, AgeVerification, Chilledbeer, FullyMinimalStaff,


    MachineSmallIcon1, Ecofriendly, SortLogging, Rewardsloyaltypoint, MachineSmallIcon2, MachineSmallIcon3, MachineSmallIcon4, MachineSmallIcon5, MachineSmallIcon6, MachineSmallIcon7, Nostaffingrequired
} from '../../Components/CustomIcons';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

const MachinesSection = ({ selectedMachine }) => {
    const { t } = useTranslation();
    const theme = useTheme();
    const { lang } = useParams();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const [months, setMonths] = useState(60);
    // Dedicated state for reusable bowl select
    const [reusableBowlCount, setReusableBowlCount] = useState(1);
    const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
    const [selectedMachineForModal, setSelectedMachineForModal] = useState('');
    const [showSuccess, setShowSuccess] = useState(false);

    const handleChange = (event) => {
        setMonths(event.target.value);
    };



    // Dedicated handler for reusable bowl select
    const handleReusableBowlChange = (event) => {
        setReusableBowlCount(event.target.value);
    };

    // Fixed getProductRoute function with better matching
    const getProductRoute = (machineTitle) => {
        // Create a more robust mapping that handles translation variations
        const productRoutes = {
            // Map each translation to its slug
            [t('machines.GourmetMachine')]: 'gourmet-machine',
            [t('machines.GourmetMachine') + " " + t('machines.without')]: 'gourmet-machine-no-heating',
            [t('machines.PizzaMachine')]: 'pizza-machine',
            [t('machines.IceCreamMachine')]: 'ice-cream-machine',
            [t('machines.CandyMachine')]: 'candy-machine',
            [t('machines.FriesMachine')]: 'fries-machine',
            [t('machines.ReturnMachine')]: 'return-machine',
            [t('machines.BeerMachine')]: 'beer-machine',
        };

        let slug = productRoutes[machineTitle];

        // If not found, try partial matching as fallback
        if (!slug) {
            const machineKey = Object.keys(productRoutes).find(key =>
                machineTitle.includes(key) || key.includes(machineTitle)
            );
            slug = productRoutes[machineKey];
        }

        return slug ? `/${lang}/products/${slug}` : `/${lang}/products`;
    };

    // Helper function to get machine key for consistent filtering
    const getMachineKey = (title) => {
        const keyMap = {
            [t('machines.GourmetMachine')]: 'GourmetMachine',
            [t('machines.PizzaMachine')]: 'PizzaMachine',
            [t('machines.FriesMachine')]: 'FriesMachine',
            [t('machines.IceCreamMachine')]: 'IceCreamMachine',
            [t('machines.CandyMachine')]: 'CandyMachine',
            [t('machines.ReturnMachine')]: 'ReturnMachine',
            [t('machines.BeerMachine')]: 'BeerMachine',
        };
        return keyMap[title] || title;
    };

    const machineData = [
        {
            image: MachineImage7,
            title: t('machines.GourmetMachine') + " " + t('machines.with'),
            subtitle: t('machines.AImenu'),
            description: t('machines.GourmetMachinesubtitle'),
            pdf: GourmetPDF,
            idealFor: [
                { icon: <SnackBar />, label: t('machines.SnackBars') },
                { icon: <CampingSite />, label: t('machines.CampingSites') },
                { icon: <OfficaCenters />, label: t('machines.Officecenters') },
                { icon: <Companies />, label: t('machines.Companies') },
            ],
            features: [
                { text: t('machines.Automatedheating'), icon: <MachineSmallIcon5 /> },
                { text: t('machines.AImenulogic'), icon: <MachineSmallIcon6 /> },
                { text: t('machines.Sustainablepackaging'), icon: <MachineSmallIcon7 /> },
            ],
            price: 25500,
            monthlyRates: {
                36: 858.93,
                48: 661.57,
                60: 546.72
            },
            
            reusbale: {
                1: 5,
                10: 50,
                100: 500,
            },
            reusbaletext: `${t('machines.Reusablebowls')}`
        },
        {
            image: MachineImage8,
            title: t('machines.GourmetMachine') + " " + t('machines.without'),
            subtitle: t('machines.AImenu'),
            description: t('machines.GourmetMachinesubtitle'),
            pdf: GourmetPDF,
            idealFor: [
                { icon: <SnackBar />, label: t('machines.SnackBars') },
                { icon: <CampingSite />, label: t('machines.CampingSites') },
                { icon: <OfficaCenters />, label: t('machines.Officecenters') },
                { icon: <Companies />, label: t('machines.Companies') },
            ],
            features: [
                { text: t('machines.AImenulogic'), icon: <MachineSmallIcon6 /> },
                { text: t('machines.Sustainablepackaging'), icon: <MachineSmallIcon7 /> },
            ],
            price: 24500,
            monthlyRates: {
                36: 824.72,
                48: 635.61,
                60: 525.30,

            },
            reusbale: {
                1: 5,
                10: 50,
                100: 500,
            },
            reusbaletext: `${t('machines.Reusablebowls')}`
        },
        {
            image: MachineImage6,
            title: t('machines.ReturnMachine'),
            subtitle: t('machines.AIContainerRecognition'),
            description: t('machines.returnMachinesubtitle'),
            idealFor: [
                { icon: <Events />, label: t('machines.Events') },
                { icon: <Festivals2 />, label: t('machines.Festivals') },
                { icon: <Hotels />, label: t('machines.Hotel') },
                { icon: <Clubs />, label: t('machines.Clubs') },
                { icon: <RoofTop />, label: t('machines.Rooftopbars') },

            ],
            features: [
                { text: t('machines.Ecofriendly'), icon: <Ecofriendly /> },
                { text: t('machines.Automaticsortinglogging'), icon: <SortLogging /> },
                { text: t('machines.Rewardsloyaltypoint'), icon: <Rewardsloyaltypoint /> },
            ],
            price: 14500,
            monthly: 450,
        },
        {
            image: MachineImage1,
            title: t('machines.PizzaMachine'),
            subtitle: t('machines.AIBaking'),
            description: t('machines.PizzaMachinesubtitle'),
            pdf: PizzaPDF,
            idealFor: [
                { icon: <SnackBar />, label: t('machines.SnackBars') },
                { icon: <CampingSite />, label: t('machines.CampingSites') },
                { icon: <Companies />, label: t('machines.Companies') },
                { icon: <Pizzarias />, label: t('machines.Pizzerias') },
            ],
            features: [
                { text: t('machines.aIenhancedbaking'), icon: <MachineSmallIcon5 /> },
                { text: t('machines.fullyautomated'), icon: <MachineSmallIcon6 /> },
                { text: t('machines.selfservice'), icon: <MachineSmallIcon7 /> },
            ],
            price: 27500,
            monthlyRates: {
                36: 863.50,
                48: 665.50,
                60: 550.00,

            },
            reusbale: {
                1: 5,
                10: 50,
                100: 500,
            },
            reusbaletext: t('machines.Pizzaboxes')
        },
        {
            image: MachineImage2,
            title: t('machines.Snack'),
            subtitle: t('machines.SmartVendingTechnology'),
            description: t('machines.snack_subtile'),

            idealFor: [
                  { icon: <Events />, label: t('machines.Events') },
                { icon: <Hotels />, label: t('machines.Hotel') },
                { icon: <OfficaCenters />, label: t('machines.Officecenters') },
                { icon: <Clubs />, label: t('machines.Clubs') },
                 
            ],
            features: [
                { text: t('machines.Smart_inventoryMonitoring'), icon: <MachineSmallIcon5 /> },
                { text: t('machines.fullyautomated'), icon: <MachineSmallIcon6 /> },
                { text: t('machines.selfservice'), icon: <MachineSmallIcon7 /> },
            ],

            price: 45877,
            monthlyRates: {
                36: 1020.50,
                48: 786.50,
                60: 650.00,
            },
        },

        /*
        {
            image: MachineImage3,
            title: t('machines.IceCreamMachine'),
            subtitle: t('machines.AIMonitoring'),
            description: t('machines.IceMachinesubtitle'),
            pdf: IceCreamPDF,
            idealFor: [
                { icon: <SnackBar />, label: t('machines.SnackBars') },
                { icon: <CampingSite />, label: t('machines.CampingSites') },
                { icon: <AnimalParks />, label: t('machines.AnimalParks') },
                { icon: <Zoos />, label: t('machines.Zoos') },
            ],
            features: [
                { text: t('machines.Selfservemodel'), icon: <MachineSmallIcon7 /> },
                { text: t('machines.Nostaffingrequired'), icon: <Nostaffingrequired /> },
            ],
            price: 24500,
            monthlyRates: {
                36: 824.72,
                48: 635.61,
                60: 525.30,

            },
        },
        {
            image: MachineImage4,
            title: t('machines.CandyMachine'),
            subtitle: t('machines.AIMonitoring'),
            description: t('machines.CandyMachinesubtitle'),
            idealFor: [
                { icon: <SnackBar />, label: t('machines.SnackBars') },
                { icon: <CampingSite />, label: t('machines.CampingSites') },
                { icon: <AnimalParks />, label: t('machines.AnimalParks') },
                { icon: <Zoos />, label: t('machines.Zoos') },
            ],
            features: [
                { text: t('machines.hygienic'), icon: <Fullhygienic /> },
                { text: t('machines.Kidfriendlyattraction'), icon: <Kidsfriendly /> },
                { text: t('machines.Nostaffingrequired'), icon: <Nostaffingrequired /> },
            ],
            price: 14500,
            monthlyRates: {
                36: 462.55,
                48: 359.60,
                60: 297.25,

            },
        },*/
        // {
        //     image: MachineImage5,
        //     title: t('machines.BeerMachine'),
        //     subtitle: t('machines.AIAgeVerification'),
        //     description: t('machines.beerMachinesubtitle'),
        //     idealFor: [
        //         { icon: <Festivals />, label: t('machines.Festivals') },
        //         { icon: <Villagefairs />, label: t('machines.VillageFairs') },
        //     ],
        //     features: [
        //         { text: t('machines.AIageverification'), icon: <AgeVerification /> },
        //         { text: t('machines.Chilledbeerseconds'), icon: <Chilledbeer /> },
        //         { text: t('machines.fullyMinimalStaff'), icon: <FullyMinimalStaff /> },
        //     ],
        //     price: 14500,
        //     monthly: 500,
        // },

    ];

    // Improved filtering logic
    const visibleMachines = selectedMachine === "All"
        ? machineData
        : machineData.filter(machine => {
            // Handle both direct title match and key-based match
            const machineKey = getMachineKey(machine.title);
            return machine.title === selectedMachine || machineKey === selectedMachine;
        });

    return (
        <Box>
            {visibleMachines.map((machine, index) => {
                const isEvenRow = index % 2 === 1;
                const isReversed = !isMobile && isEvenRow;
                return (
                    <Box className='section-container'
                        key={index}
                        sx={{
                            display: 'flex',
                            flexDirection: isMobile ? 'column' : isReversed ? 'row-reverse' : 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            mb: 6, // space between each machine section
                        }}
                    >
                        {/* Left Side - Image + Button */}
                        <Box sx={{ flex: 1, display: 'flex', gap: 3, flexDirection: 'column', alignItems: 'center' }}>
                            {machine.image === MachineImage2 ? (
                                /* Coming Soon display for snacks Machine */
                                <Box
                                    sx={{
                                        width: '100%',
                                        maxWidth: '450px',
                                        height: '400px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        backgroundColor: 'none',
                                        // borderRadius: '8px',

                                    }}
                                >
                                    <Box
                                        className='bodyMediumText2'
                                        sx={{
                                            color: '#7FEE64',
                                            fontSize: { xs: '16px', sm: '18px', md: '20px' },
                                            fontWeight: 'bold',
                                            textAlign: 'center',
                                        }}
                                    >
                                        {t('Home.comingSoon')}
                                    </Box>
                                </Box>
                            ) : (
                                <img src={machine.image} alt={machine.title} className='max-mac-img' />
                            )}

                            <Box sx={{ display: "flex", justifyContent: "center", mt: 2, gap: 6 }}>
                                {machine.pdf && (
                                    <a href={machine.pdf} target="_blank" rel="noopener noreferrer" className="download-btn">
                                        <DownloadIcon />
                                    </a>
                                )}

                                {machine.title.includes(t('machines.ReturnMachine')) || machine.title.includes(t('machines.Snack')) ? (
                                    <div onClick={() => {
                                        setSelectedMachineForModal(machine.title);
                                        setIsPaymentModalOpen(true);
                                    }} style={{ cursor: 'pointer' }}>
                                        <AnimateButton 
                                            text1={t('AnimateBtn.request')} 
                                            text2={t('AnimateBtn.quote')} 
                                            onClick={() => {}}
                                        />
                                    </div>
                                ) : (
                                    <AnimateButton text1={t('AnimateBtn.learn')} text2={t('AnimateBtn.more')} route={getProductRoute(machine.title)} />
                                )}


                            </Box>
                        </Box>


                        {/* Right Side - Details */}
                        <Box sx={{ flex: 1, display: 'flex', gap: '10px', flexDirection: 'column' }}>
                            <Typography variant="subtitle2" color="#FA7854" className='bodyRegularText4'>{machine.subtitle}</Typography>
                            <Typography variant="h2" color="#FCFCFC" className='headings-h2'>{machine.title}</Typography>
                            <Typography color="#C2C2C4" className='bodyRegularText3'>{machine.description}</Typography>

                            <Typography variant="h6" color="#C2C2C4" className='bodyRegularText4'>{t('machines.IdealFor')}</Typography>
                            <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center', gap: 4 }}>
                                {machine.idealFor.map((item, idx) => (
                                    <Box key={idx}>
                                        {item.icon}
                                        <Typography variant="body2" color='#C2C2C4' className='bodyRegularText5'>{item.label}</Typography>
                                    </Box>
                                ))}
                            </Box>

                            {machine.features.map((feature, i) => (
                                <Box key={i} sx={{
                                    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                                    py: 2, px: 2.5, borderRadius: '8px', border: '1px solid #525252', mt: 1
                                }}>
                                    <Typography color="#C2C2C4" className='bodyRegularText3'>{feature.text}</Typography>
                                    {feature.icon}
                                </Box>
                            ))}

                            <Box sx={{
                                display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#262626',
                                py: 3, px: 2.5, borderRadius: '8px', border: '1px solid #525252', mt: 1
                            }}>
                                <Typography color="#C2C2C4" className='bodyRegularText3'>{t('machines.Acquisitioncosts')}</Typography>
                                {(machine.title === t('machines.Snack') || machine.title === t('machines.ReturnMachine')) ? (
                                    <Typography variant="h6" color="#FA7854" className='bodyRegularText4'>
                                        {t('machines.availablesoon')}
                                    </Typography>
                                ) : (
                                    <>
                                        <Typography color="#FA7854" className='bodyMediumText2'>€{machine.price.toLocaleString()} <span style={{ color: "#FA7854" }} className='bodyMediumText3'>+ 19% {t('machines.vat')}</span></Typography>
                                    </>
                                )}
                            </Box>

                            <Box sx={{
                                display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#262626',
                                py: 2, px: 2.5, borderRadius: '8px', border: '1px solid #525252', mt: 1
                            }}>
                                <Typography color="#C2C2C4" className='bodyRegularText3'>{t('machines.Installment')}</Typography>
                                {(machine.title === t('machines.Snack') || machine.title === t('machines.ReturnMachine')) ? (
                                    <Typography variant="h6" color="#FA7854" className='bodyRegularText4'>
                                        {t('machines.availablesoon')}
                                    </Typography>
                                ) : (
                                    <>
                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
                                            <Select
                                                value={months}
                                                onChange={handleChange}
                                                displayEmpty
                                                inputProps={{ 'aria-label': 'Installment duration' }}
                                                MenuProps={{
                                                    PaperProps: {
                                                        sx: {
                                                            backgroundColor: '#262626',
                                                            color: '#C2C2C4',
                                                        },
                                                    },
                                                }}
                                                sx={{
                                                    color: '#C2C2C4',
                                                    border: '1px solid #5E5E5E',
                                                    borderRadius: '8px',
                                                    px: 1,
                                                    minWidth: '120px',
                                                    '& .MuiSelect-icon': {
                                                        color: '#C2C2C4',
                                                    },
                                                    '& .MuiOutlinedInput-notchedOutline': {
                                                        border: 'none',
                                                    },
                                                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                                        border: 'none',
                                                    },
                                                    '&.Mui-focused': {
                                                        border: '1px solid #5E5E5E', // keep same border when focused
                                                        boxShadow: 'none',
                                                    },
                                                }}
                                                className='bodyRegularText5'
                                            >
                                                <MenuItem value={36}>36  {t('machines.Months')}</MenuItem>
                                                <MenuItem value={48}>48  {t('machines.Months')}</MenuItem>
                                                <MenuItem value={60}>60  {t('machines.Months')}</MenuItem>

                                            </Select>
                                            <Typography color="#FA7854" className='bodyMediumText2'>
                                                €{machine.monthlyRates?.[months]?.toFixed(2) || "—"}*
                                                <span style={{ color: "#FA7854" }} className='bodyMediumText3'>/  {t('machines.Installmentsmonths')}</span>
                                            </Typography>

                                        </Box>
                                    </>
                                )}
                            </Box>
                            {/* Reusable Bowls Section */}
                            {machine.reusbale && (
                                <Box sx={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    gap: 3,
                                    mt: 2,
                                    background: '#262626',
                                    py: 2,
                                    px: 2.5,
                                    borderRadius: '8px',
                                    border: '1px solid #525252',
                                }}>
                                    <Typography color="#C2C2C4" className='bodyRegularText3'>{machine.reusbaletext}</Typography>

                                    <Box sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: 3,
                                    }}>
                                        <Select
                                            value={reusableBowlCount}
                                            onChange={handleReusableBowlChange}
                                            displayEmpty
                                            inputProps={{ 'aria-label': 'Number of reusable bowls' }}
                                            MenuProps={{
                                                PaperProps: {
                                                    sx: {
                                                        backgroundColor: '#262626',
                                                        color: '#C2C2C4',
                                                    },
                                                },
                                            }}
                                            sx={{
                                                color: '#C2C2C4',
                                                border: '1px solid #5E5E5E',
                                                borderRadius: '8px',
                                                px: 1,
                                                minWidth: '120px',
                                                '& .MuiSelect-icon': {
                                                    color: '#C2C2C4',
                                                },
                                                '& .MuiOutlinedInput-notchedOutline': {
                                                    border: 'none',
                                                },
                                                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                                    border: 'none',
                                                },
                                                '&.Mui-focused': {
                                                    border: '1px solid #5E5E5E', // keep same border when focused
                                                    boxShadow: 'none',
                                                },
                                            }}
                                            className='bodyRegularText5'>
                                            {Object.keys(machine.reusbale).map((count) => (
                                                <MenuItem key={count} value={count}>
                                                    {count}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                        <Typography color="#FA7854" className='bodyMediumText2'>
                                            €{machine.reusbale[reusableBowlCount].toLocaleString()}
                                        </Typography>
                                    </Box>
                                </Box>
                            )}

                            <Typography color="#C2C2C4" sx={{ textAlign: 'right' }} className='bodyRegularText5'>
                                {t('machines.PricesannouncedText')}
                            </Typography>
                        </Box>
                    </Box>
                );
            })}
            <SharedPaymentModal 
                open={isPaymentModalOpen} 
                handleClose={() => {
                    setIsPaymentModalOpen(false);
                    setSelectedMachineForModal('');
                }} 
                defaultMachine={selectedMachineForModal}
                showSuccess={showSuccess}
                handleCloseSuccess={() => {
                    setShowSuccess(false);
                    setIsPaymentModalOpen(false);
                    setSelectedMachineForModal('');
                }}
                onSuccess={() => setShowSuccess(true)}
            />

        </Box >
    );
}

export default MachinesSection;