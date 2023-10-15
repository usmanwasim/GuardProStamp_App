import { Box, Drawer, Stack } from "@mui/material";
import { WindowSharp } from "@mui/icons-material";
export default function MobDrawer({ open, setOpen }) {
  return (
    <>
      <Box>
        <Drawer
          variant="temporary"
          anchor={"left"}
          open={open}
          onClose={() => setOpen(false)}
          sx={{
            "& .MuiDrawer-paper": {
              pt: "80px !important",
              backgroundColor: "#00B26A !important",
              border: "none !important",
              width: { xs: "140px" },
              height: "100vh",
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
      </Box>
    </>
  );
}
