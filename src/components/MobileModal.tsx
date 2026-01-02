import { IoHomeSharp } from "react-icons/io5";
import { IoSchoolSharp } from "react-icons/io5";
import { MdWork } from "react-icons/md";
// import { FaCode } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { useLocation } from "react-router-dom";

import { motion } from "motion/react";
import { FaXmark } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

interface MobileModalProps {
  onClose: (value: boolean) => void;
}

const MobileModal = ({ onClose: closeModal }: MobileModalProps) => {
  const location = useLocation();
  const currentLocation = location.pathname;
  const nav = useNavigate();

  // const navigate = useNavigate();
  return (
    <div className="bg-gray-900/50 backdrop-blur-lg h-screen w-full top-0 left-0 fixed flex justify-end z-1000 ">
      {/* Modal */}
      <motion.div
        initial={{ opacity: 0, x: 100 }} // negative = left
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="bg-transparent h-screen w-full top-0 left-0 fixed flex justify-end "
      >
        <div className="bg-white w-full max-w-[80%] ssr:w-[70%] md:w-[50%] h-full">
          {/* close */}
          <div className="relative  w-full h-[8vh] flex justify-end items-center">
            <FaXmark
              onClick={() => closeModal(false)}
              className="text-3xl text-gray-700 cursor-pointer"
            />
          </div>

          {/* Content */}
          <div className=" h-[80%] mt-2">
            {[
              {
                onPage: "Home",
                icon: <IoHomeSharp />,
                NavTo: "/home",
              },
              {
                onPage: "About",
                icon: <IoSchoolSharp />,
                NavTo: "/about",
              },
              {
                onPage: "Services",
                icon: <MdWork />,
                NavTo: "/services",
              },
              // {
              //   onPage: "Projects",
              //   icon: <BiSolidBookAlt />,
              //   NavTo: "/projects",
              // },
              // {
              //   onPage: "Open Source",
              //   icon: <FaCode />,
              //   NavTo: "/opensource",
              // },
              {
                onPage: "Contact",
                icon: <FaPhone />,
                NavTo: "/contact",
              },
            ].map((ele, idx) => (
              <button
                key={idx}
                className={`${
                  ele.NavTo == currentLocation
                    ? "bg-[#620062] text-white font-bold"
                    : "hover:bg-[#ed4bb7]/50 "
                } border-b border-b-gray-700  w-full h-[15%] flex justify-start items-center px-4 cursor-pointer  transition-all ease-in-out duration-500`}
                onClick={() => {
                  nav(ele.NavTo);
                  closeModal(false);
                }}
              >
                <p
                  className={` ${
                    currentLocation == ele.NavTo
                      ? "text-white"
                      : "text-blue-950"
                  } font-bold text-2xl mx-2 `}
                >
                  {" "}
                  {ele.icon}
                </p>
                {ele.onPage}
              </button>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default MobileModal;
