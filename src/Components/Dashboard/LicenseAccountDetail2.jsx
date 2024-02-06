import {
    Box,
    Button,
    Checkbox,
    Paper,
    Stack,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography
} from "@mui/material";
import PropTypes from "prop-types";
import { useState } from "react";
import LicenseInformationModal from "./Dialogs/LicenseInformationModal";
// import { useNavigate } from "react-router-dom";

export default function LicenseAccountDetail2({
    data,

}) {
    // const Navigate = useNavigate();
    const [licenseInfo, setLicenseInfo] = useState(false);
    const [licenseID, setLicenseID] = useState("");

    return (
        <>
            <LicenseInformationModal
                open={licenseInfo}
                setOpen={setLicenseInfo}
                id={licenseID}
            />

            <Box>
                <Box
                    sx={{
                        borderRadius: "3px",
                        background: "#FFF",
                        boxShadow: "0px 0px 30px 0px rgba(76, 236, 178, 0.30)",
                        ml: 2,
                        mr: 2
                    }}
                >
                    <TableContainer
                        component={Paper}
                        sx={{
                            width: "100%",
                            "&::-webkit-scrollbar": {
                                height: "5px",
                                width: "5px",
                            },
                            "&::-webkit-scrollbar-thumb": {
                                background: "#50505040",
                            },
                            "&::-webkit-scrollbar-track": {
                                background: "transparent",
                            },
                        }}
                    >
                        <Table
                            sx={{ minWidth: "650px", p: 6, boxSizing: "border-box" }}
                            aria-label="simple table"
                        >
                            <TableHead>
                                <TableRow>
                                    <TableCell>
                                        <Stack direction="row" gap={1}>
                                        
                                            <Typography  sx={{ml:5}} fontWeight="bold">

                                                Name
                                            </Typography>
                                        </Stack>
                                    </TableCell>
                                    <TableCell align="left">
                                        <Typography  fontWeight="bold">
                                            Email
                                        </Typography>
                                    </TableCell>
                                    <TableCell align="left">
                                        <Typography  fontWeight="bold">

                                            License
                                            Payment
                                        </Typography>
                                    </TableCell>
                                    <TableCell align="left">
                                    <Typography  fontWeight="bold">
                                            
                                        Licensee
                                        <br /> Information
                                        </Typography>
                                    </TableCell>
                                    <TableCell align="left">
                                        <Typography  fontWeight="bold">
                                            Status
                                        </Typography>
                                    </TableCell>

                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {data.map((item, i) => (
                                    <TableRow
                                        key={i}
                                        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">
                                            <Stack sx={{ml:5}} direction="row" gap={1}>
                                          
                                                {`${item?.name || ''} ${item?.middleName || ''} ${item?.lastName || ''}`}
                                            </Stack>
                                        </TableCell>
                                        <TableCell align="left">{item?.email}</TableCell>
                                        <TableCell align="left">
                                            {item?.subscriptionMeta?.subscribed
                                                ? "Active Until"
                                                : "Not Subscribed"}
                                            <br />
                                            {item?.subscriptionMeta?.subscriptionEndDate}
                                        </TableCell>

                                        <TableCell
                                            align="left"
                                            sx={{ textDecoration: "underline" }}
                                            onClick={() => {
                                                setLicenseInfo(true);
                                                setLicenseID(item?._id);
                                            }}
                                        >
                                            View
                                        </TableCell>
                                        <TableCell align="left">{item?.status}</TableCell>

                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>

            </Box>
        </>
    );
}

LicenseAccountDetail2.propTypes = {
    data: PropTypes.array,

};
