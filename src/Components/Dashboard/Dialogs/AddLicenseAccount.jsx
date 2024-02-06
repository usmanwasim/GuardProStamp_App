import { Box, Button, Dialog, InputBase, Slide, Stack } from "@mui/material";
import React, { useState } from "react";
import PropTypes from "prop-types";
import { handleRegister } from "../../../api/api";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
export default function AddModal({ open, setOpen }) {
  const [data, setData] = useState({
    first: "",
    middle: "",
    last: "",
    dateOfBirth: "",
    email: "",
    password: "",
  });
  const [message, setMessage] = useState({ status: false, message: "" });
  const handleAddAccount = async () => {
    try {
      const validPassword = new RegExp("^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$");
      if (!data?.first) {
        setMessage({ status: false, message: "Please Enter First Name" });
      } else if (!data?.email) {
        setMessage({ status: false, message: "Please Enter Email" });
      }
      //  else if (!data?.dateOfBirth) {
      //   setMessage({ status: false, message: "Please Select Date Of Birth" });
      // }
      else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(data?.email)) {
        setMessage({ status: false, message: "Invalid Email Format" });
      } else if (!data?.password) {
        setMessage({ status: false, message: "Please Enter Password" });
      } else if (!validPassword.test(data?.password)) {
        setMessage({
          status: false,
          message: "Must Match Format : (Alphabet & Numerics) & length-6",
        });
      } else {
        const resp = await handleRegister({
          name: data?.first + " " + data?.middle + " " + data?.last,
          dateOfBirth: data?.dateOfBirth,
          email: data?.email,
          password: data?.password,
        });
        if (resp?.data?.status == "success") {
          setMessage({
            status: true,
            message: resp?.data?.message,
          });
          setData({
            first: "",
            middle: "",
            last: "",
            dateOfBirth: "",
            email: "",
            password: "",
          });
          // reload window for the user we added
          window.location.reload();
          setOpen(false);
        }
      }
    } catch (err) {
      console.log(err);
      setMessage({ status: false, message: err.response.data.message });
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
            width: { xs: "auto", sm: "300px", md: "400px" },
          }}
        >
          <InputBase
            placeholder="First Name"
            sx={{
              borderRadius: "12px",
              border: "1px solid #4CECB2",
              background: "rgba(76, 236, 178, 0.10)",
              p: "6px 10px",
              width: "100%",
            }}
            onChange={(e) => {
              setData({ ...data, first: e.target.value });
            }}
          />
          <InputBase
            placeholder="Middle Name"
            sx={{
              borderRadius: "12px",
              border: "1px solid #4CECB2",
              background: "rgba(76, 236, 178, 0.10)",
              p: "6px 10px",
              width: "100%",
            }}
            onChange={(e) => {
              setData({ ...data, middle: e.target.value });
            }}
          />
          <InputBase
            placeholder="Last Name"
            sx={{
              borderRadius: "12px",
              border: "1px solid #4CECB2",
              background: "rgba(76, 236, 178, 0.10)",
              p: "6px 10px",
              width: "100%",
            }}
            onChange={(e) => {
              setData({ ...data, last: e.target.value });
            }}
          />
          <InputBase
            type="date"
            placeholder="First Name"
            sx={{
              borderRadius: "12px",
              border: "1px solid #4CECB2",
              background: "rgba(76, 236, 178, 0.10)",
              p: "6px 10px",
              width: "100%",
            }}
            onChange={(e) => {
              // console.log(e.target.value.replace(/-/g, "/"));
              setData({
                ...data,
                dateOfBirth: e.target.value.replace(/-/g, "/"),
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
              setData({ ...data, email: e.target.value });
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
              setData({ ...data, password: e.target.value });
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
