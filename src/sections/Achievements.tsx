import { motion } from "framer-motion";
import { Trophy } from "lucide-react";

const achievements = [
    {
        title: "AWS Student Community Day Workshop",
        organization: "AWS Cloud Clubs",
        date: "November 2025",
        description: "Participated in a workshop focused on cloud computing and AWS services."
    },
    {
        title: "Code off duty Hackathon (24 Hours)",
        organization: "Campus-level",
        date: "March 2024",
        description: "Collaborated in a 24-hour coding hackathon to build innovative solutions."
    },
];

const Achievements = () => {
    return (
        <section className="c-space section-spacing" id="achievements">
            <h2 className="text-heading">Achievements</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
                {achievements.map((achievement, index) => (
                    <motion.div
                        key={index}
                        className="rounded-2xl p-6 border hover-animation relative overflow-hidden group"
                        style={{
                            borderColor: "hsl(var(--border))",
                            background: "linear-gradient(135deg, hsl(var(--indigo) / 0.3), hsl(var(--storm) / 0.3))",
                        }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.15 }}
                    >
                        <div
                            className="w-12 h-12 rounded-full flex items-center justify-center mb-4"
                            style={{
                                background: "linear-gradient(135deg, hsl(var(--gold, 43 96% 56%)), hsl(var(--amber, 38 92% 50%)))",
                            }}
                        >
                            <Trophy className="w-6 h-6 text-white" />
                        </div>

                        <h3 className="text-xl font-semibold mb-2 text-foreground">{achievement.title}</h3>
                        <div className="flex justify-between items-center mb-3">
                            <span className="text-sm text-accent font-medium">{achievement.organization}</span>
                            <span className="text-xs text-muted-foreground font-mono bg-white/5 px-2 py-1 rounded-full">{achievement.date}</span>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">{achievement.description}</p>

                        {/* Decorative background element */}
                        <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-gradient-to-br from-yellow-500/10 to-transparent rounded-full blur-2xl group-hover:bg-yellow-500/20 transition-colors duration-500" />
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Achievements;
