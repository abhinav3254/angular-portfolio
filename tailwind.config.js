/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#00ADB5",
        "secondary": "#393E46",
        "third_black": "#222831",
        "fourth_white": "#EEEEEE"
      }
    },
  },
  plugins: [],
}