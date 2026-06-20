// src/screens/LetterScreen.jsx
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

import Button from "../components/ui/Button";
import StarsBackground from "../components/effects/StarsBackground";

export default function LetterScreen({
  onContinue,
}) {
  const [showParagraph1, setShowParagraph1] =
    useState(false);

  const [showParagraph2, setShowParagraph2] =
    useState(false);

  const [showParagraph3, setShowParagraph3] =
    useState(false);

  const [showButton, setShowButton] =
    useState(false);

  useEffect(() => {
    const timer1 = setTimeout(
      () => setShowParagraph1(true),
      3500
    );

    const timer2 = setTimeout(
      () => setShowParagraph2(true),
      7000
    );

    const timer3 = setTimeout(
      () => setShowParagraph3(true),
      10500
    );

    const timer4 = setTimeout(
      () => setShowButton(true),
      13500
    );

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, []);

  return (
    <div
      className="
        relative
        min-h-screen
        flex
        items-center
        justify-center
        bg-black
        overflow-hidden
        px-6
      "
    >
      <StarsBackground />

      <div
        className="
          relative
          z-10
          max-w-3xl
          text-center
        "
      >
        <h1
          className="
            text-4xl
            md:text-6xl
            font-bold
            text-white
            mb-10
          "
        >
          <Typewriter
            words={[
              "Congratulations ❤️",
            ]}
            cursor
            loop={1}
            typeSpeed={80}
          />
        </h1>

        {showParagraph1 && (
          <motion.p
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            className="
              text-white/90
              text-lg
              md:text-xl
              mb-6
              leading-relaxed
            "
          >
            You've reached the final
            clue.
          </motion.p>
        )}

        {showParagraph2 && (
          <motion.p
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            className="
              text-white/90
              text-lg
              md:text-xl
              mb-6
              leading-relaxed
            "
          >
            But this wasn't really
            about colors, food,
            memories, or puzzles.
          </motion.p>
        )}

        {showParagraph3 && (
          <motion.p
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            className="
              text-pink-300
              text-xl
              md:text-2xl
              font-semibold
              mb-10
              leading-relaxed
            "
          >
            It was always about
            you. ❤️
          </motion.p>
        )}

        {showButton && (
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.8,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
          >
            <Button
              onClick={
                onContinue
              }
            >
              Continue ❤️
            </Button>
          </motion.div>
        )}
      </div>
    </div>
  );
}