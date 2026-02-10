import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const education = [
    {
        institution: "Lovely Professional University",
        location: "Phagwara, Punjab",
        degree: "Computer Science and Engineering",
        score: "Percentage: 63%",
        date: "August 2023 – Present",
    },
    {
        institution: "India International School",
        location: "Jaipur, Rajasthan",
        degree: "Intermediate",
        score: "Percentage: 88%",
        date: "June 2021 – March 2023",
    },
    {
        institution: "India International School",
        location: "Jaipur, Rajasthan",
        degree: "Matriculation",
        score: "Percentage: 92%",
        date: "June 2020 – March 2021",
    },
];

const Education = () => {
    return (
        <section className="c-space section-spacing" id="education">
            <h2 className="text-heading">Education</h2>
            <div className="relative mt-12">
                <div
                    className="absolute left-4 md:left-8 top-0 bottom-0 w-px"
                    style={{
                        background:
                            "linear-gradient(to bottom, hsl(var(--royal)), hsl(var(--aqua)), transparent)",
                    }}
                />

                {education.map((edu, index) => (
                    <motion.div
                        key={index}
                        className="relative pl-12 md:pl-20 pb-12 last:pb-0"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 }}
                    >
                        <div
                            className="absolute left-2 md:left-6 top-1 w-5 h-5 rounded-full flex items-center justify-center"
                            style={{
                                background:
                                    "linear-gradient(135deg, hsl(var(--royal)), hsl(var(--lavender)))",
                            }}
                        >
                            <GraduationCap className="w-3 h-3" />
                        </div>

                        <div
                            className="rounded-2xl p-6"
                            style={{
                                background:
                                    "linear-gradient(135deg, hsl(var(--storm) / 0.5), hsl(var(--indigo) / 0.5))",
                            }}
                        >
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1 mb-2">
                                <div>
                                    <h3 className="text-lg font-semibold">{edu.institution}</h3>
                                    <p className="text-sm text-accent">{edu.degree}</p>
                                </div>
                                <span className="text-sm text-muted-foreground font-mono">
                                    {edu.date}
                                </span>
                            </div>
                            <p className="text-sm text-muted-foreground">{edu.location}</p>
                            <p className="text-sm font-medium mt-1" style={{ color: "hsl(var(--aqua))" }}>
                                {edu.score}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Education;
