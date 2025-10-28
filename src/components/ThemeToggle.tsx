import { useContext } from "react";
import  ThemeContext  from "../contexts/ThemeContext";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const { darkMode, toggleTheme } = useContext(ThemeContext);
  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg border border-white/10 hover:bg-white/5 transition"
      title={darkMode ? "Modo claro" : "Modo escuro"}
    >
      {darkMode ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}

