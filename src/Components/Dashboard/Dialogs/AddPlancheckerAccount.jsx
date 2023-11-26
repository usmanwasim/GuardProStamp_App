import { Box, Button, Dialog, InputBase, Slide, Stack } from "@mui/material";
import React, { useState } from "react";
import PropTypes from "prop-types";
import { handleRegister } from "../../../api/api";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
export default function AddModal({ open, setOpen }) {
  const [data, setData] = useState({
    asPlanChecker: true,
    city: "",
    state: "",
    agency: "",
    department: "",
    name: "",
    email: "",
    password: "",
  });
  const [message, setMessage] = useState({ status: false, message: "" });

  const handleAddAccount = async () => {
    try {
      if (!data?.state) {
        setMessage({ status: false, message: "Please Enter State" });
      } else if (!data?.city) {
        setMessage({ status: false, message: "Please Enter City" });
      } else if (!data?.agency) {
        setMessage({ status: false, message: "Please Enter Agency" });
      } else if (!data?.department) {
        setMessage({ status: false, message: "Please Enter Department" });
      } else if (!data?.name) {
        setMessage({ status: false, message: "Please Enter Name" });
      } else if (!data?.email) {
        setMessage({ status: false, message: "Please Enter Email" });
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(data?.email)
      ) {
        setMessage({ status: false, message: "Invalid Email Format" });
      } else if (!data?.password) {
        setMessage({ status: false, message: "Please Enter Password" });
      } else {
        const resp = await handleRegister(data);
        if (resp?.data?.status == "success") {
          setMessage({
            status: true,
            message: resp?.data?.message,
          });
          setData({
            asPlanChecker: true,
            city: "",
            state: "",
            agency: "",
            department: "",
            name: "",
            email: "",
            password: "",
          });
          setOpen(false);
        }
      }
    } catch (err) {
      console.log(err);
      setMessage({ status: false, message: err?.response?.data?.message });
    }
  };
  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={() => setOpen(false)}
      aria-describedby="alert-dialog-slide-description"
    >
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
          Add New Account
        </Box>
        <Stack
          direction="column"
          sx={{
            gap: { xs: 1, sm: 1.5 },
            width: { xs: "auto", sm: "300px", md: "500px" },
          }}
        >
          <Stack
            direction="row"
            sx={{
              gap: { xs: 1, sm: 1.5 },
            }}
          >
            <InputBase
              placeholder="state"
              sx={{
                borderRadius: "12px",
                border: "1px solid #4CECB2",
                background: "rgba(76, 236, 178, 0.10)",
                p: "6px 10px",
                width: "100%",
              }}
              onChange={(e) => {
                setData({
                  ...data,
                  state: e.target.value,
                });
              }}
            />
            <InputBase
              placeholder="city"
              sx={{
                borderRadius: "12px",
                border: "1px solid #4CECB2",
                background: "rgba(76, 236, 178, 0.10)",
                p: "6px 10px",
                width: "100%",
              }}
              onChange={(e) => {
                setData({
                  ...data,
                  city: e.target.value,
                });
              }}
            />
          </Stack>
          <Stack
            direction="row"
            sx={{
              gap: { xs: 1, sm: 1.5 },
            }}
          >
            <InputBase
              placeholder="agency"
              sx={{
                borderRadius: "12px",
                border: "1px solid #4CECB2",
                background: "rgba(76, 236, 178, 0.10)",
                p: "6px 10px",
                width: "100%",
              }}
              onChange={(e) => {
                setData({
                  ...data,
                  agency: e.target.value,
                });
              }}
            />
            <InputBase
              placeholder="department"
              sx={{
                borderRadius: "12px",
                border: "1px solid #4CECB2",
                background: "rgba(76, 236, 178, 0.10)",
                p: "6px 10px",
                width: "100%",
              }}
              onChange={(e) => {
                setData({
                  ...data,
                  department: e.target.value,
                });
              }}
            />
          </Stack>

          <InputBase
            placeholder="Name"
            sx={{
              borderRadius: "12px",
              border: "1px solid #4CECB2",
              background: "rgba(76, 236, 178, 0.10)",
              p: "6px 10px",
              width: "100%",
            }}
            onChange={(e) => {
              setData({
                ...data,
                name: e.target.value,
              });
            }}
          />
          <InputBase
            placeholder="Email"
            sx={{
              borderRadius: "12px",
              border: "1px solid #4CECB2",
              background: "rgba(76, 236, 178, 0.10)",
              p: "6px 10px",
              width: "100%",
            }}
            onChange={(e) => {
              setData({
                ...data,
                email: e.target.value,
              });
            }}
          />

          <InputBase
            placeholder="Password"
            sx={{
              borderRadius: "12px",
              border: "1px solid #4CECB2",
              background: "rgba(76, 236, 178, 0.10)",
              p: "6px 10px",
              width: "100%",
            }}
            onChange={(e) => {
              setData({
                ...data,
                password: e.target.value,
              });
            }}
          />
        </Stack>

        {/* <Button
          sx={{
            display: "flex",
            mt: 3,
            p: "7px 15px",
            color: "#fff",
            borderRadius: "12px",
            background: "#3B17AD",
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: "600",
            fontSize: "13px",
            boxShadow: "0px 15px 25px 0px rgba(59, 23, 173, 0.25)",
            border: "1px solid #3821A5",
            "&:hover": {
              border: "1px solid #3821A5",
              color: "#3821A5",
            },
          }}
        >
          Upload Document
        </Button> */}
        <Button
          sx={{
            display: "flex",
            ml: "auto",
            mt: 3,
            p: "8px 25px",
            color: "#fff",
            borderRadius: "12px",
            background: "#4CECB2",
            boxShadow: "0px 15px 25px 0px #4CECB225",
            border: "1px solid #4CECB2",
            "&:hover": {
              border: "1px solid #4CECB2",
              color: "#4CECB2",
            },
          }}
          onClick={() => {
            handleAddAccount();
          }}
        >
          Save
        </Button>
        <Box sx={{ color: message?.status ? "#4CECB2" : "red" }}>
          {message?.message}
        </Box>
      </Box>
    </Dialog>
  );
}
AddModal.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
};
