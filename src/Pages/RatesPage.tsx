import { useState, useMemo, useEffect } from "react";
import { StatCard } from "@/features/Rates/StatCard";
import { FilterBar } from "@/features/Rates/FilterBar";
import { RateCard } from "@/features/Rates/RateCard";
import { CTASection } from "@/features/Rates/CTASection";
import { stats, platforms } from "@/features/Rates/mockrates";
import HeroSection from "@/features/Rates/HeroSection";
import { getRates } from "@/services/ratesService";

function RatesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState("All");
  const [view, setView] = useState<"grid" | "list">("grid");

  const [Platform, setPlatform] = useState([]);

  const GetAllRates = async () => {
    try {
      const res = await getRates();
      setPlatform(res?.data);
    } catch (error) {
      console.log(error);
    }
  };

  const mapped = Platform.map((ele, idx) => {
    console.log(ele.platformkey, idx);
  });

  useEffect(() => {
    GetAllRates();
  }, []);

  const filteredPlatforms = useMemo(() => {
    return Platform?.filter((p) => {
      const matchesSearch = p.platformKey
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      const matchesFilter =
        filter === "All" || (filter === "Popular" && p.isPopular);
      return matchesSearch && matchesFilter;
    });
  }, [searchQuery, filter]);

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
          {filteredPlatforms.map((platform) => (
            <RateCard key={platform.id} platform={platform} />
          ))}
          {filteredPlatforms.length === 0 && (
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
