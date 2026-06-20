// src/screens/ClueTwo.jsx
import QuestionCard from "../components/ui/QuestionCard";
import { clues } from "../data/clues";

export default function ClueTwo({ onSuccess }) {
  return (
    <div
      className="
        min-h-screen
        flex
        items-center
        justify-center
        bg-gradient-to-br
        from-purple-500
        via-pink-500
        to-rose-600
        px-5
      "
    >
      <QuestionCard
        title="The Effect ✨"
        question="What did you slowly become to me?"
        correctAnswer={clues.clueTwo.answer}
        options={clues.clueTwo.options}
        successMessage="You make everything feel different ❤️"
        onSuccess={onSuccess}
      />
    </div>
  );
}
