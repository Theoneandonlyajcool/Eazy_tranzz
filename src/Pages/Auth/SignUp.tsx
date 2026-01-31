import {
  Eye,
  EyeOff,
  Lock,
  Mail,
  Phone,
  User,
  X,
  AlertCircle,
} from "lucide-react";
import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import image from "@/assets/easi-logo.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { type UserReg, userSchema } from "@/schema/userschema";
import { registerAndSaveUser } from "@/services/authservice";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { PropagateLoader } from "react-spinners";
import toast from "react-hot-toast";
import { storage } from "@/config/storage";

const SignUp = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<UserReg>({
    resolver: zodResolver(userSchema),
  });

  const registerSubmit = async (data: UserReg) => {
    try {
      const response = await registerAndSaveUser(data);
      toast.success(response.message);
      const email = response?.data?.email;
      storage.set(import.meta.env.VITE_EMAIL, email);
      navigate("/verify_email");
    } catch (err: any) {
      const message = err.response?.data?.message || "Something went wrong";
      toast.error(message);
      setError("email", {
        type: "manual",
        message,
      });
    }
  };

  // Helper function to render error messages with styling
  const renderError = (fieldName: keyof typeof errors) => {
    if (!errors[fieldName]) return null;
    return (
      <div className="flex items-center gap-1.5 mt-2 animate-in fade-in-0 slide-in-from-top-1 duration-200">
        <AlertCircle className="h-4 w-4 text-red-500 shrink-0" />
        <p className="text-sm font-medium text-red-600">
          {errors[fieldName]?.message}
        </p>
      </div>
    );
  };

  // Helper function for dynamic input border styling
  const getInputClasses = (fieldName: keyof typeof errors) => {
    const baseClasses =
      "h-12 bg-gray-50 pl-10 text-gray-900 placeholder:text-gray-400";
    const errorClasses = errors[fieldName]
      ? "border-red-500 border-2 focus:border-red-500"
      : "border-gray-300 focus:border-purple-500";
    return `${baseClasses} ${errorClasses}`;
  };

  return (
    <div className="min-h-screen bg-white p-4 md:p-8">
      <div className="flex justify-end mb-4 md:mb-8">
        <button
          type="button"
          onClick={() => navigate("/")}
          className="rounded-full border-2 border-black cursor-pointer bg-white p-2 md:p-3 text-black shadow-lg transition-colors hover:bg-gray-50 hover:text-gray-900"
          aria-label="Close"
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
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "/placeholder.svg";
                  }}
                />
              </div>
              <h1 className="mb-2 text-2xl md:text-3xl font-bold text-white">
                Create your account
              </h1>
              <p className="text-sm md:text-base text-white/90">
                Get started with EazyTranzz and receive payments from anywhere
                in the world
              </p>
            </div>

            <form
              onSubmit={handleSubmit(registerSubmit)}
              className="space-y-6 px-6 md:px-8 py-8 md:py-10"
            >
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
                    {...register("fullName")}
                    className={getInputClasses("fullName")}
                  />
                </div>
                {renderError("fullName")}
              </div>

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
                    className={getInputClasses("email")}
                  />
                </div>
                {renderError("email")}
              </div>

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
                    {...register("phone")}
                    className={getInputClasses("phone")}
                  />
                </div>
                {renderError("phone")}
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
                    {...register("password")}
                    className={getInputClasses("password")}
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
                {renderError("password")}
              </div>

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
                    {...register("confirmPassword")}
                    className={getInputClasses("confirmPassword")}
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
                {renderError("confirmPassword")}
              </div>

              <Button
                type="submit"
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
                  "Create Account"
                )}
              </Button>

              <p className="text-center text-sm text-gray-600 flex items-center gap-1 justify-center">
                Already have an account?{" "}
                <Link
                  to="/sign_in"
                  className="font-medium text-[#904d8b] hover:underline"
                >
                  Sign In
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
