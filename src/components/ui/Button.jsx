// src/components/ui/Button.jsx
import { motion } from "framer-motion";

export default function Button({ children, onClick }) {
  return (
    <motion.button
      whileHover={{
        scale: 1.05,
      }}
      whileTap={{
        scale: 0.95,
      }}
      onClick={onClick}
      className="
        px-5
        md:px-6
        py-3
        rounded-full
        bg-pink-500
        text-white
        font-semibold
        shadow-lg
        text-sm
        md:text-base
        "
    >
      {children}
    </motion.button>
  );
}
