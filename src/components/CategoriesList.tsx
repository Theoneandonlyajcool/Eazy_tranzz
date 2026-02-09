import React from "react";
import { Tag, ChevronRight } from "lucide-react";
import type { CategoryInfo } from "@/types/article";
import { cn } from "@/lib/utils";

interface CategoriesListProps {
  categories: CategoryInfo[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

const CategoriesList: React.FC<CategoriesListProps> = ({
  categories,
  activeCategory,
  onCategoryChange,
}) => {
  return (
    <div className="bg-card/30 rounded-2xl border border-white/5 p-6 space-y-6">
      <div className="flex items-center gap-2 text-primary">
        <Tag className="w-5 h-5" />
        <h3 className="text-lg font-bold text-foreground">Categories</h3>
      </div>

      <div className="flex flex-col">
        {categories.map((category) => (
          <button
            key={category.name}
            onClick={() => onCategoryChange(category.name)}
            className={cn(
              "flex items-center justify-between py-3 group transition-all duration-200 border-b border-white/5 last:border-0",
              activeCategory === category.name
                ? "text-primary"
                : "text-muted-foreground hover:text-foreground",
            )}
          >
            <span className="text-sm font-medium">{category.name}</span>
            <div className="flex items-center gap-3">
              <span className="text-[10px] font-bold bg-secondary px-2 py-0.5 rounded-full text-foreground/70">
                {category.count}
              </span>
              <ChevronRight
                className={cn(
                  "w-4 h-4 transition-transform group-hover:translate-x-1",
                  activeCategory === category.name
                    ? "opacity-100"
                    : "opacity-0 group-hover:opacity-100",
                )}
              />
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoriesList;
