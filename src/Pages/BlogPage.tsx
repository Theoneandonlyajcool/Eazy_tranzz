import BlogHero from "@/features/BlogPage/BlogHero";
import ArticlesSection from "@/features/BlogPage/ArticlesSection";
import { LatestArticlesSection } from "@/features/BlogPage/LatestArticleSection";

const BlogPage = () => {
  return (
    <div className="bg-[#0A0A0F] ">
      <BlogHero />
      <ArticlesSection />
      <LatestArticlesSection />
    </div>
  );
};

export default BlogPage;
