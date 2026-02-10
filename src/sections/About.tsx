import { motion } from "framer-motion";
import { techStack } from "@/constants";

const About = () => {
  return (
    <section className="c-space section-spacing" id="about">
      <h2 className="text-heading">About Me</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        {/* Grid 1 - Intro */}
        <div className="flex items-end grid-default-color grid-1">
          <div className="z-10">
            <p className="headtext">Hi, I'm Khushi Saraswat</p>
            <p className="subtext">
              A Computer Science student at Lovely Professional University with
              skills in C++, Java, Python, and cloud technologies like AWS.
            </p>
          </div>
          <div className="absolute inset-x-0 pointer-events-none -bottom-4 h-1/2 sm:h-1/3" style={{ background: "linear-gradient(to top, hsl(var(--indigo)), transparent)" }} />
        </div>

        {/* Grid 2 - Code is Craft */}
        <div className="grid-default-color grid-2">
          <div className="flex items-center justify-center w-full h-full relative">
            <p className="text-5xl text-muted-foreground font-bold opacity-30 select-none">
              CODE IS CRAFT
            </p>
            {/* Floating cards */}
            {["GRASP", "SOLID", "Design Patterns", "SRP", "Clean Code"].map((text, i) => (
              <motion.div
                key={text}
                className="absolute px-3 py-1.5 rounded-lg text-xs font-semibold"
                style={{
                  background: "linear-gradient(135deg, hsl(var(--royal)), hsl(var(--lavender)))",
                  top: `${20 + (i * 15) % 60}%`,
                  left: `${10 + (i * 20) % 70}%`,
                  rotate: `${-30 + i * 15}deg`,
                }}
                whileHover={{ scale: 1.2, rotate: 0 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {text}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Grid 3 - Time Zone / Globe */}
        <div className="grid-black-color grid-3">
          <div className="z-10 w-1/2">
            <p className="headtext">Time Zone</p>
            <p className="subtext">
              I'm based in my zone, and open to remote work worldwide
            </p>
          </div>
          <div className="absolute right-6 top-1/2 -translate-y-1/2 w-32 h-32 md:w-44 md:h-44 rounded-full opacity-60" style={{ background: "radial-gradient(circle at 30% 30%, hsl(var(--aqua) / 0.3), hsl(var(--royal) / 0.1), transparent)" }}>
            <div className="absolute inset-2 rounded-full border border-foreground/10" />
            <div className="absolute inset-4 rounded-full border border-foreground/5" />
            <div className="absolute inset-0 rounded-full border border-foreground/20" />
          </div>
        </div>

        {/* Grid 4 - CTA */}
        <div className="grid-special-color grid-4">
          <div className="flex flex-col items-center justify-center gap-4 size-full">
            <p className="text-center headtext">
              Do you want to start a project together?
            </p>
            <button
              onClick={() => navigator.clipboard.writeText("Khushisaraswat916@gmail.com")}
              className="px-6 py-2.5 text-sm rounded-full transition-all hover-animation"
              style={{ background: "hsl(var(--primary))" }}
            >
              📋 Copy Email
            </button>
          </div>
        </div>

        {/* Grid 5 - Tech Stack */}
        <div className="grid-default-color grid-5">
          <div className="z-10 w-1/2">
            <p className="headtext">Tech Stack</p>
            <p className="subtext">
              I specialize in a variety of languages, frameworks, and tools that
              allow me to build robust and scalable applications
            </p>
          </div>
          <div className="absolute inset-y-0 right-0 w-1/2 flex flex-wrap items-center justify-center gap-2 p-4 opacity-80">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs rounded-full border border-foreground/10"
                style={{ background: "hsl(var(--storm) / 0.5)" }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
