import axios from "axios";
import type { UserReg, UserSignIn } from "@/schema/userschema";

const BaseUrl = import.meta.env.VITE_BASEURL;

export const createUser = async (payload: UserReg) => {
  const register = await axios.post(`${BaseUrl}/auth/signup`, payload);
  return register.data;
};

export const logUser = async (payload: UserSignIn) => {
  const signIn = await axios.post(`${BaseUrl}/auth/login`, payload);
  sessionStorage.setItem("initials", signIn.data.data);
  return signIn.data;
};
