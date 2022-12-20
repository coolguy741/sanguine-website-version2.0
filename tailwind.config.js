/** @type {import('tailwindcss').Config} */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        wave: {
          "0%": { transform: "translateX(1000px)", opacity: "0" },
          "100%": { transform: "translateX(0px)", opacity: "1" },
        },
      },
      animation: {
        "waving-hand": "wave 2s linear",
      },
    },
  },
  plugins: [],
};
