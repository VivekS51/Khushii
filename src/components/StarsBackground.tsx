import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const StarsBackground = () => {
    const [stars, setStars] = useState<{ id: number; top: string; left: string; size: number; duration: number }[]>([]);

    useEffect(() => {
        const starCount = 50;
        const newStars = Array.from({ length: starCount }).map((_, i) => ({
            id: i,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            size: Math.random() * 2 + 1,
            duration: Math.random() * 20 + 10,
        }));
        setStars(newStars);
    }, []);

    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden overflow-x-hidden">
            {stars.map((star) => (
                <motion.div
                    key={star.id}
                    className="absolute bg-white rounded-full opacity-30"
                    style={{
                        top: star.top,
                        left: star.left,
                        width: star.size,
                        height: star.size,
                    }}
                    animate={{
                        y: [0, -20, 0, 20, 0],
                        x: [0, 20, 0, -20, 0],
                        opacity: [0.2, 0.5, 0.2],
                    }}
                    transition={{
                        duration: star.duration,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                />
            ))}
        </div>
    );
};

export default StarsBackground;
