"use client";

import React from "react";

interface Mission {
  icon: React.ReactNode;
  title: string;
  paragraph: string;
  bgColor: string;
  bgGradient: string;
  iconBg: string;
  iconColor: string;
  textColor: string;
  descColor: string;
}

const Vision = () => {
  const visionData: Mission[] = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="6" />
          <circle cx="12" cy="12" r="2" />
        </svg>
      ),
      title: "Our Mission",
      paragraph:
        "To democratize access to fair and transparent currency exchange services, empowering individuals and businesses to transact globally with confidence. We believe everyone deserves access to the best rates and fastest service, regardless of transaction size.",
      bgColor: "bg-purple-100",
      bgGradient: "from-[rgba(173,70,255,0.10)] to-[rgba(173,70,255,0.05)]",
      iconBg: "bg-purple-500",
      iconColor: "text-white",
      textColor: "text-white",
      descColor: "text-[#99A1AF]",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      ),
      title: "Our Vision",
      paragraph:
        "To become Africa's most trusted and innovative fintech platform for currency exchange, setting new standards for speed, security, and customer satisfaction. We envision a future where cross-border transactions are as simple as local payments.",
      bgColor: "bg-blue-100",
      bgGradient: "from-[rgba(43,127,255,0.10)] to-[rgba(43,127,255,0.05)]",
      iconBg: "bg-blue-500",
      iconColor: "text-white",
      textColor: "text-white",
      descColor: "text-[#99A1AF]",
    },
  ];

  return (
    <section className="w-full py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 bg-transparent">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-10">
          {visionData.map((item, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${item.bgGradient} rounded-2xl p-4 sm:p-8 lg:p-6 shadow-lg hover:shadow-xl transition-shadow duration-300`}
            >
              <div
                className={`${item.iconBg} ${item.iconColor} w-12 h-12 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center mb-4 sm:mb-6`}
              >
                <div className="text-3xl sm:text-4xl">{item.icon}</div>
              </div>

              <h2
                className={`${item.textColor} text-2xl sm:text-3xl font-bold mb-4 sm:mb-6`}
              >
                {item.title}
              </h2>

              <p
                className={`${item.descColor} text-sm sm:text-base leading-relaxed`}
              >
                {item.paragraph}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Vision;
