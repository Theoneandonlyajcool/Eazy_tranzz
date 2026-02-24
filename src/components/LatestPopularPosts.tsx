import React from "react";
import { Calendar, TrendingUp } from "lucide-react";
import { popularPosts } from "@/features/BlogPage/Mockdata";

export const PopularPosts: React.FC = () => {
  return (
    <div className="bg-[#111116] border border-gray-500 rounded-xl p-6 space-y-6 text-white">
      <div className="flex items-center gap-2 mb-2">
        <TrendingUp className="w-5 h-5 text-white" />
        <h2 className="text-lg font-bold">Popular Posts</h2>
      </div>

      <div className="space-y-6">
        {popularPosts.map((post) => (
          <div key={post.id} className="group flex gap-4 cursor-pointer">
            <div className="relative w-20 h-20 shrink-0 overflow-hidden rounded-lg">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <div className="flex flex-col justify-center space-y-2">
              <h3 className="text-sm font-semibold leading-snug line-clamp-2 transition-colors">
                {post.title}
              </h3>
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <Calendar className="w-3 h-3" />
                <span>{post.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
