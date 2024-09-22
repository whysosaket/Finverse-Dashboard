/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        p1: '#edededed',
        p2: '#50505050',
        p3: '#151D6Eff',
      },
      fontFamily: {
        inter: ["Inter", "system-ui"],
        gowun: ["Gowun Dodum", "sans-serif"],
        // nasa: ["Nasa", "sans-serif"],
      },
    },
  },
  plugins: [],
}