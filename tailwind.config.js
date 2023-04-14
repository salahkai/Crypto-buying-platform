/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Inter var', ...defaultTheme.fontFamily.sans],
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      backgroundImage: {
        'hero-pattern': "url('images/Hero/pattern.png')",
        'wave-picture': "url('images/Hero/wave.svg')",
      },
      colors: {
        violet: 'rgb(167 139 250)', //violet-400
        darkViolet: 'rgb(109 40 217)', //violet-700
        brighterViolet: 'rgb(124 58 237)', //violet-600
        brightGray: 'rgb(229 231 235)', //gray-200
        darkGray: 'rgb(156 163 175)', //gray-400
        veryDarkGray: 'rgb(75 85 99)', //gray-600
        maxDarkGray: 'rgb(17 24 39)', //gray-900
        Gray: 'rgb(107 114 128)', //gray-500
      },
    },
  },
  plugins: [],
};
