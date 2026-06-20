// src/components/ui/TypeWriterText.jsx
import { Typewriter } from "react-simple-typewriter";

export default function TypeWriterText({
  text,
}) {
  return (
    <h1 className="text-3xl md:text-5xl font-bold text-white text-center">
      <Typewriter
        words={[text]}
        loop={1}
        cursor
        typeSpeed={60}
        deleteSpeed={0}
      />
    </h1>
  );
}