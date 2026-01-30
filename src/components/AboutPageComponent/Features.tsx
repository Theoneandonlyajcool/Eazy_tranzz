import { motion } from "framer-motion";
import { CircleCheck } from "lucide-react";

const featuresData = [
  { text: "Bank-level security and encryption" },
  { text: "Real-time competitive exchange rates" },
  { text: "Instant transaction processing" },
  { text: "24/7 customer support" },
  { text: "Zero hidden fees" },
  { text: "Fully licensed and regulated" },
  { text: "User-friendly platform" },
  { text: "Mobile app available" },
  { text: "Multi-currency support" },
  { text: "Dedicated account manager" },
  { text: "API for business integration" },
  { text: "Compliance with international standards" },
];

const Features = () => {
  return (
    <section className="py-12 sm:py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-white font-bold text-[28px] sm:text-[40px]"
        >
          Why Choose EazyTranz?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-muted-foreground text-base sm:text-lg mb-10 sm:mb-16"
        >
          We're not just another currency exchange platform. Here's what sets us
          apart.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-x-16 sm:gap-y-8">
          {featuresData.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="flex items-center rounded-[10px] border border-solid border-white/10 bg-gradient-to-r from-white/5 to-transparent w-full sm:w-[430.993px] h-auto sm:h-[48.212px] pl-4 sm:pl-[15.99px] gap-3 sm:gap-[11.997px] py-3 sm:py-0"
            >
              <CircleCheck className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-400 flex-shrink-0" />
              <span className="text-muted-foreground text-sm sm:text-base">
                {feature.text}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
