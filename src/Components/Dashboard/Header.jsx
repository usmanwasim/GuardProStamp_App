import { Box, Popover, Stack, Typography } from "@mui/material";
import { PersonRounded } from "@mui/icons-material";
import LOGO from "../../assets/Images/Logo.png";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const togglePage = () => {
    if (location.pathname === "/") {
      navigate("/adminpage");
    } else if (location.pathname === "/adminpage") {
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
        <PersonRounded
          aria-owns={open ? "mouse-over-popover" : undefined}
          aria-haspopup="true"
          onMouseEnter={handlePopoverOpen}
          onMouseLeave={handlePopoverClose}
          sx={{
            color: "#3821A5",
            cursor: "pointer",
          }}
          onClick={() => {
            togglePage();
          }}
        />
        {["/", "/adminpage"].includes(location.pathname) && (
          <Popover
            id="mouse-over-popover"
            sx={{
              pointerEvents: "none",
            }}
            open={open}
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "center",
              horizontal: "left",
            }}
            transformOrigin={{
              vertical: "center",
              horizontal: "right",
            }}
            onClose={handlePopoverClose}
            disableRestoreFocus
          >
            <Typography sx={{ p: "2px 5px" }}>
              {(location.pathname === "/" && "Admin") ||
                (location.pathname === "/adminpage" && "Plan Checker")}
            </Typography>
          </Popover>
        )}
      </Stack>
    </Box>
  );
}
