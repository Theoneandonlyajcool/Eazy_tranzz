// import { motion } from "framer-motion";
// import RatesTable from "./RatesTable";
// import CosmicOrb from "./CosmicOrb";
// import { Badge } from "@/components/ui/badge";
import PaymentLogos from "./PaymentLogos";
import bgVideo from "@/assets/Videos/Pinterest.mp4";
import { Button } from "@/components/ui/button";
import payoneerLogo from "@/assets/Images/img4.png";
import WiseLogo from "@/assets/Images/img5.png";
import cashAppLogo from "@/assets/Images/img3.png";
import paypalLogo from "@/assets/Images/img1.png";
// import ZelleLogo from "@/assets/Images/img2.png";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Rates = [
  {
    platForm: "Payoneer",
    rateBonus: "N1,572",
    deliverySpeed: "Instant",
    limits: "unlimited",
    bestRate: true,
  },
  {
    platForm: "Wise",
    rateBonus: "N1,560",
    deliverySpeed: "Same Day",
    limits: "$10,000 Limit",
    bestRate: false,
  },
  {
    platForm: "CashApp",
    rateBonus: "N1,545",
    deliverySpeed: "Instant",
    limits: "Up to $2,500",
    bestRate: false,
  },
  {
    platForm: "PayPal",
    rateBonus: "N1,540",
    deliverySpeed: "Same Day",
    limits: "Up to $5,000",
    bestRate: false,
  },
  {
    platForm: "Black Market Rate",
    rateBonus: "N1,512",
    deliverySpeed: "—",
    limits: "—",
    bestRate: false,
  },
];

const PaymentRates = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen w-full bg-background overflow-hidden">
      <PaymentLogos />

      <section className="relative min-h-screen h-[110vh] w-full overflow-hidden flex flex-col items-center justify-center">
        {/* VIDEO (semi-transparent so image shows through) */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-30 backdrop-opacity-100 mix-blend-plus-lighter scale-160 lg:scale-105"
        >
          <source src={bgVideo} type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/98 z-10"></div>

        <Button
          className="border rounded-[100px] md:text-xl border-[#E9C4FF] z-40 backdrop-blur-xs cursor-pointer px-8 py-4 hover:scale-105 transition-transform duration-200 my-2"
          // onClick={() => navigate("/sign_up")}
        >
          Live Market Rates
        </Button>

        {/* Heading */}
        <div className="text-white z-40 text-center mb-6 px-4">
          <h1 className="md:text-3xl lg:text-4xl text-2xl font-bold">
            Transparent Rates. Zero Guesswork
          </h1>
          <p className="text-center text-gray-400 mt-2">
            Rates update every 5 minutes. Based on market volatility.
          </p>
        </div>

        {/* CONTENT */}
        {/* <div className="relative z-30 flex flex-col h-full items-center justify-center text-white text-center "></div> */}
        <div className="w-full max-w-[90%] xl:max-w-7xl overflow-x-scroll lg:overflow-x-hidden scrollbar-custom bg-[#101114] h-[70%] max-h-fit z-40 backdrop-blur-3xl flex flex-col justify-between rounded-2xl">
          <table className="w-full min-w-[600px] table-auto border-collapse text-white">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="text-left p-6 text-gray-400 whitespace-nowrap">
                  PLATFORM
                </th>
                <th className="text-left p-6 text-gray-400 whitespace-nowrap">
                  RATE (NGN/S)
                </th>
                <th className="text-left p-6 text-gray-400 whitespace-nowrap">
                  DELIVERY SPEED
                </th>
                <th className="text-left p-6 text-gray-400 whitespace-nowrap">
                  LIMITS
                </th>
              </tr>
            </thead>
            <tbody>
              {Rates.map((rate, idx) => (
                <tr
                  key={idx}
                  className={`border-b border-gray-700  ${
                    rate.bestRate
                      ? " bg-linear-to-r from-[#440830]/50 to-[#440830]/20"
                      : "hover:bg-[#440830]/10"
                  }`}
                >
                  <td className="p-4 whitespace-nowrap">
                    {rate.platForm !== "Black Market Rate" ? (
                      <img
                        src={
                          rate.platForm === "Wise"
                            ? WiseLogo
                            : rate.platForm === "Payoneer"
                              ? payoneerLogo
                              : rate.platForm === "CashApp"
                                ? cashAppLogo
                                : rate.platForm === "PayPal"
                                  ? paypalLogo
                                  : ""
                        }
                        alt={rate.platForm}
                        className="w-10 h-10 mr-2 inline-block rounded-2xl "
                      />
                    ) : null}

                    {rate.platForm}
                  </td>
                  <td className="p-4 font-medium">{rate.rateBonus}</td>
                  <td className="p-4">{rate.deliverySpeed}</td>
                  <td className="p-4 whitespace-nowrap mr-10">{rate.limits}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div
            onClick={() => navigate("/allrates")}
            className="p-4 text-center text-gray-400 cursor-pointer hover:text-gray-200 transition-all ease-in-out duration-500 mt-4 flex  justify-center items-center"
          >
            See Rates full page
            <ArrowRight className="inline-block ml-2" size={16} />
          </div>
        </div>
      </section>
    </section>
  );
};

export default PaymentRates;

//   <div className="relative z-10 container mx-auto  w-full border-2 border-blue-500">

//     <div className="mt-8 text-center mb-10 md:mb-14 px-4 md:px-6 ">
//       <motion.div
//         initial={{ opacity: 0, scale: 0.9 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ delay: 0.2 }}
//       >
//         <Badge
//           variant="outline"
//           className="mb-6 px-4 py-1.5 text-xs bg-secondary/50 border-border"
//         >
//           <span className="w-2 h-2 rounded-full bg-success mr-2 animate-pulse" />
//           Live Market Rates
//         </Badge>
//       </motion.div>

//       <motion.h2
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.3 }}
//         className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-4"
//       >
//         Transparent Rates. Zero Guesswork.
//       </motion.h2>

//       <motion.p
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.4 }}
//         className="text-muted-foreground text-sm md:text-base max-w-lg mx-auto"
//       >
//         Rates update every 5 minutes. Based on market volatility.
//       </motion.p>
//     </div>

//     <RatesTable />
//   </div>
