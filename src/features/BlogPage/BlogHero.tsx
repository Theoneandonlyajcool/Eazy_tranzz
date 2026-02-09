import BackgroundImage from "@/assets/Images/BlogHeroBg.jpg";
import { Search } from "lucide-react";
import { useState } from "react";

const BlogHero = () => {
  const [article, setArticle] = useState("");

  return (
    <section className="relative min-h-screen h-[110vh] w-full overflow-hidden">
      {/* BACKGROUND IMAGE */}
      <img
        src={BackgroundImage}
        className="absolute inset-0 w-full h-full object-fit z-0 "
        alt="Hero background"
      />

      {/* DARK OVERLAY (if needed) */}
      <div className="absolute inset-0 bg-black/50 z-20"></div>

      {/* CONTENT */}
      <div className="relative z-30 flex flex-col h-full items-center justify-center text-white text-center ">
        <div className="bg-[#1a1434] inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#462371] text-sm 2xl:text-lg font-medium animate-fade-in">
          {/* <MessageSquare className="w-4 h-4" /> */}
          <span>EazyTranz Blog</span>
        </div>

        <h1 className="my-2 font-bold text-4xl whitespace-nowrap md:text-6xl xl:text-7xl 2xl:text-8xl">
          Insights & Updates <br />{" "}
          <span className="text-[#440830]">Stay Informed</span>
        </h1>

        <p className="text-gray-600 text-lg w-full max-w-[95%] md:max-w-full xl:text-xl 2xl:text-[1.35rem]  ">
          Expert insights on currency exchange, fintech trends, business growth,
          and <br /> everything you need to succeed in international trade.
        </p>

        {/* Input */}
        <div className="border border-gray-500 rounded-2xl overflow-clip w-full bg-gray-500/15 shadow-2xl backdrop-blur-lg max-w-[90%] md:max-w-[50%] 2xl:max-w-lg mt-4 h-16 flex items-center">
          <Search className="m-2" />
          <input
            type="text"
            value={article}
            onChange={(e) => setArticle(e.target.value)}
            placeholder="Search articles ....."
            className="w-full max-w-[95%] outline-none text-xl pl-2 h-full"
          />
        </div>
      </div>
    </section>
  );
};

export default BlogHero;
