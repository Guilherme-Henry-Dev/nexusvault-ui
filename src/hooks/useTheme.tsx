import { useEffect, useState } from "react"

export function useTheme() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark")

  useEffect(() => {
    document.documentElement.classList.remove("dark", "light")
    document.documentElement.classList.add(theme)
    localStorage.setItem("theme", theme)
  }, [theme])

  return { theme, toggle: () => setTheme(theme === "dark" ? "light" : "dark") }
}
