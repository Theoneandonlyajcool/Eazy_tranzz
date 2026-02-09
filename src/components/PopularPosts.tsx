import React from "react";
import { TrendingUp } from "lucide-react";
import ArticleCard from "./ArticleCard";
import type { Article } from "@/types/article";

interface PopularPostsProps {
  articles: Article[];
}

const PopularPosts: React.FC<PopularPostsProps> = ({ articles }) => {
  return (
    <div className="bg-card/30 rounded-2xl border border-white/5 p-6 space-y-6">
      <div className="flex items-center gap-2 text-primary">
        <TrendingUp className="w-5 h-5" />
        <h3 className="text-lg font-bold text-foreground">Popular Posts</h3>
      </div>

      <div className="flex flex-col gap-4">
        {articles.map((article, index) => (
          <ArticleCard
            key={article.id}
            article={article}
            index={index}
            // variant="small"
          />
        ))}
      </div>
    </div>
  );
};

export default PopularPosts;
