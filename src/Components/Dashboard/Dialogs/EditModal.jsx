import { Close } from "@mui/icons-material";
import {
  Box,
  Button,
  Dialog,
  // InputAdornment,
  InputBase,
  MenuItem,
  Select,
  Slide,
  Stack,
} from "@mui/material";
import React, { useState } from "react";
import PropTypes from "prop-types";
import axiosApiInstance from "../../../api/api";
import { toast } from "react-toastify";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
export default function EditModal({ open, setOpen, data, setData }) {
  const [status, setStatus] = useState("");
  const handleChangeStatus = async () => {
    try {
      let response = await axiosApiInstance.post(
        `${import.meta.env.VITE_BASE_URL}users/userStatus`,
        {
          id: data?._id,
          status: status,
        }
      );
      if (response?.data?.status === "success") {
        toast.success(response?.data?.message);
        setOpen(false);
        setData({});
        return;
      }
    } catch (error) {
      toast.error(error?.response?.data?.message);
      console.log(error?.response?.data?.message, "response");
    }
  };

  const options = ["Approve", "Pending for more clarification", "Deny"];
  return (
    <Box position={"relative"}>
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
          onClick={() => setOpen(false)}
        >
          <Close color="#fff" />
        </Box>
        <Box sx={{ p: { xs: 2, sm: 3.5, md: 5 } }}>
          <Stack
            direction="row"
            gap={5}
            alignItems={"center"}
            justifyContent={"right"}
            my={{ xs: 1, sm: 2 }}
          >
            <Box
              sx={{
                color: "#000",
                fontFamily: "Poppins",
                fontSize: { xs: "12px", sm: "16px", md: "20px" },
                fontStyle: "normal",
                fontWeight: "600",
                lineHeight: "normal",
              }}
            >
              Name:
            </Box>
            <InputBase
              value={data?.name}
              readOnly
              sx={{
                borderRadius: "12px",
                border: "1px solid #4CECB2",
                background: "rgba(76, 236, 178, 0.10)",
                p: "4px 10px",
                minWidth: { xs: "200px", sm: "250px" },
              }}
            />
          </Stack>
          <Stack
            direction="row"
            gap={5}
            alignItems={"center"}
            justifyContent={"right"}
            my={{ xs: 1, sm: 2 }}
          >
            <Box
              sx={{
                color: "#000",
                fontFamily: "Poppins",
                fontSize: { xs: "12px", sm: "16px", md: "20px" },
                fontStyle: "normal",
                fontWeight: "600",
                lineHeight: "normal",
              }}
            >
              Email:
            </Box>
            <InputBase
              value={data?.email}
              readOnly
              sx={{
                borderRadius: "12px",
                border: "1px solid #4CECB2",
                background: "rgba(76, 236, 178, 0.10)",
                p: "4px 10px",
                minWidth: { xs: "200px", sm: "250px" },
              }}
            />
          </Stack>
          {/* <Stack
            direction="row"
            gap={5}
            alignItems={"center"}
            justifyContent={"right"}
            my={{ xs: 1, sm: 2 }}
          >
            <Box
              sx={{
                color: "#000",
                fontFamily: "Poppins",
                fontSize: { xs: "12px", sm: "16px", md: "20px" },
                fontStyle: "normal",
                fontWeight: "600",
                lineHeight: "normal",
              }}
            >
              Password:
            </Box>
            <InputBase
              sx={{
                borderRadius: "12px",
                border: "1px solid #4CECB2",
                background: "rgba(76, 236, 178, 0.10)",
                p: "4px 10px",
                minWidth: { xs: "200px", sm: "250px" },
              }}
            />
          </Stack> */}
          <Stack
            direction="row"
            gap={5}
            alignItems={"center"}
            justifyContent={"right"}
            my={{ xs: 1, sm: 2 }}
          >
            <Box
              sx={{
                color: "#000",
                fontFamily: "Poppins",
                fontSize: { xs: "12px", sm: "16px", md: "20px" },
                fontStyle: "normal",
                fontWeight: "600",
                lineHeight: "normal",
              }}
            >
              Status:
            </Box>
            <Select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              sx={{
                borderRadius: "12px",
                border: "1px solid #4CECB2",
                background: "rgba(76, 236, 178, 0.10)",
                p: "4px 10px",
                minWidth: { xs: "200px", sm: "250px" },
                color: "#000",
                fontSize: { xs: "12px", sm: "14px", md: "16px" },
              }}
              input={<InputBase />}
              displayEmpty
            >
              {/* <MenuItem value={""} disabled sx={{ color: "#000" }}>
                Waiting for approval
              </MenuItem> */}
              {options.map((option, i) => (
                <MenuItem key={i} value={option}>
                  {option}
                </MenuItem>
              ))}
            </Select>
          </Stack>
          <Button
            sx={{
              borderRadius: "10px",
              background: "#3B17AD",
              color: "#FFF",
              textAlign: "center",
              fontFamily: "Poppins",
              fontStyle: "normal",
              fontWeight: "700",
              lineHeight: "normal",
              p: "10px 10px",
              fontSize: { xs: "13px", sm: "15px", md: "18px" },
              width: "100%",
              textTransform: "capitalize",
              mb: { xs: 1, sm: 1.5 },
              "&:hover": {
                color: "#3B17AD",
                border: "1px solid #3B17AD",
              },
            }}
            onClick={() => {
              handleChangeStatus();
            }}
          >
            Save
          </Button>
        </Box>
      </Dialog>
    </Box>
  );
}

EditModal.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
  setData: PropTypes.func.isRequired,
};
