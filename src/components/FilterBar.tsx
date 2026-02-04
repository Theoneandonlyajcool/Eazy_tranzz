import React from "react";
import { Filter } from "lucide-react";
import { cn } from "@/lib/utils";

interface FilterBarProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

const FilterBar: React.FC<FilterBarProps> = ({
  categories,
  activeCategory,
  onCategoryChange,
}) => {
  return (
    <div className="flex items-center gap-4 py-8 overflow-x-auto no-scrollbar scroll-smooth">
      <div className="flex items-center justify-center w-10 h-10 rounded-full text-white  transition-all cursor-pointer shrink-0 ">
        <Filter className="w-4 h-4" />
      </div>

      <div className="flex items-center gap-3">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            className={cn(
              "px-5 py-2.5 rounded-full cursor-pointer text-xs md:text-sm font-semibold transition-all duration-300 whitespace-nowrap border",
              activeCategory === category
                ? "bg-linear-to-br from-[#440830] to-[#953E79] text-primary-foreground border-primary shadow-glow scale-105"
                : "bg-black text-white border-white/5",
            )}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FilterBar;
