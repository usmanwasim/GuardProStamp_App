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
} from "@mui/material";
import PropTypes from "prop-types";
import { useState } from "react";
import LicenseInformationModal from "./Dialogs/LicenseInformationModal";
// import { useNavigate } from "react-router-dom";

export default function LicenseAccountDetail({
  data,
  setAdd,
  setEdit,
  setDel,
  setDelData,
  setEditData,
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
                      <Checkbox
                        sx={{
                          fontSize: { xs: "12px", sm: "10px" },
                          p: 0,
                          mr: { xs: 1, sm: 1.5 },
                          color: "#ADA7A7",
                          "&.Mui-checked": {
                            color: "#ADA7A7",
                          },
                        }}
                      />
                      Name
                    </Stack>
                  </TableCell>
                  <TableCell align="left">Email</TableCell>
                  <TableCell align="left">
                    License <br />
                    Payment
                  </TableCell>
                  <TableCell align="left">
                    Licensee
                    <br /> Information
                  </TableCell>
                  <TableCell align="left">Status</TableCell>
                  <TableCell align="left">Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((item, i) => (
                  <TableRow
                    key={i}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      <Stack direction="row" gap={1}>
                        <Checkbox
                          sx={{
                            fontSize: { xs: "12px", sm: "10px" },
                            p: 0,
                            mr: { xs: 1, sm: 1.5 },
                            color: "#ADA7A7",
                            "&.Mui-checked": {
                              color: "#ADA7A7",
                            },
                          }}
                        />
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
                    <TableCell align="left">
                      <Stack direction="row" gap={1}>
                        <Button
                          size="small"
                          sx={{
                            bgcolor: "#4CECB2",
                            border: "1px solid #4CECB2",
                            color: "#000",
                            "&:hover": {
                              border: "1px solid #4CECB2",
                              color: "#4CECB2",
                            },
                          }}
                          onClick={() => {
                            setEditData(item);
                            setEdit(true);
                          }}
                        >
                          Edit
                        </Button>
                        <Button
                          size="small"
                          sx={{
                            bgcolor: "#3821A5",
                            border: "1px solid #3821A5",
                            color: "#fff",
                            "&:hover": {
                              border: "1px solid #3821A5",
                              color: "#3821A5",
                            },
                          }}
                          onClick={() => {
                            setDelData(item);
                            setDel(true);
                          }}
                        >
                          Delete
                        </Button>
                      </Stack>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
        <Button
          sx={{
            display: "flex",
            mr: { xs: 2, sm: 3, md: 4 },
            ml: "auto",
            mt: 3,
            p: "10px 35px",
            color: "#fff",
            borderRadius: "15px",
            background: "#3B17AD",
            boxShadow: "0px 15px 25px 0px rgba(59, 23, 173, 0.25)",
            border: "1px solid #3821A5",
            "&:hover": {
              border: "1px solid #3821A5",
              color: "#3821A5",
            },
          }}
          onClick={() => {
            setAdd(true);
            // Navigate("/signup");
          }}
        >
          Add
        </Button>
      </Box>
    </>
  );
}

LicenseAccountDetail.propTypes = {
  data: PropTypes.array,
  setAdd: PropTypes.func,
  setEdit: PropTypes.func,
  setDel: PropTypes.func,
  setDelData: PropTypes.func,
  setEditData: PropTypes.func,
};
