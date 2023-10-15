import { Search } from "@mui/icons-material";
import { Box, InputBase, Stack, Tab, Tabs } from "@mui/material";
import PropTypes from "prop-types";
import { useState } from "react";
import PlanCheckerDetail from "./PlanCheckerDetail";
import LicenseAccountDetail from "./LicenseAccountDetail";
import DeleteModal from "./Dialogs/DeleteModal";
import EditModal from "./Dialogs/EditModal";
import AddModal from "./Dialogs/AddModal";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function AccountsDetails() {
  const [Del, setDel] = useState(false);
  const [add, setAdd] = useState(false);
  const [edit, setEdit] = useState(false);
  const [search, setSearch] = useState("");
  // Tabs state
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box sx={{}}>
      <DeleteModal open={Del} setOpen={setDel} />
      <EditModal open={edit} setOpen={setEdit} />
      <AddModal open={add} setOpen={setAdd} />
      <Box mb={{ xs: 2, sm: 3 }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          TabIndicatorProps={{ sx: { display: "none" } }}
          textColor="inherit"
        >
          {["Licensee Account", "Plan Checker"].map((text, i) => (
            <Tab
              key={i}
              label={
                <Box
                  sx={{
                    whiteSpace: "noWrap",
                    color: "#000",
                    fontFamily: "Poppins",
                    fontSize: { xs: "12px", sm: "15px", md: "18px" },
                    fontStyle: "normal",
                    fontWeight: "600",
                    lineHeight: "normal",
                    borderRadius: "7px",
                    background: "#4CECB2",
                    p: { xs: "8px 15px", sm: "15px 25px" },
                    textTransform: "capitalize",
                  }}
                >
                  {text}
                </Box>
              }
              {...a11yProps(i)}
            />
          ))}
        </Tabs>
      </Box>

      <Stack
        direction={"row"}
        sx={{
          alignItems: "center",
          borderRadius: "14px",
          border: "1px solid #4CECB2",
          background: "#FFF",
          boxShadow: "0px 0px 20px 0px rgba(76, 236, 178, 0.24)",
          fontSize: { xs: "12px", sm: "15px", md: "22px" },
          mb: { xs: 2, sm: 3, md: 4 },
        }}
      >
        <InputBase
          value={search}
          placeholder="Search..."
          onChange={(e) => setSearch(e.target.value)}
          sx={{
            width: "100%",
            pl: 2,
          }}
        />
        <Box
          sx={{
            p: { xs: "8px 20px", sm: "13px 35px" },
            bgcolor: "#4CECB2",
            borderRadius: "14px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Search />
        </Box>
      </Stack>
      <CustomTabPanel value={value} index={0}>
        <LicenseAccountDetail
          setAdd={setAdd}
          setEdit={setEdit}
          setDel={setDel}
        />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <PlanCheckerDetail setAdd={setAdd} setEdit={setEdit} setDel={setDel} />
      </CustomTabPanel>
    </Box>
  );
}
