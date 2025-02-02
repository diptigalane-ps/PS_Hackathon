import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8080/api", // Replace with your API base URL
});

// ✅ Custom hook to set up Axios interceptor for authentication
export const axiosWithAuth = () => {
  const token = localStorage.getItem("token");

  axiosInstance.interceptors.request.use(
    async (config) => {
      try {
        if (token) {
          config.headers.Authorization = `Bearer ${token}`; // 🔹 Attach token to every request
        }
      } catch (error) {
        console.error("Error getting Auth0 token:", error);
      }
      return config;
    },
    (error) => Promise.reject(error)
  );

  return axiosInstance;
};

export default axiosInstance;
