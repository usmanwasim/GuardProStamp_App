import { Box, Button, Container } from "@mui/material";
import adminimg from "../assets/Images/adminimg.png";

export default function AdminDesktop1() {
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
          <Box component={"img"} src={adminimg} alt="img" width={"100%"} />
          <Button
            sx={{
              borderRadius: "15px",
              background: "#3821A5",
              color: "#fff",
              width: "100%",
              height: "45px",
              mt: { xs: 2, md: 3 },
              textTransform: "Capitalize",
            }}
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
            }}
          >
            Login
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
