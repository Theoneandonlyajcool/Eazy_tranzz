import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import PaymentRates from "@/components/PaymentRates/PaymentRates";
import CoreValuePositions from "@/components/CoreValuePosition";
import Testimonials from "@/components/Testimonials";
import { FAQSection } from "@/components/FAQ";
import Hero from "@/components/FreelancerHero";
import CAS from "@/components/CAS";
// import AITextLoading from "@/components/kokonutui/ai-text-loading";

// const images = [".."];

const LandingPage = () => {
  return (
    <div className="min-h-screen">
      {/* <AITextLoading
        className=""
        texts={[
          "Analyzing..",
          "Preparing Dashboard...",
          "Getting latest data..",
          "Almost...",
        ]}
      /> */}
      <HeroSection />
      <HowItWorks />
      <PaymentRates />
      <CAS />
      <CoreValuePositions />
      <Testimonials />
      <FAQSection />
      <Hero />
    </div>
  );
};

export default LandingPage;

// const stocks = [
//   { symbol: "AAPL", name: "Apple Inc.", sector: "Technology" },
//   { symbol: "MSFT", name: "Microsoft Corp.", sector: "Technology" },
//   { symbol: "GOOGL", name: "Alphabet Inc.", sector: "Technology" },
//   { symbol: "AMZN", name: "Amazon.com Inc.", sector: "E-commerce" },
//   { symbol: "META", name: "Meta Platforms Inc.", sector: "Technology" },
//   { symbol: "TSLA", name: "Tesla Inc.", sector: "Automotive" },
//   { symbol: "NVDA", name: "NVIDIA Corp.", sector: "Semiconductors" },
//   { symbol: "NFLX", name: "Netflix Inc.", sector: "Entertainment" },
// ];
