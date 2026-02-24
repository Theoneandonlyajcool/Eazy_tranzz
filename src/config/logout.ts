import { UserAuth } from "@/app/store";
import api from "./api";

export const logoutUser = async () => {
  try {
    await api.post("/logout"); // your backend logout route
  } catch (error) {
    console.log(error);
  } finally {
    UserAuth.getState().clearUser();
    window.location.href = "/";
  }
};
