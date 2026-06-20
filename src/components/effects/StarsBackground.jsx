// src/components/effects/StarsBackground.jsx
import { motion } from "framer-motion";

const stars = Array.from({ length: 80 }, (_, index) => ({
  id: index,
  top: Math.random() * 100,
  left: Math.random() * 100,
  duration: 2 + Math.random() * 3,
}));

export default function StarsBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute w-1 h-1 bg-white rounded-full"
          style={{
            top: `${star.top}%`,
            left: `${star.left}%`,
          }}
          animate={{
            opacity: [0.2, 1, 0.2],
            scale: [1, 1.8, 1],
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
          }}
        />
      ))}
    </div>
  );
}