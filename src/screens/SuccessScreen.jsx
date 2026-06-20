// src/screens/SuccessScreen.jsx

import { useEffect, useState } from "react";

import Confetti from "react-confetti";
import { useWindowSize } from "@uidotdev/usehooks";

export default function SuccessScreen() {
  const { width, height } = useWindowSize();

  const savedDate = localStorage.getItem("first-date");

  const firstDate = savedDate ? new Date(savedDate) : null;

  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    if (!firstDate) return;

    const interval = setInterval(() => {
      const now = new Date();

      const diff = firstDate - now;

      if (diff <= 0) {
        setTimeLeft("The day is here ❤️");
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));

      const hours = Math.floor(
        (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );

      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeLeft(
        `${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds`,
      );
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const restartJourney = () => {
    localStorage.removeItem("journey-screen");

    window.location.reload();
  };

  return (
    <div
      className="
        relative
        min-h-screen
        bg-gradient-to-br
        from-pink-500
        via-rose-500
        to-purple-600
        flex
        items-center
        justify-center
        text-center
        px-6
        overflow-hidden
      "
    >
      <Confetti width={width} height={height} recycle />

      <div className="z-10">
        <div
          className="
            text-[120px]
            animate-bounce
            mb-6
          "
        >
          ❤️
        </div>

        <h1
          className="
            text-white
            text-4xl
            md:text-6xl
            font-bold
            mb-6
          "
        >
          You Just Made Me
          <br />
          The Happiest Person ❤️
        </h1>

        <p
          className="
            text-white/90
            text-xl
            md:text-2xl
            mb-8
          "
        >
          Our Story Begins Here
        </p>

        <div
          className="
            bg-white/10
            backdrop-blur-md
            rounded-2xl
            p-6
            text-white
            max-w-xl
            mx-auto
            mb-8
          "
        >
          <h2 className="text-2xl font-bold mb-3">First Date Countdown ❤️</h2>

          <>
            <p className="text-lg mb-3">{savedDate}</p>

            <p className="text-lg">{timeLeft}</p>
          </>
        </div>

        <button
          onClick={restartJourney}
          className="
            px-6
            py-3
            bg-white
            text-pink-600
            rounded-full
            font-semibold
            cursor-pointer
          "
        >
          Restart Journey
        </button>
      </div>
    </div>
  );
}
