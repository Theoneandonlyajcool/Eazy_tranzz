import { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Bell } from "lucide-react";
import DashboardSidebar from "./DashboardSidebar";
import ChatBox from "@/components/ChatBox";

const pageTitles = [
  {
    title: "Dashboard Overview",
    url: "/dashboard",
    subTitle: "Here's what's happening with your account",
  },
  {
    title: "Start Transaction",
    url: "/dashboard/transaction",
    subTitle: "Start a new exchange transaction",
  },
  {
    title: "Payment Options",
    url: "/dashboard/payments",
    subTitle: "View and manage payment methods",
  },
  {
    title: "Live Rate Board",
    url: "/dashboard/rates",
    subTitle: "Live exchange rates updated every 5 seconds",
  },
  {
    title: "Recent Activities",
    url: "/dashboard/activities",
    subTitle: "Your transaction history",
  },
  {
    title: "Profile",
    url: "/dashboard/profile",
    subTitle: "Manage your account settings",
  },
  {
    title: "Settings",
    url: "/dashboard/settings",
    subTitle: "Configure your account preferences",
  },
  {
    title: "KYC Verification",
    url: "/dashboard/kyc",
    subTitle: "Verification and compliance",
  },
  {
    title: "Support",
    url: "/dashboard/support",
    subTitle: "Get help from our support team",
  },
];

const DashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  const currentTitle = pageTitles.find(
    (item) => item.url === location.pathname,
  );

  return (
    <div className="min-h-screen flex w-full bg-[#0A0A0F]">
      <DashboardSidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      <div className="flex-1 flex flex-col min-h-screen md:ml-64">
        {/* Header */}
        <header className="fixed top-0 right-0 left-0 md:left-64 h-16 border-b border-[#2a2a2a] flex items-center justify-between px-4 md:px-6 bg-[#0a0a0a] z-50">
          <div className="flex items-center gap-4">
            <button className="md:hidden p-2 rounded-lg cursor-pointer">
              <label className="flex flex-col gap-2 w-5 h-5 cursor-pointer">
                <input
                  className="peer hidden cursor-pointer"
                  type="checkbox"
                  checked={sidebarOpen}
                  onChange={() => setSidebarOpen(!sidebarOpen)}
                />
                <div className="rounded-2xl h-[3px] w-1/2 bg-white duration-500 peer-checked:rotate-225 origin-right peer-checked:-translate-x-3 peer-checked:-translate-y-px"></div>
                <div className="rounded-2xl h-[3px] w-full bg-white duration-500 peer-checked:-rotate-45"></div>
                <div className="rounded-2xl h-[3px] w-1/2 bg-white duration-500 place-self-end peer-checked:rotate-225 origin-left peer-checked:translate-x-3 peer-checked:translate-y-px"></div>
              </label>
            </button>

            <div>
              <h1 className="text-white font-bold text-lg md:text-xl">
                {currentTitle?.title}
              </h1>
              <p className="text-[#6b7280] text-xs md:text-sm">
                {currentTitle?.subTitle}
              </p>
            </div>
          </div>

          <button className="relative p-2 rounded-full hover:bg-[#1f1f1f] transition-colors">
            <Bell className="w-5 h-5 text-[#9ca3af]" />
            <span className="absolute top-1 right-1 w-4 h-4 bg-red-500 text-white text-[10px] rounded-full flex items-center justify-center">
              3
            </span>
          </button>
        </header>

        {/* Main Content */}
        <main className="flex-1 overflow-auto p-4 md:p-6 mt-18">
          <Outlet />
        </main>
      </div>
      <ChatBox />
    </div>
  );
};

export default DashboardLayout;
