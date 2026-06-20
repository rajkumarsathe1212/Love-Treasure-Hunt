// src/components/ui/ResetJourneyButton.jsx
export default function ResetJourneyButton() {
  const reset = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <button
      onClick={reset}
      className="
        fixed
        bottom-5
        right-5
        z-50
        bg-white/20
        backdrop-blur-md
        px-4
        py-2
        rounded-full
        text-white
      "
    >
      🔄 Restart
    </button>
  );
}