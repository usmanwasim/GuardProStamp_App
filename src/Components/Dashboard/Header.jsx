import { Box, Button, Menu, MenuItem, Stack } from "@mui/material";
import { PersonRounded } from "@mui/icons-material";
import LOGO from "../../assets/Images/Logo.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { handleLoggedOut } from "../../api/api";

export default function Header() {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const loggedOut = async () => {
    let response = await handleLoggedOut();
    if (response?.data?.status == "success") {
      sessionStorage.removeItem("jwt-token");
      localStorage.removeItem("userData");
      navigate("/");
    }
  };

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
          sx={{ cursor: "pointer" }}
          onClick={() => {
            navigate("/");
          }}
        />
        <Button
          sx={{
            color: "#3821A5",
            background: "transparent",
            border: "1px solid #3821A5",
            cursor: "pointer",
            "&:hover": {
              background: "#3821A5",
              color: "white",
            },
          }}
          onClick={() => loggedOut()}
        >
          Logout
        </Button>
        {/* <PersonRounded
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          sx={{
            color: "#3821A5",
            cursor: "pointer",
          }}
        />
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem
            onClick={() => {
              loggedOut();
              handleClose();
            }}
          >
            logout
          </MenuItem>
        </Menu> */}
      </Stack>
    </Box>
  );
}
