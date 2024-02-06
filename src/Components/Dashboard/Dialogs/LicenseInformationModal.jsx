import {
  Box,
  Dialog,
  Slide,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { Close } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import axiosApiInstance from "../../../api/api";
import LicenseLinkModal from "./LicenseLinkModal";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function LicenseInformationModal({ open, setOpen, id }) {
  const [data, setData] = useState([]);
  const [licenseState, setLicenseState] = useState(false);
  const [currentLicense, setCurrentLicense] = useState({});

  const handleLicenseInfo = async () => {
    try {
      let response = await axiosApiInstance.get(
        `${import.meta.env.VITE_BASE_URL}licenses/dashboard`,
        {
          params: {
            id: id,
          },
        }
      );
      setData(response?.data?.data);
    } catch (error) {
      console.log(
        error?.response?.data?.message,
        "response for licenses info of user"
      );
    }
  };

  useEffect(() => {
    handleLicenseInfo();
  }, [id]);
  return (
    <>
      <LicenseLinkModal
        open={licenseState}
        setOpen={setLicenseState}
        data={currentLicense}
        setData={setCurrentLicense}
      />
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        // onClose={() => setOpen(false)}
        aria-describedby="alert-dialog-slide-description"
        sx={{
          "& .MuiDialog-paper": {
            overflow: "visible",
          },
        }}
      >
        <Box
          sx={{
            background: "#4CECB2",
            borderRadius: "50%",
            position: "absolute",
            top: "2%",
            left: "99.5%",
            p: "8px 10px",
            transform: "translate(-50%,-50%)",
            cursor: "pointer",
          }}
          onClick={() => {
            setData([]);
            setOpen(false);
          }}
        >
          <Close color="#fff" />
        </Box>
        <Box sx={{ p: { xs: 2, sm: 3.5, md: 5 } }}>
          <Box
            sx={{
              color: "#292D32",
              fontFamily: "Poppins",
              fontSize: { xs: "16px", sm: "24px" },
              fontStyle: "normal",
              fontWeight: "600",
              lineHeight: "normal",
              textAlign: "center",
              mb: { xs: 2, sm: 3, md: 4 },
            }}
          >
            {" "}
            Licensee Information
          </Box>
          {data?.length > 0 ? (
            <TableContainer>
              <Table sx={{ minWidth: 500 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Number</TableCell>
                    <TableCell align="right">state</TableCell>
                    <TableCell align="right">Category</TableCell>
                    <TableCell align="right">Documents</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data.map((item) => (
                    <TableRow
                      key={item?.name}
                      sx={{
                        "&:last-child td, &:last-child th": { border: 0 },
                        "&:nth-child td, &:nth-child th": { border: 1 },
                      }}
                    >
                      <TableCell component="th" scope="row">
                        {item?.licenseNumber}
                      </TableCell>
                      <TableCell align="right">{item?.stateName}</TableCell>
                      <TableCell align="right">
                        {item?.licenseCategory}
                      </TableCell>
                      <TableCell
                        align="right"
                        sx={{ textDecoration: "underline", cursor: "pointer" }}
                        onClick={() => {
                          setLicenseState(true);
                          setCurrentLicense(item);
                          setOpen(false);
                        }}
                      >
                        View Files
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          ) : (
            <Box sx={{ width: "max-content", mx: "auto" }}>No Data Found</Box>
          )}
        </Box>
      </Dialog>
    </>
  );
}
LicenseInformationModal.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};
