import HeroSection from "@/components/HeroSection";
import Header from "@/components/Header";
import HowItWorks from "@/components/HowItWorks";
import PaymentRates from "@/components/PaymentRates/PaymentRates";
import CoreValuePositions from "./CoreValuePosition";
import Testimonials from "@/components/Testimonials";
import { FAQSection } from "@/components/FAQ";

// const images = [".."];

const LandingPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />

      {/* How it works section */}
      <HowItWorks />
      <PaymentRates />
      <CoreValuePositions />
      <Testimonials />
      <FAQSection />
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
