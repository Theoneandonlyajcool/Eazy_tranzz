import { motion } from "framer-motion";
import PaymentLogos from "./PaymentLogos";
import RatesTable from "./RatesTable";
import CosmicOrb from "./CosmicOrb";
import { Badge } from "@/components/ui/badge";

const PaymentRates = () => {
  return (
    <section className="relative min-h-screen w-full bg-background overflow-hidden py-16 md:py-24">
      {/* Cosmic Background */}
      <CosmicOrb />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-6 max-w-5xl">
        {/* Header Text */}
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center text-xs md:text-sm tracking-[0.2em] uppercase text-muted-foreground mb-8"
        >
          We support every major client payment method
        </motion.p>

        {/* Payment Logos */}
        <PaymentLogos />

        {/* Main Heading Section */}
        <div className="mt-16 md:mt-24 text-center mb-10 md:mb-14">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Badge
              variant="outline"
              className="mb-6 px-4 py-1.5 text-xs bg-secondary/50 border-border"
            >
              <span className="w-2 h-2 rounded-full bg-success mr-2 animate-pulse" />
              Live Market Rates
            </Badge>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-4"
          >
            Transparent Rates. Zero Guesswork.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-muted-foreground text-sm md:text-base max-w-lg mx-auto"
          >
            Rates update every 5 minutes. Based on market volatility.
          </motion.p>
        </div>

        {/* Rates Table */}
        <RatesTable />
      </div>
    </section>
  );
};

export default PaymentRates;
