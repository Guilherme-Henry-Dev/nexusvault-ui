/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#0B132B", 
        secondary: "#1C2541", 
        accent: "#5BC0BE", 
        highlight: "#3A506B", 
        text: "#E0E1DD", 
        danger: "#EF476F", 
        success: "#06D6A0", 
      },
      boxShadow: {
        glow: "0 0 15px rgba(91, 192, 190, 0.6)", 
      },
      fontFamily: {
        orbitron: ["Orbitron", "sans-serif"], 
        inter: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        "grid-pattern":
          "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 0)",
      },
      animation: {
        fadeIn: "fadeIn 1s ease-in-out",
      },
      keyframes: {
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
}