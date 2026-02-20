import { useState, useMemo } from "react";
import { StatCard } from "@/features/Rates/StatCard";
import { FilterBar } from "@/features/Rates/FilterBar";
import { RateCard } from "@/features/Rates/RateCard";
import { CTASection } from "@/features/Rates/CTASection";
import { stats, platforms } from "@/features/Rates/mockrates";
import HeroSection from "@/features/Rates/HeroSection";

function RatesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState("All");
  const [view, setView] = useState<"grid" | "list">("grid");

  const filteredPlatforms = useMemo(() => {
    return platforms.filter((p) => {
      const matchesSearch = p.name
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
        {/* Header Section */}
        {/* <header className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-lg bg-primary shadow-[0_0_20px_rgba(18,211,158,0.5)] flex items-center justify-center">
                <span className="text-primary-foreground font-black text-xs">
                  C
                </span>
              </div>
              <span className="text-xl font-black font-heading tracking-tighter uppercase text-primary">
                CryptoRates
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black font-heading tracking-tight leading-none">
              Live Exchange{" "}
              <span className="text-primary italic font-light">Rates</span>
            </h1>
            <p className="text-muted-foreground max-w-xl font-medium">
              Real-time updates for the most popular platforms. Compare and
              choose the best rates for your next transaction.
            </p>
          </div>
          <div className="flex items-center gap-4 bg-white/5 p-2 rounded-xl border border-white/10">
            <button className="w-10 h-10 rounded-lg hover:bg-white/10 flex items-center justify-center text-muted-foreground hover:text-primary transition-all">
              <Twitter size={18} />
            </button>
            <button className="w-10 h-10 rounded-lg hover:bg-white/10 flex items-center justify-center text-muted-foreground hover:text-primary transition-all">
              <Github size={18} />
            </button>
            <button className="w-10 h-10 rounded-lg hover:bg-white/10 flex items-center justify-center text-muted-foreground hover:text-primary transition-all">
              <Globe size={18} />
            </button>
          </div>
        </header> */}

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
