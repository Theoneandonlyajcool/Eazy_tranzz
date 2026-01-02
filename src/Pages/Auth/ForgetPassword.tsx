import type React from "react";
import { Lock, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import image from "@/assets/easi-logo.png";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Sending verification code to:", email);
    // Handle send verification code logic here
  };

  return (
    <div className="min-h-screen flex items-center flex-col justify-center bg-gray-50 p-4 md:p-12">
      <div className="self-end mb-4 md:mb-8">
        <button
          type="button"
          className="rounded-full border-2 border-black cursor-pointer bg-white p-2 md:p-3 text-black shadow-lg transition-colors hover:bg-gray-50 hover:text-gray-900"
          aria-label="Close"
        >
          <X className="h-5 w-5 md:h-6 md:w-6" />
        </button>
      </div>
      <div className="w-full max-w-2xl">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="relative bg-linear-to-br from-[#953E79] to-[#440830] flex flex-col items-center px-6 py-8 md:px-12 md:py-12 text-center">
            <div className="w-20 h-20 md:w-30 md:h-30 rounded-full mb-4 md:mb-1">
              <img
                src={image}
                alt="logo"
                className="w-full h-full object-cover"
              />
            </div>

            <h1 className="text-2xl md:text-4xl font-bold text-white">
              Forgot Password
            </h1>
          </div>

          <div className="px-6 py-8 md:px-16 md:py-16">
            <div className="flex flex-col items-center mb-6 md:mb-8">
              <div className="w-12 h-12 md:w-16 md:h-16 border-2 border-gray-300 rounded-xl flex items-center justify-center mb-4">
                <Lock className="w-6 h-6 md:w-8 md:h-8 text-gray-600" />
              </div>
              <p className="text-gray-700 text-center text-sm md:text-base">
                Don't worry, we'll help you recover your account
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label
                  htmlFor="email"
                  className="text-sm md:text-base font-semibold text-gray-900"
                >
                  Input email address
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="h-11 md:h-12 px-4 text-sm md:text-base border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                />
              </div>

              <Button
                variant="outline"
                className="w-full bg-[#101114] text-white cursor-pointer h-11 md:h-12 text-sm md:text-base"
              >
                Send Verification code
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
