import { motion } from "framer-motion";
import FlipWords from "@/components/FlipWords";
import heroCharacter from "@/assets/hero-character.png";

const Hero = () => {
  const words = ["Innovative", "Creative", "Robust"];
  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section
      id="home"
      className="relative flex items-start justify-center min-h-screen overflow-hidden md:items-start md:justify-start c-space"
    >
      {/* Background gradient orbs */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full opacity-20 blur-3xl" style={{ background: "hsl(var(--royal))" }} />
      <div className="absolute bottom-1/4 left-1/4 w-72 h-72 rounded-full opacity-10 blur-3xl" style={{ background: "hsl(var(--aqua))" }} />

      {/* Text Content */}
      <div className="z-10 mt-32 text-center md:mt-40 md:text-left">
        {/* Desktop View */}
        <div className="flex-col hidden md:flex">
          <motion.h1
            className="text-4xl font-medium"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.3 }}
          >
            Hi I'm Khushi
          </motion.h1>
          <div className="flex flex-col items-start">
            <motion.p
              className="text-5xl font-medium text-muted-foreground"
              variants={variants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.5 }}
            >
              A Developer <br /> Dedicated to Crafting
            </motion.p>
            <motion.div
              variants={variants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.8 }}
            >
              <FlipWords words={words} className="font-black text-8xl" />
            </motion.div>
            <motion.p
              className="text-4xl font-medium text-muted-foreground"
              variants={variants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 1.1 }}
            >
              Web Solutions
            </motion.p>
          </div>
        </div>

        {/* Mobile View */}
        <div className="flex flex-col space-y-4 md:hidden">
          <motion.p
            className="text-4xl font-medium"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.3 }}
          >
            Hi, I'm Khushi
          </motion.p>
          <div>
            <motion.p
              className="text-4xl font-black text-muted-foreground"
              variants={variants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.5 }}
            >
              Building
            </motion.p>
            <motion.div
              variants={variants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.8 }}
            >
              <FlipWords words={words} className="font-bold text-6xl" />
            </motion.div>
            <motion.p
              className="text-3xl font-black text-muted-foreground"
              variants={variants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 1.1 }}
            >
              Web Applications
            </motion.p>
          </div>
        </div>
      </div>

      {/* Hero Character */}
      <motion.img
        src={heroCharacter}
        alt="Space character"
        className="absolute right-0 md:right-10 bottom-10 md:bottom-20 w-64 md:w-[28rem] animate-float pointer-events-none z-0 opacity-90"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.9, scale: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      />
    </section>
  );
};

export default Hero;
