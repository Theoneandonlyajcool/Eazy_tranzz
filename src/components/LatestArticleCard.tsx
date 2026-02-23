import React from "react";
import { User, Calendar, Clock, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface ArticleCardProps {
  article: {
    id: string;
    title: string;
    description: string;
    image: string;
    category: string;
    author: string;
    date: string;
    readTime: string;
    featured?: boolean;
  };
}

export const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  return (
    <article className="group bg-[#111116] border border-gray-700 rounded-xl overflow-hidden transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5">
      <div className="relative aspect-video overflow-hidden">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="p-6 space-y-4">
        <div className="flex flex-wrap gap-2">
          <Badge
            variant="secondary"
            className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20"
          >
            {article.category}
          </Badge>
          {article.featured && (
            <Badge
              variant="outline"
              className="bg-accent/10 text-accent border-accent/20 flex items-center gap-1"
            >
              <Sparkles className="w-3 h-3" />
              Featured
            </Badge>
          )}
        </div>

        <h3 className="text-xl md:text-2xl font-bold leading-tight text-white transition-colors">
          {article.title}
        </h3>

        <p className="text-muted-foreground line-clamp-2 text-sm md:text-base">
          {article.description}
        </p>

        <div className="pt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs md:text-sm text-muted-foreground border-t border-border/50">
          <div className="flex items-center gap-1.5">
            <User className="w-4 h-4 text-primary" />
            <span>{article.author}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Calendar className="w-4 h-4 text-primary" />
            <span>{article.date}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-primary" />
            <span>{article.readTime}</span>
          </div>
        </div>
      </div>
    </article>
  );
};
