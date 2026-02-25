import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";

type userInfo = {
  userId?: string;
  fullName: string;
  email: string;
  accessToken: string;
  refreshToken?: string;
  success?: boolean;
  status?: string;
  message?: string;
};

type AuthUser = {
  user: userInfo | null;
  setUser: (user: userInfo) => void;
  clearUser: () => void;
};

export const UserAuth = create<AuthUser>()(
  devtools(
    persist(
      (set) => ({
        user: null,

        setUser: (user) => set({ user }),

        clearUser: () => set({ user: null }),
      }),
      {
        name: "auth-storage",
      },
    ),
  ),
);
