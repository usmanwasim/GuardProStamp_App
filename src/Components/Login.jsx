import {
  Box,
  Button,
  Checkbox,
  Container,
  InputAdornment,
  InputBase,
  InputLabel,
  Stack,
} from "@mui/material";
import { ArrowBackRounded } from "@mui/icons-material";
import Letter from "../assets/Images/Letter.png";
import Lock from "../assets/Images/Lock.png";
import eye from "../assets/Images/eye.png";
import closeeye from "../assets/Images/close-eye.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
import { loginHandle } from "../api/api";

export default function Login() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [dataErrors, setDataErrors] = useState({ email: "", password: "" });
  const [responseMsg, setResponseMsg] = useState({
    status: null,
    message: "",
  });
  const [password, setPassword] = useState(false);
  const handleLogin = async () => {
    if (!data?.email) {
      // toast.error("Please enter Email");
      setDataErrors({
        ...dataErrors,
        email: "Please enter Email",
      });
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(data?.email)) {
      // toast.error("Invalid Email Format");
      setDataErrors({
        ...dataErrors,
        email: "Invalid Email Format",
      });
    } else if (!data?.password) {
      // toast.error("Please enter Password");
      setDataErrors({
        ...dataErrors,
        email: "",
        password: "Please enter Password",
      });
    } else {
      try {
        setDataErrors({
          ...dataErrors,
          email: "",
          password: "",
        });
        const response = await loginHandle(data);
        if (response?.data?.status == "success") {
          sessionStorage.setItem("jwt-token", response?.data?.accessToken);
          localStorage.setItem(
            "userData",
            JSON.stringify(response?.data?.data)
          );
          // toast.success(response?.data?.message);
          setResponseMsg({
            status: true,
            message: response?.data?.message,
          });
          if (response?.data?.data?.role === "admin") {
            navigate("/dashboard");
          } else {
            navigate("/planchecker");
          }
        } else {
          // toast.error(response?.data?.message);
          setResponseMsg({
            status: false,
            message: response?.data?.message,
          });
        }
      } catch (err) {
        // toast.error(err?.response?.data?.message);
        setResponseMsg({
          status: false,
          message: err?.response?.data?.message,
        });
        console.log(err);
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
                  mt: { xs: 3, sm: 4, md: 5 },
                  mb: { xs: 7, sm: 10, md: 15 },
                }}
              >
                Login
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
                    htmlFor="email"
                    sx={{ fontSize: { xs: "12px", sm: "14px" }, color: "red" }}
                  >
                    {dataErrors.email}
                  </InputLabel>
                  <InputBase
                    id="email"
                    placeholder="Enter your email"
                    value={data.email}
                    onChange={(e) => {
                      setData({ ...data, email: e.target.value });
                    }}
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
                <Box sx={{ width: "100%" }}>
                  <InputLabel
                    htmlFor="password"
                    sx={{ fontSize: { xs: "12px", sm: "14px" }, color: "red" }}
                  >
                    {dataErrors.password}
                  </InputLabel>
                  <InputBase
                    id="password"
                    placeholder="Enter your password"
                    value={data.password}
                    onChange={(e) => {
                      setData({ ...data, password: e.target.value });
                    }}
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
              </Stack>
              <Stack
                direction={{ xs: "row" }}
                justifyContent="space-between"
                alignItems="center"
                gap={{ xs: 2, sm: 3, md: 4 }}
                my={{ xs: 2, sm: 3, md: 4 }}
              >
                <Box display="flex" alignItems="center">
                  <Checkbox
                    value={false}
                    sx={{
                      fontSize: { xs: "12px", sm: "10px" },
                      p: 0,
                      mr: { xs: 1, sm: 1.5 },

                      color: "#00B26A",
                      "&.Mui-checked": {
                        color: "#00B26A",
                      },
                    }}
                  />
                  <Box
                    sx={{
                      color: "#414964",
                      fontFamily: "Poppins",
                      fontSize: { xs: "12px", sm: "14px" },
                      fontStyle: "normal",
                      fontWeight: "500",
                      lineHeight: "normal",
                    }}
                  >
                    Remember me
                  </Box>
                </Box>

                <Box
                  sx={{
                    color: "#414964",
                    fontFamily: "Poppins",
                    fontSize: { xs: "12px", sm: "14px" },
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight: "normal",
                    cursor: "pointer",
                  }}
                  onClick={() => navigate("/forgetpassword")}
                >
                  Forget Password
                </Box>
              </Stack>
              <Box
                sx={{
                  textAlign: "center",
                  color: responseMsg?.status ? "#00B26A" : "red",
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
                  mb: { xs: 1, sm: 1.5 },
                  "&:hover": {
                    color: "#3B17AD",
                    border: "1px solid #3B17AD",
                  },
                }}
                onClick={() => {
                  handleLogin();
                }}
              >
                Login
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
                  mb: 2,
                }}
              >
                Don’t have an account?
                <span
                  style={{ color: "#00B26A", cursor: "pointer" }}
                  onClick={() => navigate("/signup")}
                >
                  {" "}
                  Signup
                </span>
              </Box>
            </Container>
          </Box>
        </Container>
      </Box>
    </>
  );
}
