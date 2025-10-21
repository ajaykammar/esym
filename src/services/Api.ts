// src/utils/api.ts
import axios, {
  AxiosInstance,
  InternalAxiosRequestConfig,
  AxiosResponse,
} from "axios";

// Create axios instance with baseURL
const api: AxiosInstance = axios.create({
  // baseURL: "http://103.185.75.254:3000", // ✅ replace with your backend URL
  baseURL: "http://localhost:3000", // ✅ replace with your backend URL
  headers: {
    "Content-Type": "application/json",
  },
});

// Request Interceptor: attach token
api.interceptors.request.use(
  (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
    const token = localStorage.getItem("token");

    if (token) {
      config.headers = config.headers || ({} as any);

      // set header properly
      config.headers.set
        ? config.headers.set("Authorization", `Bearer ${token}`)
        : (config.headers["Authorization"] = `Bearer ${token}`);
    }

    return config;
  },
  (error) => Promise.reject(error)
);

// Response Interceptor: handle unauthorized token
api.interceptors.response.use(
  (response: AxiosResponse): AxiosResponse => response,
  (error) => {
    if (
      (error.response?.status === 401 &&
        error.response?.data?.message === "Not authorized, token failed") ||
      "Not authorized, no token"
    ) {
      console.warn("Token failed. Clearing storage and redirecting...");

      // clear local storage
      // localStorage.clear();

      // return (window.location.href = "/");
    }

    return Promise.reject(error);
  }
);

export default api;
