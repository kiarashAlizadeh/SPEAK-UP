/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ["Poppins"],
      },
      colors: {
        primary: "#0065F4",
        "dark-primary": "#123276",
      },
    },
  },
  plugins: [],
}
