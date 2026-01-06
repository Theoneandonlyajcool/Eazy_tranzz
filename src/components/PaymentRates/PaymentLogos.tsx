import { motion } from "framer-motion";

const paymentMethods = [
  { name: "PayPal", icon: "P", color: "#00457C" },
  { name: "Wise", icon: "W", color: "#9FE870" },
  { name: "CashApp", icon: "$", color: "#00D632" },
  { name: "Zelle", icon: "Z", color: "#6D1ED4" },
  { name: "Payoneer", icon: "P", color: "#FF4800" },
];

const PaymentLogos = () => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 lg:gap-14">
      {paymentMethods.map((method, index) => (
        <motion.div
          key={method.name}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors cursor-pointer group"
        >
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold"
            style={{ backgroundColor: method.color }}
          >
            {method.icon}
          </div>
          <span className="text-sm md:text-base font-medium tracking-wide">
            {method.name}
          </span>
        </motion.div>
      ))}
    </div>
  );
};

export default PaymentLogos;
