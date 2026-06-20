// src/components/ui/FloatingHearts.jsx
import { useMemo } from "react";
import { FaHeart } from "react-icons/fa";
import { motion } from "framer-motion";

const generateHearts = () =>
  Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    duration: 8 + Math.random() * 5,
    delay: Math.random() * 5,
    size: 15 + Math.random() * 15,
}));

export default function FloatingHearts() {
  const hearts = useMemo(() => generateHearts(), []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          className="absolute text-pink-300"
          initial={{
            y: "100%",
            x: `${heart.x}%`,
            opacity: 0,
          }}
          animate={{
            y: "-100%",
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: heart.duration,
            repeat: Infinity,
            delay: heart.delay,
          }}
        >
          <FaHeart size={heart.size} />
        </motion.div>
      ))}
    </div>
  );
}