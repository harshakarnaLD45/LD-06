import React, { useEffect, useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { Box, Typography, Button, Paper, IconButton, Divider, Link } from "@mui/material";
import axios from "axios";
import { useTranslation } from "react-i18next";
import MpinValidationPage from "./MpinValidationPage"; // ✅ reuse same MPIN component

import BackBTN from "../../assets/membership/back.svg";
import errorBalance from "../../assets/membership/ErrorBalance.svg";
import {
  // Box, 
  // Typography, 
  Checkbox,
  FormControlLabel
} from '@mui/material';
import './Membership.css';

const PaymentPage = () => {
  const { t, i18n } = useTranslation();
  const { lang, machineNumber, amount } = useParams();
  const amountInEuros = parseFloat(amount) / 100;
  const navigate = useNavigate();

  const [member, setMember] = useState(null);
  const [status, setStatus] = useState("init"); // init | ready | insufficient | success | failed | loading
  const [searchParams] = useSearchParams();
  const skipMpin = searchParams.get("skipMpin") === "true";
  // if skipMpin=true → user just logged in from MembershipPage → skip MPIN
  const [isMpinValidated, setIsMpinValidated] = useState(skipMpin);

  // Wallet checkbox state and helpers
  const [checked, setChecked] = useState(false);
  const handleChange = (event) => setChecked(event.target.checked);
  const walletBalance = member?.balance ? parseFloat(member.balance) : 0;
  const formatCurrency = (value) => {
    const numeric = typeof value === "number" ? value : parseFloat(value) || 0;
    try {
      return new Intl.NumberFormat(
        i18n?.language === "de" ? "de-DE" : i18n?.language === "fr" ? "fr-FR" : i18n?.language === "pl" ? "pl-PL" : i18n?.language === "es" ? "es-ES" : "en-US",
        { style: "currency", currency: "EUR", minimumFractionDigits: 2, maximumFractionDigits: 2 }
      ).format(numeric);
    } catch {
      return `€ ${numeric.toFixed(2)}`;
    }
  };

  // -----------------------------
  // Fetch membership data
  // -----------------------------
  const fetchMemberData = async () => {
    const token = localStorage.getItem("authToken");
    const email = localStorage.getItem("authEmail");
    setChecked(false)

    if (!token || !email) {
      // If no token/email, redirect to membership login
      navigate(
        `/${lang}/membership?redirect=/payment/${machineNumber}/${amount}`,
        { replace: true }
      );
      return;
    }

    try {
      const res = await axios.get(
        "https://staging-api.naf-cloudsystem.de/api/membership-cards/details",
        {
          headers: { Authorization: `Bearer ${token}` },
          params: { email },
        }
      );

      setMember(res.data);
      console.log(res.data, 'gggggg');
      console.log(parseFloat(amountInEuros));

      if (res.data.balance <= 0) {
        setStatus("insufficient");
      } else if (res.data.balance < parseInt(amountInEuros)) {
        setStatus("insufficient");
      } else {
        setStatus("ready");
      }
    } catch {
      setStatus("failed");
    }
  };

  // -----------------------------
  // On mount: check if user already logged in
  // -----------------------------
  useEffect(() => {
    const token = localStorage.getItem("authToken");
    const email = localStorage.getItem("authEmail");

    if (!token || !email) {
      // Not logged in → redirect to Membership page
      navigate(
        `/${lang}/membership?redirect=/payment/${machineNumber}/${amount}`,
        { replace: true }
      );
    } else {
      if (!skipMpin) {
        // Only force MPIN if it's not a fresh login redirect
        setIsMpinValidated(false);
      }
    }
  }, [lang, machineNumber, amountInEuros, navigate]);

  // -----------------------------
  // After MPIN validated → fetch member data
  // -----------------------------
  useEffect(() => {
    if (isMpinValidated) {
      fetchMemberData();
    }
  }, [isMpinValidated]);

  // -----------------------------
  // Handle wallet payment
  // -----------------------------
  const handlePayment = async () => {
    try {
      setStatus("loading");
      const token = localStorage.getItem("authToken");

      const response = await axios.post(
        "https://staging-api.naf-cloudsystem.de/api/membership-cards/deduct-balance",
        null,
        {
          headers: { Authorization: `Bearer ${token}` },
          params: { membershipCardNumber: member?.cardNumber, amount: amountInEuros, machineNumber: machineNumber },
        }
      );

      if (response.data?.status === "success") {
        setStatus("success");
      } else {
        setStatus("failed");
      }
    } catch {
      setStatus("failed");
    } finally {
      setChecked(false)
    }
  };

  // -----------------------------
  // Show MPIN page first
  // -----------------------------
  if (!isMpinValidated) {
    return <MpinValidationPage onSuccess={() => setIsMpinValidated(true)} />;
  }

  // -----------------------------
  // After MPIN validated → show payment
  // -----------------------------
  return (
    <Box className="payment-main-container"
      sx={{
        minHeight: "100vh",
      }}
    >
      <Box className="payment-container-section">

        <Box className="payment-header" sx={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: 'space-between', gap: 2, }}>

          <Box>
            <IconButton sx={{ padding: '0px', }} onClick={() => navigate(`/${lang}/dashboard`, { replace: true })}>
              <img className="payment_backBTN" style={{ cursor: 'pointer' }} src={BackBTN} alt="back" />
            </IconButton>

          </Box>

          <Box  >
            <Typography
              className="bodyMediumText1"
              variant="h5"
              color="white"
              sx={{ fontWeight: "bold", textAlign: "center" }}
            >
              {t("membership.title_payment")}
            </Typography>
            <Typography
              className="bodyRegularText4 "
              color="white"

              sx={{ textAlign: "center" }}
            >
              {machineNumber}
            </Typography>
          </Box>


          <Box>
            <Typography className="bodyMediumText1"
              variant="h6"
              color={status === "insufficient" ? "#F95A3A" : "#7FEE64"}
              sx={{ opacity: status === "ready" || status === "insufficient" ? 1 : 0 }} >
              € {member?.balance ? parseFloat(member.balance).toFixed(2) : '0.00'}
            </Typography>
          </Box>



        </Box>

        <Divider className="horizantal_divider" sx={{ bgcolor: "#525252", width: '100%', height: '1px', margin: '20px 0px' }} />

        <Paper
          elevation={0}
          sx={{
            bgcolor: "transparent",
            textAlign: "center",
            width: "100%",
            maxWidth: "100%",

            overflow: "hidden",
            boxSizing: "border-box",
          }}
        >
          {status === "ready" && (
            <>
              <Box
                className="payment-totalAmount"
                sx={{
                  bgcolor: "#1c1c1c",
                  color: "white",
                  borderRadius: "16px",
                  p: "50px 20px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                  maxWidth: "100%",
                  width: "100%",
                  boxSizing: "border-box",
                }}>

                <Typography className="bodyMediumText1" variant="body2" sx={{ color: "#B8B8B8", opacity: 0.7 }}>
                  {t("membership.label_total_amount_to_be_paid")}
                </Typography>
                <Typography className="headings-h3" variant="h4" sx={{ fontWeight: "bold", color: "#FCFCFC" }}>
                  € {amountInEuros ? parseFloat(amountInEuros).toFixed(2) : '0.00'}
                </Typography>

              </Box>
              <Button
                className="bodyMediumText3"
                variant="contained"
                onClick={handlePayment}
                sx={{
                  color: "#1A1A1A",
                  borderRadius: "50px",
                  bgcolor: "#7FEE64",
                  textTransform: 'none',
                  px: 4,
                  py: 1.5,
                  mt: 3,
                  fontWeight: "bold",
                  "&:hover": { bgcolor: "#45a049" },
                }}
              >
                {t("membership.btn_pay_using_wallet")}
              </Button>

            </>
          )}

          {status === "success" && (
            <Box
              className="payment-totalAmount"
              sx={{
                color: "white",
                borderRadius: "16px",
                p: "50px 20px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                minHeight: "400px",
                maxWidth: "100%",
                width: "100%",
                boxSizing: "border-box",
              }}>
              <Typography className="headings-h3" variant="h4" sx={{ fontWeight: "bold", color: "#FCFCFC", mb: 1 }}>
                {t("membership.title_payment")}
              </Typography>
              <Typography className="headings-h3" variant="h4" sx={{ fontWeight: "bold", color: "#FCFCFC", mb: 6 }}>
                {t("membership.label_successful")}
              </Typography>

              <Link
                className="bodyMediumText3"
                variant="contained"
                onClick={() => navigate(`/${lang}/dashboard`, { replace: true })}
                sx={{
                  color: "#CFCFCF",
                  textTransform: 'none',
                  textDecoration: 'underline',
                  px: 4,
                  py: 1.5,
                  fontWeight: "bold",
                  "&:hover": { color: "#45a049" },
                }}
              >
                {t("membership.link_back_to_main_page")}
              </Link>
            </Box>
          )}

          {status === "failed" && (
            <Box
              className="payment-totalAmount"

              sx={{
                // bgcolor: "#1c1c1c",
                color: "white",
                borderRadius: "16px",
                p: "50px 20px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                minHeight: "400px",
                maxWidth: "100%",
                width: "100%",
                boxSizing: "border-box",
              }}>
              <Typography className="headings-h3" variant="h4" sx={{ fontWeight: "bold", color: "#FCFCFC", mb: 4 }}>
                {t("membership.title_payment_failed")}
              </Typography>

              <Button
                className="bodyMediumText3"
                variant="contained"
                onClick={fetchMemberData}
                sx={{
                  color: "#1A1A1A",
                  borderRadius: "50px",
                  bgcolor: "#FCFCFC",
                  textTransform: 'none',
                  px: 4,
                  py: 1.5,
                  mb: 6,
                  fontWeight: "bold",
                  "&:hover": { bgcolor: "#E0E0E0" },
                }}
              >
                {t("membership.btn_try_again")}
              </Button>

              <Box sx={{ display: "flex", alignItems: "center", mb: 4, width: "100%", maxWidth: "200px" }}>
                <Box sx={{ flex: 1, height: "1px", bgcolor: "#525252", width: '30%' }} />
                <Typography sx={{ mx: 2, color: "#B8B8B8", fontSize: "14px" }}>{t("membership.label_or")}</Typography>
                <Box sx={{ flex: 1, height: "1px", bgcolor: "#525252", width: '30%' }} />
              </Box>

              <Typography className="bodyRegularText3" variant="body2" sx={{ color: "#B8B8B8", lineHeight: 1 }}>
                {t("membership.msg_pay_directly_machine")}
              </Typography>
              <Typography className="bodyRegularText3" variant="body2" sx={{ mb: 4, color: "#B8B8B8", lineHeight: 1 }}>
                {t("membership.msg_using_credit_debit_card")}
              </Typography>

              {/* <Button
                className="bodyMediumText3"
                variant="outlined"
                sx={{
                  borderRadius: "50px",
                  borderColor: "#525252",
                  color: "#FCFCFC",
                  textTransform: 'none',
                  px: 4,
                  py: 1.5,
                  fontWeight: "bold",
                  "&:hover": {
                    borderColor: "#7FEE64",
                    bgcolor: "rgba(127, 238, 100, 0.1)"
                  }
                }}
              >
                Pay with Card
              </Button> */}
            </Box>
          )}

          {status === "insufficient" && (
            <>
              <Box
                sx={{ display: "flex", flexDirection: 'column', alignItems: "center", mb: 2 }}>

                <Box
                  className="payment-totalAmount"

                  sx={{
                    bgcolor: "#1c1c1c",
                    color: "white",
                    borderRadius: "16px",
                    p: "20px 20px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    maxWidth: "100%",
                    width: "100%",
                    boxSizing: "border-box",
                  }}>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}>
                    <img src={errorBalance} alt="error_Balance" style={{
                      height: "16px",
                      width: "16px",
                    }} />

                    <Typography className="bodyMediumText3"
                      variant="body1"
                      color="#F95A3A"
                      sx={{ mb: 1 }}
                    >
                      {t("membership.msg_insufficient_balance")}
                    </Typography>
                  </Box>
                  <Box className="wallet_check_sec"
                    sx={{ mb: 1 }}

                  >
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={checked}
                          onChange={handleChange}
                          disabled={walletBalance < 1}
                          sx={{
                            color: '#B8B8B8',
                            '&.Mui-checked': {
                              color: '#1976d2',
                            },
                          }}
                          inputProps={{
                            'aria-label': `Include wallet balance of ${formatCurrency(walletBalance)}`
                          }}
                        />
                      }
                      label={
                        <Typography
                          className="bodyMediumText3"
                          variant="body2"
                          sx={{ color: '#B8B8B8', ml: 1 }}
                        >
                          {t("membership.Include_Wallet_balance")} {formatCurrency(walletBalance)}
                        </Typography>
                      }
                    />
                  </Box>
                  <Typography className="headings-h3" variant="h4" mb={3} sx={{ fontWeight: "bold", color: "#FCFCFC" }}>
                    € {amountInEuros ? parseFloat(amountInEuros).toFixed(2) : '0.00'}
                  </Typography>

                  {/* <Button
                variant="outlined"
                sx={{ borderRadius: "50px", borderColor: "white", color: "white" }}
              >
                Pay with Card
                </Button> */}
                </Box>
                {/* <Typography className="bodyMediumText2" variant="body2" sx={{ mt: 4, color: "#FFF" }}>
                  {t("membership.msg_pay_directly_machine")}
                </Typography>
                <Typography className="bodyMediumText2" variant="body2" sx={{ mb: 2, color: "#FFF" }}>
                  {t("membership.msg_using_credit_debit_card")}
                </Typography> */}

                {/* Conditional Payment Button */}
                {checked && (
                  <Button
                    className="bodyMediumText3"
                    variant="contained"
                    onClick={handlePayment}
                    sx={{
                      color: "#1A1A1A",
                      borderRadius: "50px",
                      bgcolor: "#7FEE64",
                      textTransform: 'none',
                      px: 4,
                      py: 1.5,
                      mt: 3,
                      fontWeight: "bold",
                      "&:hover": { bgcolor: "#45a049" },
                    }}
                  >
                    {t("membership.btn_pay_using_wallet")}
                  </Button>
                )}

                <Typography className="bodyMediumText2" variant="body2" sx={{ mt: 4, color: "#FFF" }}>
                  {t("membership.msg_pay_directly_machine")}
                </Typography>
                <Typography className="bodyMediumText2" variant="body2" sx={{ mb: 2, color: "#FFF" }}>
                  {t("membership.msg_using_credit_debit_card")}
                </Typography>
              </Box>

            </>
          )}

          {status === "loading" && <Typography color="white">{t("membership.msg_processing")}</Typography>}
        </Paper>
      </Box>

    </Box>
  );
};

export default PaymentPage;
