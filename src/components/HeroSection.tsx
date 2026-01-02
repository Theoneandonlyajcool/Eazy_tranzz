import { FaArrowRight } from "react-icons/fa6";
import HeroVideo from "@/assets/Videos/Digital Projection Of The Earth Mass In Blue Lights.mp4";
import BackgroundImage from "@/assets/HeroImageRotated.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen h-[110vh] w-full overflow-hidden">
      {/* BACKGROUND IMAGE */}
      <img
        src={BackgroundImage}
        alt="Hero background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* VIDEO (semi-transparent so image shows through) */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-20 backdrop-opacity-100 mix-blend-plus-lighter scale-150"
      >
        <source src={HeroVideo} type="video/mp4" />
      </video>

      {/* DARK OVERLAY (if needed) */}
      <div className="absolute inset-0 bg-black/70 z-20"></div>

      {/* CONTENT */}
      <div className="relative z-30 flex flex-col h-full items-center justify-center text-white text-center px-4">
        <h1 className="text-2xl md:text-6xl lg:text-7xl 2xl:text-8xl font-bold">
          Get Paid From Anywhere. <br /> No Limits, No Stress.
        </h1>

        {/* buttons */}

        <div className="flex">
          <button className="mt-8 bg-black text-md flex text-white px-8 py-4 items-center rounded-md hover:bg-gray-950 cursor-pointer transition-colors duration-300 mx-4">
            Get Started <FaArrowRight className="ml-4" />
          </button>

          <button className="mt-8 bg-transparent border text-lg flex text-white px-8 py-4 items-center rounded-md  cursor-pointer transition-colors duration-300 mx-4">
            Check Today's Rate{" "}
            <svg
              className="ml-4"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M3.4 11.289L6.45 8.258L8.45 10.258L12.5 6.213V8.5H13.5V4.5H9.5V5.5H11.786L8.45 8.837L6.45 6.837L2.712 10.6L3.4 11.289ZM0 16V0H16V16H0ZM1 15H15V1H1V15Z"
                fill="#E7E7E8"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
