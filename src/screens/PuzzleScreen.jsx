import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const WORDS = [
  "PIZZA",
  "MOVIES",
  "COLLEGE",
  "LOVE",
  "FRIENDS",
  "YOU",
  "DISTANCE",
  "FOREVER",
  "MEMORIES",
];

const TARGET = ["LOVE", "YOU", "FOREVER"];

const WRONG_MESSAGES = [
  "Not this memory 😅",
  "Close… but not what I meant ❤️",
  "That’s fun, but not us 😊",
  "Try thinking about us…",
  "Almost there ❤️",
  "Wrong path… but still part of the story 😄",
];

export default function PuzzleScreen({ onSuccess }) {
  const [selected, setSelected] = useState([]);
  const [error, setError] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [hint, setHint] = useState("");

  const handleWordClick = (word) => {
    if (completed) return;

    const next = [...selected, word];
    const index = next.length - 1;

    // ❌ Wrong word in sequence
    if (TARGET[index] !== word) {
      setError(true);

      const msg =
        WRONG_MESSAGES[
          Math.floor(Math.random() * WRONG_MESSAGES.length)
        ];

      setHint(msg);

      setTimeout(() => {
        setError(false);
        setHint("");
      }, 1800);

      return;
    }

    // ✅ correct word
    setSelected(next);

    if (next.length === TARGET.length) {
      setCompleted(true);

      setTimeout(() => {
        onSuccess();
      }, 3500);
    }
  };

  const resetPuzzle = () => {
    setSelected([]);
    setError(false);
    setHint("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-500 via-purple-600 to-pink-700 px-4 overflow-hidden">

      {/* glow background */}
      <div className="absolute w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.12),transparent)]" />

      <motion.div
        animate={error ? { x: [-10, 10, -10, 10, 0] } : {}}
        className="relative w-full max-w-4xl bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 text-center shadow-2xl"
      >
        {!completed ? (
          <>
            {/* TITLE */}
            <motion.h1
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-4xl font-bold text-white mb-2"
            >
              💞 Hidden Message 💞
            </motion.h1>

            {/* INSTRUCTIONS (NEW) */}
            <p className="text-white/90 mb-1 text-lg">
              Select <span className="text-pink-200 font-semibold">3 words</span> in the correct order
            </p>

            <p className="text-white/60 mb-6 text-sm">
              Hint: First word is a feeling .... Last word related to infinity ❤️
            </p>

            {/* selected words */}
            <div className="min-h-[80px] flex justify-center items-center flex-wrap gap-3 mb-6">
              {selected.map((word, i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="px-5 py-3 rounded-full bg-pink-500 text-white font-semibold shadow-lg"
                >
                  {word}
                </motion.div>
              ))}
            </div>

            {/* word grid */}
            <div className="flex flex-wrap justify-center gap-4">
              {WORDS.map((word) => (
                <motion.button
                  key={word}
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.92 }}
                  onClick={() => handleWordClick(word)}
                  disabled={selected.includes(word)}
                  className="px-5 py-3 rounded-full bg-white text-pink-600 font-semibold shadow-md disabled:opacity-30"
                >
                  {word}
                </motion.button>
              ))}
            </div>

            {/* hint (no reset anymore) */}
            <AnimatePresence>
              {hint && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="mt-6 text-white/90 italic"
                >
                  {hint}
                </motion.p>
              )}
            </AnimatePresence>

            {/* reset (optional but subtle) */}
            <button
              onClick={resetPuzzle}
              className="mt-6 text-white/60 underline text-sm"
            >
              Restart puzzle
            </button>
          </>
        ) : (
          <AnimatePresence>
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-center"
            >
              <motion.div
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="text-7xl mb-6"
              >
                ❤️
              </motion.div>

              <h2 className="text-5xl font-bold text-white">
                It was always there...
              </h2>

              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 }}
                className="mt-8 text-4xl font-bold text-pink-200"
              >
                LOVE YOU FOREVER
              </motion.div>

              <p className="mt-4 text-white/80">
                Some feelings don’t need decoding ❤️
              </p>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
                className="mt-6 text-white"
              >
                Unlocking your final moment...
              </motion.p>
            </motion.div>
          </AnimatePresence>
        )}
      </motion.div>
    </div>
  );
}