import { UserAuth } from "@/app/store";
import axios from "axios";
import { logoutUser } from "./logout";

const api = axios.create({
  baseURL: import.meta.env.VITE_BASEURL,
});

api.interceptors.request.use((config) => {
  const token = UserAuth.getState().user?.accessToken;

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401) {
      await logoutUser();
    }

    return Promise.reject(error);
  },
);

export default api;
