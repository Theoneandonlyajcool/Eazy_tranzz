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

const Rates = () => {
  return (
    <div className="w-full rounded-2xl bg-[linear-gradient(#1A1A2E,#0A0A0F)] p-4 md:p-6 shadow-2xl overflow-x-auto">
      <div className="mb-5 flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <div className="w-10 h-10 md:w-12 md:h-12 bg-[#00C950] rounded-2xl flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" className="md:w-6 md:h-6" viewBox="0 0 24 24" fill="none">
              <path d="M2.99915 2.99902V18.9944C2.99915 19.5247 3.2098 20.0332 3.58476 20.4082C3.95973 20.7832 4.46829 20.9938 4.99857 20.9938H20.9939" stroke="white" stroke-width="1.99942" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M18.9945 8.99707L13.996 13.9956L9.99712 9.99678L6.99799 12.9959" stroke="white" stroke-width="1.99942" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
         <div>
           <h2 className="text-lg md:text-xl font-semibold text-white">Live Exchange Rates</h2>
          <p className="text-xs md:text-sm text-[#99A1AF]">Real-time market data</p>
         </div>
        </div>
        <button className="rounded-full border border-border p-1.5 md:p-2 text-muted-foreground transition-colors hover:text-card-foreground">
          <svg className="h-4 w-4 md:h-5 md:w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 2v6h-6M3 12a9 9 0 0 1 15-6.7L21 8M3 22v-6h6M21 12a9 9 0 0 1-15 6.7L3 16" />
          </svg>
        </button>
      </div>

      {/* Desktop Table */}
      <div className="hidden lg:block">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border">
              <th className="pb-3 text-left font-medium text-[#99A1AF]">Platform</th>
              <th className="pb-3 text-left font-medium text-[#99A1AF]">Buy Rate</th>
              <th className="pb-3 text-left font-medium text-[#99A1AF]">Sell Rate</th>
              <th className="pb-3 text-left font-medium text-[#99A1AF]">Change</th>
              <th className="pb-3 text-right font-medium text-[#99A1AF]">Action</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((p) => (
              <tr key={p.name} className="border-b border-[rgba(255,255,255,0.05)] last:border-0 transition-colors">
                <td className="py-4">
                  <div className="flex items-center gap-3">
                    <div className={`flex h-8 w-8 md:h-9 md:w-9 items-center justify-center rounded-full ${p.iconBg} text-sm font-bold text-white`}>
                      <img src={p.icon} alt="" className="w-full h-full object-contain"/>
                    </div>
                    <span className="font-medium text-white">{p.name}</span>
                  </div>
                </td>
                <td className="py-4 text-[#05DF72]">{p.buy}</td>
                <td className="py-4 text-[#51A2FF]">{p.sell}</td>
                <td className="py-4">
                  <div className={`flex items-center gap-1 font-medium ${p.change >= 0 ? "text-[#05DF72]" : "text-[#FF6467]"}`}>
                    {p.change >= 0 ? <TrendingUp className="h-3 w-3 md:h-4 md:w-4" /> : <TrendingDown className="h-3 w-3 md:h-4 md:w-4" />}
                    {Math.abs(p.change)}%
                  </div>
                </td>
                <td className="py-4 text-right">
                  <button className="rounded-lg bg-[linear-gradient(#953E79,#440830)] px-4 py-1.5 md:px-6 md:py-2 text-xs font-medium text-white transition-colors">
                    Trade
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="lg:hidden space-y-4">
        {payments.map((p) => (
          <div key={p.name} className="border border-[rgba(255,255,255,0.05)] rounded-xl p-4 bg-[rgba(255,255,255,0.02)]">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className={`flex h-8 w-8 items-center justify-center rounded-full ${p.iconBg} text-sm font-bold text-white`}>
                  <img src={p.icon} alt="" className="w-full h-full object-contain"/>
                </div>
                <span className="font-medium text-white">{p.name}</span>
              </div>
              <div className={`flex items-center gap-1 font-medium ${p.change >= 0 ? "text-[#05DF72]" : "text-[#FF6467]"}`}>
                {p.change >= 0 ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
                {Math.abs(p.change)}%
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mb-3">
              <div>
                <p className="text-xs text-[#99A1AF] mb-1">Buy Rate</p>
                <p className="text-sm text-[#05DF72] font-medium">{p.buy}</p>
              </div>
              <div>
                <p className="text-xs text-[#99A1AF] mb-1">Sell Rate</p>
                <p className="text-sm text-[#51A2FF] font-medium">{p.sell}</p>
              </div>
            </div>
            
            <button className="w-full rounded-lg bg-[linear-gradient(#953E79,#440830)] py-2 text-xs font-medium text-white transition-colors">
              Trade
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rates;