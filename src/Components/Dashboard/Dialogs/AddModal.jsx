import { Box, Button, Dialog, InputBase, Slide, Stack } from "@mui/material";
import React from "react";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
export default function EditModal({ open, setOpen }) {
  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={() => setOpen(false)}
      aria-describedby="alert-dialog-slide-description"
      minWidth="lg"
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
            placeholder="Name"
            sx={{
              borderRadius: "12px",
              border: "1px solid #4CECB2",
              background: "rgba(76, 236, 178, 0.10)",
              p: "6px 10px",
              width: "100%",
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
          />
        </Stack>

        <Button
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
        </Button>
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
        >
          Save
        </Button>
      </Box>
    </Dialog>
  );
}
