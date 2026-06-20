// src/components/ui/QuestionCard.jsx

import { useState } from "react";
import { motion } from "framer-motion";

export default function QuestionCard({
  title,
  question,
  correctAnswer,
  options,
  successMessage,
  onSuccess,
}) {
  const [selectedOption, setSelectedOption] =
    useState("");

  const [error, setError] =
    useState(false);

  const [completed, setCompleted] =
    useState(false);

  const handleOptionClick = (
    option
  ) => {
    if (completed) return;

    setSelectedOption(option);

    const isCorrect =
      option.toLowerCase() ===
      correctAnswer.toLowerCase();

    if (isCorrect) {
      setError(false);
      setCompleted(true);

      setTimeout(() => {
        onSuccess();
      }, 1800);
    } else {
      setError(true);

      setTimeout(() => {
        setError(false);
      }, 1200);
    }
  };

  return (
    <motion.div
      animate={
        error
          ? {
              x: [
                -10,
                10,
                -10,
                10,
                0,
              ],
            }
          : {}
      }
      transition={{
        duration: 0.4,
      }}
      className="
        bg-white/10
        backdrop-blur-lg
        border
        border-white/20
        rounded-3xl
        p-8
        max-w-md
        w-full
        text-center
        shadow-2xl
      "
    >
      {!completed ? (
        <>
          <h1
            className="
              text-3xl
              font-bold
              text-white
              mb-4
            "
          >
            {title}
          </h1>

          <p
            className="
              text-white/90
              mb-8
            "
          >
            {question}
          </p>

          <div className="space-y-4">
            {options.map(
              (option) => (
                <motion.button
                  key={option}
                  whileHover={{
                    scale: 1.03,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  onClick={() =>
                    handleOptionClick(
                      option
                    )
                  }
                  className="
                    w-full
                    p-4
                    rounded-xl
                    bg-white
                    text-pink-600
                    font-semibold
                    shadow-md
                    cursor-pointer
                  "
                >
                  {option}
                </motion.button>
              )
            )}
          </div>

          {error && (
            <p
              className="
                mt-5
                text-red-300
              "
            >
              Oops ❤️ Try again
            </p>
          )}
        </>
      ) : (
        <motion.div
          initial={{
            scale: 0,
            opacity: 0,
          }}
          animate={{
            scale: 1,
            opacity: 1,
          }}
        >
          <h2
            className="
              text-4xl
              font-bold
              text-white
            "
          >
            ❤️ Correct!
          </h2>

          <p
            className="
              mt-4
              text-white
            "
          >
            {successMessage}
          </p>
        </motion.div>
      )}
    </motion.div>
  );
}