import {
  Globe,
  Zap,
  TrendingUp,
  Shield,
  HeadphonesIcon,
  FileCheck,
} from "lucide-react";

const features = [
  {
    icon: Globe,
    title: "Global Coverage",
    description: "Receive payments from any country, any platform",
    variant: "coral" as const,
    bgColor: "bg-[#fe8030]/10",
  },
  {
    icon: Zap,
    title: "Fast Confirmation",
    description: "5-10 minutes typical processing",
    variant: "orange" as const,
    bgColor: "bg-[#2B7FFF33]",
  },
  {
    icon: TrendingUp,
    title: "Best Rates in Nigeria",
    description: "Competitive, transparent, updated daily",
    variant: "green" as const,
    bgColor: "bg-[#00C950CC]",
  },
  {
    icon: Shield,
    title: "Secure & Verified",
    description: "No scams, no risks — we only work with legit workers",
    variant: "blue" as const,
    bgColor: "bg-[#340BC6CC]",
  },
  {
    icon: HeadphonesIcon,
    title: "Human Support",
    description: "24/7 WhatsApp & chat support",
    variant: "purple" as const,
    bgColor: "bg-[#FA0E1ACC]",
  },
  {
    icon: FileCheck,
    title: "Proof of Work Required",
    description: "Protecting you and your clients from fraud",
    variant: "teal" as const,
    bgColor: "bg-[#FF0BE7CC]",
  },
];

// const variantStyles = {
//   coral: "bg-feature-coral",
//   orange: "bg-feature-orange",
//   green: "bg-feature-green",
//   blue: "bg-feature-blue",
//   purple: "bg-feature-purple",
//   teal: "bg-feature-teal",
// };

const CoreValuePosition = () => {
  return (
    <section className="relative h-screen min-h-fit bg-linear-to-br from-[#0D0106] to-[#252525] overflow-hidden py-16 px-4 sm:px-6 lg:px-8">
      {/* Background gradient blobs */}
      <div className="absolute top-0 left-0 w-72 h-72 sm:w-96 sm:h-96 bg-blob-purple rounded-full blur-3xl opacity-60 -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-64 h-64 sm:w-80 sm:h-80 bg-blob-pink rounded-full blur-3xl opacity-50 translate-x-1/4 translate-y-1/4" />
      <div className="absolute top-1/2 right-0 w-48 h-48 sm:w-64 sm:h-64 bg-blob-pink rounded-full blur-2xl opacity-40 translate-x-1/2" />

      {/* Content container */}
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-3">
            CORE VALUE PROPOSITIONS
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg">
            Why 10,000+ Freelancers Trust Eazytranz
          </p>
        </div>

        {/* card bg */}

        <div className="bg-[#f8d2fd] w-full h-screen min-h-fit flex items-center justify-center rounded-br-[8rem] rounded-tl-[8rem] py-10 px-6 sm:px-10 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 w-full max-w-[80%] h-full max-h-[90%] min-h-fit">
            {features.map((feature, index) => (
              <div
                key={index}
                // style={{ backgroundColor: `${feature.bgColor}` }}
                className={`rounded-2xl p-6 sm:p-8 transition-transform duration-300 hover:scale-[1.02] hover:shadow-2xl  flex flex-col items-center text-center ${feature.bgColor} shadow-xl backdrop-blur-sm`}
              >
                <div className="bg-white/20 backdrop-blur-sm w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center mb-4 sm:mb-6">
                  <feature.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3">
                  {feature.title}
                </h3>
                <p className="text-white/80 text-sm sm:text-base leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreValuePosition;
