import React, { useEffect, useState } from "react";
import {
    Box,
    Typography,
    Grid,
    Button,
    Snackbar,
    Alert,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    TextField,
    MenuItem,
    IconButton,
    InputAdornment,
    Divider,
    FormControl,
    Select,
    OutlinedInput,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import axios from "axios";
import { useTranslation } from "react-i18next";
import DeleteConfirmationPopup from "./DeleteConfirmationPopup";
import { useParams } from "react-router-dom";
import { AccordionIcon } from "../../Components/CustomIcons";
import countryCallingCodes from "../../Components/full_country_calling_codes.json";
import { Autocomplete } from "@mui/material";


const Profile = ({ data = {}, onUpdate }) => {
    const { t, i18n } = useTranslation();
    const [formData, setFormData] = useState({ ...data, mpin: "", confirmMpin: "" });
    const [saving, setSaving] = useState(false);
    const [snackbar, setSnackbar] = useState({
        open: false,
        message: "",
        severity: "success",
    });
    const { lang } = useParams();
    const [expanded, setExpanded] = useState(false);
    const [showMpin, setShowMpin] = useState({ current: false, new: false, confirm: false });
    const [showConfirmMpin, setShowConfirmMpin] = useState(false);
    const [isDeletePopupOpen, setIsDeletePopupOpen] = useState(false);
    const [deleteMessage, setDeleteMessage] = useState(false);
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [selectedRow, setSelectedRow] = useState(null); // needed for DeleteConfirmationPopup
    const [loadingOtp, setLoadingOtp] = useState(false);
    const [emailChangeSuccess, setEmailChangeSuccess] = useState(false);
    const [emailChangeStep, setEmailChangeStep] = useState('idle'); // 'idle', 'otpSent', 'verified'
    const [otpError, setOtpError] = useState('');
    const [emailAccordionExpanded, setEmailAccordionExpanded] = useState(false);
    const [mpinData, setMpinData] = useState({
        currentMpin: '',
        newMpin: '',
        confirmMpin: ''
    });
    const [updatingMpin, setUpdatingMpin] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState("");

    useEffect(() => {
        // Check if data is null or undefined
        if (!data) {
            setFormData({ mpin: "", confirmMpin: "", newEmail: "", verificationCode: "" });
            setSelectedCountry("");
            return;
        }

        // Process data and normalize country field
        // Always reset sensitive/temporary fields to empty strings
        let processedData = {
            ...data,
            mpin: "",
            confirmMpin: "",
            newEmail: "",
            verificationCode: ""
        };

        let countryValue = "";
        if (data.country && typeof data.country === 'object' && data.country.name) {
            countryValue = data.country.name;
        } else if (data.country && typeof data.country === 'string') {
            countryValue = data.country.trim();
        }

        processedData.country = countryValue;
        setFormData(processedData);
        setSelectedCountry(countryValue);

        console.log('Country initialized:', { countryValue, dataCountry: data.country });
    }, [data, i18n.language]);

    // Debug effect to monitor state changes
    useEffect(() => {
        console.log('State changed - selectedCountry:', selectedCountry, 'formData.country:', formData.country);
    }, [selectedCountry, formData.country]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        let newValue = value;

        if (name === "zipCode") newValue = value.replace(/[^0-9]/g, "");
        if (name === "mobileNumber") newValue = value.replace(/[^0-9+ ]/g, "");
        if (name === "mpin" || name === "confirmMpin") {
            // allow only digits and max length 6
            newValue = value.replace(/\D/g, "").slice(0, 6);
        }

        // If user starts typing in newEmail field again after verification, reset the step
        if (name === 'newEmail' && emailChangeStep === 'verified') {
            setEmailChangeStep('idle');
        }

        setFormData(prev => ({
            ...prev,
            [name]: newValue,
        }));
    };

    // Email validation function
    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    // Function to send OTP for email change
    const handleSendOTP = async () => {
        if (!formData.newEmail || !isValidEmail(formData.newEmail)) {
            setSnackbar({
                open: true,
                message: t("membership.msg_enter_valid_email"),
                severity: "error",
            });
            return;
        }

        setLoadingOtp(true);

        try {
            const token = localStorage.getItem("authToken");

             await axios.post(
                `https://staging-api.naf-cloudsystem.de/api/membership-cards/change-email/send-otp?memberId=${formData.id}&newEmail=${encodeURIComponent(formData.newEmail)}`,
                {},
                { headers: { Authorization: `Bearer ${token}` } }
            );

            // On success, move to otpSent state
            setEmailChangeStep('otpSent');
            setSnackbar({
                open: true,
                message: t("membership.msg_verification_code_sent"),
                severity: "success",
            });
        } catch (error) {
            console.error("Error sending OTP:", error);
            setSnackbar({
                open: true,
                message: t("membership.msg_otp_send_failed"),
                severity: "error",
            });
        } finally {
            setLoadingOtp(false);
        }
    };

    // Function to verify OTP and change email
    const handleVerifyEmail = async () => {
        if (!formData.newEmail || !isValidEmail(formData.newEmail)) {
            setSnackbar({
                open: true,
                message: t("membership.msg_enter_valid_email"),
                severity: "error",
            });
            return;
        }

        if (!formData.verificationCode) {
            setSnackbar({
                open: true,
                message: t("membership.msg_enter_verification_code"),
                severity: "error",
            });
            return;
        }

        if (formData.verificationCode.length !== 6) {
            setSnackbar({
                open: true,
                message: t("membership.msg_verification_code_6_digits"),
                severity: "error",
            });
            return;
        }

        try {
            const token = localStorage.getItem("authToken");
            const newEmailValue = formData.newEmail;

            const response = await axios.post(
                `https://staging-api.naf-cloudsystem.de/api/membership-cards/change-email/verify-otp?memberId=${formData.id}&newEmail=${encodeURIComponent(formData.newEmail)}&otp=${formData.verificationCode}`,
                {},
                { headers: { Authorization: `Bearer ${token}` } }
            );

            // Properly validate the response
            if (response.status === 200 && response.data) {
                // Check if verification was successful based on response
                const isVerified = response.data.success || response.data.verified || response.data.message?.toLowerCase().includes('success');
                
                if (!isVerified && response.data.success === false) {
                    // Backend explicitly rejected the code
                    setSnackbar({
                        open: true,
                        message: t("membership.msg_verification_failed"),
                        severity: "error",
                    });
                    return;
                }

                // Update the email and clear the email change fields atomically
                setFormData(prev => ({
                    ...prev,
                    email: newEmailValue,
                    newEmail: "",
                    verificationCode: ""
                }));

                setEmailChangeSuccess(true);
                setEmailChangeStep('idle');

                // Collapse the email change accordion
                setEmailAccordionExpanded(false);

                setSnackbar({
                    open: true,
                    message: t("membership.msg_email_changed_success"),
                    severity: "success",
                });

                // Update parent component if onUpdate is provided
                if (onUpdate) onUpdate({ ...formData, email: newEmailValue });
            } else {
                // Unexpected response format
                setSnackbar({
                    open: true,
                    message: t("membership.msg_verification_failed"),
                    severity: "error",
                });
            }
        } catch (error) {
            console.error("Error verifying OTP:", error);
            
            // Check if error response contains specific validation error
            const errorMessage = error.response?.data?.message || error.response?.data?.error;
            
            if (errorMessage && (errorMessage.toLowerCase().includes('invalid') || errorMessage.toLowerCase().includes('incorrect') || errorMessage.toLowerCase().includes('expired'))) {
                setSnackbar({
                    open: true,
                    message: t("membership.msg_error_verifying_code"),
                    severity: "error",
                });
            } else {
                setSnackbar({
                    open: true,
                    message: t("membership.InvalidCode"),
                    severity: "error",
                });
            }
            // Stay in otpSent state to allow retry
        }
    };

    // Function to save basic profile information only (excluding MPIN)
    const handleSaveProfile = async () => {
        if (!formData?.id) return;

        try {
            setSaving(true);
            const token = localStorage.getItem("authToken");

            // Create payload without MPIN fields
            const payload = { ...formData };
            console.log('Save payload country:', payload.country);
            delete payload.mpin;
            delete payload.confirmMpin;
            delete payload.newEmail;
            delete payload.verificationCode;

            await axios.put(
                `https://staging-api.naf-cloudsystem.de/api/membership-cards/${formData.id}/basic-details`,
                payload,
                { headers: { Authorization: `Bearer ${token}` } }
            );

            setSnackbar({
                open: true,
                message: t("membership.msg_profile_updated_success"),
                severity: "success",
            });

            // update Dashboard data
            if (onUpdate) onUpdate(payload);

            // If email was successfully changed, reset email change state
            if (emailChangeStep === 'verified') {
                setEmailChangeStep('idle');
            }
        } catch (error) {
            console.error("Error updating profile:", error);
            setSnackbar({
                open: true,
                message: t("membership.msg_profile_update_failed"),
                severity: "error",
            });
        } finally {
            setSaving(false);
        }
    };

    const handleCloseSnackbar = () => {
        setSnackbar({ ...snackbar, open: false });
    };

    const handleMpinChange = (e) => {
        const { name, value } = e.target;
        // Allow only digits and max length 6
        const newValue = value.replace(/\D/g, "").slice(0, 6);
        setMpinData(prev => ({
            ...prev,
            [name]: newValue
        }));
    };

    const handleDeleteClick = () => {
        setIsDeletePopupOpen(true);
    };

    const handleCloseDeletePopup = () => {
        setIsDeletePopupOpen(false);
        setSelectedRow(null);
    };

    const handleUpdateMpin = async () => {
        // MPIN validation regex - exactly 6 digits
        const mpinRegex = /^\d{6}$/;

        //1) Check current MPIN is entered
        if (!mpinData.currentMpin || mpinData.currentMpin.trim() === '') {
            setSnackbar({
                open: true,
                message: t("membership.msg_enter_current_mpin"),
                severity: "error",
            });
            return;
        }

        // Validate current MPIN is exactly 6 digits and numeric
        if (!mpinRegex.test(mpinData.currentMpin)) {
            setSnackbar({
                open: true,
                message: t("membership.verify_mpin"),
                severity: "error",
            });
            return;
        }

        // Check new MPIN is entered
        if (!mpinData.newMpin || mpinData.newMpin.trim() === '') {
            setSnackbar({
                open: true,
                message: t("membership.msg_enter_new_mpin"),
                severity: "error",
            });
            return;
        }

        // Check confirm MPIN is entered
        if (!mpinData.confirmMpin || mpinData.confirmMpin.trim() === '') {
            setSnackbar({
                open: true,
                message: t("membership.msg_enter_confirm_mpin"),
                severity: "error",
            });
            return;
        }

        // Check new MPIN and confirm MPIN match
        if (mpinData.newMpin !== mpinData.confirmMpin) {
            setSnackbar({
                open: true,
                message: t("memebersSignup.msg_mpin_confirmation_match"),
                severity: "error",
            });
            return;
        }

        // Validate both new MPIN and confirm MPIN are exactly 6 digits and contain only numeric characters
        if (!mpinRegex.test(mpinData.newMpin) || !mpinRegex.test(mpinData.confirmMpin)) {
            setSnackbar({
                open: true,
                message: t("membership.msg_new_mpin_6_digits"),
                severity: "error",
            });
            return;
        }

        setUpdatingMpin(true);

        try {
            const token = localStorage.getItem("authToken");

            await axios.put(
                `https://staging-api.naf-cloudsystem.de/api/membership-cards/${formData.id}/update-mpin?currentMPIN=${mpinData.currentMpin}&newMPIN=${mpinData.newMpin}&confirmMPIN=${mpinData.confirmMpin}`,
                {},
                { headers: { Authorization: `Bearer ${token}` } }
            );

            setSnackbar({
                open: true,
                message: t("memebersSignup.msg_mpin_updated_success"),
                severity: "success",
            });

            // Clear MPIN input fields
            setMpinData({
                currentMpin: '',
                newMpin: '',
                confirmMpin: ''
            });

        } catch (error) {
            console.error("Error updating MPIN:", error);
            setSnackbar({
                open: true,
                message: error.response?.data?.message || t("membership.msg_mpin_update_failed"),
                severity: "error",
            });
        } finally {
            setUpdatingMpin(false);
        }
    };

    const handleEmailActionClick = () => {


        // Validate newEmail field
        if (!formData.newEmail || !isValidEmail(formData.newEmail)) {
            setSnackbar({
                open: true,
                message: t("validation.invalidNewEmail"),
                severity: "error",
            });
            return;
        }
        // Step must be otpSent
        if (emailChangeStep !== 'otpSent') {
            setSnackbar({
                open: true,
                message: t("membership.msg_send_otp_first"),
                severity: "error",
            });
            return;
        }
        // Validate verificationCode field
        if (!formData.verificationCode || formData.verificationCode.trim() === '') {
            setSnackbar({
                open: true,
                message: t("membership.msg_enter_verification_code"),
                severity: "error",
            });
            return;
        }

        if (formData.verificationCode.length !== 6) {
            setSnackbar({
                open: true,
                message: t("membership.msg_verification_code_6_digits"),
                severity: "error",
            });
            return;
        }

        handleVerifyEmail();
    };

    const handleConfirmDelete = async () => {
        try {
            setLoading(true);
            const token = localStorage.getItem("authToken");
            // Replace with your delete API for membership/user account
            await axios.delete(
                `https://staging-api.naf-cloudsystem.de/api/membership-cards/${formData.id}`,
                { headers: { Authorization: `Bearer ${token}` } }
            );

            setSnackbar({
                open: true,
                message: t("memebersSignup.msg_account_deleted_success"),
                severity: "success",
            });

            localStorage.removeItem("authToken");
            window.location.href = `/${lang}/membership`; // redirect to membership page
        } catch (error) {
            console.error("Fehler beim Löschen des Kontos:", error);
            setErrorMessage(t("memebersSignup.msg_account_delete_failed"));
            setSnackbar({
                open: true,
                message: t("memebersSignup.msg_account_delete_failed"),
                severity: "error",
            });
        } finally {
            setLoading(false);
            setIsDeletePopupOpen(false);
        }
    };

    // ✅ Reusable style for all TextFields
    const outlinedFieldProps = {
        fullWidth: true,
        variant: "outlined",

        InputProps: {
            sx: {
                color: "#fff",

                "& .MuiSelect-icon": {
                    color: "#fff",
                },

                "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#525252",
                    borderRadius: 2,
                },

                "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#525252",
                },

                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#525252",
                },
            },
        },

        SelectProps: {
            MenuProps: {
                PaperProps: {
                    sx: {
                        bgcolor: "#1e1e1e",
                        border: "1px solid #525252",
                        borderRadius: 2,
                        maxHeight: "50vh",
                        overflowY: "auto",

                        "&::-webkit-scrollbar": {
                            width: "6px",
                        },

                        "&::-webkit-scrollbar-track": {
                            background: "transparent",
                        },

                        "&::-webkit-scrollbar-thumb": {
                            backgroundColor: "#555",
                            borderRadius: "4px",
                        },

                        "&::-webkit-scrollbar-thumb:hover": {
                            backgroundColor: "#777",
                        },

                        /* Menu items */
                        "& .MuiMenuItem-root": {
                            color: "#fff",
                            fontSize: "0.875rem",
                            paddingY: "8px",

                            "&:hover": {
                                bgcolor: "#2a2a2a",
                            },

                            "&.Mui-selected": {
                                bgcolor: "#333",
                            },

                            "&.Mui-selected:hover": {
                                bgcolor: "#3a3a3a",
                            },
                        },
                    },
                },
            },
        },
    };

    if (!formData) return <Typography>{t("membership.msg_loading")}</Typography>;

    return (
        <Box sx={{ py: 3 }}>
            <Accordion
                expanded={expanded}
                onChange={() => setExpanded(!expanded)}
                sx={{
                    bgcolor: "#262626",
                    color: "#C2C2C4",
                    boxShadow: "none",
                    borderRadius: "12px !important",
                    py: 1.5,
                }}
            >
                <AccordionSummary
                    expandIcon={<AccordionIcon sx={{ color: "#fff" }} />}
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        "& .MuiAccordionSummary-content": {
                            margin: 0,
                        },
                    }}
                >
                    <Typography className="bodyRegularText3" sx={{ color: "#C2C2C4" }} >{t("membership.label_view_edit_profile")}</Typography>
                </AccordionSummary>

                <AccordionDetails  >
                    <Grid container spacing={1}>

                        {/* First Name */}
                        <Grid item xs={12} md={4} sx={{ mb: 2 }}>
                            <label className="bodyRegularText4" required >{t("membership.field_first_name_profile")}*</label>
                            <TextField
                                name="firstName"
                                value={formData.firstName || ""}
                                onChange={handleChange}
                                {...outlinedFieldProps}
                            />
                        </Grid>

                        {/* Last Name */}
                        <Grid item xs={12} md={4} sx={{ mb: 2 }}>
                            <label className="bodyRegularText4">{t("membership.field_last_name_profile")}*</label>
                            <TextField
                                required
                                name="lastName"
                                value={formData.lastName || ""}
                                onChange={handleChange}
                                {...outlinedFieldProps}
                            />
                        </Grid>
                        {/* Phone */}
                        <Grid item xs={12} md={4} sx={{ mb: 2 }}>
                            <label className="bodyRegularText4">{t("membership.field_phone_profile")}</label>
                            <TextField
                                name="mobileNumber"
                                value={formData.mobileNumber || ""}
                                onChange={handleChange}
                                {...outlinedFieldProps}
                            />
                        </Grid>
                        {/* Company */}
                        <Grid item xs={12} md={4} sx={{ mb: 2 }}>
                            <label className="bodyRegularText4">{t("membership.field_company")}</label>
                            <TextField
                                name="company"
                                value={formData.company || ""}
                                onChange={handleChange}
                                {...outlinedFieldProps}
                            />
                        </Grid>
                    </Grid>


                    {/* Address section */}
                    <Grid container spacing={ 1  } sx={{ mt: { xs:4 ,sm:4,md:6,lg :8}, mb: 2 }}>
                        {/* Address Line 1 */}
                        <Grid item xs={12} md={4} sx={{ mb: 2 }}>
                            <label className="bodyRegularText4">{t("membership.field_street")}</label>
                            <TextField
                                name="addressLine1"
                                value={formData.addressLine1 || ""}
                                onChange={handleChange}
                                {...outlinedFieldProps}
                            />
                        </Grid>

                        {/* Address Line 2 */}
                        <Grid item xs={12} md={4} sx={{ mb: 2 }}>
                            <label className="bodyRegularText4">{t("membership.field_area")}</label>
                            <TextField
                                name="addressLine2"
                                value={formData.addressLine2 || ""}
                                onChange={handleChange}
                                {...outlinedFieldProps}
                            />
                        </Grid>

                        {/* State */}
                        {/* Country */}
                        {/* City */}
                        <Grid item xs={12} md={4} sx={{ mb: 2 }}>
                            <label className="bodyRegularText4">{t("membership.field_city")}</label>
                            <TextField
                                name="city"
                                value={formData.city || ""}
                                onChange={handleChange}
                                {...outlinedFieldProps}
                            />
                        </Grid>

                        <Grid item xs={12} md={4} sx={{ mb: 2 }}>
                            <label className="bodyRegularText4">{t("membership.field_state")}</label>
                            <TextField
                                name="state"
                                value={formData.state || ""}
                                onChange={handleChange}
                                {...outlinedFieldProps}
                            />
                        </Grid>
                        <Grid item xs={12} md={4} sx={{ mb: 2 }}>
                            <label className="bodyRegularText4">{t("membership.field_country")}</label>

                            <FormControl fullWidth>
                                <Select
                                    value={selectedCountry}
                                    onChange={(e) => {
                                        const newValue = e.target.value;

                                        // Batch both state updates together
                                        setSelectedCountry(newValue);
                                        setFormData(prev => {
                                            const newData = {
                                                ...prev,
                                                country: newValue
                                            };
                                            return newData;
                                        });
                                    }}
                                    displayEmpty
                                    input={<OutlinedInput />}
                                    name="country"
                                    renderValue={(selected) => {
                                        if (!selected) {
                                            return <em style={{ color: '#888' }}>{t("membership.select_country_placeholder")}</em>;
                                        }
                                        return selected;
                                    }}
                                    sx={{
                                        color: "#fff",
                                        "& .MuiOutlinedInput-notchedOutline": {
                                            borderColor: "#525252",
                                            borderRadius: 2,
                                        },
                                        "&:hover .MuiOutlinedInput-notchedOutline": {
                                            borderColor: "#525252",
                                        },
                                        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                                            borderColor: "#525252",
                                        },
                                        "& .MuiSvgIcon-root": {
                                            color: "#fff",
                                        },
                                    }}
                                    MenuProps={{
                                        PaperProps: {
                                            sx: {
                                                bgcolor: "#1a1a1a",
                                                maxHeight: 300,
                                                "& .MuiMenuItem-root": {
                                                    color: "#fff",
                                                    "&:hover": {
                                                        bgcolor: "#2a2a2a",
                                                    },
                                                    "&.Mui-selected": {
                                                        bgcolor: "#333",
                                                    },
                                                    "&.Mui-selected:hover": {
                                                        bgcolor: "#3a3a3a",
                                                    },
                                                },
                                            },
                                        },
                                    }}
                                >
                                    <MenuItem disabled value="">
                                        <em>{t("membership.select_country_placeholder")}</em>
                                    </MenuItem>
                                    {countryCallingCodes.map((option) => (
                                        <MenuItem key={option.name} value={option.name}>
                                            {option.name}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Grid>

                        {/* Zip/Postal */}
                        <Grid item xs={12} md={4} sx={{ mb: 2 }}>
                            <label className="bodyRegularText4">{t("membership.field_zip_postal")}</label>
                            <TextField
                                name="zipCode"
                                value={formData.zipCode || ""}
                                onChange={handleChange}
                                {...outlinedFieldProps}
                            />
                        </Grid>
                    </Grid>

                    <Box />


                    <Box mt={3} sx={{ display: 'flex', justifyContent: 'flex-end' }}>

                        <Button
                            variant="contained"
                            onClick={handleSaveProfile}
                            disabled={saving}
                            className="bodyRegularText4"
                            sx={{
                                color: '#1A1A1A',
                                bgcolor: "#F4F4F4",
                                "&:hover": { bgcolor: "#F4F4F4" },
                                px: 3,
                                py: 1.5,
                                borderRadius: "32px",
                                textTransform: 'none'
                            }}
                        >
                            {saving ? t("membership.btn_saving") : t("membership.btn_save")}
                        </Button>
                    </Box>

                    <Divider sx={{ bgcolor: "#525252", my: 5 }} />

                    {/* Change EMail accordian */}
                    <Accordion
                        expanded={emailAccordionExpanded}
                        onChange={() => setEmailAccordionExpanded(!emailAccordionExpanded)}
                        sx={{
                            bgcolor: "#393939",
                            color: "#C2C2C4",
                            boxShadow: "none",
                            borderRadius: "12px !important",
                            py: 1.2,
                            mb: 1.2
                        }}
                    >
                        <AccordionSummary
                            expandIcon={<AccordionIcon sx={{ color: "#fff" }} />}
                            sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                "& .MuiAccordionSummary-content": {
                                    margin: 0,
                                },
                            }}
                        >
                            <Typography className="bodyRegularText3" sx={{ color: "#C2C2C4" }} > {t("membership.label_change_email")}</Typography>
                        </AccordionSummary>

                        <AccordionDetails >
                            <Grid container spacing={3}>
                                {/* Current Email */}
                                <Grid item xs={12} md={4} sx={{ mb: 2 }}>
                                    <label className="bodyRegularText4">{t("membership.label_current_email")}</label>

                                    <TextField
                                        name="email"
                                        type="email"
                                        value={formData.email || ""}
                                        {...outlinedFieldProps}
                                        InputProps={{
                                            readOnly: true,
                                            sx: {
                                                color: "#fff",
                                                opacity: 1,
                                                cursor: "default",

                                                "& input": {
                                                    color: "#fff",
                                                    opacity: 1,
                                                    cursor: "default",
                                                    caretColor: "transparent", // remove blinking cursor
                                                },

                                                "& .MuiOutlinedInput-notchedOutline": {
                                                    borderColor: "#525252",
                                                    opacity: 1,
                                                },

                                                "&:hover .MuiOutlinedInput-notchedOutline": {
                                                    borderColor: "#525252",
                                                },

                                                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                                                    borderColor: "#525252",
                                                },
                                            },
                                        }}
                                    />
                                </Grid>

                                {/* New Email */}
                                <Grid item xs={12} md={4} sx={{ mb: 2 }}>
                                    <label className="bodyRegularText4">{t("membership.label_new_email")}*</label>

                                    <TextField
                                        name="newEmail"
                                        type="email"
                                        placeholder="newemail@example.com"
                                        value={formData.newEmail || ""}
                                        onChange={handleChange}
                                        fullWidth
                                        variant="outlined"
                                        InputProps={{
                                            ...outlinedFieldProps.InputProps,
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    {formData.newEmail &&
                                                        isValidEmail(formData.newEmail) &&
                                                        emailChangeStep !== "verified" && (
                                                            <Button className="bodyRegularText4"
                                                                variant="text"
                                                                size="small"
                                                                sx={{
                                                                    color: "#7FEE64",
                                                                    fontWeight: 600,
                                                                    textTransform: "none",
                                                                    minWidth: "auto",
                                                                    px: 1,
                                                                }}
                                                                onClick={handleSendOTP}
                                                                disabled={loadingOtp}
                                                            >
                                                                {t("membership.btn_verify")}
                                                            </Button>
                                                        )}
                                                </InputAdornment>
                                            ),
                                        }}
                                    />


                                </Grid>
                                {/* Verification Code* */}
                                <Grid item xs={12} md={4} sx={{ mb: 2 }}>
                                    <label className="bodyRegularText4">{t("membership.label_verification_code")}*</label>
                                    <TextField
                                        name="verificationCode"
                                        type="text"
                                        placeholder="123456"
                                        value={formData.verificationCode || ""}
                                        onChange={(e) => {
                                            handleChange(e);
                                            // Clear error when user types
                                            if (otpError) setOtpError('');
                                        }}
                                        inputProps={{ maxLength: 6, digitOnly: true }}

                                        error={!!otpError}
                                        helperText={otpError}
                                        {...outlinedFieldProps}
                                    />
                                    {emailChangeStep === 'verified' && (
                                        <Typography className="bodyRegularText4" color="#21CD83">{t("membership.msg_verification_successful")}</Typography>
                                    )}
                                </Grid>


                            </Grid>
                            <Box mt={3} sx={{ display: 'flex', justifyContent: 'flex-end' }}>

                                <Button
                                    variant="contained"
                                    onClick={handleEmailActionClick}
                                    className="bodyRegularText4"
                                    sx={{
                                        color: '#1A1A1A',
                                        bgcolor: "#F4F4F4",
                                        "&:hover": { bgcolor: "#F4F4F4" },
                                        px: 3,
                                        py: 1.5,
                                        borderRadius: "32px",
                                        textTransform: 'none'
                                    }}>
                                    {t("membership.btn_verify_code")}
                                </Button>

                            </Box>


                        </AccordionDetails >
                    </Accordion>


                    <Accordion
                        sx={{
                            bgcolor: "#393939",
                            color: "#C2C2C4",
                            boxShadow: "none",
                            borderRadius: "12px !important",
                            py: 1.2,
                        }}
                    >
                        <AccordionSummary
                            expandIcon={<AccordionIcon sx={{ color: "#fff" }} />}
                        >
                            <Typography className="bodyRegularText3">
                                {t("membership.label_change_password_mpin")}*
                            </Typography>
                        </AccordionSummary>

                        <AccordionDetails>
                            <Grid container spacing={3}>

                                {/* Current MPIN */}
                                <Grid item xs={12} md={4}>
                                    <label className="bodyRegularText4">{t("membership.label_current_password")}*</label>
                                    <TextField
                                        name="currentMpin"
                                        type={showMpin.current ? "text" : "password"}
                                        value={mpinData.currentMpin}
                                        onChange={handleMpinChange}
                                        inputProps={{ maxLength: 6 }}
                                        placeholder="000000"
                                        fullWidth
                                        variant="outlined"
                                        InputProps={{
                                            sx: {
                                                color: "#fff",
                                                "& .MuiSelect-icon": {
                                                    color: "#fff",
                                                },
                                                "& .MuiOutlinedInput-notchedOutline": {
                                                    borderColor: "#525252",
                                                    borderRadius: 2,
                                                },
                                                "&:hover .MuiOutlinedInput-notchedOutline": {
                                                    borderColor: "#525252",
                                                },
                                                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                                                    borderColor: "#525252",
                                                },
                                            },
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    <IconButton
                                                        onClick={() =>
                                                            setShowMpin(p => ({ ...p, current: !p.current }))
                                                        }
                                                        sx={{ color: "#C2C2C4" }}
                                                    >
                                                        {showMpin.current ? <VisibilityOff /> : <Visibility />}
                                                    </IconButton>
                                                </InputAdornment>
                                            )
                                        }}
                                    />
                                </Grid>

                                {/* New MPIN */}
                                <Grid item xs={12} md={4}>
                                    <label className="bodyRegularText4">{t("memebersSignup.label_new_password_mpin")}*</label>
                                    <TextField
                                        name="newMpin"
                                        type={showMpin.new ? "text" : "password"}
                                        value={mpinData.newMpin}
                                        placeholder="000000"
                                        onChange={handleMpinChange}
                                        inputProps={{ maxLength: 6 }}
                                        fullWidth
                                        variant="outlined"
                                        InputProps={{
                                            sx: {
                                                color: "#fff",
                                                "& .MuiSelect-icon": {
                                                    color: "#fff",
                                                },
                                                "& .MuiOutlinedInput-notchedOutline": {
                                                    borderColor: "#525252",
                                                    borderRadius: 2,
                                                },
                                                "&:hover .MuiOutlinedInput-notchedOutline": {
                                                    borderColor: "#525252",
                                                },
                                                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                                                    borderColor: "#525252",
                                                },
                                            },
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    <IconButton
                                                        onClick={() =>
                                                            setShowMpin(p => ({ ...p, new: !p.new }))
                                                        }
                                                        sx={{ color: "#C2C2C4" }}
                                                    >
                                                        {showMpin.new ? <VisibilityOff /> : <Visibility />}
                                                    </IconButton>
                                                </InputAdornment>
                                            )
                                        }}
                                    />
                                </Grid>

                                {/* Confirm MPIN */}
                                <Grid item xs={12} md={4}>
                                    <label className="bodyRegularText4">{t("memebersSignup.label_confirm_password_mpin")}*</label>
                                    <TextField
                                        name="confirmMpin"
                                        type={showMpin.confirm ? "text" : "password"}
                                        value={mpinData.confirmMpin}
                                        onChange={handleMpinChange}
                                        placeholder="000000"
                                        inputProps={{ maxLength: 6 }}
                                        fullWidth
                                        variant="outlined"
                                        InputProps={{
                                            sx: {
                                                color: "#fff",
                                                "& .MuiSelect-icon": {
                                                    color: "#fff",
                                                },
                                                "& .MuiOutlinedInput-notchedOutline": {
                                                    borderColor: "#525252",
                                                    borderRadius: 2,
                                                },
                                                "&:hover .MuiOutlinedInput-notchedOutline": {
                                                    borderColor: "#525252",
                                                },
                                                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                                                    borderColor: "#525252",
                                                },
                                            },
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    <IconButton
                                                        onClick={() =>
                                                            setShowMpin(p => ({ ...p, confirm: !p.confirm }))
                                                        }
                                                        sx={{ color: "#C2C2C4" }}
                                                    >
                                                        {showMpin.confirm ? <VisibilityOff /> : <Visibility />}
                                                    </IconButton>
                                                </InputAdornment>
                                            )
                                        }}
                                    />
                                </Grid>
                            </Grid>

                            {/* Save Button */}
                            <Box mt={3} sx={{ display: "flex", justifyContent: "flex-end" }}>
                                <Button
                                    variant="contained"
                                    onClick={handleUpdateMpin}
                                    // disabled={
                                    //     updatingMpin ||
                                    //     mpinData.currentMpin.length !== 6 ||
                                    //     mpinData.newMpin.length !== 6 ||
                                    //     mpinData.newMpin !== mpinData.confirmMpin
                                    // }
                                    sx={{
                                        color: "#1A1A1A",
                                        bgcolor: "#F4F4F4",
                                        borderRadius: "32px",
                                        px: 3,
                                        py: 1.5,
                                        textTransform: "none",
                                        "&:hover": { bgcolor: "#F4F4F4" }
                                    }}
                                > {t("membership.btn_save")}
                                </Button>
                            </Box>
                        </AccordionDetails>
                    </Accordion>

                    <Box sx={{ display: "flex", justifyContent: "flex-end", my: 2 }}>


                        <Button
                            variant="contained"
                            onClick={handleDeleteClick}
                            disabled={saving}
                            className="bodyRegularText4"
                            sx={{
                                color: '#FF5E5E',
                                bgcolor: "transparent",
                                border: "1px solid #FF5E5E",
                                "&:hover": { bgcolor: "transparent" },
                                px: 3,
                                py: 1.5,
                                borderRadius: "32px",
                                textTransform: 'none'
                            }}
                        >
                            {t("membership.btn_delete")}
                        </Button>
                    </Box>









                </AccordionDetails>
            </Accordion>

            {/* Snackbar */}
            <Snackbar
                open={snackbar.open}
                autoHideDuration={3000}
                onClose={handleCloseSnackbar}
                anchorOrigin={{ vertical: "top", horizontal: "center" }}
            >
                <Alert
                    onClose={handleCloseSnackbar}
                    severity={snackbar.severity}
                    sx={{ 
                        width: "100%",
                        color: snackbar.severity === "success" ? "#21CD83" : 
                              snackbar.severity === "error" ? "red" : 
                              snackbar.severity === "warning" ? "orange" : 
                              "info.main",
                              backgroundColor: "#2a2a2a"
                    }}
                >
                    {snackbar.message}
                </Alert>
            </Snackbar>
            {/* Delete Confirmation Popup */}
            <DeleteConfirmationPopup
                open={isDeletePopupOpen}
                onClose={handleCloseDeletePopup}
                heading={deleteMessage ? t("membership.heading_delete_membership") : t("membership.heading_confirm_delete_account")}
                message={deleteMessage
                    ? t("membership.msg_confirm_delete_membership")
                    : t("membership.msg_confirm_permanent_delete")}
                onConfirm={handleConfirmDelete}
                itemName={`(${selectedRow?.id})`}
                errorMessage={errorMessage}
            />
        </Box>
    );
};

export default Profile;
