import { useState } from "react";
import { motion } from "framer-motion";
import { myProjects } from "@/constants";
import { ArrowUpRight } from "lucide-react";

const Projects = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section className="relative c-space section-spacing" id="work">
      <h2 className="text-heading">My Selected Projects</h2>
      <div className="mt-12 h-px w-full" style={{ background: "linear-gradient(to right, transparent, hsl(var(--muted-foreground) / 0.3), transparent)" }} />
      
      {myProjects.map((project) => (
        <motion.div
          key={project.id}
          className="relative py-8 border-b cursor-pointer group"
          style={{ borderColor: "hsl(var(--border))" }}
          onMouseEnter={() => setHoveredId(project.id)}
          onMouseLeave={() => setHoveredId(null)}
          initial={false}
          animate={{ backgroundColor: hoveredId === project.id ? "hsl(237 28% 17% / 0.3)" : "transparent" }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-sm text-muted-foreground font-mono">
                  {String(project.id).padStart(2, "0")}
                </span>
                <h3 className="text-xl md:text-2xl font-semibold group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
              </div>
              <p className="subtext max-w-xl mb-3">
                {project.description}
              </p>
              
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: hoveredId === project.id ? "auto" : 0,
                  opacity: hoveredId === project.id ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <ul className="pl-4 space-y-1 mb-3">
                  {project.subDescription.map((desc, i) => (
                    <li key={i} className="text-sm text-muted-foreground list-disc">
                      {desc}
                    </li>
                  ))}
                </ul>
              </motion.div>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs rounded-full border"
                    style={{
                      borderColor: "hsl(var(--accent) / 0.3)",
                      background: "hsl(var(--accent) / 0.1)",
                      color: "hsl(var(--accent))",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <ArrowUpRight
              className="w-6 h-6 mt-1 text-muted-foreground group-hover:text-accent transition-colors shrink-0"
            />
          </div>
        </motion.div>
      ))}
    </section>
  );
};

export default Projects;
