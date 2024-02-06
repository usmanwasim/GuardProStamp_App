import React, { useRef } from "react";
import { Search } from "@mui/icons-material";
import { Box, InputBase, Stack, Tab, Tabs, Typography, Button, Grid } from "@mui/material";

import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore'; // Import plugin if needed

import Lottie from 'react-lottie';
import loadingAnimation from '../../assets/loadingAnimation.json';
import { YAxisData } from "./Charts/ChartData";
import { Bar } from "react-chartjs-2";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS } from 'chart.js/auto'
import { Chart } from 'react-chartjs-2'
// import {  Utils } from 'chart.js';




import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import PlanCheckerDetail from "./PlanCheckerDetail";
import LicenseAccountDetail from "./LicenseAccountDetail";
import LicenseAccountDetail2 from "./LicenseAccountDetail2";
import DeleteModal from "./Dialogs/DeleteModal";
import EditModal from "./Dialogs/EditModal";
import AddLicenseAccount from "./Dialogs/AddLicenseAccount";
import AddPlancheckerAccount from "./Dialogs/AddPlancheckerAccount";
import axiosApiInstance from "../../api/api";

;

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
  const [planCheckerdata, setPlanCheckerdata] = useState([]);
  const [planCheckerdata1, setPlanCheckerdata1] = useState([]);
  const [licenseAccountData, setLicenseAccountData] = useState([]);
  const [licenseAccountData1, setLicenseAccountData1] = useState([]);
  const [Del, setDel] = useState(false);
  const [delData, setDelData] = useState({});
  const [add1, setAdd1] = useState(false);
  const [add, setAdd] = useState(false);
  const [edit, setEdit] = useState(false);
  const [editData, setEditData] = useState({});
  const [search, setSearch] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const contentRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [usersInfo, setUsersInfo] = useState({
    totalUser: null,
    appUser: null,
    planchecker: null,
    subsciberUsers: null,
    appUsersNotSubscribed: null,
    monthlySubsciberUsers: null,
    yearlySubsciberUsers: null,
    monthlyRevenue: null,
    yearlyRevenue: null,
    totalRevenue: null,
    percentageYearly: null,
    percentageMonthly: null,
    revenuepercentageMonthly: null,
    revenuepercentageYearly: null
  });
  const [usersInfoTimebase, setUsersInfoTimebase] = useState({
    totalUser: null,
    appUser: null,
    planchecker: null,
    subsciberUsers: null,
    appUsersNotSubscribed: null,
    monthlySubsciberUsers: null,
    yearlySubsciberUsers: null,
    monthlyRevenue: null,
    yearlyRevenue: null,
    totalRevenue: null,
    percentageYearly: null,
    percentageMonthly: null
  });


  const [weeklyMoneyCollectedData, setWeeklyMoneyCollectedData] = useState([]);
  const [userData, setUserData] = useState({});
  const [weekTotal, setWeekTotal] = useState();
  dayjs.extend(isSameOrBefore);

  useEffect(() => {
    const fetchWeeklyMoneyCollectedData = async () => {
      try {
        // Make the API call here
        const response = await axiosApiInstance.get(`${import.meta.env.VITE_BASE_URL}users/weeklyMoneyCollected`);
        const data = response?.data?.Data;



        if (data && data.dailyRevenueByDay) {

          const mappedData = data.dailyRevenueByDay.map((dayData) => ({
            year: dayData.day,
            userGain: dayData.revenue,
          }));
          console.log("Mapped Data", mappedData[1])

          setWeeklyMoneyCollectedData(mappedData);
          setWeekTotal(response?.data?.totalMoneyCollected);
          console.log("Collected Money", weekTotal)
          console.log("The Weekly data is", weeklyMoneyCollectedData);
        } else {
          console.error("Empty or invalid API response");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchWeeklyMoneyCollectedData();
  }, []);


  useEffect(() => {
    // Update userData state when weeklyMoneyCollectedData changes
    setUserData({
      labels: weeklyMoneyCollectedData.map((data) => data.year),
      datasets: [
        {
          label: "Money Collected",
          data: weeklyMoneyCollectedData.map((data) => data.userGain),
          backgroundColor: ["#4CECB2", "#3821A5"],
          borderRadius: 5,
          barThickness: 25,
        },
      ],
    });
  }, [weeklyMoneyCollectedData]);


  const yAxisTickLabels = YAxisData.map((data) => data.Number);

  const options = {
    layout: {
      padding: {
        left: 30, // Adjust this value to add margin on the left side
      },
      marginLeft: {
        left: 10
      },
    },
    scales: {
      y: {
        ticks: {
          callback: function (value, index, values) {
            return yAxisTickLabels[index] + "$"; // Customize the y-axis tick formatting as needed
          },
        },
        min: 0, // Set the minimum value on the y-axis
        max: 60, // Set the maximum value on the y-axis
      },
    },
  };




  const scrollToContent = () => {
    contentRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const handleDateChange = (date) => {

    const parsedDate = new Date(date);
    // Ensure the parsed date is valid
    if (!isNaN(parsedDate.getTime())) {
      // Convert the parsed date to the required format
      const year = parsedDate.getFullYear();

      const month = String(parsedDate.getMonth() + 1).padStart(2, '0');
      const day = String(parsedDate.getDate()).padStart(2, '0');

      const formattedDate = `${year}-${month}-${day}T00:00:00`;

      // Use the formatted date
      setSelectedDate(formattedDate);
    }
  };



  // filter for search
  useEffect(() => {
    setPlanCheckerdata1(
      planCheckerdata.filter((item) =>
        item?.name?.toLowerCase().includes(search.toLowerCase())
      )
    );
    setLicenseAccountData1(
      licenseAccountData.filter((item) =>
        item?.name?.toLowerCase().includes(search.toLowerCase())
      )
    );


  }, [search]);
  useEffect(() => {
    setPlanCheckerdata1(planCheckerdata);
    setLicenseAccountData1(licenseAccountData);

  }, [planCheckerdata, licenseAccountData])

  // Tabs state
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const getPlanChecker = async () => {
    let response = await axiosApiInstance.get(
      `${import.meta.env.VITE_BASE_URL}users/dashboard?asPlanChecker=${true}`
    );
    setPlanCheckerdata(response?.data?.data);
  };
  const getLicenseAccount = async () => {
    let response = await axiosApiInstance.get(
      `${import.meta.env.VITE_BASE_URL}users/dashboard?asPlanChecker=${false}`
    );
    setLicenseAccountData(response?.data?.data);
  };
  useEffect(() => {
    getPlanChecker();
    getLicenseAccount();
  }, []);

  useEffect(() => {
    getPlanChecker();
    getLicenseAccount();
  }, [delData, editData]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosApiInstance.get(
          `${import.meta.env.VITE_BASE_URL}users/usersInfo`
        );
        const data = response?.data?.Data;
        // console.log("data is",data)

        setUsersInfo({
          totalUser: data.tatalUser,
          appUser: data.appUser,
          planchecker: data.planchecker,
          subsciberUsers: data.subsciberUsers,
          appUsersNotSubscribed: data.appUsersNotSubscribed,
          monthlySubsciberUsers: data.monthlySubsciberUsers,
          yearlySubsciberUsers: data.yearlySubsciberUsers,
          monthlyRevenue: data.monthlyRevenue,
          yearlyRevenue: data.yearlyRevenue,
          totalRevenue: data.totalRevenue,
          percentageYearly: data.percentageYearly,
          percentageMonthly: data.percentageMonthly,
          revenuepercentageMonthly: data.revenuepercentageMonthly,
          revenuepercentageYearly: data.revenuepercentageYearly,
        });
        // console.log("The user info is ",usersInfo);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array to run the effect only once on mount



  const fetchDataTimebase = async () => {
    try {
      setLoading(true);
      const response = await axiosApiInstance.get(
        `${import.meta.env.VITE_BASE_URL}users/timebaseUserInfo`,
        {
          params: {
            startDate: selectedDate,
          },
        }
      );
      const data = response?.data?.Data;
      console.log("Data for time", data)

      setUsersInfoTimebase({
        totalUser: data.tatalUser,
        appUser: data.appUser,
        planchecker: data.planchecker,
        subsciberUsers: data.subsciberUsers,
        appUsersNotSubscribed: data.appUsersNotSubscribed,
        monthlySubsciberUsers: data.monthlySubsciberUsers,
        yearlySubsciberUsers: data.yearlySubsciberUsers,
        monthlyRevenue: data.monthlyRevenue,
        yearlyRevenue: data.yearlyRevenue,
        totalRevenue: data.totalRevenue,
        percentageYearly: data.percentageYearly,
        percentageMonthly: data.percentageMonthly,
      });
      // console.log("The user info is ",usersInfo);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false); // Set loading to false when data fetching is complete (either success or error)
    }
  };


  const loadingOptions = {
    loop: true,
    autoplay: true,
    animationData: loadingAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };




  const percentage = { monthly: usersInfo.percentageMonthly, yearly: usersInfo.percentageYearly, min: 0, max: 100 };

  const dataDoughnut = {
    labels: ['Blue', 'Green'],
    datasets: [
      {
        label: 'Users',
        data: [percentage.monthly, percentage.yearly],
        backgroundColor: [
          '#3821A5', // Green
          '#4CECB2', // Blue
        ],
      }
    ]
  };


  const centerTextPlugin = {
    id: 'centerTextPlugin',
    afterDraw: (chart) => {
      var width = chart.width,
        height = chart.height,
        ctx = chart.ctx;

      ctx.restore();
      ctx.font = '700 25px Arial';
      ctx.textBaseline = 'middle';

      // Use a fixed value or a dynamic value you've fetched
      let text = usersInfo?.subsciberUsers ?? 'N/A', // Replace this with your dynamic value, e.g., usersInfo?.subsciberUsers
        textX = Math.round((width - ctx.measureText(text).width) / 2),
        textY = height / 2;

      ctx.fillText(text, textX, textY);

      ctx.font = '500 12px Arial';
      let subText = 'Total Subscribers',
        subTextX = Math.round((width - ctx.measureText(subText).width) / 2),
        subTextY = textY + 20; // Adjust the Y offset as needed

      ctx.fillText(subText, subTextX, subTextY);

      ctx.save();
    }
  };

  const optionsDoughtnut = {
    cutout: "65%",
    plugins: {
      legend: {
        display: true,
        // other legend options
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            let label = context.label || '';
            if (label) {
              label += ': ';
            }
            if (context.parsed !== null) {
              label += context.parsed + '%';
            }
            return label;
          }
        }
      }
    }

  }





  // console.log("The selected date ",selectedDate)

  return (
    <Box>
      <DeleteModal
        open={Del}
        setOpen={setDel}
        data={delData}
        setData={setDelData}
      />
      <EditModal
        open={edit}
        setOpen={setEdit}
        data={editData}
        setData={setEditData}
      />
      <AddLicenseAccount open={add} setOpen={setAdd} />
      <AddPlancheckerAccount open={add1} setOpen={setAdd1} />

      {/* page content */}
      <Box mb={{ xs: 2, sm: 3 }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          TabIndicatorProps={{ sx: { display: "none" } }}
          textColor="inherit"
        >
          {["License Account", "Plan Checker", "Subscriptions", "Overall Performance"].map((text, i) => (
            <Tab
              key={i}
              label={
                <Box
                  sx={{
                    whiteSpace: "noWrap",
                    color: "#000",
                    fontFamily: "",
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
          data={licenseAccountData1}
          setAdd={setAdd}
          setEdit={setEdit}
          setDel={setDel}
          setDelData={setDelData}
          setEditData={setEditData}
        />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        {planCheckerdata1 && <PlanCheckerDetail
          data={planCheckerdata1}
          setAdd={setAdd1}
          setEdit={setEdit}
          setDel={setDel}
          setDelData={setDelData}
          setEditData={setEditData}
        />}
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2} style={{ marginLeft: "30px" }}>

        <Typography
          mt={5}
          sx={{
            color: "#4D4D4D",
            fontFamily: "Inter",
            fontSize: "20px",
            fontStyle: "normal",
            fontWeight: "500",
            lineHeight: "normal",
            pt: 2
          }}
        >Your Subscription Dashboard</Typography>
        <Box
          sx={{
            display: "flex",
            mt: 3,
            // background:"red"
          }}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['DatePicker']}>

              <DatePicker
            sx={{
              width: "340px",
              background: "#DFFFF3",
              ".MuiOutlinedInput-root.Mui-error .MuiOutlinedInput-notchedOutline": {
                borderColor: "#4CECB2", // Use your default or preferred border color
              },
              "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: "#4CECB2", // Override hover state if necessary
              },
              "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "#4CECB2", // Override focus state if necessary
              },
              "& .MuiInputLabel-root": { // Normal state
                color: "black", // Change as needed
              },
              "& .Mui-focused .MuiInputLabel-root": { // Focused state
                color: "black", // Change as needed
              },
              "& .Mui-error .MuiInputLabel-root": { // Error state
                color: "black", // Use this to set color when in error state, if different
              }
            }}
                label="Select Date"
                value={dayjs(selectedDate)}
                onChange={(newDate) => handleDateChange(newDate)}
              />

            </DemoContainer>
          </LocalizationProvider>

          <Button sx={{

            height: "54px",
            borderRadius: "3px",
            border: "1px solid #4CECB2",

            ml: 3,
            mt: 1,
            background: "#DFFFF3",
            color: "black"
          }} variant="outlined"
            disabled={loading}
            onClick={fetchDataTimebase}
          >


            {loading ? (
              <div
                style={{
                  position: 'fixed',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  background: 'rgba(255, 255, 255, 0.8)',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  zIndex: 9999,
                }}
              >
                <Lottie options={loadingOptions} height={400} width={400} />
              </div>
            ) : (
              'Search'
            )}


          </Button>


        </Box>

        <Box

          sx={{
            display: 'flex',
            mt: 6,
          }}
        >
          <Box
            sx={{
              width: "208px",
              height: "131px",
              borderRadius: "9px",
              background: "#FFF",
              boxShadow: "0px 0px 30px 0px rgba(76, 236, 178, 0.30)",

              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              ml: 4,
              // justifyContent: 'center', 
            }}

          >
            <Typography
              sx={{
                color: "#4D4D4D",
                fontFamily: "Inter",
                fontSize: "15px",
                fontStyle: "normal",
                fontWeight: "600",
                lineHeight: "normal",
                pt: 3

              }}
            >
              Total Submission
            </Typography>
            <Typography
              sx={{
                color: "#4D4D4D",
                fontFamily: "Inter",
                fontSize: "25px",
                fontStyle: "normal",
                fontWeight: "600",
                lineHeight: "normal",
                pt: 3

              }}
            >
              {selectedDate ? usersInfoTimebase?.appUser : usersInfo?.appUser}
            </Typography>

          </Box>
          <Box
            sx={{
              width: "208px",
              height: "131px",
              borderRadius: "9px",
              background: "#FFF",
              boxShadow: "0px 0px 30px 0px rgba(76, 236, 178, 0.30)",
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              ml: 4,
              // justifyContent: 'center', 
            }}

          >
            <Typography
              sx={{
                color: "#4D4D4D",
                fontFamily: "Inter",
                fontSize: "15px",
                fontStyle: "normal",
                fontWeight: "600",
                lineHeight: "normal",
                pt: 3

              }}
            >
              New Subscriber
            </Typography>
            <Typography
              sx={{
                color: "#4D4D4D",
                fontFamily: "Inter",
                fontSize: "25px",
                fontStyle: "normal",
                fontWeight: "600",
                lineHeight: "normal",
                pt: 3

              }}
            >
              {selectedDate ? usersInfoTimebase?.subsciberUsers : usersInfo?.subsciberUsers}
            </Typography>

          </Box>
          <Box
            sx={{
              width: "208px",
              height: "131px",
              borderRadius: "9px",
              background: "#FFF",
              boxShadow: "0px 0px 30px 0px rgba(76, 236, 178, 0.30)",
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              ml: 4,
              // justifyContent: 'center', 
            }}

          >
            <Typography
              sx={{
                color: "#4D4D4D",
                fontFamily: "Inter",
                fontSize: "15px",
                fontStyle: "normal",
                fontWeight: "600",
                lineHeight: "normal",
                pt: 3

              }}
            >
              Revenue
            </Typography>
            <Typography
              sx={{
                color: "#4D4D4D",
                fontFamily: "Inter",
                fontSize: "25px",
                fontStyle: "normal",
                fontWeight: "600",
                lineHeight: "normal",
                pt: 3

              }}
            >
              ${selectedDate ? usersInfoTimebase?.totalRevenue : usersInfo?.totalRevenue}
            </Typography>

          </Box>
          <Box
            sx={{
              width: "208px",
              height: "131px",
              borderRadius: "9px",
              background: "#FFF",
              boxShadow: "0px 0px 30px 0px rgba(76, 236, 178, 0.30)",
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              ml: 4,
              // justifyContent: 'center', 
            }}

          >
            <Typography
              sx={{
                color: "#4D4D4D",
                fontFamily: "Inter",
                fontSize: "15px",
                fontStyle: "normal",
                fontWeight: "600",
                lineHeight: "normal",
                pt: 3

              }}
            >
              Renewal Subscriber
            </Typography>
            <Typography
              sx={{
                color: "#4D4D4D",
                fontFamily: "Inter",
                fontSize: "25px",
                fontStyle: "normal",
                fontWeight: "600",
                lineHeight: "normal",
                pt: 3

              }}
            >
              {selectedDate ? usersInfoTimebase?.monthlySubsciberUsers : usersInfo?.monthlySubsciberUsers}
            </Typography>

          </Box>


        </Box>
        <Typography
          sx={{
            color: "#4D4D4D",
            fontFamily: "Inter",
            fontSize: "30px",
            fontStyle: "normal",
            fontWeight: "600",
            lineHeight: "normal",
            pt: 3,
            mt: 6

          }}
        >
          All Subscriptions
        </Typography>

        <Box
          sx={{
            display: 'flex',
            mt: 6,
            ml: 4,
            mb: 4

          }}>
          <div
            style={{
              width: 325, // Increase width
              height: 325,
            }}>

            <Doughnut data={dataDoughnut} options={optionsDoughtnut} plugins={[centerTextPlugin]} />
          </div>


          <Box
            sx={{
              width: '570px',
              height: '294px',
              borderRadius: '12px',
              background: '#F8F9FA',
              ml: 8,
              pt: 4,



            }}
          >

            <Box
              sx={{
                display: "flex",
                ml: 1,
                // pl: 0.5
              }}
            >




              {/* Column */}
              <Box
                sx={{
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'left',
                  p: 0.5,
                  ml: 3
                }}
              >

                <Typography
                  sx={{
                    color: "#4D4D4D",
                    fontFamily: "Inter",
                    fontSize: "15px",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight: "normal",


                  }}

                >

                  Subscription Type</Typography>

                {/* Placeholder Data */}
                <Box
                  sx={{
                    display: "flex",
                    mt: 2,
                    pt: 2
                  }}
                >
                  <Box
                    sx={{
                      width: "22px",
                      height: "22px",
                      borderRadius: "4.148px",
                      background: "#4CECB2"
                    }}
                  >

                  </Box>
                  <Typography
                    sx={{
                      color: "#4D4D4D",
                      fontFamily: "Inter",
                      fontSize: "14px",
                      fontStyle: "normal",
                      fontWeight: "500",
                      lineHeight: "25.742px",
                      ml: 2

                    }}
                  >Yearly</Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    mt: 2,
                    pt: 2
                  }}
                >
                  <Box
                    sx={{
                      width: "22px",
                      height: "22px",
                      borderRadius: "4.148px",
                      background: "#3821A5"
                    }}
                  >

                  </Box>
                  <Typography
                    sx={{
                      color: "#4D4D4D",
                      fontFamily: "Inter",
                      fontSize: "14px",
                      fontStyle: "normal",
                      fontWeight: "500",
                      lineHeight: "25.742px",
                      ml: 2

                    }}
                  >Monthly</Typography>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    mt: 2,
                    pt: 2
                  }}
                >
                  <Box
                    sx={{
                      width: "22px",
                      height: "22px",
                      borderRadius: "4.148px",
                      background: "#4CECB2"
                    }}
                  >

                  </Box>
                  <Typography
                    sx={{
                      color: "#4D4D4D",
                      fontFamily: "Inter",
                      fontSize: "14px",
                      fontStyle: "normal",
                      fontWeight: "500",
                      lineHeight: "25.742px",
                      ml: 2

                    }}
                  >Yearly Revenue</Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    mt: 2,
                    pt: 2
                  }}
                >
                  <Box
                    sx={{
                      width: "22px",
                      height: "22px",
                      borderRadius: "4.148px",
                      background: "#3821A5"
                    }}
                  >

                  </Box>
                  <Typography
                    sx={{
                      color: "#4D4D4D",
                      fontFamily: "Inter",
                      fontSize: "14px",
                      fontStyle: "normal",
                      fontWeight: "500",
                      lineHeight: "25.742px",
                      ml: 2

                    }}
                  >Monthly Revenue</Typography>
                </Box>



              </Box>
              <Box
                sx={{
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'left',
                  ml: 3.5
                }}
              >

                <Typography
                  sx={{
                    color: "#4D4D4D",
                    fontFamily: "Inter",
                    fontSize: "15px",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight: "normal",
                    p: 0.5


                  }}

                >

                  Subscribers</Typography>

                <Box
                  sx={{
                    display: "flex",
                    mt: 2,
                    pt: 2
                  }}
                >

                  <Typography
                    sx={{
                      color: "#4D4D4D",
                      fontFamily: "Inter",
                      fontSize: "14px",
                      fontStyle: "normal",
                      fontWeight: "500",
                      lineHeight: "25.742px",
                      ml: 2

                    }}
                  >{usersInfo?.yearlySubsciberUsers}</Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    mt: 2,
                    pt: 2
                  }}
                >

                  <Typography
                    sx={{
                      color: "#4D4D4D",
                      fontFamily: "Inter",
                      fontSize: "14px",
                      fontStyle: "normal",
                      fontWeight: "500",
                      lineHeight: "25.742px",
                      ml: 2

                    }}
                  >{usersInfo?.monthlySubsciberUsers}</Typography>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    mt: 1.7,
                    pt: 2
                  }}
                >

                  <Typography
                    sx={{
                      color: "#4D4D4D",
                      fontFamily: "Inter",
                      fontSize: "14px",
                      fontStyle: "normal",
                      fontWeight: "500",
                      lineHeight: "25.742px",
                      ml: 2

                    }}
                  >${usersInfo?.yearlyRevenue}</Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    mt: 1.7,
                    pt: 2
                  }}
                >

                  <Typography
                    sx={{
                      color: "#4D4D4D",
                      fontFamily: "Inter",
                      fontSize: "14px",
                      fontStyle: "normal",
                      fontWeight: "500",
                      lineHeight: "25.742px",
                      ml: 2

                    }}
                  >${usersInfo?.monthlyRevenue}</Typography>
                </Box>

              </Box>

              {/* <Box
                sx={{
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'left',
                  ml: 3
                }}
              >

               

                <Box
                  sx={{
                    display: "flex",
                    mt: 8,
                    pt: 2
                  }}
                >

                  <Typography
                    sx={{
                      color: "#4D4D4D",
                      fontFamily: "Inter",
                      fontSize: "14px",
                      fontStyle: "normal",
                      fontWeight: "500",
                      lineHeight: "25.742px",
                      ml: 2

                    }}
                  >${usersInfo?.yearlyRevenue}</Typography>
                </Box> 
                <Box
                  sx={{
                    display: "flex",
                    mt: 5,
                    pt: 2
                  }}
                >

                  <Typography
                    sx={{
                      color: "#4D4D4D",
                      fontFamily: "Inter",
                      fontSize: "14px",
                      fontStyle: "normal",
                      fontWeight: "500",
                      lineHeight: "25.742px",
                      ml: 2

                    }}
                  >${usersInfo?.monthlyRevenue}</Typography>
                </Box>

              </Box> */}


              <Box
                sx={{
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'left',
                  ml: 3

                }}
              >

                <Typography
                  sx={{
                    color: "#4D4D4D",
                    fontFamily: "Inter",
                    fontSize: "15px",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight: "normal",
                    p: 0.5

                  }}

                >

                  Percentage</Typography>


                <Box
                  sx={{
                    display: "flex",
                    mt: 2,
                    pt: 2
                  }}
                >

                  <Typography
                    sx={{
                      color: "#4D4D4D",
                      fontFamily: "Inter",
                      fontSize: "14px",
                      fontStyle: "normal",
                      fontWeight: "500",
                      lineHeight: "25.742px",
                      ml: 1

                    }}
                  >{usersInfo?.percentageYearly}%</Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    mt: 2,
                    pt: 2
                  }}
                >

                  <Typography
                    sx={{
                      color: "#4D4D4D",
                      fontFamily: "Inter",
                      fontSize: "14px",
                      fontStyle: "normal",
                      fontWeight: "500",
                      lineHeight: "25.742px",
                      ml: 1

                    }}
                  >{usersInfo.percentageMonthly}%</Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    mt: 1.7,
                    pt: 2
                  }}
                >

                  <Typography
                    sx={{
                      color: "#4D4D4D",
                      fontFamily: "Inter",
                      fontSize: "14px",
                      fontStyle: "normal",
                      fontWeight: "500",
                      lineHeight: "25.742px",
                      ml: 1

                    }}
                  >{usersInfo?.revenuepercentageYearly}%</Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    mt: 1.7,
                    pt: 2
                  }}
                >

                  <Typography
                    sx={{
                      color: "#4D4D4D",
                      fontFamily: "Inter",
                      fontSize: "14px",
                      fontStyle: "normal",
                      fontWeight: "500",
                      lineHeight: "25.742px",
                      ml: 1

                    }}
                  >{usersInfo.revenuepercentageMonthly}%</Typography>
                </Box>

              </Box>

            </Box>
          </Box>

        </Box>

      </CustomTabPanel >



      <CustomTabPanel value={value} index={3} style={{ marginLeft: "30px" }}>

        <Typography
          mt={5}
          sx={{
            color: "#4D4D4D",
            fontFamily: "Inter",
            fontSize: "30px",
            fontStyle: "normal",
            fontWeight: "700",
            lineHeight: "normal",
            pt: 2
          }}
        >Overall Performance</Typography>




        <Box

          sx={{
            display: 'flex',
            mt: 6,
            mb: 6
          }}
        >



          <Box
            sx={{
              width: "312px",
              height: "290px",
              borderRadius: "9px",
              background: "#FFF",
              boxShadow: "0px 0px 30px 0px rgba(76, 236, 178, 0.30)",
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              ml: 4,
              // justifyContent: 'center', 
            }}

          >

            <Box
              sx={{
                pt: 2
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="157" height="157" viewBox="0 0 157 157" fill="none">
                <circle cx="78.5481" cy="78.1179" r="78.1214" fill="#4CECB2" fill-opacity="0.17" />
                <path d="M94.1098 58.8127C94.1098 67.2341 87.2828 74.061 78.8615 74.061C70.4402 74.061 63.6133 67.2341 63.6133 58.8127C63.6133 50.3913 70.4402 43.5645 78.8615 43.5645C87.2828 43.5645 94.1098 50.3913 94.1098 58.8127Z" stroke="#3821A5" stroke-width="1.71451" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M78.8593 85.4972C64.1219 85.4972 52.1748 97.4442 52.1748 112.182H105.544C105.544 97.4442 93.5967 85.4972 78.8593 85.4972Z" stroke="#3821A5" stroke-width="1.71451" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </Box>
            <Typography
              sx={{
                color: "#4CECB2",
                textAlign: "center",
                fontFamily: "Poppins",
                fontSize: "46px",
                fontStyle: "normal",
                fontWeight: "700",
                lineHeight: "150%", /* 69.482px */



              }}
            >
              {usersInfo?.appUser}
            </Typography>
            <Typography
              sx={{
                color: "#000",

                // fontFamily: "Poppins",
                fontSize: "13px",
                fontStyle: "normal",
                fontWeight: "700",
                lineHeight: "150%", /* 69.482px */


              }}
            >
              All App Users
            </Typography>

          </Box>

          <Box
            sx={{
              width: "312px",
              height: "290px",
              borderRadius: "9px",
              background: "#FFF",
              boxShadow: "0px 0px 30px 0px rgba(76, 236, 178, 0.30)",
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              ml: 4,
              cursor: "pointer"
              // justifyContent: 'center', 
            }}
            onClick={scrollToContent}

          >

            <Box
              sx={{
                pt: 2
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="157" height="157" viewBox="0 0 157 157" fill="none">
                <circle cx="78.5481" cy="78.1179" r="78.1214" fill="#4CECB2" fill-opacity="0.17" />
                <path d="M94.1098 58.8127C94.1098 67.2341 87.2828 74.061 78.8615 74.061C70.4402 74.061 63.6133 67.2341 63.6133 58.8127C63.6133 50.3913 70.4402 43.5645 78.8615 43.5645C87.2828 43.5645 94.1098 50.3913 94.1098 58.8127Z" stroke="#4CECB2" stroke-width="1.71451" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M78.8593 85.4972C64.1219 85.4972 52.1748 97.4442 52.1748 112.182H105.544C105.544 97.4442 93.5967 85.4972 78.8593 85.4972Z" stroke="#4CECB2" stroke-width="1.71451" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </Box>
            <Typography
              sx={{
                color: "#4CECB2",
                textAlign: "center",
                fontFamily: "Poppins",
                fontSize: "46px",
                fontStyle: "normal",
                fontWeight: "700",
                lineHeight: "150%", /* 69.482px */



              }}
            >
              {usersInfo?.subsciberUsers}
            </Typography>
            <Typography
              sx={{
                color: "#000",

                // fontFamily: "Poppins",
                fontSize: "13px",
                fontStyle: "normal",
                fontWeight: "700",
                lineHeight: "150%", /* 69.482px */


              }}
            >
              App Subscribe User
            </Typography>

          </Box>


          <Box
            sx={{
              width: "312px",
              height: "290px",
              borderRadius: "9px",
              background: "#4CECB2",
              boxShadow: "0px 0px 30px 0px rgba(76, 236, 178, 0.30)",
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              ml: 4,
              // justifyContent: 'center', 
            }}

          >

            <Box
              sx={{
                pt: 2
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="156" height="157" viewBox="0 0 156 157" fill="none">
                <circle cx="78.0489" cy="78.4234" r="77.8419" fill="white" />
                <path d="M68.642 106.017H52.6195C47.8967 106.017 45.5353 106.017 43.7314 105.098C42.1446 104.29 40.8546 103 40.0461 101.413C39.127 99.6092 39.127 97.2475 39.127 92.5247V60.4798C39.127 55.7569 39.127 53.3955 40.0461 51.5916C40.8546 50.0048 42.1446 48.7148 43.7314 47.9063C45.5353 46.9872 47.8967 46.9872 52.6195 46.9872H101.53C106.253 46.9872 108.615 46.9872 110.418 47.9063C112.005 48.7148 113.295 50.0048 114.104 51.5916C115.023 53.3955 115.023 55.7569 115.023 60.4798V61.7447M64.4256 65.9611V61.7447M64.4256 65.9611H72.8589M64.4256 65.9611C59.7149 65.9611 56.003 66.4931 55.9931 71.5795C55.9857 75.3756 55.9931 76.5022 64.4259 76.5022C72.8589 76.5022 72.8589 77.3687 72.8589 81.4216C72.8589 84.4671 72.8584 87.0433 64.4256 87.0433M64.4256 87.0433V91.2598M64.4256 87.0433H55.9931M85.5078 68.0694H98.1571M85.5078 110.234L94.046 108.526C94.7902 108.377 95.1626 108.303 95.5096 108.166C95.8178 108.046 96.1108 107.889 96.3819 107.7C96.6881 107.486 96.9562 107.218 97.4934 106.681L115.023 89.1515C117.352 86.8228 117.352 83.0474 115.023 80.7187C112.694 78.3899 108.919 78.3899 106.59 80.7187L89.0605 98.2481C88.5233 98.7853 88.2552 99.0534 88.0418 99.3595C87.8525 99.6306 87.6957 99.9237 87.5751 100.232C87.4389 100.579 87.3642 100.951 87.2154 101.695L85.5078 110.234Z" stroke="#4CECB2" stroke-width="4.09694" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </Box>
            <Typography
              sx={{
                color: "#FFF",
                textAlign: "center",
                fontFamily: "Poppins",
                fontSize: "46px",
                fontStyle: "normal",
                fontWeight: "700",
                lineHeight: "150%", /* 69.482px */



              }}
            >
              ${usersInfo?.totalRevenue}
            </Typography>
            <Typography
              sx={{
                color: "#000",

                // fontFamily: "Poppins",
                fontSize: "13px",
                fontStyle: "normal",
                fontWeight: "700",
                lineHeight: "150%", /* 69.482px */


              }}
            >
              Collected Money
            </Typography>

          </Box>

        </Box>




        {/* statis table */}

        <Box
          sx={{
            width: "1090px",
            height: "670px",
            background: "var(--Neutral-Colors-White, #FFF)",
            borderRadius: "20px",
            boxShadow: "0px 2px 6px 0px rgba(13, 10, 44, 0.08)",
            mt: 8,
            ml: 1.7,
            mb: 6

          }}
        >

          <Box
            sx={{
              ml: 5,
              mt: 3,
              pt: 4,

            }}
          >
            <Typography
            >Statistics</Typography>

            <Box
              sx={{
                display: "flex"
              }}
            >
              <Typography
                sx={{
                  color: "#3821A5",
                  fontFamily: "Inter",
                  fontSize: "22px",
                  fontStyle: "normal",
                  fontWeight: "700",
                  lineHeight: "normal",


                }}



              >payment Received</Typography>
              <Typography
                sx={{
                  width: "80px",
                  height: '35px',
                  fontSize: "18px",
                  background: "#4CECB2",
                  borderRadius: "5px",
                  padding: "5px 12px",
                  color: "white",
                  textAlign: "center",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: 'center',
                  marginLeft: 'auto', // Align to the right
                  mr: 3
                }}

              >Week</Typography>
            </Box>
          </Box>


          <Bar data={userData} options={options} />


        </Box>


        <Box
          sx={{
            mt: 4
          }}


          ref={contentRef}>

          <LicenseAccountDetail2
            data={licenseAccountData1.filter(item => item.subscriptionMeta?.subscribed)}

          />
        </Box>


      </CustomTabPanel >
    </Box >
  );
}
