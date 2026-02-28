import { useEffect, useMemo, useState } from "react";
import BlogHero from "@/features/BlogPage/BlogHero";
import ArticlesSection from "@/features/BlogPage/ArticlesSection";
import { LatestArticlesSection } from "@/features/BlogPage/LatestArticleSection";
import { getBlogs } from "@/services/blogServices";
import type { Article } from "@/components/ArticleCard";
import type { PopularPostItem } from "@/components/LatestPopularPosts";
import type { CategoryItem } from "@/components/LatestArticlesCategories";

interface ApiBlogItem {
  _id?: string;
  id?: string;
  title?: string;
  description?: string;
  excerpt?: string;
  content?: string;
  category?: string;
  createdAt?: string;
  updatedAt?: string;
  readTime?: string;
  author?: {
    name?: string;
  };
  image?: string;
  imageUrl?: string;
  coverImage?: string;
  featured?: boolean;
}

interface BlogApiResponse {
  success?: boolean;
  message?: string;
  data?: {
    latestArticles?: ApiBlogItem[];
    featuredArticles?: ApiBlogItem[];
    popularPosts?: ApiBlogItem[];
  };
}

const FALLBACK_IMAGE =
  "https://images.unsplash.com/photo-1580519542036-c47de6196ba5?q=80&w=2071&auto=format&fit=crop";

const formatDate = (dateValue?: string) => {
  if (!dateValue) return "Recently";

  const date = new Date(dateValue);
  if (Number.isNaN(date.getTime())) return "Recently";

  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
};

const mapToArticle = (item: ApiBlogItem, index: number): Article => ({
  id: item._id || item.id || `${index + 1}`,
  title: item.title || "Untitled Article",
  description: item.description || item.excerpt || item.content || "",
  category: item.category || "General",
  date: formatDate(item.createdAt || item.updatedAt),
  readTime: item.readTime || "5 min read",
  author: item.author?.name || "EazyTranz Team",
  imageUrl: item.imageUrl || item.image || item.coverImage || FALLBACK_IMAGE,
});

const mapToLatestArticle = (item: ApiBlogItem, index: number) => ({
  id: item._id || item.id || `${index + 1}`,
  title: item.title || "Untitled Article",
  description: item.description || item.excerpt || item.content || "",
  image: item.imageUrl || item.image || item.coverImage || FALLBACK_IMAGE,
  category: item.category || "General",
  author: item.author?.name || "EazyTranz Team",
  date: formatDate(item.createdAt || item.updatedAt),
  readTime: item.readTime || "5 min read",
  featured: Boolean(item.featured),
});

const mapToPopularPost = (
  item: ApiBlogItem,
  index: number,
): PopularPostItem => ({
  id: item._id || item.id || `${index + 1}`,
  title: item.title || "Untitled Post",
  date: formatDate(item.createdAt || item.updatedAt),
  image: item.imageUrl || item.image || item.coverImage || FALLBACK_IMAGE,
});

const normalizeCategory = (value?: string) =>
  (value || "General").trim().toLowerCase();

const BlogPage = () => {
  const [featuredArticles, setFeaturedArticles] = useState<Article[]>([]);
  const [latestArticles, setLatestArticles] = useState<
    ReturnType<typeof mapToLatestArticle>[]
  >([]);
  const [activeCategory, setActiveCategory] = useState("All");
  const [popularPosts, setPopularPosts] = useState<PopularPostItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      setIsLoading(true);
      setErrorMessage(null);

      try {
        const res = (await getBlogs()) as BlogApiResponse;

        if (!res?.success || !res?.data) {
          throw new Error(res?.message || "Unable to load blog posts.");
        }

        const featured = Array.isArray(res.data.featuredArticles)
          ? res.data.featuredArticles.map(mapToArticle)
          : [];
        const latest = Array.isArray(res.data.latestArticles)
          ? res.data.latestArticles.map(mapToLatestArticle)
          : [];
        const popular = Array.isArray(res.data.popularPosts)
          ? res.data.popularPosts.map(mapToPopularPost)
          : [];

        setFeaturedArticles(featured);
        setLatestArticles(latest);
        setPopularPosts(popular);
      } catch (error) {
        setFeaturedArticles([]);
        setLatestArticles([]);
        setPopularPosts([]);
        setErrorMessage(
          error instanceof Error
            ? error.message
            : "Something went wrong while fetching blog data.",
        );
      } finally {
        setIsLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const categoryTabs = useMemo(() => {
    const source = [...featuredArticles, ...latestArticles];
    const unique = Array.from(
      new Set(
        source
          .map((article) => article.category?.trim())
          .filter((category): category is string => Boolean(category)),
      ),
    );

    return ["All", ...unique];
  }, [featuredArticles, latestArticles]);

  const filteredLatestArticles = useMemo(() => {
    const normalizedActive = activeCategory.trim().toLowerCase();

    if (normalizedActive === "all") return latestArticles;

    return latestArticles.filter(
      (article) => normalizeCategory(article.category) === normalizedActive,
    );
  }, [latestArticles, activeCategory]);

  const categories = useMemo<CategoryItem[]>(() => {
    const counter = new Map<string, number>();

    filteredLatestArticles.forEach((article) => {
      const key = article.category || "General";
      counter.set(key, (counter.get(key) || 0) + 1);
    });

    return Array.from(counter.entries()).map(([name, count]) => ({
      name,
      count,
    }));
  }, [latestArticles]);

  return (
    <div className="bg-[#0A0A0F] ">
      <BlogHero />
      <ArticlesSection
        articles={featuredArticles}
        isLoading={isLoading}
        errorMessage={errorMessage}
        categories={categoryTabs}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />
      <LatestArticlesSection
        articlesList={filteredLatestArticles}
        popularPostsList={popularPosts}
        categoriesList={categories}
        isLoading={isLoading}
        errorMessage={errorMessage}
      />
    </div>
  );
};

export default BlogPage;
