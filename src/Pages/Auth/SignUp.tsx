import { Eye, EyeOff, Lock, Mail, Phone, User, X } from "lucide-react";
import { useState } from "react";
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import {Button} from "@/components/ui/button";
import image from "@/assests/easi-logo.png";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="min-h-screen bg-white p-8">
      <div className="flex justify-end mb-8">
        <button
          type="button"
          className="rounded-full border-2 border-black cursor-pointer bg-white p-3 text-black shadow-lg transition-colors hover:bg-gray-50 hover:text-gray-900"
          aria-label="Close"
        >
          <X className="h-6 w-6" />
        </button>
      </div>
      <div className="flex justify-center">
        <div className="w-[65%] ">
          <div className="relative overflow-hidden rounded-2xl bg-white shadow-2xl">
            {/* Header Section with Purple Gradient */}
            <div className="bg-linear-to-br from-[#904d8b] to-[#6d3567] flex flex-col items-center px-6 py-12 text-center">
              <div className="w-30 h-30 rounded-full mb-1">
                <img
                  src={image}
                  alt="logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <h1 className="mb-2 text-3xl font-bold text-white">
                Create your account
              </h1>
              <p className="text-white/90">
                Get started with EazyTranzz and receive payments from anywhere
                in the world
              </p>
            </div>

            {/* Form Section */}
            <form className="space-y-6 px-8 py-10">
              {/* Full Name */}
              <div className="space-y-2">
                <Label
                  htmlFor="fullName"
                  className="text-sm font-medium text-gray-700"
                >
                  Full Name
                </Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                  <Input
                    id="fullName"
                    type="text"
                    placeholder="John Doe"
                    className="h-12 border-gray-300 bg-gray-50 pl-10 text-gray-900 placeholder:text-gray-400"
                  />
                </div>
              </div>

              {/* Email Address */}
              <div className="space-y-2">
                <Label
                  htmlFor="email"
                  className="text-sm font-medium text-gray-700"
                >
                  Email Address
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    className="h-12 border-gray-300 bg-gray-50 pl-10 text-gray-900 placeholder:text-gray-400"
                  />
                </div>
              </div>

              {/* Phone Number */}
              <div className="space-y-2">
                <Label
                  htmlFor="phone"
                  className="text-sm font-medium text-gray-700"
                >
                  Phone Number
                </Label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+234 800 000 0000"
                    className="h-12 border-gray-300 bg-gray-50 pl-10 text-gray-900 placeholder:text-gray-400"
                  />
                </div>
              </div>

              {/* Password */}
              <div className="space-y-2">
                <Label
                  htmlFor="password"
                  className="text-sm font-medium text-gray-700"
                >
                  Password
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••••••••••••"
                    className="h-12 border-gray-300 bg-gray-50 px-10 text-gray-900 placeholder:text-gray-400"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 cursor-pointer -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5" />
                    ) : (
                      <Eye className="h-5 w-5" />
                    )}
                  </button>
                </div>
              </div>

              {/* Confirm Password */}
              <div className="space-y-2">
                <Label
                  htmlFor="confirmPassword"
                  className="text-sm font-medium text-gray-700"
                >
                  Confirm Password
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                  <Input
                    id="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="••••••••••••••••••"
                    className="h-12 border-gray-300 bg-gray-50 px-10 text-gray-900 placeholder:text-gray-400"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 cursor-pointer -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="h-5 w-5" />
                    ) : (
                      <Eye className="h-5 w-5" />
                    )}
                  </button>
                </div>
              </div>

              {/* Create Account Button */}
              <Button className="h-12 w-full rounded-lg bg-black text-white cursor-pointer hover:bg-black/90">
                Create Account
              </Button>

              {/* Sign In Link */}
              <p className="text-center text-sm text-gray-600 flex items-center gap-1 justify-center">
                Already have an account?{" "}
                <Link
                  to={"/sign_in"}
                  className="font-medium text-[#904d8b] hover:underline"
                >
                  <nav className="font-medium text-[#904d8b] hover:underline">
                    Sign In
                  </nav>
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
