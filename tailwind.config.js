/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary" : "#221B27",
        "accent" : "#492A60",
        "crystal-accent" : "#FF5146"
      }
    },
  },
  plugins: [],
}