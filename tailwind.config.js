// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "sans-serif"],
        display: ["Changa", "sans-serif"], // Dodanie czcionki Changa jako fontFamily.display
      },
      colors: {
        primary: "#b30000", // Czerwony kolor DEStruktury
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
  ],
};