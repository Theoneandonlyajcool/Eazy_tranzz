import * as motion from "motion/react-client";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "@/assets/Images/thelogo-removebg-preview.png";

const IntroPage = () => {
  const nav = useNavigate();
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [textArrayIndex, setTextArrayIndex] = useState(0);

  const textsToType = ["Where exchange is made easier!"];

  const typingSpeed = 100;
  const deletingSpeed = 50;
  const pauseTime = 2000;

  useEffect(() => {
    const currentText = textsToType[textArrayIndex];

    const timer = setTimeout(
      () => {
        if (!isDeleting) {
          if (currentIndex < currentText.length) {
            setDisplayText(currentText.substring(0, currentIndex + 1));
            setCurrentIndex(currentIndex + 1);
          } else {
            setTimeout(() => {
              nav("home");
            }, pauseTime);
          }
        } else {
          if (currentIndex > 0) {
            setDisplayText(currentText.substring(0, currentIndex - 1));
            setCurrentIndex(currentIndex - 1);
          } else {
            setIsDeleting(false);
            setTextArrayIndex((textArrayIndex + 1) % textsToType.length);
          }
        }
      },
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timer);
  }, [currentIndex, isDeleting, textArrayIndex]);

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, scale: 0, borderRadius: "100%" }}
        animate={{ opacity: 1, scale: 1, borderRadius: "0" }}
        transition={{
          duration: 0.5,
          //   scale: { type: "spring", visualDuration: 0.4 },
        }}
        className="w-full h-screen bg-[#1e0115]"
      >
        <div className=" flex flex-col justify-center items-center h-full">
          <motion.div
            initial={{ opacity: 0, scale: 0, borderRadius: "100%" }}
            animate={{ opacity: 1, scale: 1, borderRadius: "0" }}
            transition={{
              duration: 1.5,
              //   scale: { type: "spring", visualDuration: 0.4 },
            }}
            className="my-4"
          >
            <img src={logo} alt="" className="w-24 h-24 animate-pulse" />
          </motion.div>

          <p className="w-[90%] sm:w-full text-center text-4xl md:text-5xl xl:text-6xl  text-g font-Dancing text-white">
            {displayText}
            {/* <span className="animate-pulse">|</span> */}
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default IntroPage;
