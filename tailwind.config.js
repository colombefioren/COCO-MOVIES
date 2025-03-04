/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./screen/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        lexend: ["lexend", "sans-serif"],
        lexendBold: ["lexendBold", "sans-serif"],
        lexendSemi: ["lexendSemi", "sans-serif"],
        lexendRegular: ["lexendRegular"],
      },
      colors: {
        primary: "#1B2431",
        primaryLight: "rgba(225, 229, 235, 0.07)",
        secondary: "#0688F3",
        secondaryTrans: "#0688F333",
        tertiary: "#EF9730",
      }
    },
  },
  plugins: [],
};
