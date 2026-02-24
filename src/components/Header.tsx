import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MobileModal from "@/components/MobileModal";
import { IoIosMenu } from "react-icons/io";
import { FaRegUserCircle } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import { motion } from "motion/react";
import { Button } from "./ui/button";
import ProfileDropdown from "@/components/kokonutui/profile-dropdown";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
// import { Button } from "./ui/button";
import newlogo from "@/assets/Images/newLogo.png";

const Header = () => {
  const location = useLocation();
  const currentLocation = location.pathname;

  const [openMobileModal, setOpenMobileModal] = useState(false);

  const initials = sessionStorage.getItem("fullName");
  console.log(initials);

  function getInitials(fullName: string | null): string {
    if (!fullName || typeof fullName !== "string") return "";
    const cleaned = fullName.trim();

    const parts = cleaned.split(/\s+/);

    if (parts.length >= 2) {
      return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
    }

    if (cleaned.length >= 2) {
      return cleaned.slice(0, 2).toUpperCase();
    }

    return cleaned.toUpperCase();
  }

  // const [formattedInitials, SetformattedInitials] = useState("");

  useEffect(() => {
    const results = getInitials(initials);
    console.log("The result is " + results);
    // SetformattedInitials(results);
  }, []);

  const navigate = useNavigate();
  return (
    <nav className="h-[10vh] md:h-[15vh] fixed top-0 left-0 right-0 z-50 w-full flex items-center justify-center">
      {/* container */}
      {openMobileModal && <MobileModal onClose={setOpenMobileModal} />}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="border border-gray-600 w-full max-w-[90%] md:max-w-[80%] 2xl:max-w-7xl bg-black/70 backdrop-blur-md shadow-lg h-full max-h-[80%] rounded-full flex justify-beteween items-center z-[9999px]"
      >
        {/* Image container */}
        <div className="w-[40%]">
          <img
            src={newlogo}
            className="w-12 lg:w-[15%] ml-8 md:ml-10 cursor-pointer"
            alt="logo"
            loading="lazy"
            onClick={() => navigate("/")}
          />
        </div>

        {/* Content */}

        <div className="navB:flex w-full max-w-[65%] hidden justify-between items-center px-4">
          {/* Links */}
          <ul className="flex items-center">
            {[
              { onPage: "Home", navTo: "/", activePage: "/" },
              { onPage: "About", navTo: "/about", activePage: "/about" },
              {
                onPage: "Contact",
                navTo: "/contact",
                activePage: "/contact",
              },
              { onPage: "Blog", navTo: "/blog", activePage: "/blog" },
            ].map((ele, idx) => (
              <li
                key={idx}
                onClick={() => navigate(ele.navTo)}
                className={`${
                  ele.activePage === currentLocation
                    ? "text-[#ae157c] font-bold"
                    : " text-white hover:text-[#ae157c]/50"
                }   cursor-pointer text-xl transition-colors duration-300 mx-2 px-2 py-1 rounded-tl-md rounded-br-md`}
              >
                {ele.onPage}
              </li>
            ))}
          </ul>

          {/* CTA buttons */}
          <div>
            {initials ? (
              <>
                <ProfileDropdown />
              </>
            ) : (
              <>
                <button
                  onClick={() => navigate("/sign_in")}
                  className="text-white px-4 py-2 rounded-full mr-4 hover:text-[#ae157c] cursor-pointer transition-colors duration-300"
                >
                  Log in
                </button>
                <Button
                  className="border rounded-[100px] border-[#E9C4FF] backdrop-blur-xs cursor-pointer px-6 py-2 hover:scale-105 transition-transform duration-200"
                  onClick={() => navigate("/sign_up")}
                >
                  Get Started
                </Button>
              </>
            )}
          </div>
        </div>

        {/* Nav b */}
        <div className="navB:hidden text-white w-full flex items-center justify-end pr-4 mr-6">
          {initials ? (
            <ProfileDropdown />
          ) : (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <FaRegUserCircle className="text-xl mr-2 ss:mr-4 sm:mr-6 md:text-2xl cursor-pointer" />
              </DropdownMenuTrigger>

              <DropdownMenuContent className="w-50 mt-2 mr-8 sm:mr-4 bg-black text-white border-none">
                <DropdownMenuLabel>Account</DropdownMenuLabel>
                <DropdownMenuSeparator className="border border-[#300421b7]" />

                <DropdownMenuItem
                  className="cursor-pointer hover:bg-[#2f1c2f]"
                  onClick={() => navigate("/sign_up")}
                >
                  Sign Up
                </DropdownMenuItem>

                <DropdownMenuItem
                  className="cursor-pointer hover:bg-[#2f1c2f]"
                  onClick={() => navigate("/sign_in")}
                >
                  Log In
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}

          <IoIosMenu
            onClick={() => setOpenMobileModal(true)}
            className="text-3xl md:text-5xl cursor-pointer"
          />
        </div>
      </motion.div>
    </nav>
  );
};

export default Header;
