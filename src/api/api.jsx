import axios from "axios";

// instance of axios
const axiosApiInstance = axios.create({
  baseURL: `${import.meta.env.VITE_BASE_URL}`,
});

export const loginHandle = async (data) => {
  const response = await axiosApiInstance.post("users/login", data);
  if (response) return response;
};
export const handleLoggedOut = async () => {
  let response = await axiosApiInstance.get(`users/logout`);
  if (response) {
    return response;
  }
};
export const handleRegister = async (data) => {
  const response = axiosApiInstance.post("users/signup", data);
  if (response) return response;
};

// get Email for send forgot password code
export const handleForgotVerifyCode = async (data) => {
  const response = await axiosApiInstance.get(
    `users/forgotVerifyCode?email=${data}`
  );
  if (response) return response;
};


const refreshToken = async () => {
  const response = await axiosApiInstance.get("users/refreshAuth");
  sessionStorage.setItem("jwt-token", response?.data?.accessToken);
  localStorage.setItem("userData", JSON.stringify(response?.data?.data));
};

// Request interceptor for API calls
axiosApiInstance.interceptors.request.use(
  async (config) => {
    const accessToken = sessionStorage.getItem("jwt-token");
    if (accessToken) {
      config.headers["jwt-token"] = accessToken;
    }

    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

// Add an Axios interceptor to handle token refresh
axiosApiInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    let originalRequest = error.config;

    if (error?.response?.status === 409 && !originalRequest?._retry) {
      originalRequest._retry = true;
      await refreshToken();
      // Update the authorization header with the new token
      const accessToken = sessionStorage.getItem("jwt-token");
      axiosApiInstance.defaults.headers.common["jwt-token"] = accessToken;
      originalRequest.headers["jwt-token"] = accessToken;
      // Retry the original request
      return axiosApiInstance(originalRequest);
    }

    // sessionStorage.removeItem("jwt-token");
    // localStorage.removeItem("userData");

    return Promise.reject(error);
  }
);

export default axiosApiInstance;
