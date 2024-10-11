import { useTheme } from "@/context/ThemeProvider";

const Navbar = () => {
  const { mode, setMode } = useTheme();

  const toggleTheme = () => {
    const newMode = mode === "dark" ? "light" : "dark";
    setMode(newMode);
  };

  return (
    <button
      onClick={toggleTheme}
      className="rounded   bg-primary-500 px-4 py-2 text-white transition hover:bg-primary-100"
    >
      {mode === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
    </button>
  );
};

export default Navbar;