// import { FaArrowRight } from "react-icons/fa6";
import HeroVideo from "@/assets/Videos/1992-153555258_medium.mp4";
import BackgroundImage from "@/assets/HeroImageRotated.png";
import { Button } from "@/components/ui/button";
import { FaArrowRightLong } from "react-icons/fa6";

import img1 from "@/assets/Images/img1.png";
import img2 from "@/assets/Images/img2.png";
import img3 from "@/assets/Images/img3.png";
import img4 from "@/assets/Images/PayoneerLogo.jpeg";
import img5 from "@/assets/Images/img5.png";

const HeroSection = () => {
  const images = [
    {
      src: img1,
      alt: "Image 1",
    },
    {
      src: img2,
      alt: "Image 2",
    },
    {
      src: img3,
      alt: "Image 3",
    },
    {
      src: img4,
      alt: "Image 4",
    },
    {
      src: img5,
      alt: "Image 5",
    },
  ];

  const duplicatedImages = [...images, ...images, ...images, ...images];

  // const ScrollingImages = [img1, img2, img3, img4, img5];

  return (
    <section className="relative min-h-screen h-[110vh] w-full overflow-hidden">
      {/* BACKGROUND IMAGE */}
      <img
        src={BackgroundImage}
        className="absolute inset-0 w-full h-full object-cover z-0 "
        alt="Hero background"
      />

      {/* VIDEO (semi-transparent so image shows through) */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-20 backdrop-opacity-100 mix-blend-plus-lighter md:scale-105 lg:scale-200 "
      >
        <source src={HeroVideo} type="video/mp4" />
      </video>

      {/* DARK OVERLAY (if needed) */}
      <div className="absolute inset-0 bg-black/80 z-20"></div>

      {/* CONTENT */}
      <div className="relative z-30 flex flex-col h-full items-center justify-center text-white text-center ">
        <h1 className="text-[1.65rem] md:text-6xl lg:text-7xl 2xl:text-8xl font-bold flex flex-col">
          <p className="whitespace-nowrap">Get Paid From Anywhere.</p>
          <p>No Limits, No Stress.</p>
        </h1>

        {/* buttons */}

        <div className="flex mt-6">
          <Button className="bg-black hover:scale-105 text-white px-2 py-6 md:px-4 md:py-6 cursor-pointer text-lg">
            Get Started <FaArrowRightLong />
          </Button>

          <Button className="ml-4 bg-transparent text-white border hover:bg-transparent px-4 py-6 cursor-pointer text-xs md:text-lg hover:scale-105 xl:text-xl">
            Check today's rates
          </Button>
        </div>
        <div className="border-l-2 border-r-2 border-gray-500 h-[25vh] sm:h-[15vh] my-6 z-40 w-full max-w-[95%] md:max-w-[90%] xl:max-w-[50%] overflow-hidden">
          <div
            className="flex flex-nowrap animate-infinite-scroll h-full items-center"
            style={{ width: "200%" }}
          >
            {duplicatedImages.map((ele, idx) => {
              return (
                <img
                  key={idx}
                  className="w-[5rem]  rounded-2xl overflow-clip mx-4 h-[5rem] object-fit object-center shrink-0 "
                  src={ele.src}
                  alt=""
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
