import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Renderer from "./Layout/Renderer";
import "./App.css";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  let userData = JSON.parse(localStorage.getItem("userData"));
  let userJwtToken = sessionStorage.getItem("jwt-token");
  useEffect(() => {
    if (!userJwtToken || !userData?.email) {
      if (
        location.pathname !== "/loginpage" &&
        location.pathname !== "/signup" &&
        location.pathname !== "/login"
      ) {
        navigate("/loginpage");
      }
    }
  }, [userJwtToken]);
  return (
    <>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        limit={3}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        // theme={mode}
      />
      <Renderer />
    </>
  );
}

export default App;
