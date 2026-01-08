import axios from "axios";
import type { UserReg } from "@/schema/userschema";

const BaseUrl = import.meta.env.VITE_BASEURL;

export const createUser = async (payload: UserReg) => {
  const register = await axios.post(`${BaseUrl}/auth/signup`, payload);
  return register.data;
};
