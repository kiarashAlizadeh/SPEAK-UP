/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ['Poppins'],
      },
      colors: {
        primary: 'rgba(37, 99, 235, 1)',
        'dark-primary': '#123276',
      },
    },
  },
  plugins: [],
};
