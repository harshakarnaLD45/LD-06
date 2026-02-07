import React, { useState, useEffect } from "react";
import { Typography, InputAdornment, IconButton, Box, CircularProgress, Grid } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import axios from "axios";
import AnimateButton from "../../Components/CommonComponents/AnimateButton";
import CustomTextField from "../MachinesPage/MantaincePage/CustomTextField";
import Image1 from "../../assets/Machines/Login.svg";
import { useTranslation } from "react-i18next";

const MpinValidationPage = ({ onSuccess }) => {
    const { t,i18n } = useTranslation();
    const [mpin, setMpin] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const email = localStorage.getItem("authEmail");

    const handleCheckMpin = async () => {
        if (mpin.length !== 6) {
            setError(t("membership.msg_mpin_six_digits"));
            return;
        }

        setLoading(true);
        setError("");

        try {
            const response = await axios.post(
                "https://staging-api.naf-cloudsystem.de/api/membership/authenticate",
                null,
                { params: { email, mpin } }
            );

            if (response.data.refreshToken) {
                localStorage.setItem("authToken", response.data.refreshToken);
                onSuccess(response.data.refreshToken); // ✅ send token back to PaymentPage
            } else {
                setError(t("membership.msg_invalid_mpin"));
            }
        } catch {
            setError(t("membership.msg_login_failed"));
        } finally {
            setLoading(false);
        }
    };
  
      useEffect(() => {
      }, [i18n.language]);
    

    return (
        <Box className="section-container menucontainer">
            <Box  sx={{ border: '1px solid #525252' }}>
                {/* Left Side */}
                <Box className="main-form-container"
                    sx={{
                        color: "white",
                        p: 4,
                    }}
                >
                    <Typography variant="h3" className="headings-h2" fontWeight="bold" sx={{ mb: 6, color: '#FCFCFC', textAlign: 'center' }}>
                        {t("membership.title_login_signup")}
                    </Typography>
                    <Box
                        sx={{
                            color: "white",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            p: 4,
                        }}>
                        <Box
                            component="form"
                            onSubmit={handleCheckMpin}
                            sx={{ width: "100%", maxWidth: 400 }}
                        >
                            <Typography sx={{ mb: 2, color: '#FCFCFC', textAlign: 'center' }} className="bodyRegularText3">
                                {t("membership.label_enter_mpin")}
                            </Typography>

                            <CustomTextField
                                label={t("membership.field_mpin")}
                                type={showPassword ? "text" : "password"}
                                value={mpin}
                                inputProps={{ maxLength: 6, pattern: "[0-9]{6}" }}
                                onChange={(e) => {
                                    const value = e.target.value.replace(/\D/g, ""); // only digits
                                    if (value.length <= 6) setMpin(value);
                                }}
                                required
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
                                }/>

                            <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
                                <div onClick={handleCheckMpin}>
                                    {loading ? (
                                        <CircularProgress size={24} sx={{ color: "white" }} />
                                    ) : (
                                        <AnimateButton text1={t("membership.btn_submit")} text2={t("membership.btn_now")} />
                                    )}
                                </div>
                            </Box>
                        </Box>
                    </Box>
                    {error && (
                        <Typography sx={{ mt: 2, color: "limegreen", textAlign: 'center' }}>{error}</Typography>
                    )}
                </Box>

              
            </Box>
        </Box >
    );
};

export default MpinValidationPage;
