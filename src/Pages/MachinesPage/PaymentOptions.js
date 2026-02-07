import React, { useState } from "react";
import {
  Box,
  Button,
  Typography,
  Modal,
  TextField,
  IconButton,
  CircularProgress,
  Checkbox,
  FormControlLabel,
  MenuItem,
  Select,
  FormControl,
  FormHelperText
} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { PaymentOptionsIcon1, PaymentOptionsIcon2, PaymentOptionsIcon3 } from "../../Components/CustomIcons";
import AnimateButton from "../../Components/CommonComponents/AnimateButton";
import SharedPaymentModal from "../../Components/SharedPaymentModal";
import { useTranslation } from 'react-i18next';
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// import emailjs from "@emailjs/browser";



const PaymentOptions = () => {
  const { t } = useTranslation();
  const { lang } = useParams();
  const [open, setOpen] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [currentOption, setCurrentOption] = useState(null);
  const [defaultPurchaseMethod, setDefaultPurchaseMethod] = useState('');
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    purchaseMethod: defaultPurchaseMethod,
    machine: "",
    email: "",
    phone: "",
    fullName: "",
    company: "",
    description: "",
    acceptedPolicy: false
  });
  const [formErrors, setFormErrors] = useState({
    purchaseMethod: "",
    machine: "",
    email: "",
    phone: "",
    fullName: "",
    company: "",
    description: "",
    acceptedPolicy: ""
  });
  const [touched, setTouched] = useState({
    purchaseMethod: false,
    machine: false,
    email: false,
    phone: false,
    fullName: false,
    company: false,
    description: false,
    acceptedPolicy: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const paymentOptions = [
    {
      title: t('machines.LeasingTitle'),
      description: t('machines.Leasingtext'),
      points: [
        t('machines.Leasingpoints1'),
        t('machines.Leasingpoints2'),
        t('machines.Leasingpoints3'),
      ],
      icon: PaymentOptionsIcon1,
      type: "leasing"
    },
    {
      title: t('machines.RentalPurchase'),
      description: t('machines.Rentaltext'),
      points: [
        t('machines.Rentalpoints1'),
        t('machines.Rentalpoints2'),
        t('machines.Rentalpoints3'),
      ],
      icon: PaymentOptionsIcon2,
      type: "rental"
    },
    {
      title: t('machines.DirectPurchaseTitle'),
      description: t('machines.DirectPurchaseSubTitle'),
      points: [
        t('machines.Directpoints1'),
        t('machines.Directpoints2'),
      ],
      icon: PaymentOptionsIcon3,
      type: "purchase"
    },
  ];

  // Validation functions
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) return t('productModal.email.error.required');
    if (!emailRegex.test(email)) return t('productModal.email.error.invalid');
    return "";
  };

  const validatePhone = (phone) => {
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    if (phone && !phoneRegex.test(phone.replace(/\s+/g, ""))) {
      return t('productModal.phone.error');
    }
    return "";
  };



  const validateRequired = (field, value) => {
    if (!value || value.trim() === "") {
      return t(`productModal.${field}.error.required`);
    }
    return "";
  };

  const validateForm = () => {
    const errors = {
      purchaseMethod: validateRequired("purchaseMethod", formData.purchaseMethod),
      machine: validateRequired("machine", formData.machine),

      email: validateEmail(formData.email),
      phone: validatePhone(formData.phone),
      fullName: validateRequired("fullName", formData.fullName),
      company: "",
      description: "",
      acceptedPolicy: formData.acceptedPolicy
        ? ""
        : t('productModal.privacyPolicy.error'),
    };

    setFormErrors(errors);
    return Object.values(errors).every((error) => error === "");
  };



  const handleOpenPopup = (option) => {
    setCurrentOption(option);
    const purchaseMethod = option.type === "leasing" ? t('productModal.purchaseMethod.options.leasing') :
      option.type === "rental" ? t('productModal.purchaseMethod.options.rentalPurchase') : t('productModal.purchaseMethod.options.directPurchase');
    setDefaultPurchaseMethod(purchaseMethod);
    setFormData({
      purchaseMethod: purchaseMethod,
      machine: "",
      email: "",
      phone: "",
      fullName: "",
      company: "",
      description: "",
      acceptedPolicy: false
    });
    setFormErrors({
      purchaseMethod: "",
      machine: "",
      email: "",
      phone: "",
      fullName: "",
      company: "",
      description: "",
      acceptedPolicy: ""
    });
    setTouched({
      purchaseMethod: false,
      machine: false,
      email: false,
      phone: false,
      fullName: false,
      company: false,
      description: false,
      acceptedPolicy: false
    });
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setCurrentOption(null);
    setDefaultPurchaseMethod('');
    setFormData({
      purchaseMethod: "",
      machine: "",
      email: "",
      phone: "",
      fullName: "",
      company: "",
      description: "",
      acceptedPolicy: false
    });
    setFormErrors({
      purchaseMethod: "",
      machine: "",
      email: "",
      phone: "",
      fullName: "",
      company: "",
      description: "",
      acceptedPolicy: ""
    });
    setTouched({
      purchaseMethod: false,
      machine: false,
      email: false,
      phone: false,
      fullName: false,
      company: false,
      description: false,
      acceptedPolicy: false
    });
    setIsSubmitting(false);
  };

  const handleCloseSuccess = () => {
    setShowSuccess(false);
    handleClose();
  };

  const handleBlur = (field) => {
    setTouched(prev => ({
      ...prev,
      [field]: true
    }));

    // Validate the specific field on blur
    let error = "";
    switch (field) {
      case "email":
        error = validateEmail(formData.email);
        break;
      case "phone":
        error = validatePhone(formData.phone);
        break;
      case "purchaseMethod":
        error = validateRequired("purchaseMethod", formData.purchaseMethod, t('productModal.purchaseMethod'));
        break;
      case "machine":
        error = validateRequired("machine", formData.machine);
        break;

      case "fullName":
        error = validateRequired("fullName", formData.fullName);
        break;

      case "acceptedPolicy":
        error = formData.acceptedPolicy ? "" : t('productModal.privacyPolicy.error');
        break;
      default:
        error = "";
    }
    setFormErrors(prev => ({
      ...prev,
      [field]: error
    }));
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));

    // Clear error when user starts typing
    if (formErrors[name]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: ""
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Mark all fields as touched
    const allTouched = Object.keys(touched).reduce((acc, key) => {
      acc[key] = true;
      return acc;
    }, {});
    setTouched(allTouched);

    // Validate form
    if (!validateForm()) {
      // Scroll to first error
      const firstErrorField = Object.keys(formErrors).find(key => formErrors[key]);
      if (firstErrorField) {
        const element = document.querySelector(`[name="${firstErrorField}"]`);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }
      return;
    }

    setIsSubmitting(true);

    try {
      // Prepare the request body matching the API specification
      const requestBody = {
        purchaseMethod: formData.purchaseMethod,
        machineType: formData.machine,
        email: formData.email,
        phoneNumber: formData.phone,
        fullName: formData.fullName,
        companyName: formData.company,
        description: formData.description
      };

      // Make API request
      const response = await fetch('https://staging-api.naf-cloudsystem.de/api/NAFWebsite/machine-enquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody)
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      
      // Show success message
      setShowSuccess(true);

    } catch (error) {
      console.error('API Error:', error);
      alert(t('validation.formSubmitError'));
      setIsSubmitting(false);
    }
  };

  const PopupButtonWrapper = ({ option }) => (
    <Box
      onClick={() => handleOpenPopup(option)}
      sx={{
        cursor: "pointer",
        width: "100%",
        display: "flex",
        justifyContent: "center"
      }}
    >
      <Box sx={{ pointerEvents: "none" }}>
        <AnimateButton
          text1={t('AnimateBtn.request')}
          text2={t('AnimateBtn.quote')}
          route="#"
        />
      </Box>
    </Box>
  );

  return (
    <>
      <Box className='section-container'>
        <Box sx={{ width: { xs: '100%', sm: '80%', lg: '50%' }, mb: { xs: 2, sm: 2, md: 3 } }}>
          <div data-cursor="hover">
            <Typography data-cursor="hover" variant='h2' className='headings-h2' sx={{ color: '#FCFCFC' }}>
              {t('machines.FlexiblePaymentTitle')}
            </Typography>
          </div>
          <Box sx={{ mb: 3 }} data-cursor="hover">
            <Typography data-cursor="hover" className='bodyRegularText3' sx={{ color: '#C2C2C4', py: { xs: '8px', sm: '8px', md: '16px' } }}>
              {t('machines.FlexiblePaymentsubTitle')}
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', lg: 'row' },
            justifyContent: 'center',
            alignItems: 'stretch',
            flexWrap: 'nowrap',
          }}
        >
          {paymentOptions.map((option, idx) => (
            <Box
              key={idx}
              sx={{
                flex: { xs: '1 1 100%', lg: '1 1 33%' },
                border: '1px solid #525252',
                px: { xs: 2, sm: 3, md: 4 },
                py: { xs: 3, sm: 4, md: 5 },
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                minHeight: { xs: '400px', sm: '500px', lg: '700px' },
              }}
            >
              <Box sx={{ mb: 3, display: 'flex', justifyContent: 'center' }}>
                <option.icon className='paymenticons' />
              </Box>

              <Box>
                <Typography variant="h4" color="#FCFCFC" className="headings-h4">
                  {option.title}
                </Typography>

                <Typography className="bodyRegularText3" sx={{ color: "#C2C2C4", my: 2 }}>
                  {option.description}
                </Typography>

                <Box component="ul" sx={{ pl: 3, mb: 4, color: "#C2C2C4" }}>
                  {option.points.map((point, i) => (
                    <li key={i} style={{ marginBottom: "8px" }} className="bodyRegularText3">
                      {point}
                    </li>
                  ))}
                </Box>
              </Box>

              <PopupButtonWrapper option={option} />
            </Box>
          ))}
        </Box>
      </Box>

    <SharedPaymentModal open={open} handleClose={handleClose} defaultPurchaseMethod={defaultPurchaseMethod} showSuccess={showSuccess} handleCloseSuccess={handleCloseSuccess} />
    </>
  );
};

export default PaymentOptions;