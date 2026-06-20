// src/screens/ClueThree.jsx
import QuestionCard from "../components/ui/QuestionCard";
import { clues } from "../data/clues";

export default function ClueThree({ onSuccess }) {
  return (
    <div
      className="
        min-h-screen
        flex
        items-center
        justify-center
        bg-gradient-to-br
        from-pink-600
        via-purple-600
        to-indigo-600
        px-5
      "
    >
      <QuestionCard
        title="Unsaid Truth 📸"
        question="What have I never said but always felt?"
        correctAnswer={clues.clueThree.answer}
        options={clues.clueThree.options}
        successMessage="Some feelings don’t need words ❤️"
        onSuccess={onSuccess}
      />
    </div>
  );
}
