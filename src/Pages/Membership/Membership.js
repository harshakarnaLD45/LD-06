import React, { useEffect, useState } from "react";
import axios from "axios";
import {
    Box,
    CircularProgress,
    Typography,
    Checkbox,
    FormControlLabel,
    Link, Snackbar, Alert
} from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { BackButton, Email } from "../../Components/CustomIcons";
import AnimateButton from "../../Components/CommonComponents/AnimateButton"
import CustomTextField from "../MachinesPage/MantaincePage/CustomTextField";
import { IconButton, InputAdornment } from "@mui/material";
import { Visibility, VisibilityOff, CheckCircle } from "@mui/icons-material";
import { useTranslation, Trans } from "react-i18next";
import './Membership.css';
//import Image1 from '../../assets/NAF_lobby.webp';
import MembersNafinfo from "./MembershipInfo";

function Membership() {
    const { t, i18n } = useTranslation();
    const [step, setStep] = useState(1); // 1 = email, 2 = mpin, 3 = signup
    const [email, setEmail] = useState("");
    const [mpin, setMpin] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phone, setPhone] = useState("");
    const [company, setCompany] = useState("");

    const [countryCode, setCountryCode] = useState("+49"); // default Germany
    const [password, setPassword] = useState("");
    const [otpSent, setOtpSent] = useState(false);

    const [showMpin, setShowMpin] = useState(false);



    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [termsAccepted, setTermsAccepted] = useState(false);
    const [marketingAccepted, setMarketingAccepted] = useState(false);
    const [snackbar, setSnackbar] = useState({
        open: false,
        message: "",
        severity: "success", // "success" | "error" | "warning" | "info"
    });

    const [verificationCode, setVerificationCode] = useState("");
    const [emailVerified, setEmailVerified] = useState(false);
    const [isVerifyingCode, setIsVerifyingCode] = useState(false);
    const [verifyButtonClicked, setVerifyButtonClicked] = useState(false);
    const [verificationCodeStatus, setVerificationCodeStatus] = useState("");
    const [verificationCodeError, setVerificationCodeError] = useState("");

    const [loading, setLoading] = useState(false);
    const { lang } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // -----------------------------
    // Force re-render when language changes
    // -----------------------------
    useEffect(() => {
    }, [i18n.language]);

    useEffect(() => {
        const token = localStorage.getItem("authToken");
        const email = localStorage.getItem("authEmail");

        if (token && email) {
            axios.get("https://staging-api.naf-cloudsystem.de/api/membership-cards/details", {
                headers: { Authorization: `Bearer ${token}` },
                params: { email }
            })
                .then(() => {
                    navigate(`/${lang}/dashboard`, { replace: true });
                })
                .catch(() => {
                    localStorage.removeItem("authToken");
                    localStorage.removeItem("authEmail");
                    navigate(`/${lang}/membership`, { replace: true });
                });
        }
    }, [navigate, lang]);

    // Validation helpers
    const isValidEmail = (val) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
    const isValidPhone = (val) => /^[0-9]{7,15}$/.test(val);

    // Step 1: Check email
    const handleCheckEmail = async (e) => {
        e.preventDefault();
        if (!isValidEmail(email)) {
            setSnackbar({ open: true, message: t("membership.msg_enter_valid_email"), severity: "error" });
            return;
        }
        setLoading(true);

        try {
            const response = await axios.get(
                `https://staging-api.naf-cloudsystem.de/api/check-mail?email=${encodeURIComponent(
                    email
                )}`
            );

            if (response.data.emailExists) {
                setMpin("");
                setStep(2);
                setSnackbar({ open: true, message: t("membership.msg_email_verified"), severity: "success" });
            } else {
                {/*handleSendVerificationCode()*/ }
                setStep(22);
                setSnackbar({ open: true, message: t("membership.msg_email_not_found"), severity: "error" });
            }
        } catch (error) {
            setSnackbar({ open: true, message: t("membership.msg_error_checking_email"), severity: "error" });
            console.error(error);
        } finally {
            setLoading(false);
        }
    };
    const handleSendVerificationCode = async () => {
        if (!isValidEmail(email)) {
            setSnackbar({ open: true, message: t("membership.msg_enter_valid_email"), severity: "error" });
            return;
        }

        // Mark that verify button has been clicked
        setVerifyButtonClicked(true);

        try {
            const response = await axios.post(
                `https://staging-api.naf-cloudsystem.de/api/membership/send-verification-code`,
                null,
                { params: { email } }
            );

            if (response.status === 200) {
                setOtpSent(true);
                setStep(22); // Move to verification code step
                setSnackbar({ open: true, message: t("membership.msg_verification_code_sent"), severity: "success" });
            } else {
                console.log("goinggg", response);

                const backendError = response?.data?.error;
                if (backendError?.includes("already verified")) {
                    // Email already verified but user not signed up
                    setEmailVerified(true);
                    setStep(3); // 👉 go directly to signup
                    setSnackbar({ open: true, message: t("membership.msg_email_verified"), severity: "success" });
                    return;
                }
                setSnackbar({ open: true, message: t("membership.msg_error_sending_code"), severity: "error" });
            }
        } catch (error) {
            console.error(error);
            console.log("goinggg", error.response.data.error);
            const backendError = error.response.data.error;
            if (backendError?.includes("already verified")) {
                // Email already verified but user not signed up
                setEmailVerified(true);
                setStep(3); // 👉 go directly to signup
                setSnackbar({ open: true, message: t("membership.msg_email_verified"), severity: "success" });
                return;
            }
            setSnackbar({ open: true, message: t("membership.msg_error_sending_code"), severity: "error" });
        }
    };

    // Step 2: Verify email code for new users
    const handleVerifyEmailCode = async (e) => {
        e.preventDefault();

        // Clear previous errors
        setVerificationCodeError("");

        // Check if verify button was clicked first
        if (!verifyButtonClicked) {
            setSnackbar({ open: true, message: t("membership.msg_click_verify_first"), severity: "error" });
            return;
        }

        // Check if verification code was entered
        if (!verificationCode || verificationCode.length === 0) {
            setVerificationCodeError(t("membership.msg_enter_verification_code"));
            setSnackbar({ open: true, message: t("membership.msg_enter_verification_code"), severity: "error" });
            return;
        }

        if (verificationCode.length < 6) {
            setVerificationCodeError(t("membership.msg_verification_code_6_digits"));
            setSnackbar({ open: true, message: t("membership.msg_verification_code_6_digits"), severity: "error" });
            return;
        }

        if (verificationCode.length !== 6) {
            setVerificationCodeError(t("membership.msg_enter_verification_code"));
            setSnackbar({ open: true, message: t("membership.msg_enter_verification_code"), severity: "error" });
            return;
        }
        setIsVerifyingCode(true);

        try {
            const response = await axios.post(
                `https://staging-api.naf-cloudsystem.de/api/membership/verify-code`,
                null,
                { params: { email, code: verificationCode } }
            )

            if (response.status === 200 && response.data.message === "Email verified successfully") {
                setEmailVerified(true);
                setVerificationCodeStatus("verified");
                setVerificationCodeError("");  // Clear any errors
                console.log("ghoihhhhh");

                setStep(3); // move to email verification step
                setSnackbar({ open: true, message: t("memebersSignup.msg_verification_code_verified"), severity: "success" });
            } else {
                setVerificationCodeStatus("error");
                setVerificationCodeError(t("membership.msg_error_verifying_code"));
                setSnackbar({ open: true, message: t("membership.msg_error_verifying_code"), severity: "error" });
            }

        } catch (error) {
            setVerificationCodeStatus("error");
            setVerificationCodeError(t("membership.msg_error_verifying_code"));
            setSnackbar({ open: true, message: t("membership.msg_error_verifying_code"), severity: "error" });
            console.error(error);
        } finally {
            setIsVerifyingCode(false);
        }
    };

    // Step 2: Authenticate with MPIN
    const handleAuthenticate = async (e) => {
        e.preventDefault();
        if (mpin.length !== 6) {
            setSnackbar({ open: true, message: t("membership.helper_mpin_digits"), severity: "error" });
            return;
        }
        setLoading(true);

        try {
            const response = await axios.post(
                "https://staging-api.naf-cloudsystem.de/api/membership/authenticate",
                null,
                { params: { email, mpin } }
            );

            if (response.data.refreshToken) {
                // localStorage.setItem("authToken", response.data.refreshToken);
                // localStorage.setItem("authEmail", email);
                // setSnackbar({ open: true, message: t("membership.msg_login_successful"), severity: "success" });
                // navigate(`/${lang}/dashboard`, { replace: true });
                localStorage.setItem("authToken", response.data.refreshToken);
                localStorage.setItem("authEmail", email);
                setSnackbar({ open: true, message: t("membership.msg_login_successful"), severity: "success" });
                const queryParams = new URLSearchParams(window.location.search);
                const redirect = queryParams.get("redirect");
                if (redirect) {
                    const separator = redirect.includes("?") ? "&" : "?";
                    navigate(`/${lang}${redirect}${separator}skipMpin=true`, { replace: true });
                } else {
                    navigate(`/${lang}/dashboard`, { replace: true });
                }
            } else {
                setSnackbar({ open: true, message: t("membership.msg_invalid_mpin"), severity: "error" });
            }
        } catch (error) {
            setSnackbar({ open: true, message: t("membership.msg_login_failed"), severity: "error" });
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    // Step 3: Register new user
    const handleRegister = async (e) => {
        e.preventDefault();
        if (!isValidEmail(email)) {
            setSnackbar({ open: true, message: t("membership.msg_enter_valid_email"), severity: "error" });
            return;
        }
        if (!firstName.trim()) {
            setSnackbar({ open: true, message: t("membership.msg_first_name_required"), severity: "error" });
            return;
        }
        if (!lastName.trim()) {
            setSnackbar({ open: true, message: t("membership.msg_last_name_required"), severity: "error" });
            return;
        }

        if (password.length !== 6) {
            setSnackbar({ open: true, message: t("membership.helper_mpin_digits"), severity: "error" });
            return;
        }
        if (confirmPassword !== password) {
            setSnackbar({ open: true, message: t("membership.helper_mpin_match"), severity: "error" });
            return;
        }
        if (!termsAccepted) {
            setSnackbar({ open: true, message: t("membership.msg_terms_required"), severity: "error" });
            return;
        }
        setLoading(true);

        try {
            const response = await axios.post(
                "https://staging-api.naf-cloudsystem.de/api/membership/signup",
                {
                    email,
                    firstName,
                    lastName,
                    mobileNumber: `${countryCode} ${phone}`, // include country code with space
                    company: company,
                    mpin: password,
                    type: 'Membership',
                }
            );

            if (response.data.message) {
                setSnackbar({ open: true, message: t("membership.msg_registration_successful"), severity: "success" });

                // Auto-login immediately
                const loginResponse = await axios.post(
                    "https://staging-api.naf-cloudsystem.de/api/membership/authenticate",
                    null,
                    { params: { email, mpin: password } }
                );

                if (loginResponse.data.refreshToken) {
                    localStorage.setItem("authToken", loginResponse.data.refreshToken);
                    localStorage.setItem("authEmail", email);

                    navigate(`/${lang}/dashboard`, { replace: true });
                } else {
                    setSnackbar({ open: true, message: t("membership.msg_signup_auto_login_failed"), severity: "error" });
                    setStep(2);
                }
            } else {
                setSnackbar({ open: true, message: t("membership.msg_registration_failed"), severity: "error" });
            }
        } catch (error) {
            setSnackbar({ open: true, message: t("membership.msg_error_registration"), severity: "error" });
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    const handleForgotMpin = async () => {
        if (!isValidEmail(email)) {
            setSnackbar({
                open: true,
                message: t("membership.msg_enter_valid_email"),
                severity: "error",
            });
            return;
        }

        try {
            const response = await axios.post(
                "https://staging-api.naf-cloudsystem.de/api/forgot-mpin",
                null,
                { params: { email } }
            );

            if (response.status === 200) {
                setSnackbar({
                    open: true,
                    message: t("membership.msg_mpin_reset_sent"),
                    severity: "success",
                });
                setStep(4);
            } else {
                setSnackbar({
                    open: true,
                    message: t("membership.msg_request_failed"),
                    severity: "error",
                });
            }
        } catch (error) {
            console.error("Error:", error);
            setSnackbar({
                open: true,
                message: t("membership.msg_something_wrong"),
                severity: "error",
            });
        }
    };

    const handleMpinChange = (value, index) => {
        if (!/^\d?$/.test(value)) {
            setSnackbar({
                open: true,
                message: t('membership.msg_mpin_six_digits'),
                severity: "error",
            });
            return;
        }

        let arr = mpin.split("");
        arr[index] = value || "";
        const updated = arr.join("");
        setMpin(updated);

        // Auto move to next box
        if (value && index < 5) {
            document.getElementById(`mpin-${index + 1}`).focus();
        }
    };

    const handleMpinKeyDown = (e, index) => {
        if (e.key === "Backspace" && !mpin[index] && index > 0) {
            // Move back only if current box already empty
            document.getElementById(`mpin-${index - 1}`).focus();
        }
    };

    const handleMpinPaste = (e) => {
        e.preventDefault();
        const paste = e.clipboardData.getData("text").trim();

        if (!/^\d{6}$/.test(paste)) {
            setSnackbar({
                open: true,
                message: "Please paste exactly 6 digits",
                severity: "error",
            });
            return;
        }

        setMpin(paste);
        document.getElementById("mpin-5")?.focus();
    };

    const pageTitle = (() => {
        switch (step) {
            case 22:
                return t("memebersSignup.title_signup");
            case 2:
                return t("memebersLogin.Login");

            case 4:
                return t("membership.title_temporary_mpin");

            case 3:
                return t("memebersSignup.title_signup")
            case 1:


            default:
                return (
                    <Trans
                        i18nKey="membership.title_login_signup"
                        components={[
                            <Box component="span" sx={{ display: { xs: "block", sm: "inline" } }} />
                        ]}
                    />
                );
        }
    })();

    const handleBack = () => {
        if (step === 2) {
            setStep(1);
        }
        else if (step === 22) {
            setStep(1);
            setEmailVerified(false);
            setVerifyButtonClicked(false);  // Reset verify button state
            setVerificationCodeStatus("");  // Reset verification status
            setVerificationCodeError("");  // Reset error
        }
        else if (step === 3) {
            setEmailVerified(false);
            setVerificationCode("");
            setVerificationCodeStatus("");  // Reset verification status
            setVerificationCodeError("");  // Reset error
            setStep(22);
        }
        else if (step === 4) {
            setStep(2);
        }
    };

    return (
        <Box className="section-container menucontainer membership-container">
            <Box sx={{}}>

                {/* </Box> */}
                {/* Left Side */}
                <Box className="main-form-container"

                    sx={{
                        color: "white",
                        p: { xs: 0, sm: 4 },
                        mb: 6
                    }}
                >

                    <Box>
                        <Typography className="bodyRegularText3"
                            sx={{
                                textAlign: 'center',
                                color: "#7FEE64"
                            }}>
                            {t("membership.subheading_naf_memberShip")}
                        </Typography>

                    </Box>
                    <Box
                        sx={{
                            position: "relative",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            mb: 6,
                            width: '100%',
                            boxSizing: 'border-box',
                        }}
                    >

                        <Box
                            sx={{
                                position: "relative",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                mb: 4,
                                width: { xs: "100%", sm: "100%", md: "100%", lg: "100%" },
                            }}
                        >
                            {(step === 22 || step === 3 || step === 2 || step === 4) && (
                                <Box
                                    onClick={handleBack}
                                    sx={{
                                        cursor: "pointer",
                                        display: "flex",
                                        alignItems: "center",
                                        width: "fit-content",
                                        minWidth: { xs: '50px', sm: '50px', md: '50px', lg: '60px' },
                                        zIndex: 1
                                    }}
                                >
                                    <BackButton />
                                </Box>
                            )}

                            <Typography
                                variant="h3"
                                className="headings-h2"
                                fontWeight="bold"
                                sx={{
                                    color: "#FCFCFC",
                                    textAlign: "center",
                                }}>
                                {pageTitle}
                            </Typography>
                        </Box>
                    </Box>

                    <Box className="form-container"
                        sx={{
                            color: "white",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",

                        }}>
                        {/* Step 1: Email */}
                        {step === 1 && (
                            <Box
                                component="form"
                                onSubmit={handleCheckEmail}
                                sx={{ width: "100%", maxWidth: 400 }}
                            >
                                <Typography sx={{ mb: 6, color: '#FCFCFC', textAlign: 'center' }} className="bodyRegularText3">
                                    {t("membership.label_enter_email")}
                                </Typography>

                                <CustomTextField
                                    label={t("membership.field_email")}
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton edge="end" sx={{ color: '#C2C2C4' }}>
                                                <Email />
                                            </IconButton>
                                        </InputAdornment>
                                    }

                                />

                                <Box sx={{ display: "flex", justifyContent: "center", mt: 10 }}>
                                    <div onClick={handleCheckEmail}>
                                        {loading ? (
                                            <CircularProgress size={24} sx={{ color: "white" }} />
                                        ) : (
                                            <AnimateButton text1={t("membership.btn_submit")} text2={t("membership.btn_now")} />
                                        )}
                                    </div>
                                </Box>
                            </Box>
                        )}

                        {/* Step 2: MPIN */}
                        {step === 2 && (
                            <Box
                                component="form"
                                onSubmit={handleAuthenticate}
                                sx={{ width: "100%", maxWidth: 400 }}
                            >
                                <Typography sx={{ mb: 2, color: '#FCFCFC', textAlign: 'center' }} className="bodyRegularText3">
                                    {t("membership.label_enter_mpin")}
                                </Typography>

                                {/* 6-digit MPIN Boxes */}
                                {/* <Box sx={{ display: "flex", justifyContent: "center", gap: { xs: 1, sm: 1.5, md: 2 }, mb: 1 }}>
                                    {[0, 1, 2, 3, 4, 5].map((i) => (
                                        <input
                                            key={i}
                                            id={`mpin-${i}`}
                                            type={showMpin ? "text" : "password"}
                                            maxLength={1}
                                            placeholder="0"
                                            value={mpin[i] || ""}
                                            onChange={(e) => handleMpinChange(e.target.value, i)}
                                            onKeyDown={(e) => handleMpinKeyDown(e, i)}
                                            onPaste={handleMpinPaste}
                                            style={{
                                                width: "54px",
                                                height: "54px",
                                                textAlign: "center",
                                                fontSize: "24px",
                                                borderRadius: "4px",
                                                border: "none",
                                                background: "#595D62",
                                                color: "#C2C2C4",
                                                outline: "none",
                                            }}
                                        />
                                    ))}
                                </Box> */}
                                <Box
                                    sx={{
                                        display: "flex",
                                        justifyContent: "center",
                                        gap: { xs: 1, sm: 1.5, md: 2 },
                                        mb: 1,
                                    }}
                                >
                                    {[0, 1, 2, 3, 4, 5].map((i) => (
                                        <Box
                                            key={i}
                                            component="input"
                                            id={`mpin-${i}`}
                                            type={showMpin ? "text" : "password"}
                                            maxLength={1}
                                            placeholder="0"
                                            value={mpin[i] || ""}
                                            onChange={(e) => handleMpinChange(e.target.value, i)}
                                            onKeyDown={(e) => handleMpinKeyDown(e, i)}
                                            onPaste={handleMpinPaste}
                                            sx={{
                                                width: { xs: 40, sm: 48, md: 54 },
                                                height: { xs: 40, sm: 48, md: 54 },
                                                textAlign: "center",
                                                fontSize: { xs: "18px", sm: "20px", md: "24px" },
                                                borderRadius: "6px",
                                                border: "none",
                                                backgroundColor: "#595D62",
                                                color: "#C2C2C4",
                                                outline: "none",
                                            }}
                                        />
                                    ))}
                                </Box>

                                {/* Show / Hide MPIN text Forgot MPIN link  */}
                                <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
                                    <Typography
                                        onClick={() => setShowMpin(!showMpin)}
                                        sx={{
                                            cursor: "pointer",
                                            color: "#EC6B53",
                                            textDecoration: "underline",
                                            fontSize: "14px"
                                        }}
                                        className="bodyRegularText4"
                                    >
                                        {showMpin ? t("memebersLogin.hide_mpin") : t("memebersLogin.show_mpin")}


                                    </Typography>

                                    <Typography
                                        variant="body2"
                                        sx={{ cursor: "pointer", color: "#EC6B53", textDecoration: 'underline' }}
                                        onClick={handleForgotMpin}
                                        className="bodyRegularText4"
                                    >
                                        {t("memebersLogin.ForgotMpin")}
                                    </Typography>
                                </Box>
                                <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
                                    <div onClick={handleAuthenticate}>
                                        {loading ? (
                                            <CircularProgress size={24} sx={{ color: "white" }} />
                                        ) : (
                                            <AnimateButton text1={t("membership.btn_submit")} text2={t("membership.btn_now")} />
                                        )}
                                    </div>
                                </Box>
                            </Box>
                        )}

                        {/* Step 2: Email Verification */}
                        {step === 22 && !emailVerified && (
                            <Box sx={{ width: "100%", maxWidth: 550 }}>

                                <Typography sx={{ mb: 6, color: '#FCFCFC', textAlign: 'center' }} className="bodyRegularText3">
                                    {t("membership.label_enter_details")}
                                </Typography>

                                {/* Email + Verify link inline */}
                                <Box sx={{ mb: 5 }}>
                                    <CustomTextField
                                        // label={t("membership.field_email")}
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        fullWidth
                                        required
                                        endAdornment={
                                            !verifyButtonClicked ? (
                                                <InputAdornment position="end">
                                                    <Link
                                                        className="bodyMediumText5"
                                                        sx={{
                                                            cursor: "pointer",
                                                            color: "#7FEE64",
                                                            whiteSpace: "nowrap",
                                                        }}
                                                        onClick={handleSendVerificationCode}>
                                                        {t("membership.verify")}
                                                    </Link>
                                                </InputAdornment>
                                            ) : null
                                        } />
                                    {/* {verifyButtonClicked && (
                                        <Box sx={{  display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                                            <Typography 
                                                onClick={handleSendVerificationCode} 
                                                sx={{ color: "#7FEE64", textAlign: "flex-end", mb: 2, cursor: "pointer" }} 
                                                className="bodyRegularText4">
                                                {t("memebersSignup.btn_resend")}
                                            </Typography>
                                        </Box>
                                    )} */}
                                </Box>



                                <CustomTextField
                                    label={t("membership.field_verification_code")}
                                    type="text"
                                    value={verificationCode}
                                    onChange={(e) => {
                                        const newValue = e.target.value.replace(/\D/g, "");
                                        setVerificationCode(newValue);
                                        setVerificationCodeStatus("");  // Reset status when user types
                                        setVerificationCodeError("");  // Clear error when user types

                                        // Real-time validation feedback
                                        if (newValue.length > 0 && newValue.length < 6) {
                                            setVerificationCodeError(t("membership.msg_verification_code_6_digits"));
                                        }
                                    }}
                                    inputProps={{ maxLength: 6 }}
                                    required
                                    error={!!verificationCodeError}
                                    helperText={verificationCodeError}
                                />
                                {/* { verificationCodeStatus === 'verified' && (
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 1 }}>
                                        <CheckCircle sx={{ color: "#21CD83", fontSize: 20 }} />
                                        <Typography className="bodyRegularText4" sx={{ color: "#21CD83" }}>
                                            {t("membership.msg_verification_successful")}
                                        </Typography>
                                    </Box>
                                )} */}

                                <Box sx={{ my: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                    <Typography sx={{ color: "#fcfcfc", textAlign: "center", mb: 0.5 }} className="bodyRegularText4">
                                        {t("membership.msg_spam_folder")}
                                    </Typography>
                                    <Typography sx={{ color: "#fcfcfc", textAlign: "center", mb: 2 }} className="bodyRegularText4">
                                        {t("memebersSignup.btn_resend1")}  <span onClick={handleSendVerificationCode} style={{ color: "#fcfcfc", cursor: "pointer", textDecoration: 'underline' }}>{t("memebersSignup.btn_resend")}</span>
                                    </Typography>
                                </Box>

                                <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
                                    <div onClick={handleVerifyEmailCode}>
                                        {isVerifyingCode ? (
                                            <CircularProgress size={24} sx={{ color: "white" }} />
                                        ) : (
                                            <AnimateButton text1={t("AnimateBtn.next")} text2={t("AnimateBtn.step")} />
                                        )}
                                    </div>
                                </Box>
                            </Box>
                        )}

                        {/* Step 3: Sign-up */}
                        {step === 3 && (
                            <Box
                                component="form"
                                onSubmit={handleRegister}
                                sx={{ width: "100%", maxWidth: 400 }}
                            >

                                <Typography variant="h6" sx={{ mb: 2 }}>
                                    {t("membership.label_enter_details")}
                                </Typography>

                                <CustomTextField
                                    label={t("membership.field_email")}
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    disabled
                                    inputProps={{
                                        readOnly: true,
                                    }}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton edge="end" sx={{ color: '#C2C2C4' }}>
                                                <Email />
                                            </IconButton>
                                        </InputAdornment>

                                    }
                                />

                                <CustomTextField
                                    label={t("membership.field_first_name")}
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                    required
                                />

                                <CustomTextField
                                    label={t("membership.field_last_name")}
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                    required
                                />

                                <CustomTextField
                                    label={t("membership.field_phone_number")}
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value.replace(/\s+/g, ""))}

                                />
                                <CustomTextField
                                    label={t("membership.field_company")}
                                    value={company}
                                    onChange={(e) => setCompany(e.target.value)}
                                />

                                <CustomTextField
                                    label={t("memebersSignup.label_create_password_mpin")}
                                    type={showPassword ? "text" : "password"}
                                    value={password}
                                    inputProps={{ maxLength: 6, pattern: "[0-9]{6}" }}
                                    onChange={(e) => {
                                        const value = e.target.value.replace(/\D/g, ""); // only digits
                                        if (value.length <= 6) setPassword(value);
                                    }}
                                    required
                                    error={password.length > 0 && password.length !== 6}
                                    helperText={
                                        password.length > 0 && password.length !== 6
                                            ? t("membership.helper_mpin_digits")
                                            : ""
                                    }
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                onClick={() => setShowPassword(!showPassword)}
                                                edge="end"
                                                sx={{ color: "#C2C2C4" }}
                                            >
                                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                />

                                <CustomTextField
                                    label={t("memebersSignup.label_confirm_password_mpin")}
                                    type={showConfirmPassword ? "text" : "password"}
                                    value={confirmPassword}
                                    inputProps={{ maxLength: 6, pattern: "[0-9]{6}" }}
                                    onChange={(e) => {
                                        const value = e.target.value.replace(/\D/g, ""); // only digits
                                        if (value.length <= 6) setConfirmPassword(value);
                                    }}
                                    required
                                    error={
                                        (confirmPassword.length > 0 && confirmPassword.length !== 6) ||
                                        (confirmPassword.length === 6 && password.length === 6 && confirmPassword !== password)
                                    }
                                    helperText={
                                        confirmPassword.length > 0 && confirmPassword.length !== 6
                                            ? t("membership.helper_mpin_digits")
                                            : confirmPassword.length === 6 && password.length === 6 && confirmPassword !== password
                                                ? t("membership.helper_mpin_match")
                                                : ""
                                    }
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                                edge="end"
                                                sx={{ color: "#C2C2C4" }}
                                            >
                                                {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                />

                                {/* Terms & Conditions Checkbox */}
                                <Box sx={{ mt: 2, mb: 2 }}>
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                checked={termsAccepted}
                                                onChange={(e) => setTermsAccepted(e.target.checked)}
                                                sx={{
                                                    color: "#C2C2C4",
                                                    '&.Mui-checked': { color: "#FA7854" }
                                                }}
                                            />
                                        }
                                        label={
                                            <Typography className="bodyRegularText4"
                                                variant="body2"
                                                sx={{
                                                    color: "#C2C2C4",
                                                    fontSize: "0.875rem",
                                                    lineHeight: 1.4,
                                                    display: "inline",
                                                    alignSelf: "center",
                                                    flexWrap: "wrap",
                                                    wordBreak: "break-word"
                                                }}
                                            >
                                                {t('memebersSignup.Privacy_Text1')}
                                                <Link
                                                    href="#"
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        navigate(`/${lang}/privacy-policy`);
                                                    }}
                                                    sx={{
                                                        color: "#C2C2C4",
                                                        textDecoration: "underline",
                                                        '&:hover': {
                                                            cursor: 'pointer'
                                                        },
                                                        display: "inline",
                                                        ml: 0.5,
                                                        mr: 0.5
                                                    }}
                                                >
                                                    {t('contactus.privacypolicy2')}
                                                </Link>
                                                <span style={{ color: "#FA7854" }}>*</span>
                                            </Typography>
                                        }
                                        sx={{
                                            alignItems: "flex-start",
                                            mt: 1
                                        }}
                                    />
                                    {/* Marketing Emails */}
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                checked={marketingAccepted}
                                                onChange={(e) => setMarketingAccepted(e.target.checked)}
                                                sx={{
                                                    color: "#C2C2C4",
                                                    '&.Mui-checked': { color: "#FA7854" }
                                                }}
                                            />
                                        }
                                        label={
                                            <Typography className="bodyRegularText4"
                                                variant="body2"
                                                sx={{
                                                    color: "#C2C2C4",
                                                    fontSize: "0.875rem",
                                                    display: "flex",
                                                    alignSelf: "center"
                                                }}
                                            >
                                                {t("memebersSignup.accepting_marketing_policy")}
                                            </Typography>
                                        }
                                        sx={{
                                            alignItems: "flex-start",
                                            mt: 2, ml: "-4px"
                                        }}
                                    />
                                </Box>

                                {/* Country Code + Phone */}
                                {/* <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
                                    <FormControl variant="standard" sx={{ minWidth: 100 }}>
                                        <InputLabel sx={{ color: "#aaa" }}>Code</InputLabel>
                                        <Select
                                            value={countryCode}
                                            onChange={(e) => setCountryCode(e.target.value)}
                                            sx={{ color: "white" }}
                                        >
                                            {countryCodes.map((c) => (
                                                <MenuItem key={c.dial_code} value={c.dial_code}>
                                                    {c.name} ({c.dial_code})
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>

                                    <TextField
                                        fullWidth
                                        variant="standard"
                                        label="Phone Number"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value.replace(/\s+/g, ""))} // strip spaces from user typing
                                        InputProps={{
                                            startAdornment: (
                                                <Typography sx={{ color: "white", mr: 1 }}>
                                                    {countryCode}&nbsp;
                                                </Typography>
                                            ),
                                            style: { color: "white" }
                                        }}
                                        InputLabelProps={{ style: { color: "#aaa" } }}
                                        required
                                    />
                                </Box> */}

                                <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
                                    <div onClick={handleRegister}>
                                        {loading ? (
                                            <CircularProgress size={24} sx={{ color: "white" }} />
                                        ) : (
                                            <AnimateButton text1={t("membership.btn_submit")} text2={t("membership.btn_now")} />
                                        )}
                                    </div>
                                </Box>
                            </Box>
                        )}
                    </Box>

                    {/* Step 4: MPIN */}
                    {step === 4 && (
                        <Box
                            component="form"
                            onSubmit={handleAuthenticate}
                            sx={{ mt: -6, width: "100%", maxWidth: 600, mx: "auto" }}
                        >
                            <Typography sx={{ mb: 2, color: '#FCFCFC', textAlign: 'center' }} className="bodyRegularText3">
                                {t("membership.label_entertemporary_mpin")}
                            </Typography>


                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    gap: { xs: 1, sm: 1.5, md: 2 },
                                    mb: 1,
                                }}
                            >
                                {[0, 1, 2, 3, 4, 5].map((i) => (
                                    <Box
                                        key={i}
                                        component="input"
                                        id={`mpin-${i}`}
                                        type={showMpin ? "text" : "password"}
                                        maxLength={1}
                                        placeholder="0"
                                        value={mpin[i] || ""}
                                        onChange={(e) => handleMpinChange(e.target.value, i)}
                                        onKeyDown={(e) => handleMpinKeyDown(e, i)}
                                        onPaste={handleMpinPaste}
                                        sx={{
                                            width: { xs: 40, sm: 48, md: 54 },
                                            height: { xs: 40, sm: 48, md: 54 },
                                            textAlign: "center",
                                            fontSize: { xs: "18px", sm: "20px", md: "24px" },
                                            borderRadius: "6px",
                                            border: "none",
                                            backgroundColor: "#595D62",
                                            color: "#C2C2C4",
                                            outline: "none",
                                        }}
                                    />
                                ))}
                            </Box>

                            {/* Show / Hide MPIN text Forgot MPIN link  */}
                            <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
                                <Typography
                                    onClick={() => setShowMpin(!showMpin)}
                                    sx={{
                                        cursor: "pointer",
                                        color: "#fcfcfc",
                                        //textDecoration: "underline",
                                        fontSize: "14px",
                                        ml: 10,
                                    }}
                                    className="bodyRegularText4"
                                >
                                    {showMpin ? t("memebersLogin.hide_mpin") : t("memebersLogin.show_mpin")}


                                </Typography>


                            </Box>
                            <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
                                <div onClick={handleAuthenticate}>
                                    {loading ? (
                                        <CircularProgress size={24} sx={{ color: "white" }} />
                                    ) : (
                                        <AnimateButton text1={t("membership.btn_submit")} text2={t("membership.btn_now")} />
                                    )}
                                </div>
                            </Box>
                        </Box>
                    )}


                </Box>



            </Box>
            <MembersNafinfo />
            <Snackbar
                open={snackbar.open}
                autoHideDuration={4000}
                onClose={() => setSnackbar({ ...snackbar, open: false })}
                anchorOrigin={{ vertical: "top", horizontal: "center" }}
            >
                <Alert
                    onClose={() => setSnackbar({ ...snackbar, open: false })}
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

        </Box >
    );
}

export default Membership;