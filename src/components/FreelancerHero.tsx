import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FiCheckCircle } from "react-icons/fi";

const stats = [
  { value: "10,000+", label: "Active Freelancers" },
  { value: "$50M+", label: "Processed Monthly" },
  { value: "24/7", label: "Support Available" },
  { value: "150+", label: "Countries Served" },
];

const features = [
  "Instant account setup in minutes",
  "Access to 15+ payment platforms",
  "Competitive exchange rates",
  "Dedicated support team",
];

const Hero = () => {
  return (
    <section className="bg-[#0a091c] relative min-h-screen w-full overflow-hidden text-white">
      {/* Background glow effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-glow opacity-50" />
        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] translate-x-1/4 translate-y-1/4 rounded-full bg-gradient-glow opacity-30" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container relative z-10 mx-auto px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left content */}
          <div className="space-y-8">
            {/* Trust badge */}
            <div className="bg-[#1e0e33] text-[#a449fa] inline-flex items-center gap-2 rounded-full border border-[#441c69] px-4 py-2 text-lg backdrop-blur-sm">
              {/* <span className="h-2 w-2 rounded-full bg-primary animate-pulse" /> */}
              <FiCheckCircle className="w-6 h-6" />
              Trusted by Freelancers Worldwide
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl font-bold leading-tight tracking-tight  sm:text-5xl lg:text-6xl">
                Join 10,000+ Freelancers Getting{" "}
                <span className="text-gradient">Paid With Ease</span>
              </h1>
              <p className="max-w-lg text-lg text-muted-foreground">
                Sign up to access multiple payment channels, faster payouts, and
                exclusive rates.
              </p>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
              {stats.map((stat, index) => (
                <div key={index} className="space-y-2">
                  <div className="text-3xl font-bold sm:text-[2.1rem]">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Features list */}
            <ul className="grid gap-3 sm:grid-cols-2 ">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3 ">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#00C95033]/20">
                    <FiCheckCircle className="h-[1.6rem] w-[1.6rem] text-[#05DF72]" />
                  </div>
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right card */}
          <div className="flex justify-center lg:justify-end border-2 border-blue-300">
            <div className="w-full max-w-md border-gradient rounded-2xl bg-gradient-card p-8 backdrop-blur-xl">
              <div className="space-y-6">
                <div className="space-y-2 text-center">
                  <h2 className="text-xl font-semibold text-foreground">
                    Get Started Today
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    Create your free account in under 2 minutes
                  </p>
                </div>

                <div className="space-y-4">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full rounded-lg border border-border bg-background/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                  />

                  <Button size="lg" className="w-full group">
                    Create My Account
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>

                <p className="text-center text-xs text-muted-foreground">
                  By signing up, you agree to our{" "}
                  <a href="#" className="text-primary hover:underline">
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a href="#" className="text-primary hover:underline">
                    Privacy Policy
                  </a>
                </p>

                {/* Trust indicators */}
                <div className="flex items-center justify-center gap-4 border-t border-border pt-6">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <div className="h-2 w-2 rounded-full bg-green-500" />
                    256-bit SSL
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <div className="h-2 w-2 rounded-full bg-green-500" />
                    GDPR Compliant
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
