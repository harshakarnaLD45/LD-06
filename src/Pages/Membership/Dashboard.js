import React, { useEffect, useState } from "react";
import {
    Box,
    Typography,
    Button,
    Divider,
} from "@mui/material";
import axios from "axios";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import Profile from "./Profile";
import Balance from "./Balance";
import TransactionHistory from "./TransactionHistory";
import './Membership.css';

const Dashboard = () => {
    const { t , i18n } = useTranslation();
    const { lang } = useParams();
    const [member, setMember] = useState(null);

    useEffect(() => {
        const fetchMemberDetails = async () => {
            try {
                const token = localStorage.getItem("authToken");
                const email = localStorage.getItem("authEmail");
                if (!token || !email) {
                    window.location.href = "/login";
                    return;
                }

                const response = await axios.get(
                    "https://staging-api.naf-cloudsystem.de/api/membership-cards/details",
                    {
                        headers: { Authorization: `Bearer ${token}` },
                        params: { email },
                    }
                );
                setMember(response.data);
            } catch (error) {
                console.error("Error fetching member details:", error);
                localStorage.removeItem("authToken");
                localStorage.removeItem("authEmail");
                window.location.href = "/login";
            }
        };

        fetchMemberDetails();
    }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
    useEffect(() => {
    }, [i18n.language]);

    const handleLogout = () => {
        localStorage.removeItem("authToken");
        localStorage.removeItem("authEmail");
        window.location.href = `/${lang}/membership`; 
    };

    return (
        <Box className="section-container menucontainer" sx={{ mb: 0 }}>
            {/* Welcome Banner */}
            <Box
                sx={{
                    bgcolor: "#FA7854",
                    p: 3,
                    borderRadius: "24px",
                    pt: { xs: 6, sm: 10, md: 12 },
                    mb: 3,
                }}
            >
                <Typography variant="h5" color="#FCFCFC" className="bodyRegularText2">{t("membership.label_welcome")}</Typography>
                <Typography variant="h3" color="#FCFCFC" className="headings-h1" sx={{ m: 0, p: 0 }}>
                    {member?.firstName}
                </Typography>
            </Box>

            {/* Membership number + logout */}
            <Box className="Membership_logout" sx={{ mb: 2, display: { sm: 'flex', md: 'flex' }, justifyContent: 'space-between', alignItems: 'center' }}>
                <Box>
                    <Typography variant="subtitle2" color="#FCFCFC" className="bodyMediumText1">{t("membership.label_membership")}</Typography>
                    <Typography color="#C2C2C4" className="bodyRegularText4">{member?.cardNumber}</Typography>
                </Box>
                <Box>
                    <Button className="logout-btn bodyRegularText4"
                        variant="outlined"
                        onClick={handleLogout}
                        sx={{
                            border: "1px solid #525252",
                            borderRadius: "32px",
                            p: "12px 24px",
                            color: "#FCFCFC",
                            textTransform: "none",
                            "&:hover": { borderColor: "#FA7854", color: "#FA7854" },
                        }}
                    >
                        {t("membership.btn_logout")}
                    </Button>
                </Box>
            </Box>

            <Divider sx={{ bgcolor: "#525252" }} />

            {/* Profile */}
            <Profile data={member} onUpdate={(updated) => setMember(updated)} />

            {/* Balance */}
            <Balance
                balance={member?.balance || 0}
                token={localStorage.getItem("authToken")}
                onAdd={() => console.log("Add Balance clicked")}
                cardNumber={member?.cardNumber || 0}
            />

            {/* Transaction History */}
            <TransactionHistory memberId={member?.id} cardId={member?.cardNumber} />
        </Box>
    );
};

export default Dashboard;
