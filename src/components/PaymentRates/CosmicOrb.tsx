import { motion } from "framer-motion";

const CosmicOrb = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
      {/* Main glowing orb */}
      <motion.div
        className="relative w-[600px] h-[600px] md:w-[800px] md:h-[800px]"
        animate={{
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {/* Outer glow */}
        <div className="absolute inset-0 rounded-full bg-linear-to-b from-glow-primary/20 via-transparent to-transparent blur-3xl" />

        {/* Main sphere gradient */}
        <div className="absolute inset-[15%] rounded-full bg-linear-to-b from-glow-primary/40 via-primary/20 to-transparent blur-2xl" />

        {/* Inner bright core */}
        <div className="absolute inset-[30%] rounded-full bg-linear-to-b from-glow-accent/30 via-glow-primary/20 to-transparent blur-xl" />

        {/* Rim light */}
        <div className="absolute top-[20%] left-[25%] right-[25%] h-[8%] rounded-full bg-linear-to-r from-transparent via-foreground/10 to-transparent blur-sm" />
      </motion.div>

      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-glow-primary/60"
          style={{
            left: `${20 + i * 12}%`,
            top: `${30 + (i % 3) * 15}%`,
          }}
          animate={{
            y: [-10, 10, -10],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            delay: i * 0.3,
          }}
        />
      ))}
    </div>
  );
};

export default CosmicOrb;
