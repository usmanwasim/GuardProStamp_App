import { Box, Container, Tab, Tabs } from "@mui/material";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import PlanTab1 from "./PlanTab1";
import PlanTab2 from "./PlanTab2";
// socket connection
import { io } from "socket.io-client";
// Socket.IO connection
export const Socket = io.connect(`${import.meta.env.VITE_BASE_URL}`);
// -==-==-=-=-=-=-=-=-=-=-=-=====-==
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
export default function Index() {
  const [activeChatID, setactiveChatID] = useState();
  const [tab1State, setTab1State] = useState(false);
  // Tabs state
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  // socket User Connected And reference stored to online users
  let userData = JSON.parse(localStorage.getItem("userData"));
  let jwtToken = sessionStorage.getItem("jwt-token");
  useEffect(() => {
    if (jwtToken && userData?.id) {
      Socket.on("connect", () => {
        console.log("socket connected", Socket.id, userData);
        Socket.emit("join", userData?.id);
      });
    }
  }, [userData?.id, jwtToken]);

  return (
    <Box>
      <Container>
        <Box my={{ xs: 2, sm: 3 }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            TabIndicatorProps={{ sx: { display: "none" } }}
            textColor="inherit"
          >
            {["Dashboard", "Messages"].map((text, i) => (
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
        <CustomTabPanel value={value} index={0}>
          <PlanTab1
            setValue={setValue}
            setTab1State={setTab1State}
            setactiveChatID={setactiveChatID}
          />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <PlanTab2
            // chat list & add chat state
            state={tab1State}
            setState={setTab1State}
            // active chat id
            activeChatID={activeChatID}
            setactiveChatID={setactiveChatID}
          />
        </CustomTabPanel>
      </Container>
    </Box>
  );
}
