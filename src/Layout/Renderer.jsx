import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./Header";
import HeaderAuthorize from "../Components/Dashboard/Header.jsx";
import Desktop1 from "../Components/Desktop1";
import Desktop2 from "../Components/Desktop2";
import AdminDesktop2 from "../Components/AdminDesktop2";
import Signup from "../Components/Signup";
import Login from "../Components/Login";
import Dashboard from "../Components/Dashboard/Dashboard";
import AccountsDetails from "../Components/Dashboard/AccountsDetails";
import PlanChecker from "../Components/PlanChecker/Index";
import { Container } from "@mui/material";
import PersistLogin from "./PersistLogin";
import ForgotPassword from "../Components/ForgotPassword";

export default function Renderer() {
  const location = useLocation();
  let userJwtToken = sessionStorage.getItem("jwt-token");
  return (
    <>
      {["/planchecker", "/dashboard"].includes(location.pathname) &&
      userJwtToken ? (
        <Container>
          <HeaderAuthorize />
        </Container>
      ) : (
        <Header />
      )}
      <Routes>
        <Route exact path="/" element={<Desktop2 />} />
        <Route exact path="/adminpage" element={<AdminDesktop2 />} />
        <Route exact path="/loginpage" element={<Desktop1 />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/forgetpassword" element={<ForgotPassword />} />

        <Route element={<PersistLogin />}>
          <Route exact path="/planchecker" element={<PlanChecker />} />
          <Route exact path="/dashboard" element={<Dashboard />}>
            <Route exact path="" element={<AccountsDetails />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}
