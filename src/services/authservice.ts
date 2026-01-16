import type { UserReg, UserSignIn } from "@/schema/userschema";
import { createUser, logUser } from "@/config/authapi";
import { UserAuth } from "@/app/store";

export const registerAndSaveUser = async (data: UserReg) => {
  const user = await createUser(data);
  return user;
};

export const loginAndSaveUser = async (data: UserSignIn) => {
  const customer = await logUser(data);
  UserAuth.getState().setUser(customer);
  return customer;
};
