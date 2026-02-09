import React from "react";
import { BookOpen, ArrowRight, Home } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection: React.FC = () => {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#1A1A1D] to-[#0F0F12] border border-white/5 p-8 md:p-12 text-center space-y-8 mt-16">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="flex justify-center">
        <div className="p-3 rounded-2xl bg-primary/10 border border-primary/20">
          <BookOpen className="w-8 h-8 text-primary" />
        </div>
      </div>

      <div className="space-y-4 max-w-2xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-foreground">
          Ready to Start Exchanging?
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          Put your knowledge into action. Join EaseTrans today and experience
          fast, secure, and affordable currency exchange.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <Button className="w-full sm:w-auto px-8 h-12 rounded-xl bg-gradient-to-r from-primary to-primary/80 hover:scale-[1.02] transition-all shadow-glow font-bold">
          Get Started Free
          <ArrowRight className="ml-2 w-4 h-4" />
        </Button>
        <Button
          variant="secondary"
          className="w-full sm:w-auto px-8 h-12 rounded-xl border-white/5 bg-white/5 hover:bg-white/10 transition-all font-bold"
        >
          <Home className="mr-2 w-4 h-4" />
          Back to Home
        </Button>
      </div>
    </div>
  );
};

export default CTASection;
