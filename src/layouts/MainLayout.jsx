// src/layouts/MainLayout.jsx
import FloatingHearts from "../components/ui/FloatingHearts";
import Sparkles from "../components/effects/Sparkles";

export default function MainLayout({
  children,
}) {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <FloatingHearts />
      <Sparkles />

      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}