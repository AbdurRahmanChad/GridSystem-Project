/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: "#8873eF",
        headingTextColor: "#081e21",
        smallTextColor: "#193256",
      }
    },
  },
  plugins: [],
}