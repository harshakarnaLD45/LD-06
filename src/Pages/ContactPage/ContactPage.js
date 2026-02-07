import React, { useEffect, useState } from 'react'
import Calendly from './Calendly';
import './ContactPage.css'
import { Alert, Box, Grid,  Snackbar, Stack, TextField, Typography } from '@mui/material'
import { Location, Contactmail, Contactphone } from "../../Components/CustomIcons"
import Facebook from '../../assets/footer/facebook.svg';
import Instagram from '../../assets/footer/Instagram.svg';
import LinkedIn from '../../assets/footer/Linkedin.svg';
import YouTube from '../../assets/footer/Youtube.svg';
import Button from '@mui/material/Button';
import AnimateButton from "../../Components/CommonComponents/AnimateButton";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Picture1 from '../../assets/About/Odette-lamkhizni.png'
import Picture2 from '../../assets/About/Abdelilah-lamkhizni.png'
import Picture3 from '../../assets/About/Sri-satya-sai-kanna-dhulipudi.png'
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import { Helmet } from 'react-helmet';
import { useNavigate, useParams } from 'react-router-dom';
import logoUrl from '../../assets/Home/NAF-logo.png'; // Replace with actual logo URL

function ContactPage() {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const { lang } = useParams();
    const [active, setActive] = useState('submit');
    const [selectedItems, setSelectedItems] = useState([]);
    const [isSubmitform, setIsSubmitform] = useState(true); // default to showing the form
    const [expandedIndex, setExpandedIndex] = useState(null);
    const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });
    const [isConsentChecked, setIsConsentChecked] = useState(false);
    const [customCategory, setCustomCategory] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
 const [categoryError, setCategoryError] = useState(false);
    const handleSnackbarClose = () => {
        setSnackbar((prev) => ({ ...prev, open: false }));
    };
    const [formData, setFormData] = useState({
        email: '',
        fullName: '',
        message: '',
        inquiryType: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // const handleCategorySelect = (category) => {
    //     setFormData((prev) => ({
    //         ...prev,
    //         inquiryType: prev.inquiryType === category ? '' : category,
    //     }));
    //     setSelectedItems(category)

    //     if (category !== 'Others') {
    //         setCustomCategory('');
    //     }
    // };
    const handleCategorySelect = (category) => {
        let updatedSelection = [...selectedItems];

        if (updatedSelection.includes(category)) {
            updatedSelection = updatedSelection.filter((item) => item !== category);
        } else {
            updatedSelection.push(category);
        }

        setSelectedItems(updatedSelection);
        setFormData((prev) => ({
            ...prev,
            inquiryType: updatedSelection.join(', '),
        }));

        if (!updatedSelection.includes('Others')) {
            setCustomCategory('');
        }
         if (updatedSelection.length > 0) {
            setCategoryError(false);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { email, fullName, message, inquiryType } = formData;

         if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {

            return setSnackbar({ open: true, message: t('validation.invalidEmail'), severity: 'error' });
        }
        if (!fullName.trim()) {
            return setSnackbar({ open: true, message: t('validation.fullNameRequired'), severity: 'error' });
        }
        if (selectedItems.length === 0) {
            setCategoryError(true);
            return setSnackbar({ open: true, message: t('validation.selectCategory'), severity: 'error' });
        }
        if (!message.trim()) {
            return setSnackbar({ open: true, message: t('validation.messageRequired'), severity: 'error' });
        }
        if (selectedItems.includes('Others') && !customCategory.trim()) {
            return setSnackbar({ open: true, message: t('validation.specifyCategory'), severity: 'error' });
        }
        if (!isConsentChecked) {
            return setSnackbar({ open: true, message: t('validation.acceptPrivacy'), severity: 'error' });
        }

        const fullInquiryType = selectedItems.includes('Others')
            ? [...selectedItems.filter(item => item !== 'Others'), customCategory].join(', ')
            : selectedItems.join(', ');

        try {
            setIsSubmitting(true);
            await axios.post('https://api.naf-cloudsystem.de/api/NAFWebsite/submitForm', {
                ...formData,
                inquiryType: fullInquiryType,
            });
            setSnackbar({ open: true, message: t('validation.submissionSuccess'), severity: 'success' });

            // Clear the form
            setFormData({
                email: '',
                fullName: '',
                message: '',
                inquiryType: '',
            });
            setSelectedItems([]);
            setIsConsentChecked(false);
        } catch (error) {
            setSnackbar({ open: true, message: t('validation.submissionFailed') , severity: 'error' });
        } finally {
            setIsSubmitting(false); // ✅ Stop loading
        }
    };

    const locations = [

        {
            address: (
                <>
                    DBI Foyer Freiberg, <br />
                    Halsbrückerstrasse 34, 09599 <br />
                    Freiberg
                </>
            )
        },

        {
            address: (
                <>
                    Mittweida District Office Building A, <br />
                    Am Landratsamt 3, 09648 <br />
                    Mittweida
                </>
            )
        },
        {
            address: (
                <>
                    GIZEF GmbH, <br />
                    Am St.-Niclas-Schacht 13, <br />
                    Freiberg, 09599
                </>
            )
        },
        {
            address: (
                <>
                    WEPA Deutschland GmbH & <br />
                    Co. KG, An d. Zschopau 1, <br />
                    Kriebstein, 09648
                </>
            )
        },
        {
            address: (
                <>
                    Helmholtz Institute,<br />
                    C hemnitzer Str. 40, <br />
                    Freiberg, 09599
                </>
            )
        },
        {
            address: (
                <>
                    Transgourmet Deutschland GmbH <br />
                    & Co. OHG, Handelsstraße 1, <br />
                    Striegistal, 09661
                </>
            )
        }
    ];

    const categories = [
        t('contactus.General'),
        t('contactus.DemoRequest'),
        t('contactus.PartnershipInquiry'),
        t('contactus.SalesInquiry'),
        t('contactus.TechnicalSupport'),
        // 'Kaufanfragen',
        // t('contactus.FranchiseEnquiry'),
        t('contactus.Others'),
    ];

    const faqs = {
        [t('faqs.faqs1title')]: [
            { question: t('faqs.question1'), answer: t('faqs.answer1') },
            { question: t('faqs.question2'), answer: t('faqs.answer2') },
            { question: t('faqs.question3'), answer: t('faqs.answer3') }
        ],
        [t('faqs.faqs2title')]: [
            {
                question: t('faqs.question4'),
                answer: t('faqs.answer4'),
                list: [
                    t('faqs.list1'),
                    t('faqs.list2'),
                    t('faqs.list3'),
                    t('faqs.list4'),
                    t('faqs.list5'),
                    t('faqs.list6'),
                    t('faqs.list7'),
                    t('faqs.list8'),
                    t('faqs.list9')
                ],
                answerSecond: t('faqs.answer4_2')
            },
            { question: t('faqs.question5'), answer: t('faqs.answer5') },
            { question: t('faqs.question6'), answer: t('faqs.answer6') }
        ],
        [t('faqs.faqs3title')]: [
            {
                question: t('faqs.question7'),
                answer: t('faqs.answer7'),
                list: [t('faqs.list10'), t('faqs.list11')]
            },
            { question: t('faqs.question8'), answer: t('faqs.answer8') }
        ],
        [t('faqs.faqs4title')]: [
            { question: t('faqs.question9'), answer: t('faqs.answer9') },
            { question: t('faqs.question10'), answer: t('faqs.answer10') },
            { question: t('faqs.question11'), answer: t('faqs.answer11') }
        ],
        [t('faqs.faqs5title')]: [
            {
                question: t('faqs.question12'),
                answer: t('faqs.answer12'),
                list: [
                    t('faqs.list12'),
                    t('faqs.list13'),
                    t('faqs.list14'),
                    t('faqs.list15'),
                    t('faqs.list16'),
                    t('faqs.list17')
                ],
                answerSecond: t('faqs.answer12_2')
            },
            { question: t('faqs.question13'), answer: t('faqs.answer13') },
            { question: t('faqs.question14'), answer: t('faqs.answer14') }
        ]
    };

    const contacts = [
        {
            title: t('contactus.personrole1'),
            name: 'Odette Lamkhizni',
            image: Picture1,
            alt: 'Odette Lamkhizni, NAF Owner - Driving Vending Innovation and Quality.',
            links: "info@naf-halsbach.de"
        },
        {
            title: t('contactus.personrole2'),
            name: 'Abdelilah Lamkhizni',
            image: Picture2,
            alt: 'Abdelilah Lamkhizni, NAF Owner - Passionate about Customer Experience.',
            links: "Abdelilah.Lamkhizni@naf-halsbach.de"

        },
        {
            title: t('contactus.personrole3'),
            name: 'Sri Satya Sai Kanna Dhulipudi',
            image: Picture3,
            alt: 'Sri Satya Sai Kanna Dhulipudi, CTO at NAF - Technical Expertise.',
            links: "saikanna.dhulipudi@naf-halsbach.de",
        },
    ];

    const [activeCategory, setActiveCategory] = useState('Allgemeines über NAF');

    const toggleForm = (type) => {
        setIsSubmitform(type === 'submit');
        setActive(type);
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        setExpandedIndex(null);
    }, [activeCategory]);

    const socialIcons = [
        { alt: "NAF  Facebook ", src: Facebook, name: "Facebook", url: "https://www.facebook.com/p/NAF-New-Age-of-Food-by-Gasthof-Halsbach-61551546894852/" },
        { alt: "NAF  Instagram ", src: Instagram, name: "Instagram", url: "https://www.instagram.com/nafbygasthofhalsbach/" },
        { alt: "NAF  LinkedIn ", src: LinkedIn, name: "LinkedIn", url: "https://www.linkedin.com/in/odette-lamkhizni-42a241251/" },
        { alt: "NAF  YouTube ", src: YouTube, name: "YouTube", url: "https://www.youtube.com/@NAFbyGasthofHalsbach" },
    ];

    useEffect(() => {
        setActiveCategory(Object.keys(faqs)[0]);
    }, [t]);

    return (
        <Box>
            <Helmet>
                {/* Optimized Title with Primary Keywords */}
                <title>Contact NAF Germany: AI Vending Machine Solutions</title>

                {/* Canonical URL */}
                <link rel="canonical" href="https://vendinaf.com/en/contact" />

                {/* Optimized Meta Description */}
                <meta
                    name="description"
                    content="Buchen Sie eine Demo oder kontaktieren Sie NAF, um innovative Verkaufsautomatenlösungen kennenzulernen. Sprechen Sie mit unserem Team für Beratung, Vertrieb und Support."
                />

                <meta name='keywords'
               content='Demo buchen Verkaufsautomat, NAF Kontakt, Automatenlösungen Demo, Smart Vending Beratung, Verkaufsautomat Anfrage, NAF Vertrieb, Vending System Demo'
                />

                {/* Meta Author and Robots */}
                <meta name="author" content="NAF Vending" />
                <meta name="robots" content="index, follow" />

                {/* HTML Lang */}
                <html lang="de" />

                {/* Open Graph Tags for Social Sharing */}
                <meta property="og:title" content="Contact NAF Germany: AI Vending Machine Solutions" />
                <meta
                    property="og:description"
                    content="Reach NAF Germany for innovative AI vending machines and eco-friendly solutions. Contact us for inquiries, demos, or partnerships in sustainable vending."
                />
                <meta property="og:image" content={Picture1} /> {/* Replace with actual image URL */}
                <meta property="og:url" content="https://vendinaf.com/en/contact" />
                <meta property="og:type" content="website" />

                {/* Twitter Card Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Contact NAF Germany: AI Vending Machine Solutions" />
                <meta
                    name="twitter:description"
                    content="Reach NAF Germany for innovative AI vending machines and eco-friendly solutions. Contact us for inquiries, demos, or partnerships in sustainable vending."
                />
                <meta name="twitter:image" content={Picture1} /> {/* Replace with actual image URL */}

                {/* Structured Data (JSON-LD) for Rich Snippets – LocalBusiness for Local SEO */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "LocalBusiness",
                        "name": "NAF Germany",
                        "description": "NAF Germany offers AI-powered vending machines and sustainable food solutions. Contact us for partnerships, leasing, or technical support.",
                        "url": "https://vendinaf.com/en/contact",
                        "telephone": "+49-152-28387141",
                        "email": "info@naf-halsbach.de",
                        "address": {
                            "@type": "PostalAddress",
                            "streetAddress": "Obere Straße 3",
                            "addressLocality": "Freiberg, OT Halsbach",
                            "postalCode": "09599",
                            "addressCountry": "Germany"
                        },

                        "contactPoint": [
                            {
                                "@type": "ContactPoint",
                                "telephone": "+49-152-28387141",
                                "contactType": "Customer Service",
                                "contactOption": "TollFree",
                                "areaServed": "DE",
                                "availableLanguage": "English, German"
                            },
                            {
                                "@type": "ContactPoint",
                                "telephone": "+49-162-1638005",
                                "contactType": "Technical Support",
                                "contactOption": "TollFree",
                                "areaServed": "DE",
                                "availableLanguage": "English, German"
                            }
                        ],
                        "openingHoursSpecification": {
                            "@type": "OpeningHoursSpecification",
                            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                            "opens": "09:00",
                            "closes": "17:00"
                        },
                        "logo": {
                            "@type": "ImageObject",
                            "url": { logoUrl }
                        }
                    })}
                </script>
                {/* Add Person Schema for Each Member */}
                <script type="application/ld+json">
                    {JSON.stringify(contacts.map((contact, index) => ({
                        "@context": "https://schema.org",
                        "@type": "Person",
                        "name": contact.name,
                        "jobTitle": contact.roleDescription,
                        "worksFor": {
                            "@type": "Organization",
                            "name": "NAF Germany"
                        },
                        "description": contact.description,
                        "image": contact.image,
                        "url": `https://vendinaf.com/en/contact#${contact.name.replace(/\s/g, '-')}`, // Anchor link for internal navigation
                        "sameAs": contact.linkedin ? [contact.linkedin] : []
                    })))}
                </script>
            </Helmet>
            <Box className='section-container contactus-sec' sx={{ pr: 0 }}>
                <Box className='contactus-subsec'>
                    <Typography sx={{ color: '#C2C2C4', mb: 2 }} className='bodyRegularText3'>{t('contactus.heroSubTitle1')}</Typography>
                    <Typography className='headings-h1'>{t('contactus.heroTitle')}</Typography>
                    <Box sx={{ mt: { xs: 3, sm: 4, md: 6 } }}>
                        <Typography sx={{ color: '#C2C2C4', mb: 2 }} className='bodyRegularText3'>{t('contactus.heroSubTitle2')}</Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: '12px', sm: '18px', md: '40px' } }}>
                            {/* contact deteils */}
                            <a
                                href="mailto:info@naf-halsbach.de"
                                style={{ textDecoration: 'none', cursor: 'pointer' }}

                            >
                                <Box sx={{ display: 'flex', gap: { xs: '12px', sm: '18px', md: '32px' }, alignItems: 'center' }}>
                                    <Box className="contact-icons"
                                        sx={{
                                            backgroundColor: '#7FEE64',
                                            borderRadius: '50%',
                                            width: "56px",
                                            height: "56px",
                                            display: 'flex',
                                            justifyContent: 'center', cursor: 'pointer',
                                            alignItems: 'center',
                                             position:'relative'
                                        }}
                                    >      <Box sx={{ position: 'absolute', width: '100%', height: '100%', top: '10px', right: '10px', cursor: 'pointer !important',zIndex: 10 }}></Box>
                                        <Contactmail className="contact-icon" sx={{ cursor: 'pointer !important' }} />
                                    </Box>
                                    <Typography className="bodyRegularText2" sx={{ color: '#FCFCFC', cursor: 'pointer' }} >
                                        info@naf-halsbach.de
                                    </Typography>
                                </Box>
                            </a>
                            <Box sx={{ display: 'flex', gap: { xs: '12px', sm: '18px', md: '32px' }, alignItems: 'center' }}>
                                <Box className="contact-icons"
                                    sx={{
                                        backgroundColor: '#7FEE64',
                                        borderRadius: '50%',
                                        width: "56px",
                                        height: "56px",
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center', position:'relative'
                                    }}
                                >
                                          <Box sx={{ position: 'absolute', width: '100%', height: '100%', top: '10px', right: '10px', cursor: 'pointer !important',zIndex: 10 }}></Box>
                                    <Contactphone />
                                </Box>
                                <a
                                    href="tel:015228387141"
                                    style={{ color: '#FCFCFC', textDecoration: 'none' }}
                                    className="bodyRegularText2"
                                >
                                    <Typography sx={{ color: '#FCFCFC', cursor: 'pointer' }} className='bodyRegularText2'>
                                        0152 – 28387141 (Odette Lamkhizni)
                                    </Typography>
                                </a>
                            </Box>
                            <Box sx={{ display: 'flex', cursor: 'pointer', gap: { xs: '12px', sm: '18px', md: '32px' }, alignItems: 'center' }}>
                                <Box className="contact-icons"
                                    sx={{
                                        backgroundColor: '#7FEE64',
                                        borderRadius: '50%',
                                        width: "56px",
                                        height: "56px",
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center', position:'relative'

                                    }}
                                >      <Box sx={{ position: 'absolute', width: '100%', height: '100%', top: '10px', right: '10px', cursor: 'pointer !important',zIndex: 10 }}></Box>
                                    <Contactphone />
                                </Box>
                                <a
                                    href="tel:01621638005"
                                    style={{ color: '#FCFCFC', textDecoration: 'none' }}
                                    className="bodyRegularText2"
                                >
                                    <Typography sx={{ color: '#FCFCFC', cursor: 'pointer' }} className='bodyRegularText2'>
                                        0162 – 1638005  (Technischer Support 24/7)
                                    </Typography>
                                </a>
                            </Box>
                        </Box>
                        <Box sx={{ mt: { xs: 3, sm: 4, md: 6 } }}>
                            <Typography sx={{ color: '#C2C2C4', mb: 2 }} className='bodyRegularText3'>{t('contactus.heroSubTitle3')}</Typography>
                            <Box sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                gap: { xs: '25px', sm: '35px', md: '48px' },
                                alignItems: 'center'
                            }}>
                                {socialIcons.map((social, index) => (
                                    <a
                                        key={index}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <Box
                                            component="img"
                                            src={social.src}
                                            alt={social.name}
                                            sx={{
                                                width: { xs: 32, md: 40 },
                                                height: { xs: 32, md: 40 },
                                                cursor: "pointer",
                                                objectFit: "contain",
                                                '&:hover': {
                                                    opacity: 0.8,
                                                }
                                            }}
                                        />
                                    </a>
                                ))}</Box>
                        </Box>
                    </Box>
                </Box>
                <Box className='contactus-subsec' sx={{ backgroundColor: '#FA7854', padding: { xs: 1, sm: 2, md: 4 } }}>
                    <Box sx={{ display: 'flex', gap: '50px', width: '100%', justifyContent: 'center', marginBottom: '20px' }}>
                        <Typography
                            variant="body1"
                            className='bodyMediumText1 form-title-btn'
                            onClick={() => toggleForm('submit')}
                            sx={{
                                cursor: 'pointer',
                                position: 'relative',
                                color: active === 'submit' ? '#1A1A1A' : '#C2C2C4',
                                transition: 'color 0.3s ease',
                                '&::after': {
                                    content: '""',
                                    position: 'absolute',
                                    left: 0,
                                    bottom: -2,
                                    height: '2px',
                                    width: active === 'submit' ? '100%' : '0%',
                                    backgroundColor: '#1A1A1A',
                                    transition: 'width 0.3s ease',
                                },
                            }}
                        >
                            {t('contactus.SubmitForm')}
                        </Typography>
                        <Typography
                            variant="body1"
                            className='bodyMediumText1 form-title-btn'
                            onClick={() => toggleForm('schedule')}
                            sx={{
                                cursor: 'pointer',
                                position: 'relative',
                                color: active === 'schedule' ? '#1A1A1A' : '#C2C2C4',
                                transition: 'color 0.3s ease',
                                '&::after': {
                                    content: '""',
                                    position: 'absolute',
                                    left: 0,
                                    bottom: -2,
                                    height: '2px',
                                    width: active === 'schedule' ? '100%' : '0%',
                                    backgroundColor: '#1A1A1A',
                                    transition: 'width 0.3s ease',
                                },
                            }}
                        >
                            {t('contactus.ScheduleCall')}
                        </Typography>
                    </Box>

                    {isSubmitform ? (
                        <>
                            {/* Default Render Submit Form */}
                            <Box sx={{ width: '100%', marginTop: { xs: '10px', sm: '30px', md: '60px' }, display: 'flex', flexDirection: 'column', gap: { xs: '10px', sm: '30px', md: '50px' } }}>
                                <TextField
                                    className='bodyRegularText3'
                                    label={t('contactus.Email')}
                                    variant="standard"
                                    required
                                    fullWidth
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    InputLabelProps={{
                                        style: {
                                            color: '#FCFCFC',
                                            fontSize: {
                                                md: '10px',
                                                lg: '20px',
                                            },
                                        },
                                    }}
                                    InputProps={{
                                        disableUnderline: false,
                                        sx: {
                                            color: '#FCFCFC',
                                            paddingTop: "28px",
                                            '&:before': { borderBottomColor: '#C6C6C6' },
                                            '&:hover:not(.Mui-disabled):before': { borderBottomColor: '#ffffffcc' },
                                            '&:after': { borderBottomColor: '#C6C6C6' },
                                        },
                                    }}
                                />
                                <TextField
                                    className='bodyRegularText3'
                                    label={t('contactus.FullName')}
                                    variant="standard"
                                    required
                                    fullWidth
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleInputChange}
                                    InputLabelProps={{
                                        style: {
                                            color: '#FCFCFC', fontSize: {

                                                md: '10px',
                                                lg: '20px',
                                            },
                                        }
                                    }}
                                    InputProps={{
                                        disableUnderline: false,
                                        sx: {
                                            color: '#FCFCFC',
                                            paddingTop: "28px",
                                            '&:before': { borderBottomColor: '#C6C6C6' },
                                            '&:hover:not(.Mui-disabled):before': { borderBottomColor: '#ffffffcc' },
                                            '&:after': { borderBottomColor: '#C6C6C6' },
                                        },
                                    }}
                                />
                            </Box>

                            {/* Categories */}
                            <Box sx={{ marginTop: { xs: '10px', sm: '30px', md: '50px' } }}>
                                <Typography variant="h6" className='bodyRegularText3' sx={{ mb: 3, color: "#FCFCFC" }}>
                                    {t('contactus.typeofHelp')}
                                </Typography>
                                <Stack direction="row" flexWrap="wrap" gap={2}>
                                    {categories.map((label) => {
                                        const isSelected = selectedItems.includes(label);
                                        return (
                                            <Button
                                                className='bodyRegularText4'
                                                onClick={() => handleCategorySelect(label)}
                                                key={label}
                                                variant="outlined"
                                                sx={{
                                                    color: '#FCFCFC',
                                                    borderRadius: '50px',
                                                    textTransform: 'none',
                                                    px: 3,
                                                    py: 1.5,
                                                    fontWeight: 400,
                                                    borderColor: isSelected ? 'transparent' : '#C6C6C6',
                                                    backgroundColor: isSelected ? '#1A1A1A' : 'transparent',
                                                    '&:hover': {
                                                        backgroundColor: isSelected ? '#1A1A1A' : '#ffffff22',
                                                        borderColor: isSelected ? 'transparent' : '#C6C6C6',
                                                    },
                                                }}
                                            >
                                                {label}
                                            </Button>
                                        );
                                    })}
                                </Stack>
                                {formData.inquiryType.includes(t('contactus.Others')) && (
                                    <TextField
                                        className='bodyRegularText3'
                                        label={t('contactus.Pleasespecify')}
                                        variant="standard"
                                        required
                                        fullWidth
                                        name="customCategory"
                                        value={customCategory}
                                        onChange={(e) => setCustomCategory(e.target.value)}
                                        InputLabelProps={{
                                            style: { color: '#FCFCFC', },
                                        }}
                                        InputProps={{
                                            disableUnderline: false,
                                            sx: {
                                                color: '#FCFCFC',
                                                paddingTop: '28px',
                                                '&:before': { borderBottomColor: '#C6C6C6' },
                                                '&:hover:not(.Mui-disabled):before': { borderBottomColor: '#ffffff' },
                                                '&:after': { borderBottomColor: '#C6C6C6' },
                                            },
                                        }}
                                        sx={{ marginTop: '10px' }}
                                    />
                                )}
                            </Box>

                            {/* Message + Consent + Submit */}
                            <Box sx={{ width: '100%', marginTop: { xs: '10px', sm: '30px', md: '60px' }, display: 'flex', flexDirection: 'column', gap: { xs: '10px', sm: '30px', md: '60px' } }}>
                                <TextField
                                    className='bodyRegularText3'
                                    label={t('contactus.Message')}
                                    variant="standard"
                                    required
                                    fullWidth
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    InputLabelProps={{
                                        style: {
                                            color: '#FCFCFC', fontSize: {

                                                md: '10px',
                                                lg: '20px',
                                                xl: "24px"
                                            },
                                        }
                                    }}
                                    InputProps={{
                                        disableUnderline: false,
                                        sx: {
                                            color: '#FCFCFC',
                                            paddingTop: "28px",
                                            '&:before': { borderBottomColor: '#C6C6C6' },
                                            '&:hover:not(.Mui-disabled):before': { borderBottomColor: '#ffffffcc' },
                                            '&:after': { borderBottomColor: '#C6C6C6' },
                                        },
                                    }}
                                />
                                {/* <Box><FormControlLabel
                                    control={
                                        <Radio
                                            checked={isConsentChecked}
                                            onChange={(e) => setIsConsentChecked(e.target.checked)}
                                            sx={{
                                                color: '#E0E0E0',
                                                '&.Mui-checked': {
                                                    color: '#7FEE64', // green when checked
                                                },
                                            }}
                                        />
                                    }
                                    label={
                                        <Typography variant="body2" className="bodyRegularText5" sx={{ color: '#FCFCFC' }}>
                                            {t('contactus.privacypolicy1')}{' '}
                                            <Link
                                                onClick={() => navigate(`/${lang}/privacy-policy`)}
                                                underline="hover"
                                                sx={{ color: '#161616', textDecorationColor: '#161616', textDecoration: 'underline' }}
                                            >
                                                {t('contactus.privacypolicy2')}
                                            </Link>
                                        </Typography>
                                    }
                                />
                                </Box> */}

                                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                                    <input
                                        type="radio"
                                        id="privacyConsent"
                                        name="privacyConsent"
                                        checked={isConsentChecked}
                                        onChange={(e) => setIsConsentChecked(e.target.checked)}
                                        style={{
                                            marginTop: '4px',
                                            accentColor: '#7FEE64', // green color for selected
                                            width: '16px',
                                            height: '16px',
                                        }}
                                    />
                                    <label htmlFor="privacyConsent" className='bodyRegularText4' style={{ color: '#FCFCFC', fontSize: '14px' }}>
                                        {t('contactus.privacypolicy1')}{' '}
                                        <a
                                            style={{
                                                color: '#161616',
                                                textDecoration: 'underline',
                                                cursor: 'pointer'
                                            }}
                                            onClick={() => navigate(`/${lang}/privacy-policy`)}
                                        >
                                            {t('contactus.privacypolicy2')}
                                        </a>

                                    </label>
                                </div>

                                <Box sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    mx: "auto",
                                    position: "relative",
                                    zIndex: 1,
                                    marginBottom: { xs: "1rem", sm: "1rem", md: "2rem" }
                                }}>
                                    {isSubmitting ? (
                                        <Button disabled variant="contained" sx={{ borderRadius: '50px', px: 5, py: 1.5 }}>
                                           {t('validation.submitting')}
                                        </Button>
                                    ) : (
                                        <div onClick={handleSubmit} style={{ cursor: 'pointer' }}>
                                            <AnimateButton text1={t('contactus.SUBMIT')} text2={t('contactus.NOW')} />
                                        </div>
                                    )}
                                </Box>
                            </Box>

                            <Snackbar
                                open={snackbar.open}
                                autoHideDuration={4000}
                                onClose={handleSnackbarClose}
                                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                            >
                                <Alert onClose={handleSnackbarClose} severity={snackbar.severity} sx={{ width: '100%' }}>
                                    {snackbar.message}
                                </Alert>
                            </Snackbar>
                        </>
                    ) : (
                        <Calendly />
                    )}
                </Box>
            </Box>

            <Box className="section-container" sx={{
                display: 'flex',
                justifyContent: 'center', // Center the items in the container
                gap: 4,
                flexWrap: 'wrap',
            }}>
                {contacts.map((contact, index) => (
                    <Box
                        key={index}
                        sx={{
                            flex: { xs: '0 0 100%', sm: '0 0 100%', md: '0 0 30%' },
                            display: 'grid',
                            gridTemplateRows: 'minmax(64px, auto) 1fr auto',
                            gap: 2,
                            mb: 4,
                            height: '100%',
                        }}
                    >
                        {/* Title */}
                        <Typography
                            className="bodyMediumText1"
                            color="#FCFCFC"
                            sx={{
                                minHeight: '64px',
                                display: 'flex',
                                alignItems: 'center',
                            }}
                        >
                            {contact.title}
                        </Typography>

                        {/* Image slot (LOCKED) */}
                        <Box
                            sx={{
                                width: '100%',
                                aspectRatio: '1 / 1',
                                borderRadius: 2,
                                overflow: 'hidden',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                backgroundColor: '#111',
                            }}
                        >
                            <img
                                src={contact.image}
                                alt={contact.alt}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                }}
                            />
                        </Box>

                        {/* Footer */}
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                            }}
                        >
                            <Typography className="bodyRegularText3" color="#FCFCFC">
                                {contact.name}
                            </Typography>

                            <a href={`mailto:${contact.links}`}>
                                <Box
                                    sx={{
                                        backgroundColor: '#F4F4F4',
                                        borderRadius: '50%',
                                        p: '14px 12px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        cursor: 'pointer',
                                    }}
                                >

                                    <Contactmail color='#FA7854' sx={{}} />
                                </Box>
                            </a>
                        </Box>
                    </Box>
                ))}
            </Box>

            <Box className="section-container">
                <Typography className='headings-h2' sx={{ width: { xs: '80%', sm: '50%', md: '42%' }, mb: { xs: 2, sm: 3, md: 5 } }}>
                    {t('contactus.reachDirectly')}
                </Typography>
                <Box
                    sx={{
                        borderTop: '1px solid #525252',
                        py: { xs: 3, sm: 3, md: 5 },
                    }}
                >
                    <Grid container spacing={1} alignItems="flex-start">
                        {/* Column 1: Text */}
                        <Grid item xs={6} sm={4} lg={3}>
                            <Typography className='bodyRegularText4' sx={{ color: '#C2C2C4' }}>
                                {t('contactus.location')}
                            </Typography>
                        </Grid>

                        {/* Column 2: Location info */}
                        <Grid item xs={6} sm={8} lg={3}>
                            <Box sx={{ display: 'flex', gap: '10px' }}>
                                <Box sx={{ mt: '5px' }}>
                                    <Location />
                                </Box>
                                <Box>
                                    <Typography className='bodyRegularText3' sx={{ color: '#C2C2C4', m: 0, p: 0 }}>
                                        Obere Straße 3,<br />
                                        09599 Freiberg,<br />
                                        OT Halsbach
                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>
                        {/* Column 3 & 4: Styled box */}
                        <Grid item xs={12} lg={6}>
                            <Box
                                sx={{
                                    borderRadius: "24px",
                                    overflow: 'hidden', // ensures iframe corners are clipped
                                    width: '100%',
                                    height: { xs: '250px', sm: '300px', md: '250px' }, // responsive height
                                }}
                            >
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2983.3281649400715!2d13.3770389!3d50.923086899999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4709df750e52bdaf%3A0xe8da94e14ad9e730!2sNAF-New%20Age%20of%20Food%20by%20Gasthof%20Halsbach!5e1!3m2!1sen!2sin!4v1745905829150!5m2!1sen!2sin"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                />
                            </Box>
                        </Grid>
                    </Grid>
                </Box>

                <Box
                    sx={{
                        borderTop: '1px solid #525252',
                        py: { xs: 3, sm: 3, md: 5 },
                    }}
                >
                    <Grid container spacing={1}>
                        {/* First column: Title */}
                        <Grid item xs={12} sm={4} lg={3}>
                            <Typography className="bodyRegularText4" sx={{ color: '#C2C2C4' }}>
                                {t('contactus.MachineLocation')}
                            </Typography>
                        </Grid>

                        {/* Second column: Locations */}
                        <Grid item xs={12} sm={8} lg={9}>
                            <Grid container spacing={5}>
                                {locations.map((item, index) => (
                                    <Grid item xs={12} sm={6} md={6} xl={4} key={index}>
                                        <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                                            <Box sx={{ mt: '6px' }}>
                                                <Location style={{ color: '#72FF5C' }} />
                                            </Box>
                                            <Typography
                                                className="bodyRegularText3"
                                                sx={{
                                                    color: '#C2C2C4',
                                                    lineHeight: 1.6,
                                                    fontSize: '18px',
                                                }}
                                            >
                                                {item.address}
                                            </Typography>
                                        </Box>
                                    </Grid>
                                ))}
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>

            </Box>

            <Box className='section-container' sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row', md: 'row' }, justifyContent: 'space-between', gap: { xs: 3, sm: 6, md: 8 } }}>
                {/* Left Column - Categories */}
                <Box sx={{ width: { xs: '95%', sm: '35%', md: '35%' } }}>
                    <Typography className='headings-h2' sx={{ color: '#FCFCFC', mb: 4 }}>
                        {t('contactus.Curious')}
                    </Typography>
                    <Box sx={{ maxWidth: '365px' }}>
                        <Box sx={{ borderBottom: '0.5px dashed #525252', my: 1 }} />
                        {Object.keys(faqs).map((category, index) => (
                            <Box key={category}>
                                <Typography
                                    onClick={() => setActiveCategory(category)}
                                    className='bodyRegularText3'
                                    sx={{
                                        cursor: 'pointer',
                                        py: { xs: 1, sm: 2, md: 2 },
                                        color: activeCategory === category ? '#7FEE64' : '#C2C2C4',
                                        fontWeight: activeCategory === category ? 600 : 400,
                                        '&:hover': {
                                            color: 'white',
                                        },
                                    }}
                                >
                                    {category}
                                </Typography>
                                <Box sx={{ borderBottom: '0.5px dashed #525252', my: 1 }} />
                            </Box>
                        ))}
                    </Box>
                </Box>

                {/* Right Column - FAQs */}
                <Box sx={{ width: { xs: '95%', sm: '50%', md: '50%' } }}>
                    {Array.isArray(faqs[activeCategory]) && faqs[activeCategory].map((faq, idx) => (
                        <Accordion
                            key={idx}
                            aria-controls="panel2-content"
                            id="panel2-header"
                            expanded={expandedIndex === idx}
                            onChange={() => setExpandedIndex(expandedIndex === idx ? null : idx)}
                            sx={{
                                border: '1px solid #393939',
                                backgroundColor: 'transparent',
                                color: '#C2C2C4',
                                borderRadius: '12px !important',
                                boxShadow: 'none',

                                mb: 2,
                                p: 2,
                                '&::before': { display: 'none' },
                            }}
                        >
                            <AccordionSummary aria-controls="panel1-content"

                                id="panel1-header"
                                expandIcon={<ArrowDropDownIcon sx={{
                                    color: '#C2C2C4', transform: expandedIndex === idx ? 'rotate(180deg)' : 'rotate(0deg)',
                                    transition: 'transform 0.3s',
                                }} />}>
                                <Typography className="bodyRegularText3" sx={{ color: '#C2C2C4', flexGrow: '1' }}>
                                    {faq.question}
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                {faq.answer && (
                                    <Typography variant="body2" className="bodyRegularText3" sx={{ color: '#C2C2C4' }}>
                                        {faq.answer}
                                    </Typography>
                                )}
                                {faq.list && faq.list.length > 0 && (
                                    <ul style={{ margin: '10px 0px', paddingLeft: '20px' }}>
                                        {faq.list.map((item, i) => (
                                            <li key={i} style={{ color: '#C2C2C4' }} className="bodyRegularText3">{item}</li>
                                        ))}
                                    </ul>
                                )}
                                {faq.answerSecond && (
                                    <Typography variant="body2" className="bodyRegularText3" sx={{ color: '#C2C2C4' }}>
                                        {faq.answerSecond}
                                    </Typography>
                                )}
                            </AccordionDetails>
                        </Accordion>
                    ))}
                </Box>
            </Box>
        </Box>
    )
}

export default ContactPage