// import { FaArrowRight } from "react-icons/fa6";
import HeroVideo from "@/assets/Videos/Digital Projection Of The Earth Mass In Blue Lights.mp4";
import BackgroundImage from "@/assets/HeroImageRotated.png";
// import { Button } from "@/components/ui/button";

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

        <div className="flex"></div>
      </div>
    </section>
  );
};

export default HeroSection;
