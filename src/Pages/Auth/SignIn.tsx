import { Eye, EyeOff, Lock, Mail, X } from "lucide-react";
import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import image from "@/assets/easi-logo.png";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { signinSchema, type UserSignIn } from "@/schema/userschema";
import { loginAndSaveUser } from "@/services/authservice";
import toast from "react-hot-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { PropagateLoader } from "react-spinners";

const SignIn = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<UserSignIn>({
    resolver: zodResolver(signinSchema),
  });

  const handleLogin = async (data: UserSignIn) => {
    try {
      const res = await loginAndSaveUser(data);
      toast.success(res.message);
    } catch (error: any) {
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <div className="min-h-screen bg-white p-4 md:p-8">
      <div className="flex justify-end mb-4 md:mb-8">
        <button
          type="button"
          className="rounded-full border-2 border-black cursor-pointer bg-white p-2 md:p-3 text-black shadow-lg transition-colors hover:bg-gray-50 hover:text-gray-900"
          aria-label="Close"
          onClick={() => navigate("/")}
        >
          <X className="h-6 w-6" />
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

            <form
              className="space-y-6 px-6 md:px-8 py-8 md:py-10"
              onSubmit={handleSubmit(handleLogin)}
            >
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
                    {...register("email")}
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
                    {...register("password")}
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

              {/* Fixed Section - Always side by side */}
              <div className="w-full flex flex-row justify-between items-center">
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="remember"
                    className="h-4 w-4 rounded border-gray-300 text-[#904d8b] focus:ring-[#904d8b]"
                  />
                  <Label
                    htmlFor="remember"
                    className="text-sm font-medium text-gray-700 cursor-pointer whitespace-nowrap"
                  >
                    Remember me
                  </Label>
                </div>

                <Link
                  to="/forgot-password"
                  className="text-sm font-medium text-[#0092B8] hover:text-[#007a99] hover:underline whitespace-nowrap"
                >
                  Forgot password?
                </Link>
              </div>

              <Button
                disabled={isSubmitting}
                className={`h-12 w-full rounded-lg transition-all duration-200 cursor-pointer ${
                  isSubmitting
                    ? "bg-gray-400 text-white cursor-not-allowed opacity-75"
                    : "bg-black text-white cursor-pointer hover:bg-black/90"
                }`}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <PropagateLoader color="#ffffff" size={10} />
                  </span>
                ) : (
                  "Sign In"
                )}
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
