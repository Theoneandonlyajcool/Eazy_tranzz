import React, { useState, useCallback } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  User,
  IdCard,
  Upload,
  Camera,
  Home,
  Check,
  X,
  FileText,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import logo from "@/assets/Images/logo.png";

type Step = {
  id: number;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
};

const steps: Step[] = [
  {
    id: 1,
    title: "Personal Information",
    subtitle: "Personal Info",
    icon: <User className="w-5 h-5" />,
  },
  {
    id: 2,
    title: "Identity Verification",
    subtitle: "Identity",
    icon: <IdCard className="w-5 h-5" />,
  },
  {
    id: 3,
    title: "Upload Documents",
    subtitle: "Documents",
    icon: <Upload className="w-5 h-5" />,
  },
];

interface UploadedFile {
  name: string;
  size: number;
  type: string;
  preview?: string;
}

const KYCPage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [uploadedFiles, setUploadedFiles] = useState<{
    idDocument: UploadedFile | null;
    proofOfAddress: UploadedFile | null;
    selfiePhoto: UploadedFile | null;
  }>({
    idDocument: null,
    proofOfAddress: null,
    selfiePhoto: null,
  });
  const [dragActive, setDragActive] = useState<string | null>(null);

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleDrag = useCallback((e: React.DragEvent, fieldName: string) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(fieldName);
    } else if (e.type === "dragleave") {
      setDragActive(null);
    }
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent, fieldName: keyof typeof uploadedFiles) => {
      e.preventDefault();
      e.stopPropagation();
      setDragActive(null);

      const files = e.dataTransfer.files;
      if (files && files[0]) {
        const file = files[0];
        const fileObj: UploadedFile = {
          name: file.name,
          size: file.size,
          type: file.type,
          preview: file.type.startsWith("image/")
            ? URL.createObjectURL(file)
            : undefined,
        };
        setUploadedFiles((prev) => ({
          ...prev,
          [fieldName]: fileObj,
        }));
      }
    },
    [],
  );

  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    fieldName: keyof typeof uploadedFiles,
  ) => {
    const files = e.target.files;
    if (files && files[0]) {
      const file = files[0];
      const fileObj: UploadedFile = {
        name: file.name,
        size: file.size,
        type: file.type,
        preview: file.type.startsWith("image/")
          ? URL.createObjectURL(file)
          : undefined,
      };
      setUploadedFiles((prev) => ({
        ...prev,
        [fieldName]: fileObj,
      }));
    }
  };

  const removeFile = (fieldName: keyof typeof uploadedFiles) => {
    setUploadedFiles((prev) => ({
      ...prev,
      [fieldName]: null,
    }));
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

  const renderProgressIndicator = () => (
    <div className="flex items-center justify-center gap-2 md:gap-4 mb-8">
      {steps.map((step, index) => (
        <React.Fragment key={step.id}>
          <div className="flex items-center gap-2">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                currentStep === step.id
                  ? "bg-gradient-to-r from-[#440830] to-[#953E79] border-2 border-[#AD46FF] text-white shadow-lg shadow-primary/30 scale-110"
                  : currentStep > step.id
                    ? "bg-green-500 border-2 border-green-400 text-white"
                    : "bg-white/5 border-2 border-white/10 text-white/40"
              }`}
            >
              {currentStep > step.id ? (
                <Check className="w-5 h-5" />
              ) : (
                step.icon
              )}
            </div>
            <span
              className={`text-xs font-medium hidden md:block transition-colors ${
                currentStep === step.id ? "text-white" : "text-white/40"
              }`}
            >
              {step.subtitle}
            </span>
          </div>
          {index < steps.length - 1 && (
            <div
              className={`w-12 md:w-20 h-0.5 transition-all duration-300 ${
                currentStep > step.id ? "bg-green-500" : "bg-white/10"
              }`}
            />
          )}
        </React.Fragment>
      ))}
    </div>
  );

  const renderPersonalInfoSection = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
      <KYCInputField label="First Name" placeholder="Emmanuel" />
      <KYCInputField label="Last Name" placeholder="Tochukwu" />
      <KYCInputField label="Date of Birth" placeholder="DD / MM / YYYY" />
      <KYCInputField label="Gender" placeholder="Select Gender" />
      <KYCInputField
        label="Nationality"
        placeholder="Nigeria"
        className="md:col-span-2"
      />
      <KYCInputField label="Phone Number" placeholder="+234 800 123 4567" />
      <KYCInputField
        label="Email Address"
        placeholder="emmanuel871@gmail.com"
      />
    </div>
  );

  const renderIdentitySection = () => (
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
  );

  const renderDocumentsSection = () => (
    <div className="p-6 space-y-8">
      <KYCDropZone
        label="ID Document"
        icon={<IdCard className="w-8 h-8" />}
        text="Upload your ID document"
        fieldName="idDocument"
        uploadedFile={uploadedFiles.idDocument}
        dragActive={dragActive}
        onDragEnter={(e) => handleDrag(e, "idDocument")}
        onDragLeave={(e) => handleDrag(e, "idDocument")}
        onDragOver={(e) => handleDrag(e, "idDocument")}
        onDrop={(e) => handleDrop(e, "idDocument")}
        onFileChange={(e) => handleFileChange(e, "idDocument")}
        onRemove={() => removeFile("idDocument")}
        formatFileSize={formatFileSize}
      />
      <KYCDropZone
        label="Proof of Address"
        icon={<Home className="w-8 h-8" />}
        text="Upload proof of address (Utility Bill, Bank statement)"
        fieldName="proofOfAddress"
        uploadedFile={uploadedFiles.proofOfAddress}
        dragActive={dragActive}
        onDragEnter={(e) => handleDrag(e, "proofOfAddress")}
        onDragLeave={(e) => handleDrag(e, "proofOfAddress")}
        onDragOver={(e) => handleDrag(e, "proofOfAddress")}
        onDrop={(e) => handleDrop(e, "proofOfAddress")}
        onFileChange={(e) => handleFileChange(e, "proofOfAddress")}
        onRemove={() => removeFile("proofOfAddress")}
        formatFileSize={formatFileSize}
      />
      <KYCDropZone
        label="Selfie Photo"
        icon={<Camera className="w-8 h-8" />}
        text="Upload a clear selfie holding your ID"
        fieldName="selfiePhoto"
        uploadedFile={uploadedFiles.selfiePhoto}
        dragActive={dragActive}
        onDragEnter={(e) => handleDrag(e, "selfiePhoto")}
        onDragLeave={(e) => handleDrag(e, "selfiePhoto")}
        onDragOver={(e) => handleDrag(e, "selfiePhoto")}
        onDrop={(e) => handleDrop(e, "selfiePhoto")}
        onFileChange={(e) => handleFileChange(e, "selfiePhoto")}
        onRemove={() => removeFile("selfiePhoto")}
        formatFileSize={formatFileSize}
      />
    </div>
  );

  const renderCurrentSection = () => {
    switch (currentStep) {
      case 1:
        return renderPersonalInfoSection();
      case 2:
        return renderIdentitySection();
      case 3:
        return renderDocumentsSection();
      default:
        return null;
    }
  };

  const currentStepData = steps.find((s) => s.id === currentStep);

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

        {/* Progress Indicator */}
        {renderProgressIndicator()}

        {/* Form Section */}
        <div className="space-y-16">
          <SectionContainer
            icon={currentStepData?.icon}
            title={currentStepData?.title || ""}
            subtitle={currentStepData?.subtitle || ""}
          >
            {renderCurrentSection()}
          </SectionContainer>
        </div>

        {/* Navigation Buttons */}
        <div className="flex gap-4 pt-8">
          {currentStep > 1 && (
            <Button
              onClick={handlePrevious}
              className="flex-1 h-14 text-lg font-bold uppercase tracking-widest bg-white/10 hover:bg-white/20 text-white border border-white/10 transition-all cursor-pointer"
            >
              <ChevronLeft className="mr-2 h-5 w-5" /> Previous
            </Button>
          )}
          <Button
            onClick={currentStep === steps.length ? () => {} : handleNext}
            className="flex-1 h-14 text-lg font-bold uppercase tracking-widest bg-linear-to-l from-[#440830] to-[#953E79] hover:opacity-90 transition-opacity shadow-[0_0_20px_rgba(139,29,97,0.3)] cursor-pointer"
          >
            {currentStep === steps.length ? (
              <>
                Submit <Check className="ml-2 h-5 w-5" />
              </>
            ) : (
              <>
                Continue <ChevronRight className="ml-2 h-5 w-5" />
              </>
            )}
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
  <div className="space-y-6 animate-slide-up">
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

interface KYCDropZoneProps {
  label: string;
  icon: React.ReactNode;
  text: string;
  fieldName: string;
  uploadedFile: UploadedFile | null;
  dragActive: string | null;
  onDragEnter: (e: React.DragEvent) => void;
  onDragLeave: (e: React.DragEvent) => void;
  onDragOver: (e: React.DragEvent) => void;
  onDrop: (e: React.DragEvent) => void;
  onFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onRemove: () => void;
  formatFileSize: (bytes: number) => string;
}

const KYCDropZone = ({
  label,
  icon,
  text,
  fieldName,
  uploadedFile,
  dragActive,
  onDragEnter,
  onDragLeave,
  onDragOver,
  onDrop,
  onFileChange,
  onRemove,
  formatFileSize,
}: KYCDropZoneProps) => {
  const isDragging = dragActive === fieldName;

  return (
    <div className="space-y-4">
      <Label className="text-sm font-medium text-white/90">
        {label} <span className="text-accent">*</span>
      </Label>

      {uploadedFile ? (
        <div className="relative group bg-white/5 border border-white/10 rounded-2xl p-4 flex items-center gap-4">
          {uploadedFile.preview ? (
            <div className="w-16 h-16 rounded-lg overflow-hidden bg-black/20">
              <img
                src={uploadedFile.preview}
                alt={uploadedFile.name}
                className="w-full h-full object-cover"
              />
            </div>
          ) : (
            <div className="w-16 h-16 rounded-lg bg-primary/20 flex items-center justify-center">
              <FileText className="w-8 h-8 text-primary" />
            </div>
          )}
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-white truncate">
              {uploadedFile.name}
            </p>
            <p className="text-xs text-muted-foreground">
              {formatFileSize(uploadedFile.size)}
            </p>
          </div>
          <button
            onClick={onRemove}
            className="w-8 h-8 rounded-full bg-red-500/20 hover:bg-red-500/40 flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-4 h-4 text-red-400" />
          </button>
        </div>
      ) : (
        <div
          className={`relative group transition-all duration-300 ${
            isDragging ? "scale-[1.02]" : ""
          }`}
          onDragEnter={onDragEnter}
          onDragLeave={onDragLeave}
          onDragOver={onDragOver}
          onDrop={onDrop}
        >
          <input
            type="file"
            id={fieldName}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
            onChange={onFileChange}
            accept="image/*,.pdf,.doc,.docx"
          />
          <div
            className={`h-40 w-full border-2 border-dashed rounded-2xl bg-white/2 flex flex-col items-center justify-center gap-4 cursor-pointer transition-all ${
              isDragging
                ? "border-primary/80 bg-primary/10 shadow-[0_0_30px_rgba(139,29,97,0.3)]"
                : "border-white/10 hover:bg-white/4 hover:border-primary/50"
            }`}
          >
            <div
              className={`transition-colors ${
                isDragging
                  ? "text-primary"
                  : "text-white/40 group-hover:text-primary/70"
              }`}
            >
              {icon}
            </div>
            <div className="text-center">
              <p className="text-sm font-medium text-white/80">{text}</p>
              <p className="text-xs text-muted-foreground mt-1 italic">
                {isDragging
                  ? "Release to upload"
                  : "Click to browse or drag and drop"}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default KYCPage;
