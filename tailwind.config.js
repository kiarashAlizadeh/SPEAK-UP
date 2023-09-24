/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ["Poppins"],
      },
      colors: {
        primary: "rgb(37, 150, 190)",
        "dark-primary": "#123276",
      },
    },
  },
  plugins: [],
}
