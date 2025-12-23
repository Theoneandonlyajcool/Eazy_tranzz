import { Lock, X } from "lucide-react";
import Button from "../../Components/Ui/button";
import Input from "../../Components/Ui/input";
import Label from "../../Components/Ui/label";
import { useState } from "react";
import image from "../../assets/easi-logo.png";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Sending verification code to:", email);
    // Handle send verification code logic here
  };

  return (
    <div className="min-h-screen flex items-center flex-col justify-center bg-gray-50 p-12">
      <div className="self-end mb-8">
        <button
          type="button"
          className="rounded-full border-2 border-black cursor-pointer bg-white p-3 text-black shadow-lg transition-colors hover:bg-gray-50 hover:text-gray-900"
          aria-label="Close"
        >
          <X className="h-6 w-6" />
        </button>
      </div>
      <div className="w-full max-w-2xl">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          {/* Header with gradient background */}
          <div className="relative bg-linear-to-br from-[#953E79] to-[#440830] flex flex-col items-center px-6 py-6 text-center md:px-12 md:py-12">
            {/* Animated glowing logo */}
            <div className="w-30 h-30 rounded-full mb-1">
              <img
                src={image}
                alt="logo"
                className="w-full h-full object-cover"
              />
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-white">
              Forgot Password
            </h1>
          </div>

          {/* Form content */}
          <div className="px-8 py-12 md:px-16 md:py-16">
            {/* Lock icon and message */}
            <div className="flex flex-col items-center mb-8">
              <div className="w-16 h-16 border-2 border-gray-300 rounded-xl flex items-center justify-center mb-4">
                <Lock className="w-8 h-8 text-gray-600" />
              </div>
              <p className="text-gray-700 text-center">
                Don't worry, we'll help you recover your account
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label
                  htmlFor="email"
                  className="text-base font-semibold text-gray-900"
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
                  className="h-12 px-4 text-base border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                />
              </div>

              <Button
                type="submit"
                className="w-full h-12 bg-black hover:bg-gray-800 text-white text-base font-medium rounded-lg transition-colors"
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

export default ForgetPassword;
