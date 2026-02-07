import React, { useState, useEffect } from "react";
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
  FormHelperText,
  Snackbar,
  Alert
} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import AnimateButton from "./CommonComponents/AnimateButton";
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from "react-router-dom";

const SharedPaymentModal = ({ open, handleClose, defaultPurchaseMethod = '', defaultMachine = '', showSuccess, handleCloseSuccess, onSuccess }) => {
  const { t } = useTranslation();
  const { lang } = useParams();
  const navigate = useNavigate();
  // Using externally managed success state instead of local state
  // const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({
    purchaseMethod: defaultPurchaseMethod,
    machine: defaultMachine,
    email: "",
    phone: "",
    fullName: "",
    company: "",
    description: "",
    acceptedPolicy: false
  });

  // Update form data when defaultMachine prop changes
  useEffect(() => {
    setFormData(prev => ({
      ...prev,
      machine: defaultMachine
    }));
  }, [defaultMachine]);

  // Update form data when defaultPurchaseMethod prop changes
  useEffect(() => {
    setFormData(prev => ({
      ...prev,
      purchaseMethod: defaultPurchaseMethod
    }));
  }, [defaultPurchaseMethod]);

  // Reset form when modal is closed
  useEffect(() => {
    if (!open) {
      setFormData({
        purchaseMethod: defaultPurchaseMethod,
        machine: defaultMachine,
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
    }
  }, [open, defaultPurchaseMethod, defaultMachine]);
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
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('error'); // 'error', 'warning', 'info', 'success'

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

  // Using external handleCloseSuccess function
  // const handleCloseSuccess = () => {
  //   setShowSuccess(false);
  //   handleClose();
  // };

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
        error = validateRequired("purchaseMethod", formData.purchaseMethod, t('productModal.purchaseMethod.error'));
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
      const response = await fetch('https://api.naf-cloudsystem.de/api/NAFWebsite/machine-enquiry', {
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
      
      // Reset submitting state and show success message
      setIsSubmitting(false);
      if (onSuccess) {
        onSuccess();
      } else if (handleCloseSuccess) {
        handleCloseSuccess();
      }

    } catch (error) {
      console.error('API Error:', error);
      setSnackbarMessage(t('validation.formSubmitError'));
      setSnackbarSeverity('error');
      setSnackbarOpen(true);
      setIsSubmitting(false);
    }
  };

  const handleSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnackbarOpen(false);
  };

  return (
    <>
      {/* MAIN PAYMENT FORM MODAL */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="payment-form-modal"
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box
          onClick={(e) => e.stopPropagation()}
          sx={{
            width: '800px',
            maxWidth: '95vw',
            maxHeight: '95vh',
            bgcolor: '#444444',
            borderRadius: '8px',
            position: 'relative',
            overflow: 'auto',
            border: 'none',
            outline: 'none',
            boxShadow: 'none',

            '&::-webkit-scrollbar': {
              width: '1px',
            },
            '&::-webkit-scrollbar-track': {
              background: '#3a3a3a',
            },
            '&::-webkit-scrollbar-thumb': {
              background: '#666666',
              borderRadius: '4px',
            },
          }}
        >
          {/* Close Button - Exact match */}
          <IconButton
            onClick={handleClose}
            sx={{
              position: 'absolute',
              right: 16,
              top: 16,
              color: '#E0A678',
              border: '1px solid #E0A678',
              borderRadius: '4px',
              width: '28px',
              height: '28px',
              padding: 0,

            }}
          >
            <CloseIcon sx={{ fontSize: '18px' }} />
          </IconButton>

          {/* Form Title */}
          <Box sx={{ pt: 6, pb: 4, px: 5 }}>
            <Typography
              sx={{
                color: '#FCFCFC',
                fontWeight: 400,
                fontSize: '36px',
                textAlign: 'center',
                letterSpacing: '0.5px'
              }} className='headings-h5'
            >
              {t('productModal.title')}
            </Typography>
          </Box>

          {/* Form Content */}
          <Box sx={{ px: {xs:2, md:5}, pb: 3 }} component="form" onSubmit={handleSubmit}>
            {/* Select Purchase Method - Dropdown with arrow */}
            <Box sx={{ mb: 3.5 }}>
              <FormControl
                fullWidth
                variant="standard"
                error={touched.purchaseMethod && Boolean(formErrors.purchaseMethod)}
                sx={{
                  '& .MuiInput-root': {
                    
                    '&:before': {
                      borderBottom: touched.purchaseMethod && formErrors.purchaseMethod ?
                        '1px solid #f44336' : '1px solid  #c2c2c4',
                    },
                    '&:hover:not(.Mui-disabled):before': {
                      borderBottom: touched.purchaseMethod && formErrors.purchaseMethod ?
                        '1px solid #f44336' : '1px solid  #c2c2c4',
                    },
                    '&:after': {
                      borderBottom: '1px solid  #c2c2c4',
                    },
                    "& .MuiInput-input": {
                      paddingBottom: "20px",
                      lineHeight: 1.5,
                      "&::placeholder": {
                        color: " #c2c2c4",
                        opacity: 1,
                      },
                    },
                    "& .MuiFormHelperText-root": {
                      marginLeft: 0,
                    },
                  }
                }}
              >
                <Select
                  name="purchaseMethod"
                  value={formData.purchaseMethod}
                  onChange={handleChange}
                  onBlur={() => handleBlur("purchaseMethod")}
                  displayEmpty
                  sx={{
                  //  padding: "8px 12px",
                    paddingBottom: "-10px !important",
                    color: formData.purchaseMethod ? ' #c2c2c4' : ' #c2c2c4',
                    fontSize: '14px',
                    '& .MuiSelect-icon': {
                      color: ' #c2c2c4',
                    }
                  }}
                  renderValue={(value) => value || t('productModal.purchaseMethod.placeholder')}
                >
                  <MenuItem value={t('productModal.purchaseMethod.options.leasing')}>{t('productModal.purchaseMethod.options.leasing')}</MenuItem>
                  <MenuItem value={t('machines.RentalPurchase')}>{t('machines.RentalPurchase')}</MenuItem>
                  <MenuItem value={t('productModal.purchaseMethod.options.directPurchase')}>{t('productModal.purchaseMethod.options.directPurchase')}</MenuItem>
                </Select>
                {touched.purchaseMethod && formErrors.purchaseMethod && (
                  <FormHelperText sx={{ color: '#f44336', fontSize: '12px', mt: 0.5 }}>
                    {/* {formErrors.purchaseMethod} */}
                     {t('productModal.purchaseMethod.error')}
                  </FormHelperText>
                )}
              </FormControl>
            </Box>

            {/* Select Machine - Dropdown with arrow */}
            <Box sx={{ mb: 3.5 }}>
              <FormControl
                fullWidth
                variant="standard"
                error={touched.machine && Boolean(formErrors.machine)}
                sx={{
                  '& .MuiInput-root': {
                    '&:before': {
                      borderBottom: touched.machine && formErrors.machine ?
                        '1px solid #f44336' : '1px solid  #c2c2c4',
                    },
                    '&:hover:not(.Mui-disabled):before': {
                      borderBottom: touched.machine && formErrors.machine ?
                        '1px solid #f44336' : '1px solid  #c2c2c4',
                    },
                    '&:after': {
                      borderBottom: '1px solid  #c2c2c4',
                    },
                    "& .MuiInput-input": {
                      paddingBottom: "20px",
                      lineHeight: 1.5,
                      "&::placeholder": {
                        color: " #c2c2c4",
                        opacity: 1,
                      },
                    },
                    "& .MuiFormHelperText-root": {
                      marginLeft: 0,
                    },
                  }
                }}
              >
                <Select
                  name="machine"
                  value={formData.machine}
                  onChange={handleChange}
                  onBlur={() => handleBlur("machine")}
                  displayEmpty
                  sx={{
                    color: formData.machine ? ' #c2c2c4' : ' #c2c2c4',
                    fontSize: '14px',
                    '& .MuiSelect-icon': {
                      color: ' #c2c2c4',
                    }
                  }}
                  renderValue={(value) => value || t('productModal.machine.placeholder')}
                >
                  <MenuItem value={t('machines.GourmetMachine') + " " + t('machines.with')}>{t('productModal.machine.options.gourmet')} {t('machines.with')}</MenuItem>
                  <MenuItem value={t('machines.GourmetMachine') + " " + t('machines.without')}>{t('productModal.machine.options.gourmet')} {t('machines.without')}</MenuItem>
                  <MenuItem value={t('machines.ReturnMachine')}>{t('machines.ReturnMachine')}</MenuItem>
                  <MenuItem value={t('machines.PizzaMachine')}>{t('machines.PizzaMachine')}</MenuItem>
                  {/* <MenuItem value="Fries Machine">{t('productModal.machine.options.fries')}</MenuItem>
                  <MenuItem value="Soft Ice Cream Machine">{t('productModal.machine.options.softIceCream')}</MenuItem>
                  <MenuItem value="Cotton Candy Machine">{t('productModal.machine.options.cottonCandy')}</MenuItem> */}
                  <MenuItem value={t('machines.Snack')}>{t('machines.Snack')}</MenuItem>
                </Select>
                {touched.machine && formErrors.machine && (
                  <FormHelperText sx={{ color: '#f44336', fontSize: '12px', mt: 0.5 }}>
                    {formErrors.machine} 
                  </FormHelperText>
                )}
              </FormControl>
            </Box>

            {/* Email */}
            <Box sx={{ mb: 3.5 }}>
              <TextField
                fullWidth
                name="email"
                type="email"
                placeholder={t('productModal.email.placeholder')}
                value={formData.email}
                onChange={handleChange}
                onBlur={() => handleBlur("email")}
                variant="standard"
                error={touched.email && Boolean(formErrors.email)}
                helperText={touched.email && formErrors.email}
                FormHelperTextProps={{
                  sx: { color: "#f44336", fontSize: "12px", mt: 0.5 },
                }}
                sx={{
                  "& .MuiInput-root": {
                    color: "#FCFCFC",
                    fontSize: "14px",
                    "&:before": {
                      borderBottom:
                        touched.email && formErrors.email
                          ? "1px solid #f44336"
                          : "1px solid  #c2c2c4",
                    },
                    "&:hover:not(.Mui-disabled):before": {
                      borderBottom:
                        touched.email && formErrors.email
                          ? "1px solid #f44336"
                          : "1px solid  #c2c2c4",
                    },
                    "&:after": {
                      borderBottom: "1px solid  #c2c2c4",
                    },
                  },
                  "& .MuiInput-input": {
                    paddingBottom: "20px",
                    lineHeight: 1.5,
                    "&::placeholder": {
                      color: " #c2c2c4",
                      opacity: 1,
                    },
                  },
                  "& .MuiFormHelperText-root": {
                    marginLeft: 0,
                  },
                }}
              />
            </Box>

            {/* Phone Number */}
            <Box sx={{ mb: 3.5 }}>
              <TextField
                fullWidth
                name="phone"
                placeholder={t('productModal.phone.placeholder')}
                value={formData.phone}
                onChange={handleChange}
                onBlur={() => handleBlur("phone")}
                variant="standard"
                error={touched.phone && Boolean(formErrors.phone)}
                helperText={touched.phone && formErrors.phone}
                FormHelperTextProps={{
                  sx: { color: "#f44336", fontSize: "12px", mt: 0.5 },
                }}
                sx={{
                  "& .MuiInput-root": {
                    color: "#FCFCFC",
                    fontSize: "14px",
                    "&:before": {
                      borderBottom:
                        touched.phone && formErrors.phone
                          ? "1px solid #f44336"
                          : "1px solid  #c2c2c4",
                    },
                    "&:hover:not(.Mui-disabled):before": {
                      borderBottom:
                        touched.phone && formErrors.phone
                          ? "1px solid #f44336"
                          : "1px solid  #c2c2c4",
                    },
                    "&:after": {
                      borderBottom: "1px solid  #c2c2c4",
                    },
                  },
                  "& .MuiInput-input": {
                    paddingBottom: "20px",
                    lineHeight: 1.5,
                    "&::placeholder": {
                      color: " #c2c2c4",
                      opacity: 1,
                    },
                  },
                  "& .MuiFormHelperText-root": {
                    marginLeft: 0,
                  },
                }}
              />
            </Box>


            {/* Full Name */}
            <Box sx={{ mb: 3.5 }}>
              <TextField
                fullWidth
                name="fullName"
                placeholder={t('productModal.fullName.placeholder')}
                value={formData.fullName}
                onChange={handleChange}
                onBlur={() => handleBlur("fullName")}
                variant="standard"
                error={touched.fullName && Boolean(formErrors.fullName)}
                helperText={touched.fullName && formErrors.fullName}
                FormHelperTextProps={{
                  sx: { color: "#f44336", fontSize: "12px", mt: 0.5 },
                }}
                sx={{
                  "& .MuiInput-root": {
                    color: "#FCFCFC",
                    fontSize: "14px",
                    "&:before": {
                      borderBottom:
                        touched.fullName && formErrors.fullName
                          ? "1px solid #f44336"
                          : "1px solid  #c2c2c4",
                    },
                    "&:hover:not(.Mui-disabled):before": {
                      borderBottom:
                        touched.fullName && formErrors.fullName
                          ? "1px solid #f44336"
                          : "1px solid  #c2c2c4",
                    },
                    "&:after": {
                      borderBottom: "1px solid  #c2c2c4",
                    },
                  },
                  "& .MuiInput-input": {
                    paddingBottom: "20px",
                    lineHeight: 1.5,
                    "&::placeholder": {
                      color: " #c2c2c4",
                      opacity: 1,
                    },
                  },
                  "& .MuiFormHelperText-root": {
                    marginLeft: 0,
                  },
                }}
              />
            </Box>

            {/* Company Name */}
            <Box sx={{ mb: 3.5 }}>
              <TextField
                fullWidth
                name="company"
                placeholder={t('productModal.company.placeholder')}
                value={formData.company}
                onChange={handleChange}
                onBlur={() => handleBlur("company")}
                variant="standard"
                sx={{
                  "& .MuiInput-root": {
                    color: " #c2c2c4",
                    fontSize: "14px",
                    "&:before": {
                      borderBottom: "1px solid  #c2c2c4",
                    },
                    "&:hover:not(.Mui-disabled):before": {
                      borderBottom: "1px solid  #c2c2c4",
                    },
                    "&:after": {
                      borderBottom: "1px solid  #c2c2c4",
                    },
                  },
                  "& .MuiInput-input": {
                    paddingBottom: "20px",
                    lineHeight: 1.5,
                    "&::placeholder": {
                      color: " #c2c2c4",
                      opacity: 1,
                    },
                  },
                }}
              />
            </Box>

            {/* Description */}
            <Box sx={{ mb: 4 }}>
              <TextField
                fullWidth
                name="description"
                placeholder={t('productModal.description.placeholder')}
                value={formData.description}
                onChange={handleChange}
                onBlur={() => handleBlur("description")}
                variant="standard"
                multiline
                rows={3}
                sx={{
                  "& .MuiInput-root": {
                    color: " #c2c2c4",
                    fontSize: "14px",
                    "&:before": {
                      borderBottom: "1px solid  #c2c2c4",
                    },
                    "&:hover:not(.Mui-disabled):before": {
                      borderBottom: "1px solid  #c2c2c4"
                    },
                    "&:after": {
                      borderBottom: "1px solid  #c2c2c4",
                    },
                  },
                  "& .MuiInput-input": {
                    paddingBottom: "20px",
                    lineHeight: 1.5,
                    "&::placeholder": {
                      color: " #c2c2c4",
                      opacity: 1,
                    },
                  },
                }}
              />
            </Box>
            {/* Privacy Policy Checkbox */}
            <Box className="policy-div"
              sx={{ display: 'flex', gap: '8px', alignItems: 'center', marginTop: '16px' }}
            >
              <input
                type="radio"
                name="acceptedPolicy"
                checked={formData.acceptedPolicy}
                onChange={handleChange}
                onBlur={() => handleBlur("acceptedPolicy")}
                style={{
                  accentColor: "#7FEE64",
                  cursor: "pointer",
                  width: "16px",
                  height: "16px",
                  mt: "8px !important"

                }}
              />

              <Typography
                className="bodyRegularText4"
                sx={{ color: "#C2C2C4", }}
              >
                {t('productModal.privacyPolicy.text')}{" "}
                <span
                  onClick={() => navigate(`/${lang || 'en'}/privacy-policy`)}
                  style={{
                    textDecoration: "underline",
                    cursor: "pointer",
                    color: "#C2C2C4",
                  }}
                >
                  {t('productModal.privacyPolicy.link')}
                </span>
              </Typography>
            </Box>
            {touched.acceptedPolicy && formErrors.acceptedPolicy && (
              <FormHelperText sx={{ color: "#f44336", fontSize: "12px", mt: 0.5 }}>
                {formErrors.acceptedPolicy}
              </FormHelperText>
            )}

            {/* Submit Button - Exact circular green button */}
            <Box sx={{
              mt: 5,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              mx: "auto",
              position: "relative",
              zIndex: 1,
              marginBottom: { xs: "1rem", sm: "1rem", md: "2rem" },
              color: '#c2c2c4'

            }}>
              {isSubmitting ? (
                <Button disabled variant="contained" sx={{
                  borderRadius: '50px', px: 5, py: 1.5,
                  '&.Mui-disabled': {
                    color: '#fcfcfc',

                    opacity: 1,
                  },
                }}>
                  {t('productModal.submit.submitting')}
                </Button>
              ) : (
                <div onClick={handleSubmit} style={{ cursor: 'pointer' }}>
                  <AnimateButton text1={t('contactus.SUBMIT')} text2={t('contactus.NOW')} />
                </div>
              )}
            </Box>
          </Box>
        </Box>
      </Modal>

      {/* SUCCESS MESSAGE MODAL */}
      <Modal
        open={showSuccess}
        onClose={handleCloseSuccess}
        aria-labelledby="success-message-modal"
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box
          onClick={(e) => e.stopPropagation()}
          sx={{
            width: '632px',
            maxWidth: '95vw',
            maxHeight: '95vh',
            bgcolor: '#444444',
            borderRadius: '8px',
            position: 'relative',
            overflow: 'auto',

            '&::-webkit-scrollbar': {
              width: '8px',
            },
            '&::-webkit-scrollbar-track': {
              background: '#3a3a3a',
            },
            '&::-webkit-scrollbar-thumb': {
              background: '#666666',
              borderRadius: '4px',
            },
          }}
        >
          {/* Close Button */}
          <IconButton
            onClick={handleCloseSuccess}
            sx={{
              position: 'absolute',
              right: 16,
              top: 16,
              color: '#E0A678',
              border: '1px solid #E0A678',
              borderRadius: '4px',
              width: '28px',
              height: '28px',
              padding: 0,

            }}
          >
            <CloseIcon sx={{ fontSize: '18px' }} />
          </IconButton>

          {/* Success Message Content */}
          <Box sx={{ pt: 8, pb: 6, px: 5, textAlign: 'center' }}>
            {/* Title */}
            <Typography
              sx={{
                color: '#FCFCFC',
                fontWeight: 400,
                fontSize: '32px',
                textAlign: 'center',
                letterSpacing: '0.5px',
                mb: 2
              }}
              className='headings-h5'
            >
              {t('productModal.success.title')}
            </Typography>

            {/* Subtitle */}
            <Typography
              sx={{
                color: '#C2C2C4',
                fontSize: '18px',
                textAlign: 'center',
                lineHeight: 1.6,
                mb: 4
              }}
              className='bodyRegularText3'
            >
              {t('productModal.success.message')}
            </Typography>
          </Box>
        </Box>
      </Modal>
      {/* Snackbar for displaying error/success messages */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert
          onClose={handleSnackbarClose}
          severity={snackbarSeverity}
          sx={{ width: '100%', backgroundColor: '#444444', color: '#FCFCFC', border: '1px solid #E0A678' }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </>
  );
};

export default SharedPaymentModal;