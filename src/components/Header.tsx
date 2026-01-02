import { useState } from "react";
import logo from "@/assets/Images/thelogo-removebg-preview.png";
import { useNavigate } from "react-router-dom";
import MobileModal from "@/components/MobileModal";
import { IoIosMenu } from "react-icons/io";
import { useLocation } from "react-router-dom";
import { motion } from "motion/react";
const Header = () => {
  const location = useLocation();
  const currentLocation = location.pathname;
  console.log("Current Location:", currentLocation);

  const [openMobileModal, setOpenMobileModal] = useState(false);

  const navigate = useNavigate();
  return (
    <nav className="h-[10vh] md:h-[15vh] fixed top-0 left-0 right-0 z-50 w-full flex items-center justify-center">
      {/* container */}

      {openMobileModal && <MobileModal onClose={setOpenMobileModal} />}
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="border border-gray-600 w-full max-w-[90%] md:max-w-[80%] 2xl:max-w-7xl bg-black/70 backdrop-blur-md shadow-lg h-full max-h-[80%] rounded-full flex justify-beteween items-center "
      >
        {/* Image container */}
        <div className="w-[40%]">
          <img
            src={logo}
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
              { onPage: "Home", navTo: "/home", activePage: "/home" },
              { onPage: "About", navTo: "/about", activePage: "/about" },
              {
                onPage: "Services",
                navTo: "/services",
                activePage: "/services",
              },
              { onPage: "Contact", navTo: "/contact", activePage: "/contact" },
            ].map((ele, idx) => (
              <li
                key={idx}
                onClick={() => navigate(ele.navTo)}
                className={`${
                  ele.activePage === currentLocation
                    ? "text-[#ae157c] font-bold underline underline-offset-8"
                    : " text-white hover:bg-[#ae157b76]"
                }   cursor-pointer text-xl transition-colors duration-300 mx-2 px-2 py-1 rounded-tl-md rounded-br-md`}
              >
                {ele.onPage}
              </li>
            ))}
          </ul>

          {/* CTA buttons */}
          <div>
            <button
              onClick={() => navigate("/sign_in")}
              className="text-white px-4 py-2 rounded-full mr-4 hover:text-[#ae157c] cursor-pointer transition-colors duration-300"
            >
              Log in
            </button>
            <button
              onClick={() => navigate("/sign_up")}
              className="bg-[#75004e] text-white px-8 py-2 rounded-full hover:bg-[#ae157c] cursor-pointer transition-colors duration-300"
            >
              Sign Up
            </button>
          </div>
        </div>

        {/* Nav b */}
        <div className="navB:hidden text-white w-full flex justify-end pr-4 mr-6">
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
