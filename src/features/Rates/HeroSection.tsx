import BackgroundImage from "@/assets/Images/RatesBg.png";
import { Search } from "lucide-react";
import { useState } from "react";

const BlogHero = () => {
  const [article, setArticle] = useState("");

  return (
    <section className="relative min-h-screen h-[110vh] w-full overflow-hidden">
      {/* BACKGROUND IMAGE */}
      <img
        src={BackgroundImage}
        className="absolute inset-0 w-full h-full object-cover sm:object-fit z-0 "
        alt="Hero background"
      />

      {/* DARK OVERLAY (if needed) */}
      <div className="absolute inset-0 bg-black/50 z-20"></div>

      {/* CONTENT */}
      <div className="relative z-30 flex gap-4 flex-col h-full items-center justify-center text-white text-center ">
        <div className="bg-[#00C95033] inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#00BC7D33] text-sm 2xl:text-lg font-medium animate-fade-in">
          <div className="bg-green-400 w-2 h-2 rounded-full"></div>
          <span>Live Rates • Updated Every 5 Seconds</span>
        </div>
        <h1 className="my-2 font-bold text-5xl whitespace-nowrap md:text-6xl xl:text-7xl 2xl:text-8xl flex flex-col justify-center flex-wrap md:flex-row items-center gap-3">
          Real-Time
          <span className="text-[#440830]">Exchange Rates</span>
        </h1>
        <p className="text-gray-400 text-lg w-full max-w-[95%] md:max-w-full xl:text-xl 2xl:text-[1.35rem]  ">
          Compare live USD to NGN rates across multiple payment platforms. Get
          the <br /> best deal for your money.
        </p>
        {/* <div className="border border-gray-500 rounded-2xl overflow-clip w-full bg-gray-500/15 shadow-2xl backdrop-blur-lg max-w-[90%] md:max-w-[50%] 2xl:max-w-lg mt-4 h-16 flex items-center">
          <Search className="m-2" />
          <input
            type="text"
            value={article}
            onChange={(e) => setArticle(e.target.value)}
            placeholder="Search articles ....."
            className="w-full max-w-[95%] outline-none text-xl pl-2 h-full"
          />
        </div> */}
      </div>
    </section>
  );
};

export default BlogHero;
