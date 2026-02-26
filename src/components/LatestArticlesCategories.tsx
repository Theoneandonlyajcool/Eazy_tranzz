import { Tag, ChevronRight } from "lucide-react";
import { categories } from "@/features/BlogPage/Mockdata";

export interface CategoryItem {
  name: string;
  count: number;
}

interface CategoriesProps {
  items?: CategoryItem[];
}

export const Categories = ({ items = categories }: CategoriesProps) => {
  return (
    <div className="bg-[#111116] border border-gray-700 rounded-xl p-6 space-y-6 text-white">
      <div className="flex items-center gap-2 mb-2">
        <Tag className="w-5 h-5 text-[#c27aff]" />
        <h2 className="text-lg font-bold">Categories</h2>
      </div>

      <div className="space-y-4">
        {items.map((category) => (
          <div
            key={category.name}
            className="group flex items-center justify-between py-2 cursor-pointer border-b border-border/30 last:border-0 hover:border-primary/30 transition-all duration-300"
          >
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium transition-colors">
                {category.name}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs text-muted-foreground bg-secondary px-2 py-0.5 rounded-full group-hover:bg-primary/20 transition-all duration-300">
                {category.count}
              </span>
              <ChevronRight className="w-4 h-4 transition-colors group-hover:translate-x-1 duration-300" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
