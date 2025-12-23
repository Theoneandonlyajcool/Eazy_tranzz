import { Eye, EyeOff, Lock, Mail, X } from "lucide-react";
import { useState } from "react";
import Label from "../../Components/Ui/label";
import Input from "../../Components/Ui/input";
import Button from "../../Components/Ui/button";
import image from "../../assets/easi-logo.png";
import { Link } from "react-router-dom";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);

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
                Welcome back
              </h1>
              <p className="text-white/90">
                Sign in to access your account and manage your transactions
              </p>
            </div>

            {/* Form Section */}
            <form className="space-y-6 px-8 py-10">
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

              <div className="w-full flex justify-between items-center">
                <section className="flex items-center gap-1">
                  <input type="checkbox" className="" />
                  <span className="text-#314158-100">Remember me</span>
                </section>
                <button className="text-#0092B8-50">Forgot password?</button>
              </div>

              {/* Create Account Button */}
              <Button className="h-12 w-full rounded-lg bg-black text-white cursor-pointer hover:bg-black/90">
                Sign In
              </Button>

              {/* Sign In Link */}
              <p className="text-center text-sm text-gray-600 flex items-center gap-1 justify-center">
                Don't have an account?{" "}
                <Link
                  to={"/sign_up"}
                  className="font-medium text-[#904d8b] hover:underline"
                >
                  <nav className="font-medium text-[#904d8b] hover:underline">
                    Sign Up
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

export default SignIn;
