import { BookOpen } from "lucide-react";
import { articles } from "@/features/BlogPage/Mockdata";
import { ArticleCard } from "@/components/LatestArticleCard";
import { PopularPosts } from "@/components/LatestPopularPosts";
import { Categories } from "@/components/LatestArticlesCategories";

export const LatestArticlesSection = () => {
  return (
    <section className="container mx-auto px-4 py-12 md:py-24 space-y-12">
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <BookOpen className="w-6 h-6 text-[#c27aff]" />
          <h1 className="text-3xl font-bold tracking-tight text-white">
            Latest Articles
          </h1>
        </div>
        <p className="text-muted-foreground text-sm font-medium">
          {articles.length} articles found
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Main Feed */}
        <div className="lg:col-span-8 space-y-8">
          {articles.map((article) => (
            <div
              key={article.id}
              className="animate-fade-in"
              style={{ animationDelay: `${parseInt(article.id) * 0.1}s` }}
            >
              <ArticleCard article={article} />
            </div>
          ))}

          {/* <div className="pt-8 flex justify-center">
            <button className="bg-primary text-primary-foreground px-8 py-3 rounded-full font-bold transition-transform active:scale-95 hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20">
              Load More
            </button>
          </div> */}
        </div>

        {/* Sidebar */}
        <aside className="lg:col-span-4 space-y-8">
          <div className="sticky top-24 space-y-8">
            <PopularPosts />
            <Categories />
          </div>
        </aside>
      </div>
    </section>
  );
};
