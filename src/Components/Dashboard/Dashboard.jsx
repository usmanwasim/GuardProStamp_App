import { useState } from "react";
import { styled } from "@mui/material/styles";
import { Box, useMediaQuery, Toolbar, IconButton, Stack } from "@mui/material";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import { Menu, WindowSharp } from "@mui/icons-material";

import Header from "./Header";
import MobDrawer from "./mobDrawer";
import { Outlet } from "react-router-dom";

const drawerWidth = 200;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(10)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",

  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer - 1,
  [theme.breakpoints.up("xs")]: {
    paddingRight: "0px !important",
  },
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: "100%",
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

// =-=-==-=-=-=-=-=-=-=--=-=-=--=-=-=-=----=-=-=-=-=-=-=-=-=-=---=-=

export default function Dashboard() {
  const [open, setOpen] = useState(false);
  const matches = useMediaQuery("(max-width:900px)");

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: "#fff !important",
          width: { xs: "100%", md: `calc(100% - ${drawerWidth}px)` },
          ml: `${drawerWidth}px`,
        }}
        open={open}
      >
        <Toolbar display="flex">
          <IconButton
            aria-label="open drawer"
            onClick={() => {
              setOpen((pre) => (pre === true ? false : true));
            }}
            sx={{
              color: "#000",
              marginRight: 2,
              // ...(open && { display: { xs: "block", md: "none" } }),
              display: { xs: "block", md: "none" },
            }}
          >
            <Menu sx={{ width: "100%" }} />
          </IconButton>
          <Header sx={{ width: "100%" }} />
        </Toolbar>
      </AppBar>
      {matches ? (
        <MobDrawer open={open} setOpen={setOpen} />
      ) : (
        <Drawer
          variant="permanent"
          open={true}
          sx={{
            "& .MuiDrawer-paper": {
              pt: "120px !important",
              backgroundColor: "#00B26A !important",
              border: "none !important",
            },
          }}
        >
          <Stack
            direction="row"
            sx={{
              gap: 2,
              justifyContent: "center",
              alignItems: "center",
              color: "#fff",
              cursor: "pointer",
              borderLeft: "5px solid #fff",
            }}
          >
            <WindowSharp />
            Dashboard
          </Stack>
        </Drawer>
      )}

      <Box component="main" id="main component id" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Outlet />
      </Box>
    </Box>
  );
}
