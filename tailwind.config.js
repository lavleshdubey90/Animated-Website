/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      fontFamily: {
        urbanist: ['Urbanist', 'sans-serif'],
      },
      fontWeight: {
        '100': 100,
        '300': 300,
        '400': 400,
        '500': 500,
        '700': 700,
      },

      animation:{
        "infinite-text": "infinite-text 24s linear infinite"
      }
    },
  },
}


