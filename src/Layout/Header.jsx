import {
  Box,
  Button,
  Container,
  Drawer,
  Hidden,
  IconButton,
  Popover,
  Stack,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { PersonRounded, MenuOutlined } from "@mui/icons-material";
import { useLocation, useNavigate } from "react-router-dom";

import LOGO from "../assets/Images/Logo.png";

const data = ["Home", "About", "Features", "Benefits", "Press Media", "FAQs"];

export default function Header() {
  const [state, setState] = useState(false);
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

  const list = () => (
    <Box py={{ xs: 2, sm: 3, md: 4 }}>
      <Box component={"img"} src={LOGO} alt="Logo" />
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="left"
        gap={{ xs: 2, sm: 3, md: 4 }}
        px={{ xs: 2, sm: 3, md: 4 }}
        mt={{ xs: 2, sm: 3, md: 4 }}
      >
        {data.map((item, i) => (
          <Typography
            key={i}
            sx={{
              color: "#000",
              fontFamily: "Fredoka",
              fontSize: "15px",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "normal",
              cursor: "pointer",
            }}
          >
            {item}
          </Typography>
        ))}
        <Button
          sx={{
            borderRadius: "5.044px",
            background:
              "linear-gradient(158deg, #4CECB2 -12.17%, #3821A5 170.16%)",
            color: "#fff",
            fontFamily: "Fredoka",
            fontSize: "15px",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "normal",
          }}
        >
          {" "}
          Contact Us
        </Button>
        <PersonRounded
          sx={{
            color: "#3821A5",
            cursor: "pointer",
            mx: "auto",
          }}
        />
      </Stack>
    </Box>
  );
  return (
    <Box>
      <Container>
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
          />
          <Hidden mdDown>
            <Stack
              direction="row"
              justifyContent="center"
              alignItems="center"
              gap={{ xs: 2, sm: 3, md: 4 }}
            >
              {data.map((item, i) => (
                <Typography
                  key={i}
                  sx={{
                    color: "#000",
                    fontFamily: "Fredoka",
                    fontSize: "15px",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "normal",
                    cursor: "pointer",
                  }}
                >
                  {item}
                </Typography>
              ))}
              <Button
                sx={{
                  borderRadius: "5.044px",
                  background:
                    "linear-gradient(158deg, #4CECB2 -12.17%, #3821A5 170.16%)",
                  color: "#fff",
                  fontFamily: "Fredoka",
                  fontSize: "15px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "normal",
                }}
              >
                {" "}
                Contact Us
              </Button>

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
          </Hidden>
          <Hidden mdUp>
            <IconButton onClick={() => setState(true)}>
              <MenuOutlined sx={{ color: "#434445" }} />
            </IconButton>
            <Drawer anchor="left" open={state} onClose={() => setState(false)}>
              {list()}
            </Drawer>
          </Hidden>
        </Stack>
      </Container>
    </Box>
  );
}
