"use client";
import { useTheme } from "@/context/ThemeProvider";

export default function Home() {
  const { mode, setMode } = useTheme();

  const toggleTheme = () => {
    const newMode = mode === "dark" ? "light" : "dark";
    setMode(newMode);
  };

  return (
    <>
      <button
        onClick={toggleTheme}
        className="rounded flex-bg-primary-500 px-4 py-2 text-white transition hover:bg-primary-100"
      >
        {mode === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </button>
      <div className="h1-bold">we are coming</div>
    </>
  );
}