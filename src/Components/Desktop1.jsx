import { Box, Button, Container } from "@mui/material";
import checkerloginimg from "../assets/Images/checkerloginimg.png";
import adminloginimg from "../assets/Images/adminloginimg.png";
import { useLocation, useNavigate } from "react-router-dom";

export default function Desktop1() {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <Box
      sx={{
        height: "89vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container maxWidth="xs">
        <Box
          sx={{
            width: { xs: "80%", sm: "70%" },
            height: "100%",
            mx: "auto",
          }}
        >
          <Box
            component={"img"}
            src={
              location.state.history === "/adminpage"
                ? adminloginimg
                : checkerloginimg
            }
            alt="img"
            width={"100%"}
          />
          <Button
            sx={{
              borderRadius: "15px",
              color: "#3B17AD",
              border: "1px solid #3B17AD",

              width: "100%",
              height: "45px",
              mt: { xs: -2, md: -3 },
              textTransform: "Capitalize",
              "&:hover": {
                background: "#3821A5",
                color: "#fff",
              },
            }}
            onClick={() => navigate("/login")}
          >
            Login
          </Button>
          <Button
            sx={{
              borderRadius: "15px",
              border: "1px solid #3821A5",
              color: "#3821A5",
              width: "100%",
              height: "45px",
              mt: { xs: 2, md: 3 },
              textTransform: "Capitalize",
              "&:hover": {
                background: "#3821A5",
                color: "#fff",
              },
            }}
            onClick={() => navigate("/signup")}
          >
            Signup
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
