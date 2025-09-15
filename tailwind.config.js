/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",      // all files in app/
    "./components/**/*.{js,jsx,ts,tsx}" // all files in components/
  ],
  presets: [require("nativewind/preset")], // ← required for NativeWind
  theme: {
    extend: {
      fontFamily: {
        rmono: ["Roboto-Mono", 'sans-serif'], // make sure font name matches the .ttf
      },
    },
  },
  plugins: [],
};