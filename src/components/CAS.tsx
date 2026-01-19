// import { Shield, Lock, FileCheck, Award } from "lucide-react";
// import { TiUserAddOutline } from "react-icons/ti";
import CertOfIncorporation from "@/assets/Images/incorpCert.png";
import CertOfRegistration from "@/assets/Images/Certificate_of_registration.jpeg";
import { FiCheckCircle } from "react-icons/fi";

const CAS = () => {
  const features = [
    {
      icon: (
        <svg
          className="w-10 h-10 sm:w-12 sm:h-12"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M15 14C12.33 14 7 15.33 7 18V20H23V18C23 15.33 17.67 14 15 14ZM6 10V7H4V10H1V12H4V15H6V12H9V10M15 12C16.0609 12 17.0783 11.5786 17.8284 10.8284C18.5786 10.0783 19 9.06087 19 8C19 6.93913 18.5786 5.92172 17.8284 5.17157C17.0783 4.42143 16.0609 4 15 4C13.9391 4 12.9217 4.42143 12.1716 5.17157C11.4214 5.92172 11 6.93913 11 8C11 9.06087 11.4214 10.0783 12.1716 10.8284C12.9217 11.5786 13.9391 12 15 12Z"
            fill="white"
          />
        </svg>
      ),
      title: "Registered & Business",
      description: `EazyTranz operates as a legally registered 
business, ensuring transparency, 
accountability, and compliance with 
financial regulations.`,
    },
    {
      icon: (
        <svg
          className="w-10 h-10 sm:w-12 sm:h-12"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M10 12C10 12 10.5 12 11 13C11 13 12.588 10.5 14 10"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M17 11.5C17 12.8261 16.4732 14.0979 15.5355 15.0355C14.5979 15.9732 13.3261 16.5 12 16.5C10.6739 16.5 9.40215 15.9732 8.46447 15.0355C7.52678 14.0979 7 12.8261 7 11.5C7 10.1739 7.52678 8.90215 8.46447 7.96447C9.40215 7.02678 10.6739 6.5 12 6.5C13.3261 6.5 14.5979 7.02678 15.5355 7.96447C16.4732 8.90215 17 10.1739 17 11.5Z"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="round"
          />
          <path
            d="M21 11.183V8.28C21 6.64 21 5.82 20.596 5.285C20.192 4.75 19.278 4.491 17.451 3.971C16.349 3.6545 15.2702 3.26258 14.222 2.798C13.023 2.266 12.424 2 12 2C11.576 2 10.977 2.266 9.778 2.798C8.898 3.188 7.798 3.616 6.549 3.971C4.722 4.491 3.809 4.751 3.404 5.285C3 5.82 3 6.64 3 8.28V11.183C3 16.808 8.063 20.183 10.594 21.519C11.201 21.839 11.504 22 12 22C12.496 22 12.799 21.84 13.406 21.52C15.937 20.182 21 16.808 21 11.183Z"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="round"
          />
        </svg>
      ),
      title: "KYC Verification",
      description: `All clients and freelancers complete 
identity verification (KYC) to keep the 
platform safe, trusted, and free from bad 
actors.`,
    },
    {
      icon: (
        <svg
          className="w-10 h-10 sm:w-12 sm:h-12"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5M11 7H13V13H11M11 15H13V17H11"
            fill="white"
          />
        </svg>
      ),
      title: "Anti-Fraud Policy",
      description: `We maintain a zero-tolerance policy for 
scams, fake work, or fraudulent activity. 
Every account and transaction is monitored 
to protect honest users.`,
    },
    {
      icon: (
        <svg
          className="w-10 h-10 sm:w-12 sm:h-12"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M15.4181 5.64252C15.2801 5.42216 15.077 5.25028 14.8368 5.1508C14.5966 5.05133 14.3314 5.02921 14.0781 5.08752L12.2801 5.50052C12.0958 5.54287 11.9043 5.54287 11.7201 5.50052L9.92205 5.08752C9.66872 5.02921 9.4035 5.05133 9.16333 5.1508C8.92315 5.25028 8.71997 5.42216 8.58205 5.64252L7.60205 7.20652C7.50205 7.36652 7.36705 7.50152 7.20705 7.60252L5.64305 8.58252C5.42307 8.72031 5.25144 8.92317 5.15199 9.16293C5.05253 9.4027 5.03019 9.66748 5.08805 9.92052L5.50105 11.7205C5.54325 11.9045 5.54325 12.0956 5.50105 12.2795L5.08805 14.0785C5.02996 14.3317 5.0522 14.5967 5.15166 14.8367C5.25112 15.0766 5.42288 15.2797 5.64305 15.4175L7.20705 16.3975C7.36705 16.4975 7.50205 16.6325 7.60305 16.7925L8.58305 18.3565C8.86505 18.8075 9.40305 19.0305 9.92205 18.9115L11.7201 18.4985C11.9043 18.4562 12.0958 18.4562 12.2801 18.4985L14.0791 18.9115C14.3322 18.9696 14.5972 18.9474 14.8372 18.8479C15.0772 18.7484 15.2802 18.5767 15.4181 18.3565L16.3981 16.7925C16.4981 16.6325 16.6331 16.4975 16.7931 16.3975L18.3581 15.4175C18.5782 15.2795 18.7499 15.0762 18.8492 14.8361C18.9485 14.5959 18.9705 14.3308 18.9121 14.0775L18.5001 12.2795C18.4577 12.0953 18.4577 11.9038 18.5001 11.7195L18.9131 9.92052C18.9712 9.66744 18.9492 9.40251 18.8499 9.16255C18.7506 8.92259 18.579 8.71951 18.3591 8.58152L16.7941 7.60152C16.6343 7.50134 16.4992 7.3663 16.3991 7.20652L15.4181 5.64252ZM14.9151 9.76952C14.9769 9.65579 14.9922 9.5225 14.9578 9.39769C14.9234 9.27289 14.8419 9.16631 14.7305 9.10036C14.6191 9.03442 14.4864 9.01427 14.3604 9.04414C14.2345 9.07401 14.125 9.15158 14.0551 9.26052L11.4401 13.6865L9.86105 12.1745C9.81421 12.1264 9.75816 12.0883 9.69624 12.0623C9.63433 12.0363 9.56782 12.0231 9.50068 12.0234C9.43354 12.0237 9.36715 12.0375 9.30546 12.064C9.24377 12.0905 9.18806 12.1292 9.14164 12.1777C9.09521 12.2262 9.05903 12.2835 9.03526 12.3463C9.01148 12.4091 9.0006 12.476 9.00325 12.5431C9.0059 12.6102 9.02204 12.6761 9.05069 12.7368C9.07935 12.7975 9.11995 12.8518 9.17005 12.8965L11.2041 14.8455C11.2585 14.8976 11.324 14.9367 11.3956 14.9598C11.4673 14.983 11.5433 14.9897 11.6179 14.9795C11.6925 14.9692 11.7638 14.9422 11.8265 14.9004C11.8893 14.8587 11.9417 14.8034 11.9801 14.7385L14.9151 9.76952Z"
            fill="white"
          />
        </svg>
      ),
      title: "Proof of Work Verification",
      description: `Payments are tied to verified work delivery, ensuring freelancers get paid fairly and clients only pay for completed, legitimate work.`,
    },
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-purple-50 to-pink-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            COMPLIANCE AND SECURITY
          </h1>
          <p className="text-purple-600 text-sm sm:text-base">
            Safe, Secure and Reliable
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-linear-to-tl from-[#440830] to-[#953E79] rounded-2xl p-6 text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="mb-4 bg-[#FFFFFF40]/20 w-fit p-2 rounded-2xl">
                {feature.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-3">
                {feature.title}
              </h3>
              <p className="text-purple-100 text-sm sm:text-base leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Official Business Registrations */}
        <div className="bg-gray-900 rounded-3xl p-6 sm:p-8 lg:p-12 shadow-2xl">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white text-center mb-8 sm:mb-12 ">
            Official Business Registrations
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
            {/* UK Certificate */}
            <div className="group flex flex-col items-center">
              {/* <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-purple-600 to-purple-800 rounded-full flex items-center justify-center">
                    <Shield className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                  </div>
                </div>

                <div className="border-2 border-gray-200 rounded-xl p-4 sm:p-6 mb-4 min-h-[300px] sm:min-h-[400px] flex items-center justify-center bg-gradient-to-br from-gray-50 to-white">
                  <div className="text-center space-y-4 sm:space-y-6">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto bg-purple-100 rounded-full flex items-center justify-center">
                      <Award className="w-8 h-8 sm:w-10 sm:h-10 text-purple-700" />
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm text-gray-500 mb-2">
                        CERTIFICATE OF INCORPORATION
                      </p>
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                        United Kingdom
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600 mb-4">
                        Companies House Registration
                      </p>
                      <div className="bg-purple-100 rounded-lg p-3 sm:p-4 inline-block">
                        <p className="text-xs sm:text-sm font-mono text-purple-900">
                          Registration Number
                        </p>
                        <p className="text-sm sm:text-base font-bold text-purple-700">
                          UK-REG-123456
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <button className="w-full bg-gradient-to-r from-purple-600 to-purple-800 text-white py-3 sm:py-4 rounded-xl font-semibold hover:from-purple-700 hover:to-purple-900 transition-all duration-300 shadow-lg hover:shadow-xl text-sm sm:text-base">
                  View Certificate
                </button>
              </div> */}
              <img
                src={CertOfIncorporation}
                className="rounded-2xl w-full h-full"
                alt="Cert"
              />

              <div className="bg-[#1a1434] inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#462371] text-sm font-medium animate-fade-in text-white mt-6">
                <FiCheckCircle className="w-4 h-4" />
                <span>UK Registered</span>
              </div>
            </div>

            {/* Nigeria Certificate */}
            <div className="group flex flex-col items-center">
              {/* <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-green-600 to-green-800 rounded-full flex items-center justify-center">
                    <FileCheck className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                  </div>
                </div>

                <div className="border-2 border-gray-200 rounded-xl p-4 sm:p-6 mb-4 min-h-[300px] sm:min-h-[400px] flex items-center justify-center bg-gradient-to-br from-green-50 to-white">
                  <div className="text-center space-y-4 sm:space-y-6">
                    <div className="flex justify-center gap-2 sm:gap-4 mb-4 sm:mb-6">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-600 rounded"></div>
                      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white border-2 border-green-600 rounded"></div>
                      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-600 rounded"></div>
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm text-gray-500 mb-2">
                        CERTIFICATE OF REGISTRATION
                      </p>
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                        Federal Republic of Nigeria
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600 mb-4">
                        Corporate Affairs Commission
                      </p>
                      <div className="bg-green-100 rounded-lg p-3 sm:p-4 inline-block">
                        <p className="text-xs sm:text-sm font-mono text-green-900">
                          RC Number
                        </p>
                        <p className="text-sm sm:text-base font-bold text-green-700">
                          RC-7891234
                        </p>
                      </div>
                      <div className="mt-4 flex justify-center gap-2">
                        <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gray-200 rounded flex items-center justify-center">
                          <div className="text-xs sm:text-sm font-bold text-gray-600">
                            QR
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <button className="w-full bg-gradient-to-r from-green-600 to-green-800 text-white py-3 sm:py-4 rounded-xl font-semibold hover:from-green-700 hover:to-green-900 transition-all duration-300 shadow-lg hover:shadow-xl text-sm sm:text-base">
                  View Certificate
                </button>
              </div> */}

              <img
                src={CertOfRegistration}
                className="rounded-2xl w-full h-full"
                alt="Cert"
              />

              <div className="bg-[#1a1434] inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#462371] text-sm font-medium animate-fade-in text-white mt-6">
                <FiCheckCircle className="w-4 h-4" />
                <span>Nigeria Registered</span>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        {/* <div className="mt-12 sm:mt-16 text-center">
          <div className="flex flex-wrap justify-center gap-4 sm:gap-8 items-center">
            <div className="flex items-center gap-2 text-gray-700">
              <Lock className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" />
              <span className="text-sm sm:text-base font-semibold">
                256-bit SSL
              </span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" />
              <span className="text-sm sm:text-base font-semibold">
                PCI Compliant
              </span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <Award className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" />
              <span className="text-sm sm:text-base font-semibold">
                ISO Certified
              </span>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default CAS;
