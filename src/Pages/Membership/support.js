// import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {
    Box,
    Typography,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Modal,
    IconButton,
} from "@mui/material";
import React, { useEffect, useState } from 'react';
import CustomTextField from '../MachinesPage/MantaincePage/CustomTextField';
import CustomSelect from '../MachinesPage/MantaincePage/CustomSelect';
import {
    ArrowDropDown,
} from '@mui/icons-material';
import CloseIcon from '@mui/icons-material/Close';
import { UploadIcon } from '../../Components/CustomIcons';
import { useTranslation } from 'react-i18next';

import AnimateButton from "../../Components/CommonComponents/AnimateButton";
import i18n from '../../i18n';
// import emailjs from "@emailjs/browser";
import { Helmet } from "react-helmet";


const Support = () => {
    const navigate = useNavigate()
    const { lang } = useParams()
    const { t } = useTranslation();
    const [expandedFaqIndex, setExpandedFaqIndex] = useState(null);
    const [loading, setLoading] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [errors, setErrors] = useState({});
    const [isConsentChecked, setIsConsentChecked] = useState(false);

    useEffect(() => {
        if (lang && i18n.language !== lang) {
            i18n.changeLanguage(lang);
        }
    }, [lang]);
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    // Validation functions
    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validatePhoneNumber = (phone) => {
        if (!phone) return true; // Phone is optional
        const phoneRegex = /^[+]?[(]?[0-9]{1,4}[)]?[-\s\.]?[(]?[0-9]{1,4}[)]?[-\s\.]?[0-9]{1,9}$/;
        return phoneRegex.test(phone);
    };

    const validateForm = () => {
        const newErrors = {};

        // Required fields
        if (!formTab0.fullName.trim()) {
            newErrors.fullName = t('validation.fullNameRequired') || 'Full name is required';
        }

        if (!formTab0.email.trim()) {
            newErrors.email =  t('productModal.email.error.required') || 'Email is required';
        } else if (!validateEmail(formTab0.email)) {
            newErrors.email = t('productModal.email.error.invalid') || 'Please enter a valid email address';
        }

        if (formTab0.phoneNumber && !validatePhoneNumber(formTab0.phoneNumber)) {
            newErrors.phoneNumber = t('productModal.phone.error.invalid') || 'Please enter a valid phone number';
        }

        if (!formTab0.accountType) {
            newErrors.accountType = t('supportForm.errors.accountTypeRequired') || 'Account type is required';
        }

        if (!formTab0.requestType) {
            newErrors.requestType = t('supportForm.errors.requestTypeRequired') || 'Request type is required';
        }

        if (!formTab0.subject.trim()) {
            newErrors.subject = t('supportForm.errors.subjectRequired') || 'Subject is required';
        }

        if (!formTab0.message.trim()) {
            newErrors.message = t('supportForm.errors.messageRequired') || 'Message is required';
        } else if (formTab0.message.trim().length < 10) {
            newErrors.message = t('supportForm.errors.messageTooShort') || 'Message must be at least 10 characters';
        }

        if (!isConsentChecked) {
            newErrors.consent =  t('productModal.privacyPolicy.error');
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const [formTab0, setFormTab0] = useState({
        companyName: '',
        willingToPurchaseMachine: '',
        fullName: '',
        email: '',
        phoneNumber: '',
        machineIdLocation: '',
        accountType: '',
        requestType: '',
        subject: '',
        message: '',
        media: [],
    });

    const handleChange = (e, tabIndex) => {
        const { name, value, type, files } = e.target;
        if (tabIndex === 0) {
            if (type === 'file') {
                setFormTab0(prev => ({
                    ...prev,
                    media: [...prev.media, ...files]
                }));
            } else {
                setFormTab0(prev => ({
                    ...prev,
                    [name]: value
                }));
                // Clear error for this field when user types
                if (errors[name]) {
                    setErrors(prev => ({
                        ...prev,
                        [name]: ''
                    }));
                }
            }
        }
    };

    const handleDelete = (index) => {
        setFormTab0(prev => ({
            ...prev,
            media: prev.media.filter((_, i) => i !== index)
        }));
    };

    const handleSubmit = async () => {
        // Validate form
        if (!validateForm()) {
            return;
        }

        setLoading(true);

        try {
            // Prepare the issue data
            const issueData = {
                fullName: formTab0.fullName,
                email: formTab0.email,
                phoneNumber: formTab0.phoneNumber,
                machineLocation: formTab0.machineIdLocation || formTab0.machineLocation,
                accountType: formTab0.accountType,
                requestType: formTab0.requestType,
                subject: formTab0.subject,
                description: formTab0.message
            };

            // Create FormData
            const formData = new FormData();
            formData.append('issueData', JSON.stringify(issueData));
            
            // Append media files
            formTab0.media.forEach(file => {
                formData.append('mediaFiles', file);
            });

            // Make API request - REPLACE WITH YOUR ACTUAL ENDPOINT
            const response = await fetch('https://staging-api.naf-cloudsystem.de/api/NAFWebsite/issue', {
                method: 'POST',
                body: formData,
                // Note: Don't set Content-Type header - browser will set it with boundary automatically
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const result = await response.json();

            // Show success modal
            setShowSuccess(true);

            // Reset form
            setFormTab0({
                fullName: "",
                email: "",
                phoneNumber: "",
                machineIdLocation: "",
                accountType: "",
                requestType: "",
                subject: "",
                message: "",
                media: [],
            });
            setIsConsentChecked(false);
            setErrors({});
        } catch (error) {
            console.error("API Error:", error);
            alert(t('validation.failedToSendRequest'));
        } finally {
            setLoading(false);
        }
    };

    const handleCloseSuccess = () => {
        setShowSuccess(false);
    };

    const faqData = [
        {
            question: t('support.faq.question1'),
            answer: t('support.faq.answer1')
        },
        {
            question: t('support.faq.question2'),
            answer: t('support.faq.answer2')
        },
        {
            question: t('support.faq.question3'),
            answer: t('support.faq.answer3')
        },
        {
            question: t('support.faq.question4'),
            answer: t('support.faq.answer4')
        }
    ];


    const steps = [
        {
            step: "1",
            title: t('support.workflow.step1Title'),
            desc: t('support.workflow.step1Desc'),
        },
        {
            step: "2",
            title: t('support.workflow.step2Title'),
            desc: t('support.workflow.step2Desc'),
        },
        {
            step: "3",
            title: t('support.workflow.step3Title'),
            desc: t('support.workflow.step3Desc'),
        },

    ];


    return (
        <Box className="section-container" 
        
            sx={{
                minHeight: "100vh",
                background: "#1D1D1F",
                boxSizing: "border-box",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                paddingTop: "50px",
                px: { xs: 2, md: 5 },
            }}
        >
 {/* SEO + Meta Tags */}
    <Helmet htmlAttributes={{ lang }}>
      <title>
          NAF Support
      </title>

      <link
        rel="canonical"
        href={`https://vendinaf.com/${lang}/support`}
      />

      <meta
        name="description"
        content={"Kontaktieren Sie den NAF Support bei Fragen zu Verkaufsautomaten, Konten oder technischen Problemen. Schnelle und zuverlässige Unterstützung online."}
      />

      <meta
        name="keywords"
        content="NAF Support, Verkaufsautomaten Support, Kundenservice NAF, Hilfe Verkaufsautomaten, technischer Support Automaten, NAF Kontakt, Automaten Service, Störungsmeldung, NAF Hilfe, Support Anfrage
"
      />

      <meta name="robots" content="index, follow" />

      {/* Open Graph */}
      <meta property="og:title" content="NAF Support – We’re Here to Help" />
      <meta
        property="og:description"
        content="Contact NAF Support for fast assistance with vending machines, payments, accounts, and technical issues."
      />
      <meta
        property="og:url"
        content={`https://vendinaf.com/${lang}/support`}
      />
      <meta
        property="og:type"
        content="website"
      />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="NAF Support – Customer Assistance" />
      <meta
        name="twitter:description"
        content="Need help? Reach NAF Support for quick solutions to vending machine and account issues."
      />
    </Helmet>


            {/* Header */}
            <Typography className='bodyMediumText1'
                sx={{
                    color: "#7CFF7C !important",

                    mb: 2,
                }}
            >
                {t('support.header')}
            </Typography>

            <Typography className='headings-h1'
                sx={{
                    color: "#FCFCFC",
                    fontSize: { xs: "32px", md: "48px" },
                    fontWeight: 700,
                    textAlign: "center",
                    mb: 2,
                }}
            >
                {t('support.mainHeading')}
            </Typography>

            <Typography className='bodyRegularText3'
                sx={{
                    color: "#C2C2C4",
                    maxWidth: 700,
                    textAlign: "center",
                    mb: 6,
                    lineHeight: 1.6,
                }}
            >
                {t('support.description')}
            </Typography>

            {/* Form Card */}
            <Box
                sx={{
                    width: "100%",
                    maxWidth: 1020,
                    background: "#1D1D1F",
                    border: "1px solid #525252",
                    borderRadius: "12px",
                    boxSizing: "border-box",
                    overflow: "hidden",
                    p: { xs: 1, sm: 2, md: 15 },
                    py: { xs: 2, md: 10 },
                    mt: { xs: 7, sm: 7, md: 9 },
                }}
            >
                <Typography className='headings-h4'
                    sx={{
                        color: "#FCFCFC",

                        mb: 4,
                        textAlign: "center",
                    }}
                >
                    {t('support.formTitle')}
                </Typography>

                {/* Inputs */}
                <Box sx={{ display: "flex", flexDirection: "column", gap: 3, padding: { xs: 1, md: 3 } }}>
                    <Box>
                        <CustomTextField
                            required
                            label={t('support.fullName')}
                            name="fullName"
                            value={formTab0.fullName || ''}
                            onChange={(e) => handleChange(e, 0)}
                            error={!!errors.fullName}
                        />
                        {errors.fullName && (
                            <Typography sx={{ color: '#d32f2f', fontSize: '12px', mt: 0.5, ml: 1 }}>
                                {errors.fullName}
                            </Typography>
                        )}
                    </Box>
                    <Box>
                        <CustomTextField
                            required
                            label={t('support.email')}
                            name="email"
                            value={formTab0.email || ''}
                            onChange={(e) => handleChange(e, 0)}
                            error={!!errors.email}
                        />
                        {errors.email && (
                            <Typography sx={{ color: '#d32f2f', fontSize: '12px', mt: 0.5, ml: 1 }}>
                                {errors.email}
                            </Typography>
                        )}
                    </Box>

                    <Box>
                        <CustomTextField
                            label={t('support.phoneNumber')}
                            name="phoneNumber"
                            value={formTab0.phoneNumber || ''}
                            onChange={(e) => handleChange(e, 0)}
                            error={!!errors.phoneNumber}
                        />
                        {errors.phoneNumber && (
                            <Typography sx={{ color: '#d32f2f', fontSize: '12px', mt: 0.5, ml: 1 }}>
                                {errors.phoneNumber}
                            </Typography>
                        )}
                    </Box>

                    <CustomTextField
                        label={t('support.machineIdLocation')}
                        name="machineIdLocation"
                        value={formTab0.machineIdLocation || ''}
                        onChange={(e) => handleChange(e, 0)}
                    />

                    <Box>
                        <CustomSelect
                            required
                            label={t('support.accountType')}
                            name="accountType"
                            value={formTab0.accountType || ''}
                            onChange={(e) => handleChange(e, 0)}
                            options={[
                                { value: 'user', label: t('support.userMember') },
                                { value: 'business', label: t('support.businessPartner') },
                            ]}
                            error={!!errors.accountType}
                        />
                        {errors.accountType && (
                            <Typography sx={{ color: '#d32f2f', fontSize: '12px', mt: 0.5, ml: 1 }}>
                                {errors.accountType}
                            </Typography>
                        )}
                    </Box>

                    <Box>
                        <CustomSelect
                            required
                            label={t('support.requestType')}
                            name="requestType"
                            value={formTab0.requestType || ''}
                            onChange={(e) => handleChange(e, 0)}
                            options={[
                                { value: 'technical', label: t('support.technicalIssue') },
                                { value: 'payment', label: t('support.paymentIssue') },
                                { value: 'machine', label: t('support.machineIssue') },
                                { value: 'account', label: t('support.accountMembership') },
                                { value: 'feedback', label: t('support.feedbackSuggestion') },
                                { value: 'other', label: t('support.other') },
                            ]}
                            error={!!errors.requestType}
                        />
                        {errors.requestType && (
                            <Typography sx={{ color: '#d32f2f', fontSize: '12px', mt: 0.5, ml: 1 }}>
                                {errors.requestType}
                            </Typography>
                        )}
                    </Box>

                    <Box>
                        <CustomTextField
                            required
                            label={t('support.subject')}
                            name="subject"
                            value={formTab0.subject || ''}
                            onChange={(e) => handleChange(e, 0)}
                            error={!!errors.subject}
                        />
                        {errors.subject && (
                            <Typography sx={{ color: '#d32f2f', fontSize: '12px', mt: 0.5, ml: 1 }}>
                                {errors.subject}
                            </Typography>
                        )}
                    </Box>

                    <Box>
                        <CustomTextField
                            required
                            label={t('support.messageDescription')}
                            name="message"
                            value={formTab0.message || ''}
                            onChange={(e) => handleChange(e, 0)}
                            multiline
                            rows={4}
                            error={!!errors.message}
                        />
                        {errors.message && (
                            <Typography sx={{ color: '#d32f2f', fontSize: '12px', mt: 0.5, ml: 1 }}>
                                {errors.message}
                            </Typography>
                        )}
                    </Box>

                    <Box sx={{ mt: 2 }}>
                        <label
                            htmlFor="media-upload"
                            className="bodyRegularText4"
                            style={{
                                color: '#C2C2C4',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '10px',
                            }}
                        >
                            <div
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    backgroundColor: '#F4F4F4',
                                    borderRadius: '50%',
                                    padding: '10px',
                                    cursor: 'pointer'
                                }}
                            >
                                <UploadIcon />
                            </div>
                            {t('Maintenance.UploadMedia')}
                        </label>

                        <input
                            hidden
                            id="media-upload"
                            accept="image/*,video/*,audio/*"
                            type="file"
                            name="media"
                            onChange={(e) => handleChange(e, 0)}
                            multiple
                        />
                    </Box>

                    {formTab0.media.length > 0 && (
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', mt: 2 }}>
                            {formTab0.media.map((file, index) => (
                                <Box
                                    key={index}
                                    sx={{
                                        position: 'relative',
                                        display: 'flex',
                                        alignItems: 'center',
                                        margin: '8px',
                                    }}
                                >
                                    <Box
                                        sx={{
                                            width: 60,
                                            height: 60,
                                            backgroundColor: '#eee',
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            borderRadius: '4px',
                                            overflow: 'hidden',
                                            marginRight: '8px',
                                        }}
                                    >
                                        {file.type.startsWith('image') ? (
                                            <img src={URL.createObjectURL(file)} alt={file.name} width="60" height="60" />
                                        ) : (
                                            <Typography sx={{ color: '#C2C2C4', fontSize: '12px' }}>{t('Maintenance.media')}</Typography>
                                        )}
                                    </Box>
                                    <CloseIcon
                                        onClick={() => handleDelete(index)}
                                        sx={{
                                            position: 'absolute',
                                            top: '-8px',
                                            right: '-8px',
                                            cursor: 'pointer',
                                            color: '#FCFCFC',
                                            fontSize: '16px',
                                        }}
                                    />
                                </Box>
                            ))}
                        </Box>
                    )}

                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                        <input
                            type="radio"
                            id="privacyConsent"
                            name="privacyConsent"
                            checked={isConsentChecked}
                            onChange={(e) => {
                                setIsConsentChecked(e.target.checked);
                                if (errors.consent) {
                                    setErrors(prev => ({ ...prev, consent: '' }));
                                }
                            }}


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
                                    color: '#FCFCFC',
                                    textDecoration: 'underline',
                                    cursor: 'pointer'
                                }}
                                onClick={() => navigate(`/${lang}/privacy-policy`)}
                            >
                                {t('contactus.privacypolicy2')}
                            </a>

                        </label>
                    </div>




                    {errors.consent && (
                        <Typography sx={{ color: '#d32f2f', fontSize: '12px', mt: 0.5, ml: 3 }}>
                            {errors.consent}
                        </Typography>
                    )}


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

                        <div style={{ cursor: 'pointer' }} onClick={handleSubmit}>
                            <AnimateButton text1={t('AnimateBtn.raise')} text2={t('AnimateBtn.arequest')} />
                        </div>
                        {/* )} */}
                    </Box>

                </Box>
            </Box>



            <Box className="section-container" sx={{ p: 0 ,}}>
                <Box
                    sx={{
                        width: "100%",
                    }}
                >
                    {/* Title */}
                    <Typography className="headings-h2"
                        sx={{
                            textAlign: "center",
                            mb: 8,
                        }}
                    >
                        {t('support.workflow.title')}
                    </Typography>

                    {/* Steps Row */}
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "flex-start",
                            gap: 4,
                            flexWrap: "wrap",
                        }}
                    >
                        {steps.map((item, index) => (
                            <Box
                                key={index}
                                sx={{
                                    flex: "1 1 220px",
                                    minWidth: 220,
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    textAlign: "center",

                                }}
                            >
                                {/* Circle */}
                                <Box className="headings-h4"
                                    sx={{
                                        display: "flex",
                                        width: { xs: "80px", sm: "80px", md: "100px", lg: "100px", xl: "100px" },
                                        padding:  { xs: "18px", sm: "20px", md: "30px", lg: "30px", xl: "30px" },
                                        justifyContent: "center",
                                        alignItems: "center",
                                        aspectRatio: "1 / 1",
                                        borderRadius: "50%",
                                        background: "#393939",
                                        color: '#9D9EA1',
                                        mb:{ xs: 2, sm: 2, md: 3, lg: 5, xl: 5 },
                                    }}
                                >
                                    {item.step}
                                </Box>

                                {/* Title */}
                                <Typography className="bodyMediumText1"
                                    sx={{
                                        color: "#FCFCFC",
                                        mb: 1,
                                    }}
                                >
                                    {item.title}
                                </Typography>

                                {/* Description */}
                                <Typography className="bodyRegularText3"
                                    sx={{
                                        color: "#C2C2C4",
                                    }}
                                >
                                    {item.desc}
                                </Typography>
                            </Box>
                        ))}
                    </Box>
                </Box>
            </Box>



            {/* FAQ Section */}
            <Box className="section-container" sx={{ p: 0 ,  width: '100%' }}>
                <Box sx={{ mb: { xs: 5, md: 7 }, textAlign: 'center' }}>
                    <Typography className="headings-h2" sx={{ color: '#fcfcfc' }}>
                        {t('transportation.faq.title')}
                    </Typography>
                    <Typography className="bodyMediumText2" sx={{ color: '#C2C2C4' }}>
                        {t('support.faq.subtitle')}
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
                                <Typography className="bodyRegularText4" sx={{ fontWeight: '700' }}>
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

            </Box>

            {/* Success Modal */}
            {showSuccess && (
                <Modal
                    open={showSuccess}
                    onClose={handleCloseSuccess}
                    aria-labelledby="success-message-modal"
                    sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                >
                    <Box
                        onClick={(e) => e.stopPropagation()}
                        sx={{
                            width: "632px",
                            maxWidth: "95vw",
                            maxHeight: "95vh",
                            bgcolor: "#444444",
                            borderRadius: "8px",
                            position: "relative",
                            overflow: "auto",
                            "&::-webkit-scrollbar": {
                                width: "8px",
                            },
                            "&::-webkit-scrollbar-track": {
                                background: "#3a3a3a",
                            },
                            "&::-webkit-scrollbar-thumb": {
                                background: "#666666",
                                borderRadius: "4px",
                            },
                        }}
                    >
                        <IconButton
                            onClick={handleCloseSuccess}
                            sx={{
                                position: "absolute",
                                right: 16,
                                top: 16,
                                color: "#E0A678",
                                border: "1px solid #E0A678",
                                borderRadius: "4px",
                                width: "28px",
                                height: "28px",
                                padding: 0,
                                "&:hover": {
                                    backgroundColor: "rgba(224, 166, 120, 0.1)",
                                },
                            }}
                        >
                            <CloseIcon sx={{ fontSize: "18px" }} />
                        </IconButton>

                        <Box sx={{ pt: 8, pb: 6, px: 5, textAlign: "center" }}>
                            <Typography
                                sx={{
                                    color: "#FCFCFC",
                                    fontWeight: 400,
                                    fontSize: "32px",
                                    textAlign: "center",
                                    letterSpacing: "0.5px",
                                    mb: 2,
                                }}
                                className="headings-h5"
                            >
                                  {t('productModal.success.title')}
                            </Typography>

                            <Typography
                                sx={{
                                    color: "#C2C2C4",
                                    fontSize: "18px",
                                    textAlign: "center",
                                    lineHeight: 1.6,
                                    mb: 4,
                                }}
                                className="bodyRegularText3"
                            >
                                 {t('productModal.success.message')}
                            </Typography>
                        </Box>
                    </Box>
                </Modal>
            )}
        </Box>
    );
}

export default Support