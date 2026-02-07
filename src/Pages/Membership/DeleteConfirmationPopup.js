import React from "react";
import { Box, Typography, Modal, Button } from "@mui/material";
import { useTranslation } from "react-i18next";

const DeleteConfirmationPopup = ({ open, onClose, onConfirm, errorMessage }) => {
    const { t } = useTranslation();

    return (
        <Modal open={open} onClose={onClose} closeAfterTransition>
            <Box
                sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    bgcolor: "#1A1A1A",
                    color: "#fff",
                    boxShadow: 24,
                    p: { xs: 1.5, sm: 3, md: 4 },
                    borderRadius: "12px",
                    width: { xs: "90%", sm: 400, md: 500 },
                }}
            >
                {/* Heading */}
                <Typography className="bodyMediumText2"  sx={{  color: "#C2C2C4", fontWeight: 600, mb: 2 }}>
                    {t("membership.heading_delete_membership")}
                </Typography>

                {/* Message */}
                <Typography  className="bodyRegularText4" sx={{ mb: 3, color: "#C2C2C4" }}>
                    {t("membership.msg_confirm_delete_membership")}
                </Typography>

                {/* Error Message */}
                {errorMessage && (
                    <Typography sx={{ color: 'red', mb: 2 }}>
                        {errorMessage}
                    </Typography>
                )}

                {/* Buttons */}
                <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 2 }}>
                    <Button className="bodyRegularText4"
                        variant="outlined"
                        onClick={onClose}
                        sx={{
                            borderColor: "#C2C2C4",
                            color: "#C2C2C4",
                            textTransform: "none",
                            px: { xs: 1.8, sm: 3, md: 4 },
                            py: 1,
                            borderRadius: "32px",
                            "&:hover": { borderColor: "#C2C2C4", bgcolor: "transparent" }
                        }}
                    >
                        {t("membership.btn_cancel")}
                    </Button>
                    <Button className="bodyRegularText4"
                        variant="contained"
                        onClick={onConfirm}
                        disabled={!!errorMessage}
                        sx={{
                            backgroundColor: "#FF5E5E",
                            color: "#fff",
                            textTransform: "none",
                            px: { xs: 1.8, sm: 3, md: 4 },
                            py: 1.5,
                            borderRadius: "32px",
                            "&:hover": { backgroundColor: "#FF3B3B" }
                        }}
                    >
                        {t("membership.btn_delete")}
                    </Button>
                </Box>
            </Box>
        </Modal>
    );
};

export default DeleteConfirmationPopup;
