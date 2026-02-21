import React from "react";
import {
  ChevronLeft,
  ShieldCheck,
  User,
  IdCard,
  Upload,
  Camera,
  Home,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import logo from "@/assets/Images/logo.png";

const KYCPage = () => {
  return (
    <div className="min-h-screen bg-black pb-20 selection:bg-primary/30">
      {/* Background Decorative Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-primary/20 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute top-[20%] -right-[5%] w-[30%] h-[30%] bg-accent/10 blur-[100px] rounded-full" />
        <div className="absolute bottom-[10%] left-[5%] w-[25%] h-[25%] bg-primary/10 blur-[80px] rounded-full" />
      </div>

      {/* Top Header Section */}
      <div className="relative h-72 w-full overflow-hidden bg-linear-to-l from-[#440830] to-[#953E79] flex flex-col items-center justify-center text-center px-4">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,var(--tw-gradient-from)_0%,transparent_70%)] opacity-30 animate-pulse" />

        <div className="relative z-10 flex flex-col items-center gap-4 animate-fade-in">
          {/* <div className="w-20 h-20 rounded-full bg-white/5 backdrop-blur-xl flex items-center justify-center border border-white/10 shadow-2xl relative group"> */}
          {/* <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl group-hover:bg-primary/40 transition-all duration-500" />
            <div className="relative w-12 h-12 rounded-full bg-gradient-to-tr from-primary to-accent flex items-center justify-center text-white shadow-inner">
              <ShieldCheck className="w-7 h-7" />
            </div> */}
          {/* </div> */}
          <img
            src={logo}
            alt="Eazytranzz Logo"
            className="w-30 h-30 object-cover"
          />
          <div className="">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white font-serif drop-shadow-sm">
              Verify your Identity
            </h1>
            <p className="text-sm md:text-base text-white/60 max-w-md mx-auto leading-relaxed">
              Help us keep your account safe, secured and trusted for everyone
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-accent to-transparent shadow-[0_0_15px_rgba(225,29,72,0.5)]" />
      </div>

      <div className="max-w-4xl mx-auto px-4 mt-8 space-y-12">
        {/* Navigation & Status */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <Button
            variant="outline"
            size="sm"
            className="bg-white/5 border-white/10 text-white hover:text-white hover:bg-white/5 self-start cursor-pointer transition-all"
          >
            <ChevronLeft className="mr-2 h-4 w-4" /> Back
          </Button>
        </div>

        <div className="text-center space-y-2 flex flex-col items-center justify-center">
          <div className="flex items-center gap-2 bg-[#1a1434] border-[#462371] px-4 py-2 rounded-full border animate-pulse">
            <ShieldCheck className="h-4 w-4 text-accent" />
            <span className="text-xs font-medium uppercase tracking-wider text-accent">
              Secure Verification
            </span>
          </div>

          <h2 className="text-4xl font-bold tracking-tight text-white">
            Complete Your{" "}
            <span className="text-[#953E79] font-bold">KYC Verification</span>
          </h2>
          <p className="text-muted-foreground">
            We need to verify your identity to keep your account secure and
            compliant
          </p>
        </div>

        {/* Form Sections */}
        <div className="space-y-16">
          {/* Section 1: Personal Information */}
          <SectionContainer
            icon={<User className="w-5 h-5" />}
            title="Personal Information"
            subtitle="Personal Info"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
              <KYCInputField label="First Name" placeholder="Emmanuel" />
              <KYCInputField label="Last Name" placeholder="Tochukwu" />
              <KYCInputField
                label="Date of Birth"
                placeholder="DD / MM / YYYY"
              />
              <KYCInputField label="Gender" placeholder="Select Gender" />
              <KYCInputField
                label="Nationality"
                placeholder="Nigeria"
                className="md:col-span-2"
              />
              <KYCInputField
                label="Phone Number"
                placeholder="+234 800 123 4567"
              />
              <KYCInputField
                label="Email Address"
                placeholder="emmanuel871@gmail.com"
              />
            </div>
          </SectionContainer>

          {/* Section 2: Identity Verification */}
          <SectionContainer
            icon={<IdCard className="w-5 h-5" />}
            title="Identity Verification"
            subtitle="Identity"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
              <KYCInputField label="ID Type" placeholder="Select ID Type" />
              <KYCInputField label="ID Number" placeholder="Enter ID Number" />
              <KYCInputField label="Issue Date" placeholder="DD / MM / YYYY" />
              <KYCInputField label="Expiry Date" placeholder="DD / MM / YYYY" />
              <KYCInputField
                label="Occupation"
                placeholder="e.g. Software Engineer, Business Owner"
                className="md:col-span-2"
              />
              <KYCInputField
                label="Purpose of Account"
                placeholder="Select Purpose"
                className="md:col-span-2"
              />
            </div>
          </SectionContainer>

          {/* Section 3: Upload Documents */}
          <SectionContainer
            icon={<Upload className="w-5 h-5" />}
            title="Upload Documents"
            subtitle="Documents"
          >
            <div className="p-6 space-y-8">
              <KYCUploadArea
                label="ID Document"
                icon={<IdCard className="w-8 h-8" />}
                text="Upload your ID document"
              />
              <KYCUploadArea
                label="Proof of Address"
                icon={<Home className="w-8 h-8" />}
                text="Upload proof of address (Utility Bill, Bank statement)"
              />
              <KYCUploadArea
                label="Selfie Photo"
                icon={<Camera className="w-8 h-8" />}
                text="Upload a clear selfie holding your ID"
              />
            </div>
          </SectionContainer>
        </div>

        {/* Submit Button */}
        <div className="pt-8">
          <Button className="w-full h-14 text-lg font-bold uppercase tracking-widest bg-linear-to-l from-[#440830] to-[#953E79] hover:opacity-90 transition-opacity shadow-[0_0_20px_rgba(139,29,97,0.3)] cursor-pointer">
            Continue <ChevronLeft className="ml-2 h-5 w-5 rotate-180" />
          </Button>
        </div>
      </div>
    </div>
  );
};

// Helper Components
const SectionContainer = ({
  icon,
  title,
  subtitle,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  children: React.ReactNode;
}) => (
  <div className="space-y-6 animate-slide-up ">
    <div className="flex flex-col items-center gap-2">
      <div className="w-12 h-12 rounded-full bg-linear-to-t from-[#440830] to-[#953E79] border border-[#AD46FF] flex items-center justify-center text-white shadow-lg shadow-primary/20">
        {icon}
      </div>
      <span className="text-xs font-medium text-white uppercase tracking-widest">
        {subtitle}
      </span>
    </div>
    <div className="bg-[#131317] rounded-2xl border border-white/5 shadow-2xl overflow-hidden">
      <div className="border-b border-white/5 p-6">
        <h3 className="text-xl font-bold text-white">{title}</h3>
        <p className="text-sm text-muted-foreground mt-1">
          Please provide your valid {title.toLowerCase()} details
        </p>
      </div>
      {children}
    </div>
  </div>
);

const KYCInputField = ({
  label,
  placeholder,
  className,
}: {
  label: string;
  placeholder: string;
  className?: string;
}) => (
  <div className={`space-y-2 ${className}`}>
    <Label className="text-sm font-medium text-white/90">
      {label} <span className="text-accent">*</span>
    </Label>
    <Input
      placeholder={placeholder}
      className="h-12 bg-white/3 border-white/10 text-white placeholder:text-muted-foreground/50 focus:border-primary/50 focus:ring-primary/20 transition-all rounded-xl"
    />
  </div>
);

const KYCUploadArea = ({
  label,
  icon,
  text,
}: {
  label: string;
  icon: React.ReactNode;
  text: string;
}) => (
  <div className="space-y-4">
    <Label className="text-sm font-medium text-white/90">
      {label} <span className="text-accent">*</span>
    </Label>
    <div className="relative group">
      <div className="h-40 w-full border-2 border-dashed border-white/10 rounded-2xl bg-white/2 hover:bg-white/4 hover:border-primary/50 transition-all flex flex-col items-center justify-center gap-4 cursor-pointer">
        <div className="text-white/40 group-hover:text-primary/70 transition-colors">
          {icon}
        </div>
        <div className="text-center">
          <p className="text-sm font-medium text-white/80">{text}</p>
          <p className="text-xs text-muted-foreground mt-1 italic">
            Click to browse or drag and drop
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default KYCPage;
