import {
  Box,
  Button,
  Container,
  InputAdornment,
  InputBase,
  InputLabel,
  MenuItem,
  Select,
  Stack,
} from "@mui/material";
import { ArrowBackRounded } from "@mui/icons-material";
import City from "../assets/Images/City.png";
import City1 from "../assets/Images/City1.png";
import City2 from "../assets/Images/City2.png";
import Layers from "../assets/Images/Layers.png";
import User from "../assets/Images/User.png";
import Letter from "../assets/Images/Letter.png";
import Lock from "../assets/Images/Lock.png";
import eye from "../assets/Images/eye.png";
import closeeye from "../assets/Images/close-eye.png";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { handleRegister } from "../api/api";

// import { toast } from "react-toastify";
import axios from "axios";

// const options = ["Option 1", "Option 2", "Option 3"];
export default function Signup() {
  const navigate = useNavigate();
  const [states, setStates] = useState([]);
  const [citys, setCitys] = useState([]);
  const [confirm, setConfirm] = useState(false);
  const [password, setPassword] = useState(false);
  const [colorConfirm, setColorConfirm] = useState(false);
  const [responseMsg, setResponseMsg] = useState({
    status: null,
    message: "",
  });
  const [data, setData] = useState({
    asPlanChecker: true,
    city: "",
    state: "",
    agency: "",
    department: "",
    name: "",
    middleName:"",
    lastName:"",
    email: "",
    password: "",
    cpassword: "",
  });
  const [dataErrors, setDataErrors] = useState({
    city: "",
    state: "",
    agency: "",
    department: "",
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });

  useEffect(() => {
    const getStatesCity = async () => {
      let response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}statesAndCities`
      );
      setStates(response?.data?.data);
    };
    getStatesCity();
  }, []);
  useEffect(() => {
    let citydata = states.filter(
      (state) => state.stateName === data.state && state.stateCity
    );
    let cityData = citydata[0]?.stateCity;
    // Sort the professionalType array alphabetically
    cityData?.sort((a, b) => a.localeCompare(b, "en", { sensitivity: "base" }));
    setCitys(cityData);
  }, [data.state]);

  useEffect(() => {
    if (data?.password && data?.password !== data?.cpassword) {
      setColorConfirm(true);
    } else {
      setColorConfirm(false);
    }
  }, [data.cpassword]);



  const handleSignup = async () => {
    const validPassword = new RegExp("^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$");
    if (!data?.state) {
      // toast.error("Please select State");
      setDataErrors({
        ...dataErrors,
        state: "Please select State",
      });
    } else if (!data?.city) {
      // toast.error("Please select City");
      setDataErrors({
        ...dataErrors,
        state: "",
        city: "Please select City",
      });
    } else if (!data?.agency) {
      // toast.error("Please select Agency");
      setDataErrors({
        ...dataErrors,
        state: "",
        city: "",
        agency: "Please select Agency",
      });
    } else if (!data?.department) {
      // toast.error("Please select Department");
      setDataErrors({
        ...dataErrors,
        state: "",
        city: "",
        agency: "",
        department: "Please select Department",
      });
    } else if (!data?.name) {
      // toast.error("Please enter Name");
      setDataErrors({
        ...dataErrors,
        state: "",
        city: "",
        agency: "",
        department: "",
        name: "Please enter Name",
      });
    } else if (!data?.email) {
      // toast.error("Please enter Email");
      setDataErrors({
        ...dataErrors,
        state: "",
        city: "",
        agency: "",
        department: "",
        name: "",
        email: "Please enter Email",
      });
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(data?.email)) {
      // toast.error("Invalid Email Format");
      setDataErrors({
        ...dataErrors,
        state: "",
        city: "",
        agency: "",
        department: "",
        name: "",
        email: "Invalid Email Format",
      });
    } else if (!data?.password) {
      // toast.error("Please enter Password");
      setDataErrors({
        ...dataErrors,
        state: "",
        city: "",
        agency: "",
        department: "",
        name: "",
        email: "",
        password: "Please enter Password",
      });
    } else if (!validPassword.test(data?.password)) {
      // toast.error("Please enter Password");
      setDataErrors({
        ...dataErrors,
        state: "",
        city: "",
        agency: "",
        department: "",
        name: "",
        email: "",
        password: "Must Match Format : (Alphabet & Numerics) & length-6",
      });
    } else if (!data?.cpassword) {
      // toast.error("Please enter Confirm Password");
      setDataErrors({
        ...dataErrors,
        state: "",
        city: "",
        agency: "",
        department: "",
        name: "",
        email: "",
        password: "",
        cpassword: "Please enter Confirm Password",
      });
    } else if (data?.password !== data?.cpassword) {
      // toast.error("Invalid Confirm Password");
      setDataErrors({
        ...dataErrors,
        state: "",
        city: "",
        agency: "",
        department: "",
        name: "",
        email: "",
        password: "",
        cpassword: "Invalid Confirm Password",
      });
    } else {
      try {
        setDataErrors({
          ...dataErrors,
          state: "",
          city: "",
          agency: "",
          department: "",
          name: "",
          email: "",
          password: "",
          cpassword: "",
        });
        const resp = await handleRegister(data);
        if (resp?.data?.status == "success") {
          setResponseMsg({
            status: true,
            message: resp?.data?.message,
          });
          navigate("/signup_redirect");
          // toast.success(resp?.data?.message);
          // navigate("/login");
        }
      } catch (err) {
        // toast.error(err?.response?.data?.message);
        setResponseMsg({
          status: false,
          message: err?.response?.data?.message,
        });
      }
    }
  };

 

  return (
    <>
      <Box
        sx={{
          my: { xs: 3, sm: 5, md: 7 },
        }}
      >
        <Container>
          <Box
            sx={{
              mx: { xs: 3, sm: 5, md: 7 },
              borderRadius: "30px",
              background: "#F6F6F6",
              p: { xs: 1, sm: 2, md: 3 },
            }}
          >
            <ArrowBackRounded />
            <Container maxWidth="md">
              <Box
                sx={{
                  color: "#000",
                  textAlign: "center",
                  fontFamily: "Poppins",
                  fontSize: { xs: "20px", sm: "25px", md: "30px" },
                  fontStyle: "normal",
                  fontWeight: "600",
                  lineHeight: "30px",
                  mb: { xs: 3, sm: 5, md: 7 },
                }}
              >
                Signup
              </Box>
              {/* selectors */}
              <Stack
                direction={{ xs: "column", sm: "row" }}
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
                    onChange={(e) =>
                      setData({ ...data, state: e.target.value })
                    }
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
                      Enter Your State
                    </MenuItem>
                    {states.map((item, i) => (
                      <MenuItem key={i} value={item.stateName}>
                        {item.stateName}
                      </MenuItem>
                    ))}
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
                      Enter Your City
                    </MenuItem>
                    {citys?.map((option, i) => (
                      <MenuItem key={i} value={option}>
                        {option}
                      </MenuItem>
                    ))}
                  </Select>
                </Box>
              </Stack>
              {/* agency & departments  selects*/}
              {/* <Stack
                direction={{ xs: "column", sm: "row" }}
                justifyContent="center"
                alignItems="center"
                gap={{ xs: 2, sm: 3, md: 4 }}
                my={{ xs: 2, sm: 3, md: 4 }}
              >
                <Select
                  value={data.agency}
                  onChange={(e) => setData({ ...data, agency: e.target.value })}
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
                            src={City1}
                            width={{ xs: "17px", sm: "22px" }}
                          />
                        </InputAdornment>
                      }
                    />
                  }
                >
                  <MenuItem value="" disabled>
                    Enter your agency
                  </MenuItem>
                  {options.map((option, i) => (
                    <MenuItem key={i} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </Select>
                <Select
                  value={data.department}
                  onChange={(e) =>
                    setData({ ...data, department: e.target.value })
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
                    Enter your department
                  </MenuItem>
                  {options.map((option, i) => (
                    <MenuItem key={i} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </Select>
              </Stack> */}
              {/* agency & departments inputs */}
              <Stack
                direction={{ xs: "column", sm: "row" }}
                justifyContent="center"
                alignItems="center"
                gap={{ xs: 2, sm: 3, md: 4 }}
                my={{ xs: 2, sm: 3, md: 4 }}
              >
                <Box sx={{ width: "100%" }}>
                  <InputLabel
                    htmlFor="agency"
                    sx={{ fontSize: { xs: "12px", sm: "14px" }, color: "red" }}
                  >
                    {dataErrors.agency}
                  </InputLabel>
                  <InputBase
                    id="agency"
                    placeholder="Enter Your Agency"
                    value={data.agency}
                    onChange={(e) =>
                      setData({ ...data, agency: e.target.value })
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
                          src={City1}
                          width={{ xs: "17px", sm: "22px" }}
                        />
                      </InputAdornment>
                    }
                  />
                </Box>
                <Box sx={{ width: "100%" }}>
                  <InputLabel
                    htmlFor="department"
                    sx={{ fontSize: { xs: "12px", sm: "14px" }, color: "red" }}
                  >
                    {dataErrors.department}
                  </InputLabel>
                  <InputBase
                    id="department"
                    placeholder="Enter Your Department"
                    value={data.department}
                    onChange={(e) =>
                      setData({ ...data, department: e.target.value })
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
                          src={Layers}
                          width={{ xs: "17px", sm: "22px" }}
                        />
                      </InputAdornment>
                    }
                  />
                </Box>
              </Stack>
              {/* user name email password */}
              <Stack
                direction={{ xs: "column", sm: "row" }}
                justifyContent="center"
                alignItems="center"
                gap={{ xs: 2, sm: 3, md: 4 }}
                my={{ xs: 2, sm: 3, md: 4 }}
              >
                <Box sx={{ width: "100%" }}>
                  <InputLabel
                    htmlFor="name"
                    sx={{ fontSize: { xs: "12px", sm: "14px" }, color: "red" }}
                  >
                    {dataErrors.name}
                  </InputLabel>
                  <InputBase
                    id="name"
                    placeholder="Enter Your Name"
                    value={data.name}
                    onChange={(e) => setData({ ...data, name: e.target.value })}
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
                          src={User}
                          width={{ xs: "17px", sm: "22px" }}
                        />
                      </InputAdornment>
                    }
                  />
                </Box>
                <Box sx={{ width: "100%" }}>
                  <InputLabel
                    htmlFor="email"
                    sx={{ fontSize: { xs: "12px", sm: "14px" }, color: "red" }}
                  >
                    {dataErrors.email}
                  </InputLabel>
                  <InputBase
                    id="email"
                    placeholder="Enter Your Email"
                    value={data.email}
                    onChange={(e) =>
                      setData({ ...data, email: e.target.value })
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
                          src={Letter}
                          width={{ xs: "17px", sm: "22px" }}
                        />
                      </InputAdornment>
                    }
                  />
                </Box>
              </Stack>
              <Stack
                direction="column"
                justifyContent="center"
                alignItems="center"
                gap={{ xs: 2, sm: 3, md: 4 }}
                my={{ xs: 2, sm: 3, md: 4 }}
              >
                <Box sx={{ width: "100%" }}>
                  <InputLabel
                    htmlFor="password"
                    sx={{ fontSize: { xs: "12px", sm: "14px" }, color: "red" }}
                  >
                    {dataErrors.password}
                  </InputLabel>
                  <InputBase
                    id="password"
                    placeholder="Enter Your Password"
                    value={data.password}
                    onChange={(e) =>
                      setData({ ...data, password: e.target.value })
                    }
                    type={password ? "text" : "password"}
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
                          src={Lock}
                          width={{ xs: "17px", sm: "22px" }}
                        />
                      </InputAdornment>
                    }
                    endAdornment={
                      <InputAdornment position="start">
                        <Box
                          component={"img"}
                          src={password ? eye : closeeye}
                          sx={{
                            cursor: "pointer",
                          }}
                          width={{ xs: "17px", sm: "22px" }}
                          onClick={() => {
                            setPassword((pre) => !pre);
                          }}
                        />
                      </InputAdornment>
                    }
                  />
                </Box>
                <Box sx={{ width: "100%" }}>
                  <InputLabel
                    htmlFor="cpassword"
                    sx={{ fontSize: { xs: "12px", sm: "14px" }, color: "red" }}
                  >
                    {dataErrors.cpassword}
                  </InputLabel>
                  <InputBase
                    id="cpassword"
                    placeholder="Confirm Password"
                    value={data.cpassword}
                    onChange={(e) =>
                      setData({ ...data, cpassword: e.target.value })
                    }
                    type={confirm ? "text" : "password"}
                    sx={{
                      width: "100%",
                      borderRadius: "15px",
                      border: colorConfirm
                        ? "1px solid red"
                        : "1px solid #E6E6E6",
                      background: "#FFF",
                      p: { xs: 1, sm: 1.5 },
                      fontSize: { xs: "12px", sm: "14px", md: "16px" },
                      color: colorConfirm ? "red" : "black",
                    }}
                    startAdornment={
                      <InputAdornment position="start">
                        <Box
                          component={"img"}
                          src={Lock}
                          width={{ xs: "17px", sm: "22px" }}
                        />
                      </InputAdornment>
                    }
                    endAdornment={
                      <InputAdornment position="start">
                        <Box
                          component={"img"}
                          src={confirm ? eye : closeeye}
                          sx={{
                            cursor: "pointer",
                          }}
                          width={{ xs: "17px", sm: "22px" }}
                          onClick={() => {
                            setConfirm((pre) => !pre);
                          }}
                        />
                      </InputAdornment>
                    }
                  />
                </Box>
              </Stack>
              <Box
                sx={{
                  width: "100%",
                  color: responseMsg?.status ? "#00B26A" : "red",
                  textAlign: "center",
                  fontFamily: "Inter",
                  fontSize: { xs: "13px", sm: "16px" },
                  fontStyle: "normal",
                  fontWeight: "600",
                  lineHeight: "normal",
                  mb: { xs: 1, sm: 2, md: 2.5 },
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
                onClick={() => handleSignup()}
              >
                Signup
              </Button>
              <Box
                sx={{
                  width: "100%",
                  color: "#787878",
                  textAlign: "center",
                  fontFamily: "Inter",
                  fontSize: { xs: "13px", sm: "16px" },
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "normal",
                  mb: 3,
                }}
              >
                Already have an account?
                <span
                  style={{ color: "#00B26A", cursor: "pointer" }}
                  onClick={() => navigate("/login")}
                >
                  {" "}
                  Login
                </span>
              </Box>
            </Container>
          </Box>
        </Container>
      </Box>
    </>
  );
}
