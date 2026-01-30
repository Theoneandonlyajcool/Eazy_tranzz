import { motion } from "framer-motion";

interface TimelineItem {
  year: string;
  description: string;
}

const timelineData: TimelineItem[] = [
  {
    year: "2018",
    description:
      "EazyTranz founded with a vision to revolutionize currency exchange",
  },
  {
    year: "2019",
    description: "Reached 10,000 customers and $50M in transaction volume",
  },
  {
    year: "2020",
    description: "Obtained full CBN licensing and regulatory approval",
  },
  {
    year: "2021",
    description: "Expanded to serve customers in 100+ countries",
  },
  {
    year: "2022",
    description: "Launched mobile app and achieved 99.9% uptime",
  },
  {
    year: "2023",
    description: "Surpassed $500M in total transaction volume",
  },
  {
    year: "2024",
    description:
      "Introduced AI-powered rate prediction and instant settlements",
  },
];

const Timeline = () => {
  return (
    <section className="min-h-screen py-10 sm:py-16 px-4">
      <div className="max-w-2xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-white font-bold text-[28px] sm:text-[40px]"
        >
          Our Journey
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-[#99A1AF] italic mb-10 sm:mb-16 text-base sm:text-lg"
        >
          From a bold idea to a trusted platform serving thousands of customers
          worldwide
        </motion.p>

        <div className="relative">
          {timelineData.map((item, index) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative flex items-start gap-4 sm:gap-8 pb-8 sm:pb-12 last:pb-0"
            >
              {index < timelineData.length - 1 && (
                <div
                  className="absolute left-[22px] sm:left-[30px] top-[44px] sm:top-[60px] w-[2px] h-[calc(100%-20px)] sm:h-[calc(100%-30px)] bg-gradient-to-b from-[rgba(173,70,255,0.50)] to-[rgba(43,127,255,0.50)]"
                  style={{ transform: "translateX(-50%)" }}
                />
              )}

              <div className="relative z-10 flex-shrink-0">
                <div className="w-[44px] h-[44px] sm:w-[60px] sm:h-[60px] rounded-full bg-gradient-to-r from-[#953E79] to-[#440830] flex items-center justify-center shadow-lg">
                  <span className="text-primary-foreground font-semibold text-xs sm:text-sm">
                    {item.year}
                  </span>
                </div>
              </div>

              <div className="p-3 w-auto sm:w-auto sm:p-4 bg-gradient-to-l from-[rgba(255,255,255,0.1)] to-[rgba(255,255,255,0.11)] rounded-lg sm:rounded-2xl">
                <p className="text-[#D1D5DC] italic text-sm sm:text-base leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
