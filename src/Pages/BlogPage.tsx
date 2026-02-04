import BlogHero from "@/features/BlogPage/BlogHero";
import ArticlesSection from "@/features/BlogPage/ArticlesSection";
import LatestArticles from "@/features/BlogPage/LatestArticles";

const BlogPage = () => {
  return (
    <div className="bg-[#0A0A0F] ">
      <BlogHero />
      <ArticlesSection />
      <LatestArticles />
    </div>
  );
};

export default BlogPage;
