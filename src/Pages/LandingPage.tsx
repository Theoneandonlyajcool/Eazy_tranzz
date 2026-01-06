import HeroSection from "@/components/HeroSection";
import Header from "@/components/Header";
import HowItWorks from "@/components/HowItWorks";
import PaymentRates from "@/components/PaymentRates/PaymentRates";
const LandingPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />

      {/* How it works section */}
      <HowItWorks />
      <PaymentRates />

      <div className="border-2 border-red-500 h-screen min-h-fit">
        <div className="border-2  w-full border-blue-600">
          <h1 className="text-2xl font-bold md:text-4xl lg:text-5xl">
            How EazyTranzz Works
          </h1>
          <p>
            Get started in theses simple steps and start receiving international
            payments today.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
