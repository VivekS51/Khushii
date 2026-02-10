import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MessageCircle, Download } from "lucide-react";
import FlipWords from "@/components/FlipWords";
import StarsBackground from "@/components/StarsBackground";
import heroCharacter from "@/assets/hero-character.png";

const Hero = () => {
  const words = ["Imaginative", "Next-gen", "Expressive"];
  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  const socialLinks = [
    { icon: Linkedin, href: "https://linkedin.com/in/khushi-saraswat", label: "LinkedIn" },
    { icon: Github, href: "https://github.com/KhushiSaraswat", label: "GitHub" },
    { icon: Mail, href: "mailto:Khushisaraswat916@gmail.com", label: "Email" },
    { icon: MessageCircle, href: "https://wa.me/919256553471", label: "WhatsApp" },
  ];

  return (
    <section
      id="home"
      className="relative flex items-start justify-center min-h-screen overflow-hidden md:items-start md:justify-start c-space"
    >
      <StarsBackground />
      {/* Background gradient orbs */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full opacity-20 blur-3xl" style={{ background: "hsl(var(--royal))" }} />
      <div className="absolute bottom-1/4 left-1/4 w-72 h-72 rounded-full opacity-10 blur-3xl" style={{ background: "hsl(var(--aqua))" }} />

      {/* Text Content */}
      <div className="z-10 mt-44 text-center md:mt-48 md:text-left">
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

            {/* Social Links Desktop */}
            <motion.div
              className="flex gap-4 mt-8"
              variants={variants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 1.4 }}
            >
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-white/5 hover:bg-white/10 hover:text-accent transition-all duration-300 border border-white/10 hover:border-accent/50 group"
                  aria-label={label}
                >
                  <Icon className="w-6 h-6 text-muted-foreground group-hover:text-accent group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </motion.div>

            {/* Resume Button Desktop */}
            <motion.div
              className="mt-10"
              variants={variants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 1.6 }}
            >
              <a
                href="/Khushi_Saraswat_Resume.pdf"
                download="Khushi_Saraswat_Resume.pdf"
                className="flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-accent-foreground font-semibold hover:bg-accent/90 transition-all duration-300 shadow-lg shadow-accent/20 group w-fit"
              >
                <Download className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" />
                Download Resume
              </a>
            </motion.div>
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

            {/* Social Links Mobile */}
            <motion.div
              className="flex justify-center gap-4 mt-6"
              variants={variants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 1.4 }}
            >
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-white/5 hover:bg-white/10 hover:text-accent transition-all duration-300 border border-white/10"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5 text-muted-foreground hover:text-accent" />
                </a>
              ))}
            </motion.div>

            {/* Resume Button Mobile */}
            <motion.div
              className="mt-8 flex justify-center"
              variants={variants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 1.6 }}
            >
              <a
                href="/Khushi_Saraswat_Resume.pdf"
                download="Khushi_Saraswat_Resume.pdf"
                className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent text-accent-foreground font-semibold hover:bg-accent/90 transition-all duration-300 shadow-lg shadow-accent/20"
              >
                <Download className="w-4 h-4" />
                Download Resume
              </a>
            </motion.div>
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
