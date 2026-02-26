import React, { useState } from "react";
import { TrendingUp } from "lucide-react";
import FilterBar from "@/components/FilterBar";
import ArticleCard from "@/components/ArticleCard";
import type { Article } from "@/components/ArticleCard";

const CATEGORIES = [
  "All",
  "Currency Exchange",
  "Fintech",
  "Business Tips",
  "Security",
  "Global Trade",
  "Regulations",
];

const ARTICLES: Article[] = [
  {
    id: "1",
    title: "Understanding Currency Exchange Rates: A Complete Guide",
    description:
      "Learn how exchange rates work, what factors influence them, and how to get the best rates for your international transfers and business needs.",
    category: "Currency Exchange",
    date: "Jan 20, 2026",
    readTime: "8 min read",
    author: "Adebayo Johnson",
    imageUrl:
      "https://images.unsplash.com/photo-1580519542036-c47de6196ba5?q=80&w=2071&auto=format&fit=crop",
  },
  {
    id: "2",
    title: "The Future of Fintech in Nigeria: Trends to Watch in 2026",
    description:
      "Explore the emerging technologies and innovations shaping the future of financial services in Nigeria and across the African continent.",
    category: "Fintech",
    date: "Jan 18, 2026",
    readTime: "6 min read",
    author: "Chioma Okafor",
    imageUrl:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: "3",
    title: "10 Tips for Growing Your Business Through International Trade",
    description:
      "Discover practical strategies for expanding your business globally and navigating the complexities of cross-border commerce effectively.",
    category: "Business Tips",
    date: "Jan 15, 2026",
    readTime: "10 min read",
    author: "Emeka Nwankwo",
    imageUrl:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2032&auto=format&fit=crop",
  },
  {
    id: "4",
    title: "How to Protect Yourself from Currency Exchange Scams",
    description:
      "Essential security tips and red flags to watch out for when exchanging currency online or in person to keep your funds safe.",
    category: "Security",
    date: "Jan 15, 2026",
    readTime: "10 min read",
    author: "Fatima Ibrahim",
    imageUrl:
      "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?q=80&w=2070&auto=format&fit=crop",
  },
];

interface ArticlesSectionProps {
  articles?: Article[];
  isLoading?: boolean;
  errorMessage?: string | null;
}

const ArticlesSection: React.FC<ArticlesSectionProps> = ({
  articles = ARTICLES,
  isLoading = false,
  errorMessage = null,
}) => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredArticles =
    activeCategory === "All"
      ? articles
      : articles.filter((article) => article.category === activeCategory);

  return (
    <section className="py-16 px-4 md:px-8 2xl:max-w-7xl mx-auto">
      {/* Header section with categories */}
      <div className="space-y-4 mb-12">
        <FilterBar
          categories={CATEGORIES}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />

        <div className="pt-8 border-t border-border/50">
          <div className="flex items-center gap-2.5 text-primary animate-fade-in">
            <TrendingUp className="w-5 h-5 stroke-[2.5] text-[#953E79]" />
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white">
              Featured Articles
            </h2>
          </div>
          <p
            className="text-muted-foreground/80 mt-2.5 animate-fade-in text-sm md:text-base font-medium"
            style={{ animationDelay: "100ms" }}
          >
            Our most popular and insightful content
          </p>
        </div>
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {isLoading ? (
          <div className="col-span-full py-20 text-center text-muted-foreground animate-fade-in">
            Loading featured articles...
          </div>
        ) : errorMessage ? (
          <div className="col-span-full py-20 text-center text-red-300 animate-fade-in">
            {errorMessage}
          </div>
        ) : filteredArticles.length > 0 ? (
          filteredArticles.map((article, index) => (
            <ArticleCard key={article.id} article={article} index={index} />
          ))
        ) : (
          <div className="col-span-full py-20 text-center text-muted-foreground animate-fade-in">
            No articles found in this category.
          </div>
        )}
      </div>
    </section>
  );
};

export default ArticlesSection;
