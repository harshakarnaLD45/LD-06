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
import "../../MachinesPage/AutomatsPage.css";

// Map URL segments to use case types - UPDATED WITH NEW ITEMS
const urlToUseCaseMap = {
  "nafcloud": "nafCloud",
  "nafai": "nafAI",
  "telemetry-monitoring": "telemetryMonitoring",
  "payment": "payments",
  "reuse-return": "reuseReturn",
  "cloudKitchenPayments": "cloudKitchen",

  "software-integration": "softwareIntegrations",
};

// Available use case options 
const USE_CASE_OPTIONS = [

  "nafCloud",
  "nafAI",
  "telemetryMonitoring",
  "payments",
  "reuseReturn",
  "cloudKitchen",
  "softwareIntegrations",
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


const SolutionProductForm = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { lang } = useParams();
  const location = useLocation();

  // Extract current page/segment from URL
 const extractUseCaseFromUrl = () => {
  const segments = location.pathname.split("/").filter(Boolean);

  for (const segment of segments) {
    if (urlToUseCaseMap[segment]) {
      return urlToUseCaseMap[segment];
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
      useCaseType: useCaseFromUrl,
    }));
  }
}, [location.pathname]);


  /* =========================
     Validation Functions
  ========================= */
  const validateRequired = (value) =>
    !value || value.trim() === ""
      ? t("solutionsProductForm.validation.required")
      : "";

  const validateEmail = (email) => {
    if (!email) return t("solutionsProductForm.validation.required");
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email)
      ? ""
      : t("solutionsProductForm.validation.invalidEmail");
  };

  const validatePhone = (phone) => {
    if (!phone) return "";
    const regex = /^[+]?[0-9\s-]{7,20}$/;
    return regex.test(phone)
      ? ""
      : t("solutionsProductForm.validation.invalidPhone");
  };

  const validateFullName = (name) => {
    if (!name)
      return t("solutionsProductForm.validation.fullNameRequired");

    if (name.trim().length < 2)
      return t("solutionsProductForm.validation.fullNameTooShort");

    if (name.trim().length > 100)
      return t("solutionsProductForm.validation.fullNameTooLong");

    return "";
  };

  const validateUseCaseType = (value) => {
    return !value || value.trim() === ""
      ? t("solutionsProductForm.validation.selectUseCase")
      : "";
  };

  const validateAcceptedPolicy = (value) => {
    return !value
      ? t("solutionsProductForm.validation.acceptPolicy")
      : "";
  };

  /* =========================
     Validate All Fields
  ========================= */
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
      const fields = [
        { label: "Use Case", value: formData.useCaseType },
        { label: "Name", value: formData.fullName },
        { label: "Email", value: formData.email },
        { label: "Phone", value: formData.phone },
        { label: "Company", value: formData.company },
        { label: "Accepted Policy", value: formData.acceptedPolicy ? "Yes" : "No" },
      ];

      const formDataTable = `
<table style="width:100%; border-collapse:collapse; font-family:Arial,sans-serif;">
        ${fields.map(f => `
<tr>
<td style="border:1px solid #ddd; font-weight:bold; padding:8px;">${f.label}</td>
<td style="border:1px solid #ddd; padding:8px;">${f.value || ""}</td>
</tr>`).join('')}
</table>
    `;

      await emailjs.send(
        "service_m9cjyf7",
        "template_ka6dtns",
        {
          form_type: "General Enquiry",
          form_data: formDataTable,
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
      <Box className="section-container"
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
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
            }} className="headings-h5"
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
            }} className="bodyRegularText3"
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
        m: { sm: "auto", md: "auto" },
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
        {t("solutionsProductForm.form.title")}
      </Typography>

      <Box component="form" onSubmit={handleSubmit} noValidate>
        {/* Select Use Case Type - Now pre-selected based on URL */}
        <FormControl fullWidth variant="standard" sx={{ mb: 3, ...standardInputStyle }}>
  <Select
    name="useCaseType"
    value={formData.useCaseType}
    onChange={handleChange}
    onBlur={() => handleBlur("useCaseType")}
    displayEmpty
    error={touched.useCaseType && !!formErrors.useCaseType}
    renderValue={(val) => {
      if (!val) {
        return (
          <span style={{ color: "#c2c2c4" }}>
            {t("solutionsProductForm.form.selectUseCase")}
          </span>
        );
      }
      return t(`solutionsProductForm.useCases.${val}`);
    }}
  >
    <MenuItem value="" disabled>
      <em>{t("solutionsProductForm.form.selectUseCase")}</em>
    </MenuItem>

    {USE_CASE_OPTIONS.map((item) => (
      <MenuItem key={item} value={item}>
        {t(`solutionsProductForm.useCases.${item}`)}
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
          placeholder={t("solutionsProductForm.form.email")}
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          onBlur={() => handleBlur("email")}
          error={touched.email && !!formErrors.email}
          helperText={touched.email && formErrors.email}
          sx={{ mb: 6, ...standardInputStyle }}
          required
          className="bodyRegularText4"
        />

        {/* Full Name Field */}
        <TextField
          fullWidth
          variant="standard"
          placeholder={t("solutionsProductForm.form.fullName")}
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          onBlur={() => handleBlur("fullName")}
          error={touched.fullName && !!formErrors.fullName}
          helperText={touched.fullName && formErrors.fullName}
          sx={{ mb: 6, ...standardInputStyle }}
          required
          className="bodyRegularText4"
        />

        {/* Phone Field */}
        <TextField
          fullWidth
          variant="standard"
          placeholder={t("solutionsProductForm.form.phone")}
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={handleChange}
          onBlur={() => handleBlur("phone")}
          error={touched.phone && !!formErrors.phone}
          helperText={touched.phone && formErrors.phone}
          sx={{ mb: 6, ...standardInputStyle }}
          className="bodyRegularText4"
        />



        {/* Company Field */}
        <TextField
          fullWidth
          variant="standard"
          placeholder={t("solutionsProductForm.form.company")}
          name="company"
          value={formData.company}
          onChange={handleChange}
          sx={{ mb: 6, ...standardInputStyle }}

        />

        {/* Description Field */}
        <TextField
          fullWidth
          variant="standard"
          placeholder={t("solutionsProductForm.form.description")}
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
             {t("validation.submitting")}
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

export default SolutionProductForm;