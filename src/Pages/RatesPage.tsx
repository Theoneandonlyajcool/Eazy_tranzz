import { useState, useMemo, useEffect } from "react";
import { StatCard } from "@/features/Rates/StatCard";
import { FilterBar } from "@/features/Rates/FilterBar";
import { RateCard } from "@/features/Rates/RateCard";
import { CTASection } from "@/features/Rates/CTASection";
import { stats } from "@/features/Rates/mockrates";
import HeroSection from "@/features/Rates/HeroSection";
import { getRates } from "@/services/ratesService";
import type { Platform } from "@/types/rates";

interface RatesApiItem {
  _id: string;
  platformKey: string;
  platformName: string;
  buyRate: number;
  sellRate: number;
  changePercent?: number;
  direction?: "up" | "down" | "flat";
  updatedAt?: string;
}

interface RatesApiResponse {
  success?: boolean;
  data?: RatesApiItem[];
  message?: string;
}

const platformLogoMap: Record<string, string> = {
  wise: "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=64&h=64&fit=crop&q=80",
  paypal:
    "https://images.unsplash.com/photo-1614680376408-81e91ffe3db7?w=64&h=64&fit=crop&q=80",
  cashapp:
    "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=64&h=64&fit=crop&q=80",
  payoneer:
    "https://upload.wikimedia.org/wikipedia/commons/1/12/Payoneer_logo.svg",
  remitly:
    "https://upload.wikimedia.org/wikipedia/commons/9/95/Remitly_logo.svg",
  xe: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Xe_logo.svg",
  quidax: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Quidax-logo.svg",
  binance:
    "https://upload.wikimedia.org/wikipedia/commons/f/fc/Binance-coin-bnb-logo.png",
  westernunion:
    "https://upload.wikimedia.org/wikipedia/commons/f/f9/Western_Union_logo.svg",
};

const formatUpdatedAt = (isoDate?: string) => {
  if (!isoDate) return "Recently";

  const updated = new Date(isoDate).getTime();
  if (Number.isNaN(updated)) return "Recently";

  const diffMs = Date.now() - updated;
  const mins = Math.floor(diffMs / (1000 * 60));

  if (mins < 1) return "Just now";
  if (mins < 60) return `${mins} minute${mins > 1 ? "s" : ""} ago`;

  const hours = Math.floor(mins / 60);
  if (hours < 24) return `${hours} hour${hours > 1 ? "s" : ""} ago`;

  const days = Math.floor(hours / 24);
  return `${days} day${days > 1 ? "s" : ""} ago`;
};

const mapApiRateToPlatform = (item: RatesApiItem): Platform => {
  const change = Number(item.changePercent ?? 0);
  const trend =
    item.direction === "flat" ? "up" : item.direction === "up" ? "up" : "down";

  return {
    id: item._id,
    name: item.platformName || item.platformKey,
    logo:
      platformLogoMap[item.platformKey?.toLowerCase?.() ?? ""] ||
      "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?w=64&h=64&fit=crop&q=80",
    rating: 4.8,
    reviews: 0,
    isPopular: ["wise", "paypal", "cashapp", "binance"].includes(
      item.platformKey?.toLowerCase?.() ?? "",
    ),
    buyRate: Number(item.buyRate ?? 0),
    sellRate: Number(item.sellRate ?? 0),
    buyTrend: trend,
    sellTrend: trend,
    buyChangePercent: change,
    sellChangePercent: change,
    processingTime: "0-10 Minutes",
    minMaxLimit: "$10 - Unlimited",
    updatedAt: formatUpdatedAt(item.updatedAt),
  };
};

function RatesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState("All");
  const [view, setView] = useState<"grid" | "list">("grid");

  const [platforms, setPlatforms] = useState<Platform[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const GetAllRates = async () => {
    setIsLoading(true);
    setErrorMessage(null);

    try {
      const res = (await getRates()) as RatesApiResponse;

      if (!res?.success || !Array.isArray(res?.data)) {
        throw new Error(res?.message || "Unable to load rates data.");
      }

      const mappedRates = res.data.map(mapApiRateToPlatform);
      setPlatforms(mappedRates);
    } catch (error) {
      console.error("Failed to fetch rates:", error);
      setPlatforms([]);
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong while fetching rates.",
      );
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    GetAllRates();
  }, []);

  const filteredPlatforms = useMemo(() => {
    return platforms.filter((p) => {
      const matchesSearch = `${p.name} ${p.id}`
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      const matchesFilter =
        filter === "All" || (filter === "Popular" && p.isPopular);
      return matchesSearch && matchesFilter;
    });
  }, [platforms, searchQuery, filter]);

  return (
    <div className="min-h-screen text-white selection:bg-primary/30 selection:text-primary-foreground relative overflow-hidden bg-[#0A0A0F]">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px] -z-10 translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[150px] -z-10 -translate-x-1/2 translate-y-1/2" />

      <HeroSection />

      <div className="container mx-auto px-4 py-8  max-w-7xl flex flex-col gap-8 md:gap-12 relative z-10 ">
        {/* Stats Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 animate-in fade-in slide-up duration-500">
          {stats.map((stat) => (
            <StatCard key={stat.label} stat={stat} />
          ))}
        </div>

        {/* Filter Bar */}
        <div className="animate-in fade-in slide-up duration-700 delay-100">
          <FilterBar
            onSearch={setSearchQuery}
            onFilterChange={setFilter}
            onViewChange={setView}
            currentFilter={filter}
            currentView={view}
          />
        </div>

        {/* Rates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in slide-up duration-1000 delay-200">
          {isLoading && (
            <div className="col-span-full py-20 text-center glass-dark rounded-2xl border-dashed border-2 border-white/10">
              <p className="text-muted-foreground font-medium text-lg">
                Loading rates...
              </p>
            </div>
          )}

          {!isLoading && errorMessage && (
            <div className="col-span-full py-20 text-center glass-dark rounded-2xl border-dashed border-2 border-red-400/30">
              <p className="text-red-300 font-medium text-lg">{errorMessage}</p>
            </div>
          )}

          {filteredPlatforms.map((platform) => (
            <RateCard key={platform.id} platform={platform} />
          ))}

          {!isLoading && !errorMessage && filteredPlatforms.length === 0 && (
            <div className="col-span-full py-20 text-center glass-dark rounded-2xl border-dashed border-2 border-white/5">
              <p className="text-muted-foreground font-medium text-lg">
                No platforms found matching your search.
              </p>
            </div>
          )}
        </div>

        {/* CTA Footer */}
        <div className="pt-8 md:pt-16 animate-in fade-in slide-up duration-1000 delay-300">
          <CTASection />
        </div>
      </div>
    </div>
  );
}

export default RatesPage;
