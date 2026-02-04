import React from "react";
import { Calendar, Clock, User, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import type { Article } from "@/types/article";

interface ArticleCardProps {
  article: Article;
  index: number;
  variant?: "large" | "small";
}

const LatestArticleCard: React.FC<ArticleCardProps> = ({
  article,
  index,
  variant = "large",
}) => {
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

  if (variant === "small") {
    return (
      <div
        className={cn(
          "group flex items-center gap-4 p-3 rounded-xl bg-card/40 border border-white/5 transition-all duration-300 hover:bg-card/60 hover:border-white/10",
          "animate-slide-up",
        )}
        style={{
          animationDelay: `${index * 100}ms`,
          animationFillMode: "both",
        }}
      >
        <div className="relative h-16 w-20 flex-shrink-0 overflow-hidden rounded-lg">
          <img
            src={article.imageUrl}
            alt={article.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        <div className="flex flex-col space-y-1 overflow-hidden">
          <h4 className="text-sm font-semibold leading-snug text-foreground line-clamp-2 group-hover:text-primary transition-colors">
            {article.title}
          </h4>
          <div className="flex items-center gap-2 text-[10px] text-muted-foreground">
            <Calendar className="w-3 h-3" />
            <span>{article.date}</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-2xl bg-card border border-white/5 transition-all duration-500 hover:scale-[1.01] hover:shadow-elegant hover:border-white/10",
        "animate-slide-up",
      )}
      style={{ animationDelay: `${index * 150}ms`, animationFillMode: "both" }}
    >
      {/* Image Section */}
      <div className="relative aspect-[16/9] overflow-hidden">
        <img
          src={article.imageUrl}
          alt={article.title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-80" />
      </div>

      {/* Content Section */}
      <div className="flex flex-col p-6 space-y-4">
        <div className="flex flex-wrap items-center gap-3">
          <Badge
            variant="outline"
            className={cn(
              "px-3 py-1 font-bold tracking-wide uppercase transition-colors rounded-full text-[10px]",
              getCategoryStyles(article.category),
            )}
          >
            {article.category}
          </Badge>

          {article.isFeatured && (
            <Badge className="bg-accent/20 text-accent border-accent/30 rounded-full px-3 py-1 font-bold tracking-wide uppercase text-[10px] flex items-center gap-1">
              <Zap className="w-3 h-3 fill-current" />
              Featured
            </Badge>
          )}
        </div>

        <h3 className="text-xl md:text-2xl font-bold leading-tight text-foreground group-hover:text-primary transition-colors">
          {article.title}
        </h3>

        <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed font-medium">
          {article.description}
        </p>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-4 border-t border-white/5 text-[11px] md:text-xs text-muted-foreground font-medium">
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center w-6 h-6 rounded-full bg-secondary">
              <User className="w-3 h-3" />
            </div>
            <span>{article.author}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5" />
            <span>{article.date}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5" />
            <span>{article.readTime}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestArticleCard;
