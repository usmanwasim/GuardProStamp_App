import { Box, Button, Container } from "@mui/material";
import checkerloginimg from "../assets/Images/checkerimg.png";
import { useLocation, useNavigate } from "react-router-dom";

export default function Desktop2() {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        background: "linear-gradient(180deg, #4CECB2 0%, #427BAF 100%)",
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
            src={checkerloginimg}
            alt="img"
            width={"100%"}
          />
          <Button
            sx={{
              borderRadius: "15px",
              background: "#fff",
              color: "#3821A5",
              width: "100%",
              height: "45px",
              mt: { xs: 2, md: 3 },
              textAlign: "center",
              fontFamily: "Poppins",
              fontSize: { xs: "15px", sm: "18px" },
              fontStyle: "normal",
              fontWeight: "600",
              lineHeight: "normal",
              textTransform: "Capitalize",
              "&:hover": {
                color: "#fff",
                border: "1px solid #fff",
              },
            }}
            onClick={() => {
              navigate("/loginpage", { state: { history: location.pathname } });
            }}
          >
            Plan Checker
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
