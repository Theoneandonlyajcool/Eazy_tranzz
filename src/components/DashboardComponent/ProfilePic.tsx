import { CheckCircle, User, Pen, MapPin, PanelTop } from "lucide-react";

const ProfilePic: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-gray-50 dark:bg-[#0A0A0F] flex justify-center">
      <div className="w-full max-w-[1200px] flex flex-col p-2 gap-4 md:gap-6">
        {/* Profile Header */}
        <div className="w-full h-auto md:h-[170px] rounded-2xl border border-purple-200 dark:border-[#372358] bg-linear-to-b from-purple-50 to-gray-100 dark:from-[#19192B] dark:to-[#0B0B12] p-4 md:p-6">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-6">
            <div className="flex items-center gap-3 md:gap-4">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-linear-to-b from-[#953E79] to-[#440830] flex items-center justify-center">
                <h1 className="w-[23px] text-white h-9 text-[30px] md:text-[30px] leading-9 font-bold font-inter tracking-[0px] inline-block">
                  A
                </h1>
              </div>

              <div className="flex flex-col gap-1 md:gap-2">
                <h2 className="font-bold text-[#222] dark:text-white text-lg md:text-2xl leading-7 md:leading-8">
                  ayoradel571
                </h2>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-white/70 wrap-break-word">
                  ayoradel@gmail.com
                </p>
                <div className="flex items-center gap-1">
                  <CheckCircle size={15} color="#05DF72" />
                  <span className="text-[10px] sm:text-xs text-green-600 dark:text-[#05DF72]">
                    Verified Account
                  </span>
                </div>
              </div>
            </div>

            <button className="w-full sm:w-[150px] h-10 sm:h-[45px] flex items-center justify-center gap-2 text-[#222] dark:text-white rounded-xl bg-purple-100 dark:bg-[#331E4E] border border-purple-300 dark:border-[#AD46FF80] hover:bg-purple-200 dark:hover:bg-[#422A5E] transition-colors text-sm font-medium">
              <Pen size={16} /> Edit Profile
            </button>
          </div>
        </div>

        {/* Personal Information */}
        <div className="w-full rounded-2xl border border-purple-200 dark:border-[#372358] bg-linear-to-b from-purple-50 to-gray-100 dark:from-[#19192C] dark:to-[#0B0B10] p-4 md:p-6">
          <div className="flex items-center gap-2 mb-4 md:mb-6">
            <User size={20} color="#C27AFF" />
            <h3 className="text-lg md:text-xl text-[#222] dark:text-white font-bold">
              Personal Information
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
            {[
              { label: "First Name", value: "ayoradel" },
              { label: "Last Name", value: "Not provided" },
              {
                label: "Email Address",
                value: "ayoradel571@gmail.com",
                note: "Email cannot be changed",
              },
              { label: "Phone Number", value: "Not provided" },
              { label: "Date of Birth", value: "Not provided" },
              { label: "Gender", value: "Not provided" },
              { label: "Nationality", value: "Not provided" },
              { label: "Occupation", value: "Not provided" },
            ].map((item, i) => (
              <div key={i} className="flex flex-col gap-1 sm:gap-2">
                <label className="text-xs sm:text-sm font-medium text-gray-500 dark:text-[#99A1AF]">
                  {item.label}
                </label>
                <input
                  readOnly
                  value={item.value}
                  className={`w-full h-[45px] sm:h-[50px] rounded-xl border border-gray-300 dark:border-[#364153] px-3 sm:px-4 bg-white dark:bg-[#0A0A0F] text-sm sm:text-base leading-5 sm:leading-6 font-inter font-normal focus:outline-none cursor-default focus:cursor-text ${
                    item.label === "Email Address"
                      ? "text-gray-400 dark:text-[#A0A0A5]"
                      : "text-[#222] dark:text-white"
                  }`}
                />
                {item.note && (
                  <span className="text-[10px] sm:text-xs text-gray-500 dark:text-white/50">
                    {item.note}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Residential Address */}
        <div className="w-full rounded-2xl border border-purple-200 dark:border-[#372358] bg-linear-to-b from-purple-50 to-gray-100 dark:from-[#19192C] dark:to-[#0B0B10] p-4 md:p-6">
          <div className="flex items-center gap-2 mb-4 md:mb-6">
            <MapPin size={20} color="#C27AFF" />
            <h3 className="text-lg md:text-xl font-bold text-[#222] dark:text-white">
              Residential Address
            </h3>
          </div>

          <div className="flex flex-col gap-3 md:gap-4">
            <div className="flex flex-col gap-1 sm:gap-2">
              <label className="text-xs sm:text-sm font-medium text-gray-500 dark:text-[#99A1AF]">
                Street Address
              </label>
              <input
                readOnly
                value="Not provided"
                className="w-full h-[45px] sm:h-[50px] rounded-xl border border-gray-300 dark:border-[#364153] px-3 sm:px-4 bg-white dark:bg-[#0A0A0F] text-sm sm:text-base leading-5 sm:leading-6 font-inter font-normal text-[#222] dark:text-white focus:outline-none cursor-default focus:cursor-text"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
              {[
                { label: "City", value: "Not provided" },
                { label: "State", value: "Not provided" },
                { label: "Postal Code", value: "Not provided" },
                { label: "Country", value: "Nigeria" },
              ].map((item, i) => (
                <div key={i} className="flex flex-col gap-1 sm:gap-2">
                  <label className="text-xs sm:text-sm font-medium text-gray-500 dark:text-white/80">
                    {item.label}
                  </label>
                  <input
                    readOnly
                    value={item.value}
                    className="w-full h-[45px] sm:h-[50px] rounded-xl border border-gray-300 dark:border-[#364153] px-3 sm:px-4 bg-white dark:bg-[#0A0A0F] text-sm sm:text-base leading-5 sm:leading-6 font-inter font-normal text-[#222] dark:text-white focus:outline-none cursor-default focus:cursor-text"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Identity Information */}
        <div className="w-full rounded-2xl border border-purple-200 dark:border-[#372358] bg-linear-to-b from-purple-50 to-gray-100 dark:from-[#19192C] dark:to-[#0B0B10] p-4 md:p-6">
          <div className="flex items-center gap-2 mb-4 md:mb-6">
            <PanelTop size={20} color="#C27AFF" />
            <h3 className="text-lg md:text-xl text-[#222] dark:text-white font-bold">
              Identity Information
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
            {[
              {
                label: "ID Type",
                value: "Not provided",
                note: "ID type cannot be changed",
              },
              {
                label: "ID Number",
                value: "Not provided",
                note: "ID number is masked for security",
              },
            ].map((item, i) => (
              <div key={i} className="flex flex-col gap-1 sm:gap-2">
                <label className="text-xs sm:text-sm font-medium text-gray-500 dark:text-[#99A1AF]">
                  {item.label}
                </label>
                <input
                  readOnly
                  value={item.value}
                  className="w-full h-[45px] sm:h-[50px] rounded-xl border border-gray-300 dark:border-[#364153] px-3 sm:px-4 bg-white dark:bg-[#0A0A0F] text-sm sm:text-base leading-5 sm:leading-6 font-inter font-normal text-gray-400 dark:text-[#99A1AF] uppercase focus:outline-none cursor-default focus:cursor-text"
                />
                <span className="text-[10px] sm:text-xs text-gray-500 dark:text-white/50">
                  {item.note}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-4 md:mt-6 w-full h-auto rounded-xl border border-blue-200 dark:border-[#1A386F] p-4 flex items-center justify-center text-center bg-blue-50 dark:bg-[#121A2F]">
            <p className="text-xs sm:text-sm text-blue-700 dark:text-[#8EC5FF]">
              <span className="font-bold">Note:</span> Some identity information
              cannot be edited for security reasons. If you need to update your
              ID details, please contact support.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePic;
