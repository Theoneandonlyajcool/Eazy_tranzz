import {
  LayoutDashboard,
  Send,
  Wallet,
  TrendingUp,
  Clock,
  User,
  Settings,
  ShieldCheck,
  HelpCircle,
  LogOut,
  X,
} from "lucide-react";
import { NavLink } from "react-router-dom";
import image from "../../assets/gemini-logo.svg";

const navItems = [
  { title: "Dashboard", url: "/dashboard", icon: LayoutDashboard },
  { title: "Start Transaction", url: "/dashboard/transaction", icon: Send },
  { title: "Payment Options", url: "/dashboard/payments", icon: Wallet },
  { title: "Live Rate Board", url: "/dashboard/rates", icon: TrendingUp },
  { title: "Recent Activities", url: "/dashboard/activities", icon: Clock },
  { title: "Profile", url: "/dashboard/profile", icon: User },
  { title: "Settings", url: "/dashboard/settings", icon: Settings },
  { title: "KYC Verification", url: "/dashboard/kyc", icon: ShieldCheck },
  { title: "Support", url: "/dashboard/support", icon: HelpCircle },
];

interface DashboardSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const DashboardSidebar = ({ isOpen, onClose }: DashboardSidebarProps) => {
  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-40 md:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed inset-y-0 left-0 z-50 overflow-auto sm:overflow-auto
          w-64 bg-[#0f0f0f] border-r border-[#2a2a2a]
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
        `}
      >
        {/* Header */}
        <div className="p-4 border-b border-[#2a2a2a] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#7B0E58] to-[#440830] flex items-center justify-center">
              <img src={image} alt="" />
            </div>
            <span className="text-white font-bold text-lg">EazyTranz</span>
          </div>
          <button
            onClick={onClose}
            className="md:hidden p-1 rounded hover:bg-[#1f1f1f] text-[#9ca3af]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* User Profile Section */}
        <div className="p-4 border-b border-[#2a2a2a]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#953E79] to-[#440830] flex items-center justify-center text-white font-semibold">
              A
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-white font-medium text-sm truncate">
                ayoradel571
              </p>
              <p className="text-[#6b7280] text-xs truncate">
                Ayoradel571@gmail.com
              </p>
            </div>
          </div>
          <div className="flex gap-2 mt-3">
            <span className="px-2 py-0.5 bg-[#22c55e]/20 text-[#22c55e] text-xs rounded-full flex items-center gap-1">
              <ShieldCheck className="w-3 h-3" /> Verified
            </span>
            <span className="px-2 py-0.5 bg-[rgba(173,70,255,0.20)]/20 text-[#f59e0b] text-xs rounded-full">
              Level 3
            </span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto px-2 py-4">
          <ul className="space-y-1">
            {navItems.map((item) => (
              <li key={item.title}>
                <NavLink
                  to={item.url}
                  end={item.url === "/dashboard"}
                  onClick={onClose}
                  className={({ isActive }) =>
                    `
            flex items-center gap-3 px-3 py-2.5 text-sm transition-colors
            ${
              isActive
                ? "rounded-[14px] bg-[linear-gradient(135deg,rgba(149,62,121,0.6),rgba(68,8,48,0.6))] shadow-[0_4px_6px_-4px_rgba(173,70,255,0.3)] text-white"
                : "text-[#9ca3af] hover:bg-[#1f1f1f] hover:text-white"
            }
            `
                  }
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.title}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Footer */}
        <div className="p-2 border-t border-[#2a2a2a]">
          <button className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-red-400 hover:bg-red-500/10 hover:text-red-300 transition-colors w-full">
            <LogOut className="w-5 h-5" />
            <span>Sign Out</span>
          </button>
        </div>
      </aside>
    </>
  );
};

export default DashboardSidebar;
