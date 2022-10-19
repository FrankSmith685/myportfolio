/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      backgroundImage: {
      'hero-pattern': "url('images/banner.jpeg')",
    },
      height:{
        'screen-1':'92.1vh'
      },
      colors:{
        'primary':'rgba(0, 0, 0, 0.7)'
      },
      backgroundSize:{
        'size':'100% 90%'
      },
      keyframes: {
        wiggle: {
          'from':{left: '-96px'}, 
          'to': { left: '0px' },
          // '50%': { left: '0px' },
        }
      },
      animation: {
        'wiggle': 'wiggle 2s ease ',
      },
      padding:{
        'max-tp':'700px'
      }
  },
  },
  plugins: [],
}