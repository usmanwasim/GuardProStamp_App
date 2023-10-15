import {
  Avatar,
  Box,
  Button,
  InputAdornment,
  InputBase,
  MenuItem,
  Select,
  Stack,
} from "@mui/material";
import { useState } from "react";
import PropTypes from "prop-types";
import { ArrowBackRounded, Send, Verified } from "@mui/icons-material";
import City from "../../assets/Images/City.png";
import City2 from "../../assets/Images/City2.png";
import AddD from "../../assets/Images/AddD.png";
import Notes from "../../assets/Images/Notes.png";
import Layers from "../../assets/Images/Layers.png";
import LocationImg from "../../assets/Images/Location.png";
import { toast } from "react-toastify";
import axiosApiInstance from "../../api/api";

PlanTab1.propTypes = {
  setValue: PropTypes.func,
  setTab1State: PropTypes.func,
  setactiveChatID: PropTypes.func,
};

const options = ["Option 1", "Option 2", "Option 3"];
export default function PlanTab1({ setValue, setTab1State, setactiveChatID }) {
  const [state, setState] = useState(false);
  const [licenseDetail, setLicenseDetail] = useState({});
  const [data, setData] = useState({
    city: "",
    state: "",
    category: "",
    license: "",
  });

  // get licenses detail for planchecker
  const getLicense = async () => {
    if (!data.license) {
      return toast.error("License number is required");
    }
    try {
      let license = await axiosApiInstance.post(`licenses/planchecker`, {
        licenseNumber: data.license,
      });
      setLicenseDetail(license?.data?.data);
      setData({
        city: "",
        state: "",
        category: "",
        license: "",
      });
      setState(!state);
    } catch (error) {
      console.error(error);
    }
  };
  const createChat = async () => {
    if (!licenseDetail?.userId) {
      return toast.error("License number is required");
    }

    try {
      let chatDetail = await axiosApiInstance.post(`chat/createChat`, {
        id: licenseDetail?.userId,
      });
      console.log(chatDetail?.data?.message, "chatDetail");
      setactiveChatID(chatDetail?.data?.data?._id);
      setTab1State(true);
      setValue(1);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <Box>
      {state ? (
        <Box
          sx={{
            mx: { xs: 4, sm: 7, md: 10 },
            mb: { xs: 2, sm: 3, md: 4 },
            borderRadius: "30px",
            background: "#F6F6F6",
            p: { xs: 1, sm: 2, md: 3 },
          }}
        >
          {/* header license owner detail here & Chat also */}
          <Stack
            direction={{ xs: "row" }}
            // justifyContent="center"
            alignItems="center"
            gap={{ xs: 2, sm: 3.5, md: 5 }}
          >
            <ArrowBackRounded
              sx={{ cursor: "pointer" }}
              onClick={() => {
                setState(false);
                setLicenseDetail({});
              }}
            />
            <Avatar
              sx={{
                width: { xs: 35, sm: 45, md: 55 },
                height: { xs: 35, sm: 45, md: 55 },
              }}
            />
            <Box>
              <Box
                sx={{
                  color: "#000",
                  textAlign: "center",
                  fontFamily: "Poppins",
                  fontSize: { xs: "14px", sm: "18px", md: "22px" },
                  fontStyle: "normal",
                  fontWeight: "600",
                  lineHeight: "30px",
                }}
              >
                {licenseDetail?.fullName
                  ? licenseDetail?.fullName
                  : "John Wales"}
              </Box>
              <Box
                sx={{
                  color: "#000",
                  textAlign: "center",
                  fontFamily: "Poppins",
                  fontSize: { xs: "11px", sm: "14px", md: "17px" },
                  fontStyle: "normal",
                  fontWeight: "600",
                  lineHeight: "30px",
                }}
              >
                Active Engineer
              </Box>
            </Box>
            <Button
              sx={{
                background: "#4CECB2",
                border: "1px solid #4CECB2",
                color: "#fff",
                px: { xs: 1, sm: 2 },
                "&:hover": {
                  background: "transparent",
                  color: "#4CECB2",
                },
              }}
              onClick={() => {
                createChat();
              }}
            >
              <Send
                sx={{
                  transform: "rotate(-45deg)",
                  fontSize: "16px",
                }}
              />{" "}
              Message
            </Button>
          </Stack>
          {/* projects */}
          <Stack
            direction="column"
            gap={{ xs: 2, sm: 3.5, md: 5 }}
            sx={{ my: { xs: 2, sm: 3, md: 4 } }}
          >
            {[1, 2, 3].map((item, i) => (
              <Box
                key={i}
                sx={{
                  borderRadius: "12.807px",
                  border: "0.854px solid #E6E6E6",
                  background: "#FFF",
                  overflow: "hidden",
                }}
              >
                {/* blue head */}
                <Box
                  sx={{
                    background: "#3B17AD",
                    px: { xs: 2, sm: 3.5, md: 5 },
                    py: { xs: 1, sm: 2 },
                  }}
                >
                  <Box
                    sx={{
                      color: "#FFF",
                      textAlign: "right",
                      fontFamily: "Poppins",
                      fontSize: { xs: "11px", sm: "13px" },
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight: "normal",
                    }}
                  >
                    Owner: Roman Jade
                  </Box>
                  <Box
                    sx={{
                      color: "#FFF",
                      textAlign: "right",
                      fontFamily: "Poppins",
                      fontSize: { xs: "11px", sm: "13px" },
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight: "normal",
                    }}
                  >
                    Date: 12-02-2023
                  </Box>
                </Box>
                {/* project Detail */}
                <Stack
                  direction={{ xs: "column", sm: "row" }}
                  sx={{
                    justifyContent: "space-between",
                    px: { xs: 2, sm: 3.5, md: 5 },
                    py: { xs: 1, sm: 2 },
                    borderBottom: "1px solid #E6E6E6",
                  }}
                >
                  <Box>
                    <Box
                      sx={{
                        color: "#1C274C",
                        fontFamily: "Poppins",
                        fontSize: { xs: "14", sm: "17px", md: "20px" },
                        fontStyle: "normal",
                        fontWeight: "700",
                        lineHeight: "normal",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <img
                        src={Notes}
                        alt=""
                        style={{ width: "20px", margin: "0px 5px 0px 0px" }}
                      />
                      BLOFD work
                    </Box>
                    <Box
                      sx={{
                        color: "#1C274C",
                        fontFamily: "Poppins",
                        fontSize: { xs: "11", sm: "13px", md: "15px" },
                        fontStyle: "normal",
                        fontWeight: "700",
                        lineHeight: "normal",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <img
                        src={LocationImg}
                        alt=""
                        style={{ width: "18px", margin: "0px 5px 0px 0px" }}
                      />
                      36 college, Ajk, Texas, USA
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      width: "max-content",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <Box sx={{ mb: "5px" }}>status</Box>
                    <Button
                      size="small"
                      sx={{
                        borderRadius: "8.538px",
                        background: "#00B26A",
                        border: "1px solid #00B26A",
                        px: { xs: 1, sm: 2 },
                        py: { xs: "5px", sm: "7px" },
                        color: "#FFF",
                        fontFamily: "Poppins",
                        fontSize: { xs: "10px", sm: "12px" },
                        fontStyle: "normal",
                        fontWeight: "500",
                        lineHeight: "normal",
                        "&:hover": {
                          background: "transparent",
                          color: "#00B26A",
                        },
                      }}
                    >
                      Confirm
                    </Button>
                  </Box>
                </Stack>
                {/* verify button */}
                <Box
                  sx={{
                    px: { xs: 2, sm: 3.5, md: 5 },
                    py: { xs: 1, sm: 2 },
                  }}
                >
                  <Box
                    sx={{
                      borderRadius: "8.538px",
                      background: "#3790FF",
                      color: "#FFF",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: { xs: 0.4, sm: 0.7 },
                      fontFamily: "Poppins",
                      fontSize: { xs: "12px", sm: "15px" },
                      fontStyle: "normal",
                      fontWeight: "600",
                      lineHeight: "normal",
                      py: { xs: 1, sm: 2 },
                    }}
                  >
                    <Verified sx={{ fontSize: { xs: "12px", sm: "15px" } }} />
                    Verified
                  </Box>
                </Box>
              </Box>
            ))}
          </Stack>
        </Box>
      ) : (
        <Box
          sx={{
            mx: { xs: 3, sm: 5, md: 7 },
            mb: { xs: 2, sm: 3, md: 4 },
            borderRadius: "30px",
            background: "#F6F6F6",
            p: { xs: 1, sm: 2, md: 3 },
          }}
        >
          <ArrowBackRounded sx={{ mb: { xs: 1, sm: 2 } }} />
          <Box
            sx={{
              background: "#ffffff",
              p: { xs: 1, sm: 2, md: 3 },
              borderRadius: "30px",
              mb: { xs: 2, sm: 3, md: 4 },
            }}
          >
            <Box
              sx={{
                color: "#000",
                textAlign: "center",
                fontFamily: "Poppins",
                fontSize: { xs: "16px", sm: "20px", md: "26px" },
                fontStyle: "normal",
                fontWeight: "600",
                lineHeight: "30px",
                mb: { xs: 2, sm: 3.5, md: 5 },
              }}
            >
              Verify Details
            </Box>
            <Stack
              direction={{ xs: "column" }}
              justifyContent="center"
              alignItems="center"
              gap={{ xs: 2, sm: 3, md: 4 }}
              my={{ xs: 2, sm: 3, md: 4 }}
            >
              <Select
                value={data.state}
                onChange={(e) => setData({ ...data, state: e.target.value })}
                sx={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  borderRadius: "15px",
                  border: "1px solid #E6E6E6",
                  background: "#FFF",
                  color: "#1C274C",
                  p: { xs: 1, sm: 1.5 },
                  fontSize: { xs: "12px", sm: "14px", md: "16px" },
                  "& .MuiSelect-icon": {
                    borderRadius: "8px",
                    border: "1px solid #1C274C",
                    color: "#1C274C",
                    width: { xs: "17px", sm: "22px" },
                    height: { xs: "17px", sm: "22px" },
                  },
                }}
                displayEmpty
                input={
                  <InputBase
                    startAdornment={
                      <InputAdornment position="start">
                        <Box
                          component={"img"}
                          src={City}
                          width={{ xs: "17px", sm: "22px" }}
                        />
                      </InputAdornment>
                    }
                  />
                }
              >
                <MenuItem value="" disabled>
                  Select State
                </MenuItem>
                {options.map((option, i) => (
                  <MenuItem key={i} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </Select>
              <Select
                value={data.city}
                onChange={(e) => setData({ ...data, city: e.target.value })}
                sx={{
                  width: "100%",
                  borderRadius: "15px",
                  border: "1px solid #E6E6E6",
                  background: "#FFF",
                  p: { xs: 1, sm: 1.5 },
                  fontSize: { xs: "12px", sm: "14px", md: "16px" },
                  color: "#1C274C",
                  "& .MuiSelect-icon": {
                    borderRadius: "8px",
                    border: "1px solid #1C274C",
                    color: "#1C274C",
                    width: { xs: "17px", sm: "22px" },
                    height: { xs: "17px", sm: "22px" },
                  },
                }}
                displayEmpty
                input={
                  <InputBase
                    startAdornment={
                      <InputAdornment position="start">
                        <Box
                          component={"img"}
                          src={City2}
                          width={{ xs: "17px", sm: "22px" }}
                        />
                      </InputAdornment>
                    }
                  />
                }
              >
                <MenuItem value="" disabled>
                  Select City
                </MenuItem>
                {options.map((option, i) => (
                  <MenuItem key={i} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </Select>
            </Stack>
            <Stack
              direction={{ xs: "column" }}
              justifyContent="center"
              alignItems="center"
              gap={{ xs: 2, sm: 3, md: 4 }}
              my={{ xs: 2, sm: 3, md: 4 }}
            >
              <Select
                value={data.category}
                onChange={(e) => setData({ ...data, category: e.target.value })}
                sx={{
                  width: "100%",
                  borderRadius: "15px",
                  border: "1px solid #E6E6E6",
                  background: "#FFF",
                  p: { xs: 1, sm: 1.5 },
                  fontSize: { xs: "12px", sm: "14px", md: "16px" },
                  color: "#1C274C",
                  "& .MuiSelect-icon": {
                    borderRadius: "8px",
                    border: "1px solid #1C274C",
                    color: "#1C274C",
                    width: { xs: "17px", sm: "22px" },
                    height: { xs: "17px", sm: "22px" },
                  },
                }}
                displayEmpty
                input={
                  <InputBase
                    startAdornment={
                      <InputAdornment position="start">
                        <Box
                          component={"img"}
                          src={Layers}
                          width={{ xs: "17px", sm: "22px" }}
                        />
                      </InputAdornment>
                    }
                  />
                }
              >
                <MenuItem value="" disabled>
                  License Category
                </MenuItem>
                {options.map((option, i) => (
                  <MenuItem key={i} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </Select>
              <InputBase
                placeholder="License Number"
                value={data.license}
                onChange={(e) => setData({ ...data, license: e.target.value })}
                sx={{
                  width: "100%",
                  borderRadius: "15px",
                  border: "1px solid #E6E6E6",
                  background: "#FFF",
                  p: { xs: 1, sm: 1.5 },
                  fontSize: { xs: "12px", sm: "14px", md: "16px" },
                }}
                startAdornment={
                  <InputAdornment position="start">
                    <Box
                      component={"img"}
                      src={AddD}
                      width={{ xs: "17px", sm: "22px" }}
                    />
                  </InputAdornment>
                }
              />
            </Stack>
            <Button
              sx={{
                borderRadius: "15px",
                background: "#3B17AD",
                boxShadow: "0px 15px 25px 0px rgba(59, 23, 173, 0.25)",
                color: "#FFF",
                textAlign: "center",
                fontFamily: "Poppins",
                fontStyle: "normal",
                fontWeight: "700",
                lineHeight: "normal",
                p: { xs: 1.5, sm: 2 },
                fontSize: { xs: "13px", sm: "15px", md: "18px" },
                width: "100%",
                textTransform: "capitalize",
                mb: { xs: 1.5, sm: 2 },
                "&:hover": {
                  color: "#3B17AD",
                  border: "1px solid #3B17AD",
                },
              }}
              onClick={() => {
                getLicense();
              }}
            >
              Verify
            </Button>
          </Box>
        </Box>
      )}
    </Box>
  );
}
