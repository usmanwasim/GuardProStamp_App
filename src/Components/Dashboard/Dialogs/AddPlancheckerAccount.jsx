import {
  Box,
  Button,
  Dialog,
  InputBase,
  MenuItem,
  Select,
  Slide,
  Stack,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { handleRegister } from "../../../api/api";
import axios from "axios";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
export default function AddModal({ open, setOpen }) {
  const [states, setStates] = useState([]);
  const [citys, setCitys] = useState([]);
  const [data, setData] = useState({
    asPlanChecker: true,
    city: "",
    state: "",
    agency: "",
    department: "",
    name: "",
    email: "",
    password: "",
  });
  const [message, setMessage] = useState({ status: false, message: "" });

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

  const handleAddAccount = async () => {
    try {
      const validPassword = new RegExp("^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$");
      if (!data?.state) {
        setMessage({ status: false, message: "Please Enter State" });
      } else if (!data?.city) {
        setMessage({ status: false, message: "Please Enter City" });
      } else if (!data?.agency) {
        setMessage({ status: false, message: "Please Enter Agency" });
      } else if (!data?.department) {
        setMessage({ status: false, message: "Please Enter Department" });
      } else if (!data?.name) {
        setMessage({ status: false, message: "Please Enter Name" });
      } else if (!data?.email) {
        setMessage({ status: false, message: "Please Enter Email" });
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(data?.email)
      ) {
        setMessage({ status: false, message: "Invalid Email Format" });
      } else if (!data?.password) {
        setMessage({ status: false, message: "Please Enter Password" });
      } else if (!validPassword.test(data?.password)) {
        setMessage({
          status: false,
          message: "Password Format : (Alphabet & Numerics) & length-6",
        });
      } else {
        const resp = await handleRegister(data);
        if (resp?.data?.status == "success") {
          setMessage({
            status: true,
            message: resp?.data?.message,
          });
          setData({
            asPlanChecker: true,
            city: "",
            state: "",
            agency: "",
            department: "",
            name: "",
            email: "",
            password: "",
          });
          // reload window for the user we added
          window.location.reload();
          setOpen(false);
        }
      }
    } catch (err) {
      console.log(err);
      setMessage({ status: false, message: err?.response?.data?.message });
    }
  };
  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={() => setOpen(false)}
      aria-describedby="alert-dialog-slide-description"
    >
      <Box sx={{ p: { xs: 2, sm: 3.5, md: 5 } }}>
        <Box
          sx={{
            color: "#292D32",
            fontFamily: "Poppins",
            fontSize: { xs: "16px", sm: "24px" },
            fontStyle: "normal",
            fontWeight: "600",
            lineHeight: "normal",
            textAlign: "center",
            mb: { xs: 2, sm: 3, md: 4 },
          }}
        >
          {" "}
          Add New Account
        </Box>
        <Stack
          direction="column"
          sx={{
            gap: { xs: 1, sm: 1.5 },
            width: { xs: "auto", sm: "300px", md: "500px" },
          }}
        >
          <Stack
            direction="row"
            sx={{
              gap: { xs: 1, sm: 1.5 },
            }}
          >
            <Box sx={{ width: "100%" }}>
              <Select
                id="state"
                value={data.state}
                onChange={(e) => setData({ ...data, state: e.target.value })}
                sx={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  borderRadius: "15px",
                  border: "1px solid #4CECB2",
                  background: "rgba(76, 236, 178, 0.10)",
                  color: "#1C274C",
                  p: { xs: 0.8, sm: 1 },
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
                input={<InputBase />}
              >
                <MenuItem value="" disabled>
                  Enter your state
                </MenuItem>
                {states.map((item, i) => (
                  <MenuItem key={i} value={item.stateName}>
                    {item.stateName}
                  </MenuItem>
                ))}
              </Select>
            </Box>
            <Box sx={{ width: "100%" }}>
              <Select
                id="city"
                value={data.city}
                onChange={(e) => setData({ ...data, city: e.target.value })}
                sx={{
                  width: "100%",
                  borderRadius: "15px",
                  border: "1px solid #4CECB2",
                  background: "rgba(76, 236, 178, 0.10)",
                  p: { xs: 0.8, sm: 1 },
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
                input={<InputBase />}
              >
                <MenuItem value="" disabled>
                  Enter your city
                </MenuItem>
                {citys?.map((option, i) => (
                  <MenuItem key={i} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </Select>
            </Box>
            {/* <InputBase
              placeholder="state"
              sx={{
                borderRadius: "12px",
                border: "1px solid #4CECB2",
                background: "rgba(76, 236, 178, 0.10)",
                p: "6px 10px",
                width: "100%",
              }}
              onChange={(e) => {
                setData({
                  ...data,
                  state: e.target.value,
                });
              }}
            />
            <InputBase
              placeholder="city"
              sx={{
                borderRadius: "12px",
                border: "1px solid #4CECB2",
                background: "rgba(76, 236, 178, 0.10)",
                p: "6px 10px",
                width: "100%",
              }}
              onChange={(e) => {
                setData({
                  ...data,
                  city: e.target.value,
                });
              }}
            /> */}
          </Stack>
          <Stack
            direction="row"
            sx={{
              gap: { xs: 1, sm: 1.5 },
            }}
          >
            <InputBase
              placeholder="agency"
              sx={{
                borderRadius: "12px",
                border: "1px solid #4CECB2",
                background: "rgba(76, 236, 178, 0.10)",
                p: "6px 10px",
                width: "100%",
              }}
              onChange={(e) => {
                setData({
                  ...data,
                  agency: e.target.value,
                });
              }}
            />
            <InputBase
              placeholder="department"
              sx={{
                borderRadius: "12px",
                border: "1px solid #4CECB2",
                background: "rgba(76, 236, 178, 0.10)",
                p: "6px 10px",
                width: "100%",
              }}
              onChange={(e) => {
                setData({
                  ...data,
                  department: e.target.value,
                });
              }}
            />
          </Stack>

          <InputBase
            placeholder="Name"
            sx={{
              borderRadius: "12px",
              border: "1px solid #4CECB2",
              background: "rgba(76, 236, 178, 0.10)",
              p: "6px 10px",
              width: "100%",
            }}
            onChange={(e) => {
              setData({
                ...data,
                name: e.target.value,
              });
            }}
          />
          <InputBase
            placeholder="Email"
            sx={{
              borderRadius: "12px",
              border: "1px solid #4CECB2",
              background: "rgba(76, 236, 178, 0.10)",
              p: "6px 10px",
              width: "100%",
            }}
            onChange={(e) => {
              setData({
                ...data,
                email: e.target.value,
              });
            }}
          />

          <InputBase
            placeholder="Password"
            sx={{
              borderRadius: "12px",
              border: "1px solid #4CECB2",
              background: "rgba(76, 236, 178, 0.10)",
              p: "6px 10px",
              width: "100%",
            }}
            onChange={(e) => {
              setData({
                ...data,
                password: e.target.value,
              });
            }}
          />
        </Stack>

        {/* <Button
          sx={{
            display: "flex",
            mt: 3,
            p: "7px 15px",
            color: "#fff",
            borderRadius: "12px",
            background: "#3B17AD",
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: "600",
            fontSize: "13px",
            boxShadow: "0px 15px 25px 0px rgba(59, 23, 173, 0.25)",
            border: "1px solid #3821A5",
            "&:hover": {
              border: "1px solid #3821A5",
              color: "#3821A5",
            },
          }}
        >
          Upload Document
        </Button> */}
        <Button
          sx={{
            display: "flex",
            ml: "auto",
            mt: 3,
            p: "8px 25px",
            color: "#fff",
            borderRadius: "12px",
            background: "#4CECB2",
            boxShadow: "0px 15px 25px 0px #4CECB225",
            border: "1px solid #4CECB2",
            "&:hover": {
              border: "1px solid #4CECB2",
              color: "#4CECB2",
            },
          }}
          onClick={() => {
            handleAddAccount();
          }}
        >
          Save
        </Button>
        <Box sx={{ color: message?.status ? "#4CECB2" : "red" }}>
          {message?.message}
        </Box>
      </Box>
    </Dialog>
  );
}
AddModal.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
};
