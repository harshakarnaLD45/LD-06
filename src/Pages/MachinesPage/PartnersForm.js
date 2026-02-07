import React, { useState } from 'react';
import {
    Box,
    Typography,
    Tabs,
    Tab,
    Snackbar,
    Alert,
    Button,
} from '@mui/material';
import AnimateButton from '../../Components/CommonComponents/AnimateButton';
import CustomTextField from './MantaincePage/CustomTextField';
import Service1 from '../../assets/Machines/how-it-works-1.png'
import Service2 from '../../assets/Machines/how-it-works-2.png'
import Service3 from '../../assets/Machines/how-it-works-3.png'
import Service4 from '../../assets/Machines/benefits-1.png'
import Service5 from '../../assets/Machines/benefits-2.png'
import Service6 from '../../assets/Machines/benefits-3.png'
import CustomSelect from './MantaincePage/CustomSelect';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router-dom';
import './AutomatsPage.css';

function PartnersForm() {
    const navigate = useNavigate();
    const { lang } = useParams();
    const { t } = useTranslation();
    const [tab, setTab] = useState(0);
    const [snackbar, setSnackbar] = useState({
        open: false,
        message: '',
        severity: 'success', // or 'error'
    });
    const [isSubmitting, setIsSubmitting] = useState(false);


    const [formTab0, setFormTab0] = useState({
        companyName: '',
        installationAddress: '',
        numberOfEmployees: '',
        willingToPurchaseMachine: '',
        provideCateringPermit: '',
        contactPersonName: '',
        email: '',
        phoneNumber: '',
        agreement: false,
    });

    const [formTab1, setFormTab1] = useState({
        businessName: '',
        contactPersonName: '',
        position: '',
        email: '',
        phoneNumber: '',
        specialization: '',
        agreement: false,
    });
    const showSnackbar = (message, severity = 'success') => {
        setSnackbar({ open: true, message, severity });
    };

    const handleSnackbarClose = () => {
        setSnackbar((prev) => ({ ...prev, open: false }));
    };

    const handleTabChange = (_, newValue) => setTab(newValue);

    const handleChange = (e, tabIndex) => {
        const { name, value } = e.target;
        const updater = tabIndex === 0 ? setFormTab0 : setFormTab1;
        updater((prev) => ({ ...prev, [name]: value }));
    };

    const handleCheckboxChange = (e, tabIndex) => {
        const { name, checked } = e.target;
        const updater = tabIndex === 0 ? setFormTab0 : setFormTab1;
        updater((prev) => ({ ...prev, [name]: checked }));
    };

    const altTextHowItWorks = [
        "Find NAF  Vending Machines Near You: Easy Location Finder.",
        "Enjoy Freshly Brewed Coffee and Beverages with NAF  Vending.",
        "NAF  Vending Machines: Convenient Access to Food for Everyone.",

    ];
    const altTextBenefits = [
        "NAF Vending: Maximize Revenue and Optimize Operations.",
        "NAF Vending: Convenient and Reliable Food Access for Employees.",
        "NAF : Scalable and Secure Cloud Solutions for Your Vending Business.",
    ];
    const validateTab0 = () => {
        if (!formTab0.companyName.trim()) {
            showSnackbar(t('validation.companyNameRequired'), 'error');
            return false;
        }
        if (!formTab0.installationAddress.trim()) {
            showSnackbar(t('validation.installationAddressRequired'), 'error');
            return false;
        }
        if (!formTab0.numberOfEmployees.trim()) {
            showSnackbar(t('validation.numberOfEmployeesRequired'), 'error');
            return false;
        }
        if (!formTab0.willingToPurchaseMachine) {
            showSnackbar(t('validation.willingToPurchaseRequired'), 'error');
            return false;
        }
        if (!formTab0.provideCateringPermit) {
            showSnackbar(t('validation.cateringPermitRequired'), 'error');
            return false;
        }
        if (!formTab0.contactPersonName.trim()) {
            showSnackbar(t('validation.contactPersonNameRequired'), 'error');
            return false;
        }
        if (!formTab0.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formTab0.email)) {
            showSnackbar(t('validation.validEmailRequired'), 'error');
            return false;
        }
        if (!formTab0.agreement) {
            showSnackbar(t('validation.agreementRequired'), 'error');
            return false;
        }
        return true;
    };

    const validateTab1 = () => {
        if (!formTab1.businessName.trim()) {
            showSnackbar(t('validation.businessNameRequired'), 'error');
            return false;
        }
        if (!formTab1.contactPersonName.trim()) {
            showSnackbar(t('validation.contactPersonNameRequired'), 'error');
            return false;
        }
        if (!formTab1.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formTab1.email)) {
            showSnackbar(t('validation.validEmailRequired'), 'error');
            return false;
        }
        if (!formTab1.agreement) {
            showSnackbar(t('validation.agreementRequired'), 'error');
            return false;
        }
        return true;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const isValid = tab === 0 ? validateTab0() : validateTab1();
        if (!isValid) return;

        // const { agreement, ...submittedData } = tab === 0 ? formTab0 : formTab1;
        const { agreement, ...rawData } = tab === 0 ? formTab0 : formTab1;
        const submittedData = tab === 0
            ? {
                ...rawData,
                numberOfEmployees: parseInt(rawData.numberOfEmployees || '0'),
                willingToPurchaseMachine: rawData.willingToPurchaseMachine === 'yes',
                provideCateringPermit: rawData.provideCateringPermit === 'yes',
            }
            : rawData;
        console.log('Submitted Data:', submittedData);

        try {
            setIsSubmitting(true);  // Determine the endpoint
            const endpoint =
                tab === 0
                    ? 'https://api.naf-cloudsystem.de/api/NAFWebsite/company-installations'
                    : 'https://api.naf-cloudsystem.de/api/NAFWebsite/gastronomy-partners';
            await axios.post(endpoint, submittedData);

            showSnackbar(t('validation.submissionSuccess'), 'success');
            // Reset
            if (tab === 0) {
                setFormTab0({
                    companyName: '',
                    installationAddress: '',
                    numberOfEmployees: '',
                    willingToPurchaseMachine: '',
                    provideCateringPermit: '',
                    contactPersonName: '',
                    email: '',
                    phoneNumber: '',
                    agreement: false,
                });
            } else {
                setFormTab1({
                    businessName: '',
                    contactPersonName: '',
                    position: '',
                    email: '',
                    phoneNumber: '',
                    specialization: '',
                    agreement: false,
                });
            }
        } catch (error) {
            setSnackbar({ open: true, message: t('validation.submissionFailed'), severity: 'error' });
        } finally {
            setIsSubmitting(false); // ✅ Stop loading
        }
    };

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', px: { xs: 2, sm: 3, md: 4 } }}>
            <Box sx={{ maxWidth: 800, width: '100%', p: { xs: 2, sm: 5, md: 10 }, color: '#FCFCFC', border: '1px solid #525252', borderRadius: '24px' }}>
                <Tabs
                    value={tab}
                    onChange={handleTabChange}
                    centered
                    className='bodyMediumText1 tabs-container'
                    TabIndicatorProps={{
                        style: {
                            backgroundColor: "transparent", // Hide default indicator
                            height: 0,
                            display: 'flex',
                            gap: '10px',


                        },
                    }}
                    sx={{
                        '& .MuiTabs-flexContainer': {
                            flexDirection: { xs: 'column', sm: 'row' },
                            gap: { xs: '16px', sm: '32px' }, // ✅ ADD SPACE BETWEEN TABS
                            alignItems: 'center',
                        },
                        '& .MuiTab-root': {
                            color: '#C2C2C4 !important',
                            fontWeight: 500,
                            fontSize: { xs: '12px', sm: '15px', md: '18px' },
                            textTransform: 'none',
                            whiteSpace: 'wrap',
                            position: 'relative',
                            minWidth: 0,
                            p: 0,

                            transition: 'color 0.3s',
                            '&::before': {
                                content: '""',
                                position: 'absolute',

                                left: 0,
                                bottom: 0,
                                height: '2px', // Thicker underline for visibility
                                width: 0,
                                backgroundColor: '#7FEE64',
                                borderRadius: '2px',
                                transition: 'width 0.4s cubic-bezier(.4,0,.2,1)',
                            },
                        },
                        '& .Mui-selected': {
                            color: '#FCFCFC !important',
                            width: 'auto',

                            '&::before': {
                                width: '100%',



                            },
                        },
                        flexDirection: { xs: 'column', sm: 'row' },
                    }}
                >
                    <Tab className='tab-buttons' label={t('machines.CompaniesInstallationLocations')} />
                    <Tab className='tab-buttons' label={t('machines.GastronomyPartners')} />
                </Tabs>

                {tab === 0 ? (
                    // Installation Locations Form
                    <Box sx={{ mt: { xs: 4, sm: 6, md: 8 } }}>
                        <Typography className='bodyRegularText3' sx={{ my: 4 }} color='#C2C2C4'>
                            {t('machines.CompaniesInstallationSubTitle')}
                        </Typography>
                        <Typography className='bodyMediumText1' sx={{ my: 4 }} color='#FCFCFC'>
                            {t('machines.HowitWork')}
                        </Typography>
                        <Box
                            sx={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                justifyContent: 'space-between',
                                gap: 2,
                                mb: 10,
                                maxWidth: '100%',
                            }}
                        >
                            {[Service1, Service2, Service3].map((img, index) => (
                                <Box className="work-benefit-img-sec"
                                    key={index}
                                    sx={{
                                        flex: { xs: '1 1 100%', sm: '1 1 calc(33.333% - 16px)' }, // ✅ 3 per row on sm+, full width on xs

                                    }}
                                >
                                    <img src={img} alt={altTextHowItWorks[index]} style={{ maxWidth: '100%', height: 'auto' }} />
                                    <Typography className='bodyRegularText3' sx={{ mt: 1 }} color='#C2C2C4'>
                                        {[
                                            t('machines.HowitWorktext1'),
                                            t('machines.HowitWorktext2'),
                                            t('machines.HowitWorktext3')
                                        ][index]}
                                    </Typography>
                                </Box>
                            ))}
                        </Box>

                        <Typography color='#FCFCFC' className='bodyMediumText1' align='center'>{t('machines.FillupForm')}</Typography>

                        <CustomTextField required label={t('machines.CompanyName')} name="companyName" value={formTab0.companyName} onChange={(e) => handleChange(e, 0)} />
                        <CustomTextField required label={t('machines.InstallationAddress')} name="installationAddress" value={formTab0.installationAddress} onChange={(e) => handleChange(e, 0)} />
                        <CustomTextField required label={t('machines.NumberofEmployees')} name="numberOfEmployees" type="number" value={formTab0.numberOfEmployees} onChange={(e) => handleChange(e, 0)} />

                        <CustomSelect
                            required
                            label={t('machines.willingpurchase')}
                            name="willingToPurchaseMachine"
                            value={formTab0.willingToPurchaseMachine}
                            onChange={(e) => handleChange(e, 0)}
                            options={[
                                { value: 'yes', label: t('machines.yes') },
                                { value: 'no', label: t('machines.No') },
                            ]}
                        />
                        <CustomSelect
                            required
                            label={t('machines.likecatering')}
                            name="provideCateringPermit"
                            value={formTab0.provideCateringPermit}
                            onChange={(e) => handleChange(e, 0)}
                            options={[
                                { value: 'yes', label: t('machines.yes') },
                                { value: 'no', label: t('machines.No') },
                            ]}
                        />
                        {/* Contact info */}
                        <CustomTextField required label={t('machines.ContactPersonFName')} name="contactPersonName" value={formTab0.contactPersonName} onChange={(e) => handleChange(e, 0)} />
                        <CustomTextField required label={t('machines.Email')} name="email" type="email" value={formTab0.email} onChange={(e) => handleChange(e, 0)} />
                        <CustomTextField label={t('machines.PhoneNumber')} name="phoneNumber" value={formTab0.phoneNumber} onChange={(e) => handleChange(e, 0)} />

                        <Box className="policy-div fixedSize" style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', marginTop: '16px' }}>
                            <input
                                type="radio"
                                name="agreement"
                                id="policy-radio"
                                checked={formTab0.agreement}
                                onChange={(e) => handleCheckboxChange(e, 0)} // or 1 for second tab
                                required
                                style={{
                                    accentColor: '#7FEE64',   // green fill when selected
                                    cursor: 'pointer',
                                }}
                            />
                            <label className="bodyRegularText4 fixedSize" style={{ color: '#C2C2C4', cursor: 'default' }}>
                                {t('machines.privacytext')}{' '}
                                <a
                                    onClick={() => navigate(`/${lang}/privacy-policy`)}
                                    style={{
                                        textDecoration: 'underline',
                                        color: '#C2C2C4',
                                        cursor: 'pointer',
                                    }}
                                >
                                   {t('contactus.privacypolicy2')}
                                </a>
                            </label>
                        </Box>

                    </Box>
                ) : (
                    // Gastronomy Partner Form
                    <Box sx={{ mt: { xs: 4, sm: 6, md: 8 } }}>
                        {/* <Typography className='bodyMediumText1' sx={{ my: 4 }} color='#FCFCFC'>
                            Gastronomie- und Catering-Partner werden – neue Umsatzquellen erschließen
                        </Typography> */}
                        <Typography className='bodyRegularText3' sx={{ my: 4 }} color='#C2C2C4'>
                            {t('machines.GastronomyPartnersSubTitle')}
                        </Typography>
                        <Typography className='bodyMediumText1' sx={{ my: 4 }} color='#FCFCFC'>
                            {t('machines.Benefits')}
                        </Typography>
                        <Box
                            sx={{
                                display: 'flex',
                                flexWrap: 'wrap', // ✅ allows wrapping on smaller screens
                                justifyContent: 'space-between',
                                gap: 2,
                                mb: 10,
                                maxWidth: '100%', // ✅ keep it inside its container
                            }}
                        >
                            {[Service4, Service5, Service6].map((img, index) => (
                                <Box
                                    key={index}
                                    sx={{
                                        flex: { xs: '1 1 100%', sm: '1 1 calc(33.333% - 16px)' }, // ✅ 3 per row on sm+, full width on xs
                                    }}
                                >
                                    <img src={img} alt={altTextBenefits[index]} style={{ maxWidth: '100%', height: 'auto' }} />
                                    <Typography className='bodyRegularText3' sx={{ mt: 1 }} color='#C2C2C4'>
                                        {[
                                            t('machines.WhatsInyoupoint1'),
                                            t('machines.WhatsInyoupoint2'),
                                            t('machines.WhatsInyoupoint3')
                                        ][index]}
                                    </Typography>
                                </Box>
                            ))}
                        </Box>

                        <Typography color='#FCFCFC' className='bodyMediumText1' align='center'>{t('machines.FillupForm')}</Typography>

                        <CustomTextField required label={t('machines.Restaurant')} name="businessName" value={formTab1.businessName} onChange={(e) => handleChange(e, 1)} />
                        <CustomTextField required label={t('machines.ContactPersonFName')} name="contactPersonName" value={formTab1.contactPersonName} onChange={(e) => handleChange(e, 1)} />
                        <CustomTextField label={t('machines.Position')} name="position" value={formTab1.position} onChange={(e) => handleChange(e, 1)} />

                        {/* Contact info */}
                        <CustomTextField required label={t('machines.Email')} name="email" type="email" value={formTab1.email} onChange={(e) => handleChange(e, 1)} />
                        <CustomTextField label={t('machines.PhoneNumber')} name="phoneNumber" value={formTab1.phoneNumber} onChange={(e) => handleChange(e, 1)} />
                        <CustomTextField label={t('machines.Specialization')} name="specialization" value={formTab1.specialization} onChange={(e) => handleChange(e, 1)} />

                        {/* <FormControlLabel
                            control={
                                <Radio
                                    name="agreement"
                                    checked={formTab1.agreement}
                                    onChange={(e) => handleCheckboxChange(e, 1)}
                                    required
                                    sx={{
                                        color: '#C2C2C4',
                                        '&.Mui-checked': {
                                            color: '#7FEE64', // green when checked
                                        },
                                    }}
                                />
                            }
                            className="bodyRegularText4"
                            label={
                                <span>
                                    {t('machines.privacytext')}{' '}
                                    <span onClick={() => navigate(`/${lang}/privacy-policy`)} style={{ textDecoration: 'underline', cursor: 'pointer' }}>
                                        {t('machines.privacypolicy')}
                                    </span>
                                </span>
                            }
                            sx={{ mt: 2, color: '#C2C2C4' }}
                        /> */}
                        <Box className="policy-div" sx={{ display: 'flex', gap: '8px', alignItems: 'center', marginTop: '16px' }}>
                            <input
                                type="radio"
                                name="agreement"
                                id="policy-radio"
                                checked={formTab1.agreement}
                                onChange={(e) => handleCheckboxChange(e, 1)}
                                required

                                style={{
                                    accentColor: '#7FEE64', // Green fill when selected
                                    cursor: 'pointer',
                                    mt: "8px !important",
                                    width: '16px',
                                    height: '16px',
                                }}
                            />
                            <label htmlFor="agreement" className="bodyRegularText4 fixedSize" style={{ color: '#C2C2C4', cursor: 'default' }}>
                                {t('machines.privacytext')}{' '}
                                <a
                                    onClick={() => navigate(`/${lang}/privacy-policy`)}
                                    style={{
                                        textDecoration: 'underline',
                                        color: '#C2C2C4',
                                        cursor: 'pointer',
                                    }}
                                >
                                   {t('contactus.privacypolicy2')}
                                </a>
                            </label>
                        </Box>
                    </Box>
                )}
                <Snackbar
                    open={snackbar.open}
                    autoHideDuration={4000}
                    onClose={handleSnackbarClose}
                    anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                >
                    <Alert
                        onClose={handleSnackbarClose}
                        severity={snackbar.severity}
                        sx={{ width: '100%' }}
                    >
                        {snackbar.message}
                    </Alert>
                </Snackbar>

                <Box sx={{ my: 5, display: 'flex', justifyContent: 'center' }}>
                    {isSubmitting ? (
                        <Button disabled variant="contained" sx={{ borderRadius: '50px', px: 5, py: 1.5 }}>
                            {t('machines.submitting')}
                        </Button>
                    ) : (
                        <div onClick={handleSubmit} style={{ cursor: 'pointer' }}>
                            <AnimateButton text1={t('contactus.SUBMIT')} text2={t('contactus.NOW')} />
                        </div>
                    )}
                </Box>

                <Typography  variant="body2" className="bodyRegularText4 fixedSize" align="center" color="#C2C2C4" sx={{ mt: 2 }}>
                    {t('machines.FormfooterText')}
                </Typography>
            </Box>
        </Box>
    );
}

export default PartnersForm;
