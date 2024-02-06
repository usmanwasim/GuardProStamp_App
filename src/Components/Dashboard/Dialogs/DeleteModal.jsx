import { Close } from "@mui/icons-material";
import { Box, Button, Dialog, Slide, Stack } from "@mui/material";
import React from "react";

import PropTypes from "prop-types";
import { toast } from "react-toastify";
import axiosApiInstance from "../../../api/api";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function DeleteModal({ open, setOpen, data, setData }) {
  const handleDelete = async () => {
    try {
      let response = await axiosApiInstance.get(
        `${import.meta.env.VITE_BASE_URL}users/userDelete?id=${data?._id}`
      );
      if (response?.data?.status === "success") {
        toast.success(response?.data?.message);
        setOpen(false);
        setData();
        return;
      }
    } catch (error) {
      toast.error(error?.response?.data?.message);
      console.log(error?.response?.data?.message, "response");
    }
  };
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
          <Box
            sx={{
              color: "#292D32",
              fontFamily: "Poppins",
              fontSize: "32px",
              fontStyle: "normal",
              fontWeight: "600",
              lineHeight: "normal",
            }}
          >
            Confirm to Delete?
          </Box>
          <Stack direction="row" gap={5} justifyContent={"center"} mt={5}>
            <Button
              sx={{
                borderRadius: "12.695px",
                background: "#ADA7A7",
                padding: "10px 30px",
                color: "#fff",
                border: " 1px solid #ADA7A7",
                "&:hover": {
                  border: " 1px solid #ADA7A7",
                  color: "#ADA7A7",
                },
              }}
              onClick={() => {
                handleDelete();
              }}
            >
              Yes
            </Button>
            <Button
              sx={{
                borderRadius: "12.695px",
                background: "#4CECB2",
                padding: "10px 30px",
                color: "#fff",
                border: " 1px solid #4CECB2",
                "&:hover": {
                  border: " 1px solid #4CECB2",
                  color: "#4CECB2",
                },
              }}
              onClick={() => {
                setOpen(false);
              }}
            >
              {" "}
              No
            </Button>
          </Stack>
        </Box>
      </Dialog>
    </Box>
  );
}

DeleteModal.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
  setData: PropTypes.func.isRequired,
};
