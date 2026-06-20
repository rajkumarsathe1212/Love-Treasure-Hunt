// src/screens/ClueOne.jsx
import QuestionCard from "../components/ui/QuestionCard";
import { clues } from "../data/clues";

export default function ClueOne({ onSuccess }) {
  return (
    <div
      className="
        min-h-screen
        flex
        items-center
        justify-center
        bg-gradient-to-br
        from-pink-500
        via-purple-500
        to-pink-700
        px-5
      "
    >
      <QuestionCard
        title="First Feeling ❤️"
        question="What do I feel when I talk to you?"
        correctAnswer={clues.clueOne.answer}
        options={clues.clueOne.options}
        successMessage="You already know what I feel ❤️"
        onSuccess={onSuccess}
      />
    </div>
  );
}
