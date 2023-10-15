import {
  Avatar,
  Box,
  Button,
  Grid,
  InputBase,
  Radio,
  Stack,
} from "@mui/material";
import PropTypes from "prop-types";
import { ArrowBackRounded, Send } from "@mui/icons-material";
import { useState } from "react";
import avatar1 from "../../assets/Images/avatar1.png";
import avatar2 from "../../assets/Images/avatar2.png";
import avatar3 from "../../assets/Images/avatar3.png";

let data = [
  { img: avatar1, name: "John" },
  { img: avatar2, name: "sam" },
  { img: avatar3, name: "Anna" },
  { img: avatar1, name: "John" },
  { img: avatar2, name: "sam" },
  { img: avatar3, name: "Anna" },
];

PlanTab2.propTypes = {
  state: PropTypes.any,
  setState: PropTypes.func.isRequired,
  setactiveChatID: PropTypes.func,
  activeChatID: PropTypes.any,
};
export default function PlanTab2({
  state,
  setState,
  // setactiveChatID,
  activeChatID,
}) {
  // radio chat state
  const [selectedValue, setSelectedValue] = useState();
  // active chat state
  const [ActiveChat, setActiveChat] = useState(0);
  console.log(activeChatID, "activeChatID");
  return (
    <>
      <Box>
        <Box
          sx={{
            mx: { xs: 3, sm: 5, md: 7 },
            mb: { xs: 2, sm: 3, md: 4 },
            borderRadius: "30px",
            background: "#F6F6F6",
            p: { xs: 1, sm: 2, md: 3 },
          }}
        >
          <Stack
            direction={{ xs: "row" }}
            justifyContent="space-between"
            alignItems="center"
            gap={{ xs: 2, sm: 3.5, md: 5 }}
          >
            <ArrowBackRounded
              sx={{ mb: { xs: 1, sm: 2 }, cursor: "pointer" }}
              onClick={() => setState(false)}
            />
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
              Messages
            </Box>
            <Box></Box>
          </Stack>
          <Box
            sx={{
              background: "#ffffff",
              p: { xs: 1, sm: 2, md: 3 },
              borderRadius: "30px",
            }}
          >
            {state ? (
              <Box>
                <Grid container spacing={{ xs: 1.5, sm: 3 }}>
                  <Grid item xs={12} sm={12} md={4}>
                    <Stack
                      direction={"column"}
                      sx={{
                        pt: 2,
                        gap: { xs: 2, sm: 3, md: 4 },
                        maxHeight: "40vh",
                        overflowY: "auto",
                        "&::-webkit-scrollbar": {
                          height: "5px",
                          width: "5px",
                        },
                        "&::-webkit-scrollbar-thumb": {
                          background: "#4CECB2",
                          borderRadius: "10px",
                        },
                        "&::-webkit-scrollbar-track": {
                          background: "#E6E6E6",
                          borderRadius: "15px",
                        },
                      }}
                    >
                      {/* all chat for that user or plan checker */}
                      {data.map((item, i) => (
                        <Box
                          key={i}
                          onClick={() => setActiveChat(i)}
                          sx={{
                            borderRadius: "15px",
                            height: "100%",
                            cursor: "pointer",
                            border:
                              ActiveChat === i
                                ? "1px solid #4CECB2"
                                : "1px solid #E6E6E6",
                          }}
                        >
                          <Box
                            sx={{
                              px: { xs: 1, sm: 1.5 },
                              mb: { xs: 1, sm: 1.5 },
                              mt: { xs: -1, sm: -1.5 },
                            }}
                          >
                            <Box
                              sx={{
                                color: "#292D32",
                                fontFamily: "Poppins",
                                fontSize: "15px",
                                fontStyle: "normal",
                                fontWeight: "700",
                                lineHeight: "normal",
                                display: "flex",
                                alignItems: "center",
                                gap: { xs: 0.7, sm: 1 },
                              }}
                            >
                              <Avatar
                                src={item.img}
                                sx={{ width: "25px", height: "25px" }}
                              />
                              <Box
                                sx={{
                                  borderRadius: "5px",
                                  background: "#4CECB2",
                                  height: "max-content",
                                  p: "2px 8px",
                                  fontSize: "12px",
                                }}
                              >
                                {item.name}
                              </Box>
                            </Box>
                            <Box
                              sx={{
                                color: "#000",
                                fontFamily: "Poppins",
                                fontSize: "14px",
                                fontStyle: "normal",
                                fontWeight: "400",
                                lineHeight: "normal",
                                mt: { xs: 0.5, sm: 0.8 },
                              }}
                            >
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit.
                            </Box>
                          </Box>
                        </Box>
                      ))}
                    </Stack>
                  </Grid>
                  <Grid item xs={12} sm={12} md={8}>
                    <Box
                      sx={{
                        borderRadius: "15px",
                        border: "1px solid #E6E6E6",
                        height: "100%",
                      }}
                    >
                      {/* header */}
                      <Box
                        sx={{
                          px: { xs: 1, sm: 2 },
                          mt: { xs: -1, sm: -1.5 },
                        }}
                      >
                        <Box
                          sx={{
                            color: "#292D32",
                            fontFamily: "Poppins",
                            fontSize: "15px",
                            fontStyle: "normal",
                            fontWeight: "700",
                            lineHeight: "normal",
                            display: "flex",
                            alignItems: "center",
                            gap: { xs: 1, sm: 1.5 },
                          }}
                        >
                          <Avatar
                            src={avatar1}
                            sx={{ width: "25px", height: "25px" }}
                          />
                          <Box
                            sx={{
                              borderRadius: "5px",
                              background: "#4CECB2",
                              height: "max-content",
                              p: "2px 8px",
                              fontSize: "12px",
                            }}
                          >
                            john
                          </Box>
                        </Box>
                      </Box>
                      {/* messages */}
                      <Box
                        sx={{
                          px: { xs: 1, sm: 2 },
                          maxHeight: "40vh",
                          overflowY: "auto",
                          "&::-webkit-scrollbar": {
                            height: "5px",
                            width: "5px",
                          },
                          "&::-webkit-scrollbar-thumb": {
                            background: "#4CECB2",
                            borderRadius: "10px",
                          },
                          "&::-webkit-scrollbar-track": {
                            background: "#E6E6E6",
                            borderRadius: "15px",
                          },
                        }}
                      >
                        {/* messages for active chat */}
                        {[1, 2, 3, 4, 5, 6].map((item, i) => (
                          <Box
                            key={i}
                            sx={{
                              p: { xs: 0.4, sm: 0.7 },
                              maxWidth: "60%",
                              ml: i % 2 === 1 ? "auto" : "0px",
                            }}
                          >
                            <Box
                              sx={{
                                color: "#292D32",
                                fontFamily: "Poppins",
                                fontSize: "15px",
                                fontStyle: "normal",
                                fontWeight: "700",
                                lineHeight: "normal",
                                display: "flex",
                                flexDirection:
                                  i % 2 === 1 ? "row-reverse" : "row",
                                justifyContent: "end",
                                alignItems: "center",
                                gap: { xs: 1, sm: 2 },
                                width: "100%",
                              }}
                            >
                              <Avatar
                                src={avatar1}
                                sx={{ width: "30px", height: "30px" }}
                              />
                              <Box
                                sx={{
                                  display: "flex",
                                  flexDirection:
                                    i % 2 === 1 ? "row-reverse" : "row",
                                  alignItems: "center",
                                  gap: { xs: 0.5, sm: 1 },
                                  width: "100%",
                                  fontSize: "11px",
                                  "& #name": {
                                    borderRadius: "5px",
                                    background: "#4CECB2",
                                    height: "max-content",
                                    p: "2px 8px",
                                    fontSize: "12px",
                                  },
                                }}
                              >
                                <span id="name">John</span>
                                <span>12:00 pm</span>
                              </Box>
                            </Box>
                            <Box
                              sx={{
                                color: "#000",
                                fontFamily: "Poppins",
                                fontSize: "14px",
                                fontStyle: "normal",
                                fontWeight: "400",
                                lineHeight: "normal",
                                mt: { xs: 0.7, sm: 1 },
                                p: { xs: 0.7, sm: 1 },
                                borderRadius: "15px",
                                border: "1px solid #ADA7A7",
                              }}
                            >
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do eiusmod tempor incididunt ut labore
                              et dolore magna.
                            </Box>
                          </Box>
                        ))}
                      </Box>
                      {/* input */}
                      <Box
                        sx={{
                          my: { xs: 1, sm: 2 },
                          mx: { xs: 1, sm: 2 },
                          pb: { xs: 0.4, sm: 1 },
                          px: { xs: 1, sm: 2 },
                          borderRadius: "15px",
                          border: "1px solid #4CECB2",
                          background: "rgba(76, 236, 178, 0.10)",
                        }}
                      >
                        <InputBase
                          placeholder="Type your message here..."
                          multiline={true}
                          minRows={2}
                          maxRows={2}
                          sx={{
                            width: "100%",
                            fontSize: { xs: "12px", sm: "14px" },
                          }}
                        />
                        <Button
                          sx={{
                            background: "#4CECB2",
                            border: "1px solid #4CECB2",
                            color: "#fff",
                            px: { xs: 1, sm: 2 },
                            py: 0,
                            display: "flex",
                            alignItems: "center",
                            ml: "auto",
                            textTransform: "capitalize",
                            "&:hover": {
                              background: "transparent",
                              color: "#4CECB2",
                            },
                          }}
                        >
                          <Send
                            sx={{
                              transform: "rotate(-45deg)",
                              fontSize: "14px",
                              mt: "-2px",
                            }}
                          />{" "}
                          Send
                        </Button>
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            ) : (
              <Box>
                {/* Add new plan checker chat member */}
                {[1, 2, 3].map((item, i) => (
                  <Stack
                    key={i}
                    direction={"row"}
                    gap={{ xs: 2, sm: 3, md: 4 }}
                    mx={{ xs: 2, sm: 3, md: 4 }}
                    my={{ xs: 2, sm: 3, md: 4 }}
                  >
                    <Radio
                      checked={selectedValue === i}
                      onChange={() => {
                        setSelectedValue(i);
                        setState(true);
                      }}
                      value={i}
                      name="radio-buttons"
                      sx={{
                        width: "max-content",
                        height: "max-content",
                        "&.Mui-checked": {
                          color: "#FB0000",
                        },
                      }}
                    />
                    <Box>
                      <Box
                        sx={{
                          color: "#292D32",
                          fontFamily: "Poppins",
                          fontSize: "15px",
                          fontStyle: "normal",
                          fontWeight: "700",
                          lineHeight: "normal",
                          display: "flex",
                          gap: { xs: 1, sm: 2 },
                          width: "100%",
                        }}
                      >
                        <Avatar />
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            width: "100%",
                            fontSize: "12px",
                            "& #name": {
                              borderRadius: "5px",
                              background: "#4CECB2",
                              height: "max-content",
                              p: "2px 8px",
                              fontSize: "14px",
                            },
                          }}
                        >
                          <span id="name">John</span>
                          <span>12:00 pm</span>
                        </Box>
                      </Box>
                      <Box
                        sx={{
                          color: "#000",
                          fontFamily: "Poppins",
                          fontSize: "14px",
                          fontStyle: "normal",
                          fontWeight: "400",
                          lineHeight: "normal",
                          mt: { xs: 0.7, sm: 1 },
                        }}
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna. Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna.
                      </Box>
                    </Box>
                  </Stack>
                ))}
              </Box>
            )}
          </Box>
        </Box>
      </Box>
    </>
  );
}
