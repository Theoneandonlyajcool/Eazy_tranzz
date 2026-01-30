import Features from "@/components/AboutPageComponent/Features";
import FirstHero from "@/components/AboutPageComponent/FirstHero";
import GetStarted from "@/components/AboutPageComponent/GetStarted";
import Principles from "@/components/AboutPageComponent/Principles";
import Timeline from "@/components/AboutPageComponent/Timeline";
import Vision from "@/components/AboutPageComponent/Vission";

const AboutPage = () => {
  return (
    <>
      <FirstHero />
      <div className="w-full h-full min-h-max bg-black flex flex-col items-center justify-center">
        <Vision />
        <Principles />
        <Timeline />
        <Features />
        <GetStarted />
      </div>
    </>
  );
};

export default AboutPage;
