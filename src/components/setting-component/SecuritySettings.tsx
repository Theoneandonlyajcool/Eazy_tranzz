import { Lock } from "lucide-react";

const SecuritySettings = () => {
  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <div className="mb-6 sm:mb-8">
        <h2 className="text-xl sm:text-2xl font-bold text-[#222] dark:text-white mb-1 sm:mb-2">
          Security Settings
        </h2>
        <p className="text-sm sm:text-base text-gray-600 dark:text-slate-300">
          Protect your account and data
        </p>
      </div>

      {/* Password & Authentication */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-6">
          <Lock
            size={18}
            className="text-gray-600 dark:text-slate-400 shrink-0 sm:w-5 sm:h-5"
          />
          <h3 className="text-base sm:text-lg font-semibold text-[#222] dark:text-white">
            Password & Authentication
          </h3>
        </div>

        <div className="space-y-4 sm:space-y-6">
          <div>
            <label className="block text-xs sm:text-sm font-medium text-gray-600 dark:text-slate-300 mb-2 sm:mb-3">
              Current Password
            </label>
            <div>
              <input
                type="password"
                placeholder="Enter current password"
                className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white dark:bg-slate-800 border border-gray-300 dark:border-slate-700 rounded-lg text-[#222] dark:text-white placeholder-gray-400 dark:placeholder-slate-500 focus:outline-none focus:border-purple-500 dark:focus:border-slate-600 focus:ring-1 focus:ring-purple-500 dark:focus:ring-slate-600 text-sm sm:text-base"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs sm:text-sm font-medium text-gray-600 dark:text-slate-300 mb-2 sm:mb-3">
              New Password
            </label>
            <input
              type="password"
              placeholder="Enter new password"
              className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white dark:bg-slate-800 border border-gray-300 dark:border-slate-700 rounded-lg text-[#222] dark:text-white placeholder-gray-400 dark:placeholder-slate-500 focus:outline-none focus:border-purple-500 dark:focus:border-slate-600 focus:ring-1 focus:ring-purple-500 dark:focus:ring-slate-600 text-sm sm:text-base"
            />
          </div>

          <div>
            <label className="block text-xs sm:text-sm font-medium text-gray-600 dark:text-slate-300 mb-2 sm:mb-3">
              Confirm New Password
            </label>
            <input
              type="password"
              placeholder="Confirm new password"
              className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white dark:bg-slate-800 border border-gray-300 dark:border-slate-700 rounded-lg text-[#222] dark:text-white placeholder-gray-400 dark:placeholder-slate-500 focus:outline-none focus:border-purple-500 dark:focus:border-slate-600 focus:ring-1 focus:ring-purple-500 dark:focus:ring-slate-600 text-sm sm:text-base"
            />
          </div>
        </div>
      </div>

      {/* Update Password Button */}
      <div className="flex justify-end">
        <button className="px-4 sm:px-6 py-2 sm:py-3 bg-linear-to-r from-[#953E79] to-[#440830] text-white font-semibold rounded-lg hover:opacity-90 transition-opacity text-sm sm:text-base">
          Update Password
        </button>
      </div>
    </div>
  );
};

export default SecuritySettings;
