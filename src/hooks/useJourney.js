// src/hooks/useJourney.js
import { useEffect, useState } from "react";

export const SCREENS = {
  LANDING: "landing",
  CLUE_ONE: "clueOne",
  CLUE_TWO: "clueTwo",
  CLUE_THREE: "clueThree",
  PUZZLE: "puzzle",
  LETTER: "letter",
  PROPOSAL: "proposal",
  DATE_PICKER: "datePicker",
  SUCCESS: "success",
};

export default function useJourney() {
  const [currentScreen, setCurrentScreen] =
    useState(() => {
      return (
        localStorage.getItem(
          "journey-screen"
        ) || SCREENS.LANDING
      );
    });

  useEffect(() => {
    localStorage.setItem(
      "journey-screen",
      currentScreen
    );
  }, [currentScreen]);

  return {
    currentScreen,
    goToScreen:
      setCurrentScreen,
  };
}