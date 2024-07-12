/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
   "/data/data/com.termux/files/home/routing-page/src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  colors: {
      'white': 'white',
      'blue': '#1fb6ff',
      'pink': 'pink',
      'red':'red',
      'tomato':'tomato',
      'yellow':'yellow',
      'black':'#000',
      'orange': '#ff7849',
      'green': '#13ce66',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: { 
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
      '1xl':'1rem',
        '4xl': '2rem',
      },
      minHeight:{
        "50":"50rem",
      },
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      },
    },
  },
  plugins: [],
}