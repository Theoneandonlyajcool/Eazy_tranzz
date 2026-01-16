// import { motion } from "framer-motion";

import RatesImage from "@/assets/Images/RatesSupport.png";

// const paymentMethods = [
//   { name: "PayPal", icon: "P", color: "#00457C" },
//   { name: "Wise", icon: "W", color: "#9FE870" },
//   { name: "CashApp", icon: "$", color: "#00D632" },
//   { name: "Zelle", icon: "Z", color: "#6D1ED4" },
//   { name: "Payoneer", icon: "P", color: "#FF4800" },
// ];

const PaymentLogos = () => {
  return (
    <div className=" w-full h-[15vh] md:h-[30vh] min-h-fit bg-[url('@/assets/Images/exch_bg.jpg')] bg-center bg-no-repeat bg-cover flex flex-col items-center justify-center space-y-6 py-10">
      {/* Header Text */}
      <p className="text-white md:text-2xl font-bold 2xl:text-3xl">
        We Support Every Major Client Payment Method
      </p>

      <div className="w-full md:max-w-[75%]  md:h-[90%] ">
        <img className="w-full h-full object-cover " src={RatesImage} alt="" />
      </div>
    </div>
  );
};

export default PaymentLogos;
