import { motion } from "framer-motion";
import { experiences } from "@/constants";
import { Briefcase } from "lucide-react";

const Experiences = () => {
  return (
    <section className="c-space section-spacing" id="training">
      <h2 className="text-heading">Training</h2>
      <div className="relative mt-12">
        {/* Timeline line */}
        <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px" style={{ background: "linear-gradient(to bottom, hsl(var(--royal)), hsl(var(--aqua)), transparent)" }} />

        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="relative pl-12 md:pl-20 pb-12 last:pb-0"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
          >
            {/* Timeline dot */}
            <div
              className="absolute left-2 md:left-6 top-1 w-5 h-5 rounded-full flex items-center justify-center"
              style={{ background: "linear-gradient(135deg, hsl(var(--royal)), hsl(var(--lavender)))" }}
            >
              <Briefcase className="w-3 h-3" />
            </div>

            <div className="rounded-2xl p-6" style={{ background: "linear-gradient(135deg, hsl(var(--storm) / 0.5), hsl(var(--indigo) / 0.5))" }}>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1 mb-4">
                <div>
                  <h3 className="text-lg font-semibold">{exp.title}</h3>
                  <p className="text-sm text-accent">{exp.job}</p>
                </div>
                <span className="text-sm text-muted-foreground font-mono">{exp.date}</span>
              </div>
              <ul className="space-y-2">
                {exp.contents.map((content, i) => (
                  <li key={i} className="text-sm text-muted-foreground list-disc ml-4">
                    {content}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experiences;
