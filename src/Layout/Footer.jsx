import { Box, Container, Stack } from "@mui/material";
import LOGO from "../assets/Images/Logo.png";
import { useLocation, useNavigate } from "react-router-dom";

export default function Footer() {
  const location = useLocation();
  const navigate = useNavigate();

  const togglePage = () => {
    if (location.pathname === "/") {
      navigate("/adminpage");
    } else if (location.pathname === "/adminpage") {
      navigate("/");
    }
  };
  return (
    <>
      <Box sx={{}}>
        <Container maxWidth="xl">
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            width="100%"
            // borderTop={"1px solid #59A694"}
          >
            <Box
              component={"img"}
              src={LOGO}
              alt="Logo"
              width={{ xs: "120px", sm: "150px", md: "180px" }}
            />
            <Stack direction="row" sx={{ gap: 5, alignItems: "center" }}>
              <Box sx={{}}>
                <Box>sales@guardprostamp.com</Box>
                {/* <Box sx={{ mt: 0.5 }}>
                  4 Peddlers Row Unit 299, Newark, DE 19702
                </Box> */}
              </Box>
              <Box
                sx={{
                  textTransform: "capitalize",
                  border: "1px solid #000",
                  height: "max-content",
                  padding: "7px 10px",

                  borderRadius: "7px",
                  fontSize: "0.9rem",
                  cursor: "pointer",
                }}
                onClick={() => {
                  togglePage();
                }}
              >
                {(location.pathname === "/" && "Admin") ||
                  (location.pathname === "/adminpage" && "Plan Checker")}
              </Box>
            </Stack>
          </Stack>
          <Box
            sx={{
              mt: 1,
              width: "100%",
              textAlign: "center",
              fontSize: "0.7rem",
            }}
          >
            COPYRIGHT © 2023 Guard ProStamp Inc, - ALL RIGHTS RESERVED.
          </Box>
        </Container>
      </Box>
    </>
  );
}
