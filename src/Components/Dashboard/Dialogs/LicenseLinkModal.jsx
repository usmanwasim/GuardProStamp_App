import React from "react";
import { Close } from "@mui/icons-material";
import PropTypes from "prop-types";
import { Box, Dialog, Slide, Stack } from "@mui/material";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function LicenseLinkModal({ open, setOpen, data, setData }) {
  return (
    <>
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
            setData({});
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
            View Files
          </Box>
          <Stack direction={"row"} spacing={2} sx={{ my: 0 }}>
            <Box
              sx={{
                borderRadius: "10px",
                p: "10px 25px",
                background: "#4CECB2",
                color: "#000",
              }}
              component={"a"}
              href={data?.uploadFrontId}
              target="_blank"
            >
              Front ID
            </Box>
            <Box
              sx={{
                borderRadius: "10px",
                p: "10px 25px",
                background: "#4CECB2",
                color: "#000",
              }}
              component={"a"}
              href={data?.uploadBackId}
              target="_blank"
            >
              Back ID
            </Box>
          </Stack>
          <Stack direction={"row"} spacing={10} sx={{ my: 1 }}>
            <Box
              sx={{
                borderRadius: "10px",
                p: "10px 25px",
                background: "#4CECB2",
                color: "#000",
                // cursor: "pointer",
              }}
              component={"a"}
              href={data?.uploadLicensePhoto}
              target="_blank"
            >
              License Photo
            </Box>
          </Stack>
        </Box>
      </Dialog>
    </>
  );
}

LicenseLinkModal.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
  setData: PropTypes.func.isRequired,
};
