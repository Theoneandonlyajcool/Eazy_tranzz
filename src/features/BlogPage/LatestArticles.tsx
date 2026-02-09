import React, { useState } from "react";
import { BookOpen, ChevronDown } from "lucide-react";
import LatestArticleCard from "@/components/LatestArticleCard";
import PopularPosts from "@/components/PopularPosts";
import CategoriesList from "@/components/CategoriesList";
//
import CTASection from "@/components/CTASection";
import { Button } from "@/components/ui/button";
import type { Article, CategoryInfo } from "@/types/article";

const CATEGORIES: CategoryInfo[] = [
  { name: "Currency Exchange", count: 3 },
  { name: "Fintech", count: 2 },
  { name: "Business Tips", count: 2 },
  { name: "Security", count: 1 },
  { name: "Global Trade", count: 1 },
  { name: "Regulations", count: 1 },
];

const ARTICLES: Article[] = [
  {
    id: "1",
    title: "Understanding Currency Exchange Rates: A Complete Guide",
    description:
      "Learn how exchange rates work, what factors influence them, and how to get the best rates for your international transactions and business needs.",
    category: "Currency Exchange",
    date: "Jan 20, 2026",
    readTime: "8 min read",
    author: "Adebayo Johnson",
    imageUrl:
      "https://images.unsplash.com/photo-1580519542036-c47de6196ba5?q=80&w=2071&auto=format&fit=crop",
    isFeatured: true,
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
    isFeatured: true,
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
    isFeatured: true,
  },
  {
    id: "4",
    title: "How to Protect Yourself from Currency Exchange Scams",
    description:
      "Essential security tips and red flags to watch out for when exchanging currency online or in person to keep your funds safe.",
    category: "Security",
    date: "Jan 12, 2026",
    readTime: "10 min read",
    author: "Fatima Ibrahim",
    imageUrl:
      "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: "5",
    title: "Global Trade Regulations Every Entrepreneur Should Know",
    description:
      "A comprehensive overview of the latest international trade laws and compliance requirements for modern business owners.",
    category: "Regulations",
    date: "Jan 10, 2026",
    readTime: "12 min read",
    author: "Olumide Bakare",
    imageUrl:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: "6",
    title: "Mastering the Art of Cross-Border Payments",
    description:
      "Everything you need to know about processing international payments efficiently, reducing fees, and speeding up settlements.",
    category: "Global Trade",
    date: "Jan 08, 2026",
    readTime: "9 min read",
    author: "Sarah Mensah",
    imageUrl:
      "https://images.unsplash.com/photo-1611974714658-058f4c39830c?q=80&w=2070&auto=format&fit=crop",
  },
];

const POPULAR_POSTS: Article[] = [
  {
    id: "p1",
    title: "Understanding Currency Exchange Rates: A Complete Guide",
    category: "Currency Exchange",
    date: "Jan 20, 2026",
    imageUrl:
      "https://images.unsplash.com/photo-1580519542036-c47de6196ba5?q=80&w=2071&auto=format&fit=crop",
    description: "",
    readTime: "",
    author: "",
  },
  {
    id: "p2",
    title: "The Future of Fintech in Nigeria: Trends to Watch in 2026",
    category: "Fintech",
    date: "Jan 18, 2026",
    imageUrl:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070&auto=format&fit=crop",
    description: "",
    readTime: "",
    author: "",
  },
  {
    id: "p3",
    title: "10 Tips for Growing Your Business Through International Trade",
    category: "Business Tips",
    date: "Jan 15, 2026",
    imageUrl:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2032&auto=format&fit=crop",
    description: "",
    readTime: "",
    author: "",
  },
  {
    id: "p4",
    title: "How to Protect Yourself from Currency Exchange Scams",
    category: "Security",
    date: "Jan 12, 2026",
    imageUrl:
      "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?q=80&w=2070&auto=format&fit=crop",
    description: "",
    readTime: "",
    author: "",
  },
];

const LatestArticles: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredArticles =
    activeCategory === "All"
      ? ARTICLES
      : ARTICLES.filter((article) => article.category === activeCategory);

  return (
    <section className="py-12 md:py-20 px-4 md:px-8 max-w-[1400px] mx-auto">
      {/* Header section */}
      <div className="flex flex-col gap-2 mb-10 animate-fade-in">
        <div className="flex items-center gap-3 text-primary">
          <BookOpen className="w-6 h-6" />
          <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-foreground">
            Latest Articles
          </h2>
        </div>
        <p className="text-muted-foreground/60 text-sm font-medium">
          {ARTICLES.length} articles found
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Main Column */}
        <div className="lg:col-span-8 space-y-10">
          <div className="flex flex-col gap-10">
            {filteredArticles.length > 0 ? (
              filteredArticles.map((article, index) => (
                <LatestArticleCard
                  key={article.id}
                  article={article}
                  index={index}
                />
              ))
            ) : (
              <div className="py-20 text-center text-muted-foreground bg-card/20 rounded-3xl border border-dashed border-white/10">
                No articles found in this category.
              </div>
            )}
          </div>

          {/* Load More Button */}
          <div className="flex justify-center pt-8">
            <Button
              variant="outline"
              className="h-12 px-8 rounded-xl border-white/10 hover:bg-white/5 transition-all gap-2 text-sm font-bold"
            >
              Load More Articles
              <ChevronDown className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Sidebar */}
        <aside className="lg:col-span-4 space-y-10">
          <PopularPosts articles={POPULAR_POSTS} />
          <CategoriesList
            categories={CATEGORIES}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />
        </aside>
      </div>

      {/* Footer CTA */}
      <CTASection />
    </section>
  );
};

export default LatestArticles;
