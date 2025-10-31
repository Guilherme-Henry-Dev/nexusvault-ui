/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        'hero-gaming': "url('/src/assets/bg/background-home.png')",
        'add-gaming': "url('/src/assets/bg/background-addgame.png')",
        'dashboard-gaming': "url('/src/assets/bg/background-dashboard.png')",
      },
      colors: {
        primary: "#7B2FF7",
        secondary: "#1C2541",
        accent: "#5BC0BE",
        highlight: "#3A506B",
        text: "#E0E1DD",
        danger: "#EF476F",
        success: "#06D6A0",

        light: {
          background: "#F5F7FA",
          surface: "#FFFFFF",
          text: "#1A202C",
          border: "#CBD5E0",
          primary: "#7B2FF7",
          accent: "#5BC0BE",
        },

        dark: {
          background: "#0B132B",
          surface: "#1C2541",
          text: "#E0E1DD",
          border: "#2D3748",
          primary: "#7B2FF7",
          accent: "#5BC0BE",
        },
      },

      boxShadow: {
        glow: "0 0 15px rgba(123, 47, 247, 0.6)",
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
  plugins: [

    function ({ addVariant }) {
      addVariant("light", ".light &");
      addVariant("dark", ".dark &");
    },
  ],
};
