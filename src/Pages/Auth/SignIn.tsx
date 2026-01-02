import { Eye, EyeOff, Lock, Mail, X } from "lucide-react";
import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import image from "@/assets/easi-logo.png";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-white p-4 md:p-8">
      <div className="flex justify-end mb-4 md:mb-8">
        <button
          type="button"
          className="rounded-full border-2 border-black cursor-pointer bg-white p-2 md:p-3 text-black shadow-lg transition-colors hover:bg-gray-50 hover:text-gray-900"
          aria-label="Close"
        >
          <X className="h-6 w-6" onClick={() => navigate("/home")} />
        </button>
      </div>
      <div className="flex justify-center">
        <div className="w-full max-w-2xl md:w-[65%]">
          <div className="relative overflow-hidden rounded-2xl bg-white shadow-2xl">
            <div className="bg-linear-to-br from-[#953E79] to-[#440830] flex flex-col items-center px-4 md:px-6 py-8 md:py-12 text-center">
              <div className="w-20 h-20 md:w-30 md:h-30 rounded-full mb-2 md:mb-1">
                <img
                  src={image}
                  alt="logo"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <h1 className="mb-2 text-2xl md:text-3xl font-bold text-white">
                Welcome back
              </h1>
              <p className="text-sm md:text-base text-white/90">
                Sign in to access your account and manage your transactions
              </p>
            </div>

            <form className="space-y-6 px-6 md:px-8 py-8 md:py-10">
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

              <div className-="w-full flex justify-between items-center">
                <section className="flex items-center gap-1">
                  <input type="checkbox" className="" />
                  <span className="text-#314158-100">Remember me</span>
                </section>
                <button className="text-#0092B8-50">Forgot password?</button>
              </div>

              <Button className="h-12 w-full rounded-lg bg-black text-white cursor-pointer hover:bg-black/90">
                Sign In
              </Button>

              <p className="text-center text-sm text-gray-600 flex items-center gap-1 justify-center">
                Don't have an account?{" "}
                <Link
                  to={"/sign_up"}
                  className="font-medium text-[#904d8b] hover:underline"
                >
                  Sign Up
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
