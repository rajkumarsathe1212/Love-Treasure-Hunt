// src/screens/DatePickerScreen.jsx
import { useState } from "react";

export default function DatePickerScreen({
  onDateSelected,
}) {
  const [selectedDate, setSelectedDate] =
    useState("");

  const handleContinue = () => {
    if (!selectedDate) return;

    localStorage.setItem(
      "first-date",
      selectedDate
    );

    onDateSelected();
  };

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
        px-6
      "
    >
      <div
        className="
          bg-white/10
          backdrop-blur-md
          rounded-3xl
          p-8
          max-w-lg
          w-full
          text-center
          text-white
        "
      >
        <div className="text-7xl mb-4">
          📅
        </div>

        <h1 className="text-4xl font-bold mb-4">
          Our First Date ❤️
        </h1>

        <p className="mb-8 text-white/80">
          So when shall we meet?
        </p>

        <input
          type="date"
          value={selectedDate}
          min={
            new Date()
              .toISOString()
              .split("T")[0]
          }
          onChange={(e) =>
            setSelectedDate(
              e.target.value
            )
          }
          className="
            w-full
            p-4
            rounded-xl
            text-gray-800
            bg-white
          "
        />

        <button
          disabled={!selectedDate}
          onClick={handleContinue}
          className="
            mt-6
            w-full
            py-3
            rounded-xl
            bg-pink-500
            text-white
            font-bold
            disabled:opacity-50
          "
        >
          Save Our Date ❤️
        </button>
      </div>
    </div>
  );
}