// src/screens/LandingScreen.jsx
import Button from "../components/ui/Button";
import TypeWriterText from "../components/ui/TypewriterText";
import FloatingHearts from "../components/ui/FloatingHearts";

export default function LandingScreen({
  onStart,
}) {
  return (
    <div
      className="
      relative
      min-h-screen
      flex
      flex-col
      justify-center
      items-center
      bg-gradient-to-br
      from-pink-500
      via-purple-500
      to-pink-700
      overflow-hidden
    "
    >
      <FloatingHearts />

      <TypeWriterText
        text="I have a small adventure for you ❤️"
      />

      <div className="mt-10">
        <Button onClick={onStart}>
          Begin Journey
        </Button>
      </div>
    </div>
  );
}