import { TrendingUp, TrendingDown } from "lucide-react";
import image1 from "../../assets/Container1.png"
import image2 from "../../assets/Container2.png"
import image3 from "../../assets/Container3.png"
import image4 from "../../assets/Container4.png"

interface PaymentOption {
  name: string;
  icon: string;
  iconBg: string;
  buy: string;
  sell: string;
  change: number;
}

const payments: PaymentOption[] = [
  { name: "PayPal", icon: image4, iconBg: "bg-blue-600", buy: "₦1,653", sell: "₦1,685", change: 0.8 },
  { name: "Zelle", icon: image3, iconBg: "bg-purple-600", buy: "₦1,660", sell: "₦1,674", change: -2.5 },
  { name: "CashApp", icon: image1, iconBg: "bg-green-600", buy: "₦1,649", sell: "₦1,675", change: 1.6 },
  { name: "Venmo", icon: image2, iconBg: "bg-blue-500", buy: "₦1,643", sell: "₦1,669", change: 0.8 },
];

const PaymentCard = () => {
  return (
    <div className="w-full rounded-2xl bg-[linear-gradient(#1A1A2E,#0A0A0F)] p-6 shadow-2xl">
      <div className="mb-5 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold text-[#FFFFFF]">Payment Options & Rates</h2>
          <p className="text-sm text-[#99A1AF]">Live rates updated every 5 seconds</p>
        </div>
        <button className="rounded-full p-2 text-white bg-[rgba(173,70,255,0.20)] transition-colors cursor-pointer">
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 2v6h-6M3 12a9 9 0 0 1 15-6.7L21 8M3 22v-6h6M21 12a9 9 0 0 1-15 6.7L3 16" />
          </svg>
        </button>
      </div>

      <div className="flex flex-col gap-3">
        {payments.map((p) => (
          <div
            key={p.name}
            className="flex items-center justify-between rounded-xl bg-[rgba(255,255,255,0.05)] px-4 py-4"
          >
            <div className="flex items-center gap-3">
              <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${p.iconBg} text-sm font-bold text-white`}>
                <img src={p.icon} alt="" className="w-full h-full object-contain"/>
              </div>
              <div>
                <p className="font-medium text-white">{p.name}</p>
                <p className="text-sm text-[#99A1AF]">
                  Buy: {p.buy} <span className="mx-1">•</span> Sell: {p.sell}
                </p>
              </div>
            </div>
            <div className={`flex items-center gap-1 font-medium ${p.change >= 0 ? "text-[#05DF72]" : "text-[#FF6467]"}`}>
              {p.change >= 0 ? <TrendingUp className="h-4 w-4" /> : <TrendingDown className="h-4 w-4" />}
              {Math.abs(p.change)}%
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PaymentCard;
