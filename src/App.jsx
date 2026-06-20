import { useEffect, useState } from "react";
import LoadingScreen from "./screens/LoadingScreen";
import ResetJourneyButton from "./components/ui/ResetJourneyButton";
import DatePickerScreen from "./screens/DatePickerScreen";

import LandingScreen from "./screens/LandingScreen";
import ClueOne from "./screens/ClueOne";
import ClueTwo from "./screens/ClueTwo";
import ClueThree from "./screens/ClueThree";
import PuzzleScreen from "./screens/PuzzleScreen";
import LetterScreen from "./screens/LetterScreen";
import ProposalScreen from "./screens/ProposalScreen";
import SuccessScreen from "./screens/SuccessScreen";

import MusicPlayer from "./components/effects/MusicPlayer";

import { AnimatePresence, motion } from "framer-motion";

import useJourney, { SCREENS } from "./hooks/useJourney";

export default function App() {
  const { currentScreen, goToScreen } = useJourney();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  let screenContent;

  switch (currentScreen) {
    case SCREENS.LANDING:
      screenContent = (
        <LandingScreen onStart={() => goToScreen(SCREENS.CLUE_ONE)} />
      );
      break;

    case SCREENS.CLUE_ONE:
      screenContent = (
        <ClueOne onSuccess={() => goToScreen(SCREENS.CLUE_TWO)} />
      );
      break;

    case SCREENS.CLUE_TWO:
      screenContent = (
        <ClueTwo onSuccess={() => goToScreen(SCREENS.CLUE_THREE)} />
      );
      break;

    case SCREENS.CLUE_THREE:
      screenContent = (
        <ClueThree onSuccess={() => goToScreen(SCREENS.PUZZLE)} />
      );
      break;

    case SCREENS.PUZZLE:
      screenContent = (
        <PuzzleScreen onSuccess={() => goToScreen(SCREENS.LETTER)} />
      );
      break;

    case SCREENS.LETTER:
      screenContent = (
        <LetterScreen onContinue={() => goToScreen(SCREENS.PROPOSAL)} />
      );
      break;

    case SCREENS.PROPOSAL:
      screenContent = (
        <ProposalScreen onYes={() => goToScreen(SCREENS.DATE_PICKER)} />
      );
      break;

    case SCREENS.DATE_PICKER:
      screenContent = (
        <DatePickerScreen onDateSelected={() => goToScreen(SCREENS.SUCCESS)} />
      );
      break;

    case SCREENS.SUCCESS:
      screenContent = <SuccessScreen />;
      break;

    default:
      screenContent = (
        <div className="min-h-screen flex items-center justify-center text-3xl">
          Coming Soon ❤️
        </div>
      );
  }

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <>
      <MusicPlayer />
      <ResetJourneyButton />

      <AnimatePresence mode="wait">
        <motion.div
          key={currentScreen}
          initial={{
            opacity: 0,
            scale: 0.98,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            scale: 1.02,
          }}
          transition={{
            duration: 0.4,
          }}
        >
          {screenContent}
        </motion.div>
      </AnimatePresence>

      <div
        className="
        fixed
        bottom-3
        left-1/2
        -translate-x-1/2
        text-white/70
        text-xs
        md:text-sm
        z-50
        pointer-events-none
      "
      >
        Made with ❤️ by Raj
      </div>
    </>
  );
}
