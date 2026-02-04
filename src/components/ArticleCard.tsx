import React from "react";
import { Calendar, Clock, ArrowRight, User } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export interface Article {
  id: string;
  title: string;
  description: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  imageUrl: string;
}

interface ArticleCardProps {
  article: Article;
  index: number;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article, index }) => {
  const getCategoryStyles = (category: string) => {
    switch (category) {
      case "Currency Exchange":
        return "bg-blue-500/20 text-blue-400 border-blue-500/30";
      case "Fintech":
        return "bg-purple-500/20 text-purple-400 border-purple-500/30";
      case "Business Tips":
        return "bg-indigo-500/20 text-indigo-400 border-indigo-500/30";
      case "Security":
        return "bg-emerald-500/20 text-emerald-400 border-emerald-500/30";
      case "Regulations":
        return "bg-amber-500/20 text-amber-400 border-amber-500/30";
      case "Global Trade":
        return "bg-cyan-500/20 text-cyan-400 border-cyan-500/30";
      default:
        return "bg-primary/20 text-primary border-primary/20";
    }
  };

  return (
    <div
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-2xl bg-[#0F0F12] border border-white/5 transition-all duration-500 hover:scale-[1.02] hover:bg-[#16161D] hover:shadow-elegant hover:border-white/10",
        "animate-slide-up",
      )}
      style={{ animationDelay: `${index * 150}ms`, animationFillMode: "both" }}
    >
      {/* Image Section */}
      <div className="relative aspect-video overflow-hidden">
        <img
          src={article.imageUrl}
          alt={article.title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-linear-to-t from-background/80 to-transparent opacity-60" />
      </div>

      {/* Content Section */}
      <div className="flex flex-col p-6 space-y-4">
        <div className="flex flex-wrap items-center gap-4 text-[10px] md:text-xs text-muted-foreground">
          <Badge
            variant="outline"
            className={cn(
              "px-3 py-1 font-bold tracking-wide uppercase transition-colors rounded-full",
              getCategoryStyles(article.category),
            )}
          >
            {article.category}
          </Badge>
          <div className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 " />
            <span>{article.date}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5" />
            <span>{article.readTime}</span>
          </div>
        </div>

        <h3 className="text-xl font-bold leading-tight text-white  transition-colors">
          {article.title}
        </h3>

        <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
          {article.description}
        </p>

        <div className="flex items-center justify-between pt-4 border-t border-white/10">
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <div className="flex items-center justify-center w-6 h-6 rounded-full bg-secondary/50">
              <User className="w-3 h-3" />
            </div>
            <span>{article.author}</span>
          </div>

          <a
            href="#"
            className="text-white flex items-center gap-1 text-sm font-semibold hover:underline group/link"
          >
            Read More
            <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
