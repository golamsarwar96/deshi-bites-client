/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "serif"],
      },
      colors: {
        footColor1: "#033b3b",
        footColor2: "#032a3b",
      },
    },
  },
  plugins: [require("daisyui")],
};
