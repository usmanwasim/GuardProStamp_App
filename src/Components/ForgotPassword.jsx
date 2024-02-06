import { useEffect, useState } from "react";
import {
  Box,
  Button,
  Container,
  InputAdornment,
  InputBase,
  Stack,
} from "@mui/material";
import { ArrowBackRounded } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axiosApiInstance, { handleForgotVerifyCode } from "../api/api";

import Letter from "../assets/Images/Letter.png";
import Lock from "../assets/Images/Lock.png";

export default function ForgotPassword() {
  const navigate = useNavigate();
  const [state, setState] = useState(false);
  const [colorConfirm, setColorConfirm] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
    code: "",
    cpassword: "",
  });

  useEffect(() => {
    if (data?.password && data?.password !== data?.cpassword) {
      setColorConfirm(true);
    } else {
      setColorConfirm(false);
    }
  }, [data.cpassword]);

  const handleSubmitEmailForCode = async () => {
    if (!data?.email) {
      toast.error("Please enter Email");
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(data?.email)) {
      toast.error("Invalid Email Format");
    } else {
      try {
        // const response =
        await handleForgotVerifyCode(data?.email);
        // toast.success(response?.data?.message);
        setState(true);
      } catch (err) {
        toast.error(err?.response?.data?.message);
      }
    }
  };

  const handleUpdatePassword = async () => {
    if (data?.code === "" || data?.code.length !== 6) {
      toast.error("Invalid Code");
    } else if (!data?.password) {
      toast.error("Please Enter Password");
    } else if (data?.password !== data?.cpassword) {
      toast.error("Invalid Confirm Password");
    } else {
      await axiosApiInstance
        .post("users/forgotPassword", {
          email: data?.email,
          code: data?.code,
          password: data?.password,
        })
        .then((res) => {
          // toast.success(res?.data?.message);
          setTimeout(() => {
            navigate("/login");
          }, 2000);
        })
        .catch((err) => {
          toast.error(err?.response?.data?.message);
        });
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
            <ArrowBackRounded
              onClick={() => {
                if (state) {
                  setState(false);
                } else {
                  navigate("/login");
                }
              }}
            />
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
                Reset Password
              </Box>
              <Stack
                direction={{ xs: "column" }}
                justifyContent="center"
                alignItems="center"
                gap={{ xs: 2, sm: 3, md: 4 }}
                my={{ xs: 2, sm: 3, md: 4 }}
              >
                {!state ? (
                  <InputBase
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
                ) : (
                  <>
                    <InputBase
                      placeholder="Enter code"
                      value={data.code}
                      onChange={(e) => {
                        setData({ ...data, code: e.target.value });
                      }}
                      type="text"
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
                    />
                    <InputBase
                      placeholder="Enter password"
                      value={data.password}
                      onChange={(e) => {
                        setData({ ...data, password: e.target.value });
                      }}
                      type="text"
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
                    />
                    <InputBase
                      placeholder="Enter confirm password"
                      value={data.cpassword}
                      onChange={(e) => {
                        setData({ ...data, cpassword: e.target.value });
                      }}
                      type="text"
                      sx={{
                        width: "100%",
                        borderRadius: "15px",
                        border: colorConfirm
                          ? "1px solid red"
                          : "1px solid #E6E6E6",
                        color: colorConfirm ? "red" : "#000",
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
                    />
                  </>
                )}
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
                  mb: { xs: 1, sm: 1.5 },
                  "&:hover": {
                    color: "#3B17AD",
                    border: "1px solid #3B17AD",
                  },
                }}
                onClick={() => {
                  state ? handleUpdatePassword() : handleSubmitEmailForCode();
                }}
              >
                {state ? "Send" : "Submit"}
              </Button>
            </Container>
          </Box>
        </Container>
      </Box>
    </>
  );
}
