import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const FlipWords = ({
  words,
  className,
}: {
  words: string[];
  className?: string;
}) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <div className={cn("relative inline-block overflow-hidden", className)}>
      <motion.span
        key={words[index]}
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -40, opacity: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="block"
      >
        {words[index]}
      </motion.span>
    </div>
  );
};

export default FlipWords;
