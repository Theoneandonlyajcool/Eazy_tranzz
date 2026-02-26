import { BookOpen } from "lucide-react";
import { articles } from "@/features/BlogPage/Mockdata";
import { ArticleCard } from "@/components/LatestArticleCard";
import {
  PopularPosts,
  type PopularPostItem,
} from "@/components/LatestPopularPosts";
import {
  Categories,
  type CategoryItem,
} from "@/components/LatestArticlesCategories";

interface LatestArticleItem {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  featured?: boolean;
}

interface LatestArticlesSectionProps {
  articlesList?: LatestArticleItem[];
  popularPostsList?: PopularPostItem[];
  categoriesList?: CategoryItem[];
  isLoading?: boolean;
  errorMessage?: string | null;
}

export const LatestArticlesSection = ({
  articlesList = articles,
  popularPostsList,
  categoriesList,
  isLoading = false,
  errorMessage = null,
}: LatestArticlesSectionProps) => {
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
          {articlesList.length} articles found
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Main Feed */}
        <div className="lg:col-span-8 space-y-8">
          {isLoading ? (
            <div className="py-20 text-center text-muted-foreground animate-fade-in">
              Loading latest articles...
            </div>
          ) : errorMessage ? (
            <div className="py-20 text-center text-red-300 animate-fade-in">
              {errorMessage}
            </div>
          ) : articlesList.length > 0 ? (
            articlesList.map((article, index) => (
              <div
                key={article.id}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ArticleCard article={article} />
              </div>
            ))
          ) : (
            <div className="py-20 text-center text-muted-foreground animate-fade-in">
              No latest articles available.
            </div>
          )}

          {/* <div className="pt-8 flex justify-center">
            <button className="bg-primary text-primary-foreground px-8 py-3 rounded-full font-bold transition-transform active:scale-95 hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20">
              Load More
            </button>
          </div> */}
        </div>

        {/* Sidebar */}
        <aside className="lg:col-span-4 space-y-8">
          <div className="sticky top-24 space-y-8">
            <PopularPosts posts={popularPostsList} />
            <Categories items={categoriesList} />
          </div>
        </aside>
      </div>
    </section>
  );
};
