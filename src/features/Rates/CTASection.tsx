import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const CTASection: React.FC = () => {
  return (
    <div className="glass-dark border border-[#AD46FF4D] rounded-3xl p-10 md:p-16 text-center flex flex-col items-center gap-6 relative overflow-hidden shadow-2xl bg-linear-to-r from-[#0D0106] to-[#252525]">
      <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-accent/5 opacity-40 pointer-events-none" />
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/10 rounded-full blur-[100px]" />
      <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-accent/10 rounded-full blur-[100px]" />

      <div className="flex flex-col gap-3 max-w-2xl relative z-10">
        <h2 className="text-3xl md:text-5xl font-black font-heading tracking-tight">
          Ready to Get{" "}
          <span className="text-accent italic font-light">Started?</span>
        </h2>
        <p className="text-sm md:text-base text-muted-foreground font-medium leading-relaxed">
          Signup now and start trading with the best rates in the market. Fast,
          secure, and reliable platform for all your financial needs.
        </p>
      </div>

      <div className="flex flex-wrap gap-4 justify-center relative z-10">
        <Button className="bg-linear-to-r from-[#953E79] to-[#440830] text-white font-bold h-12 px-8 rounded-xl shadow-[0_10px_30px_-5px_hsl(var(--accent)/0.3)] gap-2 group hover:scale-105 cursor-pointer">
          Create Free Account
          <ArrowRight
            size={18}
            className="group-hover:translate-x-1 transition-transform"
          />
        </Button>
        <Button
          variant="outline"
          className="bg-white/5 border-white/10 hover:bg-white/10 font-bold h-12 px-8 rounded-xl text-white hover:text-white cursor-pointer"
        >
          Contact Sales
        </Button>
      </div>
    </div>
  );
};
