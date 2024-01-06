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
import { useEffect, useRef, useState } from "react";
import avatar1 from "../../assets/Images/avatar1.png";
import avatar2 from "../../assets/Images/avatar2.png";
// import avatar3 from "../../assets/Images/avatar3.png";

// socket connection
import { io } from "socket.io-client";
import { toast } from "react-toastify";
// Socket.IO connection
export const Socket = io.connect(`${import.meta.env.VITE_BASE_URL}`);
// -==-==-=-=-=-=-=-=-=-=-=-=====-==

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
  // chat list state
  const [chatList, setChatList] = useState([]);
  // active chatID state
  const [ActiveChat, setActiveChat] = useState(activeChatID);
  // set active chatDetail
  const [ActiveChatDetail, setActiveChatDetail] = useState({});
  // input state
  const [Msg, setMsg] = useState("");
  // scroll down message reference
  const lastMessageRef = useRef(null);

  // socket User Connected And reference stored to online users
  let userData = JSON.parse(localStorage.getItem("userData"));
  let jwtToken = sessionStorage.getItem("jwt-token");
  useEffect(() => {
    if (jwtToken && userData?.id) {
      Socket.on("connect", () => {
        console.log("socket connected", Socket.id);
      });
      Socket.emit("join", userData?.id);
    }
  }, [userData?.id, jwtToken, Socket]);

  // get chat list of user
  useEffect(() => {
    Socket.emit("id-for-chat-list", userData?.id);
    Socket.on("all-chats", (data) => {
      // console.log(data, "chat list");
      setChatList(data);
    });
  }, [chatList]);

  // get active chat detail
  useEffect(() => {
    Socket.emit("chat-detail-ofId", ActiveChat);
    // console.log(ActiveChat, "active chat");
    Socket.on("receive-chat-detail-ofId", (data) => {
      let userDetail = data.members.filter(
        (item) => item?.userId !== userData?.id
      );
      let messages = data.messages;
      setActiveChatDetail({ receiver: userDetail[0], messages });
    });
  }, [ActiveChat, !ActiveChatDetail?._id]);
  // console.log(ActiveChatDetail, "active chatDetail");

  // send message to socket server
  const handleSendMsg = () => {
    if (!Msg) {
      return toast.error("Please enter message");
    } else if (!ActiveChatDetail?.receiver?.userId) {
      return toast.error("Please select chat to send message");
    } else {
      Socket.emit("send-message", {
        senderId: userData?.id,
        receiverId: ActiveChatDetail?.receiver?.userId,
        chatId: ActiveChat,
        message: Msg,
      });
      setMsg("");
    }
  };

  useEffect(() => {
    console.log("fgfgf", "socket called")
    Socket.on("receive-message", (data) => {
      let userDetail = data.members.filter(
        (item) => item?.userId !== userData?.id
      );
      let messages = data.messages;
      setActiveChatDetail({ receiver: userDetail[0], messages });
    });

  }, [Socket]);

  useEffect(() => {
    // 👇️ scroll to bottom every time messages change
    lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
    // console.log(ActiveChatDetail);
  }, [ActiveChatDetail?.messages, Msg]);
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
          {/* page geader */}
          <Stack
            direction={{ xs: "row" }}
            justifyContent="space-between"
            alignItems="center"
            gap={{ xs: 2, sm: 3.5, md: 5 }}
          >
            <ArrowBackRounded
              sx={{ mb: { xs: 1, sm: 2 }, cursor: "pointer" }}
            // onClick={() => setState(false)}
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
          {/* chat area */}
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
                  {/* chat list grid */}
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
                      {chatList.length > 0 ? (
                        chatList.map((item, i) => (
                          <Box
                            key={i}
                            onClick={() => setActiveChat(item?.chatId)}
                            sx={{
                              borderRadius: "15px",
                              height: "100%",
                              cursor: "pointer",
                              border:
                                ActiveChat === item?.chatId
                                  ? "1px solid #4CECB2"
                                  : "1px solid #E6E6E6",
                            }}
                          >
                            <Box
                              sx={{
                                px: { xs: 1, sm: 1.5 },
                                my: { xs: 1, sm: 1.5 },
                                // mt: { xs: -1, sm: -1.5 },
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
                                  // src={i % 2 === 0 ? avatar2 : avatar1}
                                  sx={{
                                    width: "25px",
                                    height: "25px",
                                    fontSize: "10px",
                                  }}
                                >
                                  {item?.members[0]?.name.split(" ")[0]?.[0]}
                                  {item?.members[0]?.name.split(" ")[1]?.[0]}
                                </Avatar>
                                <Box
                                  sx={{
                                    borderRadius: "5px",
                                    background: "#4CECB2",
                                    height: "max-content",
                                    p: "2px 8px",
                                    fontSize: "12px",
                                  }}
                                >
                                  {item?.members[0]?.name}
                                </Box>
                              </Box>
                              {/* <Box
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
                                {`${item?.members[0]?.email}
                                ${item?.members[0]?.userId}`}
                              </Box> */}
                            </Box>
                          </Box>
                        ))
                      ) : (
                        <Box
                          sx={{
                            height: "100%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          Chat List is Empty
                        </Box>
                      )}
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
                      {/*active chat header */}
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
                            src={ActiveChatDetail?.receiver?.name && avatar1}
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
                            {ActiveChatDetail?.receiver
                              ? ActiveChatDetail?.receiver?.name
                              : "Name Here"}
                          </Box>
                        </Box>
                      </Box>
                      {/*active messages */}
                      <Box
                        sx={{
                          px: { xs: 1, sm: 2 },
                          maxHeight: "40vh",
                          minHeight: "40vh",
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
                        {ActiveChatDetail?.messages?.length > 0 ? (
                          ActiveChatDetail?.messages.map((item, i) => (
                            <Box
                              key={i}
                              sx={{
                                p: { xs: 0.4, sm: 0.7 },
                                maxWidth: "60%",
                                ml:
                                  item?.sender !==
                                    ActiveChatDetail?.receiver?.userId
                                    ? "auto"
                                    : "0px",
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
                                    item?.sender ===
                                      ActiveChatDetail?.receiver?.userId
                                      ? "row"
                                      : "row-reverse",
                                  justifyContent: "end",
                                  alignItems: "center",
                                  gap: { xs: 1, sm: 2 },
                                  width: "100%",
                                }}
                              >
                                <Avatar
                                  src={
                                    item?.sender ===
                                      ActiveChatDetail?.receiver?.userId
                                      ? avatar1
                                      : avatar2
                                  }
                                  sx={{ width: "30px", height: "30px" }}
                                />
                                <Box
                                  sx={{
                                    display: "flex",
                                    flexDirection:
                                      item?.sender ===
                                        ActiveChatDetail?.receiver?.userId
                                        ? "row"
                                        : "row-reverse",
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
                                  <span id="name">
                                    {item?.sender ===
                                      ActiveChatDetail?.receiver?.userId
                                      ? ActiveChatDetail?.receiver?.name
                                      : "You"}
                                  </span>
                                  <span>{item?.time}</span>
                                </Box>
                              </Box>
                              <Box
                                ref={lastMessageRef}
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
                                {item.text}
                              </Box>
                            </Box>
                          ))
                        ) : (
                          <Box
                            sx={{
                              textAlign: "center",
                              height: "100%",
                              mt: "20%",
                            }}
                          >
                            No messages
                          </Box>
                        )}
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
                          value={Msg}
                          onChange={(e) => setMsg(e.target.value)}
                          onKeyDown={(e) => {
                            if (e.key === "Enter") {
                              handleSendMsg();
                            }
                          }}
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
                          onClick={() => handleSendMsg()}
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
