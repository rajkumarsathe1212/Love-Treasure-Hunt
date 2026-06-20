// src/components/effects/MusicPlayer.jsx
import { useRef, useState } from "react";

export default function MusicPlayer() {
  const audioRef = useRef(null);

  const [playing, setPlaying] =
    useState(false);

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }

    setPlaying(!playing);
  };

  return (
    <>
      <audio
        ref={audioRef}
        loop
        src="/music/surili_akhiyo_wale.mp3"
      />

      <button
        onClick={toggleMusic}
        className="
          fixed
          top-5
          right-5
          z-50
          px-4
          py-2
          rounded-full
          bg-white/20
          backdrop-blur
          text-white
        "
      >
        {playing
          ? "🔇 Music Off"
          : "🎵 Music On"}
      </button>
    </>
  );
}