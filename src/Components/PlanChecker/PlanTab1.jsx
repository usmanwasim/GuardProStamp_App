import {
  Avatar,
  Box,
  Button,
  InputAdornment,
  InputBase,
  InputLabel,
  MenuItem,
  Select,
  Stack,
} from "@mui/material";
import { useEffect, useState } from "react";
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
import axios from "axios";

PlanTab1.propTypes = {
  setValue: PropTypes.func,
  setTab2State: PropTypes.func,
  setactiveChatID: PropTypes.func,
};

export default function PlanTab1({ setValue, setTab2State, setactiveChatID }) {
  const [state, setState] = useState(false);
  const [subscriptionStatus, setSubscriptionStatus] = useState(false);
  const [subscriptionStatusMessage, setSubscriptionStatusMessages] = useState({
    message: "",
  });
  const [licenseDetail, setLicenseDetail] = useState({});
  const [projectsOfLicense, setProjectsOfLicense] = useState();
  // Select states
  const [states, setStates] = useState([]);
  const [citys, setCitys] = useState([]);
  const [projectCity, setProjectCity] = useState();
  const [categories, setCategories] = useState([]);
  const [cityIndex, setCityIndex] = useState("");
  const [responseMsg, setResponseMsg] = useState({
    status: null,
    message: "",
  });
  const [dataErrors, setDataErrors] = useState({
    city: "",
    state: "",
    category: "",
    license: "",
  });
  const [data, setData] = useState({
    city: "",
    state: "",
    category: "",
    license: "",
  });

  const storedUserData = localStorage.getItem("userData");

  const userData = JSON.parse(storedUserData);
  const id = userData?.id;
  // const id = "659be05930af9b8895f9b73d";
  // const dummyState = "Hawaii";

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(
          `https://guardprostamp-8ab14143efd0.herokuapp.com/users/syncUser/${id}`
        );
        console.log("User Fetch Successfully...... ", response?.data?.data);
        setProjectCity(response?.data?.data?.city);
        console.log("City is ", projectCity)
        const subscriptionMeta = response?.data?.data?.subscriptionMeta;
        setSubscriptionStatus(subscriptionMeta?.subscribed);
        // console.log("the metadata is", subscriptionStatus);
        // setData({ ...data, state: dummyState });
        setData({ ...data, state: response?.data?.data?.state });
        setStates(response?.data?.data?.state);
      } catch (error) {
        console.error("Error fetching user data", error);
      }
    };

    fetchUserData();
  }, [id]);

  // get states
  useEffect(() => {
    const getStatesForPlanChecker = async () => {
      let response = await axios.get(`${import.meta.env.VITE_BASE_URL}states`);
      // setStates(response?.data?.data);
      // console.log("the data for state is ",response?.data?.data);
    };
    getStatesForPlanChecker();
  }, []);
  // get boards
  useEffect(() => {
    const getcirtyForPlanChecker = async () => {
      let response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}boards?state=${data.state}`
      );
      setCitys(response?.data?.data);
    };
    getcirtyForPlanChecker();
  }, [data?.state]);
  // get categories
  useEffect(() => {
    const getcirtyForPlanChecker = async () => {
      let response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}categories?state=${data.state
        }&boardIndex=${cityIndex}`
      );
      setCategories(response?.data?.data);
    };
    getcirtyForPlanChecker();
  }, [data?.city]);

  // get licenses detail for planchecker
  const getLicense = async () => {
    try {
      if (!data.state) {
        // return toast.error("State is required");
        setDataErrors({
          ...dataErrors,
          state: "State is required",
        });
      } else if (!data.city) {
        // return toast.error("City is required");
        setDataErrors({
          ...dataErrors,
          state: "",
          city: "City is required",
        });
      } else if (!data.category) {
        // return toast.error("Category is required");
        setDataErrors({
          ...dataErrors,
          state: "",
          city: "",
          category: "Category is required",
        });
      } else if (!data.license) {
        // return toast.error("License number is required");
        setDataErrors({
          ...dataErrors,
          state: "",
          city: "",
          category: "",
          license: "License number is required",
        });
      } else {
        setDataErrors({
          state: "",
          city: "",
          category: "",
          license: "",
        });
        let licenseRecords = await axiosApiInstance.post(
          `licenses/planchecker`,
          {
            licenseNumber: data?.license,
            stateName: data?.state,
            licenseBoard: data?.city,
            licenseCategory: data?.category,
          }
        );
        setLicenseDetail(licenseRecords?.data?.data);
        const _id = licenseRecords?.data?.data?.userId;
        console.log("The License User id ", _id)
        // fetch user subscription status
        const response = await axios.get(
          `https://guardprostamp-8ab14143efd0.herokuapp.com/users/syncUser/${_id}`
        );
        console.log(
          "User Fetch Successfully ",
          response
        );
        if (response?.data?.data?.subscriptionMeta?.subscribed) {
          setData({
            city: "",
            state: "",
            category: "",
            license: "",
          });
          setState(!state);
          setResponseMsg({
            status: true,
            message: "",
          });
        } else {
          setResponseMsg({
            status: false,
            message:
              "License found: You cannot check information. This user is not subscribed .",
          });
        }
      }
    } catch (error) {
      console.error(error);
      // toast.error(error?.response?.data?.message);
      setResponseMsg({
        status: false,
        message: error?.response?.data?.message,
      });
    }
  };
  // get Projects of License
  useEffect(() => {
    const getProjectsOfLicense = async () => {
      try {
        let projectsRecords = await axiosApiInstance.get(
          `projects/planchecker/${licenseDetail?.licenseNumber}`
        );
        setProjectsOfLicense(projectsRecords?.data?.data);
      } catch (error) {
        console.error(error);
        toast.error(error?.response?.data?.message);
      }
    };
    getProjectsOfLicense();
  }, [licenseDetail?.licenseNumber]);

  // update Project status
  const updateProjectStatus = async (id) => {
    try {
      let response = await axiosApiInstance.post(
        `${import.meta.env.VITE_BASE_URL}projects/adminUpdate`,
        {
          id: id,
          status: true,
        }
      );
      if (response?.data?.status === "success") {
        toast.success(response?.data?.message);
      }
    } catch (error) {
      console.error(error);
      toast.error(error?.response?.data?.message);
    }
  };

  const createChat = async () => {
    if (!licenseDetail?.userId) {
      return toast.error("License owner is required");
    }

    try {
      let chatDetail = await axiosApiInstance.post(`chat/createChat`, {
        id: licenseDetail?.userId,
      });
      console.log(chatDetail?.data?.message, "chatDetail");
      setactiveChatID(chatDetail?.data?.data?._id);
      setTab2State(true);
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
              src={
                licenseDetail?.uploadLicensePhoto
                  ? licenseDetail?.uploadLicensePhoto
                  : ""
              }
              sx={{
                width: { xs: 35, sm: 45, md: 55 },
                height: { xs: 35, sm: 45, md: 55 },
              }}
            />
            <Box sx={{ textAlign: "left" }}>
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
                {licenseDetail?.fullName ? licenseDetail?.fullName : "Name"}
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
                {licenseDetail?.licenseCategory
                  ? licenseDetail?.licenseCategory
                  : "Category"}
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
            {projectsOfLicense
              ?.filter(project => project.projectCityName === projectCity)
              .map((item, i) => (
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
                      Owner: {item?.projectOwnerName}
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
                      Date: {item?.projectDate}
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
                        {item?.projectName ? item?.projectName : "Project Name"}
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
                        {item?.projectCityName ? item?.projectCityName : "City"},
                        {item?.projectStateName
                          ? item?.projectStateName
                          : "State"}
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
                        disabled={item?.status === true ? true : false}
                        onClick={() => {
                          updateProjectStatus(item?._id);
                        }}
                      >
                        {item?.status === true ? "Confirmed" : "Confirm"}
                      </Button>
                    </Box>
                  </Stack>
                  {/* verify button */}
                  {item?.status === true && (
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
                  )}
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
              <Box sx={{ width: "100%" }}>
                <InputLabel
                  htmlFor="state"
                  sx={{ fontSize: { xs: "12px", sm: "14px" }, color: "red" }}
                >
                  {dataErrors.state}
                </InputLabel>
                <Select
                  id="state"
                  value={data.state}
                  onChange={(e) => setData({ ...data, state: e.target.value })}
                  sx={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    borderRadius: "15px",
                    border: "1px solid #E6E6E6",
                    background: "#FFF",
                    color: "grey",
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
                    Your State
                  </MenuItem>

                  {data.state ? (
                    <MenuItem value={data.state}>{data.state}</MenuItem>
                  ) : (
                    <MenuItem disabled>There Is No State</MenuItem>
                  )}
                </Select>
              </Box>
              <Box sx={{ width: "100%" }}>
                <InputLabel
                  htmlFor="city"
                  sx={{ fontSize: { xs: "12px", sm: "14px" }, color: "red" }}
                >
                  {dataErrors.city}
                </InputLabel>
                <Select
                  id="city"
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
                    Select the Professional Board
                  </MenuItem>
                  {citys?.map((option, i) => (
                    <MenuItem
                      key={i}
                      value={option}
                      onClick={() => setCityIndex(i)}
                    >
                      {option}
                    </MenuItem>
                  ))}
                </Select>
              </Box>
            </Stack>
            <Stack
              direction={{ xs: "column" }}
              justifyContent="center"
              alignItems="center"
              gap={{ xs: 2, sm: 3, md: 4 }}
              my={{ xs: 2, sm: 3, md: 4 }}
            >
              <Box sx={{ width: "100%" }}>
                <InputLabel
                  htmlFor="category"
                  sx={{ fontSize: { xs: "12px", sm: "14px" }, color: "red" }}
                >
                  {dataErrors.category}
                </InputLabel>
                <Select
                  id="category"
                  value={data.category}
                  onChange={(e) =>
                    setData({ ...data, category: e.target.value })
                  }
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
                  {categories?.map((option, i) => (
                    <MenuItem key={i} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </Select>
              </Box>
              <Box sx={{ width: "100%" }}>
                <InputLabel
                  htmlFor="license"
                  sx={{ fontSize: { xs: "12px", sm: "14px" }, color: "red" }}
                >
                  {dataErrors.license}
                </InputLabel>
                <InputBase
                  id="license"
                  placeholder="License Number"
                  value={data.license}
                  onChange={(e) =>
                    setData({ ...data, license: e.target.value })
                  }
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
              </Box>
            </Stack>
            {subscriptionStatusMessage.message && (
              <Box
                sx={{
                  width: "100%",
                  color: subscriptionStatusMessage?.message ? "green" : "red",
                  textAlign: "center",
                  fontFamily: "Inter",
                  fontSize: { xs: "13px", sm: "16px" },
                  fontStyle: "normal",
                  fontWeight: "600",
                  lineHeight: "normal",
                  my: 3,
                }}
              >
                {subscriptionStatusMessage.message}
              </Box>
            )}
            <Box
              sx={{
                width: "100%",
                color: responseMsg?.status ? "green" : "red",
                textAlign: "center",
                fontFamily: "Inter",
                fontSize: { xs: "13px", sm: "16px" },
                fontStyle: "normal",
                fontWeight: "600",
                lineHeight: "normal",
                my: 3,
              }}
            >
              {responseMsg?.message}
            </Box>

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
