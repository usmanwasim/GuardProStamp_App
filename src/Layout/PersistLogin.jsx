import { Navigate, Outlet } from "react-router-dom";
export default function PersistLogin() {
  let userData = JSON.parse(localStorage.getItem("userData"));
  let userJwtToken = sessionStorage.getItem("jwt-token");

  return (
    <>
      {!userJwtToken || !userData?.email ? (
        <Navigate to="/loginpage" />
      ) : (
        <Outlet />
      )}
    </>
  );
}
