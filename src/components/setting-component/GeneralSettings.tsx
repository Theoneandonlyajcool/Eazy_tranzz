import { User } from "lucide-react";

const GeneralSettings = () => {
  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <div className="mb-6 sm:mb-8">
        <h2 className="text-xl sm:text-2xl font-bold text-white mb-1 sm:mb-2">
          General Settings
        </h2>
        <p className="text-sm sm:text-base text-slate-400">
          Configure your basic preferences
        </p>
      </div>

      {/* Account Information */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-5 h-5 rounded-full border-2 border-slate-400 flex items-center justify-center shrink-0">
            <User size={16} className="text-slate-400" />
          </div>
          <h3 className="text-base sm:text-lg font-semibold text-white">
            Account Information
          </h3>
        </div>

        {/* Form Fields - Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          <div>
            <label className="block text-xs sm:text-sm font-medium text-slate-300 mb-2 sm:mb-3">
              Full Name
            </label>
            <input
              type="text"
              placeholder="ayoradal"
              className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-slate-600 text-sm sm:text-base"
            />
          </div>
          <div>
            <label className="block text-xs sm:text-sm font-medium text-slate-300 mb-2 sm:mb-3">
              Email Address
            </label>
            <input
              type="email"
              placeholder="ayoradal571@gmail.com"
              className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-slate-600 text-sm sm:text-base"
            />
          </div>
          <div>
            <label className="block text-xs sm:text-sm font-medium text-slate-300 mb-2 sm:mb-3">
              Phone Number
            </label>
            <input
              type="tel"
              placeholder="+234 801 234 5678"
              className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-slate-600 text-sm sm:text-base"
            />
          </div>
          <div>
            <label className="block text-xs sm:text-sm font-medium text-slate-300 mb-2 sm:mb-3">
              Username
            </label>
            <input
              type="text"
              placeholder="ayoradal"
              className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-slate-600 text-sm sm:text-base"
            />
          </div>
        </div>
      </div>

      {/* Save Changes Button */}
      <div className="flex justify-end">
        <button className="px-4 sm:px-6 py-2 sm:py-3 bg-[linear-gradient(#953E79,#440830)] text-white font-semibold rounded-lg flex items-center gap-2 transition-colors text-sm sm:text-base">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M12.6667 2.5C13.1063 2.50626 13.5256 2.68598 13.8333 3L17 6.16667C17.314 6.47438 17.4937 6.89372 17.5 7.33333V15.8333C17.5 16.2754 17.3244 16.6993 17.0118 17.0118C16.6993 17.3244 16.2754 17.5 15.8333 17.5H4.16667C3.72464 17.5 3.30072 17.3244 2.98816 17.0118C2.67559 16.6993 2.5 16.2754 2.5 15.8333V4.16667C2.5 3.72464 2.67559 3.30072 2.98816 2.98816C3.30072 2.67559 3.72464 2.5 4.16667 2.5H12.6667Z"
                stroke="white"
                stroke-width="1.66667"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M14.1668 17.5007V11.6673C14.1668 11.4463 14.079 11.2343 13.9228 11.0781C13.7665 10.9218 13.5545 10.834 13.3335 10.834H6.66683C6.44582 10.834 6.23385 10.9218 6.07757 11.0781C5.92129 11.2343 5.8335 11.4463 5.8335 11.6673V17.5007"
                stroke="white"
                stroke-width="1.66667"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M5.8335 2.5V5.83333C5.8335 6.05435 5.92129 6.26631 6.07757 6.42259C6.23385 6.57887 6.44582 6.66667 6.66683 6.66667H12.5002"
                stroke="white"
                stroke-width="1.66667"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default GeneralSettings;
