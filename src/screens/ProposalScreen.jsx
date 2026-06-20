// src/screens/ProposalScreen.jsx

import { useState } from "react";
import { motion } from "framer-motion";

export default function ProposalScreen({ onYes }) {
  const isMobile = window.innerWidth < 768;
  const positions = isMobile
    ? [
        { x: -30, y: -30 },
        { x: 30, y: -30 },
        { x: -50, y: 30 },
        { x: 50, y: 30 },
        { x: 0, y: -70 },
        { x: 0, y: 70 },
      ]
    : [
        { x: -120, y: -60 },
        { x: 120, y: -60 },
        { x: -100, y: 80 },
        { x: 100, y: 80 },
        { x: 0, y: -100 },
        { x: 0, y: 100 },
      ];

  const [hoverCount, setHoverCount] = useState(0);

  const [noPosition, setNoPosition] = useState({
    x: 0,
    y: 0,
  });

  const noTexts = [
    "🥺 No",
    "Really?",
    "Think Again?",
    "Please?",
    "Pretty Please?",
    "❤️",
    "Okay Okay 😂",
  ];

  const handleNoInteraction = () => {
    setHoverCount((prev) => {
      if (prev < positions.length) {
        setNoPosition(positions[prev]);
      }

      return prev + 1;
    });
  };

  const currentText = noTexts[Math.min(hoverCount, noTexts.length - 1)];

  return (
    <div
      className="
        min-h-screen
        bg-gradient-to-br
        from-pink-600
        via-purple-700
        to-pink-800
        flex
        items-center
        justify-center
        px-6
        overflow-hidden
      "
    >
      <div className="text-center">
        {/* Animated Heart */}
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
          }}
          className="mb-10"
        >
          <div
            className="
              text-[120px]
              md:text-[180px]
            "
          >
            ❤️
          </div>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{
            opacity: 0,
            y: 40,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          className="
            text-white
            text-4xl
            md:text-6xl
            font-bold
            mb-12
          "
        >
          Will You Be
          <br />
          My Girlfriend?
        </motion.h1>

        {/* Buttons */}
        <div
          className="
            relative
            flex
            justify-center
            items-center
            gap-6
            min-h-[180px]
          "
        >
          {/* YES Button */}
          <motion.button
            whileHover={{
              scale: 1.1,
            }}
            whileTap={{
              scale: 0.95,
            }}
            onClick={onYes}
            className="
              px-8
              py-4
              rounded-full
              bg-pink-500
              hover:bg-pink-400
              text-white
              font-bold
              text-xl
              shadow-xl
              cursor-pointer
              z-20
            "
          >
            ❤️ YES
          </motion.button>

          {/* NO Button */}
          <motion.button
            animate={{
              x: noPosition.x,
              y: noPosition.y,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 12,
            }}
            onMouseEnter={handleNoInteraction}
            onTouchStart={handleNoInteraction}
            whileTap={{
              scale: 0.9,
            }}
            className="
              px-8
              py-4
              rounded-full
              bg-white
              text-pink-600
              font-bold
              text-xl
              shadow-xl
              select-none
              touch-manipulation
              z-10
            "
          >
            {currentText}
          </motion.button>
        </div>
      </div>
    </div>
  );
}
