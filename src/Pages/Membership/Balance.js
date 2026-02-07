import React, { useEffect, useState } from "react";
import { Box, Typography, Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField, Snackbar, Alert, IconButton } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import './Membership.css';
import CloseIcon from '@mui/icons-material/Close';

const Balance = ({ balance = 0, token, onBalanceUpdate, cardNumber }) => {
    const navigate = useNavigate();
    const { t, i18n } = useTranslation();
    const [open, setOpen] = useState(false);
    const [amount, setAmount] = useState("");

    // Snackbar state
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState("");
    const [snackbarSeverity, setSnackbarSeverity] = useState("success"); // "success" or "error"

    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        setAmount("");
        setOpen(false);
    };

    const handleSnackbarClose = () => setSnackbarOpen(false);

    const handleTopUp = async () => {
        const numericAmount = parseFloat(amount);
        // if (isNaN(numericAmount) || numericAmount <= 0) {
        //     setSnackbarMessage(t("membership.msg_enter_valid_amount"));
        //     setSnackbarSeverity("error");
        //     setSnackbarOpen(true);
        //     return;
        // }

        if (isNaN(numericAmount) || numericAmount < 20) {
            setSnackbarMessage(t("membership.msg_minimum_amount_20_eur"));
            setSnackbarSeverity("error");
            setSnackbarOpen(true);
            return;
        }
        try {
            const res = await axios.post(
                "https://staging-api.naf-cloudsystem.de/api/membership-cards/create-link",
                {}, // empty body
                {
                    headers: { Authorization: `Bearer ${token}` },
                    params: { currency: "eur", amount: numericAmount, cardNumber: cardNumber, successUrl: "https://vendinaf.com/de/dashboard?status=success", cancelUrl: "https://vendinaf.com/de/dashboard?status=cancel" },
                }
            );

            const paymentLink = res.data || "";
            if (paymentLink) {
                setSnackbarMessage(t("membership.msg_redirecting_payment"));
                setSnackbarSeverity("success");
                setSnackbarOpen(true);
                window.location.href = paymentLink;
            } else {
                setSnackbarMessage(t("membership.msg_payment_link_not_found"));
                setSnackbarSeverity("error");
                setSnackbarOpen(true);
                console.error("Payment link not found in API response", res.data);
            }
        } catch (error) {
            setSnackbarMessage(t("membership.msg_failed_payment_link"));
            setSnackbarSeverity("error");
            setSnackbarOpen(true);
            console.error("Failed to create payment link:", error);
        }
    };

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const status = params.get("status");

        if (status === "success") {
            if (onBalanceUpdate) onBalanceUpdate();
        } else if (status === "cancel") {
            setSnackbarMessage(t("membership.msg_payment_canceled"));
            setSnackbarSeverity("error");
            setSnackbarOpen(true);
        }
    }, [navigate, onBalanceUpdate, i18n.language]);

    return (
        <Box className="Balance-container"
            sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                bgcolor: "#262626",
                borderRadius: "12px",
                p: 2,
                mb: 3,
            }}
        >
            <Typography sx={{ color: "#C2C2C4" }} className="bodyRegularText3">{t("membership.label_available_balance")}</Typography>

            <Box className="add-btn-section" sx={{ display: "flex", alignItems: "center", gap: 2, }}>
                <Button
                    variant="contained"
                    onClick={handleOpen}
                    sx={{
                        padding: "8px 16px",
                        borderRadius: "100px",
                        bgcolor: "#F4F4F4",
                        "&:hover": { bgcolor: "#F4F4F4" },
                        color: '#262626',
                        textTransform: 'none'
                    }}
                    className="bodyRegularText5"
                >
                    {t("membership.btn_add_balance")}
                </Button>
                <Typography sx={{ color: "#7FEE64" }} className="bodyMediumText1">
                    € {balance ? parseFloat(balance).toFixed(2) : '0.00'}
                </Typography>
            </Box>

            {/* Dialog Popup */}
            {/* <Dialog open={open} onClose={handleClose} maxWidth="xs" fullWidth>
                <DialogTitle className="bodyMediumText3">{t("membership.dialog_top_up_balance")}</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        label={t("membership.field_amount_euro")}
                        type="number"
                        fullWidth
                        value={amount}
                        inputProps={{ min: 1 }}
                        onChange={(e) => {
                            const value = Number(e.target.value);
                            if (value >= 1 || e.target.value === "") {
                                setAmount(e.target.value);
                            }
                        }}
                        className="bodyRegularText4"
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>{t("membership.btn_cancel")}</Button>
                    <Button onClick={handleTopUp} variant="contained" color="primary">
                        {t("membership.btn_top_up")}
                    </Button>
                </DialogActions>
            </Dialog> */}
            {/* Top-Up Popup */}
            {open && (
                <>
                    {/* Overlay for click outside to close */}
                    <Box
                        onClick={handleClose}
                        sx={{
                            position: "fixed",
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            bgcolor: "rgba(0, 0, 0, 0.5)",
                            zIndex: 1300,
                        }}
                    />
                    <Box
                        sx={{
                            position: "fixed",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            bgcolor: "#323232ff",
                            borderRadius: "12px",
                            p: { xs: 2, sm: 4, md: 5 },
                            py: { xs: 4, sm: 4, md: 5 },
                            width: { xs: "90%", sm: 400 },
                            zIndex: 1301,
                            color: "#fff",
                            boxShadow: 24,
                        }}
                    >
                    {/* Close Button */}
                    <IconButton
                        onClick={handleClose}
                        sx={{ position: "absolute", top: 8, right: 8, color: "#fff" }}
                    >
                        <CloseIcon />
                    </IconButton>

                    {/* Header */}
                    <Typography className="headings-h5"  sx={{ fontWeight: 600, mb: 3 }}>
                        {t("membership.dialog_top_up_balance")}
                    </Typography>
                    {/* <Typography sx={{ color: "#C2C2C4", mb: 3, fontSize: 14 }}>
                        Top up your NAF wallet for quick and easy payments
                    </Typography> */}

                    {/* Amount Input */}
                    <TextField
                        autoFocus
                        placeholder={t("membership.enter_amount")}
                        type="number"
                        fullWidth
                        value={amount}
                        inputProps={{
                            style: { MozAppearance: "textfield" } // for Firefox
                        }}
                        onChange={(e) => {
                            const value = Number(e.target.value);
                            if (value >= 0 || e.target.value === "") {
                                setAmount(e.target.value);
                            }
                        }}
                        sx={{
                            input: {
                                color: "#fff",
                                "&::-webkit-outer-spin-button": { WebkitAppearance: "none", margin: 0 }, // Chrome/Safari
                                "&::-webkit-inner-spin-button": { WebkitAppearance: "none", margin: 0 },
                            },
                            mb: 2,
                            "& .MuiOutlinedInput-root": { bgcolor: "#262626", borderRadius: "8px" },
                            "& .MuiOutlinedInput-notchedOutline": { borderColor: "#555" },
                        }}
                    />

                    {/* Quick Select Buttons */}
                    <Box sx={{ display: "flex", gap: 2, mb: 3 }}>
                        {[20, 50, 100].map((amt) => (
                            <Button  className="bodyMediumText3"
                                key={amt}
                                variant="outlined"
                                onClick={() => setAmount(amt)}
                                sx={{
                                    borderColor: "#555",
                                    color: "#fff",
                                    flex: 1,
                                    "&:hover": { borderColor: "#7FEE64" },
                                    borderRadius: "8px",
                                }}
                            >
                                € {amt}
                            </Button>
                        ))}
                    </Box>

                    {/* Action Buttons */}
                    <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 2,mt:5 }}>
                        <Button className="bodyMediumText3"
                            onClick={handleClose}
                            sx={{
                                borderColor: "#555",
                                color: "#fff",
                                borderRadius: "8px",
                                textTransform: "none",
                                px: 3,
                            }}
                            variant="outlined"
                        >
                            {t("membership.btn_cancel")}
                        </Button>
                        <Button  className="bodyMediumText3"
                            onClick={handleTopUp}
                            sx={{
                                bgcolor: "#7FEE64",
                                color: "#262626",
                                borderRadius: "8px",
                                textTransform: "none",
                                px: 3,
                                "&:hover": { bgcolor: "#65e050" },
                            }}
                            variant="contained"
                        >
                            {t("membership.btn_top_up")}
                        </Button>
                    </Box>
                </Box>
            </>)}

            {/* Snackbar for messages */}
            <Snackbar
                open={snackbarOpen}
                autoHideDuration={4000}
                onClose={handleSnackbarClose}
                anchorOrigin={{ vertical: "top", horizontal: "center" }}
            >
                <Alert onClose={handleSnackbarClose} severity={snackbarSeverity} sx={{ width: "100%" }}>
                    {snackbarMessage}
                </Alert>
            </Snackbar>
        </Box>
    );
};

export default Balance;