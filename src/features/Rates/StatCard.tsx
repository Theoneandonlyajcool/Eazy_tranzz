import React from "react";
import * as Icons from "lucide-react";
import type { StatItem } from "@/types/rates";
import { cn } from "../../lib/utils";

interface StatCardProps {
  stat: StatItem;
}

export const StatCard: React.FC<StatCardProps> = ({ stat }) => {
  const IconComponent = (Icons as any)[stat.icon];

  const colors: Record<string, string> = {
    emerald: "text-emerald-500 bg-emerald-500/10",
    blue: "text-blue-500 bg-blue-500/10",
    fuchsia: "text-fuchsia-500 bg-fuchsia-500/10",
    amber: "text-amber-500 bg-amber-500/10",
  };

  return (
    <div className="glass-dark p-4 rounded-xl flex items-center gap-4 min-w-[200px] flex-1 bg-linear-to-t from-[#0A0A0F] to-[#1A1A2E] border border-[#AD46FF33]">
      <div className={cn("p-2 rounded-lg", colors[stat.color])}>
        {IconComponent && <IconComponent size={20} />}
      </div>
      <div>
        <p className="text-xs text-muted-foreground font-medium">
          {stat.label}
        </p>
        <div className="flex items-baseline gap-2">
          <h3 className="text-lg font-bold font-heading">{stat.value}</h3>
          {stat.trend && (
            <span
              className={cn(
                "text-[10px] font-bold px-1.5 py-0.5 rounded",
                stat.trend === "up"
                  ? "text-primary bg-primary/10"
                  : "text-destructive bg-destructive/10",
              )}
            >
              {stat.trendValue}
            </span>
          )}
        </div>
        {stat.subValue && (
          <p className="text-[10px] text-muted-foreground mt-0.5">
            {stat.subValue}
          </p>
        )}
      </div>
    </div>
  );
};
