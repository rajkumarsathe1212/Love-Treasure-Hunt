// src/screens/LoadingScreen.jsx
import { motion } from "framer-motion";

export default function LoadingScreen() {
  return (
    <div
      className="
        min-h-screen
        flex
        items-center
        justify-center
        bg-gradient-to-br
        from-pink-500
        via-purple-600
        to-pink-700
      "
    >
      <motion.div
        animate={{
          scale: [
            1,
            1.2,
            1,
          ],
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
        }}
        className="
          text-8xl
        "
      >
        ❤️
      </motion.div>
    </div>
  );
}