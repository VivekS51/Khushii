import { motion } from "framer-motion";
import { Award } from "lucide-react";

const certificates = [
  {
    title: "Privacy and Security in Online Social Media",
    issuer: "NPTEL Certification",
    date: "April 2025",
  },
  {
    title: "AWS Cloud Training",
    issuer: "Cloud Training Workshop",
    date: "May 2025",
  },
];

const Certificates = () => {
  return (
    <section className="c-space section-spacing" id="certificates">
      <h2 className="text-heading">Certificates</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12">
        {certificates.map((cert, index) => (
          <motion.div
            key={index}
            className="rounded-2xl p-6 border hover-animation"
            style={{
              borderColor: "hsl(var(--border))",
              background:
                "linear-gradient(135deg, hsl(var(--indigo)), hsl(var(--storm)))",
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15 }}
          >
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center mb-4"
              style={{
                background:
                  "linear-gradient(135deg, hsl(var(--royal)), hsl(var(--lavender)))",
              }}
            >
              <Award className="w-5 h-5" />
            </div>
            <h3 className="text-base font-semibold mb-1">{cert.title}</h3>
            <p className="text-sm text-accent">{cert.issuer}</p>
            <p className="text-xs text-muted-foreground mt-2 font-mono">
              {cert.date}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Certificates;
