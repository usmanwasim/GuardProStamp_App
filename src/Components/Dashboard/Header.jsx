import { Box, Stack } from "@mui/material";
import { PersonRounded } from "@mui/icons-material";
import LOGO from "../../assets/Images/Logo.png";
// import { useNavigate } from "react-router-dom";

export default function Header() {
  // const navigate = useNavigate();
  return (
    <Box width={"100%"}>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        width="100%"
        borderBottom={"1px solid #59A694"}
        py={1}
      >
        <Box
          component={"img"}
          src={LOGO}
          alt="Logo"
          width={{ xs: "120px", sm: "150px", md: "180px" }}
          onClick={() => {
            // navigate("/");
          }}
        />
        <PersonRounded
          sx={{
            color: "#3821A5",
            cursor: "pointer",
          }}
        />
      </Stack>
    </Box>
  );
}
