/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['"Roboto Slab"', 'serif'],
        kumbh: ['"Kumbh Sans"', 'sans-serif'],
        space: ['"Space Mono"', 'monospace'],
      },
      screens: {
        'mobile': '768px',
        'desktop': '1440px',
      },
      boxShadow: {
        'shadow': '50px 50px 100px 0 #121530, -50px -50px 100px 0 #272c5a',
      },
      colors: {
        backgrounds:{
          'bg-color': '#1e213f',
          'oval-bg': '#161932',
          'ovalGradient': 'linear-gradient(315deg, #2e325a, #0e112a)',
        },
        modeColors: {
          'color1': '#f87070',
          'color2': '#70f3f8',
          'color3': '#D881F8',
        },

        textColors:{
          'gray': '#D7E0FF',
          'darkGray': '#1e213f'
        },
      },
    },
  },
  plugins: [],
}

