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
      backgroundColor:{
        'favorite1': "#152235",
        'favorite2':"#161d30"
      },
      height:{
        'screen-1':'100vh'
      },
      colors:{
        'primary':'rgba(0, 0, 0, 0.7)',
        'favorite_white':'rgba(255,255,255,0.1)'
      },
      backgroundSize:{
        'size':'100% 90%'
      },
      borderWidth:{
        '1px':'1px'
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