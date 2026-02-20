import React from "react";
import { Search, List, LayoutGrid, SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

interface FilterBarProps {
  onSearch: (query: string) => void;
  onFilterChange: (filter: string) => void;
  onViewChange: (view: "grid" | "list") => void;
  currentFilter: string;
  currentView: "grid" | "list";
}

export const FilterBar: React.FC<FilterBarProps> = ({
  onSearch,
  onFilterChange,
  onViewChange,
  currentFilter,
  currentView,
}) => {
  const filters = ["All", "Popular", "New"];

  return (
    <div className="glass-dark p-4 rounded-xl flex flex-wrap gap-4 items-center justify-between shadow-2xl bg-linear-to-t from-[#0A0A0F] to-[#1A1A2E] border border-[#AD46FF33]">
      <div className="flex flex-wrap items-center gap-3">
        <Button
          variant="outline"
          size="sm"
          className="bg-white/5 hover:bg-white/5 hover:text-muted-foreground border-white/10 text-muted-foreground gap-2"
        >
          <SlidersHorizontal size={14} />
          Filters
        </Button>
        <div className="flex h-9 p-1 bg-white/5 rounded-lg border border-white/10">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => onFilterChange(filter)}
              className={cn(
                "px-4 text-xs font-bold rounded-md transition-all cursor-pointer",
                currentFilter === filter
                  ? "bg-linear-to-l from-[#440830] to-[#953E79] text-primary-foreground shadow-lg"
                  : "text-muted-foreground hover:text-white",
              )}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-1 min-w-[300px] items-center gap-3 max-w-xl">
        <div className="relative flex-1">
          <Search
            size={16}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
          />
          <Input
            placeholder="Search platform..."
            className="pl-10 bg-white/5 border-white/10 h-9 rounded-lg focus-visible:ring-primary focus-visible:ring-offset-0"
            onChange={(e) => onSearch(e.target.value)}
          />
        </div>
        <div className="flex p-1 bg-white/5 rounded-lg border border-white/10 h-9">
          <button
            onClick={() => onViewChange("grid")}
            className={cn(
              "p-1.5 rounded transition-all",
              currentView === "grid"
                ? "bg-white/10 text-primary shadow-inner"
                : "text-muted-foreground",
            )}
          >
            <LayoutGrid size={16} />
          </button>
          <button
            onClick={() => onViewChange("list")}
            className={cn(
              "p-1.5 rounded transition-all",
              currentView === "list"
                ? "bg-white/10 text-primary shadow-inner"
                : "text-muted-foreground",
            )}
          >
            <List size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};
