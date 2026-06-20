// src/components/effects/Sparkles.jsx
import { useMemo } from "react";
import { motion } from "framer-motion";

export default function Sparkles() {
  const sparkles = useMemo(() => {
    return Array.from(
      { length: 40 },
      (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 5,
      })
    );
  }, []);

  return (
    <>
      {sparkles.map(
        (sparkle) => (
          <motion.div
            key={sparkle.id}
            className="
              absolute
              w-1
              h-1
              rounded-full
              bg-white
            "
            style={{
              left: `${sparkle.x}%`,
              top: `${sparkle.y}%`,
            }}
            animate={{
              opacity: [
                0,
                1,
                0,
              ],
              scale: [
                1,
                2,
                1,
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay:
                sparkle.delay,
            }}
          />
        )
      )}
    </>
  );
}