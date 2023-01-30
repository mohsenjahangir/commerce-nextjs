/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth:{
        '1200':'1200px'
      },
      
      margin: {
        '30': '120px',
      },
      colors:{
        'F7':'#F7F7F7',
        
      },
      width:{
        '1200':'1200px',
        '1440':'1440px',
        '902':'902px',
        '865':'865px',
        '399':'399px',
        '555':'555px',
        '282':'282px',
        '274':'274px',
        '888':'888px',
      },
      height:{
        '155':'155px',
        '368':'368px',
        '373':'373px',
      }

    },
  },
  plugins: [],
}