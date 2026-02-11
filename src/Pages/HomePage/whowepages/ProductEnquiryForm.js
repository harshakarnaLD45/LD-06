import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Typography,
  TextField,
  FormControl,
  FormHelperText,
  MenuItem,
  Select,
  IconButton,
} from "@mui/material";
import AnimateButton from "../../../Components/CommonComponents/AnimateButton";
import { useTranslation } from "react-i18next";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import emailjs from "@emailjs/browser";
import CloseIcon from "@mui/icons-material/Close";

// Map URL segments to use case types
const urlToUseCaseMap = {
  'hotelsresorts': 'hotelsResorts',
  'campgrounds': 'campgrounds',
  'schools-universities': 'schoolsUniversities',
  'factories': 'factories',
  'clinics': 'clinics',
  'cities': 'citiesMunicipalities',
  'municipalities': 'citiesMunicipalities',
  'senior-homes': 'seniorHomes',
  'transportation': 'transportation',
  'events-festivals': 'eventsFestivals',
  'offices': 'offices',
};

// Available use case options - keep as keys
const USE_CASE_OPTIONS = [
  "hotelsResorts",
  "campgrounds",
  "schoolsUniversities",
  "factories",
  "clinics",
  "citiesMunicipalities",
  "seniorHomes",
  "transportation",
  "eventsFestivals",
  "offices",
];
/* Shared Input Style */
const standardInputStyle = {
  "& .MuiInputBase-input": {
    color: "#fff",
  },

  /* Default underline */
  "& .MuiInput-underline:before": {
    borderBottomColor: "#c2c2c4",
  },

  /* Hover underline */
  "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
    borderBottomColor: "#7FEE64",
  },

  /* Focus underline */
  "& .MuiInput-underline:after": {
    borderBottomColor: "#7FEE64",
  },

  /* Select text */
  "& .MuiSelect-select": {
    color: "#fff",
  },

  /* Select arrow icon */
  "& .MuiSvgIcon-root": {
    color: "#c2c2c4",
  },

  "&:hover .MuiSvgIcon-root": {
    color: "#7FEE64",
  },

  /* Helper text */
  "& .MuiFormHelperText-root": {
    color: "#f44336",
  },
};


const ProductEnquiryForm = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { lang } = useParams();
  const location = useLocation();

  // Extract current page/segment from URL
  const extractUseCaseFromUrl = () => {
    const pathSegments = location.pathname.split('/').filter(segment => segment);

    // Look for segments that match our use case map
    for (const segment of pathSegments) {
      if (urlToUseCaseMap[segment]) {
        return urlToUseCaseMap[segment]; // Return the key, not the translated text
      }
    }

    return "";
  };

  const [formData, setFormData] = useState({
    useCaseType: "",
    email: "",
    phone: "",
    fullName: "",
    company: "",
    description: "",
    acceptedPolicy: false,
  });

  const [formErrors, setFormErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  // Set use case based on URL when component mounts
  useEffect(() => {
   
    window.scrollTo(0, 0);
      
    const useCaseFromUrl = extractUseCaseFromUrl();
    if (useCaseFromUrl) {
      setFormData(prev => ({
        ...prev,
        useCaseType: useCaseFromUrl
      }));
    }
  }, [location.pathname]);

  /* =========================
     Validation Functions - UPDATED to use translations
  ========================= */
  const validateRequired = (value) =>
    !value || value.trim() === ""
      ? t("whowesurveproductform.validation.required")
      : "";

  const validateEmail = (email) => {
    if (!email)
      return t("whowesurveproductform.validation.emailRequired");

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email)
      ? ""
      : t("whowesurveproductform.validation.invalidEmail");
  };

  const validatePhone = (phone) => {
    if (!phone) return "";

    const regex = /^[+]?[0-9\s-]{7,20}$/;
    return regex.test(phone)
      ? ""
      : t("whowesurveproductform.validation.invalidPhone");
  };

  const validateFullName = (name) => {
    if (!name)
      return t("whowesurveproductform.validation.required");

    if (name.trim().length < 2)
      return t("whowesurveproductform.validation.nameTooShort");

    if (name.trim().length > 100)
      return t("whowesurveproductform.validation.nameTooLong");

    return "";
  };

  const validateUseCaseType = (value) => {
    return !value || value.trim() === ""
      ? t("whowesurveproductform.validation.selectUseCase")
      : "";
  };

  const validateAcceptedPolicy = (value) => {
    return !value
      ? t("whowesurveproductform.policy.error")
      : "";
  };

  /* Validate All Fields*/
  const validateForm = () => {
    const errors = {
      useCaseType: validateUseCaseType(formData.useCaseType),
      email: validateEmail(formData.email),
      phone: validatePhone(formData.phone),
      fullName: validateFullName(formData.fullName),
      acceptedPolicy: validateAcceptedPolicy(formData.acceptedPolicy),
    };
    setFormErrors(errors);
    return Object.values(errors).every((e) => e === "");
  };

  /* =========================
     Handlers
  ========================= */
  const handleBlur = (field) => {
    setTouched((prev) => ({ ...prev, [field]: true }));

    // Validate the field when it loses focus
    let error = "";
    switch (field) {
      case "useCaseType":
        error = validateUseCaseType(formData.useCaseType);
        break;
      case "email":
        error = validateEmail(formData.email);
        break;
      case "phone":
        error = validatePhone(formData.phone);
        break;
      case "fullName":
        error = validateFullName(formData.fullName);
        break;
      case "acceptedPolicy":
        error = validateAcceptedPolicy(formData.acceptedPolicy);
        break;
      default:
        error = "";
    }

    setFormErrors((prev) => ({ ...prev, [field]: error }));
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    // Clear error when user starts typing
    if (formErrors[name]) {
      setFormErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    // Mark all fields as touched
    setTouched({
      useCaseType: true,
      email: true,
      phone: true,
      fullName: true,
      acceptedPolicy: true,
    });

    // Validate form
    if (!validateForm()) {
      // Scroll to first error
      const firstErrorField = Object.keys(formErrors).find(key => formErrors[key]);
      if (firstErrorField) {
        const element = document.querySelector(`[name="${firstErrorField}"]`);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
          element.focus();
        }
      }
      return;
    }

    setIsSubmitting(true);

    try {
      await emailjs.send(
        "service_m9cjyf7",
        "template_ka6dtns",
        {
          form_type: "Who We Serve",
          use_case: t(`whowesurveproductform.useCases.${formData.useCaseType}`) || "",
          full_name: formData.fullName || "",
          email: formData.email || "",
          phone: formData.phone || "",
          company: formData.company || "",
          accepted_policy: formData.acceptedPolicy ? "Yes" : "No",
          time: new Date().toLocaleString(),
        },
        "oohP8NNTJgl2SPoOz"
      );
      setShowSuccess(true);
      setIsSubmitting(false);
    } catch (err) {
      alert(t(`validation.submissionFailed`));
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    // Reset to URL-based use case when resetting
    const useCaseFromUrl = extractUseCaseFromUrl();

    setFormData({
      useCaseType: useCaseFromUrl || "",
      email: "",
      phone: "",
      fullName: "",
      company: "",
      description: "",
      acceptedPolicy: false,
    });
    setTouched({});
    setFormErrors({});
    setShowSuccess(false);
  };

  /* =========================
     SUCCESS STATE
  ========================= */
  if (showSuccess) {
    return (
      <Box
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          bgcolor: 'rgba(0, 0, 0, 0.8)',
          zIndex: 9999,
          p: 2,
        }}
      >
        <Box
          sx={{
            bgcolor: '#161616',
            borderRadius: '12px',
            border: '1px solid #393939',
            maxWidth: '500px',
            width: '100%',
            p: { xs: 3, md: 5 },
            textAlign: 'center',
            position: 'relative',
            pt: { xs: 5, md: 4 },
          }}
        >
          {/* Title */}
          <Typography
            sx={{
              color: '#fff',
              fontSize: { xs: '28px', md: '32px' },
              fontWeight: 600,
              mb: 2,
              fontFamily: "'Inter', sans-serif",
            }}
          >
            {t("whowesurveproductform.success.title")}
          </Typography>

          {/* Message */}
          <Typography
            sx={{
              color: '#c2c2c4',
              fontSize: '16px',
              lineHeight: 1.6,
              mb: 4,
              maxWidth: '400px',
              mx: 'auto',
            }}
          >
            {t("whowesurveproductform.success.message")}
          </Typography>

          {/* Close Icon */}
          <IconButton
            onClick={handleReset}
            sx={{
              position: 'absolute',
              top: 16,
              right: 16,
              color: '#c2c2c4',
              '&:hover': {
                color: '#fff',
                bgcolor: 'rgba(255, 255, 255, 0.1)',
              },
            }}
          >
            <CloseIcon />
          </IconButton>
        </Box>
      </Box>
    );
  }

  /* =========================
     FORM
  ========================= */
  return (
    <Box
      sx={{
        bgcolor: "#161616",
        p: { xs: 1.5, md: 5 },
        borderRadius: "12px",
        border: "1px solid #393939",
        maxWidth: "700px",
        m: { xs: 0, sm: 6, md: "auto" },
       
      }}
    >
      <Typography
        sx={{
          color: "#fff",
          fontSize: { xs: "28px", md: "36px" },
          textAlign: "center",
          mb: 7,
        }}
        className="headings-h4"
      >
        {t("whowesurveproductform.title")}
      </Typography>

      <Box component="form" onSubmit={handleSubmit}>
        <FormControl fullWidth variant="standard" sx={{ mb: 3, ...standardInputStyle }}>
          <Select
            name="useCaseType"
            value={formData.useCaseType}
            onChange={handleChange}
            onBlur={() => handleBlur("useCaseType")}
            displayEmpty
            error={touched.useCaseType && !!formErrors.useCaseType}
            renderValue={(selected) => {
              if (!selected) {
                return <span style={{ color: "#c2c2c4" }}>{t("whowesurveproductform.selectUseCase")}</span>;
              }
              // Translate the selected value for display
              return t(`whowesurveproductform.useCases.${selected}`);
            }}
          >
            <MenuItem value="" disabled>
              {t("whowesurveproductform.useCasePlaceholder")}
            </MenuItem>
            {USE_CASE_OPTIONS.map(item => (
              <MenuItem key={item} value={item}>
                {t(`whowesurveproductform.useCases.${item}`)}
              </MenuItem>
            ))}
          </Select>
          {touched.useCaseType && formErrors.useCaseType && (
            <FormHelperText error>{formErrors.useCaseType}</FormHelperText>
          )}
        </FormControl>

        {/* Email Field */}
        <TextField
          fullWidth
          variant="standard"
          placeholder={t("whowesurveproductform.fields.email")}
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          onBlur={() => handleBlur("email")}
          error={touched.email && !!formErrors.email}
          helperText={touched.email && formErrors.email}
          sx={{ mb: 6, ...standardInputStyle }}
          required
        />

        {/* Full Name Field */}
        <TextField
          fullWidth
          variant="standard"
          placeholder={t("whowesurveproductform.fields.fullName")}
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          onBlur={() => handleBlur("fullName")}
          error={touched.fullName && !!formErrors.fullName}
          helperText={touched.fullName && formErrors.fullName}
          sx={{ mb: 6, ...standardInputStyle }}
          required
        />

        {/* Phone Field */}
        <TextField
          fullWidth
          variant="standard"
          placeholder={t("whowesurveproductform.fields.phone")}
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={handleChange}
          onBlur={() => handleBlur("phone")}
          error={touched.phone && !!formErrors.phone}
          helperText={touched.phone && formErrors.phone}
          sx={{ mb: 6, ...standardInputStyle }}
        />

        {/* Company Field */}
        <TextField
          fullWidth
          variant="standard"
          placeholder={t("whowesurveproductform.fields.company")}
          name="company"
          value={formData.company}
          onChange={handleChange}
          sx={{ mb: 6, ...standardInputStyle }}
        />

        {/* Description Field */}
        <TextField
          fullWidth
          variant="standard"
          placeholder={t("whowesurveproductform.fields.description")}
          name="description"
          value={formData.description}
          onChange={handleChange}
          multiline
          rows={3}
          sx={{
            mb: 4,
            ...standardInputStyle,
            "& textarea": { color: "#fff" },
          }}
        />

        {/* Privacy Policy */}
        <Box
          className="policy-div"
          sx={{ display: 'flex', gap: '8px', alignItems: 'flex-start', marginTop: '16px' }}
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
              marginTop: "8px",
              flexShrink: 0
            }}
          />

          <Typography
            className="bodyRegularText4"
            sx={{ color: "#C2C2C4" }}
          >
            {t("whowesurveproductform.policy.text")}{" "}
            <span
              onClick={() => navigate(`/${lang}/privacy-policy`)}
              style={{
                textDecoration: "underline",
                cursor: "pointer",
                color: "#C2C2C4",
              }}
            >
              {t("whowesurveproductform.policy.link")}
            </span>
          </Typography>
        </Box>

        {touched.acceptedPolicy && formErrors.acceptedPolicy && (
          <FormHelperText sx={{
            color: "#f44336",
            fontSize: "12px",
            mt: 0.5,
            ml: 4
          }}>
            {formErrors.acceptedPolicy}
          </FormHelperText>
        )}

        {/* Submit Button */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            mx: "auto",
            position: "relative",
            zIndex: 1,
            marginBottom: { xs: "1rem", sm: "1rem", md: "2rem" },
            mt: 4,
          }}
        >
          {isSubmitting ? (
            <Button
              disabled
              variant="contained"
              sx={{
                color: '#fcfcfc',
                borderRadius: "50px",
                px: 5,
                py: 1.5,
                '&.Mui-disabled': {
                  color: '#fcfcfc',
                  opacity: 1,
                },
              }}
            >
              {t("whowesurveproductform.submit.submitting")}
            </Button>
          ) : (
            <div onClick={handleSubmit} style={{ cursor: "pointer" }}>
              <AnimateButton text1={t("contactus.SUBMIT")} text2={t("contactus.NOW")} />
            </div>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default ProductEnquiryForm;