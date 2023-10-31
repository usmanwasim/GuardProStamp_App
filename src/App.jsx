import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Renderer from "./Layout/Renderer";
import "./App.css";

function App() {
  return (
    <>
      <ToastContainer
        position="top-center"
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
