"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import {
  Settings,
  // CreditCard,
  FileText,
  LogOut,
  User,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
// import Gemini from "./gemini";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "@/app/store";
import { logoutUser } from "@/config/logout";

interface Profile {
  name: string;
  email: string;
  avatar: string;
  subscription?: string;
  model?: string;
}

interface MenuItem {
  label: string;
  value?: string;
  nav: string;
  icon: React.ReactNode;
  external?: boolean;
}

const SAMPLE_PROFILE_DATA: Profile = {
  name: "Eugene An",
  email: "eugene@kokonutui.com",
  avatar:
    "https://ferf1mheo22r9ira.public.blob.vercel-storage.com/profile-mjss82WnWBRO86MHHGxvJ2TVZuyrDv.jpeg",
  subscription: "PRO",
  model: "Gemini 2.0 Flash",
};

interface ProfileDropdownProps extends React.HTMLAttributes<HTMLDivElement> {
  data?: Profile;
  showTopbar?: boolean;
}

export default function ProfileDropdown({
  data = SAMPLE_PROFILE_DATA,
  className,
  ...props
}: ProfileDropdownProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  const menuItems: MenuItem[] = [
    {
      label: "Profile",
      nav: "/dashboard/profile",
      icon: <User className="w-4 h-4" />,
    },
    // {
    //   label: "Model",
    //   value: data.model,
    //   href: "#",
    //   icon: <Gemini className="w-4 h-4" />,
    // },
    // {
    //   label: "Subscription",
    //   value: data.subscription,
    //   href: "#",
    //   icon: <CreditCard className="w-4 h-4" />,
    // },
    {
      label: "Settings",
      nav: "/dashboard/settings",
      icon: <Settings className="w-4 h-4" />,
    },
    {
      label: "Terms & Policies",
      nav: "#",
      icon: <FileText className="w-4 h-4" />,
      external: true,
    },
  ];

  const navigate = useNavigate();

  const user = UserAuth((state) => state.user);

  return (
    <div className={cn("relative mr-4 md:mr-0", className)} {...props}>
      <DropdownMenu onOpenChange={setIsOpen}>
        <div className="group relative">
          <DropdownMenuTrigger asChild>
            <button
              type="button"
              className="flex m-2 items-center gap-16 p-3 rounded-2xl bg-transparent cursor-pointer outline-none border-none text-white h-full max-h-[90%]"
            >
              <div className="text-left flex-1 hidden md:block">
                <div className="text-sm text-white font-bold tracking-tight leading-tight">
                  {/* {data.name} */}
                  {user && user.fullName}
                </div>
                <div className="text-xs text-gray-500 dark:text-zinc-400 tracking-tight leading-tight">
                  {/* {data.email} */}
                  {user && user.email}
                </div>
              </div>
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-linear-to-br from-purple-500 via-pink-500 to-orange-400 p-0.5">
                  <div className="w-full h-full rounded-full overflow-hidden bg-zinc-900">
                    <img
                      src={data.avatar}
                      alt={data.name}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                </div>
              </div>
            </button>
          </DropdownMenuTrigger>

          {/* Bending line indicator on the right */}
          <div
            className={cn(
              "absolute -right-3 top-1/2 -translate-y-1/2 transition-all duration-200",
              isOpen ? "opacity-100" : "opacity-60 group-hover:opacity-100",
            )}
          >
            <svg
              width="12"
              height="24"
              viewBox="0 0 12 24"
              fill="none"
              className={cn(
                "transition-all duration-200",
                isOpen
                  ? "text-blue-500 dark:text-blue-400 scale-110"
                  : "text-zinc-400 dark:text-zinc-500 group-hover:text-zinc-600 dark:group-hover:text-zinc-300",
              )}
              aria-hidden="true"
            >
              <path
                d="M2 4C6 8 6 16 2 20"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                fill="none"
              />
            </svg>
          </div>

          <DropdownMenuContent
            align="end"
            sideOffset={4}
            className="w-64 p-2 bg-zinc-900/95 backdrop-blur-sm border border-zinc-800/60 rounded-2xl shadow-xl shadow-zinc-950/20 
                    data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-top-right"
          >
            <div className="space-y-1">
              {menuItems.map((item) => (
                <DropdownMenuItem
                  className="focus:bg-white/20 rounded-xl"
                  onClick={() => navigate(item.nav)}
                  key={item.label}
                  asChild
                >
                  <a
                    // href={item.nav}
                    className="flex items-center p-3 rounded-xl transition-all duration-200 cursor-pointer group hover:shadow-sm border border-transparent hover:border-zinc-700/50"
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}
                  >
                    <div className="flex items-center gap-2 flex-1">
                      {item.icon}
                      <span className="text-sm font-medium text-zinc-100 tracking-tight leading-tight whitespace-nowrap ">
                        {item.label}
                      </span>
                    </div>
                    <div className="shrink-0 ml-auto">
                      {item.value && (
                        <span
                          className={cn(
                            "text-xs font-medium rounded-md py-1 px-2 tracking-tight",
                            item.label === "Model"
                              ? "text-blue-600 bg-blue-50 dark:text-blue-400 dark:bg-blue-500/10 border border-blue-500/10"
                              : "text-purple-600 bg-purple-50 dark:text-purple-400 dark:bg-purple-500/10 border border-purple-500/10",
                          )}
                        >
                          {item.value}
                        </span>
                      )}
                    </div>
                  </a>
                </DropdownMenuItem>
              ))}
            </div>

            <DropdownMenuSeparator className="my-3 bg-linear-to-r from-transparent via-zinc-200 to-transparent dark:via-zinc-800" />

            <DropdownMenuItem asChild>
              <button
                onClick={logoutUser}
                type="button"
                className="w-full flex items-center gap-3 p-3 duration-200 bg-red-500/10 rounded-xl focus:bg-none cursor-pointer border border-transparent hover:border-red-500/30 hover:shadow-sm transition-all group"
              >
                <LogOut className="w-4 h-4 text-red-500 group-hover:text-red-600" />
                <span className="text-sm font-medium text-red-500 group-hover:text-red-600">
                  Sign Out
                </span>
              </button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </div>
      </DropdownMenu>
    </div>
  );
}
