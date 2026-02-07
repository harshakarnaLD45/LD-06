import React, { useEffect, useState } from "react";
import {
    Box,
    Typography,
    Button,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    TableContainer,
    TablePagination, IconButton
} from "@mui/material";
import DownloadIcon from '@mui/icons-material/FileDownload';
import axios from "axios";
import * as XLSX from "xlsx";
import { useTranslation } from "react-i18next";
import './Membership.css';

const formatDate = (dateString) => {
    if (!dateString) return "-";
    // YYYY-MM-DD
    return dateString.slice(0, 10);
};

const formatTime = (dateString) => {
    if (!dateString) return "-";
    // HH:MM
    return dateString.slice(11, 16);
};

function TransactionHistory({ memberId, cardId }) {
    const { t, i18n } = useTranslation();
    const [transactions, setTransactions] = useState([]);
    const [page, setPage] = useState(0); // 1-based for frontend
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [totalCount, setTotalCount] = useState(0);
    const [selected, setSelected] = useState([]);

    const typeLabel = {
        Credit: t("membership.type_credit"),
        Debit: t("membership.type_debit"),
        Refund: "Refund",
    };

    const fetchTransactions = async () => {
        try {
            const token = localStorage.getItem("authToken");
            if (!token || !memberId) return;

            const params = {
                membershipCardNumber: cardId,
                page,
                size: rowsPerPage,
            };

            // if (startDate) {
            //     params.startDate = new Date(startDate).toISOString(); // ensure ISO format
            // }
            // if (endDate) {
            //     params.endDate = new Date(endDate).toISOString();
            // }

            const response = await axios.get(
                `https://staging-api.naf-cloudsystem.de/api/transactions/by-membership-card`,
                {
                    headers: { Authorization: `Bearer ${token}` },
                    params,
                }
            );

            setTransactions(response.data.transactions || []);
            setTotalCount(response.data.totalItems || 0);
        } catch (err) {
            console.error("Error fetching transactions:", err);
        }
    };

    useEffect(() => {
        fetchTransactions();
    }, [page, rowsPerPage, memberId, i18n.language]);

    const handleDownloadExcel = () => {
        if (transactions.length === 0) return;

        // 🔹 Daten für Excel vorbereiten
        const worksheet = XLSX.utils.json_to_sheet(
            transactions.map((row) => ({
                Zeit: formatTime(row.date),
                Datum: formatDate(row.date),
                Ort: row.location || "-",
                Menge: row.products_count || "-",
                Typ:
                    row.payment_type === "Credit"
                        ? "Gutschrift"
                        : row.payment_type === "Refund"
                            ? "Rückerstattung"
                            : "Lastschrift",
                Betrag:
                    (row.payment_type !== "Debit" ? "+" : "-") +
                    " € " +
                    row.amount,
            }))
        );

        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Transaktionen");

        // 🔹 Direkt herunterladen (kein „Speichern unter“)
        XLSX.writeFile(workbook, "Transaktionshistorie.xlsx");
    };

    const handleSelectAll = (event) => {
        if (event.target.checked) {
            setSelected(transactions.map((t) => t.id));
        } else {
            setSelected([]);
        }
    };

    const handleSelectOne = (id) => {
        setSelected((prev) =>
            prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
        );
    };

    useEffect(() => {
        const logClick = (e) => console.log("Global click target:", e.target);
        document.addEventListener("click", logClick);
        return () => document.removeEventListener("click", logClick);
    }, []);

    const handleDownloadTransaction = async (transactionId) => {
        try {
            const token = localStorage.getItem("authToken");
            const response = await axios.get(`https://staging-api.naf-cloudsystem.de/api/membership-cards/invoice/${transactionId}/pdf`,
                {
                    headers: { Authorization: `Bearer ${token}`, },
                    responseType: "blob",
                });
            const blob = new Blob([response.data], { type: "application/pdf" });
            const url = window.URL.createObjectURL(blob);
            const link = document.createElement("a");
            link.href = url;
            link.download = `invoice - ${transactionId}.pdf`;
            document.body.appendChild(link);
            link.click();
            link.remove();
            window.URL.revokeObjectURL(url);
        } catch (error) {
            console.error("Download failed:", error);
        }
    };

    return (
        <Box sx={{ pt: 3 }}>
            {/* Header */}
            <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
                <Typography className="headings-h4">
                    {t("membership.title_transaction_history")}
                </Typography>
                <Box display="flex" gap={2}>
                    {/* <Button
                        variant="outlined"
                        startIcon={<CalendarTodayIcon />}
                        sx={{
                            borderRadius: "30px",
                            textTransform: "none",
                            bgcolor: "#000",
                            color: "#fff",
                            borderColor: "#666",
                        }}
                    >
                        Select Date Range
                    </Button> */}
                    <Button
                        variant="contained"
                        endIcon={<DownloadIcon sx={{ color: "#000" }} />}
                        onClick={handleDownloadExcel}   // ✅ add handler here
                        className="bodyRegularText4"
                        sx={{
                            borderRadius: "30px",
                            textTransform: "none",
                            bgcolor: "#F4F4F4",
                            color: "#1A1A1A",
                            border: "1px solid #525252",
                            "&:hover": { bgcolor: "#F4F4F4" },
                            p: "12px 24px"
                        }}
                    >
                        {t("membership.btn_download")}
                    </Button>
                </Box>
            </Box>
            {/* <TableCell sx={{ color: "#FCFCFC", borderBottom: '1px solid #393939 !important' }} className="bodyRegularText3">
                <Checkbox
                    checked={selected.length > 0 && selected.length === transactions.length}
                    indeterminate={selected.length > 0 && selected.length < transactions.length}
                    onClick={(e) => e.stopPropagation()}
                    onChange={handleSelectAll}
                />
            </TableCell> */}

            {/* Table */}
            <TableContainer
                sx={{
                    borderRadius: "12px",
                    overflow: "hidden",
                    border: "1px solid #525252",
                    "@media (max-width:1250px)": {
                        overflowX: "auto",   // enable horizontal scroll
                        display: "block",    // make it scrollable block
                        whiteSpace: "nowrap", // prevent table cells from wrapping
                        // minWidth: 1200 // ensure a min width for scroll
                    }
                }}
            >
                <Table sx={{ minWidth: 1200 }}> {/* Ensure a min width for scroll */}
                    <TableHead>
                        <TableRow>
                            <TableCell
                                sx={{ color: "#FCFCFC", borderBottom: "1px solid #393939 !important" }}
                                className="bodyRegularText3"
                            >
                                {t("membership.col_time")}
                            </TableCell>
                            <TableCell
                                sx={{ color: "#FCFCFC", borderBottom: "1px solid #393939 !important" }}
                                className="bodyRegularText3"
                            >
                                {t("membership.col_date")}
                            </TableCell>
                            <TableCell
                                sx={{ color: "#FCFCFC", borderBottom: "1px solid #393939 !important" }}
                                className="bodyRegularText3"
                            >
                                {t("membership.col_location")}
                            </TableCell>
                            <TableCell
                                sx={{ color: "#FCFCFC", borderBottom: "1px solid #393939 !important" }}
                                className="bodyRegularText3"
                            >
                                {t("membership.col_quantity")}
                            </TableCell>
                            <TableCell
                                sx={{ color: "#FCFCFC", borderBottom: "1px solid #393939 !important" }}
                                className="bodyRegularText3"
                            >
                                {t("membership.col_type")}
                            </TableCell>
                            <TableCell
                                sx={{ color: "#FCFCFC", borderBottom: "1px solid #393939 !important" }}
                                className="bodyRegularText3"
                            >
                                {t("membership.col_amount")}
                            </TableCell>
                            <TableCell
                                sx={{ color: "#FCFCFC", borderBottom: "1px solid #393939 !important" }}
                                className="bodyRegularText3"
                            >
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {transactions.length > 0 ? (
                            transactions.map((row) => {
                                const isDebit = row.payment_type === "Debit";  // backend field
                                return (
                                    <TableRow
                                        key={row.id}
                                        hover={false}
                                        sx={{ cursor: "default" }}
                                    >
                                        {/* <TableCell className="bodyRegularText4" sx={{ borderBottom: '1px solid #393939 !important' }}>
                                            <Checkbox
                                                checked={selected.includes(row.id)}
                                                onClick={(e) => e.stopPropagation()}   // stops row/screen click bubbling
                                                onChange={() => handleSelectOne(row.id)}
                                            />
                                        </TableCell> */}
                                        <TableCell sx={{ color: "#FCFCFC", borderBottom: '1px solid #393939 !important' }} className="bodyRegularText4">
                                            {formatTime(row.date)}
                                        </TableCell>
                                        <TableCell sx={{ color: "#FCFCFC", borderBottom: '1px solid #393939 !important' }} className="bodyRegularText4">
                                            {formatDate(row.date)}
                                        </TableCell>
                                        <TableCell sx={{ color: "#FCFCFC", borderBottom: '1px solid #393939 !important' }} className="bodyRegularText4">
                                            {row.location || "-"}
                                        </TableCell>
                                        {/* <TableCell sx={{ color: "#FCFCFC" }} className="bodyRegularText4">
                                            {row.items?.join(", ") || "-"}
                                        </TableCell> */}
                                        <TableCell sx={{ color: "#FCFCFC", borderBottom: '1px solid #393939 !important' }} className="bodyRegularText4">
                                            {row.products_count || "-"}
                                        </TableCell>
                                        <TableCell className="bodyRegularText4" sx={{ color: "#FCFCFC", borderBottom: '1px solid #393939 !important' }}>
                                            {typeLabel[row.payment_type] || "-"}
                                        </TableCell>
                                        <TableCell className="bodyRegularText4"
                                            sx={{ color: !isDebit ? "#7FEE64" : "#FCFCFC", borderBottom: '1px solid #393939 !important' }}
                                        >
                                            {!isDebit ? "+" : "-"} € {row.amount}
                                        </TableCell>
                                        <TableCell
                                            align="center"
                                            sx={{ borderBottom: "1px solid #393939 !important" }}
                                        >
                                            {row.payment_type === "Debit" && row.id ? (
                                                <IconButton
                                                    onClick={() => handleDownloadTransaction(row.id)}
                                                    sx={{ color: "#FCFCFC" }}
                                                >
                                                    <DownloadIcon />
                                                </IconButton>
                                            ) : (
                                                "-"
                                            )}
                                        </TableCell>
                                    </TableRow>
                                );
                            })
                        ) : (
                            <TableRow>
                                <TableCell colSpan={8} sx={{ textAlign: "center", color: "#FCFCFC" }}>
                                    {t("membership.msg_no_transactions")}
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </TableContainer>

            {/* ✅ Footer Pagination */}
            <Box display="flex" justifyContent="center" alignItems="center" p={2}>
                <TablePagination
                    component="div"
                    count={totalCount}
                    page={page}
                    onPageChange={(event, newPage) => setPage(newPage)}
                    rowsPerPage={rowsPerPage}
                    onRowsPerPageChange={(event) => {
                        setRowsPerPage(parseInt(event.target.value, 10));
                        setPage(1);
                    }}
                    rowsPerPageOptions={[5, 10, 20, 50]}
                    sx={{
                        color: "#FCFCFC",
                        "& .MuiSvgIcon-root": { color: "#FCFCFC" },
                        "& .MuiTablePagination-select": { color: "#FCFCFC" },
                        "& .MuiTablePagination-actions button": { color: "#FCFCFC" },
                        "& .MuiTablePagination-toolbar": {
                            display: "flex",
                            justifyContent: "center",
                        },
                    }}
                />
            </Box>
        </Box>
    );
}

export default TransactionHistory;
