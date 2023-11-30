import { Box, Container } from "@mui/material";
import DoneImg from "../assets/Images/DoneImg.png";

export default function SignupRedirect() {
  return (
    <>
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
        <Container maxWidth="xs" sx={{ textAlign: "center" }}>
          <Box
            component={"img"}
            src={DoneImg}
            alt="img"
            sx={{ width: { xs: "80%" } }}
          />
          <Box
            sx={{
              textAlign: "center",
              color: "#fff",
              fontWeight: "500",
              fontSize: "1.4rem",
            }}
          >
            Your account signup is completed,
            <br /> please wait for account approval
          </Box>
        </Container>
      </Box>
    </>
  );
}
