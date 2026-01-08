import type { UserReg } from "@/schema/userschema";
import { createUser } from "@/config/authapi";
import { UserAuth } from "@/app/store";

export const registerAndSaveUser = async (data: UserReg) => {
  const user = await createUser(data);

  UserAuth.getState().setUser(user);

  return user;
};
