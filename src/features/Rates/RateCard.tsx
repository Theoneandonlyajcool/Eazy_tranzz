import React from "react";
import type { Platform } from "@/types/rates";
import {
  Star,
  TrendingUp,
  TrendingDown,
  Clock,
  ShieldCheck,
} from "lucide-react";
import { cn } from "../../lib/utils";
import { Badge } from "@/components/ui/badge";

interface RateCardProps {
  platform: Platform;
}

export const RateCard: React.FC<RateCardProps> = ({ platform }) => {
  return (
    <div className="glass-dark rounded-2xl p-5 flex flex-col gap-4 relative overflow-hidden group hover:border-primary/30 transition-all duration-300 bg-linear-to-t from-[#0A0A0F] to-[#1A1A2E] border border-[#AD46FF33] hover:scale-105">
      {/* Platform Header */}
      <div className="flex justify-between items-start">
        <div className="flex gap-3 items-center">
          <div className="w-12 h-12 rounded-xl overflow-hidden bg-white/5 p-2 border border-white/10 group-hover:scale-105 transition-transform">
            <img
              src={platform.logo}
              alt={platform.name}
              className="w-full h-full object-contain"
            />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <h3 className="font-bold text-lg font-heading">
                {platform.name}
              </h3>
              <ShieldCheck size={14} className="text-primary" />
            </div>
            <div className="flex items-center gap-1">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={10}
                    className={cn(
                      i < Math.floor(platform.rating)
                        ? "fill-amber-400 text-amber-400"
                        : "text-muted-foreground",
                    )}
                  />
                ))}
              </div>
              <span className="text-[10px] text-muted-foreground font-bold ml-1">
                {platform.rating}
              </span>
            </div>
          </div>
        </div>
        {platform.isPopular && (
          <Badge
            variant="outline"
            className="text-[10px] uppercase tracking-wider text-accent border-accent/30 bg-accent/5 py-0 px-2"
          >
            Popular
          </Badge>
        )}
      </div>

      {/* Buy Rate Section */}
      <div className="bg-[#00C9501A] border-[#00C9504D] border rounded-xl p-3 flex justify-between items-center relative overflow-hidden">
        <div className="absolute top-0 right-0 p-2 opacity-10">
          <TrendingUp size={40} className="text-primary" />
        </div>
        <div>
          <p className="text-[10px] font-bold text-gray-500 uppercase tracking-tight mb-0.5">
            Buy Rate
          </p>
          <h4 className="text-2xl font-black text-green-500">
            ₦{platform.buyRate.toLocaleString()}
          </h4>
        </div>
        <div className="flex flex-col items-end">
          <div className="flex items-center gap-1 text-green-500">
            <TrendingUp size={12} />
            <span className="text-xs font-bold">
              {platform.buyChangePercent}%
            </span>
          </div>
        </div>
      </div>

      {/* Sell Rate Section */}
      <div className="bg-[#2B7FFF1A] border-[#2B7FFF4D] border rounded-xl p-3 flex justify-between items-center relative overflow-hidden">
        <div className="absolute top-0 right-0 p-2 opacity-10">
          <TrendingDown size={40} className="text-muted-foreground" />
        </div>
        <div>
          <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-tight mb-0.5">
            Sell Rate
          </p>
          <h4 className="text-2xl font-black text-[#51A2FF]">
            ₦{platform.sellRate.toLocaleString()}
          </h4>
        </div>
        <div className="flex flex-col items-end">
          <div className="flex items-center gap-1 text-muted-foreground">
            <TrendingDown size={12} />
            <span className="text-xs font-bold">
              {platform.sellChangePercent}%
            </span>
          </div>
        </div>
      </div>

      {/* Platform Info Footer */}
      <div className="grid grid-cols-2 gap-y-3 pt-2">
        <div className="flex flex-col gap-1">
          <p className="text-[10px] text-muted-foreground font-medium flex items-center gap-1">
            <Clock size={10} /> Processing
          </p>
          <p className="text-xs font-bold">{platform.processingTime}</p>
        </div>
        <div className="flex flex-col gap-1 items-end">
          <p className="text-[10px] text-muted-foreground font-medium">
            Min - Max
          </p>
          <p className="text-xs font-bold">{platform.minMaxLimit}</p>
        </div>
      </div>

      <div className="flex justify-center pt-2 border-t border-white/5">
        <div className="flex items-center gap-1.5">
          <div className="w-2 h-2 bg-green-500 rounded-full" />
          <span className="text-[10px] text-muted-foreground font-medium uppercase tracking-widest">
            Updated {platform.updatedAt}
          </span>
        </div>
      </div>
    </div>
  );
};
