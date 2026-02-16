import type React from "react";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Shield, X } from "lucide-react";
import image from "@/assets/easi-logo.png";
import toast from "react-hot-toast";
import axios from "axios";
import { storage } from "@/config/storage";
import { PropagateLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "@/app/store";

const VerifyEmail = () => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [isLoading, setIsLoading] = useState(false);
  const [timer, setTimer] = useState(60);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const navigate = useNavigate();

  const BaseUrl = import.meta.env.VITE_BASEURL;
  const email = storage.get(import.meta.env.VITE_EMAIL);

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [timer]);

  const handleChange = (index: number, value: string) => {
    // Only allow numbers
    if (value && !/^\d$/.test(value)) return;

    const newCode = [...otp];
    newCode[index] = value;
    setOtp(newCode);

    // Auto-focus next input
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>,
  ) => {
    // Handle backspace
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text").slice(0, 6);
    const newCode = [...otp];

    for (let i = 0; i < pastedData.length; i++) {
      if (/^\d$/.test(pastedData[i])) {
        newCode[i] = pastedData[i];
      }
    }

    setOtp(newCode);

    // Focus the next empty input or the last one
    const nextEmptyIndex = newCode.findIndex((val) => val === "");
    if (nextEmptyIndex !== -1) {
      inputRefs.current[nextEmptyIndex]?.focus();
    } else {
      inputRefs.current[5]?.focus();
    }
  };

  const handleResend = async () => {
    if (timer === 0) {
      setTimer(60);

      try {
        const response = await axios.post(`${BaseUrl}/auth/resend-otp`, {
          email: email,
        });
        toast.success(response?.data?.message);
        const user = response?.data;
        UserAuth.getState().setUser(user);
      } catch (err: any) {
        toast.error(err.response?.data?.message);
      }
    }
  };

  const handleVerify = async () => {
    const verificationCode = otp.join("");
    setIsLoading(true);

    if (verificationCode.length !== 6) {
      toast.error("Please enter the 6-digit code");
      setIsLoading(false);
      return;
    }

    try {
      const res = await axios.post(`${BaseUrl}/auth/verify`, {
        otp: verificationCode,
        email,
      });
      toast.success(res?.data?.data?.message);
      navigate("/dashboard");
      setIsLoading(false);
    } catch (err: any) {
      toast.error(err.response?.data?.message || "Something went wrong");
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center flex-col justify-center bg-gray-50 p-4 md:p-12">
      <div className="self-end mb-4 md:mb-8">
        <button
          type="button"
          className="rounded-full border-2 border-black cursor-pointer bg-white p-2 md:p-3 text-black shadow-lg transition-colors hover:bg-gray-50 hover:text-gray-900"
          aria-label="Close"
          onClick={() => navigate("/home")}
        >
          <X className="h-5 w-5 md:h-6 md:w-6" />
        </button>
      </div>
      <div className="w-full max-w-2xl overflow-hidden rounded-2xl bg-white shadow-xl">
        {/* Purple gradient header */}
        <div className="relative bg-linear-to-br from-[#953E79] to-[#440830] flex flex-col items-center px-4 py-8 text-center md:px-12 md:py-12">
          {/* Glowing logo icon */}
          <div className="w-20 h-20 md:w-30 md:h-30 rounded-full mb-4">
            <img
              src={image}
              alt="logo"
              className="w-full h-full object-contain"
            />
          </div>

          <h1 className="text-2xl font-bold text-white md:text-4xl text-balance">
            Verify Your Email
          </h1>
        </div>

        {/* Form content */}
        <div className="px-5 py-8 md:px-16 md:py-16">
          {/* Shield icon and instruction */}
          <div className="mb-8 md:mb-12 flex flex-col items-center text-center">
            <div className="mb-4 rounded-2xl border-2 border-gray-300 p-3 md:p-4">
              <Shield className="h-6 w-6 md:h-8 md:w-8 text-gray-700" />
            </div>
            <p className="text-sm text-gray-600 md:text-base max-w-xs md:max-w-none">
              Please input code sent to your Email
            </p>
          </div>

          {/* Input code section */}
          <div className="mb-8">
            <label className="mb-4 block text-left text-sm font-medium text-gray-900 md:text-lg">
              Input code
            </label>
            <div className="grid grid-cols-6 gap-2 md:gap-3">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  ref={(el) => {
                    inputRefs.current[index] = el;
                  }}
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  onPaste={handlePaste}
                  className="aspect-square w-full rounded-xl border-2 border-gray-900 text-center text-lg font-semibold focus:border-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-600 md:text-2xl"
                  autoFocus={index === 0}
                />
              ))}
            </div>
          </div>

          {/* Verify button */}
          <Button
            onClick={handleVerify}
            className={`mb-6 h-12 w-full cursor-pointer rounded-xl bg-gray-900 text-sm font-medium text-white hover:bg-gray-800 md:h-14 md:text-lg ${
              isLoading
                ? "bg-gray-400 text-white cursor-not-allowed opacity-75"
                : "bg-black text-white cursor-pointer hover:bg-black/90"
            }`}
          >
            {isLoading ? (
              <span className="flex items-center justify-center gap-2">
                <PropagateLoader color="#ffffff" size={10} />
              </span>
            ) : (
              "Verify"
            )}
          </Button>

          {/* Resend code link */}
          <div className="text-center text-xs text-gray-600 md:text-base">
            {"Didn't recieve any code? "}
            <button
              onClick={handleResend}
              disabled={timer > 0}
              className={`font-medium ${
                timer > 0
                  ? "cursor-not-allowed text-purple-600"
                  : "cursor-pointer text-purple-600 hover:text-purple-700 hover:underline"
              }`}
            >
              Resend code{timer > 0 ? ` (${timer}s)` : ""}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyEmail;
