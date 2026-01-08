import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

interface RateRow {
  platform: string;
  icon: string;
  iconBg: string;
  isLive?: boolean;
  rateBonus: string;
  deliverySpeed: string;
  speedBadge: "instant" | "same-day" | "standard";
  limits: string;
}

const ratesData: RateRow[] = [
  {
    platform: "Payoneer",
    icon: "P",
    iconBg: "#FF4800",
    isLive: true,
    rateBonus: "N1,572",
    deliverySpeed: "Instant",
    speedBadge: "instant",
    limits: "$10,000 Limit",
  },
  {
    platform: "Wise",
    icon: "W",
    iconBg: "#9FE870",
    rateBonus: "N1,560",
    deliverySpeed: "Same Day",
    speedBadge: "same-day",
    limits: "Unlimited",
  },
  {
    platform: "CashApp",
    icon: "$",
    iconBg: "#00D632",
    rateBonus: "N1,545",
    deliverySpeed: "Instant",
    speedBadge: "instant",
    limits: "Up to $2,500",
  },
  {
    platform: "PayPal",
    icon: "P",
    iconBg: "#00457C",
    rateBonus: "N1,540",
    deliverySpeed: "Same Day",
    speedBadge: "same-day",
    limits: "Up to $5,000",
  },
  {
    platform: "Black Market Rate",
    icon: "₦",
    iconBg: "#1a1a2e",
    rateBonus: "N1,512",
    deliverySpeed: "—",
    speedBadge: "standard",
    limits: "—",
  },
];

const speedBadgeStyles = {
  instant: "bg-success/20 text-success border-success/30",
  "same-day": "bg-accent/20 text-accent border-accent/30",
  standard: "bg-muted text-muted-foreground border-border",
};

const RatesTable = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="w-full overflow-scroll rounded-2xl border border-border bg-card/50 backdrop-blur-xl"
    >
      {/* Table Header */}
      <div className="grid grid-cols-4 gap-4 px-4 py-4 md:px-6 border-b border-border text-xs md:text-sm font-medium text-muted-foreground uppercase tracking-wider">
        <div>Platform</div>
        <div className="text-center">Rate Bonus</div>
        <div className="text-center hidden sm:block">Delivery Speed</div>
        <div className="text-right">Limits</div>
      </div>

      {/* Table Body */}
      <div className="divide-y divide-border/50">
        {ratesData.map((row, index) => (
          <motion.div
            key={row.platform}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 + index * 0.1 }}
            className={`grid grid-cols-4 gap-4 px-4 py-4 md:px-6 items-center transition-colors hover:bg-table-hover ${
              index % 2 === 1 ? "bg-table-alt" : ""
            }`}
          >
            {/* Platform */}
            <div className="flex items-center gap-3">
              <div
                className="w-8 h-8 md:w-10 md:h-10 rounded-xl flex items-center justify-center text-sm font-bold text-white shadow-lg"
                style={{ backgroundColor: row.iconBg }}
              >
                {row.icon}
              </div>
              <div className="flex flex-col">
                <span className="text-sm md:text-base font-medium text-foreground">
                  {row.platform}
                </span>
                {row.isLive && (
                  <Badge
                    variant="outline"
                    className="w-fit mt-1 text-[10px] px-2 py-0 bg-success/10 text-success border-success/30"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-success mr-1 animate-pulse" />
                    Live Rate Now
                  </Badge>
                )}
              </div>
            </div>

            {/* Rate Bonus */}
            <div className="text-center">
              <span className="text-sm md:text-lg font-semibold text-foreground">
                {row.rateBonus}
              </span>
            </div>

            {/* Delivery Speed */}
            <div className="text-center hidden sm:block">
              {row.deliverySpeed !== "—" ? (
                <Badge
                  variant="outline"
                  className={`text-xs ${speedBadgeStyles[row.speedBadge]}`}
                >
                  {row.deliverySpeed}
                </Badge>
              ) : (
                <span className="text-muted-foreground">—</span>
              )}
            </div>

            {/* Limits */}
            <div className="text-right">
              <span className="text-xs md:text-sm text-muted-foreground">
                {row.limits}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Footer Link */}
      <div className="px-6 py-5 border-t border-border flex justify-center">
        <motion.a
          href="#"
          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
          whileHover={{ x: 5 }}
        >
          See Full Rates Page
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </motion.a>
      </div>
    </motion.div>
  );
};

export default RatesTable;
