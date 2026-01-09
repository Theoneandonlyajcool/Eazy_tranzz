import { z } from "zod";

export const verifyEmailSchema = z.object({
  email: z.string().email("Invalid email"),
  otp: z
    .string()
    .length(6, "OTP must be 6 digits")
    .regex(/^\d+$/, "OTP must be numbers only"),
});

export type VerifyOtp = z.infer<typeof verifyEmailSchema>;
