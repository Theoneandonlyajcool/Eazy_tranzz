"use client";

import React from "react";

interface Principle {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Principles = () => {
  const principles: Principle[] = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
      title: "Security First",
      description:
        "Your financial safety is our top priority. We employ bank-level encryption and comply with international security standards to protect every transaction.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      ),
      title: "Lightning Fast",
      description:
        "Time is money. Our optimized infrastructure ensures your currency exchanges are processed within minutes, not days.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        </svg>
      ),
      title: "You Come First",
      description:
        "We put you first. Our dedicated support team is available 24/7 to ensure your experience is seamless and stress-free.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="12" y1="1" x2="12" y2="23" />
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      ),
      title: "Best Rates",
      description:
        "We leverage real-time market data and our extensive network to offer you the most competitive exchange rates in the market.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
      ),
      title: "Transparent Pricing",
      description:
        "No hidden fees, no surprises. What you see is what you get. We believe in honest, straightforward pricing.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M6 9L12 15L18 9" />
          <circle cx="12" cy="12" r="10" />
        </svg>
      ),
      title: "Fully Compliant",
      description:
        "Fully licensed and compliant with CBN regulations, ensuring your transactions meet the highest legal standards.",
    },
  ];

  return (
    <section className="w-full bg-transparent px-4 sm:px-6 lg:px-10 py-12 sm:py-16 lg:py-24 flex items-center justify-center">
      <div className="max-w-6xl w-full">
        <h1 className="text-white text-center text-[20px] font-bold sm:text-[40px]">
          Our Core Values
        </h1>
        <h2 className="text-center text-gray-400 text-base sm:text-sm lg:text-[17px] font-medium mb-12 sm:mb-16 lg:mb-24 max-w-3xl mx-auto">
          The principles that guide everything we do and every decision we make
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 justify-items-center">
          {principles.map((principle, index) => (
            <div
              key={index}
              className="flex flex-col items-start w-full bg-gradient-to-l from-[rgba(255,255,255,0.1)] to-[rgba(255,255,255,0.11)] rounded-lg sm:rounded-2xl p-4"
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-purple-200 flex items-center justify-center mb-6 text-purple-600 flex-shrink-0">
                {principle.icon}
              </div>

              <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
                {principle.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Principles;
